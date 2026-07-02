# Korea Places — 카테고리·지역 갭 채우기 리서치 브리프 (2026-07)

## 목적

현재 `places.json`(74개)을 카테고리·지역별로 나눠보면 아래처럼 서울에 쏠려 있고, 특정 카테고리는 항목 수 자체가 적다.

| 카테고리 | 전체 개수 | 서울 외 지역 |
|---|---|---|
| k_experience | 4 | Busan 1 (사실상 없음 — 가장 얇은 카테고리) |
| k_beauty | 7 | 0 (100% 서울) |
| k_shopping | 8 | 0 (100% 서울) |
| local_icon | 13 | Daejeon·Yeongwol·Chungju뿐 — 서울·부산·제주·경주·전주·강릉·속초 전부 없음 |

이 브리프는 **위 4개 갭을 동시에** 채운다. 외국인(영어권) 여행자 기준, 2026년 기준 최신 정보 필수.

## 출처 우선순위
1. 공식 사이트 (가게/브랜드 공식 홈페이지, 네이버 플레이스)
2. 한국관광공사: english.visitkorea.or.kr (지역 관광공사 페이지 포함 — 부산관광공사, 제주관광공사 등)
3. 미슐랭 가이드 코리아, 블루리본 서베이 (k_food 인접 항목에 한해)
4. 구글맵 리뷰 (외국인 리뷰 비중 확인)
5. local_icon 항목은 한국 뉴스/지역 신문/유튜브 반복 언급 빈도로 교차검증

## 공통 필드 (모든 장소)

```json
{
  "id": "고유 slug (영문 소문자, 하이픈)",
  "name_en": "영문 명칭",
  "name_ko": "한국어 명칭",
  "category": "k_experience / k_beauty / k_shopping / local_icon",
  "area": "Busan / Jeju / Daegu / Gyeongju / Jeonju / Gangneung / Sokcho / Seoul 등",
  "address": "도로명 주소 (한국어)",
  "lat": 위도 (소수점 4자리),
  "lng": 경도 (소수점 4자리),
  "english_available": true / false / null,
  "foreign_card": true / false / null,
  "reservation_required": true / false,
  "price_range": "가격대 (예: ₩20,000–₩30,000 / Free)",
  "tip": "외국인에게 실용적인 팁 2-4문장 (영어)",
  "instagram": "@계정명 또는 null",
  "last_verified": "2026-XX",
  "source": "출처 URL (세미콜론으로 복수 구분)"
}
```

**카테고리별 추가 필드:**
- `k_experience`: `"experience_type": "댄스클래스 / 한복 / 찜질방 / 템플스테이 등"`
- `k_beauty`: `"services": ["퍼스널컬러", "체형진단" 등]`
- `k_shopping`: `"shop_type": "편집숍 / 팝업 / 시장 / 아울렛 등"`
- `local_icon`: `"scene": "(해당 시) 어떤 콘텐츠/맥락에서 유명해졌는지"`, `"verification_notes": "한국인들 사이에서 실제로 유명한 게 맞는지 근거"`

---

## 1. K-Experience (`k_experience`) — 목표 8-12개 추가

현재 4개뿐(서울 3 + 부산 1)이라 가장 시급하다. **서울에도 더 필요하고, 지역 확장도 필요.**

- **부산**: 찜질방/스파 외 체험 — 온천 체험(동래온천), 한복 체험, 자갈치시장 요리 체험 등
- **제주**: 해녀 체험(잠수 체험이 아니라 관광객 대상 해녀 문화 체험 프로그램), 감귤 따기 체험, 승마 체험
- **전주**: 한옥마을 한복 대여(경복궁 다음으로 유명), 전통주 만들기 체험, 한지 공예 체험
- **경주**: 전통 다도 체험, 신라 문화 체험 프로그램(경주엑스포 연계)
- **서울 추가**: K-pop 커버댄스 클래스(1MILLION 외 2-3곳 — 홍대/강남권), 한식 쿠킹 클래스(외국인 대상, 영어 진행), 도자기 공방 체험

**검색 키워드:** "K-pop dance class Seoul foreigner English 2026", "hanbok rental Jeonju hanok village", "haenyeo experience Jeju tourist program", "Korean cooking class Seoul English foreigners", "동래온천 체험 외국인"

---

## 2. K-Beauty (`k_beauty`) — 목표 6-10개 추가

현재 100% 서울(7개). **지역 확장이 핵심.**

- **부산**: 서면/센텀시티권 퍼스널컬러 진단샵, 올리브영 부산 플래그십(서면 or 남포동)
- **제주**: 제주공항 인근 또는 시내 K-beauty 편집숍(면세 연계)
- **대구**: 동성로 올리브영/화장품 편집숍
- **서울 추가(부족분)**: 아직 안 다룬 퍼스널컬러/체형진단샵 1-2곳, 다이소 뷰티 핫스팟(명동 외 홍대·강남)

