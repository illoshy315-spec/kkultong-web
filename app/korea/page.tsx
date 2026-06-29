"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import placesData from "@/data/places.json";
import routesData from "@/data/routes.json";
import type { Route } from "@/lib/types";

const KoreaMap = dynamic(() => import("@/components/KoreaMap"), { ssr: false });

function RouteSection() {
  const [activeRoute, setActiveRoute] = useState<Route | null>(null);
  const routes = routesData as Route[];
  return (
    <div className="mt-16">
      <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: "var(--gray)", opacity: 0.4 }}>
        Recommended Routes
      </p>
      <div className="grid gap-2 mb-4">
        {routes.map((route) => (
          <button
            key={route.id}
            onClick={() => setActiveRoute(activeRoute?.id === route.id ? null : route)}
            className="text-left rounded-xl border-2 px-4 py-3 transition-all"
            style={{
              borderColor: activeRoute?.id === route.id ? "var(--teal)" : "#e5e7eb",
              backgroundColor: activeRoute?.id === route.id ? "#f0faf6" : "white",
            }}
          >
            <p className="font-bold text-sm" style={{ color: "var(--gray)" }}>{route.title}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.5 }}>
              ⏱ {route.duration} · {route.area}
            </p>
          </button>
        ))}
      </div>
      {activeRoute && (
        <>
          <KoreaMap places={[]} allPlaces={placesData as any} activeCategory={null} activeRoute={activeRoute} />
          <div className="mt-3 rounded-xl border p-4" style={{ borderColor: "#e5e7eb" }}>
            <p className="text-sm" style={{ color: "var(--gray)", lineHeight: "1.7" }}>{activeRoute.tip}</p>
            <p className="text-xs mt-2" style={{ color: "var(--gray)", opacity: 0.6, lineHeight: "1.7" }}>{activeRoute.order_note}</p>
          </div>
        </>
      )}
    </div>
  );
}

const CONTENT_LINKS = [
  { slug: "drama",      emoji: "🎬", label: "K-Drama",      color: "#1565c0", bg: "#e3f2fd" },
  { slug: "kpop",       emoji: "🎤", label: "K-Pop",        color: "#c62828", bg: "#fce4ec" },
  { slug: "beauty",     emoji: "💄", label: "K-Beauty",     color: "#9c27b0", bg: "#f3e5f5" },
  { slug: "food",       emoji: "🍽️", label: "K-Food",       color: "#e65100", bg: "#fff3e0" },
  { slug: "experience", emoji: "💃", label: "K-Experience", color: "#00796b", bg: "#e0f2f1" },
  { slug: "shopping",   emoji: "🛍️", label: "K-Shopping",   color: "#c2185b", bg: "#fce4ec" },
];

const WHO_OPTIONS = [
  { key: "traveler", emoji: "✈️", label: "Traveler",      sub: "Short-term visit" },
  { key: "nomad",    emoji: "💻", label: "Digital Nomad", sub: "Working remotely" },
  { key: "student",  emoji: "🎓", label: "Student",       sub: "Living in Korea" },
];

export default function KoreaPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--amber)" }}>
          Korea Guide
        </p>
        <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--gray)" }}>
          Everything Google<br />
          <span style={{ color: "var(--amber)" }}>doesn&apos;t tell you.</span>
        </h1>
        <p className="text-lg" style={{ color: "var(--gray)", opacity: 0.7 }}>
          K-content travel · Verified spots · Foreigner-friendly tips
        </p>
      </div>

      {/* Who are you? */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: "var(--gray)", opacity: 0.4 }}>
          Who are you?
        </p>
        <div className="grid grid-cols-3 gap-3">
          {WHO_OPTIONS.map((o) => (
            <a
              key={o.key}
              href={`/korea/tips?type=${o.key}`}
              className="rounded-2xl p-4 text-center border-2 transition-all hover:scale-105"
              style={{ borderColor: "#e5e7eb", backgroundColor: "white", textDecoration: "none" }}
            >
              <div className="text-3xl mb-2">{o.emoji}</div>
              <div className="font-bold text-sm" style={{ color: "var(--gray)" }}>{o.label}</div>
              <div className="text-xs mt-1" style={{ color: "var(--gray)", opacity: 0.6 }}>{o.sub}</div>
            </a>
          ))}
        </div>
      </div>

      {/* Browse by K-Content */}
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: "var(--gray)", opacity: 0.4 }}>
          Browse by K-Content
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {CONTENT_LINKS.map((cat) => (
            <a
              key={cat.slug}
              href={`/korea/${cat.slug}`}
              className="rounded-2xl p-5 text-center transition-transform hover:scale-105"
              style={{ backgroundColor: cat.bg, textDecoration: "none" }}
            >
              <div className="text-3xl mb-2">{cat.emoji}</div>
              <div className="text-sm font-bold" style={{ color: cat.color }}>
                {cat.label}
              </div>
            </a>
          ))}
        </div>
      </div>

      <RouteSection />
    </div>
  );
}
