import { notFound } from "next/navigation";
import type { Metadata } from "next";
import routesData from "@/data/routes.json";
import placesData from "@/data/places.json";
import type { Place, Route } from "@/lib/types";
import RouteDetailClient from "@/components/RouteDetailClient";

type Props = { params: Promise<{ routeId: string }> };

function findRoute(routeId: string): Route | undefined {
  return (routesData as Route[]).find((r) => r.id === routeId);
}

export async function generateStaticParams() {
  return (routesData as Route[]).map((r) => ({ routeId: r.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { routeId } = await params;
  const route = findRoute(routeId);
  if (!route) return {};
  return {
    title: `${route.title} | Kkultong Korea`,
    description: route.tip.slice(0, 155),
    alternates: { canonical: `https://kkultongkorea.com/korea/routes/${routeId}` },
    openGraph: {
      title: route.title,
      description: route.tip.slice(0, 155),
      url: `https://kkultongkorea.com/korea/routes/${routeId}`,
      siteName: "Kkultong Korea",
    },
  };
}

export default async function RouteDetailPage({ params }: Props) {
  const { routeId } = await params;
  const route = findRoute(routeId);
  if (!route) notFound();

  const stops = route.place_ids
    .map((id) => (placesData as Place[]).find((p) => p.id === id))
    .filter((p): p is Place => !!p);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: route.title,
    description: route.tip,
    itinerary: stops.map((s) => ({
      "@type": "TouristAttraction",
      name: s.name_en,
      address: s.address,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RouteDetailClient route={route} />
    </>
  );
}
