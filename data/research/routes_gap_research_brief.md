# Routes → Places 연결 복구 — 리서치 브리프

## 배경 및 문제

`data/routes.json`의 7개 추천 루트가 `data/places.json`을 `place_ids`로 참조해서
지도(`KoreaMap.tsx`)에 핀과 경로선을 그린다. 그런데 대조해보니 7개 루트 중
**대부분의 `place_ids`가 `places.json`에 존재하지 않는 ID**를 가리키고 있어서,
사용자가 `/korea` 페이지에서 루트를 클릭해도 **지도에 핀이 하나도 안 찍히는 상태**다
(실제 브라우저로 확인 완료 — 제주 루트 클릭 시 빈 지도만 나옴).

두 가지 다른 문제가 섞여 있다:
1. **진짜 데이터가 없음** — 리서치 자체가 된 적 없는 장소 (아래 "신규 리서치 필요" 섹션)
2. **데이터는 있는데 ID/이름이 안 맞음** — 리서치는 됐지만 `routes.json`이 다른 ID를 참조 중 (이건 리서치 불필요, 코드에서 ID만 맞추면 됨 — 아래 "리서치 불필요" 섹션에 정리, 참고용)

이 브리프는 **1번, 신규 리서치가 필요한 항목만** 다룬다.

## 출처 우선순위
1. 공식 관광 정보 (english.visitkorea.or.kr, 지자체 관광 공식 사이트)
2. 팬 커뮤니티 검증 (Reddit r/KDRAMA, r/kpop, Namu wiki, X 해시태그)
3. 여행 블로그 (creatrip.com, whatmytrip.com 등 — 기존 places.json에서 이미 신뢰도 확인된 소스)
4. 예약 플랫폼 (CatchTable, Klook) — 레스토랑의 경우 실제 영업 여부 확인용

## 결과물 포맷

`places.json`과 동일한 스키마의 JSON 배열. 카테고리별 필드 차이에 주의:

**drama_location / kpop_pilgrimage (촬영지·성지):**
```json
{
  "id": "고유 slug (영문 소문자, 하이픈)",
  "name_en": "장소 영문명",
  "name_ko": "장소 한국어명",
  "category": "drama_location 또는 kpop_pilgrimage",
  "dramas": ["작품명"],           // drama_location인 경우
  "artists": ["아티스트명"],       // kpop_pilgrimage인 경우
  "area": "Jeju / Gangneung / Busan / Seoul 등",
  "address": "도로명 주소 (한국어)",
  "lat": 위도 (소수점 4자리),
  "lng": 경도 (소수점 4자리),
  "english_available": true/false/null,
  "foreign_card": true/false/null,
  "reservation_required": true/false,
  "price_range": "Free / ₩5,000 등",
  "tip": "외국인을 위한 실용 팁 2-4문장 (영어)",
  "scene": "어떤 장면의 배경인지 (drama_location만 해당)",
  "last_verified": "2026-XX",
  "verification_notes": "출처 교차검증 메모",
  "source": "출처 URL (세미콜론으로 복수 구분)"
}
```

**k_food (레스토랑):**
```json
{
  "id": "...",
  "name_en": "...", "name_ko": "...",
  "category": "k_food",
  "area": "Seoul",
  "address": "...", "lat": 0, "lng": 0,
  "english_available": true/false, "foreign_card": true/false,
  "reservation_required": true/false,
  "price_range": "가격대 (₩)",
  "tip": "예약 방법, 웨이팅 팁, 시그니처 메뉴 등",
  "cuisine": "요리 종류",
  "halal": false, "vegan_options": false,
  "last_verified": "2026-XX",
  "source": "..."
}
```

## 주의사항
- 폐업/휴업 확인되면 제외
- 좌표는 구글맵에서 직접 확인 (소수점 4자리)
- `hikorea`, `hybe insight` 등 이미 `places.json`에 있는 항목의 최신 운영 상태(폐관 등)와 모순되지 않는지 교차 확인
- 사유지/출입 불가 장소는 "free entry"가 아니라 명시적으로 접근 제약 기재

---

## 신규 리서치 필요 (총 3개 그룹, 약 11-13개 장소)

### 그룹 1: 제주 — "당신, 거기 있어줄래요" (When Life Gives You Tangerines) 촬영지

**현재 상태**: `places.json`에 제주 항목이 **0개**. 완전 공백.

`routes.json`이 참조 중인 5곳 (전부 리서치 필요):
- 성산 (Seongsan) 관련 촬영지 — 구체적 스팟 확인 필요 (성산일출봉? 인근 마을?)
- 김녕 (Gimnyeong) 관련 촬영지
- 섭지코지 (Seopjikoji) 관련 촬영지
- 가시리 (Gasiri) 관련 촬영지
- 우도 (Udo Island) 관련 촬영지

**검색 키워드:**
- "당신 거기 있어줄래요 촬영지 제주"
- "When Life Gives You Tangerines filming locations Jeju"
- 제주관광공사 공식 성지순례 코스 (`route.tip`에 이미 "Official 3-day tour route available from Jeju Tourism Organization"이라고 적혀있음 — 이 공식 투어 코스 원본 자료부터 찾을 것)
- X/Reddit: "#당신거기있어줄래요 #제주촬영지"

**목표**: 5개 지점 각각 정확한 주소+좌표. 렌터카 이동 동선이 실제로 말이 되는지 (order_note: "Day 1: Seongsan + Udo, Day 2: Seopjikoji + Gasiri, Day 3: Gimnyeong") 지리적으로 검증.

