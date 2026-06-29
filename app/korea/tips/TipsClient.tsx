"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type UserType = "traveler" | "nomad" | "student" | null;

const TIPS: Record<string, { icon: string; title: string; tips: { q: string; a: string }[] }[]> = {
  traveler: [
    {
      icon: "🚌",
      title: "Getting Around",
      tips: [
        { q: "How do I get a T-Money card?", a: "Buy one at any convenience store (GS25, CU, 7-Eleven) for ₩3,000. Charge it at subway ticket machines or at the counter. Works on buses, subways, and taxis." },
        { q: "What do Korean bus numbers mean?", a: "Blue (간선) = main city routes. Green (지선) = neighborhood feeders. Yellow = city center loops. Red = express to suburbs. When in doubt, use Naver Maps — it's more accurate than Google for Korean transit." },
        { q: "KTX vs SRT vs Mugunghwa — which one?", a: "KTX = fastest, most expensive. SRT = slightly cheaper, departs from Suseo station (not Seoul Station). Mugunghwa = slow but cheap, good for short hops. Book KTX/SRT at korail.go.kr or the Korail app." },
        { q: "Small cities — should I rent a car?", a: "Yes. For places like Jeju, Gyeongju, Sokcho, and most rural areas, buses are infrequent. Renting a car is cheap (from ₩30,000/day) and the only real way to explore freely." },
        { q: "Can I use Kakao T with a foreign card?", a: "Yes — register a Visa/Mastercard in the app. Some users report issues; if it fails, try adding PayPal as a backup. Kakao T is the most reliable taxi app in Korea." },
      ],
    },
    {
      icon: "🏨",
      title: "Accommodation",
      tips: [
        { q: "Motel vs guesthouse vs jjimjilbang — which?", a: "Motel (모텔): cheap private rooms, no frills, totally fine. Guesthouse: social atmosphere, dorms or private rooms. Jjimjilbang (찜질방): Korean sauna where you sleep on a heated floor for ~₩15,000. Worth trying at least once." },
        { q: "Do I need my passport at check-in?", a: "Yes, always bring your passport. Korean hotels and motels are legally required to record foreign guest passport numbers at check-in." },
        { q: "What is 대실 (daesil)?", a: "A 2–3 hour short-stay daytime room rental. Common at motels — used for naps between check-out and check-in. Totally normal, not sketchy. Some booking apps translate it oddly." },
      ],
    },
    {
      icon: "🍜",
      title: "Food",
      tips: [
        { q: "No English menu — what do I do?", a: "Open Google Translate → tap the camera icon → point at the menu. Works surprisingly well. Or just point at what the table next to you is eating." },
        { q: "Solo dining (혼밥) — is it weird?", a: "Not at all. Korea has one of the best solo dining cultures in Asia. Gimbap shops, noodle places, and convenience stores are all perfectly normal solo." },
        { q: "How do I ask them to heat my convenience store food?", a: 'Hand the item to the staff and say "데워 주세요" (deh-wuh joo-seh-yo). They\'ll microwave it for free. This works at all GS25, CU, and 7-Eleven stores.' },
        { q: "Can I use delivery apps like Baemin or Coupang Eats?", a: "Foreign cards usually don't work on Korean delivery apps. Workaround: use a Travelwallet or Trabelogue prepaid card, or find restaurants via Google Maps that have walk-in ordering." },
      ],
    },
    {
      icon: "💳",
      title: "Money & Payments",
      tips: [
        { q: "Where should I exchange money?", a: "Myeongdong street exchangers offer the best rates — often 3–5% better than the airport. Airport is fine for a small amount of emergency cash on arrival. Avoid hotel exchanges entirely." },
        { q: "Traditional markets (전통시장) — cash only?", a: "Almost always yes. Bring cash to any traditional market. Some stalls are slowly adopting card payment but don't rely on it. ATMs are usually nearby." },
        { q: "Wise / Revolut — do they work in Korea?", a: "Yes, both work well. Wise gives near mid-market exchange rates. Revolut works at ATMs and most card terminals. Still keep some Korean won cash as backup for markets and small shops." },
        { q: "My foreign card keeps getting declined — why?", a: "Some Korean terminals don't accept foreign cards. Traditional markets, small restaurants, and PC bangs often require Korean cards or cash. Convenience stores, large chains, and department stores are almost always fine." },
        { q: "What are Travelwallet and Trabelogue cards?", a: "Korean prepaid cards that foreigners can get. You load them with a foreign card and they work like a Korean card — including delivery apps and some Korean-only services. Very useful for longer stays." },
      ],
    },
  ],
  nomad: [
    {
      icon: "🏦",
      title: "Banking",
      tips: [
        { q: "Best bank for digital nomads?", a: "Hana Bank — best English app, fast international transfers, most nomad-friendly overall. Shinhan Bank is also solid with English online banking support." },
        { q: "Can I open a bank account without ARC?", a: "Woori Bank (우리은행 글로벌 지점) allows account opening without ARC for some visa types. From March 2025, Shinhan, Hana, iM, Busan, Jeonbuk, and Jeju banks accept mobile ARC for account opening." },
        { q: "Wise vs bank SWIFT transfer — which is cheaper?", a: "Wise is almost always cheaper. Korean bank SWIFT fees: ₩5,000–30,000 per transfer plus correspondent fees. Wise: ~0.5–1% with no hidden charges. Use Wise for international transfers unless your employer requires a specific bank." },
        { q: "What is the 한도계좌 (limited account) problem?", a: "New bank accounts in Korea start as limited — max ₩300,000/day transfer limit. To upgrade, bring your employment contract or lease agreement to a branch. Without it, the limit lifts automatically after 3–6 months." },
      ],
    },
    {
      icon: "📶",
      title: "SIM & Internet",
      tips: [
        { q: "Airport SIM vs convenience store vs carrier store?", a: "Airport (KT/SKT booths): easy but expensive. Convenience store prepaid SIMs: cheap, data-only, no registration needed. Carrier store (SKT/KT/LG): requires ARC for contract, best long-term value." },
        { q: "MVNO vs big 3 carriers (SKT/KT/LG) — real difference?", a: "MVNOs (알뜰폰) use the exact same towers as the big 3 at 30–50% lower cost. For data-heavy use, MVNOs are the best value. Voice plan registration requires ARC." },
      ],
    },
    {
      icon: "💳",
      title: "Payments",
      tips: [
        { q: "Travelwallet / Trabelogue — worth getting?", a: "Yes. These Korean prepaid cards let foreigners access Korean payment infrastructure — including Coupang, delivery apps, and services that reject foreign cards. Load with any Visa/Mastercard." },
        { q: "환전 꿀팁 — where to exchange for the best rate?", a: "Myeongdong street exchangers consistently beat airport and bank rates by 3–5%. For larger amounts, compare a few stalls — rates vary. Bring your passport." },
      ],
    },
  ],
  student: [
    {
      icon: "🆔",
      title: "ARC (Alien Registration Card)",
      tips: [
        { q: "What is ARC and when do I apply?", a: "ARC is your Korean alien registration card — effectively your local ID. Apply within 90 days of arrival at your local immigration office (출입국관리소). Book an appointment at hikorea.go.kr before going." },
        { q: "The ARC chicken-and-egg problem", a: "No ARC → can't open bank account → can't get phone plan → can't do OTP verification. Solution: Woori Bank lets you open a basic account without ARC. Use Wise or Revolut to cover expenses while you wait for your card." },
        { q: "How long does ARC take?", a: "Typically 2–4 weeks. You'll receive a receipt after applying — some banks (including Hana and Shinhan since March 2025) accept the mobile ARC or the receipt in place of the physical card." },
      ],
    },
    {
      icon: "🏦",
      title: "Banking by Visa Type",
      tips: [
        { q: "D-2 student visa — which bank?", a: "Shinhan Bank is best for D-2 students — student-specific accounts, English support, and campus branches near most universities. Bring your enrollment certificate (재학증명서)." },
        { q: "H-1 working holiday — banking?", a: "Hana or Shinhan. Bring passport + entry stamp + Korean address proof. Open an account as soon as possible — you'll need it for your first paycheck." },
        { q: "B-2 tourist visa — can I open an account?", a: "Limited options. Basic foreign currency accounts only. Woori Bank global branch is your best bet. For everyday spending, rely on Wise or Revolut instead." },
        { q: "What documents do I need?", a: "Passport + ARC (or receipt) + Korean address + enrollment or employment certificate. Some banks also require a letter of introduction from your school's international office." },
      ],
    },
    {
      icon: "🏠",
      title: "Housing",
      tips: [
        { q: "전세 vs 월세 vs 고시원 — what's the difference?", a: "전세 (Jeonse): large lump-sum deposit, zero monthly rent — too complex for most new arrivals. 월세 (Wolse): monthly rent plus a smaller deposit, most common for students. 고시원: tiny furnished rooms from ₩300,000/month, all bills included. Best option for your first month." },
        { q: "What to check before signing a lease?", a: "Verify the landlord actually owns the property — request a 등기부등본 (register extract) at any Minwon24 kiosk or government office. Never pay a deposit without verifying this first. Ask your school's international office for help." },
        { q: "Do I need to register my address (전입신고)?", a: "Yes. Go to your local dong office (동사무소/주민센터) within 14 days of moving in. Required for health insurance enrollment and many other services." },
      ],
    },
    {
      icon: "📶",
      title: "Phone & SIM",
      tips: [
        { q: "How do I get a phone plan as a foreigner?", a: "With ARC: go to any SKT/KT/LG or MVNO (알뜰폰) store with your ARC and passport. Without ARC: buy a prepaid data SIM at a convenience store or airport. Voice plans require ARC." },
        { q: "MVNO (알뜰폰) — is it worth it?", a: "Yes for students. Same towers as the big carriers at 30–50% lower cost. Unlimited data plans start around ₩20,000–30,000/month. Register at any MVNO store with your ARC." },
      ],
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      tips: [
        { q: "When am I enrolled in health insurance?", a: "D-2/D-4 visa holders are automatically enrolled in the National Health Insurance (NHIS) after 6 months in Korea. Before that, you're typically covered by your university's group insurance." },
        { q: "How do I find an English-speaking doctor?", a: "Search '외국인 진료' on Naver Maps. Large hospitals — Severance (세브란스), Samsung Seoul (삼성서울병원), Asan (서울아산병원) — all have international clinics with English-speaking staff." },
      ],
    },
  ],
};

