import type { Metadata } from "next";
import TipsClient from "./TipsClient";

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

export default function TipsPage() {
  return <TipsClient />;
}