---

### 그룹 2: 부산 — BTS·K-pop 고향 투어

**현재 상태**: `places.json`에 부산 항목은 `spa-land-centum-busan` (무관한 찜질방) 하나뿐.

`routes.json`이 참조 중인 3곳 (전부 리서치 필요):
- **ZM-ILLENNIAL Cafe** — 지민 관련 카페. 기존 `hybe-building-yongsan` 근처 노트에 "ZM-ILLENNIAL Cafe is in Nam-gu, not Gwangalli — many maps show the wrong location"라는 경고가 이미 있음 → 정확한 남구 주소 확인이 핵심
- **감천문화마을 (Gamcheon Culture Village)** — 유명 관광지라 주소/좌표는 쉽게 나오지만, "BTS·K-pop과의 연결점"이 실제로 있는지 확인 필요 (단순 관광지인지, 특정 아티스트 연고가 있는지)
- **광안리 해수욕장 (Gwangalli Beach)** — 마찬가지로 K-pop 연고점이 있는지, 아니면 그냥 일몰 스팟으로 끼워넣은 건지 확인

**검색 키워드:**
- "ZM-ILLENNIAL cafe Busan Nam-gu address"
- "BTS Busan hometown spots Jimin Jungkook"
- "SEVENTEEN Woozi Busan hometown"
- "감천문화마을 BTS 연관"

**목표**: 3곳 정확한 주소+좌표. 특히 감천문화마을·광안리가 실제 K-pop 연고가 있는지, 없다면 route 설명 문구를 "K-pop 성지"가 아니라 "부산 여행 곁들이기 스팟"으로 재조정할 근거 자료.

---

### 그룹 3: 흑백요리사 (Culinary Class Wars) — 미확인 레스토랑 2곳

**현재 상태**: `places.json`에 흑백요리사 셰프 레스토랑 6곳이 이미 있음 (최현석/쵸이닷, 이연복/목란, 본앤브레드, 발우공양, 모수, 이모카세). 하지만 `routes.json`이 참조하는 **"Via Toledo"와 "Soigné"는 이 6곳에 없음** — 완전히 다른 레스토랑.

**검색 키워드:**
- "Via Toledo 셰프 레스토랑 흑백요리사"
- "Soigné 흑백요리사 레스토랑"
- "Culinary Class Wars Via Toledo restaurant address"
- "Culinary Class Wars Soigné restaurant reservation"
- CatchTable에서 "Via Toledo", "Soigné" 검색

**확인할 것**:
- 두 레스토랑이 실제 흑백요리사 출연 셰프 식당이 맞는지 (다른 프로그램과 혼동 가능성 체크)
- 정확한 주소/좌표
- 예약 방식 (`route.tip`에 이미 "Via Toledo: reservations open 10th and 25th of each month at midnight on CatchTable"이라고 적혀있음 — 이 정보가 맞는지 검증)
- 폐업 여부

---

## 리서치 불필요 (참고용 — ID 재매핑만 하면 됨)

아래는 이미 `places.json`에 데이터가 있으니 리서치 대상에서 제외. `routes.json`의 `place_ids`만 오른쪽 값으로 고치면 됨:

| routes.json이 참조하는 잘못된 ID | 실제 places.json ID |
|---|---|
| `gangneung-jumunjin` | `jumunjin-breakwater-goblin` |
| `suwon-montede` | `cafe-monted-suwon-lovely-runner` |
| `hybe-insight` | `hybe-building-yongsan` (⚠️ 단, HYBE INSIGHT는 2023년 1월 폐관 — route의 tip 문구도 같이 수정 필요) |
| `kstar-road` | `k-star-road-gangnam` |
| `kwangya-seoul` | `sm-kwangya-seongsu` |
| `culinary-mosu` | `mosu-seoul-chef-ahn` |
| `culinary-budget` | `auntie-omakase-ccw` |

## 추가로 애매한 것 (소규모 리서치, 선택사항)

- `gangneung-gyeongpodae` (경포대), `gangneung-wolhwa` (월화거리) — Goblin과 직접 연관은 없어 보이는 강릉 일반 관광지. 도깨비 루트에 왜 들어갔는지 확인 후, 좌표만 채우거나 아예 루트에서 빼는 판단 필요 (딥 리서치 불필요, 좌표만 확인하면 됨)
- `suwon-hwaseong` (화성 성곽 자체) — 유명 UNESCO 유적지라 좌표는 쉽게 구해짐. 별도 리서치 불필요, 좌표만 추가
- `seongsu-popup` — 기존 `seongsu-yeongbang` 또는 `daerim-changgo-seongsu`로 대체 가능. order_note에 언급된 "NewJeans Bunny Mural"은 신규 스팟이라 좌표 확인이 필요하면 여기 포함
- Busan route의 "Haeundae Beach", "Busan Station area" (order_note에 optional로만 언급) — 지도 핀으로 꼭 넣을 필요는 없음, 스킵 가능

---

## 최종 목표
- 그룹 1 (제주): 5개 장소
- 그룹 2 (부산): 3개 장소
- 그룹 3 (흑백요리사): 2개 장소
- 총 10개 신규 장소 + 선택적으로 3-4개 추가 (경포대/월화거리/화성/NewJeans 벽화)
- 전부 외국인이 실제로 갈 수 있는 곳만, 폐업/접근불가 제외
