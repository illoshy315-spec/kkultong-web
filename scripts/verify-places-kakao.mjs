// Cross-checks data/places.json against Kakao Local (키워드 장소 검색) to catch
// hallucinated/closed/mis-addressed entries before they ship. Only checks facts
// Kakao actually has — existence, address, coordinates. Narrative claims (tips,
// scene, verification_notes) are out of scope; that's still web-search territory.
//
// Read-only: writes a report, never edits places.json directly.
//
// Usage: KAKAO_REST_API_KEY=xxx node scripts/verify-places-kakao.mjs [--limit=20]

const API_KEY = process.env.KAKAO_REST_API_KEY;
if (!API_KEY) {
  console.error("Missing KAKAO_REST_API_KEY env var. Set it and re-run:");
  console.error("  $env:KAKAO_REST_API_KEY = \"...\"; node scripts/verify-places-kakao.mjs");
  process.exit(1);
}

const limitArg = process.argv.find((a) => a.startsWith("--limit="));
const LIMIT = limitArg ? parseInt(limitArg.split("=")[1], 10) : Infinity;

const MISMATCH_METERS = 300; // beyond this, flag as address/coordinate mismatch

const { default: places } = await import("../data/places.json", { with: { type: "json" } });

function haversineMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

async function searchKeyword(query) {
  const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(query)}`;
  const res = await fetch(url, { headers: { Authorization: `KakaoAK ${API_KEY}` } });
  if (!res.ok) throw new Error(`Kakao API ${res.status} for query "${query}"`);
  const body = await res.json();
  return body.documents ?? [];
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const report = [];
const targets = places.slice(0, LIMIT);

for (const [i, place] of targets.entries()) {
  const query = place.name_ko || place.name_en;
  let docs = [];
  try {
    docs = await searchKeyword(query);
    if (docs.length === 0 && place.area) {
      // retry with area appended — some name-only searches return unrelated results nationwide
      docs = await searchKeyword(`${query} ${place.area}`);
    }
  } catch (err) {
    report.push({ id: place.id, name_ko: place.name_ko, status: "API_ERROR", detail: err.message });
    await sleep(150);
    continue;
  }

  if (docs.length === 0) {
    report.push({
      id: place.id,
      name_ko: place.name_ko,
      area: place.area,
      status: "NOT_FOUND",
      detail: "No Kakao Maps result for this name — possible hallucination, closure, or name mismatch. Needs manual check.",
    });
    await sleep(150);
    continue;
  }

  // Prefer a result whose place_name actually resembles ours — Kakao's keyword
  // search is full-text, so a query like "두타몰" can return unrelated businesses
  // that merely sit near/inside the same building (e.g. a bank branch), which a
  // pure nearest-distance pick would wrongly accept as a match.
  const withDistance = docs.map((d) => ({
    ...d,
    distance_m: haversineMeters(place.lat, place.lng, parseFloat(d.y), parseFloat(d.x)),
  }));
  const norm = (s) => (s || "").replace(/[^가-힣a-zA-Z0-9]/g, "").toLowerCase();
  const queryNorm = norm(query);
  withDistance.sort((a, b) => a.distance_m - b.distance_m);

  // Tier 1: exact normalized name match (e.g. "두타몰" === "두타몰") — high confidence.
  const exactMatches = withDistance.filter((d) => norm(d.place_name) === queryNorm);
  // Tier 2: substring match — catches minor suffix differences ("한복남 경복궁점" vs
  // "한복남"), but also false-positives on shops named after a building ("두타몰약국"
  // matching "두타몰"), so it's weaker evidence, not proof of the same place.
  const substringMatches = withDistance.filter((d) => {
    const dn = norm(d.place_name);
    return dn !== queryNorm && (dn.includes(queryNorm) || queryNorm.includes(dn));
  });

  const best = exactMatches[0] ?? substringMatches[0] ?? withDistance[0];
  const matchTier = exactMatches[0] ? "exact" : substringMatches[0] ? "substring" : "none";

  const entry = {
    id: place.id,
    name_ko: place.name_ko,
    stored_address: place.address,
    kakao_address: best.road_address_name || best.address_name,
    stored_lat: place.lat,
    stored_lng: place.lng,
    kakao_lat: parseFloat(best.y),
    kakao_lng: parseFloat(best.x),
    distance_m: Math.round(best.distance_m),
    kakao_category: best.category_name,
    kakao_phone: best.phone || null,
    kakao_url: best.place_url || null,
    match_tier: matchTier,
    other_candidates: withDistance.length - 1,
  };

  if (matchTier === "none") {
    entry.status = "NAME_NOT_MATCHED";
    entry.detail = "No Kakao result's place_name resembles ours — closest candidate shown for reference only, do not trust its address/coords as a correction.";
  } else if (matchTier === "substring") {
    entry.status = best.distance_m > MISMATCH_METERS ? "ADDRESS_MISMATCH_WEAK" : "OK_WEAK";
    entry.detail = "Matched by substring only (e.g. a shop named after this building/market) — treat as a hint, verify manually before trusting the address/coords.";
  } else {
    entry.status = best.distance_m > MISMATCH_METERS ? "ADDRESS_MISMATCH" : "OK";
  }
  report.push(entry);

  await sleep(150); // stay well under Kakao's rate limit
  if ((i + 1) % 20 === 0) console.error(`  ...${i + 1}/${targets.length}`);
}

const fs = await import("node:fs");
const outPath = new URL("../data/research/kakao_verification_report.json", import.meta.url);
fs.writeFileSync(outPath, JSON.stringify(report, null, 2) + "\n", "utf8");

const counts = report.reduce((acc, r) => {
  acc[r.status] = (acc[r.status] ?? 0) + 1;
  return acc;
}, {});
console.log(`\nChecked ${report.length} places.`);
console.log(counts);
console.log(`Full report: data/research/kakao_verification_report.json`);
