@AGENTS.md

# Kkultong-web — Claude 필수 컨텍스트

## 프로젝트 개요
Kkultong 한국어 학습지 웹사이트. Next.js (App Router) + Cloudflare Pages.
**kkultongkorea.com** → Cloudflare Pages (kkultong-web.pages.dev) 자동 배포.

## 핵심 파일
```
kkultong-web/
├── content/worksheets/        # 학습지 마크다운 (day1_en.md ~ dayN_en.md, supplement_*.md)
├── app/
│   ├── worksheet/page.tsx     # 목록 페이지 — available: true 설정 필요
│   └── worksheet/[day]/       # 동적 라우트
├── public/
│   ├── sitemap.xml            # scripts/generate-sitemap.mjs 로 자동 생성
│   ├── robots.txt
│   └── _headers               # 보안 헤더
└── scripts/generate-sitemap.mjs
```

## 파일 명명 규칙
- 워크시트: `content/worksheets/day{N}_en.md`
- 보충자료: `content/worksheets/supplement_{topic}_en.md`
- 슬러그: frontmatter의 `slug:` 필드 = URL 경로

## 새 워크시트 배포 체크리스트
```
[ ] content/worksheets/에 파일 추가
[ ] app/worksheet/page.tsx → available: true, 제목/설명 추가
[ ] 이전 day_en.md에 "다음 단원" 링크 추가
[ ] sitemap 재생성 확인 (빌드 시 자동)
[ ] canonical URL 확인 (kkultongkorea.com/worksheet/{slug})
[ ] git push → Cloudflare 자동 배포
```

## SEO 주의사항
배포 전 반드시 확인:
- canonical 태그 (`/app/worksheet/[day]/page.tsx` 메타데이터)
- sitemap.xml 슬러그 포함 여부
- robots.txt 이상 없음

## 개발 서버
```
cd C:\Users\user\kkultong-web
npm run dev
```

## 삭제 금지 파일
`content/worksheets/day*_en.md` 전체 — 배포된 학습지 원고. 절대 삭제 금지.

## 빌드 필수 규칙 (output: export)

이 프로젝트는 `next.config.ts`에서 `output: "export"`를 쓴다. 아래 두 가지를 안 지키면 빌드가 조용히 실패한다.

- `useSearchParams()`를 쓰는 컴포넌트는 반드시 `<Suspense>`로 감쌀 것. 안 그러면 `/_not-found` 등 무관해 보이는 페이지에서 prerender 에러가 나서 원인 파악이 어렵다.
- 동적 라우트(`[param]`)는 반드시 `generateStaticParams()`를 export할 것. 없으면 "missing generateStaticParams()" 에러로 전체 빌드가 죽는다.

**전례 — Day 16 배포**: `/korea/tips`의 `useSearchParams()`가 Suspense 없이 쓰여 있어서 Day 16과 무관한 이 페이지 때문에 전체 배포가 막혔다. 로컬 `npm run build`로 먼저 확인하는 습관이 필요.

## Cloudflare Pages 환경변수 (수동 관리)

`NEXT_PUBLIC_*` 환경변수는 Cloudflare 대시보드 → Settings → Variables and secrets에 수동으로 등록돼 있다. 코드/`.env.local`과 별개이며, 로컬 `.env.local`을 바꿔도 배포판에는 반영 안 된다.

**환경변수를 새로 등록하거나 값을 바꿔도 자동으로 재빌드되지 않는다.** 새 커밋이 push될 때만 빌드가 트리거되므로, 환경변수만 바꾼 경우 `git commit --allow-empty`로 빈 커밋을 만들어 강제로 재빌드를 트리거해야 한다.

현재 등록된 변수: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (값은 로컬 `.env.local` 참고).

## app/korea — 애드센스 승인 전까지 비공개 (반복 충돌 주의)

