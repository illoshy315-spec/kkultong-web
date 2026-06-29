"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import placesData from "@/data/places.json";
import routesData from "@/data/routes.json";
import type { Route } from "@/lib/types";

const KoreaMap = dynamic(() => import("@/components/KoreaMap"), { ssr: false });

type UserType = "traveler" | "nomad" | "student" | null;

function RouteSection() {
  const [activeRoute, setActiveRoute] = useState<Route | null>(null);
  const routes = routesData as Route[];

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--teal)" }}>
          Recommended Routes
        </p>
        <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "var(--gray)" }}>
          Ready-made itineraries<br />
          <span style={{ color: "var(--teal)" }}>for K-content fans.</span>
        </h2>
        <p className="text-sm" style={{ color: "var(--gray)", opacity: 0.6 }}>
          Pick a route — see every stop on the map.
        </p>
      </div>

      {/* Route cards */}
      <div className="grid gap-3 mb-6">
        {routes.map((route) => (
          <button
            key={route.id}
            onClick={() => setActiveRoute(activeRoute?.id === route.id ? null : route)}
            className="text-left rounded-2xl border-2 px-5 py-4 transition-all"
            style={{
              borderColor: activeRoute?.id === route.id ? "var(--teal)" : "#e5e7eb",
              backgroundColor: activeRoute?.id === route.id ? "#f0faf6" : "white",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="font-bold text-sm" style={{ color: "var(--gray)" }}>{route.title}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.5 }}>{route.title_ko}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: "#e5e7eb", color: "var(--gray)" }}>
                  {route.area}
                </span>
              </div>
            </div>
            <div className="flex gap-4 mt-2 text-xs" style={{ color: "var(--gray)", opacity: 0.6 }}>
              <span>⏱ {route.duration}</span>
              <span>🚌 {route.transport}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Map + route detail */}
      {activeRoute && (
        <div className="mb-4">
          <KoreaMap
            places={[]}
            allPlaces={placesData as any}
            activeCategory={null}
            activeRoute={activeRoute}
          />
          <div className="mt-4 rounded-2xl border p-5" style={{ borderColor: "#e5e7eb" }}>
            <p className="font-bold text-sm mb-2" style={{ color: "var(--gray)" }}>💡 Route tips</p>
            <p className="text-sm mb-2" style={{ color: "var(--gray)", lineHeight: "1.7" }}>{activeRoute.tip}</p>
            <p className="text-sm" style={{ color: "var(--gray)", lineHeight: "1.7", opacity: 0.7 }}>{activeRoute.order_note}</p>
          </div>
        </div>
      )}
    </div>
  );
}


const TIPS: Record<
  string,
  { icon: string; title: string; tips: { q: string; a: string }[] }[]
