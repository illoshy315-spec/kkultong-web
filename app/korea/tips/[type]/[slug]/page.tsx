import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TIPS from "@/data/tips";
import { slugify } from "@/lib/tips-utils";

type Props = { params: Promise<{ type: string; slug: string }> };

const TYPE_META: Record<string, { emoji: string; label: string }> = {
  traveler: { emoji: "✈️", label: "Traveler" },
  nomad:    { emoji: "💻", label: "Digital Nomad" },
  student:  { emoji: "🎓", label: "Student" },
};

function findTip(type: string, slug: string) {
  const sections = TIPS[type] ?? [];
  for (const section of sections) {
    const tip = section.tips.find((t) => slugify(t.q) === slug);
    if (tip) return { tip, section };
  }
  return null;
}

export async function generateStaticParams() {
  const params: { type: string; slug: string }[] = [];
  for (const type of ["traveler", "nomad", "student"]) {
    const sections = TIPS[type] ?? [];
    for (const section of sections) {
      for (const tip of section.tips) {
        params.push({ type, slug: slugify(tip.q) });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, slug } = await params;
  const result = findTip(type, slug);
  if (!result) return {};
  const { tip, section } = result;
  return {
    title: `${tip.q} — Korea Tips | Kkultong Korea`,
    description: tip.a.slice(0, 155),
    alternates: { canonical: `https://kkultongkorea.com/korea/tips/${type}/${slug}` },
    openGraph: {
      title: tip.q,
      description: tip.a.slice(0, 155),
      url: `https://kkultongkorea.com/korea/tips/${type}/${slug}`,
      siteName: "Kkultong Korea",
    },
  };
}

export default async function TipDetailPage({ params }: Props) {
  const { type, slug } = await params;
  const result = findTip(type, slug);
  if (!result) notFound();

  const { tip, section } = result;
  const meta = TYPE_META[type];
  const sections = TIPS[type] ?? [];

  // Find prev/next within same section
  const sectionTips = section.tips;
  const idx = sectionTips.findIndex((t) => slugify(t.q) === slug);
  const prev = sectionTips[idx - 1];
  const next = sectionTips[idx + 1];

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8 flex-wrap" style={{ color: "var(--gray)", opacity: 0.5 }}>
        <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a>
        <span>→</span>
        <a href={`/korea/tips/${type}`} style={{ textDecoration: "underline" }}>{meta?.emoji} {meta?.label}</a>
        <span>→</span>
        <span>{section.icon} {section.title}</span>
      </div>

      {/* Q */}
      <h1 className="text-2xl font-black mb-6 leading-snug" style={{ color: "var(--gray)" }}>
        {tip.q}
      </h1>

      {/* A */}
      <div
        className="rounded-2xl p-6 mb-6 text-sm leading-relaxed"
        style={{ backgroundColor: "#f9fafb", color: "var(--gray)", whiteSpace: "pre-line" }}
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

      {/* Back */}
      <div className="mt-4">
        <a
          href={`/korea/tips/${type}`}
          className="text-sm font-semibold"
          style={{ color: "var(--teal)", textDecoration: "none" }}
        >
          ← Back to {meta?.label} Guide
        </a>
      </div>
    </div>
  );
}
