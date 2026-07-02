// Plain-JS source of truth — imported directly by scripts/*.mjs (which run under
// plain Node, not Next's TS/webpack pipeline, so they can't rely on native .ts
// import support existing in every Node version). lib/map-constants.ts re-exports
// this with types for the app code. Keep logic here only; add types in the .ts file.
export const AREA_CENTERS = {
  Jeju:      { lat: 33.4, lng: 126.75, zoom: 10 },
  Gangneung: { lat: 37.79, lng: 128.89, zoom: 12 },
  Suwon:     { lat: 37.28, lng: 127.01, zoom: 13 },
  Busan:     { lat: 35.16, lng: 129.07, zoom: 12 },
  Seoul:     { lat: 37.5326, lng: 126.99, zoom: 11 },
};

// A route's `area` field is free text for display (e.g. "Yongsan + Gangnam, Seoul",
// "Various (Seoul)") — so instead of only matching the first comma segment, look for
// any known city name as a whole word anywhere in the string. Returns null if none found,
// so callers can decide how to handle an unresolved area instead of silently defaulting.
export function resolveAreaCenter(area) {
  for (const key of Object.keys(AREA_CENTERS)) {
    if (new RegExp(`\\b${key}\\b`, "i").test(area)) {
      return AREA_CENTERS[key];
    }
  }
  return null;
}
