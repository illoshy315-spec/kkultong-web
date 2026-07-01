// Runs before every build (see package.json). Catches the exact class of bugs
// found by hand while building the K-content routes/places feature:
// dangling place_ids, silently-mismatched map centers, duplicate slugs.
// Fails the build (non-zero exit) instead of shipping broken data.

const errors = [];
const warn = (msg) => errors.push(msg);

const { default: places } = await import("../data/places.json", { with: { type: "json" } });
const { default: routes } = await import("../data/routes.json", { with: { type: "json" } });
const { default: scholarships } = await import("../data/scholarships.json", { with: { type: "json" } });
const { default: festivals } = await import("../data/festivals.json", { with: { type: "json" } });
const { default: TIPS } = await import("../data/tips.ts");
const { CATEGORY_SLUGS } = await import("../lib/types.ts");
const { resolveAreaCenter } = await import("../lib/map-constants.ts");

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 7)
    .join("-");
}

function checkDuplicateIds(items, label) {
  const seen = new Map();
  for (const item of items) {
    if (seen.has(item.id)) {
      warn(`Duplicate ${label} id "${item.id}" — first at index ${seen.get(item.id)}, again at index ${items.indexOf(item)}`);
    } else {
      seen.set(item.id, items.indexOf(item));
    }
  }
}

// --- places.json ---
checkDuplicateIds(places, "place");

const validCategories = new Set(Object.values(CATEGORY_SLUGS));
for (const p of places) {
  if (!validCategories.has(p.category)) {
    warn(`Place "${p.id}" has unknown category "${p.category}" — not in CATEGORY_SLUGS (lib/types.ts). It won't be reachable from any /korea/{category} page.`);
  }
  if (typeof p.lat !== "number" || typeof p.lng !== "number" || p.lat < 33 || p.lat > 39 || p.lng < 124 || p.lng > 132) {
    warn(`Place "${p.id}" has coordinates outside Korea's rough bounding box (lat ${p.lat}, lng ${p.lng}) — likely a typo.`);
  }
}

// --- routes.json ---
checkDuplicateIds(routes, "route");

const placeIds = new Set(places.map((p) => p.id));
for (const r of routes) {
  for (const pid of r.place_ids) {
    if (!placeIds.has(pid)) {
      warn(`Route "${r.id}" references place_id "${pid}" which does not exist in places.json — its map will silently drop that pin.`);
    }
  }
  if (!resolveAreaCenter(r.area)) {
    warn(`Route "${r.id}" has area "${r.area}" which doesn't contain any known city name from AREA_CENTERS (lib/map-constants.ts) — its map will silently center on Seoul instead.`);
  }
}

// --- scholarships.json ---
checkDuplicateIds(scholarships, "scholarship");

// --- festivals.json ---
checkDuplicateIds(festivals, "festival");

for (const f of festivals) {
  if (!Array.isArray(f.months) || f.months.length === 0) {
    warn(`Festival "${f.id}" has no months listed.`);
  } else if (f.months.some((m) => !/^([1-9]|1[0-2])$/.test(String(m)))) {
    warn(`Festival "${f.id}" has a months value outside 1-12: ${JSON.stringify(f.months)}`);
  }
  if (/\b20\d{2}\b/.test(f.description ?? "")) {
    warn(`Festival "${f.id}" description mentions a specific year — festivals should describe recurring timing (month-level), not a single year's dates, since they go stale fast.`);
  }
  if ((f.lat != null) !== (f.lng != null)) {
    warn(`Festival "${f.id}" has only one of lat/lng set — should be both or neither.`);
  }
}

// --- tips.ts: slug collisions within the same persona would silently break routing ---
for (const type of Object.keys(TIPS)) {
  const seenSlugs = new Map();
  for (const section of TIPS[type]) {
    for (const tip of section.tips) {
      const slug = slugify(tip.q);
      if (seenSlugs.has(slug)) {
        warn(`Tips "${type}" has two questions that slugify to the same URL ("${slug}"): "${seenSlugs.get(slug)}" and "${tip.q}"`);
      } else {
        seenSlugs.set(slug, tip.q);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`\n❌ Data validation failed with ${errors.length} issue(s):\n`);
  for (const e of errors) console.error(`  - ${e}`);
  console.error("");
  process.exit(1);
}

console.log(`✅ Data validation passed (${places.length} places, ${routes.length} routes, ${scholarships.length} scholarships, ${festivals.length} festivals).`);
