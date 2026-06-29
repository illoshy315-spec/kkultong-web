# K-Pop Pilgrimage — Research Brief

## 목적
kkultongkorea.com `places.json`에 추가할 K팝 성지 데이터 수집.
외국인 팬 여행자 기준. 팬들이 실제로 찾아가는 곳 위주.

## 핵심 원칙
**공식 정보보다 팬 커뮤니티 정보 우선.**
K팝 성지는 공식 사이트에 없는 경우가 대부분.
X(트위터) 팬 목격담, 팬 카페, 나무위키가 1차 소스.

## 출처 우선순위
1. **X(Twitter/트위터)** — 팬 목격담, 성지 인증샷, "#성지순례" 해시태그 (★★★ 최우선)
2. **나무위키** — 아티스트 항목 내 "활동 장소" "연고지" 섹션
3. **팬 카페 / 팬 사이트** — 아이돌 팬덤 공식 카페 (다음/네이버)
4. **Reddit** — r/kpop, r/bangtan, r/BLACKPINK 등 아티스트별 서브레딧
5. **구글맵** — 좌표 확인 + 실제 방문 리뷰 확인
6. **공식 소속사 사이트** — 공식 굿즈샵, 팝업 정보만

## X(Twitter) 서치 방법
각 아티스트마다 아래 키워드로 서치:
- `[아티스트명] 성지순례`
- `[아티스트명] 촬영지`
- `[아티스트명] 자주가는곳`
- `[아티스트명] 연고지`
- `[artist name] pilgrimage Seoul`
- `[artist name] spotted location`
- `[artist name] MV filming location`

최근 6개월~1년 트윗 우선. 좋아요/리트윗 많은 것 신뢰도 높음.

## 결과물 포맷

```json
{
  "id": "고유 slug (영문 소문자, 하이픈)",
  "name_en": "장소 영문명",
  "name_ko": "장소 한국어명",
  "category": "kpop_pilgrimage",
  "artists": ["BTS", "BLACKPINK"],
  "area": "Seoul / Busan / 기타",
  "address": "도로명 주소",
  "lat": 위도,
  "lng": 경도,
  "english_available": true / false / null,
  "foreign_card": true / false / null,
  "reservation_required": true / false,
  "price_range": "Free / ₩15,000 등",
  "tip": "팬 여행자를 위한 실용 팁 2-3문장 (영어). 왜 성지인지 + 방문 팁.",
  "pilgrimage_type": "mv_location / agency / fansite / popup / merch / member_spot",
  "instagram": "@계정 또는 null",
  "last_verified": "2025-XX",
  "source_note": "출처 메모 (X 링크, 나무위키 등)"
}
```

`pilgrimage_type` 값:
- `mv_location`: MV/앨범 촬영지
- `agency`: 소속사 건물/공식 공간
- `popup`: 팝업스토어 (상설 운영 공간만 — 임시 팝업 제외)
- `merch`: 공식 굿즈샵
- `member_spot`: 멤버 연고지 / 자주 목격되는 곳
- `fansite`: 팬들이 만든 성지 (카페, 포토스팟 등)

---

## 아티스트 1: BTS

**팬덤**: ARMY. 글로벌 최대 팬덤. 성지 수요 압도적.

### 수집 대상
**소속사/공식 공간:**
- HYBE 본사 (용산) + HYBE INSIGHT 뮤지엄
- Weverse Square (위버스 광장)

**MV/앨범 촬영지:**
- "Spring Day" MV 촬영지 — 태백 삼수령 (피재) 기차역
- "I Need U" / "Run" MV 촬영지
- "Boy With Luv" MV 촬영지
- Butter / Dynamite 관련 장소

**멤버 연고지:**
- 지민 부산 연고지 (광안리, 부산 남구)
- 정국 부산 연고지
- RM 일산 관련 장소
- 뷔 대구 연고지

**X 서치 키워드:**
- `BTS 성지순례 서울`
- `BTS ARMY pilgrimage Seoul 2025`
- `방탄소년단 촬영지`
- `BTS spotted location Seoul`

---

## 아티스트 2: BLACKPINK

**팬덤**: BLINK. 글로벌 최대 걸그룹 팬덤.

### 수집 대상
**소속사/공식 공간:**
- YG 엔터테인먼트 본사 (마포구 합정)
- YG 공식 스토어

**MV/앨범 촬영지:**
- "Pink Venom" MV 촬영지
- "Shut Down" MV 촬영지
- "How You Like That" 관련 장소
- "LALISA" 솔로 MV 촬영지 (리사)

**멤버 연고지:**
- 지수 서울 연고지
- 제니 뉴질랜드 아님, 서울 관련 장소
- 리사 — 한국 내 자주 목격 장소
- 로제 — 서울 자주 방문 카페/장소

**X 서치 키워드:**
- `BLACKPINK 성지순례`
- `BLACKPINK filming location MV`
- `Jennie spotted Seoul cafe`
- `Lisa spotted location Seoul`

---

## 아티스트 3: aespa

**팬덤**: MY. SM엔터. 4세대 대표 그룹. 메타버스/세계관 콘셉트.

