---
name: kkultong-korea-data-pipeline
description: kkultong-web 리포의 Korea 탭(장소·루트·축제 데이터)을 다루는 모든 작업에 쓸 것. "Korea 탭에 장소 추가해줘", "새 명소/축제 리서치해줘", "places.json/routes.json/festivals.json에 병합해줘", "카테고리 추가해줘" 같은 요청은 물론, places.json·routes.json·festivals.json이나 lib/types.ts·scripts/validate-data.mjs를 조금이라도 건드리는 작업이면 항상 먼저 이 스킬을 확인할 것. 데이터 리서치 브리프 작성부터 검증·병합·빌드 확인까지의 전체 파이프라인과, 이 리포에서 실제로 배포 사고가 났던 안전 규칙(app/korea 격리 상태, Node 버전 이슈, 자동 배포 파이프라인)을 담고 있음.
---

# Kkultong Korea 탭 — 데이터 파이프라인 & 배포 안전

이 스킬은 두 부분으로 나뉜다. **1부(안전 규칙)는 매번 먼저 확인**하고, **2부(데이터 파이프라인)는 실제로 새 장소/루트/축제 데이터를 다룰 때** 따른다. 이 순서를 지키는 이유는, 이 리포에서 데이터 작업 자체보다 "몰랐던 배포 제약을 건드려서" 실제 사고가 난 적이 있기 때문이다.

## 1부 — 세션 시작 시 항상 먼저 확인할 것

### A. app/korea는 애드센스 승인 전까지 배포 금지 상태다

`app/korea`(여행 가이드: tips, places, routes, scholarships 등)는 애드센스 심사가 끝날 때까지 절대 배포하면 안 된다. 실제로는 `_offline/korea/`에 격리돼 있다(`.gitignore`에 `/_offline/` 등록, GitHub에 안 올라감).

- 작업 시작 전에 `_offline/korea/` 디렉토리가 있는지, `CLAUDE.md`의 "app/korea" 섹션에 뭐라고 적혀있는지 확인한다.
- `app/korea`가 실제 `app/` 트리에 나타나 있으면(누군가 복원했거나 다른 세션이 만들었을 수 있음) 절대 임의로 판단하지 말고, 배포해도 되는지(=애드센스 승인이 났는지) 반드시 먼저 물어본다.
- **데이터 파일(`data/places.json`, `data/routes.json`, `data/festivals.json` 등) 수정 자체는 안전하다** — 이건 라이브 사이트와 무관한 정적 데이터라 애드센스 상태와 상관없이 자유롭게 고쳐도 된다. 위험한 건 `app/korea` 아래 라우트/페이지를 만들거나 되살리는 것뿐이다.

### B. 이 리포엔 정체불명의 자동 커밋+배포 파이프라인이 있다

`git log`를 보면 "auto: web update HH:MM" 형태의 커밋이 몇 분~몇십 분 간격으로 계속 쌓인다. 뭐가 이걸 하는지는 모르지만, Cloudflare Pages가 `main` 브랜치 push마다 자동 배포하므로 **"직접 git push를 안 했다" ≠ "배포가 안 됐다"** 다. 파일을 저장하는 것만으로 몇 분 안에 실제 배포까지 갈 수 있다고 가정하고 작업할 것.

- 작업 전에 `git branch`로 지금 `work` 브랜치에 있는지 확인한다. `main`에 있으면 `git checkout work`로 옮긴다 (Cloudflare Pages의 Production branch는 `main`으로 고정돼 있어서, `work`에 뭐가 쌓여도 실제 라이브 사이트는 안 건드림).
- `work` 브랜치가 없다면 `git checkout -b work && git push -u origin work`로 새로 만든다.

### C. `.mjs` 빌드 스크립트는 `.ts`/`.tsx` 파일을 절대 직접 import하지 않는다

`scripts/generate-sitemap.mjs`, `scripts/validate-data.mjs` 같은 스크립트는 Next.js 컴파일 파이프라인 밖에서 plain Node로 실행된다. 로컬 Node(24)는 `.ts` 파일을 네이티브로 import할 수 있어서 로컬 `npm run build`는 성공하지만, Cloudflare Pages의 빌드 환경(Node 22)은 이걸 지원하지 않아서 **조용히 실패**한다. 실제로 이 때문에 사이트 전체 배포가 18시간 막힌 적이 있다.

