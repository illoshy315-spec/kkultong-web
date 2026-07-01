import type { Metadata } from "next";
import TipsSearch from "@/components/TipsSearch";

export const metadata: Metadata = {
  title: "Korea Survival Tips — For Travelers, Nomads & Students",
  description: "Practical tips for visiting or living in Korea. Transport, banking, SIM cards, accommodation, food, and payments — organized by who you are.",
  alternates: { canonical: "https://kkultongkorea.com/korea/tips" },
  openGraph: {
    title: "Korea Survival Tips — For Travelers, Nomads & Students",
    description: "Everything Google doesn't tell you about living and traveling in Korea. In English.",
    url: "https://kkultongkorea.com/korea/tips",
    siteName: "Kkultong Korea",
  },
};

const OPTIONS = [
  { key: "traveler", emoji: "✈️", label: "Traveler",      sub: "Short-term visit" },
  { key: "nomad",    emoji: "💻", label: "Digital Nomad", sub: "Working remotely" },
  { key: "student",  emoji: "🎓", label: "Student",       sub: "Living in Korea" },
];

export default function TipsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "var(--gray)", opacity: 0.5 }}>
        <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a>
        <span>→</span>
        <span>Survival Tips</span>
      </div>
      <h1 className="text-4xl font-black mb-3" style={{ color: "var(--gray)" }}>Korea Survival Tips</h1>
      <p className="text-base mb-6" style={{ color: "var(--gray)", opacity: 0.6 }}>
        Everything Google doesn&apos;t tell you — organized by who you are.
      </p>
      <TipsSearch />
      <div className="grid gap-4">
        {OPTIONS.map((o) => (
          <a
            key={o.key}
            href={`/korea/tips/${o.key}`}
            className="rounded-2xl border-2 px-6 py-5 flex items-center gap-4 transition-all hover:border-amber-300 hover:bg-amber-50"
            style={{ borderColor: "#e5e7eb", textDecoration: "none" }}
          >
            <span className="text-3xl">{o.emoji}</span>
            <div>
              <div className="font-bold text-sm" style={{ color: "var(--gray)" }}>{o.label}</div>
              <div className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.55 }}>{o.sub}</div>
            </div>
            <span className="ml-auto text-xl" style={{ color: "var(--gray)", opacity: 0.3 }}>›</span>
          </a>
        ))}
      </div>
    </div>
  );
}