> = {
  traveler: [
    {
      icon: "🚌",
      title: "Getting Around",
      tips: [
        {
          q: "How do I get a T-Money card?",
          a: "Buy one at any convenience store (GS25, CU, 7-Eleven) for ₩3,000. Charge it at subway ticket machines or at the counter. Works on buses, subways, and taxis.",
        },
        {
          q: "What do Korean bus numbers mean?",
          a: "Blue (간선) = main city routes. Green (지선) = neighborhood feeders. Yellow = city center loops. Red = express to suburbs. When in doubt, use Naver Maps — it's more accurate than Google for Korean transit.",
        },
        {
          q: "KTX vs SRT vs Mugunghwa — which one?",
          a: "KTX = fastest, most expensive. SRT = slightly cheaper, departs from Suseo station (not Seoul Station). Mugunghwa = slow but cheap, good for short hops. Book KTX/SRT at korail.go.kr or the Korail app.",
        },
        {
          q: "Small cities — should I rent a car?",
          a: "Yes. For places like Jeju, Gyeongju, Sokcho, and most rural areas, buses are infrequent. Renting a car is cheap (from ₩30,000/day) and the only real way to explore freely.",
        },
        {
          q: "Can I use Kakao T with a foreign card?",
          a: "Yes — register a Visa/Mastercard in the app. Some users report issues; if it fails, try adding PayPal as a backup. Kakao T is the most reliable taxi app in Korea.",
        },
      ],
    },
    {
      icon: "🏨",
      title: "Accommodation",
      tips: [
        {
          q: "Motel vs guesthouse vs jjimjilbang — which?",
          a: "Motel (모텔): cheap private rooms, no frills, totally fine. Guesthouse: social atmosphere, dorms or private rooms. Jjimjilbang (찜질방): Korean sauna where you sleep on a heated floor for ~₩15,000. Worth trying at least once.",
        },
        {
          q: "Do I need my passport at check-in?",
          a: "Yes, always bring your passport. Korean hotels and motels are legally required to record foreign guest passport numbers at check-in.",
        },
        {
          q: "What is 대실 (daesil)?",
          a: "A 2–3 hour short-stay daytime room rental. Common at motels — used for naps between check-out and check-in. Totally normal, not sketchy. Some booking apps translate it oddly.",
        },
      ],
    },
    {
      icon: "🍜",
      title: "Food",
      tips: [
        {
          q: "No English menu — what do I do?",
          a: "Open Google Translate → tap the camera icon → point at the menu. Works surprisingly well. Or just point at what the table next to you is eating.",
        },
        {
          q: "Solo dining (혼밥) — is it weird?",
          a: "Not at all. Korea has one of the best solo dining cultures in Asia. Gimbap shops, noodle places, and convenience stores are all perfectly normal solo.",
        },
        {
          q: "How do I ask them to heat my convenience store food?",
          a: 'Hand the item to the staff and say "데워 주세요" (deh-wuh joo-seh-yo). They\'ll microwave it for free. This works at all GS25, CU, and 7-Eleven stores.',
        },
        {
          q: "Can I use delivery apps like Baemin or Coupang Eats?",
          a: "Foreign cards usually don't work on Korean delivery apps. Workaround: use a Travelwallet or Trabelogue prepaid card, or find restaurants via Google Maps that have walk-in ordering.",
        },
      ],
    },
    {
      icon: "💳",
      title: "Money & Payments",
      tips: [
        {
          q: "Where should I exchange money?",
          a: "Myeongdong street exchangers offer the best rates — often 3–5% better than the airport. Airport is fine for a small amount of emergency cash on arrival. Avoid hotel exchanges entirely.",
        },
        {
          q: "Traditional markets (전통시장) — cash only?",
          a: "Almost always yes. Bring cash to any traditional market. Some stalls are slowly adopting card payment but don't rely on it. ATMs are usually nearby.",
        },
        {
          q: "Wise / Revolut — do they work in Korea?",
          a: "Yes, both work well. Wise gives near mid-market exchange rates. Revolut works at ATMs and most card terminals. Still keep some Korean won cash as backup for markets and small shops.",
        },
        {
          q: "My foreign card keeps getting declined — why?",
          a: "Some Korean terminals don't accept foreign cards. Traditional markets, small restaurants, and PC bangs often require Korean cards or cash. Convenience stores, large chains, and department stores are almost always fine.",
        },
        {
          q: "What are Travelwallet and Trabelogue cards?",
          a: "Korean prepaid cards that foreigners can get. You load them with a foreign card and they work like a Korean card — including delivery apps and some Korean-only services. Very useful for longer stays.",
        },
      ],
    },
  ],
  nomad: [
    {
      icon: "🏦",
      title: "Banking",
      tips: [
        {
          q: "Best bank for digital nomads?",
          a: "Hana Bank — best English app, fast international transfers, most nomad-friendly overall. Shinhan Bank is also solid with English online banking support.",
        },
        {
          q: "Can I open a bank account without ARC?",
          a: "Woori Bank (우리은행 글로벌 지점) allows account opening without ARC for some visa types. From March 2025, Shinhan, Hana, iM, Busan, Jeonbuk, and Jeju banks accept mobile ARC for account opening.",
        },
        {
          q: "Wise vs bank SWIFT transfer — which is cheaper?",
          a: "Wise is almost always cheaper. Korean bank SWIFT fees: ₩5,000–30,000 per transfer plus correspondent fees. Wise: ~0.5–1% with no hidden charges. Use Wise for international transfers unless your employer requires a specific bank.",
        },
        {
          q: "What is the 한도계좌 (limited account) problem?",
          a: "New bank accounts in Korea start as limited — max ₩300,000/day transfer limit. To upgrade, bring your employment contract or lease agreement to a branch. Without it, the limit lifts automatically after 3–6 months.",
        },
      ],
    },
    {
      icon: "📶",
      title: "SIM & Internet",
      tips: [
        {
          q: "Airport SIM vs convenience store vs carrier store?",
          a: "Airport (KT/SKT booths): easy but expensive. Convenience store prepaid SIMs: cheap, data-only, no registration needed. Carrier store (SKT/KT/LG): requires ARC for contract, best long-term value.",
        },
        {
          q: "MVNO vs big 3 carriers (SKT/KT/LG) — real difference?",
          a: "MVNOs (알뜰폰) use the exact same towers as the big 3 at 30–50% lower cost. For data-heavy use, MVNOs are the best value. Voice plan registration requires ARC.",
        },
      ],
    },
    {
      icon: "💳",
      title: "Payments",
      tips: [
        {
          q: "Travelwallet / Trabelogue — worth getting?",
          a: "Yes. These Korean prepaid cards let foreigners access Korean payment infrastructure — including Coupang, delivery apps, and services that reject foreign cards. Load with any Visa/Mastercard.",
        },
        {
          q: "환전 꿀팁 — where to exchange for the best rate?",
          a: "Myeongdong street exchangers consistently beat airport and bank rates by 3–5%. For larger amounts, compare a few stalls — rates vary. Bring your passport.",
        },
      ],
    },
  ],
  student: [
    {
      icon: "🆔",
      title: "ARC (Alien Registration Card)",
      tips: [
        {
          q: "What is ARC and when do I apply?",
          a: "ARC is your Korean alien registration card — effectively your local ID. Apply within 90 days of arrival at your local immigration office (출입국관리소). Book an appointment at hikorea.go.kr before going.",
        },
        {
          q: "The ARC chicken-and-egg problem",
          a: "No ARC → can't open bank account → can't get phone plan → can't do OTP verification. Solution: Woori Bank lets you open a basic account without ARC. Use Wise or Revolut to cover expenses while you wait for your card.",
        },
        {
          q: "How long does ARC take?",
          a: "Typically 2–4 weeks. You'll receive a receipt after applying — some banks (including Hana and Shinhan since March 2025) accept the mobile ARC or the receipt in place of the physical card.",
        },
      ],
    },
    {
      icon: "🏦",
      title: "Banking by Visa Type",
      tips: [
        {
          q: "D-2 student visa — which bank?",
          a: "Shinhan Bank is best for D-2 students — student-specific accounts, English support, and campus branches near most universities. Bring your enrollment certificate (재학증명서).",
        },
        {
          q: "H-1 working holiday — banking?",
          a: "Hana or Shinhan. Bring passport + entry stamp + Korean address proof. Open an account as soon as possible — you'll need it for your first paycheck.",
        },
        {
          q: "B-2 tourist visa — can I open an account?",
          a: "Limited options. Basic foreign currency accounts only. Woori Bank global branch is your best bet. For everyday spending, rely on Wise or Revolut instead.",
        },
        {
          q: "What documents do I need?",
          a: "Passport + ARC (or receipt) + Korean address + enrollment or employment certificate. Some banks also require a letter of introduction from your school's international office.",
        },
      ],
    },
    {
      icon: "🏠",
      title: "Housing",
      tips: [
        {
          q: "전세 vs 월세 vs 고시원 — what's the difference?",
          a: "전세 (Jeonse): large lump-sum deposit, zero monthly rent — too complex for most new arrivals. 월세 (Wolse): monthly rent plus a smaller deposit, most common for students. 고시원: tiny furnished rooms from ₩300,000/month, all bills included. Best option for your first month.",
        },
        {
          q: "What to check before signing a lease?",
          a: "Verify the landlord actually owns the property — request a 등기부등본 (register extract) at any Minwon24 kiosk or government office. Never pay a deposit without verifying this first. Ask your school's international office for help.",
        },
        {
          q: "Do I need to register my address (전입신고)?",
          a: "Yes. Go to your local dong office (동사무소/주민센터) within 14 days of moving in. Required for health insurance enrollment and many other services.",
        },
      ],
    },
    {
      icon: "📶",
      title: "Phone & SIM",
      tips: [
        {
          q: "How do I get a phone plan as a foreigner?",
          a: "With ARC: go to any SKT/KT/LG or MVNO (알뜰폰) store with your ARC and passport. Without ARC: buy a prepaid data SIM at a convenience store or airport. Voice plans require ARC.",
        },
        {
          q: "MVNO (알뜰폰) — is it worth it?",
          a: "Yes for students. Same towers as the big carriers at 30–50% lower cost. Unlimited data plans start around ₩20,000–30,000/month. Register at any MVNO store with your ARC.",
        },
      ],
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      tips: [
        {
          q: "When am I enrolled in health insurance?",
          a: "D-2/D-4 visa holders are automatically enrolled in the National Health Insurance (NHIS) after 6 months in Korea. Before that, you're typically covered by your university's group insurance.",
        },
        {
          q: "How do I find an English-speaking doctor?",
          a: "Search '외국인 진료' on Naver Maps. Large hospitals — Severance (세브란스), Samsung Seoul (삼성서울병원), Asan (서울아산병원) — all have international clinics with English-speaking staff.",
        },
      ],
    },
  ],
};

