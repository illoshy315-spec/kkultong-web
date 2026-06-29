"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import placesData from "@/data/places.json";
import routesData from "@/data/routes.json";
import type { Route } from "@/lib/types";

const KoreaMap = dynamic(() => import("@/components/KoreaMap"), { ssr: false });

type UserType = "traveler" | "nomad" | "student" | null;

// ─── Transport ───────────────────────────────────────────────
const CITY_DATA: Record<string, { transport: string; emoji: string; reason: string }> = {
  Seoul:     { transport: "Public Transit", emoji: "🚇", reason: "Seoul's subway and bus network is world-class. A T-Money card is all you need. Avoid driving — parking is expensive and traffic is brutal." },
  Busan:     { transport: "Public Transit", emoji: "🚇", reason: "Busan subway covers Haeundae, Seomyeon, and Gwangalli. No car needed." },
  Jeju:      { transport: "Rental Car",     emoji: "🚗", reason: "Buses run every 30–60 min. Jeju is built for driving — from ₩30,000/day. The only real way to explore freely." },
  Gyeongju:  { transport: "Rental Car",     emoji: "🚗", reason: "Historic sites are spread out. A car is much better for Bulguksa, Seokguram, and the countryside." },
  Jeonju:    { transport: "Public Transit", emoji: "🚌", reason: "Hanok Village and main sights are walkable from the bus terminal. City buses cover the rest." },
  Sokcho:    { transport: "Rental Car",     emoji: "🚗", reason: "Seoraksan, the beaches, and the coast are too spread out for buses alone." },
  Gangneung: { transport: "Rental Car",     emoji: "🚗", reason: "Gyeongpo Beach, Anmok Coffee Street, and Jumunjin are all separated. Note: city tour bus ended June 2025." },
  Incheon:   { transport: "Public Transit", emoji: "🚇", reason: "AREX airport train and Incheon subway connect all main areas. No car needed." },
  Daegu:     { transport: "Public Transit", emoji: "🚇", reason: "3 subway lines cover the city. Seomun Market, Dongseongno, and main sights all reachable without a car." },
  Daejeon:   { transport: "Public Transit", emoji: "🚇", reason: "Compact city with solid subway coverage. Expo Science Park and Yuseong Hot Springs both on the line." },
};

function TransportTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const result = selected ? CITY_DATA[selected] : null;
  return (
    <div>
      <p className="text-sm font-bold mb-3" style={{ color: "var(--gray)" }}>🗺️ Rental Car or Public Transit?</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(CITY_DATA).map((city) => (
          <button
            key={city}
            onClick={() => setSelected(selected === city ? null : city)}
            className="px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all"
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
      {result && (
        <div className="rounded-xl p-4" style={{ backgroundColor: "white" }}>
          <p className="text-xl font-black mb-1">{result.emoji} {result.transport}</p>
          <p className="text-sm" style={{ color: "var(--gray)", lineHeight: "1.6" }}>{result.reason}</p>
        </div>
      )}
    </div>
  );
}

// ─── Address Translator ───────────────────────────────────────
function AddressTool() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ translated: string; lat?: number; lng?: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const translate = async () => {
    if (!input.trim()) return;
    setLoading(true); setError(""); setResult(null);
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      if (data.translated) setResult(data);
      else setError(data.error ?? "Address not found.");
    } catch { setError("Network error. Please try again."); }
    finally { setLoading(false); }
  };

  return (
    <div>
      <p className="text-sm font-bold mb-3" style={{ color: "var(--gray)" }}>📍 Korean Address → English</p>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && translate()}
          placeholder="서울특별시 중구 명동길 74"
          className="flex-1 rounded-xl px-4 py-2 border text-sm"
          style={{ borderColor: "#e5e7eb", outline: "none" }}
        />
        <button
          onClick={translate}
          disabled={loading || !input.trim()}
          className="px-4 py-2 rounded-xl font-semibold text-white text-sm disabled:opacity-40"
          style={{ backgroundColor: "var(--teal)" }}
        >
          {loading ? "…" : "Go"}
        </button>
      </div>
      {result && (
        <div className="rounded-xl p-4 flex items-start justify-between gap-3" style={{ backgroundColor: "white" }}>
          <p className="text-sm font-semibold" style={{ color: "var(--gray)" }}>{result.translated}</p>
          {result.lat && result.lng && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${result.lat},${result.lng}`}
              target="_blank" rel="noopener noreferrer"
              className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg text-white"
              style={{ backgroundColor: "var(--teal)", textDecoration: "none" }}
            >
              Maps →
            </a>
          )}
        </div>
      )}
      {error && <p className="text-xs mt-2" style={{ color: "var(--red)" }}>{error}</p>}
    </div>
  );
}

// ─── Routes ──────────────────────────────────────────────────
function RoutesTool() {
  const [activeRoute, setActiveRoute] = useState<Route | null>(null);
  const routes = routesData as Route[];
  return (
    <div>
      <p className="text-sm font-bold mb-3" style={{ color: "var(--gray)" }}>🗺️ Recommended Routes</p>
      <div className="grid gap-2 mb-4">
        {routes.map((route) => (
          <button
            key={route.id}
            onClick={() => setActiveRoute(activeRoute?.id === route.id ? null : route)}
            className="text-left rounded-xl border-2 px-4 py-3 transition-all"
            style={{
              borderColor: activeRoute?.id === route.id ? "var(--teal)" : "#e5e7eb",
              backgroundColor: activeRoute?.id === route.id ? "#f0faf6" : "white",
            }}
          >
            <p className="font-bold text-sm" style={{ color: "var(--gray)" }}>{route.title}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.5 }}>
              ⏱ {route.duration} · {route.area}
            </p>
          </button>
        ))}
      </div>
      {activeRoute && (
        <>
          <KoreaMap places={[]} allPlaces={placesData as any} activeCategory={null} activeRoute={activeRoute} />
          <div className="mt-3 rounded-xl border p-4" style={{ borderColor: "#e5e7eb" }}>
            <p className="text-sm" style={{ color: "var(--gray)", lineHeight: "1.7" }}>{activeRoute.tip}</p>
            <p className="text-xs mt-2" style={{ color: "var(--gray)", opacity: 0.6, lineHeight: "1.7" }}>{activeRoute.order_note}</p>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Tips Q&A ────────────────────────────────────────────────
const TIPS: Record<string, { icon: string; title: string; tips: { q: string; a: string }[] }[]> = {
  traveler: [
    {
      icon: "🚌", title: "Getting Around",
      tips: [
        { q: "How do I get a T-Money card?", a: "Buy one at any convenience store (GS25, CU, 7-Eleven) for ₩3,000. Charge it at subway ticket machines or at the counter. Works on buses, subways, and taxis." },
        { q: "KTX vs SRT vs Mugunghwa — which one?", a: "KTX = fastest, most expensive. SRT = slightly cheaper, departs from Suseo station. Mugunghwa = slow but cheap. Book at korail.go.kr or the Korail app." },
        { q: "Can I use Kakao T with a foreign card?", a: "Yes — register a Visa/Mastercard in the app. Some users report issues; if it fails, try adding PayPal as a backup." },
      ],
    },
    {
      icon: "💳", title: "Money & Payments",
      tips: [
        { q: "Where should I exchange money?", a: "Myeongdong street exchangers offer the best rates — often 3–5% better than the airport. Avoid hotel exchanges entirely." },
        { q: "My foreign card keeps getting declined — why?", a: "Traditional markets, small restaurants, and PC bangs often require Korean cards or cash. Convenience stores and large chains are almost always fine." },
        { q: "Wise / Revolut — do they work in Korea?", a: "Yes, both work well. Still keep some Korean won cash as backup for markets and small shops." },
      ],
    },
    {
      icon: "🍜", title: "Food",
      tips: [
        { q: "No English menu — what do I do?", a: "Open Google Translate → tap the camera icon → point at the menu. Works surprisingly well." },
        { q: "Solo dining (혼밥) — is it weird?", a: "Not at all. Korea has one of the best solo dining cultures in Asia. Gimbap shops and noodle places are perfectly normal solo." },
        { q: "How do I ask them to heat my convenience store food?", a: 'Say "데워 주세요" (deh-wuh joo-seh-yo). They\'ll microwave it for free at any GS25, CU, and 7-Eleven.' },
      ],
    },
    {
      icon: "🏨", title: "Accommodation",
      tips: [
        { q: "Motel vs guesthouse vs jjimjilbang — which?", a: "Motel (모텔): cheap private rooms, totally fine. Jjimjilbang (찜질방): Korean sauna where you sleep on a heated floor for ~₩15,000. Worth trying once." },
        { q: "Do I need my passport at check-in?", a: "Yes, always. Korean hotels and motels are legally required to record foreign guest passport numbers at check-in." },
      ],
    },
  ],
  nomad: [
    {
      icon: "🏦", title: "Banking",
      tips: [
        { q: "Best bank for digital nomads?", a: "Hana Bank — best English app, fast international transfers. Shinhan Bank is also solid." },
        { q: "Can I open a bank account without ARC?", a: "Woori Bank (우리은행 글로벌 지점) allows opening without ARC. Since March 2025, Shinhan and Hana also accept mobile ARC." },
        { q: "Wise vs bank SWIFT transfer?", a: "Wise is almost always cheaper. Korean bank SWIFT fees: ₩5,000–30,000 + correspondent fees. Wise: ~0.5–1% with no hidden charges." },
        { q: "What is the 한도계좌 (limited account) problem?", a: "New accounts start limited — max ₩300,000/day transfer. Bring employment contract or lease to a branch to upgrade. Or wait 3–6 months." },
      ],
    },
    {
      icon: "📶", title: "SIM & Internet",
      tips: [
        { q: "Airport SIM vs convenience store vs carrier store?", a: "Airport (KT/SKT): easy but expensive. Convenience store prepaid SIMs: cheap, data-only, no registration. Carrier store: requires ARC, best long-term value." },
        { q: "MVNO vs big 3 carriers — real difference?", a: "MVNOs (알뜰폰) use the exact same towers at 30–50% lower cost. Best value for data-heavy use." },
      ],
    },
    {
      icon: "💳", title: "Payments",
      tips: [
        { q: "Travelwallet / Trabelogue — worth getting?", a: "Yes. These Korean prepaid cards let foreigners use Korean payment infrastructure — including Coupang and delivery apps. Load with any Visa/Mastercard." },
        { q: "Best exchange rate?", a: "Myeongdong street exchangers beat airport and bank rates by 3–5%. Compare a few stalls for larger amounts. Bring your passport." },
      ],
    },
  ],
  student: [
    {
      icon: "🆔", title: "ARC (Alien Registration Card)",
      tips: [
        { q: "What is ARC and when do I apply?", a: "ARC is your Korean alien registration card. Apply within 90 days of arrival at your local immigration office. Book at hikorea.go.kr first." },
        { q: "The ARC chicken-and-egg problem", a: "No ARC → can't open bank account → can't get phone plan. Solution: Woori Bank lets you open a basic account without ARC. Use Wise or Revolut while you wait." },
        { q: "How long does ARC take?", a: "Typically 2–4 weeks. Since March 2025, Hana and Shinhan accept the mobile ARC or receipt in place of the physical card." },
      ],
    },
    {
      icon: "🏦", title: "Banking by Visa Type",
      tips: [
        { q: "D-2 student visa — which bank?", a: "Shinhan Bank is best — student-specific accounts, English support, campus branches near most universities. Bring your enrollment certificate (재학증명서)." },
        { q: "H-1 working holiday — banking?", a: "Hana or Shinhan. Bring passport + entry stamp + Korean address proof. Open an account as soon as possible — you'll need it for your first paycheck." },
        { q: "B-2 tourist visa — can I open an account?", a: "Limited options. Woori Bank global branch is your best bet. For everyday spending, rely on Wise or Revolut instead." },
      ],
    },
    {
      icon: "🏠", title: "Housing",
      tips: [
        { q: "전세 vs 월세 vs 고시원?", a: "전세: large lump-sum deposit, zero rent — too complex for new arrivals. 월세: monthly rent + smaller deposit, most common. 고시원: tiny furnished rooms from ₩300,000/month all-in. Best for your first month." },
        { q: "Do I need to register my address (전입신고)?", a: "Yes. Go to your local 동사무소/주민센터 within 14 days of moving in. Required for health insurance and many other services." },
      ],
    },
    {
      icon: "🏥", title: "Health Insurance",
      tips: [
        { q: "When am I enrolled in health insurance?", a: "D-2/D-4 visa holders are auto-enrolled in NHIS after 6 months in Korea. Before that, you're covered by your university's group insurance." },
        { q: "How do I find an English-speaking doctor?", a: "Search '외국인 진료' on Naver Maps. Severance, Samsung Seoul, and Asan hospitals all have international clinics with English-speaking staff." },
      ],
    },
  ],
};

function TipsAccordion({ sections }: { sections: { icon: string; title: string; tips: { q: string; a: string }[] }[] }) {
  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="text-sm font-bold mb-3" style={{ color: "var(--gray)" }}>{section.icon} {section.title}</p>
          <div className="space-y-2">
            {section.tips.map((tip) => (
              <details key={tip.q} className="rounded-xl border overflow-hidden" style={{ borderColor: "#e5e7eb" }}>
                <summary className="px-4 py-3 font-semibold text-sm cursor-pointer select-none hover:bg-gray-50" style={{ color: "var(--gray)" }}>
                  {tip.q}
                </summary>
                <div className="px-4 pb-3 text-sm leading-relaxed" style={{ color: "var(--gray)", backgroundColor: "#fafafa" }}>
                  {tip.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── K-Content categories ────────────────────────────────────
const CONTENT_LINKS = [
  { slug: "drama",          emoji: "🎬", label: "K-Drama\nFilming Locations", color: "#1565c0", bg: "#e3f2fd" },
  { slug: "kpop",           emoji: "🎤", label: "K-Pop\nPilgrimage",          color: "#c62828", bg: "#fce4ec" },
  { slug: "culinary",       emoji: "🍽️", label: "Culinary\nClass Wars",        color: "#e65100", bg: "#fff3e0" },
  { slug: "personal-color", emoji: "🎨", label: "Personal Color\nDiagnosis",   color: "#9c27b0", bg: "#f3e5f5" },
  { slug: "halal",          emoji: "🕌", label: "Halal\nFood",                 color: "#2e7d32", bg: "#e8f5e9" },
  { slug: "vegan",          emoji: "🌱", label: "Vegan &\nVegetarian",         color: "#558b2f", bg: "#f1f8e9" },
];

// ─── Main page ───────────────────────────────────────────────
export default function KoreaPage() {
  const [userType, setUserType] = useState<UserType>(null);

  const options = [
    { key: "traveler" as UserType, emoji: "✈️", label: "Traveler",      sub: "Short-term visit" },
    { key: "nomad"    as UserType, emoji: "💻", label: "Digital Nomad", sub: "Working remotely" },
    { key: "student"  as UserType, emoji: "🎓", label: "Student",       sub: "Living in Korea" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--amber)" }}>
          Korea Guide
        </p>
        <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--gray)" }}>
          Everything Google<br />
          <span style={{ color: "var(--amber)" }}>doesn&apos;t tell you.</span>
        </h1>
        <p className="text-lg" style={{ color: "var(--gray)", opacity: 0.7 }}>
          K-content travel · Verified spots · Foreigner-friendly tips
        </p>
      </div>

      {/* Who are you? */}
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: "var(--gray)", opacity: 0.4 }}>
          Who are you?
        </p>
        <div className="grid grid-cols-3 gap-3">
          {options.map((o) => (
            <button
              key={o.key}
              onClick={() => setUserType(userType === o.key ? null : o.key)}
              className="rounded-2xl p-4 text-center border-2 transition-all"
              style={{
                borderColor: userType === o.key ? "var(--amber)" : "#e5e7eb",
                backgroundColor: userType === o.key ? "#FAEEDA" : "white",
              }}
            >
              <div className="text-3xl mb-2">{o.emoji}</div>
              <div className="font-bold text-sm" style={{ color: "var(--gray)" }}>{o.label}</div>
              <div className="text-xs mt-1" style={{ color: "var(--gray)", opacity: 0.6 }}>{o.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Traveler content */}
      {userType === "traveler" && (
        <div className="mb-12 space-y-8 rounded-2xl border-2 p-6" style={{ borderColor: "var(--amber)", backgroundColor: "#FFFBF5" }}>
          <TransportTool />
          <hr style={{ borderColor: "#f0e0c0" }} />
          <AddressTool />
          <hr style={{ borderColor: "#f0e0c0" }} />
          <RoutesTool />
          <hr style={{ borderColor: "#f0e0c0" }} />
          <TipsAccordion sections={TIPS.traveler} />
        </div>
      )}

      {/* Nomad content */}
      {userType === "nomad" && (
        <div className="mb-12 rounded-2xl border-2 p-6" style={{ borderColor: "#e5e7eb", backgroundColor: "#fafafa" }}>
          <TipsAccordion sections={TIPS.nomad} />
        </div>
      )}

      {/* Student content */}
      {userType === "student" && (
        <div className="mb-12 rounded-2xl border-2 p-6" style={{ borderColor: "#e5e7eb", backgroundColor: "#fafafa" }}>
          <TipsAccordion sections={TIPS.student} />
        </div>
      )}

      {/* Browse by K-Content */}
      <div className={userType ? "" : "mt-2"}>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gray)", opacity: 0.4 }}>
          Browse by K-Content
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {CONTENT_LINKS.map((cat) => (
            <a
              key={cat.slug}
              href={`/korea/${cat.slug}`}
              className="rounded-2xl p-5 text-center transition-transform hover:scale-105"
              style={{ backgroundColor: cat.bg, textDecoration: "none" }}
            >
              <div className="text-3xl mb-2">{cat.emoji}</div>
              <div className="text-sm font-bold whitespace-pre-line" style={{ color: cat.color }}>
                {cat.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
