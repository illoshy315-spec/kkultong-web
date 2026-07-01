import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TIPS from "@/data/tips";
import { slugify } from "@/lib/tips-utils";
import TipDetailClient from "./TipDetailClient";

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: tip.q,
      text: tip.q,
      answerCount: 1,
      acceptedAnswer: {
        "@type": "Answer",
        text: tip.a,
        url: `https://kkultongkorea.com/korea/tips/${type}/${slug}`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TipDetailClient
        type={type}
        slug={slug}
        sections={sections}
        tip={tip}
        section={section}
        prev={prev}
        next={next}
      />
    </>
  );
}
