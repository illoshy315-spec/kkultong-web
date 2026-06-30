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
        {
          q: "Does Google Maps work in Korea?",
          a: "No — Korean law prohibits exporting detailed map data to foreign servers, so Google Maps can't show turn-by-turn navigation or transit directions. Download Naver Map (네이버 지도) or KakaoMap before you land. Both have English modes. KakaoMap is more visual; Naver Map is more detailed. Also download Subway Korea (지하철종결자) — it works offline and shows all metro lines, exits, and first/last train times.",
          source: { label: "navermaps.com", url: "https://map.naver.com" },
        },
        {
          q: "What is the Climate Card and is it worth it for tourists?",
          a: "₩65,000/month for unlimited subway + bus + public bike (따릉이). Since March 2025, you can buy and reload with international credit/debit cards at subway station kiosks. Worth it if you're staying 2+ weeks and riding daily — a single subway ride costs ₩1,550, so you break even after ~42 rides. Note: two missed tap-outs suspend the card for 24 hours.",
          source: { label: "english.seoul.go.kr", url: "https://english.seoul.go.kr/policy/transportation/climate-card/" },
        },
        {
          q: "How do I use Seoul's public bike (Ttareungi / 따릉이) as a foreigner without a Korean phone number?",
          a: "Download the '서울자전거 따릉이' app and tap 'Foreigner' on the first screen — this bypasses Korean phone verification. Pay with an overseas Visa or Mastercard. A 1-hour pass costs ₩1,000; 2-hour pass ₩2,000; 7-day unlimited (1-hour rides) ₩3,000. Scan the QR code on the bike dock to unlock. For help, call the Dasan Call Center (120) and request English.",
          source: { label: "Seoul Public Bike", url: "https://english.seoul.go.kr/service/movement/seoul-public-bike/1-seoul-public-bike/" },
        },
        {
          q: "What is the difference between 고속버스 (express bus) and 시외버스 (intercity bus)?",
          a: "고속버스 runs non-stop on highways between major cities — book at kobus.co.kr (English available). 시외버스 makes stops at smaller towns and is slightly cheaper — book at bustago.or.kr. Both accept international Visa/Mastercard online and at ticket windows. If your destination is a mid-size city or rural area, 시외버스 is often your only option.",
          source: { label: "kobus.co.kr", url: "https://www.kobus.co.kr/web/eng/index.jsp" },
        },
        {
          q: "How do I book KTX tickets online with a foreign card?",
          a: "Use the official 'Korail Talk' app (English available) or letskorail.com — both accept international Visa and Mastercard. When prompted for a resident number, enter your passport number instead. Tickets open exactly 28 days before departure at 07:00 KST; popular routes (Seoul–Busan on holidays) sell out within minutes. Third-party platforms like Trip.com or Klook also list KTX tickets with English customer support.",
          source: { label: "letskorail.com", url: "https://www.letskorail.com/ebizbf/EbizBfKrPassAboutEng.do" },
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
        {
          q: "What platforms let me find a short-term furnished apartment for 1–4 weeks without a Korean bank account?",
          a: "33M2 (33m2.com) lists officetels, goshiwons, and studios by week with no Korean co-signer. Enkostay and Mangrove.city also have English listings with flexible terms from 1 week. Payment by international credit card upfront. Weekly rates: ₩200,000–₩600,000 for a private room in Seoul. Avoid Naver Real Estate (네이버 부동산) for short stays — requires Korean phone and real-estate agent for standard leases.",
          source: { label: "stay.enko.kr", url: "https://stay.enko.kr" },
        },
        {
          q: "Do I have to carry my passport at all times in Korea?",
          a: "Yes — Korean law requires all foreign nationals to carry their passport or ARC at all times. Police and immigration officers can legally request it. In practice, many travelers keep a phone photo as a quick reference, but it's not a legal substitute if formally asked. Accommodation may hold your passport briefly at check-in to record entry — this is legal and they must return it promptly.",
          source: { label: "Cheongchul Law", url: "https://cheongchul.com/en/blog/can-foreigners-refuse-to-show-their-passport-to-police-in-korea" },
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
        {
          q: "Does Apple Pay or Google Pay work at Korean stores?",
          a: "Apple Pay works at most major retailers and convenience stores as of 2024–2025. iPhone users can even load transit credit via the MobileTmoney app into Apple Wallet (requires a Mastercard) and tap at subway gates. Google Pay acceptance is more limited. Small restaurants and traditional markets often don't support either — carry ₩50,000–₩100,000 cash as backup.",
          source: { label: "hodurang.kr", url: "https://hodurang.kr/apple-pay-korea-transit-seoul-guide/" },
        },
        {
          q: "What are the best ATMs for foreign cards and what fees should I expect?",
          a: "SC제일은행 (Standard Chartered): lowest fee, ~₩3,000. Woori Bank 글로벌ATM: ₩3,600. GS25/CU ATMs labeled 'Global ATM': ₩3,000–₩4,000 + your home bank's fee. Avoid hotel ATMs — fees are higher. Max withdrawal typically ₩1,000,000/day. Withdraw larger amounts less frequently to minimize per-transaction fees.",
          source: { label: "bankmeister.com/korea", url: "https://bankmeister.com/korea/card" },
        },
        {
          q: "Can I use Alipay or WeChat Pay in Korea?",
          a: "Yes — accepted at a growing number of merchants, particularly in tourist-heavy areas like Myeongdong, Hongdae, and Jeju Island. Major department stores (Lotte, Shinsegae, Hyundai) and duty-free shops accept both. Coverage outside tourist corridors is inconsistent — most neighborhood restaurants won't accept these. For everyday payments, WOWPASS or a foreign card is more reliable.",
          source: { label: "bankmeister.com/korea", url: "https://bankmeister.com/korea/card" },
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
          a: "Call 182 (National Police lost & found, press 2 for English) or file online at lost112.go.kr. Provide your subway line, direction, boarding/alighting stations, approximate time, and car position. For Kakao T taxis, report in-app under 'Lost Item'. The KTO Travel Helpline (1330, free, 24/7) can speak to staff on your behalf if there's a language barrier.",
          source: { label: "lost112.go.kr", url: "https://www.lost112.go.kr/manyLanguage.do?langType=en&html=en_Declare" },
        },
        {
          q: "I take ADHD medication. Can I bring it into Korea?",
          a: "Amphetamine-based medications (Adderall, Vyvanse) are classified as narcotics in Korea and are effectively prohibited — carrying them without prior approval risks arrest. Methylphenidate (Ritalin, Concerta) requires a 'Narcotics Import Permit' from Korea's MFDS (mfds.go.kr) applied at least 2–3 weeks before arrival. Atomoxetine (Strattera) doesn't require a permit but bring a doctor's letter. Note: a nationwide methylphenidate shortage has persisted since 2024 — bring your full supply.",
          source: { label: "nomedic.co", url: "https://nomedic.co/travel/south-korea/adhd-south-korea-travel-guide" },
        },
        {
          q: "Can I bring my regular prescription medication into Korea?",
          a: "Non-controlled prescription drugs may be imported for personal use up to a 3-month supply or six bottles, whichever is smaller. Carry the original prescription, a doctor's letter stating your medical condition, and keep drugs in their original labeled packaging. For controlled substances (benzodiazepines, opioids), apply to MFDS (mfds.go.kr/eng) for a 'Narcotics Import Permit' at least 2–3 weeks before travel. CBD oil and any cannabis derivatives are completely prohibited.",
          source: { label: "kr.usembassy.gov", url: "https://kr.usembassy.gov/services-controlled-substance/" },
        },
        {
          q: "Where can I find English-speaking mental health support in Seoul?",
          a: "Seoul Counseling Center (seoulcounseling.com) near Sinsa Station has US-licensed therapists and accepts international insurance. Seoul Global Center (seoulforeigner.kr) offers subsidized counseling — 5 sessions for ₩50,000 for foreign residents. For crisis situations: Korea Suicide Prevention Hotline (1393) has English services; KTO Travel Helpline (1330) can connect you to appropriate resources 24/7.",
          source: { label: "hackskorea.com", url: "https://hackskorea.com/mental-health-korea-foreigners/" },
        },
        {
          q: "Can I see a dentist in Korea as a foreigner without Korean insurance?",
          a: "Yes — walk-ins accepted at most clinics (appointments recommended). Without NHIS: check-up with X-ray ₩50,000–₩150,000; basic filling ₩50,000–₩120,000; extraction from ₩30,000. Still much cheaper than the US or UK. Bring your passport. Most foreign travel insurance reimburses on a claim-after-payment basis. English-speaking options in Gangnam, Hongdae, and Itaewon areas.",
          source: { label: "seoulinternationaldentist.com", url: "https://www.seoulinternationaldentist.com/blog/do-korean-dental-clinics-accept-overseas-insurance" },
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
        {
          q: "Can I get a Korean credit card as a foreigner?",
          a: "Yes — with ARC and 6+ months of Korean income history. The KB Kookmin My WE:SH card is popular for broad cashback. The Hyundai Card ZERO Edition2 waives overseas transaction fees. Bring your ARC, passport, and 3 months of pay stubs. Expect 1–2 week approval. Some banks offer a foreigner starter card with a lower credit limit while you build local credit history.",
          source: { label: "daylongs.com", url: "https://daylongs.com/blog/en/best-credit-cards-korea-2026/" },
        },
        {
          q: "How do I send money home without huge fees?",
          a: "Use Wise — fees average under 1% with mid-market rates, transfers arrive in 1–2 business days. Avoid bank SWIFT transfers (₩5,000–₩15,000 fee + 1–3% FX margin). Without an ARC, Western Union and MoneyGram operate at 우체국 (post offices) with passport-only ID. Foreign residents can remit up to USD 50,000/year from earned income without special Bank of Korea reporting.",
          source: { label: "wise.com", url: "https://wise.com" },
        },
        {
          q: "What is the 상생페이백 cashback program and can foreigners join?",
          a: "Sangsaeng Payback (상생페이백) is a government-backed cashback program open to anyone 19+ — including foreign residents — using a Korean credit or debit card. If your monthly spending exceeds your 2023 monthly average, you earn 20% cashback on the increased portion, up to ₩100,000/month and ₩300,000 total. No application required — eligibility is checked automatically. The card must be issued by a Korean bank linked to a Korean 010 number for notification.",
          source: { label: "koreantopik.com", url: "https://www.koreantopik.com/2025/08/korea-launches-payback-program-up-to.html" },
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
        {
          q: "My tourist eSIM doesn't have a Korean 010 number — why does that matter?",
          a: "Tourist eSIMs and data-only SIMs have no Korean 010 number, which means you can't receive SMS verification codes required by Korean banks, Kakao, Naver, and most government services. The solution: get a postpaid SIM or MVNO SIM that includes a real 010 number — requires your ARC. In the meantime, Kimchi Mobile and some airport SIM providers offer prepaid SIMs with a 010 number using just a passport; verify the plan includes SMS capability before buying.",
          source: { label: "kimchimobile.com", url: "https://www.kimchimobile.com/korean-phone-number-verification/" },
        },
        {
          q: "What is 알뜰폰 (budget MVNO) and can foreigners switch to it?",
          a: "알뜰폰 MVNOs (KT M Mobile, Hellovision Mobile, Chingu Mobile) resell SKT/KT/LG U+ network at 50–70% lower prices. Plans start at ₩9,900/month. Foreigners can switch after getting an ARC and Korean bank account. Keep your existing 010 number via 번호 이동 (number portability). Trade-off: Korean-only customer service. Chingu Mobile specifically targets foreigners with English support.",
          source: { label: "krutils.com", url: "https://krutils.com/main/guides/korea-sim-guide-2026/" },
        },
        {
          q: "Does Korea have public free Wi-Fi and is it reliable for work?",
          a: "Government-run free Wi-Fi covers most subway stations, bus stops, parks, and public libraries (SSID: 'PublicWifi' or 'Seoul WiFi'). Speed is typically 50–100 Mbps but unreliable for video calls due to congestion and time-outs. Convenience stores (CU, GS25, 7-Eleven) also broadcast free Wi-Fi. For serious work sessions, use a study café (스터디카페) or dedicated coworking space. Always use a VPN on public Wi-Fi — traffic is unencrypted and logged under Korea's Communications Act.",
          source: { label: "sharedhomies.com", url: "https://sharedhomies.com/blog/navigating-seoul-solo-apps-esim-foreigner" },
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
          a: "Kakao Pay requires a Korean 010 number and Korean bank account. Naver Pay updated in late 2025 to accept international Visa/Mastercard through a separate gateway. A workaround: load Naver Pay Points at GS25 or CU with cash — these work like card payments across the Naver ecosystem. For taxis, Kakao T accepts foreign credit cards directly without the full Kakao Pay setup.",
          source: { label: "onboardkorea.com", url: "https://onboardkorea.com/kakao-pay-for-foreigners/" },
        },
        {
          q: "What is 제로페이 (Zeropay) and can foreigners use it?",
          a: "Zeropay is a government-backed QR payment system where merchants pay 0–0.5% vs. the typical 1.5–2.5% card fee. Consumers scan a QR code linked to a Korean bank account. Foreigners can access it through Naver Pay or Kakao Pay if a Korean bank account is linked. Useful at traditional markets and government-run venues that don't accept card. Look for the blue 제로페이 sticker at the register.",
          source: { label: "mileasia.com", url: "https://mileasia.com/korea/best-apps-for-traveling-in-korea/" },
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
        {
          q: "What is a sharehouse (쉐어하우스) and how does it compare to renting alone?",
          a: "A sharehouse gives you a private furnished room while sharing a kitchen, bathroom, and lounge with other residents. Monthly rent: ₩400,000–₩650,000 in Seoul with a deposit of ₩300,000–₩500,000 — far less than the ₩3M–₩10M deposit for an officetel. Operators like SharedHomies, Allo Korea, and Commontown actively market to foreigners and offer English contracts. Minimum stays: usually 1–3 months. Best option if you need a Korean address quickly for ARC registration.",
          source: { label: "koreahomeconnect.net", url: "https://www.koreahomeconnect.net/blog/6-korean-housing-types-for-expats-goshiwon-officetel-sharehouse-coliving-villa-apartment" },
        },
        {
          q: "Which neighborhoods are best for digital nomads in Seoul?",
          a: "Hongdae/Mapo: young, cheap, tons of cafes. Seongsu (성수): trendy, growing coworking scene. Gangnam: expensive but fast wifi everywhere, business district. Yeonnam/Mangwon: quiet, walkable, indie cafes. Avoid Myeongdong/Itaewon for living — tourist pricing. For coworking cities outside Seoul: Busan's Haeundae and Jeju's Aewol are strong alternatives.",
          source: { label: "roampads.com", url: "https://www.roampads.com/blog/best-coworking-spaces-seoul-digital-nomads" },
        },
        {
          q: "What is 월세 vs 전세 and which is right for a nomad?",
          a: "월세 (wolse): small deposit (₩1M–₩10M) + monthly rent (₩400,000–₩1,200,000 in Seoul). 전세 (jeonse): one large lump-sum deposit (typically 60–80% of property value, ₩100M–₩300M for a Seoul studio), no monthly rent. For nomads staying under 2 years, wolse is almost always right since jeonse deposits are enormous. If you plan to stay 2+ years and have capital, jeonse can be net cheaper over the lease period.",
          source: { label: "stay.enko.kr", url: "https://stay.enko.kr/blog/housing-in-south-korea" },
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
        {
          q: "What is a 스터디카페 (study café) and how is it different from a regular café?",
          a: "스터디카페 is a dedicated silent-work space open 24/7, priced by the hour (₩2,000–₩3,500/hour) rather than by drink purchase. Pay at an entrance kiosk, select a seat on the floor map, scan to unlock. Comes with individual partitions, power outlets, fast Wi-Fi, and free drinks from a self-serve bar. No talking or phone calls — strictly silent. Best value for focused work without a monthly coworking commitment. Chains like Toz (토즈) and StudyCafe 24 have locations in most neighborhoods.",
          source: { label: "korealocalpages.com", url: "https://korealocalpages.com/article/all-you-need-to-know-about-korean-study-cafes.html" },
        },
        {
          q: "Are there coworking spaces outside Seoul for digital nomads?",
          a: "Busan has SpaceCloud locations in Haeundae and the government-backed 'Busan Digital Nomad Village' in Suyeong-gu — subsidized desk rentals for verified remote workers. Jeju Island has Maru180 in Jeju City (startup hub, day-pass ₩10,000) and café-cowork hybrids in Aewol and Seongsan. Jeonju and Daejeon have 청년창업공간 (youth entrepreneurship spaces) that often allow foreigners on a drop-in basis for free with registration.",
          source: { label: "roampads.com", url: "https://www.roampads.com/blog/best-coworking-spaces-seoul-digital-nomads" },
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
        {
          q: "What is the 3.3% withholding tax on freelance payments?",
          a: "When a Korean company pays a freelancer, Korean law requires them to withhold 3.3% (3.0% national + 0.3% local income tax) as an advance tax. This is not the final tax — it's a prepayment. Each May, you file a comprehensive income tax return (종합소득세 신고) on Hometax (홈택스) and either receive a refund or pay additional tax. If you're a non-resident (under 183 days), a different withholding rate of 20–22% may apply instead.",
          source: { label: "jobbers.io", url: "https://www.jobbers.io/freelancing-in-south-korea-2026-taxes-registration-the-workcation-visa-remote-work-laws/" },
        },
        {
          q: "What changed with National Pension (NPS) contributions for foreigners in 2026?",
          a: "Starting January 2026, the NPS contribution rate increased from 9% to 9.5% of declared income. Self-employed foreigners pay the full 9.5% themselves. Monthly contribution: min ~₩100,000, max ~₩568,000. Foreigners from countries with a Korea NPS totalization agreement (USA, Canada, Germany, UK, Australia) can avoid double contributions with a certificate of home-country coverage. Upon leaving Korea permanently, you can claim a full lump-sum refund (반환일시금) of all contributions plus interest.",
          source: { label: "koreaworkexpert.com", url: "https://koreaworkexpert.com/dont-get-sick-before-you-read-this-the-2026-complete-guide-to-south-koreas-national-health-insurance-nhi-for-foreigners/" },
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
        {
          q: "What is the Toss (토스) app and can foreigners use it?",
          a: "Toss is Korea's most popular fintech super-app — bank account, transfers, credit score, insurance, and investment in one interface. Foreigners with an ARC and Korean 010 number can register and link external accounts. Toss Bank issues accounts entirely in-app in 5 minutes after ARC issuance. Useful because it shows your Korean credit score (신용점수) in real time. Core banking features are in English; investment and insurance remain Korean-only.",
          source: { label: "insight-bridge.co.kr", url: "https://insight-bridge.co.kr/essential-korean-apps-for-foreigners/" },
        },
        {
          q: "Is Papago or Google Translate better for Korean?",
          a: "Papago (built by Naver) outperforms Google Translate for Korean in most practical contexts — menus, official documents, colloquial speech, and Korean honorific levels. Papago's camera translation reads handwritten Korean menus and signage more accurately. Download the offline language pack for areas with poor signal. Google Translate is better for translating Korean into less common languages (beyond English/Japanese/Chinese) and for real-time voice conversation mode.",
          source: { label: "beautipin.com", url: "https://beautipin.com/blogs/magazine/korea-travel-without-korean" },
        },
        {
          q: "What is the Hi Korea (하이코리아) app and why should every long-term foreigner use it?",
          a: "HiKorea (hi.korea.go.kr) is the Korean Immigration Service's official portal — available as website and mobile app. Apply for ARC registration, visa extensions, and status changes online without visiting an immigration office. Track application status, book in-person appointments, and download immigration history certificates (체류자격 확인서) that banks and landlords often request. Available in English, Chinese, Vietnamese, and Japanese. Fully online ARC extension takes 2–4 weeks for most D and F visa categories.",
          source: { label: "sharedhomies.com", url: "https://sharedhomies.com/blog/navigating-seoul-solo-apps-esim-foreigner" },
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
        {
          q: "I moved to a new apartment — do I need to update my ARC address?",
          a: "Yes — report your new address within 14 days of moving or face a fine up to ₩1,000,000. Update online at hikorea.go.kr (메뉴: 체류지 변경신고) or in person at any district (구청) office with your ARC, passport, and lease contract. You do NOT get a new physical card — only the registered address in the system changes. This is one of the most ticketed immigration violations for students.",
          source: { label: "korvia.com", url: "https://support.korvia.com/portal/en/kb/articles/i-changed-my-address-do-i-have-to-report-to-immigration-office" },
        },
        {
          q: "How do I renew my ARC when my D-2 visa is expiring?",
          a: "Apply up to 4 months before expiry at hikorea.go.kr (체류기간 연장허가). Online applicants get ₩10,000 off the standard ₩60,000 fee. You'll need: Certificate of Enrollment (재학증명서, issued within 3 months), passport, and proof of NHIS payment. Your university's international office usually has a checklist specific to your school.",
          source: { label: "korvia.com", url: "https://www.korvia.com/how-to-apply-for-your-arc-in-korea" },
        },
        {
          q: "What happens to my ARC if I take a leave of absence (휴학)?",
          a: "Your D-2 visa is directly tied to active enrollment. When you go on 휴학, your university reports the change to immigration and your visa/ARC may be cancelled within 30 days. You must either convert to a different visa (e.g., D-10 or C-3) or leave Korea before the 30-day window closes. Contact your 국제처 immediately when planning a leave — this is one of the most common causes of accidental overstay among foreign students.",
          source: { label: "gosc.yonsei.ac.kr", url: "https://gosc.yonsei.ac.kr/gosc/visa/maintaining.do" },
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
          a: "Visit your branch with ARC + Certificate of Enrollment (or employment contract) + proof of address. Ask to lift transfer limits. Shinhan and Hana typically lift within 1 week. Registering a hardware OTP device (보안카드 → OTP) at the branch usually raises the ceiling to ₩5,000,000–₩10,000,000/day without additional documents.",
          source: { label: "kl.imporinfo.com", url: "https://kl.imporinfo.com/2026/05/korean-banking-app-terms-explained.html" },
        },
        {
          q: "How do I get a credit card as a student with no Korean income history?",
          a: "Most Korean credit cards require 6+ months of domestic income — which disqualifies most students. The workaround: a secured credit card (시큐어드 카드). Deposit ₩1,000,000–₩2,000,000 into a linked savings account at Shinhan or KEB Hana, and they issue a card against that collateral. Shinhan is especially student-friendly and is the banking partner for many university ID cards. Visit a Global Desk branch between 9:30–11:00 AM to avoid long waits.",
          source: { label: "citygramseoul.kr", url: "https://citygramseoul.kr/credit-cards-korea-foreigner-guide-2025/" },
        },
        {
          q: "How do I send money home from Korea?",
          a: "Wise: best rates, lowest fees (~under 1%), 1–2 business days. Available once you have a Korean bank account. Western Union: available at 우체국 (post offices), no Korean account needed but fees are high. Kakao Pay International Transfer: convenient if you use Kakao Bank, but limited countries. Don't leave money in a Korean account you can't access after returning home — close it or transfer to Wise before leaving.",
          source: { label: "wise.com", url: "https://wise.com/help/articles/2932331/guide-to-krw-transfers" },
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
        {
          q: "My dorm application was rejected — what should I do immediately?",
          a: "Act the same day, not when you land in Korea. Search on Naver Real Estate (네이버 부동산), Zigbang (직방), or Dabang (다방) filtered by 원룸 and deposit range. Post in your university's international student Facebook group or KakaoTalk open chat. Enko Stay and LiveAnywhere specialize in short-term furnished rooms for incoming exchange students and accept bookings without an ARC. Aim to secure housing 6–8 weeks before arrival — September and February are peak demand.",
          source: { label: "stay.enko.kr", url: "https://stay.enko.kr/blog/university-housing-korea-guide" },
        },
        {
          q: "What are 관리비 (management fees) and why is my bill higher than listed rent?",
          a: "관리비 is a monthly charge on top of base rent covering building maintenance, communal electricity, water, sometimes internet and gas. In officetel listings, 관리비 commonly runs ₩50,000–₩150,000/month and is often not shown prominently in search results. Always ask '관리비 포함인가요?' (Is management fee included?) and request an itemized breakdown before signing. The real monthly cost is base rent + 관리비 + utilities.",
          source: { label: "blog.liveanywhere.me", url: "https://blog.liveanywhere.me/korean-university-dorms-guide" },
        },
        {
          q: "What tenant protections exist if my landlord raises rent or refuses to return my deposit?",
          a: "Under 주택임대차보호법 (Housing Lease Protection Act), a landlord cannot raise rent by more than 5% at renewal. For deposit return issues, register 확정일자 (confirmed date stamp, ₩600 at any 동사무소) at move-in — this gives you legal priority if the landlord defaults. If refused, file a 임차권등기명령 (Lease Right Registration Order) at the district court. Call Seoul Global Center (02-2075-4180) or Korea Legal Aid Corporation (132) for free English tenant counseling.",
          source: { label: "legal.seoul.go.kr", url: "https://legal.seoul.go.kr/legal/english/front/page/contents.html?pAct=freeLegalConsultationService" },
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
        {
          q: "I need a Korean phone number for Kakao/Naver — can I use a foreign number?",
          a: "KakaoTalk accepts foreign numbers (+1, +44, etc.) for initial account creation via SMS. However, many Korean services — Naver login, government apps, banking OTP — require a Korean 010 number. If you only have a foreign number, you'll be locked out of significant portions of Korean online services. Get a Korean number ASAP after ARC issuance. An MVNO prepaid plan with a 010 number costs as little as ₩9,900/month — enough just to receive SMS verifications.",
          source: { label: "lguplus.com", url: "https://www.lguplus.com/korea-sim/eng/pc/product/esim?tab=data" },
        },
        {
          q: "What happens to my Korean phone plan during winter/summer break abroad?",
          a: "Your postpaid plan continues billing while you're abroad unless you act. Options: (1) 일시정지 (temporary suspension) — most carriers allow 1–3 months/year for ₩1,100–₩2,200/month maintenance fee instead of your full bill; request at the carrier store or app before departure. (2) Keep the plan active if you need the 010 number for Korean app verifications abroad. (3) Cancel and reactivate — only if you'll be gone a full semester, as you lose your number.",
          source: { label: "airalo.com", url: "https://www.airalo.com/south-korea-esim" },
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
        {
          q: "What is the actual NHIS premium for a D-2 student in 2026?",
          a: "D-2 and D-4 visa holders receive a 50% discount on the local-subscriber premium. In 2026, the discounted monthly premium for students is approximately ₩76,000–₩80,000/month. NHIS mails a bill to your registered ARC address; pay at any bank counter, convenience store, or via the NHIS app (건강보험 앱). Set up auto-pay (자동이체) from your Korean bank account — missed payments accumulate a 3% monthly late fee and can block your visa renewal.",
          source: { label: "student-insurance.com", url: "https://www.student-insurance.com/blog/nhis-premium-calculator-south-korea-students/" },
        },
        {
          q: "Does NHIS cover mental health services?",
          a: "Yes — outpatient psychiatric consultations (정신건강의학과) are covered at ~30–40% patient co-pay (₩10,000–₩30,000/visit, NHIS covers the rest). This includes depression, anxiety, and ADHD evaluation. If your university has an on-campus 학생상담센터 (Student Counseling Center), initial counseling is often free. Search '정신건강의학과' on KakaoMap and look for '영어 가능' (English available).",
          source: { label: "haniseoul.com", url: "https://www.haniseoul.com/blogs/korea-health-insurance-nhis-foreigner-guide" },
        },
        {
          q: "Can I apply for an NHIS exemption using my university's private insurance?",
          a: "You can apply for exemption if your private policy covers at least ₩1 billion, is processable inside Korea, and is currently active. Submit within 14 days of NHIS enrollment at any NHIS branch with your insurance certificate, ARC, and passport. Exemptions are reviewed case-by-case and often denied if the policy has pre-existing condition exclusions. If approved, exemption lasts 1 year and must be renewed. Contact NHIS at 1577-1000 (English available).",
          source: { label: "nhis.or.kr", url: "https://www.nhis.or.kr/english/wbheaa02900m01.do" },
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
        {
          q: "How do I apply for a part-time work permit (아르바이트 허가)?",
          a: "Step 1: Complete one full semester with GPA 2.0+. Step 2: Get your school's signature on the part-time confirmation form (학교 확인서) from your 국제처. Step 3: Apply online at hikorea.go.kr or in person at your local immigration office. Fee: ₩30,000. Processing: instant in-person, 1–2 weeks online. Your TOPIK level affects your max hours — TOPIK Level 4+ allows up to 35 hours/week; TOPIK Level 3 or lower is capped at 15 hours/week.",
          source: { label: "mykoreawork.com", url: "https://mykoreawork.com/en/blog/d2-student-visa-part-time-work-permit-guide-2026" },
        },
        {
          q: "What job types are off-limits for D-2 part-time workers?",
          a: "Prohibited: adult entertainment (유흥업소), gambling facilities, door-to-door sales, delivery platform riders (배달 라이더), private tutoring (과외), and some manufacturing sites. Permitted: café barista, convenience store clerk (편의점), restaurant kitchen, retail, university language tutor through the school. Sex-adjacent venues are absolutely prohibited and can result in immediate visa cancellation and deportation.",
          source: { label: "kowork.kr", url: "https://kowork.kr/en/blog/part-time-work-permit-guide-en" },
        },
        {
          q: "My employer hasn't paid me — what can I do?",
          a: "Call the Ministry of Employment and Labor hotline at 1350 — English interpreters available. File a formal 진정서 (labor complaint) online at minwon.moel.go.kr or at the nearest MOEL regional office. Investigations take 30–60 days. If unpaid wages qualify under the Wage Claim Guarantee Act, you may receive government payment within 14 days via the guarantee scheme. Your immigration status is NOT penalized for filing a labor complaint.",
          source: { label: "thekoreaarchivedig.com", url: "https://thekoreaarchivedig.com/unpaid-wages-korea-moel-complaint-guide/" },
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
        {
          q: "How does the Korean university grading curve (상대평가) work?",
          a: "Most Korean undergraduate courses use 상대평가 (relative grading), where the percentage of students who can receive A grades is capped — typically A+ and A0 together cannot exceed 30–40% of the class. This means even an objectively strong paper may receive a B+ if the class is competitive. Some courses labeled 절대평가 (absolute grading) don't cap A grades. Check the course description (수업계획서) at the start of semester — for foreign exchange students, this grading reality is often a shock.",
          source: { label: "korea.edu", url: "https://libart.korea.edu/libart_en/affairs/signup.do" },
        },
        {
          q: "Can I take Korean language courses for credit on a D-2 visa?",
          a: "Yes — most universities offer Korean language elective credits (교양한국어) open to international students on degree programs. These are 1–3 credit courses and count toward your graduation credit total. They're separate from the 어학원 (language institute) aimed at D-4 visa holders. Practical strategy: raises your TOPIK score over time (which increases your part-time work-hour limit), and helps satisfy general education requirements. Register during 수강신청 week — spots fill fast.",
          source: { label: "gosc.yonsei.ac.kr", url: "https://gosc.yonsei.ac.kr/gosc/visa/maintaining.do" },
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
        {
          q: "Do I have the right to an interpreter during a police investigation?",
          a: "Yes — under Korea's Criminal Procedure Act, any foreigner arrested or questioned by police has the right to a language interpreter at no cost, and this must be stated in your native language at the time of questioning. If denied, state clearly: '통역인을 요청합니다' (I request an interpreter). You may also refuse to answer questions until an interpreter is present. Contact your embassy within 24 hours of arrest — consular notification is a treaty right under the Vienna Convention.",
          source: { label: "klac.or.kr", url: "https://www.klac.or.kr/legalinfo/counsel.do" },
        },
        {
          q: "I was in a traffic accident in Korea — what do I do immediately?",
          a: "Call 112 (police) and 119 (ambulance) immediately. Do NOT move the vehicles before police arrive — failure to wait at the scene is treated as hit-and-run. Exchange names, phone numbers, ARC numbers, and insurance company information with the other party. Korean drivers must carry compulsory auto insurance (책임보험) — ask for their 보험사 (insurance company) name and policy number. If you're a pedestrian victim, you're automatically entitled to medical expenses regardless of fault under Korea's Auto Accident Compensation Act. Call 1330 for English interpretation assistance.",
          source: { label: "seoulforeigner.com", url: "https://seoulforeigner.com/traffic-accident-what-to-do/" },
        },
        {
          q: "My landlord is refusing to return my security deposit — what are my rights?",
          a: "Under 주택임대차보호법 (Housing Lease Protection Act), you are entitled to a full deposit refund on the lease end date. If refused: (1) Do not leave until the deposit is returned — once you vacate it becomes much harder legally. (2) File for a 임차권등기명령 (Lease Right Registration Order) at the district court — this preserves your legal priority even after you leave. (3) Call Korea Legal Aid Corporation (KLAC) at 132 for free representation. (4) Seoul Global Center's legal desk handles foreigner deposit cases. The process takes 1–6 months but success rate for clearly documented cases is high.",
          source: { label: "klac.or.kr", url: "https://www.klac.or.kr/legalinfo/counsel.do" },
        },
      ],
    },
  ],
};

export default TIPS;
