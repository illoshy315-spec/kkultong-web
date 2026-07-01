"use client";

import dynamic from "next/dynamic";
import placesData from "@/data/places.json";
import type { Place, Route } from "@/lib/types";
import { SLUG_TO_CATEGORY } from "@/lib/types";
import { splitSentences, parseOrderNote } from "@/lib/route-text-utils";
import ShareButton from "@/components/ShareButton";

const KoreaMap = dynamic(() => import("@/components/KoreaMap"), { ssr: false });

export default function RouteDetailClient({ route }: { route: Route }) {
  const stops = route.place_ids
    .map((id) => (placesData as Place[]).find((p) => p.id === id))
    .filter((p): p is Place => !!p);
  const pageUrl = `https://kkultongkorea.com/korea/routes/${route.id}`;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8 flex-wrap" style={{ color: "var(--gray)", opacity: 0.5 }}>
        <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a>
        <span>→</span>
        <span>{route.title}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: "var(--gray)" }}>{route.title}</h1>
      <p className="text-sm mb-1" style={{ color: "var(--gray)", opacity: 0.5 }}>{route.title_ko}</p>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
        <p className="text-sm" style={{ color: "var(--gray)", opacity: 0.6 }}>
          ⏱ {route.duration} · {route.area} · {route.transport}
        </p>
        <ShareButton url={pageUrl} text={`${route.title} — a K-content route via Kkultong Korea`} />
      </div>

      <KoreaMap places={[]} allPlaces={placesData as Place[]} activeCategory={null} activeRoute={route} />

      <div className="mt-3 rounded-xl border p-4 flex flex-col gap-4" style={{ borderColor: "#e5e7eb" }}>
        <div className="flex flex-col gap-2">
          {splitSentences(route.tip).map((s, i) => (
            <p key={i} className="text-sm" style={{ color: "var(--gray)", lineHeight: "1.7" }}>{s}</p>
          ))}
        </div>
        <div className="flex flex-col gap-3 pt-3 border-t" style={{ borderColor: "#f3f4f6" }}>
          {parseOrderNote(route.order_note).map((block, i) => (
            <div key={i}>
              {block.day && (
                <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "var(--amber)" }}>{block.day}</p>
              )}
              <div className="flex flex-wrap items-center gap-1.5">
                {block.steps.map((step, j) => (
                  <span key={j} className="flex items-center gap-1.5">
                    <span className="text-xs px-2.5 py-1.5 rounded-lg" style={{ backgroundColor: "#f9fafb", color: "var(--gray)", opacity: 0.85 }}>{step}</span>
                    {j < block.steps.length - 1 && <span style={{ color: "var(--gray)", opacity: 0.3 }}>→</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stops with links to full place pages */}
      <div className="mt-10">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gray)", opacity: 0.4 }}>
          Stops on this route
        </p>
        <div className="flex flex-col gap-2">
          {stops.map((place, idx) => {
            const categorySlug = SLUG_TO_CATEGORY[place.category] ?? "drama";
            return (
              <a
                key={place.id}
                href={`/korea/${categorySlug}/${place.id}`}
                className="rounded-xl border px-4 py-3 flex items-center gap-3 transition-all hover:border-amber-300 hover:bg-amber-50"
                style={{ borderColor: "#e5e7eb", textDecoration: "none" }}
              >
                {route.sequential !== false && (
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: "#EF9F27" }}
                  >
                    {idx + 1}
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm" style={{ color: "var(--gray)" }}>{place.name_en}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.5 }}>{place.area}</p>
                </div>
                <span style={{ opacity: 0.3, flexShrink: 0 }}>›</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-10 pt-6 border-t" style={{ borderColor: "#e5e7eb" }}>
        <a href="/korea" className="text-sm font-semibold" style={{ color: "var(--teal)", textDecoration: "none" }}>
          ← Back to Korea Guide
        </a>
      </div>
    </div>
  );
}
