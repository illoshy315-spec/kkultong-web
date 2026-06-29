# Korea Places — Research Brief (4 New Categories)

## 목적
kkultongkorea.com의 `places.json`에 추가할 장소 데이터 수집.
외국인(영어권) 여행자 기준. 2025년 기준 최신 정보 필수.

## 출처 우선순위
1. 공식 사이트 (가게/브랜드 공식 홈페이지, 네이버 플레이스)
2. 한국관광공사: english.visitkorea.or.kr
3. 미슐랭 가이드 코리아, 블루리본 서베이
4. 구글맵 리뷰 (외국인 리뷰 포함 여부 확인)

## 각 장소 필수 수집 정보

모든 장소마다 아래 필드를 채워야 함:

```json
{
  "id": "고유 slug (영문 소문자, 하이픈)",
  "name_en": "영문 공식 명칭",
  "name_ko": "한국어 명칭",
  "category": "k_beauty / k_food / k_experience / k_shopping",
  "area": "Seoul / Busan / Jeju / 기타",
  "address": "도로명 주소 (한국어)",
  "lat": 위도 (소수점 4자리),
  "lng": 경도 (소수점 4자리),
  "english_available": true / false / null,
  "foreign_card": true / false / null,
  "reservation_required": true / false,
  "price_range": "가격대 (예: ₩150,000–₩200,000 / Free / ₩5,000–₩15,000)",
  "tip": "외국인에게 실용적인 팁 2-3문장 (영어)",
  "instagram": "@계정명 또는 null",
  "last_verified": "2025-XX 또는 2026-XX"
}
```

**카테고리별 추가 필드:**
- k_beauty: `"services": ["퍼스널컬러", "체형진단" 등]`
- k_food: `"cuisine": "음식 종류"`, `"halal": true/false`, `"vegan_options": true/false`
- k_experience: `"experience_type": "댄스클래스 / 한복 / 찜질방 등"`
- k_shopping: `"shop_type": "편집숍 / 팝업 / 시장 등"`

---

## 카테고리 1: 💄 K-Beauty (category: "k_beauty")

**목표: 8–12개 장소**

### 퍼스널컬러 진단 (Personal Color Diagnosis)
외국인이 예약 가능하고, 영어 소통 가능한 곳 우선.

**수집 대상:**
- 홍대/마포 권역 퍼스널컬러 샵 3–4개
- 강남/청담 권역 퍼스널컬러 샵 2–3개
- 체형 진단 (body type consulting) 제공하는 곳

**검색 키워드:**
- "personal color diagnosis Seoul English 2025"
- "퍼스널컬러 외국인 홍대 강남"
- "personal color salon Seoul foreigner friendly"
- 네이버 플레이스: "퍼스널컬러" + 지역

**확인 필수:**
- 예약 방법 (카카오채널 / 네이버 예약 / 이메일)
- 외국인 예약 가능 여부
- 영어 소통 가능 여부
- 가격 (보통 ₩50,000–₩200,000)
- 소요 시간

### 올리브영 (Olive Young) 주요 매장
외국인이 많이 찾는 플래그십 / 관광지 매장

**수집 대상:**
- 명동 타운 (올리브영 명동타운 — 최대 매장)
- 홍대 매장
- 강남 매장
- 이태원 매장

**확인 필수:**
- 외국인 면세 가능 여부 (Tax Refund)
- 영어 직원 여부
- 세일 시즌 정보 (올영세일: 보통 3월, 6월, 9월, 12월)

### 다이소 (Daiso) 뷰티 핫스팟
외국인 관광객이 K-beauty 제품 사러 가는 다이소

**수집 대상:**
- 명동 다이소 (5층 건물, 가장 큰 곳)
- 홍대 다이소
- 강남 다이소

---

## 카테고리 2: 🍽️ K-Food (category: "k_food")

**목표: 10–15개 장소**

### 흑백요리사 (Culinary Class Wars) 셰프 레스토랑
Netflix 시즌 1 (2024) + 시즌 2 (2025) 출연 셰프 레스토랑

