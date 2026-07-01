import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = "https://kkultongkorea.com";
const worksheetsDir = path.join(__dirname, "../content/worksheets");

const staticPages = [
  { url: base, changefreq: "weekly", priority: "1.0" },
  { url: `${base}/worksheet`, changefreq: "weekly", priority: "0.9" },
  { url: `${base}/about`, changefreq: "monthly", priority: "0.5" },
  { url: `${base}/contact`, changefreq: "yearly", priority: "0.4" },
  { url: `${base}/privacy`, changefreq: "yearly", priority: "0.3" },
  { url: `${base}/terms`, changefreq: "yearly", priority: "0.3" },
  { url: `${base}/korea`, changefreq: "weekly", priority: "0.9" },
  { url: `${base}/korea/tips`, changefreq: "weekly", priority: "0.8" },
  { url: `${base}/korea/transport`, changefreq: "monthly", priority: "0.6" },
  { url: `${base}/korea/address`, changefreq: "monthly", priority: "0.6" },
  { url: `${base}/korea/student`, changefreq: "monthly", priority: "0.6" },
  { url: `${base}/korea/student/scholarships`, changefreq: "monthly", priority: "0.7" },
];

const files = fs.readdirSync(worksheetsDir).filter((f) => f.endsWith("_en.md"));
const slugs = files.map((f) => f.replace("_en.md", ""));

const worksheetPages = slugs.map((slug) => ({
  url: `${base}/worksheet/${slug}`,
  changefreq: "monthly",
  priority: slug.startsWith("supplement") ? "0.7" : "0.8",
}));

// --- Tips: /korea/tips/{type} and /korea/tips/{type}/{slug} ---
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 7)
    .join("-");
}

const { default: TIPS } = await import("../data/tips.ts");

const tipsPages = [];
for (const type of Object.keys(TIPS)) {
  tipsPages.push({ url: `${base}/korea/tips/${type}`, changefreq: "monthly", priority: "0.7" });
  for (const section of TIPS[type]) {
    for (const tip of section.tips) {
      tipsPages.push({
        url: `${base}/korea/tips/${type}/${slugify(tip.q)}`,
        changefreq: "monthly",
        priority: "0.6",
      });
    }
  }
}

// --- Scholarships: /korea/student/scholarships/{id} ---
const { default: scholarships } = await import("../data/scholarships.json", { with: { type: "json" } });
const scholarshipPages = scholarships.map((s) => ({
  url: `${base}/korea/student/scholarships/${s.id}`,
  changefreq: "yearly",
  priority: "0.6",
}));

// --- Places: /korea/{category}/{placeId}, plus category index pages ---
const CATEGORY_SLUGS = {
  drama: "drama_location",
  kpop: "kpop_pilgrimage",
  beauty: "k_beauty",
  food: "k_food",
  experience: "k_experience",
  shopping: "k_shopping",
};

const { default: places } = await import("../data/places.json", { with: { type: "json" } });

const categoryPages = Object.keys(CATEGORY_SLUGS).map((slug) => ({
  url: `${base}/korea/${slug}`,
  changefreq: "weekly",
  priority: "0.7",
}));

const placePages = [];
for (const [slug, cat] of Object.entries(CATEGORY_SLUGS)) {
  for (const place of places) {
    if (place.category === cat) {
      placePages.push({ url: `${base}/korea/${slug}/${place.id}`, changefreq: "monthly", priority: "0.6" });
    }
  }
}

// --- Routes: /korea/routes/{routeId} ---
const { default: routes } = await import("../data/routes.json", { with: { type: "json" } });
const routePages = routes.map((r) => ({
  url: `${base}/korea/routes/${r.id}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const allPages = [
  ...staticPages,
  ...worksheetPages,
  ...tipsPages,
  ...scholarshipPages,
  ...categoryPages,
  ...placePages,
  ...routePages,
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((p) => `  <url><loc>${p.url}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml);
console.log(`sitemap.xml generated with ${allPages.length} URLs`);
