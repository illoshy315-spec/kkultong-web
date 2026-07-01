import type { Metadata } from "next";
import TipsTypeClient from "./TipsTypeClient";

const TYPE_META: Record<string, { label: string; sub: string; description: string }> = {
  traveler: {
    label: "Traveler",
    sub: "Short-term visit",
    description: "Practical tips for traveling in Korea — transport, accommodation, food, and payments. Everything Google doesn't tell you, in English.",
  },
  nomad: {
    label: "Digital Nomad",
    sub: "Working remotely",
    description: "Practical tips for working remotely in Korea — banking, SIM cards, coworking, visas, and taxes. Everything Google doesn't tell you, in English.",
  },
  student: {
    label: "Student",
    sub: "Living in Korea",
    description: "Practical tips for international students in Korea — ARC, banking, housing, health insurance, and part-time work. Everything Google doesn't tell you, in English.",
  },
};

export function generateStaticParams() {
  return ["traveler", "nomad", "student"].map((type) => ({ type }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const meta = TYPE_META[type];
  if (!meta) return {};
  return {
    title: `${meta.label} Guide — Korea Survival Tips | Kkultong Korea`,
    description: meta.description,
    alternates: { canonical: `https://kkultongkorea.com/korea/tips/${type}` },
    openGraph: {
      title: `${meta.label} Guide — Korea Survival Tips`,
      description: meta.description,
      url: `https://kkultongkorea.com/korea/tips/${type}`,
      siteName: "Kkultong Korea",
    },
  };
}

export default async function TipsTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return <TipsTypeClient type={type} />;
}