`app/korea`(여행 가이드 섹션: tips, transport, address, scholarships, drama/kpop/beauty places, routes 등)는 **애드센스 승인 전까지 배포 금지**. 실수로 배포되면 심사에 불이익 가능성 있다는 사용자 판단.

- 현재 위치: `_offline/korea/` (`.gitignore`에 `/_offline/` 등록돼 있어 GitHub에 올라가지 않음)
- **이 세션 밖에서(다른 세션·사용자 직접 작업 등) `app/korea`가 계속 재생성·확장되는 일이 반복됨.** `git log -- app/korea`로 최근 활동 있는지 먼저 확인할 것.
- `app/korea`가 다시 나타나 있으면: 배포해도 되는지 반드시 먼저 물어볼 것 — 절대 임의로 판단하지 말 것. "숨겨야 함"이 답이면 `_offline/korea`의 기존 내용을 지우고 최신 `app/korea`로 교체.
- `scripts/generate-sitemap.mjs`는 현재 `/korea/*` 관련 URL을 생성하지 않음(app/korea 오프라인 상태와 일치). `app/korea`를 되살릴 때 사이트맵 로직도 함께 복원해야 함.
- `package.json`의 `build` 스크립트에서 `scripts/validate-data.mjs`(korea 데이터 무결성 검증)를 제거해둔 상태. `app/korea` 복원 시 `"build": "node scripts/validate-data.mjs && node scripts/generate-sitemap.mjs && next build"`로 되돌릴 것. (파일 자체는 남아있고 `npm run validate-data`로 단독 실행 가능 — 아래 근본 수정 이후로는 Node 버전 걱정 없이 안전함.)

**전례 (2026-07-02)**: `app/korea`가 세션 밖에서 확장되면서 sitemap 스크립트와 validate-data.mjs 둘 다 `data/tips.ts`를 **직접 `.ts` import**하다가 Cloudflare 빌드(Node 22)가 18시간 넘게 전부 실패. 로컬 Node 24는 native TS import를 지원해서 로컬 `npm run build`는 계속 성공했고, 그래서 원인 파악이 늦어졌다. 첫 수정(sitemap만 고침)으로도 안 끝나서 두 번째 라운드(validate-data 제거)가 필요했다.

**같은 날 근본 수정**: 같은 버그가 다시 안 나게 데이터 소스 자체를 리팩터링함 — `.ts` 파일을 스크립트가 직접 import하는 구조를 없앴다.
- `data/tips.ts` → 데이터는 `data/tips.json`으로 분리, `tips.ts`는 타입 + `import tipsData from "./tips.json"` 얇은 wrapper만 남음.
- `lib/types.ts`의 `CATEGORY_SLUGS` → `lib/category-slugs.mjs`(순수 JS)가 진실의 원천, `types.ts`는 이걸 import해서 타입 얹어 재export.
- `lib/map-constants.ts`의 `AREA_CENTERS`/`resolveAreaCenter` → `lib/map-constants.mjs`(순수 JS)가 진실의 원천, `.ts`는 재export만.
- `scripts/validate-data.mjs`는 이제 `data/tips.json`(JSON import assertion) + `lib/category-slugs.mjs` + `lib/map-constants.mjs`만 import — `.ts` 파일을 전혀 안 건드리므로 Node 버전과 무관하게 항상 안전함. `app/korea` 복원 시 `scripts/generate-sitemap.mjs`에 `/korea/*` 로직을 다시 넣을 때도 이 패턴(`.mjs`/`.json`만 import)을 따를 것 — `.ts` 파일을 직접 import하지 말 것.
- **로컬 빌드 성공은 Cloudflare 배포 성공을 보장하지 않는다** (Node 버전 차이). `.mjs` 스크립트가 `.ts`/`.tsx` 파일을 직접 import하는 코드는 절대 작성하지 말 것 — 항상 `.json`(데이터) 또는 `.mjs`(로직)로 분리해서 가져올 것.
