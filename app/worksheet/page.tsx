import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Korean Worksheet Series | Kkultong",
  description: "Free Korean worksheet series — no signup, no email required. Start with Hangul, then move into real Korean sentences. Used by K-drama and K-pop fans worldwide.",
  alternates: {
    canonical: "https://kkultongkorea.com/worksheet",
  },
};

type WorksheetEntry = {
  day: number | null;
  slug?: string;
  label?: string;
  title: string;
  subtitle: string;
  description: string;
  available: boolean;
};

const worksheets: WorksheetEntry[] = [
  {
    day: 1,
    title: "1443년, 왕이 문자를 디자인하다",
    subtitle: "The King Who Designed an Alphabet",
    description: "How King Sejong created Hangul in 1443 — and why you can learn to read it in a weekend.",
    available: true,
  },
  { day: 2, title: "모음: 하늘·땅·사람", subtitle: "Vowels: Sky, Earth, People", description: "The 10 Korean vowels — built from three shapes: sky, earth, and human.", available: true },
  { day: 3, title: "자음: 입속을 그린 글자", subtitle: "Consonants: Drawn from the Mouth", description: "14 Korean consonants — each shaped after the part of your mouth that makes the sound.", available: true },
  { day: 4, title: "쌍자음: 더 강한 소리", subtitle: "Double Consonants: Stronger Sounds", description: "5 double consonants — why Korean has them, how they sound, and where you've already heard them.", available: true },
  { day: 5, title: "받침: 3층 건물의 지하실", subtitle: "Final Consonants: The Basement", description: "받침 — the consonant that sits beneath a syllable block. Learn how it works and why it changes how you read everything.", available: true },
  { day: 6, title: "이중모음: 두 소리가 만날 때", subtitle: "Diphthongs: When Two Sounds Meet", description: "11 compound vowels built from the basics you already know — plus the sounds that trip up every beginner.", available: true },
  { day: 7, title: "K팝·K드라마 실전 한글", subtitle: "Real Hangul: K-pop & K-drama", description: "Reading real words and sentences using everything you've learned over 7 days.", available: true },
  { day: null, slug: "supplement_pos", label: "Reference", title: "품사 체계 심화", subtitle: "Korean Parts of Speech — Why the System Works This Way", description: "Three criteria that divide Korean words into nine categories. A deep-dive for when you want to know why words behave the way they do.", available: true },
  { day: 8, title: "합성어 1 — 알면 유추되는 것 vs 외워야 하는 것", subtitle: "Compound Words: Transparent vs Opaque", description: "How Korean words are built from two parts — and which ones you can guess vs which ones you have to memorize. With K-pop examples from BTS and Seventeen.", available: true },
  { day: 9, title: "합성어 2 — 생산적 접두 패턴", subtitle: "Compound Words: Productive Prefixes", description: "Coming soon", available: false },
  { day: 10, title: "파생어 1 — -하다/-되다", subtitle: "Derived Words: -하다 and -되다", description: "Coming soon", available: false },
  { day: 11, title: "파생어 2 — 품사 바꾸기", subtitle: "Derived Words: Changing Word Class", description: "Coming soon", available: false },
  { day: 12, title: "파생어 3 — 한자어 접미사", subtitle: "Derived Words: Sino-Korean Suffixes", description: "Coming soon", available: false },
  { day: 13, title: "동사가 마지막에 오는 이유 — 나는 너를 사랑해", subtitle: "Why the Verb Comes Last", description: "Coming soon", available: false },
  { day: 14, title: "조사 — 영어에 없는 것", subtitle: "Particles: What English Doesn't Have", description: "Coming soon", available: false },
  { day: 15, title: "화제와 주어 — 은/는 vs 이/가", subtitle: "Topic vs. Subject", description: "Coming soon", available: false },
  { day: 16, title: "대명사와 축약형", subtitle: "Pronouns & Contractions", description: "Coming soon", available: false },
  { day: 17, title: "장소·방향·관계 — 나머지 조사들", subtitle: "Place, Direction & Relationships", description: "Coming soon", available: false },
];

export default function Worksheet() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--amber)" }}>
        Free Download
      </p>
      <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--gray)" }}>
        Korean Worksheet
      </h1>
      <p className="text-lg mb-16 opacity-70" style={{ color: "var(--gray)" }}>
        Day-by-day Korean curriculum. No signup required. Start reading Korean this weekend.
      </p>

      <div className="space-y-4">
        {worksheets.map((w) => {
          const isRef = w.day === null;
          const href = isRef ? `/worksheet/${w.slug}` : `/worksheet/day${w.day}`;
          const dayLabel = isRef ? (w.label ?? "Reference") : `Day ${w.day}`;
          return (
            <div
              key={w.slug ?? w.day}
              className="flex items-center justify-between p-6 rounded-2xl border"
              style={{
                borderColor: isRef
                  ? "var(--teal)"
                  : w.available ? "var(--amber)" : "rgba(44,44,42,0.15)",
                backgroundColor: isRef
                  ? "rgba(29,158,117,0.06)"
                  : w.available ? "rgba(239,159,39,0.06)" : "transparent",
              }}
            >
              <div className="flex items-start gap-5">
                <span
                  className="text-sm font-bold mt-1 w-14 shrink-0"
                  style={{
                    color: isRef
                      ? "var(--teal)"
                      : w.available ? "var(--amber)" : "rgba(44,44,42,0.4)",
                  }}
                >
                  {dayLabel}
                </span>
                <div>
                  <h2 className="font-bold text-lg" style={{ color: "var(--gray)" }}>{w.subtitle}</h2>
                  <p className="text-sm opacity-60" style={{ color: "var(--gray)" }}>{w.title}</p>
                  {w.available && <p className="text-sm mt-1 opacity-70" style={{ color: "var(--gray)" }}>{w.description}</p>}
                </div>
              </div>
              {w.available ? (
                <Link
                  href={href}
                  className="shrink-0 ml-4 px-6 py-2 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: isRef ? "var(--teal)" : "var(--amber)",
                    color: "white",
                  }}
                >
                  Read →
                </Link>
              ) : (
                <span className="shrink-0 ml-4 text-sm opacity-40" style={{ color: "var(--gray)" }}>Soon</span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