const CITY_DATA: Record<string, { transport: string; reason: string; emoji: string }> = {
  Seoul: { transport: "Public Transit", emoji: "🚇", reason: "Seoul's subway and bus network is world-class. A T-Money card is all you need. Avoid driving — parking is expensive and traffic is brutal." },
  Busan: { transport: "Public Transit", emoji: "🚇", reason: "Busan subway covers all major areas including Haeundae and Seomyeon. Buses fill the gaps. No car needed." },
  Jeju: { transport: "Rental Car", emoji: "🚗", reason: "Buses exist but run every 30–60 minutes. Jeju is built for driving. Rent a car — from ₩30,000/day — it's the only real way to explore freely." },
  Gyeongju: { transport: "Rental Car", emoji: "🚗", reason: "Historic sites are spread across the whole city. Bikes work for the central Tumuli area but a car is much better for Bulguksa, Seokguram, and the countryside." },
  Jeonju: { transport: "Public Transit", emoji: "🚌", reason: "The Hanok Village and main sights are all walkable from the bus terminal. City buses cover the rest. No car necessary." },
  Sokcho: { transport: "Rental Car", emoji: "🚗", reason: "Seoraksan, the beaches, and the surrounding coast are too spread out for buses. Rent a car or join a day tour from Seoul." },
  Gangneung: { transport: "Rental Car", emoji: "🚗", reason: "Gyeongpo Beach, Anmok Coffee Street, and Jumunjin fishing village are all separated. A car gives you freedom to move between them easily." },
  Incheon: { transport: "Public Transit", emoji: "🚇", reason: "The AREX airport train and Incheon subway connect to all main areas. Songdo and Chinatown are both well-served. No car needed." },
  Daegu: { transport: "Public Transit", emoji: "🚇", reason: "Daegu has 3 subway lines covering the city. Seomun Market, Dongseongno, and main sights are all reachable without a car." },
  Daejeon: { transport: "Public Transit", emoji: "🚇", reason: "Compact city with solid subway coverage. Expo Science Park and Yuseong Hot Springs are both on the line." },
};

