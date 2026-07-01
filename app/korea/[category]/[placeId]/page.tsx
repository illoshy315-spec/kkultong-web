import { notFound } from "next/navigation";
import type { Metadata } from "next";
import placesData from "@/data/places.json";
import { CATEGORY_SLUGS, CATEGORY_META, type Place } from "@/lib/types";
import PlaceDetailClient from "@/components/PlaceDetailClient";

type Props = { params: Promise<{ category: string; placeId: string }> };

function findPlace(category: string, placeId: string): Place | undefined {
  const cat = CATEGORY_SLUGS[category];
  if (!cat) return undefined;
  return (placesData as Place[]).find((p) => p.category === cat && p.id === placeId);
}

export async function generateStaticParams() {
  const params: { category: string; placeId: string }[] = [];
  for (const [slug, cat] of Object.entries(CATEGORY_SLUGS)) {
    for (const place of placesData as Place[]) {
      if (place.category === cat) {
        params.push({ category: slug, placeId: place.id });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, placeId } = await params;
  const place = findPlace(category, placeId);
  if (!place) return {};
  const meta = CATEGORY_META[place.category];
  const title = `${place.name_en} — ${meta?.label ?? "Korea Guide"} | Kkultong Korea`;
  const description = place.tip.slice(0, 155);
  return {
    title,
    description,
    alternates: { canonical: `https://kkultongkorea.com/korea/${category}/${placeId}` },
    openGraph: {
      title: place.name_en,
      description,
      url: `https://kkultongkorea.com/korea/${category}/${placeId}`,
      siteName: "Kkultong Korea",
    },
  };
}

export default async function PlaceDetailPage({ params }: Props) {
  const { category, placeId } = await params;
  const place = findPlace(category, placeId);
  if (!place) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: place.name_en,
    description: place.tip,
    address: place.address,
    geo: { "@type": "GeoCoordinates", latitude: place.lat, longitude: place.lng },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PlaceDetailClient place={place} categorySlug={category} />
    </>
  );
}
