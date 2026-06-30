"use client";

import { useState } from "react";
import { slugify } from "@/lib/tips-utils";

type Tip = { q: string; a: string; source?: { url: string; label: string } };
type TipSection = { title: string; icon: string; tips: Tip[] };

const TYPE_META: Record<string, { emoji: string; label: string }> = {
  traveler: { emoji: "✈️", label: "Traveler" },
  nomad:    { emoji: "💻", label: "Digital Nomad" },
  student:  { emoji: "🎓", label: "Student" },
};

export default function TipDetailClient({
  type,
  slug,
  sections,
  tip,
  section,
  prev,
  next,
}: {
  type: string;
  slug: string;
  sections: TipSection[];
  tip: Tip;
  section: TipSection;
  prev?: Tip;
  next?: Tip;
}) {
  const meta = TYPE_META[type];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8 flex-wrap" style={{ color: "var(--gray)", opacity: 0.5 }}>
        <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a>
        <span>→</span>
        <a href={`/korea/tips/${type}`} style={{ textDecoration: "underline" }}>{meta?.emoji} {meta?.label}</a>
        <span>→</span>
        <span>{section.icon} {section.title}</span>
      </div>

      <div className="flex gap-8 items-start">
        {/* Sidebar — desktop: show current section's Q list */}
        <aside className="hidden md:flex flex-col gap-1 w-56 flex-shrink-0 sticky top-8">
          <div className="text-xs font-bold uppercase tracking-widest mb-2 px-2" style={{ color: "var(--gray)", opacity: 0.4 }}>
            {section.icon} {section.title}
          </div>
          {section.tips.map((t) => {
            const isActive = slugify(t.q) === slug;
            const words = t.q.split(" ");
            const short = words.slice(0, 6).join(" ") + (words.length > 6 ? "…" : "");
            return (
              <a
                key={t.q}
                href={`/korea/tips/${type}/${slugify(t.q)}`}
                className="px-3 py-2 rounded-lg text-xs font-semibold transition-all"
                style={{
                  backgroundColor: isActive ? "#fffbeb" : "transparent",
                  color: isActive ? "var(--amber)" : "var(--gray)",
                  borderLeft: isActive ? "3px solid var(--amber)" : "3px solid transparent",
                  textDecoration: "none",
                  display: "block",
                  opacity: isActive ? 1 : 0.7,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                title={t.q}
              >
                {short}
              </a>
            );
          })}
          <a
            href={`/korea/tips/${type}`}
            className="mt-5 px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-1"
            style={{ color: "var(--teal)", textDecoration: "none", backgroundColor: "#f0faf6" }}
          >
            ← All sections
          </a>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Mobile hamburger */}
          <div className="relative mb-6 md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-full flex items-center justify-between px-5 py-3 rounded-xl border-2 font-semibold text-sm"
              style={{ borderColor: "var(--amber)", backgroundColor: "#fffbeb", color: "var(--gray)" }}
            >
              <span>{section.icon} {section.title}</span>
              <span style={{ fontSize: 18, opacity: 0.6 }}>{menuOpen ? "✕" : "☰"}</span>
            </button>
            {menuOpen && (
              <div
                className="absolute left-0 right-0 mt-1 rounded-xl border shadow-lg z-10 overflow-hidden"
                style={{ borderColor: "#e5e7eb", backgroundColor: "white" }}
              >
                {sections.map((s) => (
                  <a
                    key={s.title}
                    href={`/korea/tips/${type}`}
                    className="w-full text-left px-5 py-3 text-sm font-semibold transition-all hover:bg-amber-50"
                    style={{
                      color: section.title === s.title ? "var(--amber)" : "var(--gray)",
                      borderBottom: "1px solid #f3f4f6",
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    {s.icon} {s.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Q */}
          <h1 className="text-2xl font-black mb-6 leading-snug" style={{ color: "var(--gray)" }}>
            {tip.q}
          </h1>

          {/* A */}
          <div
            className="rounded-2xl p-6 mb-6 text-sm leading-relaxed border"
            style={{ backgroundColor: "#f5f5f0", borderColor: "#e5e7eb", color: "var(--gray)", whiteSpace: "pre-line" }}
          >
            {tip.a}
          </div>

          {/* Source */}
          {tip.source && (
            <a
              href={tip.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold mb-10"
              style={{ color: "var(--teal)", textDecoration: "none" }}
            >
              ↗ {tip.source.label}
            </a>
          )}

          {/* Prev / Next */}
          <div className="flex gap-3 mt-8 pt-6 border-t" style={{ borderColor: "#e5e7eb" }}>
            {prev ? (
              <a
                href={`/korea/tips/${type}/${slugify(prev.q)}`}
                className="flex-1 rounded-xl border px-4 py-3 text-xs"
                style={{ borderColor: "#e5e7eb", color: "var(--gray)", textDecoration: "none" }}
              >
                <div style={{ opacity: 0.4, marginBottom: 4 }}>← Previous</div>
                <div className="font-semibold line-clamp-2">{prev.q}</div>
              </a>
            ) : <div className="flex-1" />}
            {next && (
              <a
                href={`/korea/tips/${type}/${slugify(next.q)}`}
                className="flex-1 rounded-xl border px-4 py-3 text-xs text-right"
                style={{ borderColor: "#e5e7eb", color: "var(--gray)", textDecoration: "none" }}
              >
                <div style={{ opacity: 0.4, marginBottom: 4 }}>Next →</div>
                <div className="font-semibold line-clamp-2">{next.q}</div>
              </a>
            )}
          </div>

          <div className="mt-4 md:hidden">
            <a href={`/korea/tips/${type}`} className="text-sm font-semibold" style={{ color: "var(--teal)", textDecoration: "none" }}>
              ← Back to {meta?.label} Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
