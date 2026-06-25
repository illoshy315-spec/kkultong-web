"use client";

import { useState } from "react";

type UserType = "traveler" | "nomad" | "student" | null;

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
          a: "Buy one at any convenience store (GS25, CU, 7-Eleven) for ₩3,000. Charge it at subway ticket machines or the counter. Works on buses, subways, and even taxis.",
        },
        {
          q: "Bus number system — what do the numbers mean?",
          a: "Blue (간선) = main city routes. Green (지선) = neighborhood feeders. Yellow = city center loops. Red = express to suburbs. Ignore the color, trust Kakao Maps.",
        },
        {
          q: "KTX vs SRT vs Mugunghwa — which one?",
          a: "KTX = fastest, priciest. SRT = slightly cheaper than KTX for southern routes, departs from Suseo station. Mugunghwa = slow but cheap, good for short hops.",
        },
        {
          q: "Can I use Kakao T with a foreign card?",
          a: "Yes — register a Visa/Mastercard in the app. Some users report issues; if it fails, add PayPal as a backup payment method.",
        },
      ],
    },
    {
      icon: "💳",
      title: "Money & Payments",
      tips: [
        {
          q: "Where should I exchange money?",
          a: "Myeongdong street exchangers give the best rate — often 3–5% better than the airport. Airport is fine for emergency cash on arrival. Avoid hotel exchanges.",
        },
        {
          q: "Traditional markets (전통시장) — cash only?",
          a: "Yes, almost always. Bring cash. Some stalls are slowly adopting card but don't count on it. ATMs are usually nearby.",
        },
        {
          q: "Wise / Revolut — do they work in Korea?",
          a: "Yes, both work well. Wise gives near mid-market rates. Revolut works at ATMs and most card terminals. Keep a backup of Korean won cash.",
        },
        {
          q: "My foreign card is getting declined — why?",
          a: "Some Korean terminals don't accept foreign cards. Markets, small restaurants, and PC bangs often require Korean cards or cash. Convenience stores and big chains are usually fine.",
        },
      ],
    },
    {
      icon: "🍜",
      title: "Food",
      tips: [
        {
          q: "No English menu — what do I do?",
          a: "Open Google Translate, tap the camera icon, point at the menu. Works surprisingly well for Korean menus. Or just point at what others are eating.",
        },
        {
          q: "Solo dining (혼밥) — is it weird?",
          a: "Not at all. Korea is one of the best solo dining cultures in Asia. Gimbap places, noodle spots, and convenience stores are all totally normal solo.",
        },
        {
          q: "How do I ask them to heat my convenience store food?",
          a: 'Hand the item to the staff and say "데워 주세요" (deh-wuh joo-seh-yo). They\'ll microwave it for free.',
        },
        {
          q: "Can I use delivery apps (배달의민족, Coupang Eats)?",
          a: "Foreign cards often don't work on Korean delivery apps. Workaround: ask a Korean friend, or use Google Maps to find places that have English ordering.",
        },
      ],
    },
    {
      icon: "🏨",
      title: "Accommodation",
      tips: [
        {
          q: "Motel vs guesthouse vs jjimjilbang — which?",
          a: "Motel (모텔): cheap, private, no frills. Guesthouse: social, dorms or private. Jjimjilbang (찜질방): Korean sauna, sleep on the heated floor for ~₩15,000. Worth trying once.",
        },
        {
          q: "Do I need my passport at check-in?",
          a: "Yes, always bring your passport. Hotels and motels are required by law to record foreign guest passport numbers.",
        },
        {
          q: "What is 대실 (daesilhour rent)?",
          a: "A 2–3 hour daytime room rental, common at motels. Used for naps between check-out and check-in. Totally normal, not sketchy — but some apps translate it awkwardly.",
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
          a: "Hana Bank — English app, fast international transfers, best overall for nomads. Shinhan is also solid with English online banking.",
        },
        {
          q: "Can I open a bank account without ARC?",
          a: "Woori Bank (우리은행) global branch allows account opening without ARC for some visa types. From March 2025, Hana, Shinhan, and others accept mobile ARC.",
        },
        {
          q: "Wise vs bank SWIFT — which is cheaper for sending money?",
          a: "Wise is almost always cheaper. Bank SWIFT fees: ₩5,000–30,000 per transfer + correspondent fees. Wise: ~0.5–1% with no hidden fees.",
        },
      ],
    },
    {
      icon: "📶",
      title: "SIM & Internet",
      tips: [
        {
          q: "Airport SIM vs convenience store vs carrier store?",
          a: "Airport (KT/SKT booths): easy, expensive. Convenience store prepaid SIMs: cheap, data-only. Carrier store (SKT/KT/LG): requires ARC for contract, best long-term value.",
        },
        {
          q: "MVNO vs big 3 carriers — is there a real difference?",
          a: "MVNOs (알뜰폰) use the same towers as SKT/KT/LG at 30–50% lower cost. For data only, MVNOs are the best value. Voice calls need ARC to register.",
        },
        {
          q: "Best cafes for working in Seoul?",
          a: "Hongdae and Mapo area have many 24hr cafes. Look for '24시' on the sign. Most Korean cafes have fast WiFi — just buy a drink every 2 hours.",
        },
      ],
    },
    {
      icon: "💳",
      title: "Payments & Finance",
      tips: [
        {
          q: "TraveLogic / Trevelwallet cards — worth it?",
          a: "Travelwallet and Trabelogue cards are Korean prepaid cards foreigners can get. They let you use Korean apps like Coupang. Load with foreign card. Very useful.",
        },
        {
          q: "How do I avoid the Korean 한도계좌 (limited account) trap?",
          a: "New accounts start as limited (한도제한) — max ₩300,000/day transfer. Bring employment contract or lease to the bank to upgrade. Takes 1–4 weeks otherwise.",
        },
      ],
    },
  ],
  student: [
    {
      icon: "🆔",
      title: "ARC & Registration",
      tips: [
        {
          q: "What is ARC and when do I apply?",
          a: "ARC (Alien Registration Card) = your Korean ID. Apply within 90 days of arrival at the local immigration office (출입국관리소). Book online at hikorea.go.kr.",
        },
        {
          q: "The ARC chicken-and-egg problem",
          a: "No ARC → can't open bank account → can't get phone → can't do OTP. Solution: Woori Bank lets you open a basic account without ARC. Use Wise/Revolut to survive the wait.",
        },
        {
          q: "How long does ARC take?",
          a: "2–4 weeks typically. Some offices faster. After applying, you'll get a receipt — some banks accept this in place of the card itself.",
        },
      ],
    },
    {
      icon: "🏦",
      title: "Banking by Visa",
      tips: [
        {
          q: "D-2 student visa — which bank?",
          a: "Shinhan Bank is best for D-2 students — student-specific accounts, English support, and campus branches. Bring your enrollment certificate (재학증명서).",
        },
        {
          q: "H-1 working holiday — banking options?",
          a: "Hana or Shinhan. You'll need your passport + entry stamp + address proof. Open immediately on arrival — you need it for your first paycheck.",
        },
        {
          q: "What documents do I need to open an account?",
          a: "Passport + ARC (or receipt) + Korean address + enrollment/employment certificate. Some banks require an additional reference letter from your school.",
        },
      ],
    },
    {
      icon: "🏠",
      title: "Housing",
      tips: [
        {
          q: "Jeonse vs wolse vs gosiwon — what's the difference?",
          a: "전세 (Jeonse): lump-sum deposit, no monthly rent — too complex for most students. 월세 (Wolse): monthly rent + smaller deposit. 고시원 (Gosiwon): tiny furnished rooms from ₩300,000/month, all-inclusive. Most common for new arrivals.",
        },
        {
          q: "What to check before signing a lease?",
          a: "Verify the landlord is the actual owner (등기부등본 — register at any Minwon 24 kiosk). Never pay deposit without this. Ask your school's international office for help.",
        },
        {
          q: "Do I need to register my address (전입신고)?",
          a: "Yes. Go to your local dong office (동사무소/주민센터) within 14 days of moving in. Required for health insurance and many services.",
        },
      ],
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      tips: [
        {
          q: "When do I get enrolled in health insurance?",
          a: "D-2/D-4 visa holders are automatically enrolled after 6 months in Korea. Before that, you're covered by your university's insurance or NHIS voluntary enrollment.",
        },
        {
          q: "How do I find an English-speaking doctor?",
          a: "Search '외국인 진료' (foreigner clinic) on Naver Maps. Larger hospitals (세브란스, 삼성서울, 아산) all have international clinics with English staff.",
        },
      ],
    },
  ],
};

