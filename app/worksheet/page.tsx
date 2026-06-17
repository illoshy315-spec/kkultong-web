import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Hangul Worksheet (7 Weeks) | Kkultong",
  description: "Free 7-week Hangul worksheet — no signup, no email required. Learn to read Korean from scratch, starting this weekend. Used by K-drama and K-pop fans worldwide.",
};

const worksheets = [
  {
    week: 1,
    title: "1443년, 왕이 문자를 디자인하다",
    subtitle: "The King Who Designed an Alphabet",
    description: "How King Sejong created Hangul in 1443 — and why you can learn to read it in a weekend.",
    available: true,
  },
  { week: 2, title: "모음: 하늘·땅·사람", subtitle: "Vowels: Sky, Earth, People", description: "The 10 Korean vowels — built from three shapes: sky, earth, and human.", available: true },
  { week: 3, title: "자음: 입속을 그린 글자", subtitle: "Consonants: Drawn from the Mouth", description: "14 Korean consonants — each shaped after the part of your mouth that makes the sound.", available: true },
  { week: 4, title: "쌍자음: 더 강한 소리", subtitle: "Double Consonants: Stronger Sounds", description: "Coming soon", available: false },
  { week: 5, title: "받침: 3층 건물의 지하실", subtitle: "Final Consonants: The Basement", description: "Coming soon", available: false },
  { week: 6, title: "이중모음: 두 소리가 만날 때", subtitle: "Diphthongs: When Two Sounds Meet", description: "Coming soon", available: false },
  { week: 7, title: "K팝·K드라마 실전 한글", subtitle: "Real Hangul: K-pop & K-drama", description: "Coming soon", available: false },
];

export default function Worksheet() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--amber)" }}>
        Free Download
      </p>
      <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--gray)" }}>
        Hangul Worksheet
      </h1>
      <p className="text-lg mb-16 opacity-70" style={{ color: "var(--gray)" }}>
        7-week curriculum. No signup required. Start reading Korean this weekend.
      </p>

      <div className="space-y-4">
        {worksheets.map((w) => (
          <div
            key={w.week}
            className="flex items-center justify-between p-6 rounded-2xl border"
            style={{
              borderColor: w.available ? "var(--amber)" : "rgba(44,44,42,0.15)",
              backgroundColor: w.available ? "rgba(239,159,39,0.06)" : "transparent",
            }}
          >
            <div className="flex items-start gap-5">
              <span
                className="text-sm font-bold mt-1 w-14 shrink-0"
                style={{ color: w.available ? "var(--amber)" : "rgba(44,44,42,0.4)" }}
              >
                Week {w.week}
              </span>
              <div>
                <h2 className="font-bold text-lg" style={{ color: "var(--gray)" }}>{w.subtitle}</h2>
                <p className="text-sm opacity-60" style={{ color: "var(--gray)" }}>{w.title}</p>
                {w.available && <p className="text-sm mt-1 opacity-70" style={{ color: "var(--gray)" }}>{w.description}</p>}
              </div>
            </div>
            {w.available ? (
              <Link
                href={`/worksheet/week${w.week}`}
                className="shrink-0 ml-4 px-6 py-2 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--amber)" }}
              >
                Read →
              </Link>
            ) : (
              <span className="shrink-0 ml-4 text-sm opacity-40" style={{ color: "var(--gray)" }}>Soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
