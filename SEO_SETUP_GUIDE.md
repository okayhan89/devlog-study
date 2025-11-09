# SEO 및 광고 설정 가이드 📊

## 🔍 Google Search Console 등록하기

### 1단계: Google Search Console 접속
1. [Google Search Console](https://search.google.com/search-console) 접속
2. "속성 추가" 클릭
3. "URL 접두어" 선택
4. `https://devlog-study.vercel.app` 입력

### 2단계: 사이트 소유권 확인
Google이 제공하는 인증 코드를 받아서 `src/app/layout.js` 파일의 78번째 줄에 입력하세요:

```javascript
other: {
  'google-site-verification': '여기에_구글_인증코드_입력', // 예: 'abc123xyz456'
}
```

### 3단계: Sitemap 제출
- Search Console에서 "Sitemaps" 메뉴로 이동
- `https://devlog-study.vercel.app/sitemap.xml` 입력
- 제출 버튼 클릭

---

## 💰 Google AdSense 설정하기

### 1단계: AdSense 계정 만들기
1. [Google AdSense](https://www.google.com/adsense) 접속
2. 계정 생성 및 사이트 등록
3. 승인 대기 (보통 1-2주 소요)

### 2단계: AdSense 코드 입력
승인 후 받은 코드들을 다음 파일에 입력하세요:

**1) `src/app/layout.js` (91번째 줄)**
```javascript
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-여기에_클라이언트ID_입력"
```

**2) `src/components/AdSense.js` (27번째 줄)**
```javascript
data-ad-client="ca-pub-여기에_클라이언트ID_입력"
```

### 3단계: 광고 단위 생성 및 슬롯 ID 입력
AdSense에서 광고 단위를 생성하고 받은 슬롯 ID를 다음에 입력:

**`src/components/AdSense.js`**
- 44번째 줄: `adSlot="배너광고_슬롯ID"` (상단 배너용)
- 53번째 줄: `adSlot="사이드바광고_슬롯ID"` (사이드바용)
- 62번째 줄: `adSlot="본문내광고_슬롯ID"` (본문 중간용)

---

## 📈 Google Analytics 설정 (선택사항)

### 1단계: GA4 계정 만들기
1. [Google Analytics](https://analytics.google.com) 접속
2. 새 속성 만들기
3. 측정 ID 받기 (형식: G-XXXXXXXXXX)

### 2단계: Analytics 코드 입력
`src/app/layout.js` 파일의 97, 105번째 줄에 측정 ID 입력:

```javascript
src="https://www.googletagmanager.com/gtag/js?id=G-여기에_측정ID_입력"
...
gtag('config', 'G-여기에_측정ID_입력');
```

---

## 🌐 네이버 웹마스터도구 등록 (한국 SEO)

### 1단계: 네이버 웹마스터도구 접속
1. [네이버 서치어드바이저](https://searchadvisor.naver.com) 접속
2. "사이트 등록" 클릭
3. `https://devlog-study.vercel.app` 입력

### 2단계: 사이트 소유 확인
네이버가 제공하는 인증 코드를 `src/app/layout.js` 79번째 줄에 입력:

```javascript
'naver-site-verification': '여기에_네이버_인증코드_입력',
```

---

## 📝 SEO 체크리스트

### ✅ 기본 설정 (이미 완료됨)
- [x] Meta 태그 최적화
- [x] Open Graph 태그 (소셜 미디어 공유용)
- [x] Twitter 카드
- [x] robots.txt 생성
- [x] sitemap.xml 생성
- [x] 구조화된 데이터 (JSON-LD)
- [x] Semantic HTML 사용

### ⚠️ 추가로 해야 할 것
- [ ] Google Search Console에 사이트 등록 및 인증
- [ ] Sitemap 제출
- [ ] Google AdSense 승인 및 코드 입력
- [ ] Google Analytics 설정
- [ ] 네이버 웹마스터도구 등록
- [ ] 대표 이미지 생성 (`public/og-image.jpg`, 1200x630px)
- [ ] 로고 이미지 생성 (`public/logo.png`)

---

## 🎯 검색 노출을 위한 추가 팁

### 1. 정기적인 콘텐츠 업데이트
- 최소 주 1회 이상 새 포스트 작성
- 고품질 콘텐츠 제공 (최소 1000자 이상)

### 2. 키워드 최적화
- 제목에 주요 키워드 포함
- 본문에 자연스럽게 키워드 배치
- 이미지 alt 태그 작성

### 3. 백링크 구축
- 다른 블로그에 댓글 작성
- 소셜 미디어 공유
- 개발자 커뮤니티 참여 (벨로그, 브런치 등)

### 4. 페이지 속도 최적화
- 이미지 최적화 (WebP 사용)
- Next.js의 이미지 최적화 활용
- 불필요한 스크립트 제거

### 5. 모바일 최적화
- 반응형 디자인 (이미 적용됨 ✅)
- 터치 친화적인 UI

---

## 🚀 배포 후 확인사항

Git에 push하면 자동으로 Vercel에 배포됩니다:

```bash
git add .
git commit -m "SEO 및 광고 설정 추가"
git push origin main
```

배포 후 확인:
1. `https://devlog-study.vercel.app` 접속
2. `https://devlog-study.vercel.app/sitemap.xml` 확인
3. `https://devlog-study.vercel.app/robots.txt` 확인
4. 브라우저 개발자도구에서 Meta 태그 확인

---

## ❓ 문제 해결

### Q1: 검색에 노출되지 않아요
A: 새 사이트는 구글에 인덱싱되는데 1-4주 소요됩니다. Google Search Console에서 "URL 검사" 기능으로 수동 크롤링 요청하세요.

### Q2: AdSense 승인이 안 돼요
A: AdSense 승인 조건:
- 최소 20-30개의 고품질 포스트
- 각 포스트는 500자 이상
- 규칙적인 업데이트
- 독창적인 콘텐츠
- 최소 3-6개월 운영 (권장)

### Q3: 광고가 표시되지 않아요
A: AdSense 코드 입력 후 실제 광고가 표시되는데 1-2일 소요될 수 있습니다.

---

## 📞 추가 도움이 필요하신가요?

- [Next.js SEO 공식 문서](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google SEO 가이드](https://developers.google.com/search/docs)
- [AdSense 고객센터](https://support.google.com/adsense)

