import type { Metadata } from "next";
import KoreaHomeClient from "@/components/KoreaHomeClient";

export const metadata: Metadata = {
  title: "Korea Guide — K-Drama, K-Pop Travel & Verified Local Tips | Kkultong Korea",
  description: "K-drama filming locations, K-pop pilgrimage spots, and verified survival tips for travelers, digital nomads, and students in Korea. Everything Google doesn't tell you.",
  alternates: { canonical: "https://kkultongkorea.com/korea" },
  openGraph: {
    title: "Korea Guide — K-Drama, K-Pop Travel & Verified Local Tips",
    description: "K-drama filming locations, K-pop pilgrimage spots, and verified survival tips for travelers, digital nomads, and students in Korea.",
    url: "https://kkultongkorea.com/korea",
    siteName: "Kkultong Korea",
  },
};

export default function KoreaPage() {
  return <KoreaHomeClient />;
}