**수집 대상 (우선순위 높음):**
- 최현석 셰프 레스토랑 (KATCH, 청담)
- 에드워드 리 셰프 (Ed's Buffet)
- 이연복 셰프 (목란)
- 파브리 셰프 (파브리)
- 기타 출연 셰프 중 외국인 예약 가능한 곳

**확인 필수:**
- 캐치테이블 / 네이버 예약 외국인 가능 여부
- 영어 메뉴 여부
- 가격대
- 예약 난이도 (외국인 팁 포함)

### 미슐랭 스타 레스토랑 (외국인 접근성 높은 곳)
2025 미슐랭 가이드 서울 기준

**수집 대상:**
- 1성급 중 외국인 예약 가능하고 영어 메뉴 있는 곳 3–5개
- 빕 구르망(Bib Gourmand) 중 외국인이 가기 좋은 곳 2–3개

**검색 키워드:**
- "Michelin star restaurant Seoul foreigner English menu 2025"
- "Michelin Seoul 2025 foreigner friendly reservation"
- site:guide.michelin.com/kr/ko (미슐랭 코리아 공식)

### 사찰음식 (Temple Food)
**수집 대상:**
- 발우공양 (서울 인사동) — 가장 유명한 사찰음식 레스토랑
- 기타 사찰음식 레스토랑 1–2개

### 할랄 (Halal)
**수집 대상:**
- KMF 인증 할랄 레스토랑 서울 3–5개
- 이태원 이슬람 사원 주변 할랄 식당

**검색 키워드:**
- "halal certified restaurant Seoul 2025"
- "KMF halal Korea Muslim foreigner"
- site:kmf.or.kr (한국무슬림연합회)

### 비건/채식 (Vegan)
**수집 대상:**
- 100% 비건 레스토랑 서울 3–5개

**검색 키워드:**
- "vegan restaurant Seoul 2025 foreigner English"
- "채식 레스토랑 서울 외국인"

---

## 카테고리 3: 💃 K-Experience (category: "k_experience")

**목표: 8–12개 장소**

### K-Pop 댄스클래스
외국인 대상 K-pop 댄스 클래스 (영어 강습 가능)

**수집 대상:**
- 1MILLION Dance Studio (서울)
- K-pop 커버댄스 외국인 클래스 제공 스튜디오 3–5개

**확인 필수:**
- 외국인 예약 방법 (이메일 / 인스타DM)
- 가격 (보통 ₩20,000–₩50,000/회)
- 영어 강사 여부
- 드롭인(당일 참가) 가능 여부

### 한복 체험
**수집 대상:**
- 경복궁 주변 한복 대여점 2–3개
- 전주 한옥마을 한복 대여점 1–2개

**확인 필수:**
- 가격 (보통 ₩10,000–₩30,000/시간)
- 포함 서비스 (머리 서비스, 소품 등)
- 영어 응대 여부

### 찜질방 (Jjimjilbang)
외국인에게 추천할 만한 프리미엄 찜질방

**수집 대상:**
- 용산 드래곤힐스파
- 신라스테이 스파 or 유사 프리미엄 찜질방
- 부산 스파랜드 센텀시티

**확인 필수:**
- 외국인 입장 가능 여부 (문신 있을 경우 주의)
- 가격
- 영어 안내 여부

### 템플스테이 (Temple Stay)
**수집 대상:**
- 한국불교문화사업단 공식 템플스테이 프로그램
- 서울 조계사 / 인근 사찰

**검색 키워드:**
- "templestay Korea English 2025 foreigner"
- site:templestay.com (공식 사이트)

### 무속/전통 체험
**수집 대상:**
- 국립민속박물관 전통 체험 프로그램
- 북촌 전통 문화 체험 공간

---

## 카테고리 4: 🛍️ K-Shopping (category: "k_shopping")

**목표: 8–12개 장소**

### 올리브영 (K-Beauty Shopping — 이미 위에 있으므로 중복 제외)

### 성수동 팝업 / 편집숍
**수집 대상:**
- 성수연방 (편집숍 복합공간)
- 대림창고 (팝업 이벤트 공간)
- 어반소스 / 기타 성수 편집숍

**확인 필수:**
- 팝업은 상설 공간인지 정기 운영인지
- 외국인 카드 가능 여부

### 동대문 쇼핑 (Dongdaemun)
**수집 대상:**
- 동대문디자인플라자 DDP
- 두타몰 (외국인 쇼핑 친화)
- 광장시장 (전통시장)

**확인 필수:**
- 운영 시간 (새벽 영업 여부)
- 외국인 카드 가능 여부
- 면세 가능 여부

### 명동 쇼핑
**수집 대상:**
- 명동 쇼핑 거리 전체 개요
- 눈스퀘어 (Noon Square)

### 강남/청담 명품/편집숍
**수집 대상:**
- 청담 가로수길 명품 편집숍 2–3개
- 10 Corso Como Seoul

### 전통시장
**수집 대상:**
- 광장시장 (빈대떡, 마약김밥으로 유명)
- 통인시장 (도시락 카페)
- 남대문시장

---

## 결과물 포맷

JSON 배열로 제출. 각 장소마다 아래 형식 정확히 지킬 것:

```json
[
  {
    "id": "olive-young-myeongdong",
    "name_en": "Olive Young Myeongdong Town",
    "name_ko": "올리브영 명동타운",
    "category": "k_beauty",
    "area": "Seoul",
    "address": "서울특별시 중구 명동8나길 10",
    "lat": 37.5636,
    "lng": 126.9849,
    "english_available": true,
    "foreign_card": true,
    "reservation_required": false,
    "price_range": "₩3,000–₩50,000",
    "tip": "Korea's largest Olive Young flagship. Tax refund available for purchases over ₩30,000. Staff speak basic English. Olive Young sale (올영세일) runs in March, June, September, and December — best time to stock up.",
    "instagram": "@oliveyoung_global",
    "last_verified": "2025-06",
    "services": ["Tax Refund", "올영세일"],
    "shop_type": "편집숍"
  }
]
```

## 주의사항
- `lat`/`lng`는 구글맵에서 정확한 좌표 확인 필수
- `tip`은 반드시 영어로, 외국인 관점에서 실용적인 정보
- 폐업했거나 불확실한 곳은 제외
- 팝업처럼 임시 운영인 곳은 `tip`에 "Check Instagram for current schedule" 명시
- 출처 URL을 각 장소 옆에 메모로 남길 것 (코드엔 안 들어가지만 검증용)
