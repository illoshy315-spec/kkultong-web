"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import TIPS from "@/data/tips";

type UserType = "traveler" | "nomad" | "student" | null;

const OPTIONS = [
  { key: "traveler" as UserType, emoji: "✈️", label: "Traveler", sub: "Short-term visit" },
  { key: "nomad" as UserType, emoji: "💻", label: "Digital Nomad", sub: "Working remotely" },
  { key: "student" as UserType, emoji: "🎓", label: "Student / Long-stay", sub: "Living in Korea" },
];

export default function TipsClient() {
  const searchParams = useSearchParams();
  const [userType, setUserType] = useState<UserType>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const type = searchParams.get("type") as UserType;
    if (type && ["traveler", "nomad", "student"].includes(type)) {
      setUserType(type);
    }
  }, [searchParams]);

  useEffect(() => {
    if (userType) setActiveSection(null);
  }, [userType]);

  const tips = userType ? TIPS[userType] : [];
  const activeSectionData = tips.find((s) => s.title === activeSection) ?? tips[0] ?? null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Breadcrumb + type switcher */}
      <div className="flex items-center gap-2 flex-wrap mb-10 text-sm" style={{ color: "var(--gray)" }}>
        <a href="/korea" style={{ opacity: 0.5, textDecoration: "underline" }}>Korea Guide</a>
        <span style={{ opacity: 0.3 }}>→</span>
        <span style={{ opacity: 0.5 }}>Survival Tips</span>
        <span style={{ opacity: 0.3 }}>→</span>
        {OPTIONS.map((o, i) => (
          <span key={o.key} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {i > 0 && <span style={{ opacity: 0.3 }}>·</span>}
            <button
              onClick={() => setUserType(o.key)}
              className="font-semibold transition-all"
              style={{
                color: userType === o.key ? "var(--amber)" : "var(--gray)",
                opacity: userType === o.key ? 1 : 0.45,
                textDecoration: userType === o.key ? "underline" : "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {o.emoji} {o.label}
            </button>
          </span>
        ))}
      </div>

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "var(--gray)" }}>
          {userType ? `${OPTIONS.find(o => o.key === userType)?.emoji} ${OPTIONS.find(o => o.key === userType)?.label} Guide` : "Korea Survival Tips"}
        </h1>
        <p className="text-base" style={{ color: "var(--gray)", opacity: 0.6 }}>
          {userType
            ? OPTIONS.find(o => o.key === userType)?.sub + " — tips that actually apply to you."
            : "Select your type above to get started."}
        </p>
      </div>

      {/* Tips */}
      {userType ? (
        <div>
          {/* Section tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tips.map((section) => {
              const isActive = (activeSection ?? tips[0]?.title) === section.title;
              return (
                <button
                  key={section.title}
                  onClick={() => setActiveSection(section.title)}
                  className="px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all"
                  style={{
                    borderColor: isActive ? "var(--amber)" : "#e5e7eb",
                    backgroundColor: isActive ? "var(--amber)" : "white",
                    color: isActive ? "white" : "var(--gray)",
                  }}
                >
                  {section.icon} {section.title}
                </button>
              );
            })}
          </div>

          {/* Active section Q&A */}
          {activeSectionData && (
            <div className="space-y-3">
              {activeSectionData.tips.map((tip) => (
                <details
                  key={tip.q}
                  className="rounded-xl border overflow-hidden"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <summary
                    className="px-5 py-4 font-semibold text-sm cursor-pointer select-none hover:bg-gray-50"
                    style={{ color: "var(--gray)" }}
                  >
                    {tip.q}
                  </summary>
                  <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "var(--gray)", backgroundColor: "#fafafa" }}>
                    <p style={{ whiteSpace: "pre-line" }}>{tip.a}</p>
                    {tip.source && (
                      <a
                        href={tip.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-xs font-semibold"
                        style={{ color: "var(--teal)", textDecoration: "none" }}
                      >
                        ↗ {tip.source.label}
                      </a>
                    )}
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-sm py-8" style={{ color: "var(--gray)", opacity: 0.4 }}>
          Select who you are above ↑
        </p>
      )}

      <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e5e7eb" }}>
        <a href="/korea" className="text-sm font-semibold" style={{ color: "var(--red)" }}>
          ← Back to Korea Guide
        </a>
      </div>
    </div>
  );
}
