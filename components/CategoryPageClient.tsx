"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Place, CATEGORY_META, SLUG_TO_CATEGORY } from "@/lib/types";
import { useAuth } from "@/lib/auth-context";
import { createClient } from "@/lib/supabase";

const KoreaMap = dynamic(() => import("@/components/KoreaMap"), { ssr: false });

function HeartButton({ placeId }: { placeId: string }) {
  const { user, signInWithGoogle } = useAuth();
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    const supabase = createClient();
    supabase
      .from("saved_places")
      .select("id")
      .eq("user_id", user.id)
      .eq("place_id", placeId)
      .maybeSingle()
      .then(({ data }) => setSaved(!!data));
  }, [user, placeId]);

  const toggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) { signInWithGoogle(); return; }
    setLoading(true);
    const supabase = createClient();
    if (saved) {
      await supabase.from("saved_places").delete().eq("user_id", user.id).eq("place_id", placeId);
      setSaved(false);
    } else {
      await supabase.from("saved_places").insert({ user_id: user.id, place_id: placeId });
      setSaved(true);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className="text-lg transition-transform hover:scale-110 disabled:opacity-40"
      title={saved ? "Remove from saved" : "Save this place"}
    >
      {saved ? "❤️" : "🤍"}
    </button>
  );
}

function PlaceCard({ place }: { place: Place }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border overflow-hidden cursor-pointer"
      style={{ borderColor: "#e5e7eb" }}
      onClick={() => setOpen(!open)}
    >
      <div className="px-5 py-4 flex items-start justify-between hover:bg-gray-50">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm" style={{ color: "var(--gray)" }}>{place.name_en}</p>
          {place.name_ko && (
            <p className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.5 }}>{place.name_ko}</p>
          )}
          <p className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.6 }}>{place.area}</p>
          {place.scene && (
            <p className="text-xs mt-1" style={{ color: "#1565c0", fontStyle: "italic" }}>🎬 {place.scene}</p>
          )}
          {place.dramas && place.dramas.length > 0 && (
            <p className="text-xs mt-1" style={{ color: "#666" }}>📺 {place.dramas.join(", ")}</p>
          )}
          {place.artists && place.artists.length > 0 && (
            <p className="text-xs mt-1" style={{ color: "#c62828" }}>🎤 {place.artists.join(", ")}</p>
          )}
        </div>
        <div className="flex gap-2 items-center ml-4 shrink-0">
          {place.english_available && (
            <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: "#e8f5e9", color: "#2e7d32" }}>EN ✓</span>
          )}
          {place.foreign_card && (
            <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: "#e3f2fd", color: "#1565c0" }}>Card ✓</span>
          )}
          <HeartButton placeId={place.id} />
          <span className="text-gray-400 text-sm">{open ? "▲" : "▼"}</span>
        </div>
      </div>
      {open && (
        <div className="px-5 pb-4 text-sm space-y-2" style={{ backgroundColor: "#fafafa", color: "var(--gray)" }}>
          <p style={{ lineHeight: "1.7" }}>{place.tip}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-xs" style={{ opacity: 0.7 }}>
            <span>💰 {place.price_range}</span>
            {place.reservation_required && <span>📅 Reservation required</span>}
            {place.instagram && <span>📸 {place.instagram}</span>}
            {place.address && <span>📍 {place.address}</span>}
            <span>✅ Verified {place.last_verified}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {place.lat && place.lng && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name_en + " " + (place.address ?? ""))}&query_place_id=`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-block text-xs font-semibold px-3 py-1.5 rounded-lg text-white"
                style={{ backgroundColor: "var(--teal)", textDecoration: "none" }}
              >
                Open in Google Maps →
              </a>
            )}
            <a
              href={`/korea/${SLUG_TO_CATEGORY[place.category] ?? ""}/${place.id}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-block text-xs font-semibold px-3 py-1.5 rounded-lg border"
              style={{ borderColor: "var(--teal)", color: "var(--teal)", textDecoration: "none" }}
            >
              Full details →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

type Props = {
  category: string;
  places: Place[];
};

export default function CategoryPageClient({ category, places }: Props) {
  const meta = CATEGORY_META[category];
  const [selected, setSelected] = useState<Place | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <p className="text-sm mb-6" style={{ color: "var(--gray)", opacity: 0.5 }}>
        <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a> → {meta.label}
      </p>

      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: meta.color }}>
          {meta.emoji} {meta.label}
        </p>
        <h1 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--gray)" }}>
          {meta.title.split("—")[0].trim()}
        </h1>
        <p className="text-base" style={{ color: "var(--gray)", opacity: 0.7, lineHeight: "1.7" }}>
          {meta.description}
        </p>
      </div>

      {/* Place count */}
      <p className="text-sm mb-4 font-semibold" style={{ color: "var(--gray)", opacity: 0.5 }}>
        {places.length} verified {places.length === 1 ? "place" : "places"}
      </p>

      {/* Place cards */}
      <div className="space-y-3">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
        {places.length === 0 && (
          <div className="text-center py-16" style={{ color: "var(--gray)", opacity: 0.4 }}>
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-sm">Content coming soon — we verify everything before publishing.</p>
          </div>
        )}
      </div>

      {/* Map */}
      {places.length > 0 && (
        <div className="mt-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gray)", opacity: 0.4 }}>
            🗺️ View on map
          </p>
          <KoreaMap
            places={places}
            allPlaces={places}
            activeCategory={category}
            activeRoute={null}
          />
        </div>
      )}

      {/* Back link */}
      <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e5e7eb" }}>
        <a
          href="/korea"
          className="text-sm font-semibold"
          style={{ color: "var(--red)", textDecoration: "none" }}
        >
          ← Back to Korea Guide
        </a>
      </div>
    </div>
  );
}
