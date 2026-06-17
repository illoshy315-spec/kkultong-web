import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const WORKBOOK_DIR = path.join(process.cwd(), "content", "worksheets");

export async function generateStaticParams() {
  return [
    { day: "day1" },
    { day: "day2" },
    { day: "day3" },
    { day: "day4" },
    { day: "day5" },
    { day: "day6" },
    { day: "day7" },
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

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--amber)" }}>
        Day {data.day ?? data.week}
      </p>
      <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: "var(--gray)" }}>
        {data.title}
      </h1>
      {data.subtitle && (
        <p className="text-lg mb-10 opacity-60" style={{ color: "var(--gray)" }}>{data.subtitle}</p>
      )}
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </article>
  );
}
