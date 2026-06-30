"use client";

import { useState, useMemo } from "react";
import scholarships from "@/data/scholarships.json";

type Scholarship = {
  id: string;
  name_en: string;
  name_ko: string;
  category: "government" | "university" | "regional" | "private";
  visa_types: string[];
  provider: string;
  amount: string;
  last_verified: string;
};

const CATEGORY_OPTIONS = [
  { key: "all",        label: "All",        color: "var(--gray)" },
  { key: "government", label: "Government", color: "#1565c0" },
  { key: "university", label: "University", color: "#00796b" },
  { key: "regional",   label: "Regional",   color: "#c62828" },
];

const VISA_OPTIONS = [
  { key: "all", label: "All Visas" },
  { key: "D-2", label: "D-2 (Student)" },
  { key: "D-4", label: "D-4 (Language)" },
];

const CATEGORY_BADGE: Record<string, { bg: string; color: string }> = {
  government: { bg: "#e3f2fd", color: "#1565c0" },
  university:  { bg: "#e0f2f1", color: "#00796b" },
  regional:    { bg: "#fce4ec", color: "#c62828" },
  private:     { bg: "#f3e5f5", color: "#6a1b9a" },
};

export default function ScholarshipsListClient() {
  const [category, setCategory] = useState("all");
  const [visa, setVisa] = useState("all");

  const filtered = useMemo(() => {
    return (scholarships as Scholarship[]).filter((s) => {
      if (category !== "all" && s.category !== category) return false;
      if (visa !== "all" && !s.visa_types.includes(visa)) return false;
      return true;
    });
  }, [category, visa]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--gray)", opacity: 0.5 }}>
          <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a>
          <span>→</span>
          <span>Scholarships</span>
        </div>
        <h1 className="text-4xl font-black mb-3" style={{ color: "var(--gray)" }}>
          Scholarships for<br />
          <span style={{ color: "var(--teal)" }}>International Students</span>
        </h1>
        <p className="text-base" style={{ color: "var(--gray)", opacity: 0.65 }}>
          {(scholarships as Scholarship[]).length} programs verified as of 2025–2026.
          Deadlines and amounts change annually — always confirm via the official link.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <div className="flex gap-1 flex-wrap">
          {CATEGORY_OPTIONS.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className="px-3 py-1.5 rounded-full text-xs font-bold border transition-all"
              style={{
                borderColor: category === c.key ? c.color : "#e5e7eb",
                backgroundColor: category === c.key ? c.color : "white",
                color: category === c.key ? "white" : "var(--gray)",
                opacity: category === c.key ? 1 : 0.65,
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex gap-1 flex-wrap ml-auto">
          {VISA_OPTIONS.map((v) => (
            <button
              key={v.key}
              onClick={() => setVisa(v.key)}
              className="px-3 py-1.5 rounded-full text-xs font-bold border transition-all"
              style={{
                borderColor: visa === v.key ? "var(--amber)" : "#e5e7eb",
                backgroundColor: visa === v.key ? "var(--amber)" : "white",
                color: visa === v.key ? "white" : "var(--gray)",
                opacity: visa === v.key ? 1 : 0.65,
              }}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs mb-4" style={{ color: "var(--gray)", opacity: 0.45 }}>
        Showing {filtered.length} program{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* List */}
      <div className="flex flex-col gap-3">
        {filtered.map((s) => {
          const badge = CATEGORY_BADGE[s.category] ?? CATEGORY_BADGE.private;
          return (
            <a
              key={s.id}
              href={`/korea/student/scholarships/${s.id}`}
              className="rounded-2xl border px-5 py-4 transition-all hover:border-teal-400 hover:shadow-sm"
              style={{ borderColor: "#e5e7eb", textDecoration: "none", backgroundColor: "white" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: badge.bg, color: badge.color }}>
                      {s.category}
                    </span>
                    {s.visa_types.map((v) => (
                      <span key={v} className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#f3f4f6", color: "var(--gray)" }}>
                        {v}
                      </span>
                    ))}
                  </div>
                  <p className="font-bold text-sm leading-snug" style={{ color: "var(--gray)" }}>{s.name_en}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.5 }}>{s.name_ko} · {s.provider}</p>
                  <p className="text-xs mt-2 font-semibold" style={{ color: "var(--teal)" }}>
                    💰 {s.amount.length > 80 ? s.amount.slice(0, 80) + "…" : s.amount}
                  </p>
                </div>
                <span className="text-xl flex-shrink-0 mt-1" style={{ color: "var(--gray)", opacity: 0.3 }}>›</span>
              </div>
            </a>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: "var(--gray)", opacity: 0.4 }}>
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm font-semibold">No programs match this filter</p>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 rounded-2xl p-5 border" style={{ borderColor: "#e5e7eb", backgroundColor: "#f9fafb" }}>
        <p className="text-xs font-bold mb-2" style={{ color: "var(--gray)" }}>⚠️ Always verify before applying</p>
        <p className="text-xs leading-relaxed" style={{ color: "var(--gray)", opacity: 0.65 }}>
          Scholarship amounts, deadlines, and eligibility criteria change every year.
          Always confirm current details via the official links before submitting your application.
        </p>
      </div>
    </div>
  );
}
