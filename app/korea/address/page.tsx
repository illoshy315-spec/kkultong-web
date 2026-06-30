import type { Metadata } from "next";
import AddressClient from "./AddressClient";

export const metadata: Metadata = {
  title: "Korean Address Translator — Korean to English",
  description: "Paste any Korean address and get the English version instantly. Useful for taxis, hotels, and delivery. No sign-up required.",
  alternates: { canonical: "https://kkultongkorea.com/korea/address" },
  openGraph: {
    title: "Korean Address Translator — Korean to English",
    description: "Paste any Korean address and get the English version instantly.",
    url: "https://kkultongkorea.com/korea/address",
    siteName: "Kkultong Korea",
  },
};

export default function AddressPage() {
  return <AddressClient />;
}
