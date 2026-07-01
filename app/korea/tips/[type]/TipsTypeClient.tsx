"use client";

import { useEffect, useState } from "react";
import TIPS from "@/data/tips";
import { slugify } from "@/lib/tips-utils";
import TipsSearch from "@/components/TipsSearch";

const TYPE_META: Record<string, { emoji: string; label: string; sub: string }> = {
  traveler: { emoji: "✈️", label: "Traveler",      sub: "Short-term visit" },
  nomad:    { emoji: "💻", label: "Digital Nomad", sub: "Working remotely" },
  student:  { emoji: "🎓", label: "Student",       sub: "Living in Korea" },
};

export default function TipsTypeClient({ type }: { type: string }) {
  const sections = TIPS[type] ?? [];
  const meta = TYPE_META[type];
  const [activeSection, setActiveSection] = useState(sections[0]?.title ?? null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!hash) return;
    const match = sections.find((s) => slugify(s.title) === hash);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from the URL hash, a browser-only source outside React
    if (match) setActiveSection(match.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectSection = (title: string) => {
    setActiveSection(title);
    window.history.replaceState(null, "", `#${slugify(title)}`);
  };

  if (!meta || sections.length === 0) {
    return <div className="max-w-2xl mx-auto px-6 py-16 text-center" style={{ color: "var(--gray)" }}>Not found.</div>;
  }

  const activeS = sections.find((s) => s.title === activeSection);
  const activeTips = activeS?.tips ?? [];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
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
      <p className="text-sm mb-6" style={{ color: "var(--gray)", opacity: 0.55 }}>{meta.sub}</p>

      <TipsSearch />

      <div className="flex gap-8 items-start">
        {/* Sidebar — desktop only */}
        <aside className="hidden md:flex flex-col gap-1 w-48 flex-shrink-0 sticky top-8">
          {sections.map((s) => (
            <button
              key={s.title}
              onClick={() => selectSection(s.title)}
              className="text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                backgroundColor: activeSection === s.title ? "#fffbeb" : "transparent",
                color: activeSection === s.title ? "var(--amber)" : "var(--gray)",
                borderLeft: activeSection === s.title ? "3px solid var(--amber)" : "3px solid transparent",
              }}
            >
              {s.icon} {s.title}
            </button>
          ))}
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Mobile hamburger */}
          <div className="relative mb-6 md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-full flex items-center justify-between px-5 py-3 rounded-xl border-2 font-semibold text-sm"
              style={{ borderColor: "var(--amber)", backgroundColor: "#fffbeb", color: "var(--gray)" }}
            >
              <span>{activeS?.icon} {activeS?.title}</span>
              <span style={{ fontSize: 18, opacity: 0.6 }}>{menuOpen ? "✕" : "☰"}</span>
            </button>
            {menuOpen && (
              <div
                className="absolute left-0 right-0 mt-1 rounded-xl border shadow-lg z-10 overflow-hidden"
                style={{ borderColor: "#e5e7eb", backgroundColor: "white" }}
              >
                {sections.map((s) => (
                  <button
                    key={s.title}
                    onClick={() => { selectSection(s.title); setMenuOpen(false); }}
                    className="w-full text-left px-5 py-3 text-sm font-semibold transition-all hover:bg-amber-50"
                    style={{
                      color: activeSection === s.title ? "var(--amber)" : "var(--gray)",
                      borderBottom: "1px solid #f3f4f6",
                    }}
                  >
                    {s.icon} {s.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Section title on desktop */}
          <h2 className="hidden md:block text-lg font-bold mb-4" style={{ color: "var(--gray)" }}>
            {activeS?.icon} {activeS?.title}
          </h2>

          {/* Q list */}
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
        </div>
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
