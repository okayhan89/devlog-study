# 🎮 DevLog - IT 개발 블로그

> 초등학생도 이해할 수 있는 IT 지식 공유 블로그

[![Live Demo](https://img.shields.io/badge/Live-devlog--study.vercel.app-blue)](https://devlog-study.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)

---

## 🌟 프로젝트 소개

**DevLog**는 IT 개발 지식을 쉽고 재미있게 전달하는 블로그입니다.
복잡한 기술 개념을 일상 생활의 비유로 설명하여, 누구나 이해할 수 있도록 만들었습니다.

### 핵심 가치

- 🎯 **쉬운 설명**: 초등학생도 이해할 수 있는 비유와 예시
- 📚 **체계적 학습**: 기초부터 심화까지 단계별 학습
- 🚀 **최신 기술**: Next.js 15, Tailwind CSS, React
- 🔍 **SEO 최적화**: Google Search Console 등록 완료

---

## 📊 현재 상태

### ✅ 완료된 기능

- [x] 모던한 블로그 UI/UX 디자인
- [x] 반응형 레이아웃 (모바일/태블릿/데스크톱)
- [x] 다크모드 지원
- [x] SEO 최적화 (Sitemap, Robots.txt, Meta tags)
- [x] Google Search Console 등록
- [x] Google AdSense 준비
- [x] 첫 번째 포스트: 운영체제 쉬운 설명

### 📝 작성 완료된 포스트

1. **🔒 HTTP vs HTTPS** - 왜 자물쇠가 중요할까?

   - URL: `/posts/http-vs-https`
   - 카테고리: 네트워크
   - 검색량: ⭐⭐⭐⭐⭐

2. **🏢 프로세스와 스레드** - 회사와 직원 이야기

   - URL: `/posts/process-and-thread`
   - 카테고리: 운영체제
   - 검색량: ⭐⭐⭐⭐

3. **🍔 REST API란?** - 레스토랑 주문하기

   - URL: `/posts/what-is-rest-api`
   - 카테고리: 백엔드
   - 검색량: ⭐⭐⭐⭐⭐

4. **🎮 운영체제란?** - 초등학생도 이해하는 쉬운 설명!
   - URL: `/posts/operating-system-for-kids`
   - 카테고리: 운영체제
   - 검색량: ⭐⭐⭐⭐

### 📈 목표

- **1개월**: 방문자 1,000명/월
- **3개월**: 방문자 5,000명/월
- **6개월**: 방문자 20,000명/월

---

## 🛠️ 기술 스택

### Frontend

- **Next.js 15** - React 프레임워크
- **Tailwind CSS** - 유틸리티 CSS 프레임워크
- **React** - UI 라이브러리

### SEO & Analytics

- **Google Search Console** - 검색 등록 및 분석
- **Sitemap.xml** - 검색엔진 크롤링
- **Robots.txt** - 크롤러 규칙
- **Open Graph** - 소셜 미디어 최적화

### Deployment

- **Vercel** - 자동 배포
- **GitHub** - 소스 코드 관리

---

## 📁 프로젝트 구조

```
devlog-study/
├── public/              # 정적 파일
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.js   # 전역 레이아웃
│   │   ├── page.js     # 메인 페이지
│   │   ├── posts/      # 블로그 포스트
│   │   ├── sitemap.js  # 사이트맵
│   │   └── robots.js   # Robots.txt
│   └── components/     # 재사용 컴포넌트
│       ├── Header.js
│       ├── Footer.js
│       ├── Sidebar.js
│       ├── AdSense.js
│       └── StructuredData.js
├── BLOG_SUCCESS_STRATEGY.md    # 블로그 성공 전략
├── POST_IDEAS.md               # 100개 주제 아이디어
├── HOW_TO_ADD_POST.md         # 포스트 작성 가이드
├── SEO_SETUP_GUIDE.md         # SEO 설정 가이드
└── README.md
```

---

## 🚀 시작하기

### 설치

```bash
# 저장소 클론
git clone https://github.com/okayhan89/devlog-study.git

# 디렉토리 이동
cd devlog-study

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 배포

```bash
# Git에 커밋
git add .
git commit -m "Update blog post"
git push origin main

# Vercel이 자동으로 배포합니다!
```

---

## 📖 문서

### 필독 가이드

1. **[BLOG_SUCCESS_STRATEGY.md](./BLOG_SUCCESS_STRATEGY.md)**

   - 블로그 성공 로드맵 (6개월 계획)
   - 100개 IT 주제 리스트
   - SEO 최적화 전략
   - 수익화 방법

2. **[POST_IDEAS.md](./POST_IDEAS.md)**

   - 100개 주제 상세 아웃라인
   - 각 주제별 키워드와 비유
   - 월별 포스팅 계획

3. **[HOW_TO_ADD_POST.md](./HOW_TO_ADD_POST.md)**

   - 포스트 추가 방법
   - 템플릿과 예시
   - SEO 체크리스트

4. **[SEO_SETUP_GUIDE.md](./SEO_SETUP_GUIDE.md)**
   - Google Search Console 설정
   - AdSense 신청 방법
   - Analytics 연동

---

## 🎯 다음 단계

### 이번 주 할 일

- [ ] 포스트 2개 작성 (프로세스/스레드, CPU 원리)
- [ ] SNS에 첫 포스트 공유
- [ ] 개발자 커뮤니티 가입 (OKKY, 벨로그)

### 이번 달 할 일

- [ ] 포스트 10개 완성
- [ ] Google Analytics 설치
- [ ] 벨로그 크로스 포스팅
- [ ] 방문자 100명 달성

---

## 📊 성과 추적

### 주요 지표

- **총 포스트**: 4개 (목표: 100개) - 4% 완료! 🎯
- **월 방문자**: 준비 중
- **구글 노출**: 준비 중
- **AdSense 상태**: 준비 중

### 업데이트 로그

- **2024.11.10**: 인기 포스트 3개 추가 (HTTP/HTTPS, 프로세스/스레드, REST API)
- **2024.11.09**: 블로그 초기 구축 및 첫 포스트 작성
- **2024.11.09**: SEO 최적화 및 Google Search Console 등록
- **2024.11.09**: 100개 주제 로드맵 완성

---

## 🤝 기여

이 블로그는 개인 프로젝트이지만, 피드백과 제안은 언제나 환영합니다!

### 피드백 방법

- GitHub Issues
- 블로그 댓글
- 이메일

---

## 📝 라이선스

MIT License - 자유롭게 사용하세요!

---

## 🌟 특별 감사

- Next.js 팀
- Tailwind CSS 팀
- Vercel 플랫폼
- 모든 독자분들

---

## 📞 연락처

- **블로그**: [devlog-study.vercel.app](https://devlog-study.vercel.app)
- **GitHub**: [@okayhan89](https://github.com/okayhan89)

---

## 💡 영감을 준 블로그들

- 토스 기술 블로그
- 우아한형제들 기술 블로그
- 카카오 기술 블로그
- FreeCodeCamp
- CSS-Tricks

---

**⭐ 도움이 되셨다면 Star를 눌러주세요!**

함께 성장하는 개발자 커뮤니티를 만들어가요! 🚀
