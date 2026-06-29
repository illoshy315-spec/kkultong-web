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
`day13_en.md`, `day14_en.md`, `day15_en.md`, `day17_en.md` — 미래 커리큘럼 초안. 절대 삭제 금지.
