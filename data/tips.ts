export type Tip = { q: string; a: string; source?: { label: string; url: string } };
export type TipSection = { icon: string; title: string; tips: Tip[] };
export type TipsData = Record<string, TipSection[]>;

const TIPS: TipsData = {
  traveler: [
    {
      icon: "🚌", title: "Getting Around",
      tips: [
        {
          q: "How do I get a T-Money card and where can I use it?",
          a: "Buy a T-Money card at any convenience store (GS25, CU, 7-Eleven) or subway station vending machine for ₩2,500–₩5,000 (card only — you load money separately). Tap it on buses, subways, and taxis nationwide. Fares are ₩100 cheaper per ride vs. cash. Top up with cash at any convenience store or subway machine.",
          source: { label: "visitkorea.or.kr", url: "https://english.visitkorea.or.kr" },
        },
        {
          q: "What's the difference between KTX and SRT?",
          a: "Both are high-speed trains (~300 km/h). KTX departs from Seoul Station and more; SRT departs from Suseo Station (southeast Seoul) and is ~10% cheaper (Seoul–Busan: KTX ₩59,800 vs SRT ₩52,700 as of 2025). Book both at letskorail.com (English available). For tourists, the KORAIL PASS covers KTX but not SRT.",
          source: { label: "letskorail.com", url: "https://www.letskorail.com/ebizbf/EbizBfKrPassAboutEng.do" },
        },
        {
          q: "Why won't Kakao T accept my foreign card?",
          a: "Kakao T's in-app payment requires a Korean card. Set payment to 'Pay to Driver' (cash or card at the taxi). Alternatives that accept foreign cards: Uber (uses local taxis), K.Ride (English interface), and TADA — all work without a Korean phone number.",
          source: { label: "visitkorea.or.kr", url: "https://english.visitkorea.or.kr" },
        },
        {
          q: "What's the best way from Incheon Airport to Seoul?",
          a: "AREX Express (₩9,500, 43 min to Seoul Station — fastest and cheapest). Airport Limousine Bus (₩17,000–₩18,000, ~60–90 min, drops near major hotels). Taxi (~₩55,000–₩80,000, 50–70 min). AREX is the sweet spot for most travelers.",
          source: { label: "airport.kr", url: "https://www.airport.kr/ap_en/index.do" },
        },
        {
          q: "What do the bus colors mean in Seoul?",
          a: "Blue (파랑): main trunk routes. Green (초록): branch buses feeding subway stations. Red (빨강): express to suburbs (higher fare). Yellow (노랑): circular routes within one district. Tap T-Money when boarding AND when getting off — transfers between buses and subway within 30 min are free (up to 4 transfers).",
          source: { label: "visitkorea.or.kr", url: "https://english.visitkorea.or.kr" },
        },
        {
          q: "Where should I rent a car vs. use public transport?",
          a: "Seoul and Busan: public transport is faster and parking is a nightmare. Rent a car for Jeju Island (₩50,000–₩100,000/day), Sokcho/Gangneung coastal area, and Gyeongju. You'll need an International Driving Permit — get it before arriving in Korea.",
          source: { label: "koroad.or.kr", url: "https://www.koroad.or.kr/kp_web/internationalLicense.do" },
        },
      ],
    },
    {
      icon: "🏨", title: "Accommodation",
      tips: [
        {
          q: "Motel vs. guesthouse vs. hotel — what should I expect?",
          a: "Motels (모텔): ₩40,000–₩80,000/night, private room+bathroom, perfectly fine for travelers. Guesthouses: ₩15,000–₩35,000/night for a dorm bed. 'Daesil' (대실) is 3–4 hour day-use rental (₩20,000–₩40,000) for resting between check-out and a late flight — totally normal, nothing sketchy.",
          source: { label: "visitkorea.or.kr", url: "https://english.visitkorea.or.kr" },
        },
        {
          q: "Can I sleep at a jjimjilbang (찜질방)?",
          a: "Yes! Entry ₩10,000–₩18,000. Sleep in the common heated-floor area with provided mats. Gender-separated bathing (fully nude, no swimsuits), then shared sauna/sleep zone in provided shorts + t-shirt. Top picks: Siloam Sauna (Seoul Station), Spa Land Centum City (Busan).",
          source: { label: "visitkorea.or.kr", url: "https://english.visitkorea.or.kr" },
        },
        {
          q: "Do I need to show my passport at check-in?",
          a: "Yes — Korean law requires all accommodation to record guest passport or ARC numbers at check-in. This applies to hotels, motels, guesthouses, hanok stays, and Airbnbs. It's routine. Just have your passport ready.",
        },
        {
          q: "Is Airbnb legal in Korea in 2025?",
          a: "Yes, but regulated. Legitimate listings must display a business registration number. Avoid listings that say 'tell them you're a friend' — that's illegal and risky. Booking.com and Agoda are safer for short stays.",
          source: { label: "visitkorea.or.kr", url: "https://english.visitkorea.or.kr" },
        },
      ],
    },
    {
      icon: "🍜", title: "Food",
      tips: [
        {
          q: "How do I read Korean menus if I don't speak Korean?",
          a: "Use Google Translate camera mode — point your phone at the menu and it overlays English in real time. Papago (Naver's app) is even better for Korean. In tourist areas (Myeongdong, Hongdae, Itaewon) ask 'English menu?' (영어 메뉴 있어요? yeong-eo menyu isseoyo?).",
        },
        {
          q: "Is it weird to eat alone in Korea?",
          a: "'Honbap' (혼밥, eating alone) is mainstream. Best solo spots: gimbap (김밥) shops, noodle restaurants, food courts, convenience stores. Avoid Korean BBQ (most require 2+ servings). Look for '1인분 가능' (one person portion available) on the sign.",
        },
        {
          q: "Can I use food delivery apps without a Korean card?",
          a: "Baemin (배민) now accepts foreign phone numbers and foreign credit cards (via NICEPAY), plus WeChat Pay and Alipay+ as of 2025–2026. Guest checkout also works for one-off orders. Coupang Eats has an 'Overseas Issued Card' option and partial English menus. Both apps are primarily in Korean — having a Korean phone number helps. For late-night: convenience stores are 24/7.",
          source: { label: "livinginkorea.co", url: "https://www.livinginkorea.co/guides/daily-life/delivery/" },
        },
        {
          q: "How do I heat food at a convenience store?",
          a: "Bring your food to the counter and say '데워 주세요' (de-wo ju-se-yo = please heat this). The cashier will microwave it. Every GS25, CU, and 7-Eleven has a microwave. Some stores have self-service microwaves — look for '전자레인지' sign.",
        },
        {
          q: "Do I need to tip in Korea?",
          a: "No. Tipping does not exist in Korea — not in restaurants, taxis, bars, or hotels. Leaving money on the table will result in someone chasing you down to return it. The bill is the final price.",
        },
        {
          q: "How do I get more side dishes? Is water free?",
          a: "Banchan (반찬) are unlimited and free — ask '반찬 더 주세요' (banchan deo ju-se-yo). Water is always free and self-serve — look for '정수기' (water dispenser). Press the call button on your table if you need the server.",
        },
      ],
    },
    {
      icon: "💳", title: "Money & Payments",
      tips: [
        {
          q: "Where should I exchange money for the best rate?",
          a: "Myeongdong currency exchange booths offer the best rates — often 1–3% better than banks and 3–5% better than Incheon Airport. Exchange ₩50,000–₩100,000 at the airport first (enough for transport + first meal), then do your main exchange in Myeongdong. Bring crisp USD $100 bills for the best rate.",
        },
        {
          q: "Does Wise or Revolut work at Korean ATMs?",
          a: "Yes, but with caveats. Wise gives near mid-market rates on weekdays (~1.5% markup weekends). Best ATMs for foreign cards: SC제일은행 (Standard Chartered), Woori Bank 글로벌ATM (₩3,600 fee), GS25 ATMs (₩3,000–₩4,000 fee). Max withdrawal ₩1,000,000/day. Always choose 'CREDIT' or 'CHECKING' — never 'CASH ADVANCE.'",
        },
        {
          q: "Why is my foreign card getting declined in Korea?",
          a: "Traditional markets, small restaurants, and PC bangs often require Korean cards or cash. Korea uses local payment processors that sometimes reject foreign-issued cards. Carry ₩50,000–₩100,000 cash as backup, and consider getting a WOWPASS card — available at airport kiosks, no ID needed.",
          source: { label: "wowpass.io", url: "https://www.wowpass.io" },
        },
        {
          q: "What's a WOWPASS card and should I get one?",
          a: "WOWPASS is a prepaid card combining Mastercard payments, real-time currency exchange, and T-money transit access in one card. Pick it up at airport kiosks or subway stations (~425 locations), load with foreign cash or card, use anywhere Mastercard is accepted. No bank account or ARC required. Rates are better than airport money changers.",
          source: { label: "wowpass.io", url: "https://www.wowpass.io" },
        },
      ],
    },
    {
      icon: "🗣️", title: "Basic Korean",
      tips: [
        {
          q: "What are the essential phrases for eating out?",
          a: "1. '이거 주세요' (i-geo ju-se-yo) = this, please\n2. '계산해 주세요' (gye-san-hae ju-se-yo) = bill please\n3. '카드 돼요?' (ka-deu dwae-yo?) = do you take card?\n4. '포장해 주세요' (po-jang-hae ju-se-yo) = to-go please\n5. '데워 주세요' (de-wo ju-se-yo) = please heat this\n6. '물 주세요' (mul ju-se-yo) = water please\n7. '반찬 더 주세요' (ban-chan deo ju-se-yo) = more side dishes\n8. '맛있어요' (ma-sit-sseo-yo) = it's delicious!",
        },
        {
          q: "What Korean phrases do I need for taxis?",
          a: "'[place] 가 주세요' ([place] ga ju-se-yo) = take me to [place]. '여기 세워 주세요' (yeo-gi se-wo ju-se-yo) = stop here. '영수증 주세요' (yeong-su-jeung ju-se-yo) = receipt please. Pro tip: show the driver your destination in Korean on Naver Map — much easier than pronunciation.",
        },
        {
          q: "What do I say in an emergency?",
          a: "'도와주세요!' (do-wa-ju-se-yo!) = Help! '병원' (byeong-won) = hospital. '경찰' (gyeong-chal) = police. '불이야!' (bu-ri-ya!) = Fire! For tourists: call 1330 (Tourism Helpline) — English 24/7. Just say 'English please.'",
          source: { label: "1330 Korea Travel Helpline", url: "https://english.visitkorea.or.kr" },
        },
      ],
    },
    {
      icon: "🚨", title: "Emergency & Health",
      tips: [
        {
          q: "What are the emergency numbers in Korea?",
          a: "112: Police (English 24/7). 119: Fire + Ambulance (English available). 1330: Korea Travel Helpline — 24/7, free, English + 7 languages. Use for directions, translation, restaurant bookings, lost items — not just emergencies. 1345: Immigration Contact Center. 182: Lost & Found hotline. Save 1330 — it's the single most useful number for tourists.",
          source: { label: "english.visitkorea.or.kr", url: "https://english.visitkorea.or.kr" },
        },
        {
          q: "Where can I find an English-speaking doctor in Seoul?",
          a: "Major hospitals have International Clinics: Samsung Medical Center (+82-2-3410-0200), Asan Medical Center (+82-2-3010-5001), Severance Hospital (+82-2-2228-5800), SNU Hospital (+82-2-2072-0505). For minor issues, local clinics (의원) are everywhere, cheap (₩10,000–₩30,000 walk-in), and many doctors speak basic medical English.",
          source: { label: "snuh.org/global", url: "https://www.snuh.org/global/en/main.do" },
        },
        {
          q: "What medicine can I buy without a prescription?",
          a: "Pharmacies (약국, green cross sign) sell: Tylenol (타이레놀, ₩3,000–₩5,000) for headache/fever; Gelfos (겔포스, ₩5,000–₩8,000) for stomach issues; Pancold (판콜, ₩3,000–₩5,000) for cold symptoms. Antibiotics require prescription by law. Pharmacists are trained and often speak basic medical English.",
        },
        {
          q: "I lost something on the subway — what do I do?",
          a: "Visit lost112.go.kr (National Police Lost & Found Portal, English available). For Seoul Metro Line 1–8: call 1577-1234 or visit the terminal station office. Items held 7 days before going to police. Korea has one of the world's best lost & found systems — return rates are remarkably high.",
          source: { label: "lost112.go.kr", url: "https://www.lost112.go.kr" },
        },
      ],
    },
  ],

  nomad: [
    {
      icon: "🏦", title: "Banking",
      tips: [
        {
          q: "Which banks let foreigners open an account?",
          a: "The most foreigner-friendly banks are KEB Hana (하나은행), Shinhan (신한은행), Woori (우리은행), and IBK (기업은행). Visit a branch with a Foreign Desk (외국인 전담 창구). Bring: passport, visa page copy, and a local phone number. An ARC unlocks full functionality but isn't always required to open a basic account.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "Can I open an account without an ARC?",
          a: "Yes, but you'll get a limited account (한도계좌) — daily transfer cap of ₩300,000–₩1,000,000. Woori Bank and Hana Bank are most willing to open accounts with passport only. From March 2025, Shinhan, Hana, IBK, and others also accept a Mobile ARC (issued via the HiKorea app) in place of the physical card.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "Wise vs. Korean bank SWIFT — which is cheaper for international transfers?",
          a: "Wise is almost always cheaper. Korean bank SWIFT fees: ₩5,000–₩10,000 per transfer plus up to 2% spread. Wise: ~0.4–0.7% in conversion fees, no hidden charges. Set up Wise as your primary international buffer and link it to your Korean bank once your transfer limit is lifted.",
          source: { label: "wise.com", url: "https://wise.com" },
        },
        {
          q: "Which bank apps work in English?",
          a: "Shinhan SOL and KEB Hana Bank apps offer the most complete English interfaces (as of 2025). All major bank apps require Korean phone number OTP verification — secure your local SIM before registering. For a fully English banking experience, many nomads use Wise as a primary wallet and a Korean bank only for local ATM access.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
      ],
    },
    {
      icon: "📶", title: "SIM & Internet",
      tips: [
        {
          q: "What's the easiest way to get a SIM after landing?",
          a: "Airport SIM counters at Incheon (SKT, KT, LG U+ booths in T1 and T2 arrivals) — easy but slightly more expensive. Convenience stores sell data-only prepaid SIMs. eSIMs from Airalo or Holafly work for the first few days while you sort out a long-term plan.",
          source: { label: "airport.kr", url: "https://www.airport.kr/ap_en/index.do" },
        },
        {
          q: "MVNO (알뜰폰) vs. SKT/KT/LG — what's the real difference?",
          a: "MVNOs (알뜰폰) lease the same towers as the big 3 at 30–50% lower cost. For nomads: Chingu Mobile (친구모바일), Woori Mobile (우리모바일), and Kimchi Mobile (김치모바일) cater to foreigners — passport registration, English support, foreign card payment. Unlimited data + calls from ~₩16,980–₩30,000/month vs. ₩50,000–₩80,000 for carrier-direct plans.",
          source: { label: "kimchimobile.com", url: "https://www.kimchimobile.com" },
        },
        {
          q: "Can I get a voice SIM without an ARC?",
          a: "Yes — tourist prepaid voice plans are available from KT, SKT, and LG U+ with just a passport. MVNOs Chingu Mobile and Woori Mobile also offer voice SIMs for foreigners without ARC. Postpaid contracts (cheaper rates, more data) require an ARC.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
      ],
    },
    {
      icon: "💳", title: "Payments",
      tips: [
        {
          q: "My foreign card keeps getting declined — what's going on?",
          a: "Korea's payment infrastructure is domestic-first. Visa/Mastercard work at malls, convenience stores, and large restaurants. Common decline situations: food delivery apps, online checkouts, transit top-up apps, traditional markets (재래시장). Keep ₩50,000–₩100,000 cash as backup.",
          source: { label: "wowpass.io", url: "https://www.wowpass.io" },
        },
        {
          q: "What is WOWPASS and should I get one?",
          a: "WOWPASS combines a Mastercard prepaid card, real-time currency exchange, and T-money transit in one card. Available at ~425 kiosks nationwide (airports, subway stations, hotels). Load with foreign cash or card, no bank account or ARC required. Better exchange rates than airport money changers.",
          source: { label: "wowpass.io", url: "https://www.wowpass.io" },
        },
        {
          q: "Can foreigners use Kakao Pay or Naver Pay?",
          a: "Both require real-name verification linked to a Korean bank account — in practice you need an ARC. Without one, registration fails at the identity verification step. For short-term nomads, WOWPASS or a Samsung/Apple Pay-linked foreign card is more practical.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
      ],
    },
    {
      icon: "🏠", title: "Housing",
      tips: [
        {
          q: "What rental types are available for a short-stay nomad?",
          a: "월세 (wolse, monthly rent + small deposit) is most practical. For 1–3 months: furnished officetels or share houses via Enkostay, 33m2, or Airbnb. 고시원 (gosiwon) from ₩300,000/month is the cheapest — tiny private room, utilities included. 전세 (jeonse, large lump-sum deposit) is not practical for short stays.",
          source: { label: "stay.enko.kr", url: "https://stay.enko.kr" },
        },
        {
          q: "What are typical monthly rents in nomad neighborhoods?",
          a: "Seongsu (성수): ₩900K–₩1,500K/month. Hongdae (홍대): ₩700K–₩1,200K. Mapo/Hapjeong (마포/합정): ₩750K–₩1,300K. Itaewon/Yongsan (이태원/용산): ₩900K–₩1,600K. These are furnished officetel or one-room monthly rates with a small deposit (보증금 ₩1M–₩5M typically).",
          source: { label: "stay.enko.kr", url: "https://stay.enko.kr" },
        },
        {
          q: "Do I need to register my address (전입신고)?",
          a: "Foreign nationals staying 90+ days on a long-term visa should register their address at the local 주민센터 (Community Service Center) or at hikorea.go.kr. Required for ARC renewal. Even on a tourist visa you're technically required to report your address, though enforcement is minimal for short stays.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
      ],
    },
    {
      icon: "💻", title: "Coworking & Cafes",
      tips: [
        {
          q: "What are the main coworking chains and prices?",
          a: "FastFive (패스트파이브): 60+ locations, day pass ₩9,900–₩15,000, monthly hot desk from ₩280,000. WeWork: 10+ Seoul locations, monthly from ₩350,000–₩500,000, English-friendly. SparkPlus: premium finish, from ₩300,000/month. All offer drop-in day passes — book via their apps.",
          source: { label: "fastfive.co.kr", url: "https://www.fastfive.co.kr" },
        },
        {
          q: "Is it okay to work from cafes all day?",
          a: "Yes — café work culture (카페 작업 문화) is mainstream. Chains like Ediya (이디야), Mega Coffee (메가커피), and A Twosome Place (투썸플레이스) have relaxed policies. Some tourist-area cafes have 1–2 hour limits during peak hours. Wi-Fi is nearly universal. Buy a second drink after a few hours — it's considered polite.",
          source: { label: "english.visitkorea.or.kr", url: "https://english.visitkorea.or.kr" },
        },
        {
          q: "Are there free coworking spaces in Seoul?",
          a: "Seoul Metropolitan Government operates 청년공간 (Youth Spaces) in most districts — publicly funded, bookable at yeyak.seoul.go.kr. Primarily for residents aged 19–39, some allow foreigners with ARC. For non-residents without ARC, a ₩9,900 FastFive day pass is usually the practical floor.",
          source: { label: "yeyak.seoul.go.kr", url: "https://yeyak.seoul.go.kr" },
        },
      ],
    },
    {
      icon: "🧾", title: "Tax & Visa",
      tips: [
        {
          q: "Does Korea have a Digital Nomad Visa?",
          a: "Yes — Korea launched the F-1-D Workation Visa (워케이션 비자) on January 1, 2024. It grants a 1-year stay, renewable once (up to 2 years total), for remote workers employed by overseas companies. Apply at a Korean embassy or consulate outside Korea before entry. Check immigration.go.kr for the latest status.",
          source: { label: "immigration.go.kr", url: "https://www.immigration.go.kr/immigration_eng/index.do" },
        },
        {
          q: "What are the F-1-D visa requirements?",
          a: "Minimum annual income: ~₩104.8M KRW (~$73,710 USD, based on 2025 GNI × 2 — threshold rises annually, verify current figure at your specific consulate). Must be employed by a non-Korean company for at least 1 year. Age 18+. Private health insurance with ₩100M hospital coverage + home-country evacuation required (this wording is the most common rejection reason). Apply at a Korean consulate abroad; or change status inside Korea from B-1/B-2/C-3 visa via HiKorea.",
          source: { label: "immigration.go.kr", url: "https://www.immigration.go.kr/immigration_eng/index.do" },
        },
        {
          q: "What if I don't qualify for F-1-D? Can I work remotely on a tourist visa?",
          a: "Most Western passport holders get 90 days visa-free. K-ETA exemption is extended through December 31, 2026 for most visa-exempt countries — confirm current status at k-eta.go.kr before travel. Working remotely for overseas clients on a tourist visa is a legal gray zone — not explicitly authorized. Repeated short stays for visa runs (leaving briefly to Japan or elsewhere) carry escalating risk as immigration flags the pattern over time.",
          source: { label: "immigration.go.kr", url: "https://www.immigration.go.kr/immigration_eng/index.do" },
        },
        {
          q: "What is the 183-day tax rule?",
          a: "If you spend 183+ days in Korea in a calendar year, you become a Korean tax resident. Important exception: if you've resided in Korea for 5 years or less during the prior 10-year period, you're only taxed on Korean-source income plus foreign income remitted to Korea — not your full global income. After 5 years, full worldwide income taxation applies. Under 183 days total: Korea has no tax claim on foreign-sourced remote income. Korea has tax treaties with 90+ countries — check yours to avoid double taxation.",
          source: { label: "nts.go.kr/english", url: "https://www.nts.go.kr/english/main.do" },
        },
      ],
    },
    {
      icon: "📱", title: "Essential Apps",
      tips: [
        {
          q: "Why doesn't Google Maps work well in Korea?",
          a: "South Korean law restricts export of detailed map data to foreign servers — Google can't show full turn-by-turn driving navigation or real-time transit data. Use Naver Map (네이버 지도) instead — English UI, real-time subway/bus ETAs, walking routes. Kakao Map is a strong alternative. Download Naver Map before landing.",
          source: { label: "navermaps.com", url: "https://map.naver.com" },
        },
        {
          q: "What other apps should every digital nomad have?",
          a: "KakaoTalk (카카오톡): Korea's dominant messaging app — ~95% of Koreans use it, registers with any phone number. Papago: better than Google Translate for Korean. Coupang Eats: food delivery, accepts foreign cards. Danggeun Market (당근마켓/Karrot): secondhand goods, requires Korean number, cash meetup payment.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
      ],
    },
  ],

  student: [
    {
      icon: "🆔", title: "ARC",
      tips: [
        {
          q: "When and where do I apply for my ARC?",
          a: "Apply within 90 days of arrival at your local immigration office. Book an appointment first at hikorea.go.kr — walk-ins are often turned away. Bring: passport, visa grant notice, application form, passport photo (3.5×4.5cm), ₩35,000 fee (increased from ₩30,000 as of January 2025), and Certificate of Enrollment (재학증명서) from your university. Processing: 2–4 weeks.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "Can I use my ARC application receipt before the physical card arrives?",
          a: "Partially. The receipt works at some banks (Shinhan, Hana may open a limited account with it) and for SIM card applications. It does NOT work for Kakao Pay/Naver Pay, online government services, or full phone plan activation. Expect 2–4 weeks for the physical card.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "What's the mobile ARC and can I use it instead?",
          a: "Korea launched mobile ARC in 2024 — a digital version in the 정부24+ (Government 24+) app (rebranded July 2025). Legally equivalent to the physical card at government offices and police checks. However, many banks, phone stores, and services still require the physical card in 2025. Treat mobile ARC as a backup, not a replacement.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "I lost my ARC — what do I do?",
          a: "Go to your local immigration office immediately. Bring your passport + ₩35,000 for reissue (fee increased January 2025). Processing takes 1–2 weeks. Keep a photo of your ARC on your phone for emergencies. File a police report if you suspect theft to protect against identity fraud.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
      ],
    },
    {
      icon: "🏦", title: "Banking",
      tips: [
        {
          q: "Which bank should I open as a D-2 student?",
          a: "Shinhan Bank (SOL Global app, strong English support) and Hana Bank (best international transfer features) are top choices. IBK (기업은행) is popular on-campus — many universities have IBK branches used to handling foreign students. Bring: ARC, passport, Certificate of Enrollment (재학증명서), and Korean phone number.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "Can I open a bank account on a D-4 (language study) visa?",
          a: "Yes, with restrictions. Major banks (Shinhan, Hana, IBK) accept D-4 with ARC + enrollment certificate. You'll likely get a limited account (₩300,000/day cap) for the first 3 months. IBK is often the most D-4 friendly — language schools frequently partner with them.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "I'm on H-1 working holiday — how do I get a bank account?",
          a: "You have full access to all major banks with ARC + passport. Nonghyup (NH Bank) and IBK are popular for working holiday holders — flexible payroll and international transfer options. Unlike students, H-1 holders may qualify for credit cards after 3 months of income history.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "How do I lift the daily transfer limit on my account?",
          a: "Visit your branch with ARC + Certificate of Enrollment (or employment contract) + proof of address. Say '한도제한 풀어주세요' (han-do-je-han pu-reo-ju-se-yo). Shinhan and Hana typically lift limits within 1 week. Having your school's international office call ahead helps.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
      ],
    },
    {
      icon: "🏠", title: "Housing",
      tips: [
        {
          q: "Dorm vs. goshiwon vs. one-room — which should I choose?",
          a: "Start with the dorm. University dorms cost ₩600,000–₩1,200,000/semester (~₩150,000–₩300,000/month), include utilities + WiFi, and require no deposit. After one semester: goshiwon (₩250,000–₩500,000/month, no deposit, tiny private room) for budget; one-room (₩450,000–₩800,000/month + ₩5M deposit) for independence.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "What's goshiwon life actually like?",
          a: "Your room is 5–10m² but private. Includes: bed, desk, closet, mini-fridge. Shared: kitchen (free rice + kimchi common), bathrooms, laundry. Utilities + WiFi included. No deposit, leave with 2 weeks notice. Walls are thin — you'll hear neighbors. Great for your first semester while you figure out Korea.",
        },
        {
          q: "Where should I live near my university?",
          a: "Yonsei/Ewha/Sogang → Sinchon (신촌): lively, ₩550K–₩800K/month. Korea University → Anam (안암): cheaper, ₩450K–₩650K. Hanyang University → Wangsimni (왕십리): great transport, ₩450K–₩650K. SNU → Sillim/Nakseongdae: quietest, ₩400K–₩600K.",
        },
        {
          q: "How do I register my address (전입신고) and why does it matter?",
          a: "Complete move-in registration within 14 days of moving at your local 주민센터 or at hikorea.go.kr. Mandatory — fines apply if skipped. Required for health insurance, ARC validity, bank accounts, and tax registration. Bring: ARC, lease contract, landlord's contact info.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
      ],
    },
    {
      icon: "📶", title: "Phone & SIM",
      tips: [
        {
          q: "Should I get a prepaid SIM or wait for a postpaid plan?",
          a: "Get a prepaid SIM at the airport or convenience store for your first month. Once you have your ARC, switch to an MVNO (알뜰폰) postpaid plan. MVNO plans cost ₩8,800–₩25,000/month vs. ₩47,000+ for SKT/KT/LG direct. You can port your prepaid number. The switch takes 30 minutes at any MVNO store with your ARC.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "What's the best cheap MVNO plan in 2025?",
          a: "Hello Mobile (헬로모바일) and U+ MVNO (유모비) offer the cheapest student plans: ₩8,800/month for 7GB data + unlimited calls/texts (24-month contract). Unlimited data: ₩25,000/month. All require ARC. Ask for '가장 싼 요금제' (ga-jang ssan yo-geum-je = cheapest plan).",
        },
      ],
    },
    {
      icon: "🏥", title: "Health Insurance",
      tips: [
        {
          q: "When do I enroll in Korean health insurance as a student?",
          a: "Both D-2 (student) and D-4 (language study) visa holders must enroll in NHIS after 6 months of legal stay — this became mandatory from March 2021 (the 2021 change removed the grace period, but not the 6-month stay requirement). Before the 6-month mark, your university's group insurance covers basic care — check with your international office for details.",
          source: { label: "nhis.or.kr", url: "https://www.nhis.or.kr" },
        },
        {
          q: "How much does health insurance cost for students?",
          a: "As of 2025, students pay approximately ₩76,390/month. NHIS covers 60% of most medical costs, 80% for hospital stays. Dental and vision are partially covered. Prescription medication is heavily subsidized.",
          source: { label: "nhis.or.kr", url: "https://www.nhis.or.kr" },
        },
        {
          q: "How do I find an English-speaking doctor?",
          a: "Major university hospitals have International Clinics: Samsung Medical Center (+82-2-3410-0200), Asan Medical Center (+82-2-3010-5001), Severance Hospital (+82-2-2228-5800), SNU Hospital (+82-2-2072-0505). For everyday care: local clinics (의원) near campus — use GoodDoc (굿닥) app with English filter.",
          source: { label: "snuh.org/global", url: "https://www.snuh.org/global/en/main.do" },
        },
      ],
    },
    {
      icon: "💼", title: "Part-time Work",
      tips: [
        {
          q: "Can I work part-time on a D-2 student visa?",
          a: "Yes, but with strict requirements: (1) 6+ months in Korea, (2) university permission via a part-time work confirmation form from the international office, (3) immigration approval at hikorea.go.kr. Hours depend on Korean proficiency: without TOPIK, maximum 10 hours/week during semester. With TOPIK Level 2 or above, up to 20–25 hours/week. Unlimited hours during school vacations (with TOPIK). Working without approval is visa fraud.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "What about H-1 working holiday?",
          a: "H-1 allows up to 1,300 hours per year (~25 hours/week). Work in most industries except adult entertainment, gambling, and professions requiring Korean licenses. No university permission needed — just passport and ARC. Popular jobs: cafe barista, restaurant server, retail.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "What's the minimum wage in 2025?",
          a: "The official 2025 minimum wage in Korea is ₩10,030/hour (₩2,096,270/month for full-time — Korea's first minimum wage above ₩10,000). Part-timers get overtime (150%) after 15 hours/week. Tax withholding: ~3.3% for independent contractors, or progressive income tax (6–45%) for regular employees. Employers must provide a payslip (급여명세서). Cash-in-hand work is illegal and offers no worker protections.",
          source: { label: "moel.go.kr", url: "https://www.moel.go.kr" },
        },
      ],
    },
    {
      icon: "🎓", title: "University Life",
      tips: [
        {
          q: "What should I do at my university's international office?",
          a: "Go during your first week. They handle: ARC application support, banking introduction letters, part-time work permits, health insurance guidance, and visa extensions. They also run orientation and buddy matching with Korean students. This is your single most important resource — introduce yourself early.",
        },
        {
          q: "How do I make Korean friends?",
          a: "Join a student club (동아리, dong-ari) — Club Fair happens at the start of each semester (March/September). Also try language exchange programs (언어교환) — you teach English, learn Korean 1:1 over coffee. Most universities run these officially through the international office.",
        },
        {
          q: "How does the university cafeteria (학식) work?",
          a: "Buy a meal ticket from the kiosk (tap student ID or T-money), hand it to the counter, get your tray. Meals cost ₩3,000–₩5,000 — the cheapest food in Korea. Menus rotate daily and are posted outside. Some cafeterias have halal or vegetarian options — ask your international office.",
        },
        {
          q: "How do I get documents (transcripts, enrollment certificates) in English?",
          a: "Use the automated kiosk (증명서 발급기) in the main admin building. Tap student ID, select document, choose 'English,' pay ₩500–₩1,000 per document, it prints instantly. Documents: transcript (성적증명서), enrollment certificate (재학증명서), expected graduation certificate (졸업예정증명서).",
        },
      ],
    },
    {
      icon: "🚨", title: "Emergency & Legal",
      tips: [
        {
          q: "What emergency numbers do I need?",
          a: "112: Police (English 24/7). 119: Fire + Ambulance. 1330: Korea Travel Helpline — 24/7, free, English + 7 languages. Use for ANY problem. 1345: Immigration Contact Center for visa/residency questions. Save all four in your phone right now.",
          source: { label: "english.visitkorea.or.kr", url: "https://english.visitkorea.or.kr" },
        },
        {
          q: "How do I extend my visa before it expires?",
          a: "Apply at hikorea.go.kr at least 2 weeks before expiration. Bring: ARC, passport, Certificate of Enrollment, bank statement (₩5M+ balance recommended), proof of tuition payment. H-1 cannot be extended — 12 months maximum, you must leave. Applying after expiration: ₩100,000+ penalty fee.",
          source: { label: "hikorea.go.kr", url: "https://www.hikorea.go.kr" },
        },
        {
          q: "What happens if I overstay my visa?",
          a: "Administrative fines starting at ₩100,000, increasing with overstay length. Re-entry ban of 1–5 years. Possible deportation at your own expense. If you've already overstayed: go to immigration immediately, pay the fine, apply for voluntary departure — you may avoid a ban.",
          source: { label: "immigration.go.kr", url: "https://www.immigration.go.kr/immigration_eng/index.do" },
        },
        {
          q: "Where can I get free legal help as a foreigner?",
          a: "Korea has a 'Village Lawyers for Foreigners' program via immigration offices — free legal counseling. Seoul Global Center (Jongno) offers free walk-in legal consultations: deposit disputes, contracts, employment rights. Korean Bar Association legal aid hotline: +82-2-3487-6124. For criminal matters, you have the right to an interpreter.",
          source: { label: "immigration.go.kr", url: "https://www.immigration.go.kr/immigration_eng/1858/subview.do" },
        },
      ],
    },
  ],
};

export default TIPS;
