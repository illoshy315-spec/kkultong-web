// Logic lives in map-constants.mjs (plain JS, importable from scripts/*.mjs
// without depending on Node's native TS support). This file just adds types
// for app code.
import { AREA_CENTERS as _AREA_CENTERS, resolveAreaCenter as _resolveAreaCenter } from "./map-constants.mjs";

export const AREA_CENTERS: Record<string, { lat: number; lng: number; zoom: number }> = _AREA_CENTERS;

export function resolveAreaCenter(area: string): { lat: number; lng: number; zoom: number } | null {
  return _resolveAreaCenter(area);
}