const OPTIONS = [
  { key: "traveler" as UserType, emoji: "✈️", label: "Traveler", sub: "Short-term visit" },
  { key: "nomad" as UserType, emoji: "💻", label: "Digital Nomad", sub: "Working remotely" },
  { key: "student" as UserType, emoji: "🎓", label: "Student / Long-stay", sub: "Living in Korea" },
];

export default function TipsClient() {
  const searchParams = useSearchParams();
  const [userType, setUserType] = useState<UserType>(null);

  useEffect(() => {
    const type = searchParams.get("type") as UserType;
    if (type && ["traveler", "nomad", "student"].includes(type)) {
      setUserType(type);
    }
  }, [searchParams]);

  const tips = userType ? TIPS[userType] : [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm mb-6" style={{ color: "var(--gray)", opacity: 0.5 }}>
        <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a> → Survival Tips
      </p>

      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--amber)" }}>
          Korea Survival Tips
        </p>
        <h1 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--gray)" }}>
          Everything Google<br />
          <span style={{ color: "var(--amber)" }}>doesn&apos;t tell you.</span>
        </h1>
        <p className="text-base" style={{ color: "var(--gray)", opacity: 0.7 }}>
          Select who you are — get tips that actually apply to you.
        </p>
      </div>

      {/* Who are you */}
      <div className="grid grid-cols-3 gap-3 mb-12">
        {OPTIONS.map((o) => (
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

      {/* Tips */}
      {userType ? (
        <div className="space-y-8">
          {tips.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold mb-4" style={{ color: "var(--gray)" }}>
                {section.icon} {section.title}
              </h2>
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
                    <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "var(--gray)", backgroundColor: "#fafafa" }}>
                      {tip.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm py-8" style={{ color: "var(--gray)", opacity: 0.4 }}>
          Select who you are above ↑
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