const CITY_DATA: Record<string, { transport: string; reason: string; emoji: string }> = {
  Seoul: { transport: "Public Transit", emoji: "🚇", reason: "Seoul's subway + bus network is world-class. T-Money card is all you need. Avoid driving — parking is a nightmare." },
  Busan: { transport: "Public Transit", emoji: "🚇", reason: "Busan subway covers all major areas. For Haeundae and Gwangalli, buses fill the gaps. No car needed." },
  Jeju: { transport: "Rental Car", emoji: "🚗", reason: "Buses exist but run infrequently. Jeju is built for driving. Rent a car — it's cheap (from ₩30,000/day) and the only real way to explore." },
  Gyeongju: { transport: "Rental Car", emoji: "🚗", reason: "Historic sites are spread out. Bikes work for the central area but a car is much better for Bulguksa, Tumuli, and the countryside." },
  Jeonju: { transport: "Public Transit", emoji: "🚌", reason: "The Hanok Village and main sights are all walkable from the bus terminal. Buses cover the rest. Car not necessary." },
  Sokcho: { transport: "Rental Car", emoji: "🚗", reason: "Seoraksan and the surrounding coast are too spread out for buses. Rent a car or join a tour from Seoul." },
  Gangneung: { transport: "Rental Car", emoji: "🚗", reason: "Gyeongpo Beach, Anmok Coffee Street, and Jumunjin are all separated. Car gives you freedom to explore at your pace." },
  Incheon: { transport: "Public Transit", emoji: "🚇", reason: "Incheon subway connects to the airport and main areas. Songdo is well-served. Bus + subway is enough." },
  Daegu: { transport: "Public Transit", emoji: "🚇", reason: "Daegu subway has 3 lines covering the city well. Seomun Market and main spots all reachable without a car." },
  Daejeon: { transport: "Public Transit", emoji: "🚇", reason: "Compact city with solid subway coverage. Expo Science Park and Yuseong Hot Springs all on the line." },
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
      <p className="text-sm mb-4" style={{ color: "var(--gray)" }}>Enter a Korean city and we'll tell you what makes sense.</p>
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
          <p className="text-2xl font-black mb-1">
            {result.emoji} {result.transport}
          </p>
          <p className="text-sm" style={{ color: "var(--gray)" }}>{result.reason}</p>
        </div>
      )}
      {notFound && (
        <p className="text-sm" style={{ color: "var(--red)" }}>
          We don't have data for "{city}" yet. Big cities: Seoul, Busan. Small cities: Jeju, Gyeongju, Sokcho.
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
      else setError("Translation failed. Check that the address is in Korean.");
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
      <p className="text-sm mb-4" style={{ color: "var(--gray)" }}>Paste a Korean address and get it in English for your taxi driver or hotel.</p>
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
    { key: "traveler", emoji: "✈️", label: "Traveler", sub: "Visiting Korea" },
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
          <span style={{ color: "var(--amber)" }}>doesn't tell you.</span>
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

      {/* Tools — always visible */}
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
    </div>
  );
}
