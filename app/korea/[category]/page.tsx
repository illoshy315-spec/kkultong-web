import { notFound } from "next/navigation";
import type { Metadata } from "next";
import placesData from "@/data/places.json";
import CategoryPageClient from "@/components/CategoryPageClient";
import { CATEGORY_SLUGS, CATEGORY_META, Place } from "@/lib/types";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_SLUGS).map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORY_SLUGS[category];
  if (!cat) return {};

  const meta = CATEGORY_META[cat];
  const url = `https://kkultongkorea.com/korea/${category}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "Kkultong Korea",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORY_SLUGS[category];

  if (!cat) notFound();

  const places = (placesData as Place[]).filter((p) => p.category === cat);

  return <CategoryPageClient category={cat} places={places} />;
}
