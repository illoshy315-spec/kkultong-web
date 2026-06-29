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
      <div className="text-center mb-8">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--teal)" }}>
          Recommended Routes
        </p>
        <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "var(--gray)" }}>
          Ready-made itineraries<br />
          <span style={{ color: "var(--teal)" }}>for K-content fans.</span>
        </h2>
        <p className="text-sm" style={{ color: "var(--gray)", opacity: 0.6 }}>
          Pick a route — see every stop on the map.
        </p>
      </div>

      <div className="grid gap-3 mb-6">
        {routes.map((route) => (
          <button
            key={route.id}
            onClick={() => setActiveRoute(activeRoute?.id === route.id ? null : route)}
            className="text-left rounded-2xl border-2 px-5 py-4 transition-all"
            style={{
              borderColor: activeRoute?.id === route.id ? "var(--teal)" : "#e5e7eb",
              backgroundColor: activeRoute?.id === route.id ? "#f0faf6" : "white",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="font-bold text-sm" style={{ color: "var(--gray)" }}>{route.title}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.5 }}>{route.title_ko}</p>
              </div>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: "#e5e7eb", color: "var(--gray)" }}>
                {route.area}
              </span>
            </div>
            <div className="flex gap-4 mt-2 text-xs" style={{ color: "var(--gray)", opacity: 0.6 }}>
              <span>⏱ {route.duration}</span>
              <span>🚌 {route.transport}</span>
            </div>
          </button>
        ))}
      </div>

      {activeRoute && (
        <div className="mb-4">
          <KoreaMap
            places={[]}
            allPlaces={placesData as any}
            activeCategory={null}
            activeRoute={activeRoute}
          />
          <div className="mt-4 rounded-2xl border p-5" style={{ borderColor: "#e5e7eb" }}>
            <p className="font-bold text-sm mb-2" style={{ color: "var(--gray)" }}>💡 Route tips</p>
            <p className="text-sm mb-2" style={{ color: "var(--gray)", lineHeight: "1.7" }}>{activeRoute.tip}</p>
            <p className="text-sm" style={{ color: "var(--gray)", lineHeight: "1.7", opacity: 0.7 }}>{activeRoute.order_note}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const CONTENT_LINKS = [
  { slug: "drama",          emoji: "🎬", label: "K-Drama\nFilming Locations", color: "#1565c0", bg: "#e3f2fd" },
  { slug: "kpop",           emoji: "🎤", label: "K-Pop\nPilgrimage",          color: "#c62828", bg: "#fce4ec" },
  { slug: "culinary",       emoji: "🍽️", label: "Culinary\nClass Wars",        color: "#e65100", bg: "#fff3e0" },
  { slug: "personal-color", emoji: "🎨", label: "Personal Color\nDiagnosis",   color: "#9c27b0", bg: "#f3e5f5" },
  { slug: "halal",          emoji: "🕌", label: "Halal\nFood",                 color: "#2e7d32", bg: "#e8f5e9" },
  { slug: "vegan",          emoji: "🌱", label: "Vegan &\nVegetarian",         color: "#558b2f", bg: "#f1f8e9" },
];

const TOOL_LINKS = [
  { href: "/korea/tips",      emoji: "💡", label: "Survival Tips",          sub: "Traveler · Nomad · Student",   color: "var(--amber)", bg: "#FAEEDA" },
  { href: "/korea/transport", emoji: "🗺️", label: "Transit or Rental Car?", sub: "City-by-city guide",           color: "var(--amber)", bg: "#FFF5E0" },
  { href: "/korea/address",   emoji: "📍", label: "Address Translator",     sub: "Korean → English, instant",   color: "var(--teal)",  bg: "#f0faf6" },
];

export default function KoreaPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-14">
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

      {/* K-Content categories */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gray)", opacity: 0.4 }}>
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
              <div className="text-sm font-bold whitespace-pre-line" style={{ color: cat.color }}>
                {cat.label}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gray)", opacity: 0.4 }}>
          Tools & Tips
        </p>
        <div className="grid gap-3">
          {TOOL_LINKS.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="rounded-2xl px-5 py-4 flex items-center gap-4 transition-all hover:scale-[1.01]"
              style={{ backgroundColor: tool.bg, textDecoration: "none" }}
            >
              <span className="text-2xl">{tool.emoji}</span>
              <div>
                <p className="font-bold text-sm" style={{ color: "var(--gray)" }}>{tool.label}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.6 }}>{tool.sub}</p>
              </div>
              <span className="ml-auto text-lg" style={{ color: "var(--gray)", opacity: 0.3 }}>→</span>
            </a>
          ))}
        </div>
      </div>

      {/* Routes */}
      <RouteSection />
    </div>
  );
}
