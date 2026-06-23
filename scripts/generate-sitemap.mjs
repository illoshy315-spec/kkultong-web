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
];

const files = fs.readdirSync(worksheetsDir).filter((f) => f.endsWith("_en.md"));
const slugs = files.map((f) => f.replace("_en.md", ""));

const worksheetPages = slugs.map((slug) => ({
  url: `${base}/worksheet/${slug}`,
  changefreq: "monthly",
  priority: slug.startsWith("supplement") ? "0.7" : "0.8",
}));

const allPages = [...staticPages, ...worksheetPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((p) => `  <url><loc>${p.url}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml);
console.log(`sitemap.xml generated with ${allPages.length} URLs`);
