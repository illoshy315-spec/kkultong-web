"use client";

import dynamic from "next/dynamic";
import type { Place } from "@/lib/types";
import { CATEGORY_META } from "@/lib/types";
import { splitSentences } from "@/lib/route-text-utils";

const KoreaMap = dynamic(() => import("@/components/KoreaMap"), { ssr: false });

export default function PlaceDetailClient({
  place,
  categorySlug,
}: {
  place: Place;
  categorySlug: string;
}) {
  const meta = CATEGORY_META[place.category];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8 flex-wrap" style={{ color: "var(--gray)", opacity: 0.5 }}>
        <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a>
        <span>→</span>
        <a href={`/korea/${categorySlug}`} style={{ textDecoration: "underline" }}>{meta?.label ?? place.category}</a>
        <span>→</span>
        <span>{place.name_en}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: "var(--gray)" }}>{place.name_en}</h1>
      {place.name_ko && (
        <p className="text-base mb-1" style={{ color: "var(--gray)", opacity: 0.5 }}>{place.name_ko}</p>
      )}
      <p className="text-sm mb-6" style={{ color: "var(--gray)", opacity: 0.6 }}>
        {meta?.emoji} {meta?.label ?? place.category} · {place.area}
      </p>

      {(place.dramas?.length || place.artists?.length || place.scene) && (
        <div className="mb-6 flex flex-col gap-1">
          {place.dramas && place.dramas.length > 0 && (
            <p className="text-sm" style={{ color: "#1565c0" }}>📺 {place.dramas.join(", ")}</p>
          )}
          {place.artists && place.artists.length > 0 && (
            <p className="text-sm" style={{ color: "#c62828" }}>🎤 {place.artists.join(", ")}</p>
          )}
          {place.scene && (
            <p className="text-sm italic" style={{ color: "var(--gray)", opacity: 0.7 }}>🎬 {place.scene}</p>
          )}
        </div>
      )}

      <div className="rounded-2xl p-6 mb-6 border flex flex-col gap-3" style={{ backgroundColor: "#f5f5f0", borderColor: "#e5e7eb" }}>
        {splitSentences(place.tip).map((s, i) => (
          <p key={i} className="text-sm" style={{ color: "var(--gray)", lineHeight: "1.7" }}>{s}</p>
        ))}
      </div>

      {/* Info badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#fffbeb", color: "var(--amber)" }}>
          💰 {place.price_range}
        </span>
        {place.english_available && (
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#e8f5e9", color: "#2e7d32" }}>English ✓</span>
        )}
        {place.foreign_card && (
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#e3f2fd", color: "#1565c0" }}>Foreign card ✓</span>
        )}
        {place.reservation_required && (
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#fce4ec", color: "#c62828" }}>📅 Reservation required</span>
        )}
        {place.cuisine && (
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#fff3e0", color: "#e65100" }}>{place.cuisine}</span>
        )}
      </div>

      {place.address && (
        <p className="text-sm mb-6" style={{ color: "var(--gray)", opacity: 0.7 }}>📍 {place.address}</p>
      )}

      <KoreaMap places={[place]} activeCategory={place.category} activeRoute={null} />

      {place.verification_notes && (
        <div className="mt-6 rounded-xl border p-4" style={{ borderColor: "#e5e7eb", backgroundColor: "#f9fafb" }}>
          <p className="text-xs font-bold mb-1.5" style={{ color: "var(--gray)", opacity: 0.6 }}>✅ How we verified this</p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--gray)", opacity: 0.75 }}>{place.verification_notes}</p>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
        <p className="text-xs" style={{ color: "var(--gray)", opacity: 0.5 }}>Last verified {place.last_verified}</p>
        {place.instagram && (
          <span className="text-xs" style={{ color: "var(--gray)", opacity: 0.5 }}>📸 {place.instagram}</span>
        )}
      </div>

      {place.source && (
        <div className="mt-4 flex flex-col gap-1">
          {place.source.split(";").map((url, i) => {
            const trimmed = url.trim();
            const href = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
            return (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: "var(--teal)", textDecoration: "none" }}
              >
                ↗ {trimmed}
              </a>
            );
          })}
        </div>
      )}

      <div className="mt-10 pt-6 border-t" style={{ borderColor: "#e5e7eb" }}>
        <a href={`/korea/${categorySlug}`} className="text-sm font-semibold" style={{ color: "var(--teal)", textDecoration: "none" }}>
          ← Back to {meta?.label ?? "category"}
        </a>
      </div>
    </div>
  );
}
