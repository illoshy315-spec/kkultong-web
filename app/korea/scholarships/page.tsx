import type { Metadata } from "next";
import ScholarshipsClient from "./ScholarshipsClient";

export const metadata: Metadata = {
  title: "Korea Scholarships for International Students — GKS, University & Regional",
  description:
    "Complete guide to scholarships for studying in Korea. GKS government scholarships, university fellowships, and regional grants — with eligibility, amounts, and deadlines.",
  alternates: { canonical: "https://kkultongkorea.com/korea/scholarships" },
  openGraph: {
    title: "Korea Scholarships for International Students",
    description:
      "GKS, university, and regional scholarships for D-2 and D-4 visa holders. Verified 2025–2026 data.",
    url: "https://kkultongkorea.com/korea/scholarships",
    siteName: "Kkultong Korea",
  },
};

export default function ScholarshipsPage() {
  return <ScholarshipsClient />;
}
