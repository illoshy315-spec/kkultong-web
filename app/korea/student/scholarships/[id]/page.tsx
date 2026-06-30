import { notFound } from "next/navigation";
import type { Metadata } from "next";
import scholarships from "@/data/scholarships.json";

type Scholarship = {
  id: string;
  name_en: string;
  name_ko: string;
  category: string;
  visa_types: string[];
  provider: string;
  amount: string;
  duration: string;
  eligibility: string;
  deadline: string;
  how_to_apply: string;
  official_url: string;
  tip: string;
  last_verified: string;
  gpa_maintenance?: string;
};

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return (scholarships as Scholarship[]).map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const s = (scholarships as Scholarship[]).find((s) => s.id === id);
  if (!s) return {};
  return {
    title: `${s.name_en} — Korea Scholarships | Kkultong Korea`,
    description: `${s.provider} · ${s.amount.slice(0, 120)}`,
    alternates: { canonical: `https://kkultongkorea.com/korea/student/scholarships/${id}` },
  };
}

const CATEGORY_BADGE: Record<string, { bg: string; color: string }> = {
  government: { bg: "#e3f2fd", color: "#1565c0" },
  university:  { bg: "#e0f2f1", color: "#00796b" },
  regional:    { bg: "#fce4ec", color: "#c62828" },
  private:     { bg: "#f3e5f5", color: "#6a1b9a" },
};

export default async function ScholarshipDetailPage({ params }: Props) {
  const { id } = await params;
  const s = (scholarships as Scholarship[]).find((s) => s.id === id);
  if (!s) notFound();

  const badge = CATEGORY_BADGE[s.category] ?? CATEGORY_BADGE.private;

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8 flex-wrap" style={{ color: "var(--gray)", opacity: 0.5 }}>
        <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a>
        <span>→</span>
        <a href="/korea/student/scholarships" style={{ textDecoration: "underline" }}>Scholarships</a>
        <span>→</span>
        <span>{s.name_en}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: badge.bg, color: badge.color }}>
            {s.category}
          </span>
          {s.visa_types.map((v) => (
            <span key={v} className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#f3f4f6", color: "var(--gray)" }}>
              {v}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-black mb-2" style={{ color: "var(--gray)" }}>{s.name_en}</h1>
        <p className="text-sm" style={{ color: "var(--gray)", opacity: 0.55 }}>{s.name_ko} · {s.provider}</p>
      </div>

      {/* Amount highlight */}
      <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: "#f0faf6", border: "2px solid var(--teal)" }}>
        <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "var(--teal)" }}>💰 Amount</p>
        <p className="text-sm font-semibold leading-relaxed" style={{ color: "var(--gray)" }}>{s.amount}</p>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-5 mb-8">
        <Row label="Duration" value={s.duration} />
        <Row label="Eligibility" value={s.eligibility} />
        {s.gpa_maintenance && <Row label="GPA Requirement" value={s.gpa_maintenance} />}
        <Row label="Deadline" value={s.deadline} />
        <Row label="How to Apply" value={s.how_to_apply} />
      </div>

      {/* Tip */}
      <div className="rounded-2xl p-5 mb-8" style={{ backgroundColor: "#fffbeb" }}>
        <p className="text-xs font-bold mb-2" style={{ color: "var(--amber)" }}>💡 Tip</p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--gray)" }}>{s.tip}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <p className="text-xs" style={{ color: "var(--gray)", opacity: 0.4 }}>Verified {s.last_verified}</p>
        <a
          href={s.official_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
          style={{ backgroundColor: "var(--teal)", color: "white", textDecoration: "none" }}
        >
          Official Site ↗
        </a>
      </div>

      {/* Back */}
      <div className="mt-10 pt-6 border-t" style={{ borderColor: "#e5e7eb" }}>
        <a href="/korea/student/scholarships" className="text-sm font-semibold" style={{ color: "var(--teal)", textDecoration: "none" }}>
          ← Back to all scholarships
        </a>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "var(--gray)", opacity: 0.4 }}>{label}</p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--gray)" }}>{value}</p>
    </div>
  );
}
