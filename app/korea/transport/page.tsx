import type { Metadata } from "next";
import TransportClient from "./TransportClient";

export const metadata: Metadata = {
  title: "Korea Transport Guide — Rental Car or Public Transit?",
  description: "Find out whether you need a rental car or public transit for each Korean city. Covers Seoul, Busan, Jeju, Gyeongju, Gangneung, Jeonju and more.",
  alternates: { canonical: "https://kkultongkorea.com/korea/transport" },
  openGraph: {
    title: "Korea Transport Guide — Rental Car or Public Transit?",
    description: "City-by-city transport guide for Korea. Find out what you actually need before you go.",
    url: "https://kkultongkorea.com/korea/transport",
    siteName: "Kkultong Korea",
  },
};

export default function TransportPage() {
  return <TransportClient />;
}
