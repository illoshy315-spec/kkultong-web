import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

const WORKBOOK_DIR = "C:\\Users\\user\\kkultong\\workbook";

export async function generateStaticParams() {
  return [
    { week: "week1" },
    { week: "week2" },
    { week: "week3" },
    { week: "week4" },
    { week: "week5" },
    { week: "week6" },
    { week: "week7" },
  ];
}

export default async function WorksheetPage({ params }: { params: Promise<{ week: string }> }) {
  const { week } = await params;
  const filePath = path.join(WORKBOOK_DIR, `${week}_en.md`);

  if (!fs.existsSync(filePath)) notFound();

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--amber)" }}>
        Week {data.week}
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
