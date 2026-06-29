# K-Drama & K-Movie Filming Locations — Research Brief

## 목적
kkultongkorea.com `places.json`에 추가할 촬영지 데이터 수집.
외국인(영어권) 팬 여행자 기준. 실제로 방문 가능한 곳만.

## 출처 우선순위
1. 공식 한국관광공사 (english.visitkorea.or.kr) — 촬영지 공식 인증
2. 드라마/영화 제작사 공식 자료
3. 네이버 플레이스 + 구글맵 (실제 위치 좌표 확인)
4. 팬 커뮤니티 (Reddit r/KDRAMA, Namu wiki, 나무위키) — 비공식 촬영지 검증용
5. X(Twitter) — "#촬영지" "#filminglocations" 해시태그로 팬 목격담 확인

## 결과물 포맷

JSON 배열. 아래 형식 정확히 지킬 것:

```json
{
  "id": "고유 slug (영문 소문자, 하이픈)",
  "name_en": "장소 영문명",
  "name_ko": "장소 한국어명",
  "category": "drama_location",
  "dramas": ["작품명 (영문+한국어 병기)"],
  "area": "Seoul / Busan / Jeju / Gangneung 등",
  "address": "도로명 주소 (한국어)",
  "lat": 위도 (소수점 4자리),
  "lng": 경도 (소수점 4자리),
  "english_available": true / false / null,
  "foreign_card": true / false / null,
  "reservation_required": true / false,
  "price_range": "Free / ₩5,000 등",
  "tip": "외국인 팬을 위한 실용 팁 2-3문장 (영어). 어떤 장면인지 + 방문 팁 포함.",
  "scene": "어떤 장면의 배경인지 한 줄 (한국어 or 영어)",
  "last_verified": "2025-XX"
}
```

## 주의사항
- 폐업한 카페/식당 촬영지는 제외
- 접근 불가 사유지는 제외
- 좌표는 구글맵에서 직접 확인 필수
- 같은 장소가 여러 작품에 등장하면 `dramas` 배열에 모두 기재
- `tip`은 반드시 영어, 팬 관점에서 실용적으로

---

## 작품 1: 오징어게임 (Squid Game) 시즌 1+2

**글로벌 인지도**: 넷플릭스 역대 최다 시청 드라마. 외국인 성지 수요 매우 높음.

### 수집 대상 장소

**시즌 1 주요 촬영지:**
- 대포항 (속초) — 기훈이 낚시하던 항구
- 쌍문동 골목 (도봉구) — 기훈 집 인근 골목
- 수원 촬영 세트장 관련 공개 장소
- 인천 을왕리 해수욕장 — 관련 촬영지
- 국군체육부대 (성남) — 세트장 건설지 (접근 가능 여부 확인)

**시즌 2 추가 촬영지:**
- 시즌 2에서 새로 등장한 실제 로케이션 확인
- 기훈이 다시 등장하는 일상 배경 장소

**검색 키워드:**
- "Squid Game filming locations Seoul 2024 2025"
- "오징어게임 촬영지 시즌2"
- X: "#SquidGame #filminglocations #오징어게임촬영지"
- Reddit: r/squidgame filming locations thread

---

## 작품 2: 눈물의 여왕 (Queen of Tears)

**글로벌 인지도**: 2024 넷플릭스 한국 드라마 최고 시청률. 김수현+김지원 주연.

### 수집 대상 장소
- 홍성 촬영지 (퀸즈그룹 본사 세트 인근 실제 장소)
- 서울 주요 촬영지 (백현우 집, 회사 로비 등 실제 건물)
- 제주도 로케이션 (있는 경우)
- 마지막 회 결말 장면 배경

**검색 키워드:**
- "Queen of Tears filming locations 2024"
- "눈물의 여왕 촬영지"
- X: "#눈물의여왕 #QueenOfTears #촬영지"
- Reddit: r/KDRAMA "Queen of Tears filming location"

---

## 작품 3: 선재 업고 튀어 (Lovely Runner)

**글로벌 인지도**: 2024 tvN 드라마, 해외 팬덤 특히 강함. 변우석 글로벌 스타 등극.

### 수집 대상 장소
- 수원 화성 일대 (주요 배경)
- 드라마 속 고등학교 촬영지
- 선재(변우석) 콘서트 장면 배경
- 임솔(김혜윤) 집 주변 골목

**검색 키워드:**
- "Lovely Runner filming locations 2024"
- "선재업고튀어 촬영지 수원"
- X: "#선재업고튀어 #LovelyRunner #변우석 촬영지"
- 나무위키: "선재 업고 튀어 촬영지"

---

## 작품 4: 도깨비 (Goblin)

**글로벌 인지도**: 2016년 방영이지만 성지 순례 수요 2025년에도 압도적. 캐나다/퀘벡 장면 제외, 한국 국내 촬영지만.

### 수집 대상 장소
- 주문진 방파제 (빨간 등대) — 도깨비 소환 장면, 성지 중 성지
- 강릉 경포대
- 인천 개항장 거리 (중구) — 공유+이동욱 걷던 거리
- 서울 삼청동 골목
- 전주 한옥마을 — 은탁 장면
- 제주도 관련 장소 (있는 경우)

**검색 키워드:**
- "Goblin Korean drama filming locations"
- "도깨비 촬영지 강릉 주문진"
- X: "#도깨비 #Goblin #공유 촬영지"

---

## 작품 5: 이상한 변호사 우영우 (Extraordinary Attorney Woo)

**글로벌 인지도**: 2022 ENA/넷플릭스. 글로벌 팬덤 강함, 특히 동남아+북미.

### 수집 대상 장소
- 수원 팽나무 마을 (소덕동 팽나무 — 드라마 핵심 장소)
- 우영우 사무실 건물 (실제 촬영 빌딩)
- 우영우 집 주변 동네
- 김밥 가게 촬영지

**검색 키워드:**
- "Extraordinary Attorney Woo filming locations"
- "이상한변호사우영우 촬영지 수원"
- X: "#우영우 #ExtaordinaryAttorneyWoo filming location"
- Reddit: r/KDRAMA woo young woo filming locations

---

## 작품 6: K팝 데몬헌터스 (K-Pop Demon Hunters)

**글로벌 인지도**: 2025 넷플릭스 애니메이션 영화. 개봉 후 K팝 팬층 + 애니팬층 동시 흡수. 실제 서울 랜드마크 배경으로 사용.

### 수집 대상 장소
- 영화에 등장하는 실제 서울 랜드마크 (한강, 남산, 63빌딩 등)
- 영화 속 아이돌 그룹 "KATHARSIS" 활동 배경으로 등장하는 실제 장소
- 넷플릭스 공식 프로모션에서 공개된 촬영/배경 장소

**검색 키워드:**
- "K-Pop Demon Hunters Netflix filming locations 2025"
- "K-Pop Demon Hunters Seoul landmarks"
- X: "#KPopDemonHunters filming locations"
- 넷플릭스 공식 유튜브/인스타그램 프로모 영상

**주의**: 애니메이션이므로 실제 촬영지 개념이 다름. "영화 배경에 등장한 실제 서울 장소" 위주로 수집.

---

## 최종 목표
- 작품당 3–6개 장소
- 총 20–30개 장소
- 외국인이 실제로 찾아갈 수 있는 곳만
- 폐업/접근불가 제외
