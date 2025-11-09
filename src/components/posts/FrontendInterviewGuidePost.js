import Link from "next/link";

export default function FrontendInterviewGuidePost() {
  return (
    <>
      {/* 인트로 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🎯 프론트엔드 면접, 이렇게 준비하세요!
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          프론트엔드 면접은 단순히 HTML/CSS를 아는지만 묻지 않아요. 브라우저가 어떻게
          작동하는지, React 컴포넌트를 어떻게 설계하는지, 사용자 경험을 위해 어떤
          선택을 하는지가 모두 평가됩니다. 이 글에서는 <strong className="text-blue-600 dark:text-blue-400">개념 정리 → 실전 질문 → 답변 전략</strong>
          순서로 프론트엔드 면접을 완벽하게 준비할 수 있도록 안내합니다.
        </p>
        <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
          <p className="text-lg font-semibold text-purple-900 dark:text-purple-200">
            ✅ 목표: <span className="text-purple-600 dark:text-purple-400">핵심 개념</span>을 이해하고,
            <span className="text-indigo-600 dark:text-indigo-400"> 상황형 질문</span>에 자신 있게 답하며,
            <span className="text-green-600 dark:text-green-400"> 포트폴리오와 연결</span>하기.
          </p>
        </div>
      </section>

      {/* 전체 로드맵 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🧭 4주 집중 로드맵
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              week: "1주차",
              focus: "웹 기본기",
              items: [
                "HTML5 시맨틱 태그 이해",
                "CSS 레이아웃 (Flex, Grid) 정리",
                "브라우저 렌더링 과정 복습",
              ],
            },
            {
              week: "2주차",
              focus: "JavaScript & 브라우저",
              items: [
                " 이벤트 루프 & 비동기 처리",
                "프로토타입, this, 클로저",
                "호이스팅, 스코프, 모듈 시스템",
              ],
            },
            {
              week: "3주차",
              focus: "프레임워크 & 상태 관리",
              items: [
                "React 렌더링 흐름",
                "Hooks 규칙, 커스텀 훅 설계",
                "상태 관리 (Context, Redux, Zustand)",
              ],
            },
            {
              week: "4주차",
              focus: "성능 & 실전 시뮬레이션",
              items: [
                "웹 성능 최적화 (LCP, FID, CLS)",
                "접근성 체크리스트",
                "화이트보드/라이브 코딩 연습",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.week}
              className="rounded-lg border border-purple-100 bg-purple-50 p-6 dark:border-purple-800/40 dark:bg-purple-900/20"
            >
              <h3 className="mb-2 text-sm font-semibold text-purple-600 dark:text-purple-300">
                {plan.week}
              </h3>
              <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {plan.focus}
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-purple-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 핵심 개념 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🔑 프론트엔드 핵심 5대 영역
        </h2>
        <div className="grid gap-6 lg:grid-cols-5">
          {[
            {
              title: "HTML",
              emoji: "📄",
              points: [
                "시맨틱 태그 역할",
                "SEO & 접근성 관계",
                "ARIA 속성 기본",
              ],
            },
            {
              title: "CSS",
              emoji: "🎨",
              points: [
                "레이아웃 시스템",
                "반응형 전략",
                "CSS-in-JS 장단점",
              ],
            },
            {
              title: "JavaScript",
              emoji: "🧠",
              points: [
                "비동기 패턴 (Promise, async/await)",
                "클로저 & 스코프",
                "ES 모듈 & 번들링",
              ],
            },
            {
              title: "브라우저",
              emoji: "🌐",
              points: [
                "렌더링 파이프라인",
                "리플로우/리페인트",
                "서비스 워커 & 캐시",
              ],
            },
            {
              title: "React",
              emoji: "⚛️",
              points: [
                "Virtual DOM 이해",
                "렌더링 최적화",
                "Hook 설계 패턴",
              ],
            },
          ].map((area) => (
            <div
              key={area.title}
              className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-3 text-3xl">{area.emoji}</div>
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                {area.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 면접 질문 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🗂️ 카테고리별 예상 질문 리스트
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "HTML/CSS",
              questions: [
                "시맨틱 태그를 사용해야 하는 이유는 무엇인가요?",
                "Flexbox와 CSS Grid의 차이를 설명해보세요.",
                "CSS 성능 최적화를 위해 고려해야 할 사항은?",
              ],
            },
            {
              title: "JavaScript",
              questions: [
                "이벤트 루프와 콜 스택, 태스크 큐의 관계를 설명해보세요.",
                "클로저가 무엇이고 언제 사용하나요?",
                "ES6 모듈과 CommonJS의 차이점은?",
              ],
            },
            {
              title: "React",
              questions: [
                "React 렌더링이 다시 일어나는 조건은?",
                "useEffect와 useLayoutEffect의 차이는?",
                "상태 관리 도구를 선택할 때 어떤 기준을 사용하나요?",
              ],
            },
            {
              title: "성능 & 접근성",
              questions: [
                "웹 성능 지표(Core Web Vitals)를 설명하고 개선 방법을 이야기해보세요.",
                "이미지 최적화를 어떻게 하나요?",
                "스크린 리더 사용자를 위한 접근성 개선 경험이 있나요?",
              ],
            },
            {
              title: "협업 & 테스트",
              questions: [
                "디자이너와의 협업에서 겪은 갈등을 어떻게 해결했나요?",
                "프론트엔드 테스트 도구(Jest, Testing Library)를 어떻게 사용했나요?",
                "코드 리뷰에서 중요하게 보는 항목은?",
              ],
            },
          ].map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {category.questions.map((question) => (
                  <li key={question}>❓ {question}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 답변 전략 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🧠 답변 구조화 공식 (STAR + WHY)
        </h2>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          기술 면접에서는 단순히 지식을 말하는 것이 아니라 <strong>문제를 해결한 과정</strong>을
          보여줘야 해요. 아래 구조를 참고해 답변을 정리해보세요.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              STAR 구조 적용 예시
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong className="text-blue-600 dark:text-blue-400">Situation</strong>: 페이지 로드 시간이 느린 프로젝트
              </li>
              <li>
                <strong className="text-green-600 dark:text-green-400">Task</strong>: LCP 4초 → 2초로 줄이기 목표
              </li>
              <li>
                <strong className="text-purple-600 dark:text-purple-400">Action</strong>: 이미지 지연 로딩, 코드 스플리팅, 캐시 정책 적용
              </li>
              <li>
                <strong className="text-amber-600 dark:text-amber-400">Result</strong>: LCP 1.8초 달성, 이탈률 15% 감소
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              WHY(왜?) 질문 준비
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>왜 React를 선택했나요? → 커뮤니티, 생태계, 컴포넌트 재사용성 근거</li>
              <li>왜 Styled-components 대신 Tailwind를 사용했나요? → 팀 구성, 생산성</li>
              <li>왜 해당 성능 개선 전략을 택했나요? → 데이터 기반 결정</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 실전 대비 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🧑‍💻 라이브 코딩 & 화이트보드 연습
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              라이브 코딩 체크리스트
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• 요구사항 재확인 → 의사소통 능력 어필</li>
              <li>• 단계별로 생각을 말하면서 코딩</li>
              <li>• 테스트 케이스 즉석 생성</li>
              <li>• 마무리 리팩터링 포인트 언급</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              화이트보드 설계 연습 주제
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• 반응형 레이아웃 설계하기</li>
              <li>• 검색창 자동완성 UX 설계 (디바운스 포함)</li>
              <li>• 대시보드 성능 최적화 시나리오</li>
              <li>• 다국어(i18n) 지원 구조 설명</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 포트폴리오 연결 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🔗 프로젝트와 연결하기
        </h2>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          면접관은 "실제로 적용해봤나요?"를 가장 궁금해합니다. 자신의 프로젝트를 아래 구조로 정리해두면
          어떤 질문에도 자연스럽게 연결할 수 있어요.
        </p>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40">
          <ol className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              <strong>문제 정의</strong>: 어떤 문제를 해결하려 했는가? (예: 로딩 속도, 협업 이슈)
            </li>
            <li>
              <strong>선택 이유</strong>: 기술 스택을 선택한 근거 (팀 역량, 요구 사항)
            </li>
            <li>
              <strong>구현 상세</strong>: 어떤 구조/패턴을 사용했는가?
            </li>
            <li>
              <strong>성과</strong>: 수치, 사용자 피드백, 배운 점 기록
            </li>
          </ol>
        </div>
      </section>

      {/* 추천 자료 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          📚 추천 학습 자료
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              문서 & 강의
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• MDN Web Docs - 표준 문서 및 데모</li>
              <li>• Frontend Masters - 심화 강의</li>
              <li>• Netlify, Vercel 블로그 - 최신 트렌드</li>
              <li>• Google Web.dev - 성능 & 접근성 가이드</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              문제 & 실습
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Frontend Mentor - UI 설계 실습</li>
              <li>• LeetCode Top Interview Questions - JS로 풀어보기</li>
              <li>• UI Devtools - 접근성 테스트 실습</li>
              <li>• Storybook 튜토리얼 - 컴포넌트 문서화</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🙋 자주 묻는 질문
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "React만 준비하면 될까요?",
              answer:
                "아니요! 바닐라 JS로 사고하는 연습이 필요해요. React는 도구이고, 근본은 웹과 JS입니다.",
            },
            {
              question: "TS를 꼭 알아야 하나요?",
              answer:
                "대부분의 팀이 TypeScript를 사용해요. 기본 타입, 제네릭, 유틸리티 타입 정도는 준비하세요.",
            },
            {
              question: "접근성까지 준비하려면 범위가 너무 넓어요.",
              answer:
                "자주 나오는 ARIA 속성과 키보드 네비게이션, 색 대비 기준만 우선 준비해도 좋습니다.",
            },
            {
              question: "포트폴리오 프로젝트는 몇 개가 적당할까요?",
              answer:
                "기술 스택과 기여도가 다양한 2~3개의 프로젝트를 깊이 있게 설명할 수 있으면 충분합니다.",
            },
          ].map((item) => (
            <details
              key={item.question}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/40"
            >
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-white">
                {item.question}
              </summary>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 마무리 CTA */}
      <section className="rounded-lg bg-linear-to-r from-purple-500 to-indigo-600 p-8 text-white shadow-lg">
        <h2 className="mb-4 text-3xl font-bold">🌟 면접에서 여러분의 스토리를 보여주세요!</h2>
        <p className="mb-4 text-lg opacity-90">
          기술은 결국 사람을 위한 것이에요. 여러분이 만든 경험을 자신 있게 이야기해보세요.
          면접관은 완벽한 답보다, 문제를 어떻게 해결해나가는지를 보고 싶어합니다.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/posts/coding-test-roadmap"
            className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-purple-600 transition-transform hover:scale-105"
          >
            코딩 테스트 로드맵 보기 →
          </Link>
          <Link
            href="/posts/backend-interview-guide"
            className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-purple-600 transition-transform hover:scale-105"
          >
            백엔드 면접 가이드 →
          </Link>
        </div>
      </section>
    </>
  );
}
