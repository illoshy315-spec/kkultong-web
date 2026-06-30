"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import TIPS from "@/data/tips";
import { slugify } from "@/lib/tips-utils";

const TYPE_META: Record<string, { emoji: string; label: string; sub: string }> = {
  traveler: { emoji: "✈️", label: "Traveler",      sub: "Short-term visit" },
  nomad:    { emoji: "💻", label: "Digital Nomad", sub: "Working remotely" },
  student:  { emoji: "🎓", label: "Student",       sub: "Living in Korea" },
};

export default function TipsTypePage() {
  const params = useParams();
  const type = params.type as string;
  const sections = TIPS[type] ?? [];
  const meta = TYPE_META[type];
  const [activeSection, setActiveSection] = useState(sections[0]?.title ?? null);

  if (!meta || sections.length === 0) {
    return <div className="max-w-2xl mx-auto px-6 py-16 text-center" style={{ color: "var(--gray)" }}>Not found.</div>;
  }

  const activeTips = sections.find((s) => s.title === activeSection)?.tips ?? [];

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8 flex-wrap" style={{ color: "var(--gray)", opacity: 0.5 }}>
        <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a>
        <span>→</span>
        <a href="/korea/tips" style={{ textDecoration: "underline" }}>Survival Tips</a>
        <span>→</span>
        <span>{meta.emoji} {meta.label}</span>
      </div>

      <h1 className="text-3xl font-black mb-1" style={{ color: "var(--gray)" }}>
        {meta.emoji} {meta.label} Guide
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--gray)", opacity: 0.55 }}>{meta.sub}</p>

      {/* Section chips — horizontal scroll on mobile */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {sections.map((s) => (
          <button
            key={s.title}
            onClick={() => setActiveSection(s.title)}
            className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all"
            style={{
              borderColor: activeSection === s.title ? "var(--amber)" : "#e5e7eb",
              backgroundColor: activeSection === s.title ? "var(--amber)" : "white",
              color: activeSection === s.title ? "white" : "var(--gray)",
            }}
          >
            {s.icon} {s.title}
          </button>
        ))}
      </div>

      {/* Q list — links to individual pages */}
      <div className="flex flex-col gap-2">
        {activeTips.map((tip) => (
          <a
            key={tip.q}
            href={`/korea/tips/${type}/${slugify(tip.q)}`}
            className="rounded-xl border px-5 py-4 text-sm font-semibold flex items-center justify-between gap-3 transition-all hover:border-amber-300 hover:bg-amber-50"
            style={{ borderColor: "#e5e7eb", color: "var(--gray)", textDecoration: "none" }}
          >
            <span>{tip.q}</span>
            <span style={{ opacity: 0.3, flexShrink: 0 }}>›</span>
          </a>
        ))}
      </div>

      {/* Type switcher */}
      <div className="mt-12 pt-6 border-t flex gap-3 flex-wrap" style={{ borderColor: "#e5e7eb" }}>
        {Object.entries(TYPE_META).map(([key, m]) => (
          <a
            key={key}
            href={`/korea/tips/${key}`}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
            style={{
              borderColor: key === type ? "var(--amber)" : "#e5e7eb",
              backgroundColor: key === type ? "#fffbeb" : "white",
              color: "var(--gray)",
              textDecoration: "none",
            }}
          >
            {m.emoji} {m.label}
          </a>
        ))}
      </div>
    </div>
  );
}
