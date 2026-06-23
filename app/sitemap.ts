import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kkultongkorea.com";
  const availableDays = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/worksheet`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...availableDays.map((d) => ({
      url: `${base}/worksheet/day${d}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/worksheet/supplement_pos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/worksheet/supplement_layers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
