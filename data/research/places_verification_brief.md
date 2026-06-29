# Places Verification Brief

## 목적
아래 장소 데이터의 정확성 검증. 잘못된 항목은 수정하거나 제외.

## 검증 기준
1. 주소 + 좌표(lat/lng)가 실제 장소와 일치하는지 구글맵에서 확인
2. 장소가 현재 운영 중인지 (폐업 여부)
3. 촬영지/성지 정보가 팬 커뮤니티 or 공식 자료로 뒷받침되는지
4. 의심 항목은 별도 표시

## 검증 결과 포맷
아래 각 항목마다:
- ✅ 확인됨 (수정 없음)
- ⚠️ 수정 필요 (무엇을 수정했는지 명시)
- ❌ 제외 (이유 명시)

---

## 검증 요청 항목

### 1. hanmi-bookstore-goblin
```json
{
  "id": "hanmi-bookstore-goblin",
  "name_en": "Hanmi Bookstore (Goblin Alley)",
  "name_ko": "한미서점 (도깨비 골목)",
  "area": "Seoul",
  "address": "서울특별시 인천 중구 신포로 23번길 10",
  "lat": 37.472,
  "lng": 126.628
}
```
**의심 이유**: 주소에 "서울특별시 인천 중구"라고 되어 있음 — 서울과 인천이 동시에 표기되어 있어 명백히 잘못된 주소. 실제 도깨비 촬영지 중 인천 개항장 골목(신포로)이 있는지 확인 필요. area도 "Seoul"이 아니라 "Incheon"이어야 할 수 있음.

**확인 요청**:
- 실제 주소와 좌표 수정
- area를 "Incheon"으로 변경 필요 여부
- 도깨비 촬영지가 맞는지 출처 확인

---

### 2. bangnamu-village-woo
```json
{
  "id": "bangnamu-village-woo",
  "name_en": "Pangnamu (Hackberry) Village — Attorney Woo",
  "name_ko": "소덕동 팽나무 마을 (우영우)",
  "area": "Suwon",
  "address": "경기도 수원시 팔달구 신풍로 23번길 61",
  "lat": 37.284,
  "lng": 127.0125
}
```
**의심 이유**: 같은 데이터에 있는 hwaseomun-suwon-lovely-runner (화서문, 선재 업고 튀어)의 주소가 "경기도 수원시 팔달구 신풍로 23번길 61"로 완전히 동일함. 우영우 팽나무 마을이 화서문과 같은 주소일 수 없음.

**확인 요청**:
- 우영우 팽나무(소덕동 팽나무) 실제 촬영지 주소와 좌표 확인
- 실제 촬영 장소가 수원이 맞는지, 아니면 다른 지역인지 확인
- 출처 URL 포함

---

### 3. naksan-park-kpop-demon-hunters
```json
{
  "id": "naksan-park-kpop-demon-hunters",
  "name_en": "Naksan Park (K-Pop Demon Hunters)",
  "name_ko": "낙산공원 (K팝 데몬헌터스)",
  "source": "koreatlas.com/k-pop-demon-hunters-naksan-park-filming-spot"
}
```
**의심 이유**: source가 koreatlas.com 단일 출처. K팝 데몬헌터스(넷플릭스 애니메이션)에 낙산공원이 실제로 등장하는지 확인 필요. 애니메이션이라 실제 촬영지 개념이 다를 수 있음.

**확인 요청**:
- 넷플릭스 K팝 데몬헌터스에 낙산공원이 실제로 등장하는지 확인
- X(Twitter) or Reddit에서 팬들의 장면 확인 언급 있는지
- 확인 안 되면 제외

---

### 4. ssangmun-dong-squid-game
```json
{
  "id": "ssangmun-dong-squid-game",
  "name_en": "Ssangmun-dong Alley (Gi-hun's Neighborhood)",
  "address": "서울특별시 도봉구 쌍문동",
  "lat": 37.648,
  "lng": 127.027
}
```
**확인 요청**:
- 쌍문동이 실제 기훈 동네 촬영지가 맞는지 (vs 세트장 촬영)
- 특정 골목/계단이 있는지, 아니면 쌍문동 전체 배경인지
- 방문할 수 있는 구체적인 포인트가 있는지

---

### 5. daepo-port-squid-game
```json
{
  "id": "daepo-port-squid-game",
  "name_en": "Daepo Port (Squid Game Fishing Scene)",
  "area": "Sokcho",
  "address": "강원도 속초시 대포동",
  "lat": 38.179,
  "lng": 128.605
}
```
**확인 요청**:
- 대포항(속초)이 실제 오징어게임 촬영지가 맞는지
- 시즌 몇, 몇 화 장면인지
- 실제로 팬들이 방문하는지 (X/Reddit 확인)

---

### 6. korean-stone-art-museum-qot
```json
{
  "id": "korean-stone-art-museum-qot",
  "name_en": "Korean Stone Art Museum (Queens Family House)",
  "name_ko": "한국석예술박물관 (퀸즈가 저택)",
  "address": "서울특별시 성북구 대사관로 13길 66",
  "lat": 37.603,
  "lng": 126.993
}
```
**확인 요청**:
- 한국석예술박물관이 눈물의 여왕 퀸즈가 저택 촬영지가 맞는지
- 현재 입장 가능한지 (₩5,000 입장료 맞는지)
- 구글맵 좌표 확인

---

### 7. goyang-stadium-twice
```json
{
  "id": "goyang-stadium-twice",
  "name_en": "Goyang Stadium (TWICE Cheer Up MV)",
  "address": "경기도 고양시 일산서구 중앙로 1601",
  "lat": 37.67,
  "lng": 126.75
}
```
**확인 요청**:
- 고양종합운동장이 TWICE CHEER UP MV 촬영지가 맞는지
- 외부 방문 가능한지
- source (recree.io) 신뢰도 확인

---

## 이미 신뢰도 높은 항목 (재검증 불필요)
아래는 잘 알려진 장소로 별도 검증 없이 그대로 사용:
- jumunjin-breakwater-goblin (주문진 방파제 도깨비)
- hyangho-beach-bts-bus-stop (BTS 봄날 버스정류장)
- hybe-building-yongsan (HYBE 본사)
- yg-building-hapjeong (YG 본사)
- sm-kwangya-seongsu (SM 광야)
- jyp-building-seoul (JYP 본사)
- yongma-land-twice (용마랜드)
- hikr-ground-seoul (HiKR Ground)
- k-star-road-gangnam (K-Star Road)
- hyundai-seoul-queen-of-tears (더현대 서울)
- hwaseomun-suwon-lovely-runner (화서문)
- namsan-tower-kpop-demon-hunters (N서울타워)

## 결과물
검증 완료된 항목만 JSON으로 제출. 수정이 있으면 수정된 버전으로.
