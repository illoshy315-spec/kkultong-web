"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import placesData from "@/data/places.json";
import routesData from "@/data/routes.json";
import type { Route } from "@/lib/types";

const KoreaMap = dynamic(() => import("@/components/KoreaMap"), { ssr: false });

function splitSentences(text: string): string[] {
  return (text.match(/[^.!?]+[.!?]+\s*/g) ?? [text]).map((s) => s.trim()).filter(Boolean);
}

function parseOrderNote(text: string): { day: string | null; steps: string[] }[] {
  const dayMatches = [...text.matchAll(/Day \d+:/g)];
  if (dayMatches.length === 0) {
    return [{ day: null, steps: text.split("→").map((s) => s.trim()).filter(Boolean) }];
  }
  const parts: { day: string; steps: string[] }[] = [];
  for (let i = 0; i < dayMatches.length; i++) {
    const start = dayMatches[i].index! + dayMatches[i][0].length;
    const end = i + 1 < dayMatches.length ? dayMatches[i + 1].index! : text.length;
    parts.push({
      day: dayMatches[i][0].replace(":", ""),
      steps: text.slice(start, end).trim().split("→").map((s) => s.trim()).filter(Boolean),
    });
  }
  return parts;
}

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
          <div className="mt-3 rounded-xl border p-4 flex flex-col gap-4" style={{ borderColor: "#e5e7eb" }}>
            <div className="flex flex-col gap-2">
              {splitSentences(activeRoute.tip).map((s, i) => (
                <p key={i} className="text-sm" style={{ color: "var(--gray)", lineHeight: "1.7" }}>{s}</p>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-3 border-t" style={{ borderColor: "#f3f4f6" }}>
              {parseOrderNote(activeRoute.order_note).map((block, i) => (
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

const RESOURCE_LINKS = [
  { href: "/korea/student/scholarships", emoji: "🎓", label: "Scholarships", sub: "GKS · University · Regional", color: "#1565c0", bg: "#e3f2fd" },
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
              href={`/korea/tips/${o.key}`}
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

      {/* Resources for Students */}
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: "var(--gray)", opacity: 0.4 }}>
          Student Resources
        </p>
        <div className="grid gap-3">
          {RESOURCE_LINKS.map((r) => (
            <a
              key={r.href}
              href={r.href}
              className="rounded-2xl p-5 flex items-center gap-4 transition-transform hover:scale-[1.01]"
              style={{ backgroundColor: r.bg, textDecoration: "none" }}
            >
              <span className="text-3xl">{r.emoji}</span>
              <div>
                <div className="text-sm font-bold" style={{ color: r.color }}>{r.label}</div>
                <div className="text-xs mt-0.5" style={{ color: r.color, opacity: 0.7 }}>{r.sub}</div>
              </div>
              <span className="ml-auto text-xl" style={{ color: r.color, opacity: 0.5 }}>›</span>
            </a>
          ))}
        </div>
      </div>

      <RouteSection />
    </div>
  );
}
