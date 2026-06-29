"use client";

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";
import { useState } from "react";

type Place = {
  id: string;
  name_en: string;
  category: string;
  area: string;
  address: string;
  lat: number;
  lng: number;
  english_available: boolean | null;
  foreign_card: boolean | null;
  reservation_required: boolean;
  price_range: string;
  tip: string;
  instagram: string | null;
  last_verified: string;
};

const CATEGORY_COLORS: Record<string, { bg: string; border: string; glyph: string }> = {
  personal_color: { bg: "#f3e5f5", border: "#9c27b0", glyph: "🎨" },
  halal:          { bg: "#e8f5e9", border: "#2e7d32", glyph: "🕌" },
  vegan:          { bg: "#f1f8e9", border: "#558b2f", glyph: "🌱" },
  kpop_pilgrimage:{ bg: "#fce4ec", border: "#c62828", glyph: "🎤" },
  drama_location: { bg: "#e3f2fd", border: "#1565c0", glyph: "🎬" },
  photo_booth:    { bg: "#fff8e1", border: "#f9a825", glyph: "📸" },
};

const CATEGORY_LABELS: Record<string, string> = {
  personal_color:  "Personal Color",
  halal:           "Halal",
  vegan:           "Vegan",
  kpop_pilgrimage: "K-Pop",
  drama_location:  "Drama",
  photo_booth:     "Photo Booth",
};

type Props = {
  places: Place[];
  activeCategory: string | null;
};

export default function KoreaMap({ places, activeCategory }: Props) {
  const [selected, setSelected] = useState<Place | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

  const filtered = activeCategory
    ? places.filter((p) => p.category === activeCategory)
    : places;

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ width: "100%", height: "480px", borderRadius: "16px", overflow: "hidden" }}>
        <Map
          defaultCenter={{ lat: 37.5326, lng: 126.99 }}
          defaultZoom={11}
          mapId="kkultong-map"
          gestureHandling="greedy"
          disableDefaultUI={false}
        >
          {filtered.map((place) => {
            const colors = CATEGORY_COLORS[place.category] ?? { bg: "#fff", border: "#EF9F27", glyph: "📍" };
            return (
              <AdvancedMarker
                key={place.id}
                position={{ lat: place.lat, lng: place.lng }}
                onClick={() => setSelected(place)}
              >
                <Pin
                  background={colors.bg}
                  borderColor={colors.border}
                  glyphColor={colors.border}
                  scale={selected?.id === place.id ? 1.3 : 1}
                />
              </AdvancedMarker>
            );
          })}

          {selected && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
              pixelOffset={[0, -40]}
            >
              <div style={{ maxWidth: "240px", fontFamily: "Inter, sans-serif" }}>
                <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "4px", color: "#2C2C2A" }}>
                  {selected.name_en}
                </p>
                <p style={{ fontSize: "12px", color: "#666", marginBottom: "6px" }}>
                  {CATEGORY_LABELS[selected.category]} · {selected.area}
                </p>
                <p style={{ fontSize: "12px", color: "#2C2C2A", marginBottom: "8px", lineHeight: "1.5" }}>
                  {selected.tip}
                </p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "11px", color: "#555" }}>💰 {selected.price_range}</span>
                  {selected.english_available && (
                    <span style={{ fontSize: "11px", background: "#e8f5e9", color: "#2e7d32", padding: "1px 6px", borderRadius: "99px" }}>EN ✓</span>
                  )}
                  {selected.foreign_card && (
                    <span style={{ fontSize: "11px", background: "#e3f2fd", color: "#1565c0", padding: "1px 6px", borderRadius: "99px" }}>Card ✓</span>
                  )}
                </div>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