이 리포는 이미 이 문제를 구조적으로 해결해뒀다 — 새로 작업할 때도 같은 패턴을 유지할 것:
- 데이터는 `.ts` 대신 `.json`으로 둔다 (예: `data/tips.json`). `.ts` 파일이 필요하면 `import data from "./x.json"` 형태로 JSON을 감싸는 얇은 wrapper만 만들고, 실제 데이터는 JSON에 둔다.
- 공유 로직(함수·상수)은 `.mjs`(순수 JS)로 만든다 (예: `lib/category-slugs.mjs`, `lib/map-constants.mjs`). `.ts` 파일은 이 `.mjs`를 import해서 타입만 얹어 재export한다.
- `scripts/*.mjs`는 `data/*.json`을 `{ with: { type: "json" } }` import assertion으로, `lib/*.mjs`를 직접 import한다. `lib/*.ts`나 `data/*.ts`를 import하는 코드를 새로 추가하면 안 된다.
- 새 `.mjs` 스크립트를 추가하거나 기존 걸 고쳤으면, 로컬 빌드 성공만 보고 끝내지 말고 "이 스크립트가 어떤 파일을 import하는지" 한 번 더 확인한다.

---

## 2부 — 새 장소/루트/축제 데이터 추가하기

### 흐름 요약
리서치 브리프 작성 → (사용자가 외부 리서치 AI 돌림) → GitHub에서 결과 fetch → 독립 검증 → 데이터 병합 → `validate-data.mjs` → 빌드+브라우저 확인

### 1. 리서치 브리프 작성

새 장소/루트/축제가 필요하면 `data/research/`에 마크다운 브리프를 쓴다. 사용자가 이걸 그대로 복사해서 외부 리서치 AI(주로 DeepSeek)에 돌린다. 브리프엔 반드시 포함할 것:

- **목적과 판단 기준** — 뭘 채택하고 뭘 제외할지 (예: "실제로 방문 가능한 곳만", "몇 달 이상 화제성이 유지된 것만")
- **출처 우선순위** — 공식 관광 정보 > 뉴스 > 팬/여행 블로그 순
- **결과물 JSON 스키마** — 기존 `places.json`/`routes.json`/`festivals.json`의 필드 구조를 그대로 예시로 보여줄 것 (카테고리별로 필드가 다르면 각각 별도 템플릿으로)
- **시드 예시 + 발굴 지시** — 구체적인 예시 몇 개를 주고, "이런 종류로 5-10개 더 스스로 찾아라"고 지시하면 훨씬 풍부한 결과가 나온다. 예시만 조사해오라고 하면 딱 그만큼만 옴.
- **불확실한 사실은 검증 지시** — 제목·이름·존재 여부가 확신 안 서면(예: 축제명, 작품명), "리서치 시작 전에 먼저 검증하고, 틀렸으면 바로잡아서 진행"하라고 명시한다.
- **축제류처럼 날짜가 매년 바뀌는 데이터는 월 단위만 요청한다** ("정확한 날짜 대신 개최 월만, 나중에 공지 뜨면 업데이트"). 안 그러면 리서치 AI가 description 텍스트 안에 그 해의 구체적 날짜를 박아넣어서, 몇 달만 지나도 이미 지난 행사를 "다가오는 행사"처럼 보여주는 오래된 정보가 된다.

### 2. 결과물 수신

사용자가 GitHub 프라이빗 리서치 레포(예: `illoshy315-spec/kkultongkorea`)에 결과 JSON을 올리면, GitHub API로 fetch한다. 토큰은 세션 안에서 이미 받은 게 있으면 재사용하고, 없으면 요청한다.

PowerShell에서 base64 디코딩할 때 개행문자 처리에 주의: `Invoke-RestMethod`로 받은 content를 `-replace "\s", ""`로 공백/개행을 다 제거한 뒤 `[Convert]::FromBase64String()`에 넘긴다. 파일 인코딩(특히 한글)이 깨지지 않았는지 디코딩 후 반드시 `Read` 도구로 직접 열어서 확인할 것.

### 3. 독립 검증 — 받은 데이터를 그대로 믿지 않는다

