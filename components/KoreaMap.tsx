"use client";

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, Polyline, useMap } from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useRef, useState } from "react";
import { MarkerClusterer, type Marker } from "@googlemaps/markerclusterer";

type Place = {
  id: string;
  name_en: string;
  name_ko?: string;
  category: string;
  area: string;
  address?: string;
  lat: number;
  lng: number;
  english_available: boolean | null;
  foreign_card: boolean | null;
  reservation_required: boolean;
  price_range: string;
  tip: string;
  instagram?: string | null;
  last_verified: string;
  scene?: string;
  dramas?: string[];
  artists?: string[];
};

type Route = {
  id: string;
  title: string;
  title_ko: string;
  drama?: string | null;
  artists?: string[];
  duration: string;
  area: string;
  transport: string;
  place_ids: string[];
  tip: string;
  order_note: string;
  sequential?: boolean;
};

const CATEGORY_COLORS: Record<string, { bg: string; border: string }> = {
  personal_color:    { bg: "#f3e5f5", border: "#9c27b0" },
  halal:             { bg: "#e8f5e9", border: "#2e7d32" },
  vegan:             { bg: "#f1f8e9", border: "#558b2f" },
  kpop_pilgrimage:   { bg: "#fce4ec", border: "#c62828" },
  drama_location:    { bg: "#e3f2fd", border: "#1565c0" },
  photo_booth:       { bg: "#fff8e1", border: "#f9a825" },
  culinary_class_wars: { bg: "#fff3e0", border: "#e65100" },
};

const CATEGORY_LABELS: Record<string, string> = {
  personal_color:    "Personal Color",
  halal:             "Halal",
  vegan:             "Vegan",
  kpop_pilgrimage:   "K-Pop",
  drama_location:    "Drama",
  photo_booth:       "Photo Booth",
  culinary_class_wars: "Culinary Class Wars",
};

type Props = {
  places: Place[];
  allPlaces?: Place[];
  activeCategory: string | null;
  activeRoute?: Route | null;
};

const AREA_CENTERS: Record<string, { lat: number; lng: number; zoom: number }> = {
  Jeju:    { lat: 33.4, lng: 126.75, zoom: 10 },
  Gangneung: { lat: 37.79, lng: 128.89, zoom: 12 },
  Suwon:   { lat: 37.28, lng: 127.01, zoom: 13 },
  Busan:   { lat: 35.16, lng: 129.07, zoom: 12 },
  Seoul:   { lat: 37.5326, lng: 126.99, zoom: 11 },
};

