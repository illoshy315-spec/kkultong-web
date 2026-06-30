# Korea Guide Tips — Content Research Brief
> DeepSeek용 리서치 브리프. 결과는 JSON으로 받아서 tips.ts에 반영.

---

## 프로젝트 컨텍스트

Website: kkultongkorea.com
Target audience: English-speaking foreigners in Korea — travelers, digital nomads, students
Goal: Beat existing expat blogs (10kadayinseoul, seoulistic, waegukin, etc.) on long-tail Google searches
Differentiator: Practical insider info that generic travel blogs don't cover

---

## 현재 콘텐츠 현황

### Traveler
- Getting Around (6Q): T-Money, KTX vs SRT, Kakao T, Incheon Airport, bus colors, car rental
- Accommodation (4Q): motel vs guesthouse, jjimjilbang, passport at check-in, Airbnb legality
- Money & Payments (4Q): currency exchange, Wise/Revolut ATM, foreign card declines, WOWPASS
- Emergency & Health (4Q): emergency numbers, English doctors, OTC medicine, lost & found

### Digital Nomad
- Banking (4Q): which banks accept foreigners, open without ARC, internet banking, Kakao Bank
- SIM & Internet (3Q): tourist SIM options, eSIM, coworking wifi
- Payments (3Q): foreign card issues, WOWPASS, Naver Pay / Kakao Pay
- Housing (3Q): rental types, monthly rents, address registration
- Coworking & Cafes (3Q): coworking spaces, cafe work culture, best areas
- Tax & Visa (4Q): D-10 visa, income tax, double taxation, health insurance
- Essential Apps (3Q): must-have apps, Naver vs Kakao, delivery apps

### Student
- ARC (4Q): when/where to apply, receipt use, mobile ARC, lost ARC
- Banking (4Q): bank account without ARC, student-friendly banks, online banking, sending money home
- Housing (4Q): dormitory vs officetel, jeonse/wolse/gosiwon, scam prevention, moving in checklist
- Phone & SIM (3Q): student SIM options, Korean number necessity, porting foreign number
- Health Insurance (4Q): NHIS enrollment, premium rates, what's covered, dental/vision
- Part-time Work (4Q): legal work hours for F-1 visa, job hunting apps, tax on part-time income, reporting requirements
- University Life (4Q): registration timeline, academic Korean survival, professor culture, clubs/activities
- Emergency & Legal (3Q): emergency contacts, police report for foreigners, visa overstay consequences

---

## 리서치 태스크

### Task 1: Pain Points (섹션별 추가 Q&A)

For EACH existing section listed above, provide 5 additional Q&As that:
- Are NOT already covered by the existing questions
- Are NOT well-answered by top English expat blogs
- Require specific Korea insider knowledge
- Are phrased as natural questions a foreigner would actually Google

Format per section:
```json
[
  {
    "q": "Question text",
    "a": "Detailed answer — 3–6 sentences. Include specific numbers, names, Korean terms in parentheses, and actionable steps.",
    "source": { "label": "source name", "url": "https://..." }
  }
]
```

### Task 2: Missing Sections

For each persona, what entire new sections should be added?
Consider topics like:
- Traveler: SIM cards for tourists, K-beauty shopping, Korean festivals/events calendar, customs & etiquette, nightlife, day trips from Seoul
- Digital Nomad: Getting a driver's license, opening a business, co-living spaces, dating & social life, gym & fitness, Korean language learning resources
- Student: Part-time job hunting specifics, scholarship tips, mental health resources, cooking & grocery shopping, traveling Korea on a student budget, internships

For each suggested section, provide:
```json
{
  "section": "Section Title",
  "icon": "emoji",
  "persona": "traveler|nomad|student",
  "justification": "Why this is needed / what pain point it solves",
  "suggested_questions": ["Q1", "Q2", "Q3", "Q4", "Q5"]
}
```

### Task 3: SEO Volume Target

Answer:
1. How many individual Q&A pages does a Korea guide site need to rank for long-tail queries?
2. What's the minimum to appear in Google featured snippets for "how to X in Korea" queries?
3. How does page count compare to top competitor sites (Waegukin, 10Magazine, Seoulistic)?

### Task 4: Keyword Research

Provide 30 long-tail English keywords that:
- Have clear search intent (someone needs an answer)
- Are specific enough to have low-to-medium competition
- Map to content we can create

```json
[
  {
    "keyword": "how to open bank account in korea without arc",
    "persona": "nomad|student|traveler",
    "intent": "informational",
    "estimated_difficulty": "low|medium|high",
    "maps_to_section": "Banking"
  }
]
```

### Task 5: Competitor Gap Analysis

Visit or analyze these sites and identify what topics they cover poorly or not at all:
- waegukin.com
- seoulistic.com
- 10mag.com
- koreaexpatsguide.com
- eslcafe.com/korea

What are the top 10 topics where we can be definitively better?

---

## 출력 형식

Return everything as a single JSON file with this structure:

```json
{
  "additional_qa": {
    "traveler": {
      "Getting Around": [...],
      "Accommodation": [...],
      "Money & Payments": [...],
      "Emergency & Health": [...]
    },
    "nomad": {
      "Banking": [...],
      "SIM & Internet": [...],
      "Payments": [...],
      "Housing": [...],
      "Coworking & Cafes": [...],
      "Tax & Visa": [...],
      "Essential Apps": [...]
    },
    "student": {
      "ARC": [...],
      "Banking": [...],
      "Housing": [...],
      "Phone & SIM": [...],
      "Health Insurance": [...],
      "Part-time Work": [...],
      "University Life": [...],
      "Emergency & Legal": [...]
    }
  },
  "new_sections": [
    {
      "section": "",
      "icon": "",
      "persona": "",
      "justification": "",
      "suggested_questions": []
    }
  ],
  "seo_volume": {
    "min_pages": 0,
    "featured_snippet_threshold": 0,
    "competitor_comparison": {}
  },
  "keywords": [
    {
      "keyword": "",
      "persona": "",
      "intent": "",
      "estimated_difficulty": "",
      "maps_to_section": ""
    }
  ],
  "competitor_gaps": [
    {
      "topic": "",
      "why_gap_exists": "",
      "our_angle": ""
    }
  ]
}
```

---

## 우선순위

High priority (do first):
1. additional_qa — 기존 섹션 Q&A 확장
2. new_sections — 새 섹션 제안
3. keywords — SEO 키워드

Lower priority:
4. seo_volume
5. competitor_gaps