리서치 AI의 결과도, 자기 자신의 사전 지식도 틀릴 수 있다는 걸 전제로 움직인다. 최소 2-3개 핵심 주장은 `WebFetch`로 원본 소스(Wikipedia, 뉴스 기사 등)를 직접 열어서 재확인한다. 특히:

- 확신이 안 서는 고유명사·작품 제목·행사명은 반드시 검증
- "1위/최초/역대 최다" 같은 구체적이고 확인하기 쉬운 통계 주장은 검증 가치가 높음
- 검증하다가 발견한 불일치(잘못된 카테고리, 애매한 주소, 실제 촬영지와 배경지가 다른 경우 등)는 병합 전에 고치고, 사용자에게도 뭘 왜 고쳤는지 보고한다

WebFetch가 특정 사이트(나무위키, 일부 뉴스사)를 403으로 막으면, 같은 사실을 다루는 다른 출처(공식 사이트, 다른 언론사)로 재시도한다.

### 4. 데이터 병합

`places.json`/`routes.json`/`festivals.json`에 병합할 때는 **수동으로 텍스트를 이어붙이지 말고, Node 스크립트로 프로그래밍 방식으로 병합**한다:

```
node -e "
const fs = require('fs');
const existing = require('./data/places.json');
const newItems = require('<받은 파일 경로>');
const existingIds = new Set(existing.map(p => p.id));
const dupes = newItems.filter(p => existingIds.has(p.id));
if (dupes.length > 0) { console.log('DUPLICATE:', dupes.map(p => p.id)); process.exit(1); }
const merged = [...existing, ...newItems];
fs.writeFileSync('./data/places.json', JSON.stringify(merged, null, 2) + '\n', 'utf8');
console.log('Merged. Total:', merged.length);
"
```

이 방식이 중요한 이유: 수작업 텍스트 편집은 한글 인코딩이 깨지거나(특히 PowerShell을 거치면) JSON 문법 실수가 나기 쉽다. `JSON.parse`/`JSON.stringify`를 거치면 이런 문제가 원천적으로 안 생긴다.

새 카테고리를 추가하는 경우(예: 기존 6개 카테고리에 없는 새로운 종류) 다음도 같이 등록해야 한다:
- `lib/types.ts`의 `CATEGORY_SLUGS`(→ 실제로는 `lib/category-slugs.mjs`에 추가)와 `CATEGORY_META`
- `components/KoreaMap.tsx`의 `CATEGORY_COLORS`/`CATEGORY_LABELS`에 핀 색상
- `components/CategoryPageClient.tsx`의 `getGroupKey()`에 그 카테고리의 자연스러운 그룹핑 기준 (주의: 그룹 수가 항목 수와 같아지면 자동으로 flat 리스트로 폴백되는 로직이 이미 있음 — 그룹 기준을 고를 때 실제로 여러 항목을 묶어주는 필드인지 먼저 데이터로 확인할 것. 예를 들어 `cuisine`처럼 항목마다 다 다른 값이면 그룹핑 의미가 없다)

### 5. 검증 스크립트 실행

```
node scripts/validate-data.mjs
```

(또는 `npm run validate-data`) — 중복 ID, route의 `place_ids`가 실제 `places.json`에 존재하는지, 좌표가 한국 영역 안인지, 카테고리가 등록된 값인지, festivals의 월(1-12) 범위와 특정 연도 언급 여부까지 검사한다. 실패하면 구체적으로 뭐가 문제인지 알려주니, 그대로 고치고 재실행한다.

새 데이터 파일 타입을 추가했다면(예: festivals.json 신설) 이 스크립트에도 검증 로직을 같이 추가한다 — 중복 ID 체크 정도는 최소한으로 넣을 것.

### 6. 빌드 + 브라우저 확인

```
npm run build
```

로 정적 생성이 되는지 확인한 뒤, `preview_start`로 실제 브라우저에서 새 데이터가 맞게 나오는지 확인한다: 지도에 핀이 찍히는지, 카테고리 필터로 걸러지는지, 상세 페이지가 정상 렌더링되는지. 지도 관련 기능을 고쳤다면 특히 실제 좌표로 핀이 정확한 위치에 찍히는지까지 확인할 것 — 코드가 "그럴듯해 보여도" 실제로 지도가 엉뚱한 도시를 중심으로 열리는 등의 버그는 브라우저로 직접 봐야만 잡힌다.