**확인 필수:** 예약 방법(카카오채널/네이버예약), 외국인 예약 가능 여부, 영어 소통 여부, 가격, 세일 시즌 정보

**검색 키워드:** "personal color diagnosis Busan English", "Olive Young flagship Busan Seomyeon", "K-beauty shopping Jeju foreigner"

---

## 3. K-Shopping (`k_shopping`) — 목표 6-10개 추가

현재 100% 서울(8개). **지역 확장이 핵심.**

- **부산**: 서면 지하상가, 국제시장/부평깡통시장(전통시장), 센텀시티 신세계백화점(세계 최대 백화점 — 외국인 관광 포인트)
- **대구**: 서문시장(전통시장), 동성로 쇼핑거리
- **제주**: 제주 면세점, 동문시장
- **전주**: 남부시장 청년몰(전통시장 + 청년 창업 콘셉트 — 외국인에게 소개할 만한 스토리)

**확인 필수:** 운영시간, 외국인 카드 가능 여부, 면세 가능 여부, 전통시장의 경우 영어 안내 수준

**검색 키워드:** "Busan Shinsegae Centum City world's largest department store", "서문시장 대구 외국인", "전주 남부시장 청년몰"

---

## 4. Local Icons (`local_icon`) — 목표 6-10개 추가

기존 13개가 전부 대전·영월·충주뿐 — **서울·부산·제주·경주·전주·강릉·속초에는 단 하나도 없다.** 판단 기준은 기존 `domestic_icons_festivals_research_brief.md`와 동일: 드라마/K팝과 무관하게 **한국인들 사이에서 실제로 화제인 것** (전국구 맛집·명물, 바이럴 인물/지자체 콘텐츠, 국민 밈이 된 장소).

- **서울**: 전국구로 유명한 노포/명물 중 아직 안 다룬 곳 (예: 을지로 노가리골목, 종로 포장마차거리 등 — 실존·화제성 검증 후)
- **부산**: 부산 하면 떠오르는 전국구 명물 (씨앗호떡, 밀면 등 대표 브랜드 1-2곳 — 이미 관광지화된 곳 말고 "한국인이 실제로 알아주는" 곳 기준)
- **제주**: 제주 흑돼지 노포, 또는 제주 관련 바이럴 콘텐츠/인물이 소개한 실존 장소
- **경주**: 황남빵(경주 대표 전국구 명물 — 성심당급) 복수 지점
- **전주**: 이성당(군산이지만 인접 권역 참고) 또는 전주 대표 전국구 명물(전주비빔밥 노포 등 — 화제성 근거 필요)
- **강릉/속초**: 강릉 커피거리 관련 바이럴 카페, 속초 대표 전국구 명물(아바이순대 등)

**주의:** `domestic_icons_festivals_research_brief.md`와 동일하게, 근거 빈약하면 제외. `verification_notes`에 "왜 한국인들 사이에서 유명한지"(뉴스 기사, 반복 언급 빈도 등) 반드시 명시.

**검색 키워드:** "황남빵 경주 전국구", "부산 대표 전국구 맛집", "제주 흑돼지 노포 유명", site:news.naver.com 지역명+"화제"

---

## 결과물 포맷

JSON 배열로 제출. 예시:

```json
[
  {
    "id": "hwangnam-bread-gyeongju",
    "name_en": "Hwangnam Bread",
    "name_ko": "황남빵",
    "category": "local_icon",
    "area": "Gyeongju",
    "address": "경상북도 경주시 태종로 783",
    "lat": 35.8372,
    "lng": 129.2089,
    "english_available": false,
    "foreign_card": true,
    "reservation_required": false,
    "price_range": "₩10,000–₩20,000 (box)",
    "tip": "Gyeongju's answer to Daejeon's Sungsimdang — a red-bean-filled pastry every Korean associates with this city. The original store has run since 1939. Expect a line on weekends; buy a box to bring home as a souvenir, which is the local custom.",
    "scene": "N/A — traditional regional icon, not media-driven",
    "last_verified": "2026-07",
    "verification_notes": "경주 지역 명물로 전국적으로 인지도 높음 — 다수 언론·블로그에서 '경주=황남빵' 연상 반복 확인 필요",
    "source": "확인 후 기입"
  }
]
```

## 주의사항
- `lat`/`lng`는 구글맵에서 정확한 좌표 확인 필수
- `tip`은 반드시 영어로, 외국인 관점에서 실용적인 정보
- 폐업했거나 불확실한 곳은 제외
- 이미 `places.json`에 있는 곳과 중복되지 않는지 확인 (특히 서울 항목)
- id는 기존 74개와 겹치지 않는 고유 slug로 지을 것
- 각 항목 옆에 출처 URL을 메모로 남길 것 (코드엔 안 들어가지만 검증용)