function TransportRecommender() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState<(typeof CITY_DATA)[string] | null>(null);
  const [notFound, setNotFound] = useState(false);

  const check = () => {
    const key = Object.keys(CITY_DATA).find(
      (k) => k.toLowerCase() === city.trim().toLowerCase()
    );
    if (key) {
      setResult(CITY_DATA[key]);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  return (
    <div className="rounded-2xl p-6 border-2" style={{ borderColor: "var(--amber)", backgroundColor: "#FAEEDA" }}>
      <h3 className="text-xl font-bold mb-1" style={{ color: "var(--gray)" }}>
        🗺️ Transit or Rental Car?
      </h3>
      <p className="text-sm mb-4" style={{ color: "var(--gray)" }}>Enter a Korean city — we'll tell you what makes sense.</p>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && check()}
          placeholder="e.g. Jeju, Busan, Gyeongju…"
          className="flex-1 rounded-lg px-4 py-2 border text-sm"
          style={{ borderColor: "var(--amber)", outline: "none" }}
        />
        <button
          onClick={check}
          className="px-5 py-2 rounded-lg font-semibold text-white text-sm"
          style={{ backgroundColor: "var(--amber)" }}
        >
          Check
        </button>
      </div>
      {result && (
        <div className="rounded-xl p-4" style={{ backgroundColor: "white" }}>
          <p className="text-2xl font-black mb-1">{result.emoji} {result.transport}</p>
          <p className="text-sm" style={{ color: "var(--gray)" }}>{result.reason}</p>
        </div>
      )}
      {notFound && (
        <p className="text-sm" style={{ color: "var(--red)" }}>
          No data for "{city}" yet. Try: Seoul, Busan, Jeju, Gyeongju, Sokcho, Gangneung, Jeonju, Daegu, Daejeon, Incheon.
        </p>
      )}
    </div>
  );
}

function AddressTranslator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const translate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError("");
    setResult("");
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      if (data.translated) setResult(data.translated);
      else setError("Translation failed. Make sure the address is in Korean.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl p-6 border-2" style={{ borderColor: "var(--teal)", backgroundColor: "#f0faf6" }}>
      <h3 className="text-xl font-bold mb-1" style={{ color: "var(--gray)" }}>
        📍 Korean Address → English
      </h3>
      <p className="text-sm mb-4" style={{ color: "var(--gray)" }}>
        Paste a Korean address and get it in English — for your taxi driver, hotel, or delivery.
      </p>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="서울특별시 중구 명동길 74"
        rows={3}
        className="w-full rounded-lg px-4 py-2 border text-sm mb-3 resize-none"
        style={{ borderColor: "var(--teal)", outline: "none" }}
      />
      <button
        onClick={translate}
        disabled={loading}
        className="px-6 py-2 rounded-lg font-semibold text-white text-sm disabled:opacity-50"
        style={{ backgroundColor: "var(--teal)" }}
      >
        {loading ? "Translating…" : "Translate"}
      </button>
      {result && (
        <div className="mt-4 rounded-xl p-4 font-mono text-sm" style={{ backgroundColor: "white", color: "var(--gray)" }}>
          {result}
        </div>
      )}
      {error && (
        <p className="mt-3 text-sm" style={{ color: "var(--red)" }}>{error}</p>
      )}
    </div>
  );
}