### 수집 대상
**소속사/공식 공간:**
- SM 엔터테인먼트 KWANGYA @ 서울 (성수)
- SM 공식 굿즈샵

**MV/앨범 촬영지:**
- "Supernova" MV 촬영지
- "Black Mamba" MV 촬영지
- "Girls" MV 관련 장소

**X 서치 키워드:**
- `aespa 성지순례`
- `aespa MV filming location`
- `KWANGYA Seoul aespa`
- `에스파 촬영지`

---

## 아티스트 4: SEVENTEEN

**팬덤**: CARAT. 플레디스/HYBE. 13인조. 글로벌 팬덤 매우 강함.

### 수집 대상
**소속사/공식 공간:**
- 플레디스 연습실 (구 건물 알려진 경우)
- HYBE 연계 공간

**MV/앨범 촬영지:**
- "MAESTRO" MV 촬영지
- "손오공" MV 촬영지
- 최근 앨범 MV 촬영지

**멤버 연고지:**
- 우지(지홍) 부산 연고지
- 호시 일본 출신이지만 한국 내 연고지
- 기타 멤버 연고지 (팬들이 많이 아는 곳)

**X 서치 키워드:**
- `SEVENTEEN 성지순례`
- `세븐틴 촬영지`
- `SEVENTEEN CARAT pilgrimage Seoul`
- `Woozi Busan 성지`

---

## 아티스트 5: NewJeans

**팬덤**: Bunny. ADOR/HYBE. 4세대 최단기 글로벌 팬덤 형성.

### 수집 대상
**MV/앨범 촬영지:**
- "Hype Boy" MV 촬영지
- "OMG" MV 촬영지
- "Super Shy" MV 촬영지
- "ETA" MV 촬영지 (부산 관련 여부 확인)

**팝업/공식 공간:**
- 버블검 팝업 관련 상설 공간 (있는 경우)

**X 서치 키워드:**
- `NewJeans 성지순례`
- `뉴진스 촬영지`
- `NewJeans MV filming location`
- `NewJeans Bunny pilgrimage Seoul`

---

## 아티스트 6: LE SSERAFIM

**팬덤**: FEARNOT. SOURCE MUSIC/HYBE.

### 수집 대상
**MV/앨범 촬영지:**
- "UNFORGIVEN" MV 촬영지
- "EASY" MV 촬영지
- "ANTIFRAGILE" 관련 장소

**X 서치 키워드:**
- `LE SSERAFIM 성지순례`
- `르세라핌 촬영지`
- `LE SSERAFIM MV filming location Seoul`

---

## 아티스트 7: IVE

**팬덤**: DIVE. 스타쉽 엔터.

### 수집 대상
**MV/앨범 촬영지:**
- "I AM" MV 촬영지
- "ELEVEN" MV 촬영지
- "Baddie" MV 촬영지

**X 서치 키워드:**
- `IVE 성지순례`
- `아이브 촬영지`
- `IVE MV filming location`

---

## 아티스트 8: Stray Kids

**팬덤**: STAY. JYP 엔터.

### 수집 대상
**소속사/공식 공간:**
- JYP 엔터테인먼트 본사 (강동구)

**MV/앨범 촬영지:**
- "MIROH" MV 촬영지
- "God's Menu" 관련 장소
- "案 (Hellevator)" MV 촬영지

**X 서치 키워드:**
- `Stray Kids 성지순례`
- `스트레이키즈 촬영지`
- `Stray Kids STAY pilgrimage Seoul`
- `JYP building Stray Kids`

---

## 아티스트 9: TWICE

**팬덤**: ONCE. JYP 엔터. 3세대 대표 걸그룹. 글로벌 팬덤 여전히 강함.

### 수집 대상
**소속사/공식 공간:**
- JYP 엔터테인먼트 본사

**MV/앨범 촬영지:**
- "CHEER UP" MV 촬영지
- "TT" MV 촬영지
- "Feel Special" 관련 장소
- 최근 앨범 촬영지

**멤버 연고지:**
- 나연, 정연, 모모 등 주요 멤버 국내 연고지
- 사나, 미나, 미쯔이 일본 출신이지만 한국 내 자주 목격 장소

**X 서치 키워드:**
- `TWICE 성지순례`
- `트와이스 촬영지`
- `TWICE ONCE pilgrimage Seoul`
- `Twice member spotted Seoul`

---

## 공통 수집 대상 (아티스트 무관)

### 공식 K팝 성지 공간
- **HiKR Ground** (서울 중구) — 한국관광공사 운영 K팝 체험관
- **K-Star Road** (강남) — 강남돌 조형물 거리
- **SM KWANGYA @ Seoul** (성수)
- **HYBE INSIGHT** (용산)

### K팝 굿즈 거리
- **홍대 K팝 굿즈 거리** — 무브먼트, 유니플렉스 등
- **명동 K팝 굿즈샵** 밀집 지역

---

## 최종 목표
- 아티스트당 2–5개 장소
- 공통 공간 5–8개
- 총 25–40개 장소
- X 팬 목격담 기반 정보는 `source_note`에 출처 명시
- 임시 팝업은 제외, 상설 운영 공간만
