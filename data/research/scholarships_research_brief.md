# Korea Scholarships & Support Programs — Research Brief

## 목적
kkultongkorea.com `/korea/scholarships` 페이지에 표시할 장학금/지원 프로그램 데이터 수집.
외국인 유학생(D-2), 어학연수생(D-4), 워킹홀리데이(H-1) 대상.

## 출처 우선순위
1. **NIIED** (국립국제교육원) — niied.go.kr — GKS 장학금 공식 운영기관
2. **교육부** — moe.go.kr
3. **각 대학교 공식 국제처 웹사이트** (Seoul National University, Yonsei, Korea, KAIST 등)
4. **지자체 공식 사이트** (서울시, 부산시 등)
5. **민간재단 공식 사이트**

블로그, 에이전시 사이트 출처 금지. 반드시 공식 사이트 기준.

## 결과물 포맷

JSON 배열로 제출:

```json
{
  "id": "고유 slug (영문 소문자, 하이픈)",
  "name_en": "장학금 영문 공식명",
  "name_ko": "장학금 한국어명",
  "category": "government / university / regional / private",
  "visa_types": ["D-2", "D-4", "H-1"],
  "provider": "운영기관명",
  "amount": "금액 (예: Full tuition + ₩900,000/month living allowance)",
  "duration": "지원 기간 (예: Up to 4 years)",
  "eligibility": "핵심 자격 요건 2-3줄 (영어)",
  "deadline": "지원 마감 (예: September annually / varies by university)",
  "how_to_apply": "지원 방법 간단 설명 (영어)",
  "official_url": "공식 지원/안내 URL",
  "tip": "외국인 지원자를 위한 실용 팁 1-2문장 (영어)",
  "last_verified": "2025-XX"
}
```

---

## 수집 대상

### 카테고리 1: 정부 장학금 (Government)

#### 1-1. GKS — Global Korea Scholarship (정부초청장학금)
한국 정부 대표 장학금. 가장 중요한 항목.

**수집 내용:**
- GKS Undergraduate (학부): 대상, 금액, 기간, 마감
- GKS Graduate (대학원): 대상, 금액, 기간, 마감
- GKS Research (연구자): 대상, 금액, 기간
- 지원 경로 두 가지: Embassy Track vs University Track 차이 설명

**확인 필수:**
- 2025년 기준 월 생활비 금액 (학부/대학원 다름)
- 한국어 연수 기간 포함 여부
- 항공권/의료보험 포함 여부
- 성적 유지 기준

**공식 출처:** niied.go.kr/user/extra/niied/1023/selectBoardList.do (GKS 공지)

#### 1-2. Korean Government Scholarship (KGSP) — 재외동포 대상
재외동포 대상 별도 프로그램 있는지 확인

#### 1-3. KOICA 장학금 (개발도상국 출신 대상)
개발도상국 출신 학생 대상 ODA 연계 장학금

**공식 출처:** koica.go.kr

---

### 카테고리 2: 대학 자체 장학금 (University)

아래 주요 대학별 외국인 유학생 장학금 수집:

#### 서울대학교 (SNU)
- SNU President's Scholarship for International Students
- 각 단과대학 장학금
- **출처:** oia.snu.ac.kr

#### 연세대학교 (Yonsei)
- Yonsei University Scholarship for International Students
- Underwood International College 별도 장학금
- **출처:** yonsei.ac.kr/intl

#### 고려대학교 (Korea University)
- KU International Student Scholarship
- **출처:** gsc.korea.ac.kr

#### KAIST
- KAIST Graduate Fellowship (이공계 대학원 지원자)
- **출처:** kaist.edu/en/admissions

#### 성균관대학교 (SKKU)
- SKKU Global Scholarship
- **출처:** skku.edu/skku/intl

**각 대학마다 확인 필수:**
- 금액 (전액/반액/기타)
- 자동 지급 vs 별도 신청 여부
- GKS와 중복 수혜 가능 여부
- 성적 유지 기준 (보통 3.0/4.5 이상)

---

### 카테고리 3: 지자체/지역 장학금 (Regional)

#### 서울특별시 외국인 유학생 지원
- 서울장학재단 외국인 유학생 지원 프로그램
- **출처:** seoul.go.kr / 서울장학재단

#### 부산광역시
- 부산 외국인 유학생 장학금
- **출처:** busan.go.kr

#### 제주도
- 제주특별자치도 외국인 유학생 지원
- **출처:** jeju.go.kr

---

### 카테고리 4: 민간/재단 장학금 (Private)

#### 한국장학재단 (Korea Student Aid Foundation, KOSAF)
- 외국인 유학생 지원 프로그램 있는지 확인
- **출처:** kosaf.go.kr

#### 아산나눔재단
- 외국인 대상 프로그램 있는지 확인

#### 삼성 장학재단 / LG 연암문화재단
- 외국인 대상 여부 확인

---

### 카테고리 5: 어학연수생 (D-4) 전용 지원

D-4 비자 어학연수생이 받을 수 있는 지원:
- 대학 부설 언어교육원 자체 장학금
- 한국어 능력 기반 장학금 (TOPIK 성적 연계)
- 교환학생 파견 장학금 (본국 대학 통해 오는 경우)

---

### 추가 수집: 장학금 외 지원 프로그램

장학금은 아니지만 외국인 유학생이 꼭 알아야 할 지원:

- **국민건강보험 유학생 할인** — 월 ₩76,390 (2025년 기준)
- **대학 기숙사 우선 배정** — 외국인 유학생 전용 기숙사 운영 여부
- **취업지원** — 외국인 유학생 인턴십/취업 연계 프로그램 (하이코리아, 워크넷)
- **한국어 교육 지원** — 세종학당, 대학 언어교육원 무료/할인 프로그램

---

## 주의사항

- 금액은 반드시 **2025년 기준**으로 확인. 연도 표기 필수.
- 마감일은 "annually in September" 같은 형태로 표기 (특정 날짜는 매년 바뀜)
- 폐지된 프로그램은 제외
- GKS Embassy Track과 University Track은 **별도 항목**으로 수집
- 대학 자체 장학금은 GKS 수혜자에게 **중복 지급 여부** 반드시 확인

## 최종 목표
- 총 15–25개 프로그램
- 정부 장학금 4–6개 (GKS 트랙별 포함)
- 대학 자체 장학금 5–8개
- 지자체/민간 3–5개
- 기타 지원 프로그램 2–4개