export default function KoreaPage() {
  const [userType, setUserType] = useState<UserType>(null);

  const options: { key: UserType; emoji: string; label: string; sub: string }[] = [
    { key: "traveler", emoji: "✈️", label: "Traveler", sub: "Short-term visit" },
    { key: "nomad", emoji: "💻", label: "Digital Nomad", sub: "Working remotely" },
    { key: "student", emoji: "🎓", label: "Student / Long-stay", sub: "Living in Korea" },
  ];

  const tips = userType ? TIPS[userType] : [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--amber)" }}>
          Korea Survival Guide
        </p>
        <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--gray)" }}>
          Everything Google<br />
          <span style={{ color: "var(--amber)" }}>doesn&apos;t tell you.</span>
        </h1>
        <p className="text-lg" style={{ color: "var(--gray)" }}>
          The tips only locals know — in English.
        </p>
      </div>

      {/* Onboarding */}
      <div className="mb-12">
        <p className="text-center text-sm font-semibold mb-6 uppercase tracking-widest" style={{ color: "var(--gray)" }}>
          Who are you?
        </p>
        <div className="grid grid-cols-3 gap-3">
          {options.map((o) => (
            <button
              key={o.key}
              onClick={() => setUserType(o.key)}
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

      {/* Tools */}
      <div className="grid gap-6 mb-12">
        <TransportRecommender />
        <AddressTranslator />
      </div>

      {/* Tips */}
      {userType && (
        <div>
          <h2 className="text-2xl font-black mb-8 text-center" style={{ color: "var(--gray)" }}>
            Tips for {options.find((o) => o.key === userType)?.label}s
          </h2>
          <div className="space-y-8">
            {tips.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold mb-4" style={{ color: "var(--gray)" }}>
                  {section.icon} {section.title}
                </h3>
                <div className="space-y-3">
                  {section.tips.map((tip) => (
                    <details
                      key={tip.q}
                      className="rounded-xl border overflow-hidden"
                      style={{ borderColor: "#e5e7eb" }}
                    >
                      <summary
                        className="px-5 py-4 font-semibold text-sm cursor-pointer select-none hover:bg-gray-50"
                        style={{ color: "var(--gray)" }}
                      >
                        {tip.q}
                      </summary>
                      <div
                        className="px-5 pb-4 text-sm leading-relaxed"
                        style={{ color: "var(--gray)", backgroundColor: "#fafafa" }}
                      >
                        {tip.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!userType && (
        <p className="text-center text-sm" style={{ color: "var(--gray)", opacity: 0.5 }}>
          Select who you are above to see your personalized tips ↑
        </p>
      )}

      {/* Category hub links */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--red)" }}>
            Browse by Category
          </p>
          <h2 className="text-2xl md:text-3xl font-black" style={{ color: "var(--gray)" }}>
            What are you into?
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { slug: "drama", emoji: "🎬", label: "K-Drama\nFilming Locations", color: "#1565c0", bg: "#e3f2fd" },
            { slug: "kpop", emoji: "🎤", label: "K-Pop\nPilgrimage", color: "#c62828", bg: "#fce4ec" },
            { slug: "culinary", emoji: "🍽️", label: "Culinary\nClass Wars", color: "#e65100", bg: "#fff3e0" },
            { slug: "personal-color", emoji: "🎨", label: "Personal Color\nDiagnosis", color: "#9c27b0", bg: "#f3e5f5" },
            { slug: "halal", emoji: "🕌", label: "Halal\nFood", color: "#2e7d32", bg: "#e8f5e9" },
            { slug: "vegan", emoji: "🌱", label: "Vegan &\nVegetarian", color: "#558b2f", bg: "#f1f8e9" },
          ].map((cat) => (
            <a
              key={cat.slug}
              href={`/korea/${cat.slug}`}
              className="rounded-2xl p-5 text-center no-underline transition-transform hover:scale-105"
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

      <RouteSection />
    </div>
  );
}
