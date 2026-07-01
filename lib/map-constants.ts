// Shared with scripts/validate-data.mjs — keep in sync so route `area` values
// that don't match a key here get caught at build time instead of silently
// falling back to the Seoul map center.
export const AREA_CENTERS: Record<string, { lat: number; lng: number; zoom: number }> = {
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
export function resolveAreaCenter(area: string): { lat: number; lng: number; zoom: number } | null {
  for (const key of Object.keys(AREA_CENTERS)) {
    if (new RegExp(`\\b${key}\\b`, "i").test(area)) {
      return AREA_CENTERS[key];
    }
  }
  return null;
}