// Groups nearby pins into a single cluster marker at low zoom — used when browsing
// a whole category (many pins). Route mode skips this since it needs numbered,
// always-visible stops in a fixed order.
function ClusteredPlaceMarkers({
  places,
  selected,
  onSelect,
}: {
  places: Place[];
  selected: Place | null;
  onSelect: (place: Place) => void;
}) {
  const map = useMap();
  const clusterer = useRef<MarkerClusterer | null>(null);
  const [markers, setMarkers] = useState<Record<string, Marker>>({});

  useEffect(() => {
    if (!map || clusterer.current) return;
    clusterer.current = new MarkerClusterer({ map });
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = useCallback((marker: Marker | null, key: string) => {
    setMarkers((prev) => {
      if ((marker && prev[key]) || (!marker && !prev[key])) return prev;
      if (marker) return { ...prev, [key]: marker };
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  return (
    <>
      {places.map((place) => (
        <ClusterMarkerItem
          key={place.id}
          place={place}
          isSelected={selected?.id === place.id}
          onSelect={onSelect}
          setMarkerRef={setMarkerRef}
        />
      ))}
    </>
  );
}

// Split out so each marker's ref callback has a stable identity (keyed on place.id) —
// an inline `ref={(m) => ...}` closure is recreated every render, which makes React
// treat it as a *new* ref function each time and re-fire it, causing an update loop
// when it feeds back into setMarkers().
function ClusterMarkerItem({
  place,
  isSelected,
  onSelect,
  setMarkerRef,
}: {
  place: Place;
  isSelected: boolean;
  onSelect: (place: Place) => void;
  setMarkerRef: (marker: Marker | null, key: string) => void;
}) {
  const colors = CATEGORY_COLORS[place.category] ?? { bg: "#fff", border: "#EF9F27" };
  const ref = useCallback((marker: Marker | null) => setMarkerRef(marker, place.id), [setMarkerRef, place.id]);

  return (
    <AdvancedMarker
      position={{ lat: place.lat, lng: place.lng }}
      onClick={() => onSelect(place)}
      ref={ref}
    >
      <Pin
        background={colors.bg}
        borderColor={colors.border}
        glyphColor={colors.border}
        scale={isSelected ? 1.3 : 1}
      />
    </AdvancedMarker>
  );
}

export default function KoreaMap({ places, allPlaces, activeCategory, activeRoute }: Props) {
  const [selected, setSelected] = useState<Place | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

  const routePlaces: Place[] = activeRoute && allPlaces
    ? activeRoute.place_ids
        .map((id) => allPlaces.find((p) => p.id === id))
        .filter((p): p is Place => !!p)
    : [];

  const displayPlaces = activeRoute ? routePlaces : places;

  const mapCenter = activeRoute
    ? AREA_CENTERS[activeRoute.area.split(",")[0].trim()] ?? AREA_CENTERS.Seoul
    : AREA_CENTERS.Seoul;

  const routePath = routePlaces.map((p) => ({ lat: p.lat, lng: p.lng }));

  return (
    <APIProvider apiKey={apiKey}>
      <div className="w-full h-72 md:h-[480px] rounded-2xl overflow-hidden">
        <Map
          key={activeRoute?.id ?? activeCategory ?? "default"}
          defaultCenter={mapCenter}
          defaultZoom={mapCenter.zoom}
          mapId="kkultong-map"
          gestureHandling="cooperative"
          disableDefaultUI={false}
        >
          {/* Route path line — only for routes where stops are visited in this order.
              Alternative-style routes (e.g. "pick one restaurant") skip this so the
              map doesn't imply a walking path between mutually-exclusive options. */}
          {activeRoute && activeRoute.sequential !== false && routePath.length > 1 && (
            <Polyline
              path={routePath}
              strokeColor="#EF9F27"
              strokeWeight={3}
              strokeOpacity={0.8}
            />
          )}

          {activeRoute ? (
            activeRoute.sequential !== false ? (
              displayPlaces.map((place, idx) => {
                const routeNumber = idx + 1;
                return (
                  <AdvancedMarker
                    key={place.id}
                    position={{ lat: place.lat, lng: place.lng }}
                    onClick={() => setSelected(place)}
                  >
                    <div style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "#EF9F27",
                      border: "2px solid white",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transform: selected?.id === place.id ? "scale(1.3)" : "scale(1)",
                      transition: "transform 0.15s",
                    }}>
                      {routeNumber}
                    </div>
                  </AdvancedMarker>
                );
              })
            ) : (
              displayPlaces.map((place) => (
                <AdvancedMarker
                  key={place.id}
                  position={{ lat: place.lat, lng: place.lng }}
                  onClick={() => setSelected(place)}
                >
                  <Pin
                    background="#fff3e0"
                    borderColor="#EF9F27"
                    glyphColor="#EF9F27"
                    scale={selected?.id === place.id ? 1.3 : 1}
                  />
                </AdvancedMarker>
              ))
            )
          ) : (
            <ClusteredPlaceMarkers places={displayPlaces} selected={selected} onSelect={setSelected} />
          )}

          {selected && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
              pixelOffset={[0, -40]}
            >
              <div style={{ maxWidth: "260px", fontFamily: "Inter, sans-serif" }}>
                <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "2px", color: "#2C2C2A" }}>
                  {selected.name_en}
                </p>
                {selected.name_ko && (
                  <p style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>{selected.name_ko}</p>
                )}
                <p style={{ fontSize: "12px", color: "#666", marginBottom: "6px" }}>
                  {CATEGORY_LABELS[selected.category] ?? selected.category} · {selected.area}
                </p>
                {selected.scene && (
                  <p style={{ fontSize: "11px", color: "#1565c0", marginBottom: "6px", fontStyle: "italic" }}>
                    🎬 {selected.scene}
                  </p>
                )}
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
