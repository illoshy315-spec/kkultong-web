import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GithubSlugger from "github-slugger";

const WORKBOOK_DIR = path.join(process.cwd(), "content", "worksheets");

function extractHeadings(markdown: string) {
  const slugger = new GithubSlugger();
  const lines = markdown.split("\n");
  const headings: { text: string; id: string }[] = [];
  for (const line of lines) {
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      const text = match[1].trim();
      const id = slugger.slug(text);
      headings.push({ text, id });
    }
  }
  return headings;
}

export async function generateStaticParams() {
  return [
    { day: "day1" },
    { day: "day2" },
    { day: "day3" },
    { day: "day4" },
    { day: "day5" },
    { day: "day6" },
    { day: "day7" },
    { day: "day13" },
    { day: "day14" },
    { day: "day15" },
    { day: "day16" },
    { day: "supplement_pos" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ day: string }> }): Promise<Metadata> {
  const { day } = await params;
  const filePath = path.join(WORKBOOK_DIR, `${day}_en.md`);
  if (!fs.existsSync(filePath)) return {};
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  const seoTitle = data.seo_title ?? `${data.title} | Kkultong`;
  const seoDesc = data.seo_description ?? data.subtitle ?? `Free Hangul worksheet — ${data.title}. Learn real Korean for K-pop and K-drama fans.`;
  return {
    title: seoTitle,
    description: seoDesc,
    alternates: {
      canonical: `https://kkultongkorea.com/worksheet/${day}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      url: `https://kkultongkorea.com/worksheet/${day}`,
    },
  };
}

export default async function WorksheetPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = await params;
  const filePath = path.join(WORKBOOK_DIR, `${day}_en.md`);

  if (!fs.existsSync(filePath)) notFound();

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);
  const headings = extractHeadings(content);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--amber)" }}>
        {data.series ?? `Day ${data.day ?? data.week}`}
      </p>
      <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: "var(--gray)" }}>
        {data.title}
      </h1>
      {data.subtitle && (
        <p className="text-lg mb-10 opacity-60" style={{ color: "var(--gray)" }}>{data.subtitle}</p>
      )}

      {headings.length > 0 && (
        <nav aria-label="Table of contents" className="mb-12 p-5 rounded-xl border" style={{ borderColor: "var(--amber)", background: "rgba(239,159,39,0.06)" }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-3 opacity-60" style={{ color: "var(--gray)" }}>
            Contents
          </p>
          <ol className="space-y-1">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className="text-sm hover:underline"
                  style={{ color: "var(--amber)" }}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="prose prose-lg max-w-none">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
            },
          }}
        />
      </div>
    </article>
  );
}
