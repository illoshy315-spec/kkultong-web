import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kkultongkorea.com"),
  title: "Learn Real Korean Free | Kkultong — For K-Drama & K-Pop Fans",
  description: "Tired of textbook Korean? Learn the Korean from K-dramas, K-pop, and real life. Free 7-week Hangul worksheet — no signup needed. Start reading Korean this weekend.",
  alternates: {
    canonical: "https://kkultongkorea.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1630656616746043"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
