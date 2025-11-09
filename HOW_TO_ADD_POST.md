# 📝 블로그 포스트 추가하는 방법

## 🎯 새 포스트 만들기 (간단 버전)

### 1단계: 포스트 페이지 파일에 내용 추가

`src/app/posts/[slug]/page.js` 파일을 열고, **`posts` 객체**에 새 포스트를 추가하세요:

```javascript
const posts = {
  'your-post-slug': {  // URL에 사용될 이름 (영문, 소문자, 하이픈 사용)
    title: '포스트 제목',
    date: '2024. 11. 9',
    category: '카테고리',
    readTime: '5분',
    tags: ['태그1', '태그2'],
    author: '작성자 이름',
    content: `포스트 내용`,
  },
  // 기존 포스트들...
};
```

### 2단계: 메인 페이지에 포스트 추가

`src/app/page.js` 파일의 **`posts` 배열**에 추가:

```javascript
const posts = [
  {
    id: 1,
    slug: "your-post-slug",  // 위에서 만든 slug와 동일하게!
    title: "포스트 제목",
    excerpt: "포스트 요약 (2-3줄)",
    date: "2024. 11. 9",
    category: "카테고리",
    readTime: "5분",
    tags: ["태그1", "태그2"],
    featured: true,  // 메인에 강조 표시 (선택사항)
  },
  // 기존 포스트들...
];
```

### 3단계: Sitemap에 포스트 추가 (SEO)

`src/app/sitemap.js` 파일에 추가:

```javascript
{
  url: `${baseUrl}/posts/your-post-slug`,
  lastModified: "2024-11-09",
  changeFrequency: "weekly",
  priority: 0.9,
},
```

### 4단계: Git Push

```bash
git add .
git commit -m "새 포스트 추가: 포스트 제목"
git push origin main
```

Vercel이 자동으로 배포합니다! 🚀

---

## 📖 현재 포스트 목록

### 1. 운영체제 쉬운 설명 (operating-system-for-kids)
- **URL**: `/posts/operating-system-for-kids`
- **특징**: 초등학생도 이해할 수 있는 쉬운 설명
- **비유**: 운영체제 = 학교 선생님
- **구조**: 
  - 운영체제 소개
  - 4가지 주요 역할 (프로그램, 메모리, 파일, 하드웨어 관리)
  - 유명한 운영체제들
  - 재미있는 사실

---

## 🎨 포스트 작성 팁

### 초보자를 위한 콘텐츠 작성 방법

1. **비유 사용하기** 🎭
   - 어려운 개념을 일상생활과 연결
   - 예: 운영체제 = 선생님, 메모리 = 책상

2. **시각적 요소 활용** 🎨
   - 이모지 적극 활용 (🎮, 🧠, 📁, ⚙️)
   - 색상 박스로 중요 내용 강조
   - 그라데이션 배경으로 섹션 구분

3. **구조화된 설명** 📚
   - 한 문장 요약으로 시작
   - 단계별 설명
   - 예시와 함께 설명
   - 재미있는 사실로 마무리

4. **읽기 쉬운 문장** ✍️
   - 짧은 문장 사용
   - 어려운 용어 설명
   - 질문 형식 활용

---

## 🔧 포스트 템플릿

새 포스트를 만들 때 다음 구조를 참고하세요:

```javascript
<section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
  <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
    섹션 제목
  </h2>
  
  {/* 중요 내용 강조 박스 */}
  <div className="mb-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
    <p className="text-xl font-semibold text-blue-900 dark:text-blue-300">
      핵심 메시지
    </p>
  </div>

  {/* 일반 내용 */}
  <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
    설명 내용...
  </p>

  {/* 예시 박스 */}
  <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
    <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
      💭 예시: 구체적인 예시를 여기에...
    </p>
  </div>
</section>
```

---

## 🎯 다음에 추가하면 좋은 주제들

### 운영체제 시리즈
- [ ] 프로세스와 스레드 쉬운 설명
- [ ] CPU 스케줄링 이해하기
- [ ] 메모리 관리 방법
- [ ] 파일 시스템 동작 원리

### 프로그래밍 기초
- [ ] 변수가 뭐예요? (초등학생 버전)
- [ ] 함수는 왜 필요할까?
- [ ] 조건문과 반복문 쉽게 이해하기

### 컴퓨터 구조
- [ ] CPU가 하는 일
- [ ] 메모리와 저장장치의 차이
- [ ] 컴퓨터가 빠른 이유

---

## 💡 SEO 최적화 체크리스트

새 포스트를 추가할 때 꼭 확인하세요:

- [ ] `page.js`의 posts 객체에 추가
- [ ] 메인 페이지 posts 배열에 추가
- [ ] `sitemap.js`에 URL 추가
- [ ] 포스트 제목에 키워드 포함
- [ ] 본문에 자연스럽게 키워드 배치
- [ ] 이미지 사용 시 alt 태그 작성
- [ ] 최소 1000자 이상 작성
- [ ] 내부 링크 추가 (다른 포스트 연결)

---

## 🚀 배포 확인

Git push 후:

1. Vercel Dashboard에서 배포 상태 확인
2. 배포 완료 후 사이트 접속:
   - 메인 페이지: https://devlog-study.vercel.app
   - 새 포스트: https://devlog-study.vercel.app/posts/your-post-slug
3. Sitemap 확인: https://devlog-study.vercel.app/sitemap.xml
4. Google Search Console에서 새 URL 크롤링 요청

---

## ❓ 자주 묻는 질문

### Q1: 포스트가 보이지 않아요
A: 세 곳 모두에 추가했는지 확인하세요:
   1. `posts/[slug]/page.js`의 posts 객체
   2. 메인 `page.js`의 posts 배열
   3. slug가 일치하는지 확인

### Q2: 이미지는 어떻게 추가하나요?
A: `public` 폴더에 이미지를 넣고:
```javascript
<img src="/이미지이름.jpg" alt="설명" className="rounded-lg" />
```

### Q3: 코드 블록은 어떻게 추가하나요?
A: 
```javascript
<pre className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
  <code className="text-sm">
    코드 내용
  </code>
</pre>
```

---

## 📚 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [마크다운 가이드](https://www.markdownguide.org/)
- 기존 포스트: `/posts/operating-system-for-kids` 참고

---

행운을 빕니다! 멋진 콘텐츠를 기대할게요! 🎉

