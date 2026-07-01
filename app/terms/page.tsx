import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Kkultong",
  description: "Kkultong terms of service and copyright notice.",
  alternates: {
    canonical: "https://kkultongkorea.com/terms",
  },
};

export default function Terms() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-black mb-10" style={{ color: "var(--gray)" }}>
        Terms of Service
      </h1>
      <div className="space-y-6 leading-relaxed" style={{ color: "var(--gray)" }}>
        <p className="text-sm opacity-60">Last updated: July 2026</p>

        <h2 className="text-xl font-bold mt-8">1. Copyright</h2>
        <p>
          All worksheets, articles, guides, and other written content on kkultongkorea.com (&quot;Kkultong&quot;)
          are original works created by Kkultong and are protected by copyright. © 2026 Kkultong. All rights reserved.
        </p>

        <h2 className="text-xl font-bold mt-8">2. Permitted Use</h2>
        <p>
          You may view, download, and print Kkultong content for personal, non-commercial study use. Sharing a direct
          link to a page on kkultongkorea.com is always welcome.
        </p>

        <h2 className="text-xl font-bold mt-8">3. Prohibited Use</h2>
        <p>Without prior written permission, you may not:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Republish, redistribute, or mirror Kkultong content on another website or platform</li>
          <li>Use automated tools (scrapers, bots, crawlers) to systematically copy or extract site content</li>
          <li>Use Kkultong content to train, fine-tune, or evaluate machine learning or AI models</li>
          <li>Sell, sublicense, or commercially exploit Kkultong content</li>
        </ul>

        <h2 className="text-xl font-bold mt-8">4. Reporting Misuse</h2>
        <p>
          If you find Kkultong content reproduced elsewhere without permission, please report it to{" "}
          <a href="mailto:kkultongkorea@gmail.com" className="underline" style={{ color: "var(--amber)" }}>
            kkultongkorea@gmail.com
          </a>.
        </p>

        <h2 className="text-xl font-bold mt-8">5. Contact</h2>
        <p>
          For licensing or permission requests, email{" "}
          <a href="mailto:kkultongkorea@gmail.com" className="underline" style={{ color: "var(--amber)" }}>
            kkultongkorea@gmail.com
          </a>.
        </p>
      </div>
    </section>
  );
}
