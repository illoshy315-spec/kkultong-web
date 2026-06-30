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
          q: "How do I send money home from Korea without paying huge bank fees?",
          a: "Avoid bank SWIFT transfers (₩5,000–₩15,000 fee + 1–3% FX margin) and use Wise or WireBarley instead — both offer mid-market exchange rates with fees typically under 1%. Link your Korean bank account (Shinhan, Hana, or Kakao) to Wise, and most KRW transfers land in your home account within 1–2 business days. Foreign residents can remit up to USD 50,000 per year from earned income without special reporting to the Bank of Korea. For larger amounts (over USD 10,000 equivalent), keep payslips or tax documents ready to show the source of funds at the bank counter.",
          source: { label: "visaskorea.co.kr", url: "https://visaskorea.co.kr/en/blog/korea-overseas-remittance-foreigners-guide" },
        },
        {
          q: "Can I get a Korean credit card as a foreigner, and which one is worth applying for?",
          a: "Yes — foreigners with an ARC, a Korean bank account, and six or more months of income history can apply for most local credit cards. The KB Kookmin My WE:SH card is popular for broad cashback coverage, while the Hyundai Card ZERO Edition2 waives overseas transaction fees, making it useful if you still pay some bills abroad. Bring your ARC, passport, the past three months of pay stubs or a freelance income statement, and bank statements to a card-company branch or apply through your bank's app. Expect a 1–2 week approval wait; some banks offer a foreigner-specific starter card with a lower credit limit while you build a local credit history.",
          source: { label: "daylongs.com", url: "https://daylongs.com/blog/en/best-credit-cards-korea-2026/" },
        },
        {
          q: "What is the 상생페이백 (Sangsaeng Payback) cashback program and can foreigners join?",
          a: "Sangsaeng Payback (상생페이백) is a government-backed cashback program open to anyone 19 or older — including foreign residents — who uses a Korean credit or debit card. If your monthly card spending exceeds your 2023 monthly average, you earn 20% cashback on the increased portion, up to ₩100,000 per month and ₩300,000 in total. No application is required; eligibility is checked automatically via your registered card. The key condition is that the card must be issued by a Korean bank and linked to a Korean 010 phone number for notification. Check your bank's app or the Card Benefits website (카드고릴라) to confirm your card is participating.",
          source: { label: "koreantopik.com", url: "https://www.koreantopik.com/2025/08/korea-launches-payback-program-up-to.html" },
        },
        {
          q: "Does IBK bank work well for foreigners on E-series work visas?",
          a: "IBK (기업은행, Industrial Bank of Korea) is widely regarded as the most practical bank for E-2, E-3, E-4, and E-7 visa holders because many Korean employers that hire foreign workers deposit salaries directly into IBK accounts. The IBK i-ONE Bank app has an English-language interface and supports overseas remittance through its mobile app without requiring a separate OTP device. You can open an account at any branch with your ARC and passport; some branches near industrial zones or university districts have English-speaking staff. IBK's remittance fee to popular destinations (USA, UK, Australia) runs around ₩5,000 per transfer plus FX margin.",
          source: { label: "global.ibk.co.kr", url: "https://global.ibk.co.kr/en/services/MobileRemittance" },
        },
        {
          q: "How does Korean internet banking work, and why do foreigners struggle with it?",
          a: "Traditional Korean internet banking (for older banks like Woori, NH, and Kookmin) relies on ActiveX plug-ins and certificate-based security (공인인증서/공동인증서) that are not compatible with non-Korean operating system locales or macOS. The practical workaround in 2026 is to use the bank's mobile app instead — apps like Shinhan SOL, KB Star, and Hana 1Q Bank work normally on iOS and Android without plug-ins. If you must use web banking, install the security suite on a Windows PC using Korean locale settings. Kakao Bank and Toss Bank bypass the problem entirely with app-only interfaces that work on any device with a Korean 010 number for verification.",
          source: { label: "klifechoice.com", url: "https://klifechoice.com/opening-bank-account-korea-foreigner/" },
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
          q: "What is 알뜰폰 (budget MVNO) and can foreigners switch to it to save money?",
          a: "알뜰폰 (alddulpon) literally means 'thrifty phone' — it refers to MVNOs (Mobile Virtual Network Operators) that resell SK Telecom, KT, or LG U+ network capacity at 50–70% lower prices. Popular MVNOs include KT M Mobile, Hellovision Mobile, and Chingu Mobile, with plans starting at ₩9,900/month for calls + data. Foreigners can switch after obtaining an ARC and a Korean bank account, which are required for postpaid MVNO contracts. Number portability means you keep your existing 010 number. The trade-off is Korean-only customer service; most sign-ups are handled online, but some operators like Chingu Mobile specifically target foreigners with English support.",
          source: { label: "krutils.com", url: "https://krutils.com/main/guides/korea-sim-guide-2026/" },
        },
        {
          q: "My eSIM tourist data plan doesn't work for Korean bank SMS verification. What should I do?",
          a: "This is a very common pain point: tourist eSIMs and data-only SIMs do not come with a Korean 010 number, which means you cannot receive the SMS verification codes that Korean banks, Kakao, Naver, and most government services require. The solution is to get a postpaid SIM or MVNO SIM that includes a Korean 010 number — this requires your ARC, which you can obtain after 90 days of residence. In the meantime, Kimchi Mobile and some airport SIM providers offer prepaid SIMs with a real 010 number using just a passport; verify the plan includes SMS capability before purchasing.",
          source: { label: "kimchimobile.com", url: "https://www.kimchimobile.com/korean-phone-number-verification/" },
        },
        {
          q: "Is 5G actually better than LTE in Korea, and is it worth paying more for it?",
          a: "Korea was one of the first countries to launch commercial 5G and coverage in Seoul, Busan, Incheon, and Daejeon is extensive — but the real-world experience depends on the exact location and plan. In practice, 5G sub-6GHz (the type most foreigner-friendly SIMs provide) offers speeds of 150–600 Mbps vs. LTE's 50–150 Mbps, but the gap is less noticeable for remote work tasks. The bigger difference is indoor building penetration: LTE often performs more consistently in older buildings, subway tunnels, and rural areas. For digital nomads doing video calls and cloud uploads, LTE plans from SKT or KT on an MVNO (from ₩29,900/month for unlimited LTE) are often the better value over premium 5G plans costing ₩55,000+.",
          source: { label: "simcorner.com", url: "https://simcorner.com/blogs/esim/south-korea-unlimited-data" },
        },
        {
          q: "Can I use a pocket Wi-Fi (와이파이 도시락) egg device instead of a SIM card?",
          a: "Pocket Wi-Fi devices (와이파이 도시락, pronounced 'WiFi Dosirak') are rentable at Incheon Airport arrival halls from providers like Kollecto Pocket Wi-Fi and Wiztoss, costing roughly ₩8,000–₩12,000/day with unlimited data. They let multiple devices share one connection, making them useful for groups or people with non-eSIM compatible laptops. The downsides for long-stay nomads are that the device needs daily charging, you must return it at the airport or use a post office drop box, and monthly costs far exceed an MVNO SIM (₩240,000–₩360,000 vs. ₩29,900 for SIM). For stays over two weeks, a prepaid SIM or eSIM is almost always cheaper.",
          source: { label: "krsim.net", url: "https://krsim.net/" },
        },
        {
          q: "Does Korea have public free Wi-Fi and how reliable is it for work?",
          a: "Korea's government-run free Wi-Fi (공공 와이파이) covers most subway stations, bus stops, parks, and public libraries under the SSID 'PublicWifi' or the city-specific network 'Seoul WiFi'. Speed is typically 50–100 Mbps, sufficient for basic tasks but unreliable for video calls due to high congestion and time-outs. Most convenience stores (CU, GS25, 7-Eleven) also broadcast free Wi-Fi that requires no login. For serious work sessions, independent café Wi-Fi or a 스터디카페 (study café) is more consistent. If you rely on public Wi-Fi for sensitive work, use a VPN — public hotspots in Korea are unencrypted and traffic is logged under Korea's Communications Act.",
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
          q: "Can I get a local Korean debit card without a credit history or employment contract?",
          a: "Yes — when you open a Korean bank account (possible with just a passport at Hana Bank or Shinhan Bank for certain visa types), the bank issues a debit card (체크카드) linked to your balance. Unlike credit cards, debit cards require no income verification or credit history. The most foreigner-accessible is the Kakao Bank debit card, which can be issued entirely through the app after ARC registration. Korean debit cards are accepted anywhere a credit card is — they run on the same Visa/Mastercard/BC rails — and many offer 0.1–0.5% cashback on spending. The card arrives by mail within 3–5 business days.",
          source: { label: "hackskorea.com", url: "https://hackskorea.com/credit-card-vs-debit-card-korea/" },
        },
        {
          q: "Why does my foreign Visa/Mastercard work at some Korean stores but not others?",
          a: "The issue is usually terminal type, not your card. Many small merchants — traditional markets (재래시장), independent restaurants, and mom-and-pop shops — use older IC/swipe terminals that do not support international card processing or are signed up with a domestic-only payment gateway. Large chains (convenience stores, department stores, pharmacies, hospital cashiers) almost universally accept foreign cards. Taxi payment via card also varies by company: Kakao Taxi and T-money-enabled taxis accept foreign Visa/Mastercard, but older metered taxis may not. When in doubt, carry ₩50,000–₩100,000 in cash from any 7-Eleven or GS25 ATM (Global ATM), which accepts foreign cards 24/7 with a ~₩3,000 fee.",
          source: { label: "en.komoju.com", url: "https://en.komoju.com/blog/payment-method/local-credit-cards-in-korea/" },
        },
        {
          q: "How does the T-money card work and is it worth getting one?",
          a: "T-money (티머니) is a rechargeable RFID transit card that works on Seoul Metro, buses, taxis, and even some vending machines and convenience stores across the country. Buy one at any convenience store (CU, GS25, 7-Eleven) for ₩2,500–₩4,000, then top it up at the same stores or subway station kiosks. Using T-money gives a ₩100 discount per subway tap compared to single-journey tickets and enables free transfers between bus and subway within 30 minutes. For a digital alternative, iPhone users can add T-money to Apple Wallet, and Android users can use Samsung Pay or Kakao Pay transport mode — no physical card needed if your phone supports NFC.",
          source: { label: "blog.namanecard.com", url: "https://blog.namanecard.com/en/korea-apps-guide-en/" },
        },
        {
          q: "Can I use Alipay or WeChat Pay in Korea?",
          a: "Yes — as of 2025, Alipay and WeChat Pay are accepted at a growing number of Korean merchants, particularly in tourist-heavy areas of Myeongdong, Hongdae, Dongdaemun, and Jeju Island. Major department stores (Lotte, Shinsegae, Hyundai) and duty-free shops accept both. However, coverage outside of tourist corridors is inconsistent — most neighborhood restaurants and small shops will not accept these. If you are not from China but have a foreign Alipay account (available in some countries), functionality may be limited. For everyday payments as a non-Chinese visitor, WOWPASS or a local Korean debit card remains more reliable.",
          source: { label: "bankmeister.com/korea", url: "https://bankmeister.com/korea/card" },
        },
        {
          q: "What is 제로페이 (Zeropay) and can foreigners use it?",
          a: "Zeropay (제로페이) is a government-backed QR payment system launched to reduce card fee burdens on small merchants, with merchants paying 0–0.5% instead of the typical 1.5–2.5% card fee. Consumers pay by scanning a QR code at the register using a linked bank account; payment is deducted directly like a bank transfer. Foreigners can access it through Naver Pay or Kakao Pay if their Korean bank account is linked. The main practical benefit for nomads is that many traditional markets, cultural facilities, and government-run venues that don't accept card now display Zeropay QR codes. Look for the blue 제로페이 sticker at the register.",
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
          a: "A sharehouse (쉐어하우스) gives you a private furnished room while sharing a kitchen, bathroom, and lounge with other residents. Monthly rent runs ₩400,000–₩650,000 in Seoul, with a refundable deposit of ₩300,000–₩500,000 — far less than the ₩3M–₩10M deposit required for an officetel. Most Korean sharehouse operators (SharedHomies, Allo Korea, Commontown) actively market to foreigners and offer English contracts. Minimum stays are usually 1–3 months. The trade-off versus renting alone is noise, shared kitchen scheduling, and limited personal space. It is the best option if you need a Korean address quickly for ARC registration but cannot front a large jeonse or wolse deposit.",
          source: { label: "koreahomeconnect.net", url: "https://www.koreahomeconnect.net/blog/6-korean-housing-types-for-expats-goshiwon-officetel-sharehouse-coliving-villa-apartment" },
        },
        {
          q: "What is a gosiwon (고시원) and is it safe and livable for a digital nomad?",
          a: "A gosiwon (고시원) is a micro-room, typically 4–7 square meters, with a bed, desk, and small shelf, located in multi-floor buildings near subway stations and universities. Monthly fees run ₩300,000–₩600,000 in Seoul with deposits of ₩100,000–₩300,000 — the most affordable private room option in the country. As of mid-2026, gosiwon operators are increasingly catering to foreign residents. Most include utilities and fast Wi-Fi. The livability concern is fire safety — Korean law (화재예방법) requires gosiwons to have sprinklers and emergency exits, so check that the building has a current fire safety certificate (소방안전관리) before signing.",
          source: { label: "en.sedaily.com", url: "https://en.sedaily.com/property/2026/05/14/korean-goshiwons-revive-as-budget-housing-for-foreigners" },
        },
        {
          q: "How do I find housing in Korea without using a Korean-language real estate agent?",
          a: "Several English-friendly platforms exist for foreigners. Zigbang (직방) and Dabang (다방) have English-interface modes and allow filtering by deposit range, district, and room type. Facebook groups such as 'Foreigners in Korea Housing' and 'Seoul Housing & Rooms for Foreigners' are active and post new listings daily. For premium furnished options, HiKorea (hi.korea.go.kr) lists government-vetted housing near foreign resident centers. Avoid using Naver Café real estate listings without a Korean-speaker assisting — many listings are posted by unlicensed middlemen. Always verify the landlord's ownership by requesting the 등기부등본 (property registry) from any 무인민원발급기 (self-service kiosk) in a subway station or government office.",
          source: { label: "mangrove.city", url: "https://mangrove.city/en/blog/everything-you-need-to-know-before-renting-in-seoul-62677" },
        },
        {
          q: "What is the difference between 월세 (wolse) and 전세 (jeonse), and which is right for me?",
          a: "월세 (wolse) is a monthly rent arrangement where you pay a relatively small deposit (보증금, typically ₩1M–₩10M for a studio) plus ongoing monthly rent (₩400,000–₩1,200,000 in Seoul). 전세 (jeonse) is a lump-sum deposit-only lease — you pay a large one-time deposit (typically 60–80% of property value, often ₩100M–₩300M for a Seoul studio) and no monthly rent. For digital nomads staying less than 2 years, wolse is almost always the right choice since jeonse deposits are enormous and carry risk if the landlord defaults. If you plan to stay 2+ years and have capital, jeonse can be net cheaper than monthly rent over the lease period.",
          source: { label: "stay.enko.kr", url: "https://stay.enko.kr/blog/housing-in-south-korea" },
        },
        {
          q: "Can I use Airbnb or short-term rentals legally in Korea?",
          a: "Short-term rental law in Korea (공중위생관리법 and 관광진흥법) technically requires hosts to register as a 'Korean-style Inn' (한옥체험업) or obtain a vacation rental permit (농어촌민박 or 도시민박업). The vast majority of Seoul Airbnb listings are legally grey — the host lacks a permit but enforcement has been inconsistent. As a renter (guest) you bear no legal risk. In 2025, Korea's government increased enforcement pressure in tourist districts, so some listings may disappear with short notice. As an alternative, Enko Stay (stay.enko.kr) and Mangrove City offer fully legal furnished short-term rentals (1–6 months) aimed at foreign residents.",
          source: { label: "klifechoice.com", url: "https://klifechoice.com/temporary-housing-korea-foreigners/" },
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
          a: "스터디카페 (study café) is a dedicated silent-work space staffed minimally or operated entirely by kiosk, open 24/7, and priced by the hour (typically ₩2,000–₩3,500/hour) rather than by purchase. You pay at the entrance kiosk, select a seat on the floor map, and scan your receipt barcode to unlock the door. Seats come with individual partitions, power outlets, fast Wi-Fi, and free beverages from a self-serve bar. Unlike regular cafés, conversation and phone calls are not allowed — strictly a silent environment. For remote workers who need quiet, focused hours without a monthly coworking commitment, study cafés are the best-value option in Korea. Chains like Toz (토즈) and StudyCafe 24 have locations in most neighborhoods.",
          source: { label: "korealocalpages.com", url: "https://korealocalpages.com/article/all-you-need-to-know-about-korean-study-cafes.html" },
        },
        {
          q: "Are there coworking spaces outside Seoul that are good for digital nomads?",
          a: "Yes — Busan has a growing coworking scene with spaces like SpaceCloud locations in Haeundae and Seomyeon, and the city government-backed 'Busan Digital Nomad Village' (부산 디지털 노마드 빌리지) in Suyeong-gu offers subsidized desk rentals for verified remote workers. Jeju Island has Maru180 (마루180) in Jeju City, a startup hub with day-pass access from ₩10,000, and multiple café-cowork hybrids in Aewol and Seongsan. Jeonju and Daejeon are emerging cities where 청년창업공간 (youth entrepreneurship spaces) often allow foreigners on a drop-in basis for free with registration.",
          source: { label: "roampads.com", url: "https://www.roampads.com/blog/best-coworking-spaces-seoul-digital-nomads" },
        },
        {
          q: "Do Korean cafés really allow you to work all day on one drink?",
          a: "In general, yes — 'laptop culture' is well established in Korea and most independent cafés and chains (Hollys, A Twosome Place, Ediya) do not enforce time limits or minimum spend rules. However, some popular cafés in Hongdae, Insadong, and Itaewon have started placing '1인 1음료' (one drink per person) or '2시간 권장' (2-hour suggestion) signs, particularly during peak weekend hours. On weekdays before noon, the practical norm is that you can work 3–4 hours on a single ₩5,500 Americano without issue. Smaller neighborhood cafés (동네 카페) outside tourist areas almost never impose time restrictions.",
          source: { label: "stay.enko.kr", url: "https://stay.enko.kr/blog/korean-cafe-guide" },
        },
        {
          q: "What coworking spaces have the best day-pass access without a monthly membership?",
          a: "Behongli (베홍리) in Mapo-gu is one of the most foreigner-friendly options with explicit day/week/month pass tiers, 24/7 access, and English check-in. Stitch (스티치) offers a ₩15,000 day pass across several Seoul locations including Gangnam and Sinchon. FastFive (패스트파이브) sells day passes (₩22,000–₩30,000) at most branches and is common in Gangnam, Hongdae, and Yeouido — book through the FastFive app to confirm availability. For the budget-conscious, Toz Workplex locations near major stations charge ₩2,000–₩3,000/hour with a similar desk setup to premium coworking.",
          source: { label: "koreaexperience.com", url: "https://koreaexperience.com/blog/best-coworking-spaces-in-seoul-for-short-term-travelers-2026" },
        },
        {
          q: "Are there government-run free or subsidized workspaces for foreigners in Korea?",
          a: "Yes — Seoul's OASIS 청년취업사관학교 and 창업지원센터 (startup support centers) in each gu (district office) offer hot-desk access at no cost for registered residents, including foreigners on D or F visas. The Seoul Global Startup Center (SGSC) in Mapo provides free co-working access and occasional English-language startup programming. KOTRA's InveKorea investor support centers (Seoul, Busan, Incheon) offer temporary desk space for foreign entrepreneurs. These spaces are not well-advertised in English — contact the nearest 외국인주민지원센터 (Foreign Residents' Support Center) in your district and ask for the list of subsidized workspace programs.",
          source: { label: "digitalnomadskorea.com", url: "https://www.digitalnomadskorea.com/post/best-coworking-spaces-seoul" },
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
          q: "What happens to my NHIS payments if I miss them — will it affect my visa?",
          a: "Yes, directly. As of 2025, Korean Immigration (출입국외국인청) cross-checks NHIS payment records when processing any visa extension or status change. Outstanding premiums, late-payment penalties, or delinquency notices can result in an outright refusal of your extension or restriction to a shorter stay period. If you miss a payment, pay it immediately plus the 연체료 (late fee, 3% per month overdue) at any bank branch or via the NHIS website (nhis.or.kr) before submitting your immigration paperwork. Foreigners who are unemployed and cannot afford the monthly premium can apply for a 경감 (premium reduction) at the local NHIS branch with proof of financial hardship.",
          source: { label: "seoulstart.com", url: "https://seoulstart.com/guides/nhis-enrollment-guide" },
        },
        {
          q: "What is the 3.3% withholding tax that Korean clients deduct from my freelance payments?",
          a: "When a Korean company or individual pays a freelancer or independent contractor (사업소득자), Korean tax law requires them to withhold 3.3% of the gross amount — 3.0% national income tax plus 0.3% local income tax — as an advance tax. This is not the final tax; it is a prepayment against your annual liability. Each May, you file a comprehensive income tax return (종합소득세 신고) on Hometax (홈택스) and either receive a refund if 3.3% was overpaid, or pay additional tax if your total income places you in a higher bracket. If you are a foreign non-resident for tax purposes (in Korea fewer than 183 days/year), a different withholding rate of 20–22% for non-resident business income may apply instead.",
          source: { label: "jobbers.io", url: "https://www.jobbers.io/freelancing-in-south-korea-2026-taxes-registration-the-workcation-visa-remote-work-laws/" },
        },
        {
          q: "Do I need to register a business in Korea if I am a digital nomad working for foreign clients?",
          a: "If your income comes entirely from foreign clients and is deposited into a foreign bank account, you generally do not need to register a Korean business (사업자등록) and are not subject to Korean VAT. However, if you provide digital services to Korean consumers or bill Korean companies, you may be required to register for VAT (10%) and file bi-annual returns. If you receive payments in Korea from Korean clients, you must file a May comprehensive income tax return as a resident. The safest approach is to consult a Korean tax accountant (세무사) — consultations typically cost ₩50,000–₩100,000 for a one-hour session.",
          source: { label: "seoulz.com", url: "https://www.seoulz.com/korea-digital-tax-system-the-foreigners-guide-to-hometax-in-2026/" },
        },
        {
          q: "What is the income requirement for the Korea Digital Nomad Visa (F-1-D) and who qualifies?",
          a: "The Korea Digital Nomad Visa (F-1-D, officially called the Workcation Visa / 워케이션 비자) requires a minimum annual income of ₩88.1 million (approximately USD 66,000 as of 2026), which is double Korea's GNI per capita. You must also hold private health insurance covering at least ₩100 million (≈ USD 75,000) for medical treatment and repatriation. The visa is open to nationals of countries that have visa-free agreements with Korea, including most EU members, USA, Canada, UK, and Australia. As of 2026, you can apply for a status change at a local immigration office without leaving Korea if you entered on a B-1 tourist status. The visa is valid for 1 year with one possible extension and prohibits taking employment with a Korean company.",
          source: { label: "greenbacktaxservices.com", url: "https://www.greenbacktaxservices.com/blog/south-korea-digital-nomad-visa/" },
        },
        {
          q: "What changed with National Pension (NPS) contributions for foreigner self-employed workers in 2026?",
          a: "Starting January 1, 2026, the National Pension Service (NPS / 국민연금) contribution rate increased from 9% to 9.5% of declared income, split 50/50 between employer and employee for salaried workers (4.75% each). Self-employed foreigners pay the full 9.5% themselves. The monthly contribution is calculated on your declared business income, with a minimum floor of approximately ₩100,000/month and a ceiling around ₩568,000/month. Foreigners from countries with a Korea NPS totalization agreement (USA, Canada, Germany, UK, Australia, among others) can avoid double contributions by submitting a certificate of home-country coverage. Upon leaving Korea permanently, you can claim a lump-sum refund (반환일시금) of all your NPS contributions plus interest.",
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
          q: "What is the Toss (토스) app and can foreigners use it fully?",
          a: "Toss (토스) is Korea's most popular fintech super-app combining bank account management, money transfers, credit score monitoring, insurance, and investment in one interface. It runs on Toss Bank (토스뱅크), a fully licensed digital bank. Foreigners with an ARC, a Korean 010 number, and an existing Korean bank account can register for Toss and link external accounts. Toss Bank itself issues accounts that can be opened entirely in-app within 5 minutes after ARC issuance. The app's English support is partial — core banking features are in English, but investment and insurance products remain Korean-only. Toss is particularly useful because it shows your Korean credit score (신용점수) in real time.",
          source: { label: "insight-bridge.co.kr", url: "https://insight-bridge.co.kr/essential-korean-apps-for-foreigners/" },
        },
        {
          q: "What is the Subway Korea app and how is it different from Naver Map for subway navigation?",
          a: "Subway Korea (지하철종결자) is a dedicated metro app that works offline and covers all Korean metro systems (Seoul, Busan, Daegu, Gwangju, Daejeon, and Incheon). Unlike Naver Map, which requires an internet connection and shows the metro as part of a general map, Subway Korea gives you a full offline subway diagram, station-by-station exit numbers, transfer times, fare calculations, and first/last train schedules — all downloadable before travel. It supports English, Japanese, and Chinese. The app is especially useful in areas with poor signal (deep underground stations) and for planning which exit to use before you enter the station.",
          source: { label: "timetokorea.com", url: "https://timetokorea.com/best-travel-apps-korea-2025/" },
        },
        {
          q: "Is Papago or Google Translate better for Korean translation in daily life?",
          a: "Papago (파파고), built by Naver, outperforms Google Translate for Korean in most practical contexts — particularly colloquial speech, menu items, official documents, and Korean-specific honorific levels (존댓말 vs. 반말). Papago's camera translation mode reads handwritten Korean menus and signage more accurately than Google's. The offline language pack can be downloaded for areas with poor signal. Google Translate has the edge for translating from Korean into less common languages (beyond English, Japanese, Chinese) and for real-time conversation mode, where its voice recognition is more robust. For nomads doing most translation between Korean and English, Papago is the better default.",
          source: { label: "beautipin.com", url: "https://beautipin.com/blogs/magazine/korea-travel-without-korean" },
        },
        {
          q: "What is the Hi Korea (하이코리아) app and why should every long-term foreigner use it?",
          a: "Hi Korea (하이코리아, hi.korea.go.kr) is the Korean Immigration Service's official portal for foreigners, available as both a website and mobile app. It allows you to apply for ARC registration, visa extensions, and status changes online — eliminating most in-person immigration office visits. You can also track your application status, book in-person appointments for cases requiring physical presence, and download your immigration history and status certificates (체류자격 확인서) which banks and landlords often request. The app and website are available in English, Chinese, Vietnamese, and Japanese. As of 2026, fully online ARC extension processing takes 2–4 weeks for most D and F visa categories.",
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
          q: "Can I open a Toss Bank or Kakao Bank account as a foreign student?",
          a: "Toss Bank (토스뱅크) is currently the only internet-only bank that allows foreign residents to open an account entirely via app — no branch visit required, just your ARC and a Korean phone number (010-). Kakao Bank does not accept foreign nationals online. Once your Toss account is open, transfer limits start low (often ₩300,000/day) and increase after you verify income or transaction history. Standard brick-and-mortar banks like Shinhan and Hana also have English-friendly 'Global Desk' branches on or near major university campuses.",
          source: { label: "toss.im", url: "https://toss.im/tossfeed/article/korealifehacks-7-en" },
        },
        {
          q: "How do I get a credit card in Korea as a student with no Korean income history?",
          a: "Most Korean credit card issuers require 6+ months of domestic income history, which disqualifies most students. The practical workaround is a secured credit card (시큐어드 카드): deposit ₩1,000,000–₩2,000,000 into a linked savings account at Shinhan or KEB Hana, and they issue a card against that collateral. Shinhan Bank is especially student-friendly and is the banking partner for many university ID cards. Bring your ARC, passport, scholarship certificate or proof of remittance from parents, and visit a Global Desk branch between 9:30–11:00 AM to avoid long waits.",
          source: { label: "citygramseoul.kr", url: "https://citygramseoul.kr/credit-cards-korea-foreigner-guide-2025/" },
        },
        {
          q: "What are the actual daily transfer limits on my Korean bank account, and how do I increase them?",
          a: "New foreign-resident accounts typically start with daily transfer limits of ₩300,000–₩1,000,000 as an anti-fraud measure. To increase limits, visit your bank branch with your ARC, lease contract or proof of address, and any income documents (scholarship letter, part-time pay stub). Banks may also ask for the purpose of large transfers (e.g., tuition payment). Registering a hardware OTP device (보안카드 → OTP 업그레이드) at the branch usually raises the ceiling to ₩5,000,000–₩10,000,000 per day without additional documents.",
          source: { label: "kl.imporinfo.com", url: "https://kl.imporinfo.com/2026/05/korean-banking-app-terms-explained.html" },
        },
        {
          q: "Can I use Kakao Pay or Naver Pay as a foreigner, and do I need a Korean bank account first?",
          a: "Yes — Kakao Pay (카카오페이) can be linked to a foreign-resident bank account (including Hana, Shinhan, IBK, or Toss Bank) using your ARC. You must have a Korean phone number (010-) and a verified Korean bank account first; the app then links via your ARC number. Naver Pay requires a KCB (Korean Credit Bureau) credit score, making it harder for new arrivals. For day-to-day payments, most students find Kakao Pay sufficient — it works at GS25, CU, most restaurants, and online merchants.",
          source: { label: "onboardkorea.com", url: "https://onboardkorea.com/kakao-pay-for-foreigners/" },
        },
        {
          q: "Is there a fee to receive scholarship or stipend money transferred from my university into my Korean bank account?",
          a: "Domestic KRW transfers between Korean accounts (e.g., from your university's bank to your Hana or Shinhan account) are typically free or cost ₩500 or less. However, if your scholarship arrives as an international wire (e.g., from a foreign government or foundation), your bank may charge an incoming wire fee of ₩5,000–₩10,000 plus an exchange-rate spread. To avoid fees on incoming international transfers, ask your scholarship provider whether they use Wise or a similar service, and check whether your bank has a 'waiver for students' policy — IBK (기업은행) and Hana Global are known to waive fees for scholarship recipients.",
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
          q: "My university dormitory application was rejected — what should I do immediately?",
          a: "Act the same day you get the rejection notice, not when you land in Korea. Start searching on Naver Real Estate (네이버 부동산), Zigbang (직방), or Dabang (다방) — filter by 원룸 (studio) and 보증금 (deposit) range. For budget options near campus, post in your university's international student Facebook group or KakaoTalk open chat. Companies like Enko Stay and LiveAnywhere specialize in short-term furnished rooms for incoming exchange students and accept bookings without an ARC. Aim to secure housing 6–8 weeks before arrival, since September and February move-in seasons are peak demand.",
          source: { label: "stay.enko.kr", url: "https://stay.enko.kr/blog/university-housing-korea-guide" },
        },
        {
          q: "What are the minimum legal room-size standards for a gosiwon (고시원), and how do I check if a place is legal?",
          a: "Since Seoul's 2019 building code reform, newly built gosiwon rooms must measure at least 7㎡ (about 2.1 × 3.3 m), rising to 9–10㎡ if a private bathroom is included, and every room must have at least one window for natural light and emergency egress. Older buildings may be grandfathered in at smaller sizes. To verify legitimacy, ask the landlord for the 건축물대장 (building register) — you can also look it up free at seumter.go.kr. Avoid rooms with no windows (usually illegal under fire codes) and check that the building has a posted fire extinguisher and sprinkler system before signing.",
          source: { label: "grokipedia.com", url: "https://grokipedia.com/page/Gosiwon" },
        },
        {
          q: "Can a foreigner be the main leaseholder on a Korean apartment contract, and do I need a guarantor (보증인)?",
          a: "Yes, foreign residents with an ARC can sign a standard Korean lease (월세 or jeonse) as the primary leaseholder. Most landlords do not require a Korean guarantor, but some may ask for one if your ARC is new or your bank history is thin. Always register the lease at the district (구청) office within 14 days to activate 확정일자 (confirmed date stamp) — this gives you legal priority if the landlord defaults. You can do this at any 동사무소 (community center) for ₩600. Many foreign students skip this step and lose deposit protection.",
          source: { label: "seoulstart.com", url: "https://seoulstart.com/guides/nhis-enrollment-guide" },
        },
        {
          q: "What are utility bills (관리비) in Korean apartments, and why is my bill so much higher than the listed rent?",
          a: "관리비 (management fee) is a monthly charge on top of base rent that covers building maintenance, communal electricity, water, internet in some cases, and sometimes gas or trash disposal. In officetel listings, 관리비 commonly runs ₩50,000–₩150,000/month and is often not shown prominently in search results. Always ask '관리비 포함인가요?' (Is management fee included?) and request an itemized breakdown (관리비 항목) before signing. High management fees are the single biggest source of budget surprises for new foreign tenants — the real monthly cost is base rent + 관리비 + utilities.",
          source: { label: "blog.liveanywhere.me", url: "https://blog.liveanywhere.me/korean-university-dorms-guide" },
        },
        {
          q: "Is there any tenant protection if my landlord suddenly raises my rent mid-lease or refuses to return my deposit?",
          a: "Under the 주택임대차보호법 (Housing Lease Protection Act), a landlord cannot raise rent by more than 5% in a single year if you renew a contract. For deposit return, if your landlord refuses after lease expiry, file a 임차권등기명령 (Lease Right Registration Order) at the district court — this protects your priority claim even after you move out. If you registered 확정일자 at move-in, your deposit is legally protected up to the registered amount. Call Seoul Global Center (02-2075-4180) or Korea Legal Aid Corporation (132) for free English-language tenant counseling.",
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
          q: "Can I get a Korean 010 phone number using only an eSIM, or do I still need a physical SIM card?",
          a: "You can get a genuine Korean 010 number on an eSIM — several MVNO providers (알뜰폰, such as HelloMobile and U+ MVNO plans) now issue number-bearing postpaid eSIM plans for foreign residents holding an ARC. Physical vs. eSIM is your device's constraint, not a legal one. However, you still need your physical ARC and a registered Korean address to activate a postpaid plan; tourist/travel eSIMs (e.g., Airalo) give data only, no 010 number. Starting September 2026, KT is expected to enable direct postpaid eSIM activation at branch offices for ARC holders.",
          source: { label: "kimchimobile.com", url: "https://www.kimchimobile.com/guides/korea-sim-card-for-foreigners/" },
        },
        {
          q: "My foreign phone is locked — can I still use it in Korea, and where do I get it unlocked?",
          a: "Korea uses 4G LTE and 5G on bands that most modern smartphones support (Band 1, 3, 5, 7, 8, 28). If your phone is carrier-locked (common with US carriers like AT&T and T-Mobile), you need to unlock it before departure — contact your home carrier and request an unlock; most unlock phones after 60–90 days of contract. Once unlocked, insert a Korean SIM or activate an eSIM and it should work. If you're already in Korea with a locked phone, Korean carriers cannot unlock foreign-carrier devices — you'll need to contact your home carrier remotely via their app or website.",
          source: { label: "masonkorea.gmu.edu", url: "https://masonkorea.gmu.edu/international-students/resources-for-living/cellphone-in-korea" },
        },
        {
          q: "What is an 알뜰폰 (budget phone plan) and is it a good option for international students?",
          a: "알뜰폰 (MVNO, or Mobile Virtual Network Operator) plans rent network capacity from KT, SKT, or LG U+ and resell it at 30–60% lower prices. For students, this is often the best value: unlimited data plans start around ₩15,000–₩25,000/month versus ₩50,000–₩70,000/month at the big three carriers. The trade-off is that customer service may be Korean-only and you won't get a carrier store walk-in experience. Recommended for students: HelloMobile (헬로모바일), Seoultel, and Liiv M — all can be activated online with your ARC number. Data speeds and coverage are identical to the parent carrier.",
          source: { label: "mobimatter.com", url: "https://mobimatter.com/guides/south-korea-esim-guide-2026-30-questions-best-esim-for-south-korea" },
        },
        {
          q: "I need a Korean phone number to verify my Kakao or Naver account — can I use a foreign number instead?",
          a: "Kakao Talk (카카오톡) does accept foreign numbers (+1, +44, etc.) for initial account creation via SMS verification. However, many Korean services — including Naver login, 공공 (government) app authentication, and banking OTP — require a Korean 010 number. If you only have a foreign number, you will be locked out of a significant portion of Korean online services. Getting a Korean number ASAP after ARC issuance is strongly recommended. An MVNO prepaid plan with a 010 number costs as little as ₩9,900/month with minimal data — enough just to receive SMS verifications.",
          source: { label: "lguplus.com", url: "https://www.lguplus.com/korea-sim/eng/pc/product/esim?tab=data" },
        },
        {
          q: "What happens to my Korean phone plan if I leave Korea for winter or summer break for more than a month?",
          a: "Your postpaid plan continues billing while you're abroad unless you take action. Options: (1) 일시정지 (temporary suspension) — most carriers allow 1–3 months of suspension per year for ₩1,100–₩2,200/month maintenance fee instead of your full bill; request this at the carrier store or app before departure. (2) Keep the plan active if you need the 010 number for Korean app verifications while abroad (e.g., bank OTP). (3) Cancel and reactivate — only advisable if you'll be gone a full semester, as you lose your number. Request 번호 이동 (number portability) first if you want to keep the same number with a new contract.",
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
          q: "My university offers its own private health insurance — can I use that instead of NHIS, and how do I apply for an exemption?",
          a: "You can apply for an NHIS exemption if your private policy meets strict criteria: coverage must be at least ₩1 billion (무제한 기준), claims must be processable inside Korea, and the policy must be currently active. Submit the exemption application (면제신청) within 14 days of NHIS enrollment at any NHIS branch with your insurance certificate, ARC, and passport. Exemptions are reviewed case-by-case and are often denied if the policy has exclusions for pre-existing conditions. Even if denied, it's worth applying — approved exemptions typically last 1 year and must be renewed. Contact NHIS at 1577-1000 (English available).",
          source: { label: "nhis.or.kr", url: "https://www.nhis.or.kr/english/wbheaa02900m01.do" },
        },
        {
          q: "Does NHIS cover mental health services like therapy or psychiatry in Korea?",
          a: "Yes. NHIS covers outpatient psychiatric consultations (정신건강의학과) at roughly 30–40% patient co-pay (so you pay ₩10,000–₩30,000 per visit, NHIS covers the rest). This includes depression, anxiety, adjustment disorder, and ADHD evaluation — conditions common among international students. If your university has an on-campus health center (학생상담센터), initial counseling is often free regardless of insurance. For a psychiatrist, search 네이버 or KakaoMap for '정신건강의학과' near your campus and look for clinics with English-speaking staff (영어 가능).",
          source: { label: "haniseoul.com", url: "https://www.haniseoul.com/blogs/korea-health-insurance-nhis-foreigner-guide" },
        },
        {
          q: "What is the actual monthly NHIS premium for a D-2 student in 2026, and where do I pay it?",
          a: "D-2 and D-4 visa holders receive a 50% discount on the local-subscriber (지역가입자) premium. In 2026, the discounted monthly premium for students is approximately ₩76,000–₩80,000/month. NHIS mails a bill to your registered ARC address; you can pay at any bank counter, convenience store (편의점 납부), or via the NHIS app (건강보험 앱). Missed payments accumulate a 3% monthly late fee, and unpaid premiums can block your visa renewal. Set up auto-pay (자동이체) from your Korean bank account to avoid forgetting.",
          source: { label: "student-insurance.com", url: "https://www.student-insurance.com/blog/nhis-premium-calculator-south-korea-students/" },
        },
        {
          q: "I just had a minor surgery in Korea — how do I get reimbursed by NHIS for out-of-pocket costs I paid upfront?",
          a: "If you paid the full cost upfront (e.g., at a clinic that doesn't process NHIS on the spot, which is rare but occurs), you can claim reimbursement via 요양비청구 (medical expense claim) at any NHIS branch within 3 years of treatment. Bring your receipt (영수증), medical records (진료기록), and ARC. However, the vast majority of Korean clinics and hospitals process NHIS automatically — you simply show your ARC at check-in and pay only your co-pay (본인부담금) at the time. If a clinic says they don't accept NHIS, ask explicitly: '건강보험 적용 안 되나요?'",
          source: { label: "masonkorea.gmu.edu", url: "https://masonkorea.gmu.edu/international-students/health-insurance" },
        },
        {
          q: "Can I get vaccinations covered by NHIS as a foreign student, and which vaccines are free in Korea?",
          a: "NHIS does not cover most adult vaccinations as a routine benefit — these are paid out-of-pocket. However, the Korean government provides free 독감 (influenza) vaccines for ARC holders who meet certain criteria (check the annual announcement at kdca.go.kr each September). Hepatitis B, MMR, and varicella boosters are available at 보건소 (public health centers) at subsidized rates of ₩5,000–₩20,000 per dose — far below private clinic prices. Bring your ARC, passport, and any prior vaccination records (예방접종 기록). Each district has one 보건소, find yours at 공공보건포털 (g-health.kr).",
          source: { label: "seoulstart.com", url: "https://seoulstart.com/guides/nhis-enrollment-guide" },
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
          q: "My TOPIK level affects how many hours I can work? How does that work exactly?",
          a: "Yes — as of 2026, D-2 students with TOPIK Level 4 or higher can work up to 35 hours/week, while those with TOPIK Level 3 or lower are capped at 15 hours/week (confirm the current rule at your university's international office as this policy was under revision in early 2026). The Part-Time Employment Permit (시간제취업허가) application at immigration specifies which limit applies to you, and your permit card physically states your maximum hours. Exceeding the stated hours, even by 1–2 hours, is a visa violation.",
          source: { label: "mykoreawork.com", url: "https://mykoreawork.com/en/blog/d2-student-visa-part-time-work-permit-guide-2026" },
        },
        {
          q: "My employer hasn't paid me for two months — what can I do as a foreign student?",
          a: "Call the Ministry of Employment and Labor (고용노동부) hotline at 1350 — English interpreters are available. File a formal 진정서 (labor complaint) online at minwon.moel.go.kr or at the nearest MOEL regional office; MOEL investigations typically take 30–60 days. If the unpaid amount qualifies under the Wage Claim Guarantee Act (체불임금확인서), you may receive payment from the government within 14 days via the 소당 (Sodan) guarantee scheme. As of 2026, courts can order Triple Damages (3배 배상) against employers who habitually withhold wages. Your immigration status is not penalized for filing a labor complaint.",
          source: { label: "thekoreaarchivedig.com", url: "https://thekoreaarchivedig.com/unpaid-wages-korea-moel-complaint-guide/" },
        },
        {
          q: "What industries or job types are off-limits for D-2 student part-time workers?",
          a: "The Part-Time Employment Permit lists prohibited industries where D-2 holders cannot work regardless of hours: adult entertainment (유흥업소), gambling facilities, door-to-door sales, and certain manufacturing sites. Simple service jobs — café barista, convenience store clerk (편의점 알바), tutoring, restaurant kitchen, delivery support — are all permitted. Sex-adjacent entertainment venues (노래방 도우미, room salon) are absolutely prohibited and can result in immediate visa cancellation and deportation. When in doubt, ask your immigration office or call 1345 before accepting a job offer.",
          source: { label: "kowork.kr", url: "https://kowork.kr/en/blog/part-time-work-permit-guide-en" },
        },
        {
          q: "Do I need to file Korean income taxes on my part-time earnings, and when is the deadline?",
          a: "Yes — all earned income in Korea is subject to 소득세 (income tax). Your employer should withhold 3.3% (or 8.8% for higher earners) from each paycheck. For most students earning under ₩5,000,000/year from part-time work, the withheld tax at source is sufficient and you may receive a small refund via 연말정산 (year-end tax adjustment) if your employer does it, or 종합소득세 신고 (comprehensive income tax return) filed in May. Use the HomeTax website (hometax.go.kr) — it has an English interface. Many students are owed refunds but never file. The deadline is May 31 of the following year.",
          source: { label: "study-abroad.org", url: "https://www.study-abroad.org/blog/kr-working-guide/" },
        },
        {
          q: "What is the 2026 minimum wage in Korea, and does it apply to foreign students doing part-time work?",
          a: "Korea's minimum wage for 2026 is ₩10,030/hour (a 1.7% increase from ₩9,860 in 2025). It applies equally to all workers regardless of nationality or visa type. If you work 15+ hours/week, your employer must also enroll you in 4 major social insurances (국민연금, 건강보험, 고용보험, 산재보험); for under 15 hours/week, only industrial accident insurance (산재) is mandatory from day one. Always receive a written 근로계약서 (labor contract) — employers who refuse to provide one are violating labor law.",
          source: { label: "playroll.com", url: "https://www.playroll.com/minimum-wage/south-korea" },
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
          q: "What is the 'W' grade on a Korean university transcript, and how does the credit withdrawal system work?",
          a: "A 'W' (withdrawal) appears on your transcript when you drop a course after the initial add/drop period but before the withdrawal deadline (usually late September for fall, late March for spring). It does not affect your GPA but shows you enrolled and left. At Korea University, students may withdraw up to 6 credits once per degree — required courses (필수과목) cannot be withdrawn. Exchange students should check their home university's credit transfer policy before using withdrawal, as some home institutions treat 'W' as a failed course. Check your specific university's registrar website for exact deadlines.",
          source: { label: "registrar.korea.edu", url: "https://registrar.korea.edu/eduinfo_en/info/grade_giveup.do" },
        },
        {
          q: "My GPA dropped badly this semester — can I get kicked out of Korea for academic failure?",
          a: "Academic probation (학사경고) does not immediately trigger visa cancellation, but if you drop below the minimum GPA required to re-enroll and are academically dismissed (제적), your D-2 visa is automatically invalidated within 30 days of the school reporting the change to immigration. Most universities allow 2–3 consecutive semesters of academic probation (typically GPA below 1.75) before dismissal. If dismissed, you must leave Korea within 30 days unless you convert to another visa. Contact your 국제처 before grades are finalized if you're at risk — some universities have an academic support appeal process that can prevent dismissal.",
          source: { label: "seoulstart.com", url: "https://seoulstart.com/guides/d-2-visa-guide" },
        },
        {
          q: "How does the Korean university grading curve (상대평가) work, and why are grades lower than I expected?",
          a: "Most Korean undergraduate courses use 상대평가 (relative grading), where the percentage of students who can receive A grades is capped by the university — typically A+ and A0 together cannot exceed 30–40% of the class. This means even an objectively strong paper may receive a B+ if the class is highly competitive. Some courses labeled 절대평가 (absolute grading) don't cap A grades. Check the course description (수업계획서) at the beginning of semester to see which system applies. For foreign exchange students, this grading reality is often a shock after Western universities where A grades are more freely given.",
          source: { label: "libart.korea.edu", url: "https://libart.korea.edu/libart_en/affairs/signup.do" },
        },
        {
          q: "Are there Korean university resources specifically for international students struggling with language or academic adjustment?",
          a: "Yes — most major universities have a dedicated support ecosystem beyond the 국제처. Look for: (1) 글로벌 라운지 (Global Lounge) or International Student Support Center with Korean language tutoring; (2) Buddy programs (버디 프로그램) pairing international students with Korean students; (3) 학습지원센터 (Academic Support Center) for writing and study skills; (4) 학생상담센터 (Student Counseling Center) for mental health support — most offer sessions in English or can arrange an interpreter. At SNU, Korea University, and Yonsei, these are free services available to all registered students — underutilized by many international students who don't know they exist.",
          source: { label: "gsc.korea.ac.kr", url: "https://gsc.korea.ac.kr/usr/service/accommodation.do" },
        },
        {
          q: "Can I take Korean language courses for credit while studying on a D-2 degree-program visa?",
          a: "Yes — most Korean universities offer Korean language elective credits (교양한국어) open to international students on degree programs. These are typically 1–3 credit courses and count toward your graduation credit total. They are separate from the 어학원 (language institute) run by the same university, which caters to D-4 visa holders and charges extra tuition. Enrolling in credit-bearing Korean courses is a practical strategy: it improves your daily life Korean, raises your TOPIK score over time (which increases your work-hour limit), and helps satisfy general education requirements. Register during 수강신청 (course registration) week — spots fill fast.",
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
          q: "I was a victim of a crime in Korea — do I have any right to a free interpreter during police or court proceedings?",
          a: "Yes. Under Korean law (형사소송법), if you cannot communicate in Korean during criminal proceedings, the police or court must provide an interpreter free of charge. At the police station, request 통역 서비스 (tongnyeok seobiseu) immediately. The Supreme Court also operates a court interpreter service (법원 통역) for formal hearings. The Korea Legal Aid Corporation (132, available in multiple languages) can provide free legal counseling and representation for victims of crime who meet income criteria. Seoul Global Center (02-2075-4180) can provide referrals for English-speaking legal support.",
          source: { label: "legal.seoul.go.kr", url: "https://legal.seoul.go.kr/legal/english/front/page/contents.html?pAct=freeLegalConsultationService" },
        },
        {
          q: "What is the Korea Legal Aid Corporation (법률구조공단) and how can I access free legal help as a foreign student?",
          a: "The Korea Legal Aid Corporation (KLAC / 법률구조공단) provides free legal consultations, document preparation, and court representation to residents whose income is below 125% of the median income. For students, this threshold is almost always met. Services include labor disputes (unpaid wages), tenant rights, consumer fraud, and family law. Call 132 (domestic) or +82-54-132 (international) — English, Chinese, Vietnamese, and other languages available. You can also book online at klac.or.kr. There are KLAC offices in every major city and near most university districts.",
          source: { label: "help.unhcr.org", url: "https://help.unhcr.org/southkorea/services-free-legal-support/" },
        },
        {
          q: "What should I do if I'm involved in a traffic accident in Korea as a pedestrian or cyclist?",
          a: "Call 112 (police) and 119 (ambulance) immediately — dispatchers have English support via the 1330 Tourist Helpline which can be patched in. Take photos of the scene, vehicle plates, and your injuries before anything is moved. Korean law generally favors pedestrians in fault determination. Request a police accident report (교통사고 사실확인원) at the scene or at the nearest police station within 24 hours — you'll need this for insurance claims. If you have NHIS, your treatment is covered at the co-pay rate; the at-fault driver's mandatory auto insurance (대인배상) typically covers the remainder. Do not sign any documents from the other driver before consulting KLAC (132) or your embassy.",
          source: { label: "legal.seoul.go.kr", url: "https://legal.seoul.go.kr/legal/english/front/page/contents.html?pAct=freeLegalConsultationService" },
        },
        {
          q: "My landlord is refusing to return my deposit when I move out — what legal steps can I take?",
          a: "If you registered 확정일자 (confirmed date stamp) at move-in, you have legal priority over the deposit. First, send a formal written demand (내용증명) via any post office — this creates a legal paper trail and often prompts landlords to pay. If that fails, file for 임차권등기명령 (Lease Right Registration Order) at the local district court (등기소) — this allows you to retain your legal priority even after you vacate the property. For deposits under ₩30,000,000, you can use the Small Claims Court (소액사건심판) which is faster and doesn't require a lawyer. Call KLAC (132) or Seoul Global Center (02-2075-4180) for free Korean-language document templates.",
          source: { label: "easylaw.go.kr", url: "https://m.easylaw.go.kr/MOM/SubCsmOvRetrieve.laf?langCd=700101&csmSeq=2800&ccfNo=1&cciNo=1&cnpClsNo=1" },
        },
        {
          q: "Can my home country's embassy actually help me if I'm arrested or detained in Korea?",
          a: "Yes — under the Vienna Convention on Consular Relations, Korean authorities must inform you of your right to contact your embassy or consulate immediately upon arrest. Insist on this right by saying: '대사관에 연락하고 싶습니다' (I want to contact my embassy). Your embassy cannot get you released or override Korean law, but they can: verify that you are being treated fairly, provide a list of local lawyers, contact your family, and assist with emergency travel documents if needed. The U.S. Embassy in Seoul is reachable 24/7 for emergencies at +82-2-397-4114; most major embassies have similar emergency lines.",
          source: { label: "kr.usembassy.gov", url: "https://kr.usembassy.gov/services-attorneys/" },
        },
      ],
    },
  ],
};

export default TIPS;
