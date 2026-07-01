"use client";

import { useMemo, useState } from "react";
import TIPS from "@/data/tips";
import { slugify } from "@/lib/tips-utils";

const TYPE_META: Record<string, { emoji: string; label: string }> = {
  traveler: { emoji: "✈️", label: "Traveler" },
  nomad: { emoji: "💻", label: "Digital Nomad" },
  student: { emoji: "🎓", label: "Student" },
};

type Result = { type: string; sectionTitle: string; sectionIcon: string; q: string };

export default function TipsSearch({ placeholder = "Search all tips — e.g. gosiwon, ARC, T-money" }: { placeholder?: string }) {
  const [query, setQuery] = useState("");

  const allTips = useMemo(() => {
    const out: (Result & { a: string })[] = [];
    for (const type of Object.keys(TIPS)) {
      for (const section of TIPS[type]) {
        for (const tip of section.tips) {
          out.push({ type, sectionTitle: section.title, sectionIcon: section.icon, q: tip.q, a: tip.a });
        }
      }
    }
    return out;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allTips.filter((t) => t.q.toLowerCase().includes(q) || t.a.toLowerCase().includes(q)).slice(0, 20);
  }, [allTips, query]);

  return (
    <div className="relative mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-5 py-3 rounded-xl border-2 text-sm font-medium outline-none transition-all"
        style={{ borderColor: query ? "var(--amber)" : "#e5e7eb", color: "var(--gray)" }}
      />
      {query.trim() && (
        <div className="mt-2 rounded-xl border overflow-hidden" style={{ borderColor: "#e5e7eb" }}>
          {results.length === 0 ? (
            <div className="px-5 py-4 text-sm" style={{ color: "var(--gray)", opacity: 0.5 }}>
              No results for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.map((r) => {
              const meta = TYPE_META[r.type];
              return (
                <a
                  key={`${r.type}-${r.q}`}
                  href={`/korea/tips/${r.type}/${slugify(r.q)}`}
                  className="flex items-center gap-3 px-5 py-3 text-sm font-semibold transition-all hover:bg-amber-50 border-b"
                  style={{ color: "var(--gray)", textDecoration: "none", borderColor: "#f3f4f6" }}
                >
                  <span
                    className="text-xs shrink-0 px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ backgroundColor: "#fffbeb", color: "var(--amber)" }}
                  >
                    {meta.emoji} {r.sectionIcon} {r.sectionTitle}
                  </span>
                  <span className="flex-1">{r.q}</span>
                </a>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
