"use client";

import { useState } from "react";

const CITY_DATA: Record<string, { transport: string; emoji: string; reason: string; tips: string[] }> = {
  Seoul: {
    transport: "Public Transit",
    emoji: "🚇",
    reason: "Seoul's subway and bus network is world-class. A T-Money card is all you need.",
    tips: [
      "T-Money card: buy at any GS25, CU, or 7-Eleven for ₩3,000",
      "Kakao T taxi works with foreign cards (Visa/Mastercard)",
      "Avoid driving — parking is expensive and traffic is brutal",
      "Naver Maps is more accurate than Google for Korean transit",
    ],
  },
  Busan: {
    transport: "Public Transit",
    emoji: "🚇",
    reason: "Busan subway covers Haeundae, Seomyeon, Gamcheon, and Gwangalli. No car needed.",
    tips: [
      "Line 1 (orange) covers most tourist areas",
      "Busan City Tour Bus: book on Klook for foreign card payment",
      "Kakao T works well in Busan",
      "Gamcheon Culture Village: take bus 1-1 or 2 from Toseong-dong station",
    ],
  },
  Jeju: {
    transport: "Rental Car",
    emoji: "🚗",
    reason: "Buses exist but run every 30–60 minutes. Jeju is built for driving — a car is the only real way to explore freely.",
    tips: [
      "Rent from ₩30,000–50,000/day at Jeju Airport arrivals hall",
      "International Driving Permit (IDP) required — get it before leaving home",
      "Kakao Navi works great for Korean roads",
      "Gas stations are plentiful — fill up before heading to Seongsan or Seopjikoji",
    ],
  },
  Gyeongju: {
    transport: "Rental Car",
    emoji: "🚗",
    reason: "Historic sites are spread across the whole city. A car is much better for Bulguksa, Seokguram, and the countryside.",
    tips: [
      "Rent at Singyeongju KTX station — 15 min from the city center",
      "Tumuli Park area is walkable but outer sites need wheels",
      "Gyeongju City Tour Bus: foreign card acceptance unclear — check on arrival",
      "Allow a full day — sites are 10–20 min apart by car",
    ],
  },
  Jeonju: {
    transport: "Public Transit",
    emoji: "🚌",
    reason: "The Hanok Village and main sights are all walkable from the bus terminal. City buses cover the rest.",
    tips: [
      "Hanok Village is 20 min walk from Jeonju Intercity Bus Terminal",
      "Rent a bike inside Hanok Village for ₩3,000/hr",
      "전주 한바퀴 tour bus: call ☎063-284-7200 (Korean only, phone reservation)",
      "Most attractions are within a 2km radius — walking is best",
    ],
  },
  Sokcho: {
    transport: "Rental Car",
    emoji: "🚗",
    reason: "Seoraksan, the beaches, and the surrounding coast are too spread out for buses alone.",
    tips: [
      "Rent at Sokcho Express Bus Terminal",
      "Seoraksan entrance: free parking, ₩4,000 national park entry",
      "Abai Village and Cheongchoho Lake are walkable from each other",
      "Express bus from Seoul (Dongseoul): 2.5 hrs, ₩17,000",
    ],
  },
  Gangneung: {
    transport: "Rental Car",
    emoji: "🚗",
    reason: "Gyeongpo Beach, Anmok Coffee Street, and Jumunjin are all separated. A car makes sense.",
    tips: [
      "Gangneung City Tour Bus ended June 2025 — taxi or rental only now",
      "KTX from Seoul: 1h 30min (₩27,600 standard)",
      "Jumunjin Breakwater (Goblin filming site) is 30 min north by taxi",
      "Anmok Coffee Street is walkable from downtown",
    ],
  },
  Incheon: {
    transport: "Public Transit",
    emoji: "🚇",
    reason: "AREX airport train and Incheon subway connect all main areas. No car needed.",
    tips: [
      "AREX direct train: Incheon Airport → Seoul Station in 43 min (₩9,500)",
      "Incheon Chinatown: Incheon Station (Line 1)",
      "Songdo: get off at Incheon Nat'l Univ. Station (Line 2 Incheon)",
      "Airport bus cheaper but slower (₩6,000–9,000)",
    ],
  },
  Daegu: {
    transport: "Public Transit",
    emoji: "🚇",
    reason: "Daegu has 3 subway lines. Seomun Market, Dongseongno, and Apsan are all reachable without a car.",
    tips: [
      "Daegu City Tour Bus: 4-language website, book at daegucitytour.com",
      "Seomun Market: Seomun Market Station (Line 3)",
      "청라언덕 (Mr. Sunshine filming site): Bangogae Station (Line 1)",
      "KTX from Seoul: ~1h 45min",
    ],
  },
  Daejeon: {
    transport: "Public Transit",
    emoji: "🚇",
    reason: "Compact city with solid subway coverage. Expo Science Park and Yuseong Hot Springs are both on the line.",
    tips: [
      "Government Complex Station (Line 1) for Expo area",
      "Yuseong Hot Springs: Yuseong Hot Springs Station (Line 1)",
      "Good base for day trips to Gyeryongsan or Magoksa Temple",
      "KTX from Seoul: ~50 min",
    ],
  },
};

const CITIES = Object.keys(CITY_DATA);

export default function TransportClient() {
  const [selected, setSelected] = useState<string | null>(null);
  const result = selected ? CITY_DATA[selected] : null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm mb-6" style={{ color: "var(--gray)", opacity: 0.5 }}>
        <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a> → Transport
      </p>

      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--amber)" }}>
          🗺️ Transport Guide
        </p>
        <h1 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--gray)" }}>
          Rental Car or<br />
          <span style={{ color: "var(--amber)" }}>Public Transit?</span>
        </h1>
        <p className="text-base" style={{ color: "var(--gray)", opacity: 0.7 }}>
          Pick a city — we'll tell you what actually makes sense.
        </p>
      </div>

      {/* City buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CITIES.map((city) => (
          <button
            key={city}
            onClick={() => setSelected(selected === city ? null : city)}
            className="px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all"
            style={{
              borderColor: selected === city ? "var(--amber)" : "#e5e7eb",
              backgroundColor: selected === city ? "var(--amber)" : "white",
              color: selected === city ? "white" : "var(--gray)",
            }}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Result */}
      {result && (
        <div className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: "var(--amber)" }}>
          <div className="p-6" style={{ backgroundColor: "#FAEEDA" }}>
            <p className="text-3xl font-black mb-1">
              {result.emoji} {result.transport}
            </p>
            <p className="text-sm" style={{ color: "var(--gray)" }}>{result.reason}</p>
          </div>
          <div className="p-6 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gray)", opacity: 0.5 }}>
              Practical tips for {selected}
            </p>
            {result.tips.map((tip, i) => (
              <div key={i} className="flex gap-3 text-sm" style={{ color: "var(--gray)" }}>
                <span style={{ opacity: 0.4, flexShrink: 0 }}>→</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {!result && (
        <p className="text-sm text-center py-8" style={{ color: "var(--gray)", opacity: 0.4 }}>
          Select a city above to see the recommendation.
        </p>
      )}

      <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e5e7eb" }}>
        <a href="/korea" className="text-sm font-semibold" style={{ color: "var(--red)" }}>
          ← Back to Korea Guide
        </a>
      </div>
    </div>
  );
}
