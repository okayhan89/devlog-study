import Link from "next/link";

export default function CodingTestRoadmapPost() {
  return (
    <>
      {/* 인트로 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🚀 코딩 테스트, 어떻게 준비해야 할까요?
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          코딩 테스트는 개발자 취업과 이직의 관문이에요. 하지만 막상 준비하려고 하면
          무엇부터 해야 할지 막막하죠. 이 가이드는 코딩 테스트를 처음 준비하는 사람도
          <strong className="text-blue-600 dark:text-blue-400"> 8주 만에 실력을 키울 수 있도록</strong>
          도와주는 로드맵입니다. 초등학생도 이해할 수 있는 비유와 함께 개념과 문제 풀이 방법,
          실전 전략을 모두 담았어요.
        </p>
        <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
          <p className="text-lg font-semibold text-blue-900 dark:text-blue-200">
            ✅ 결과적으로 우리는 <span className="text-blue-600 dark:text-blue-400">알고리즘 사고력</span>,
            <span className="text-green-600 dark:text-green-400"> 문제 풀이 루틴</span>,
            <span className="text-purple-600 dark:text-purple-400"> 실전 감각</span>을 모두 잡게 됩니다.
          </p>
        </div>
      </section>

      {/* 준비 체크리스트 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🧭 8주 로드맵 한눈에 보기
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "1~2주차: 기초 다지기",
              points: [
                "자료구조 기본 이해 (배열, 연결 리스트, 스택, 큐)",
                "시간 복잡도 / 공간 복잡도 감 잡기",
                "브루트포스, 그리디 문제로 감각 익히기",
              ],
            },
            {
              title: "3~4주차: 핵심 패턴 익히기",
              points: [
                "정렬, 이진 탐색, 재귀, 분할 정복",
                "DFS/BFS 탐색 패턴",
                "누적합, 슬라이딩 윈도우로 최적화 경험",
              ],
            },
            {
              title: "5~6주차: 실전 문제 돌파",
              points: [
                "다이나믹 프로그래밍(DP) 기본 10문제",
                "백트래킹, 조합/순열 응용",
                "자료구조 응용 (힙, 해시, 트라이) 맛보기",
              ],
            },
            {
              title: "7~8주차: 실전 시뮬레이션",
              points: [
                "기업 기출 3회분 시간 맞춰 풀기",
                "실수 분석 & 오답 노트 정리",
                "테스트 환경 동일하게 맞추기 (IDE, 타이머)",
              ],
            },
          ].map((schedule) => (
            <div
              key={schedule.title}
              className="rounded-lg border border-blue-100 bg-blue-50 p-6 dark:border-blue-800/50 dark:bg-blue-900/20"
            >
              <h3 className="mb-4 text-xl font-semibold text-blue-900 dark:text-blue-200">
                {schedule.title}
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {schedule.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 text-blue-500 dark:text-blue-300">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 필수 이론 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🧠 반드시 알아야 할 핵심 개념
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              emoji: "🧱",
              title: "자료구조",
              description: "문제를 담는 그릇",
              details: [
                "배열 vs 연결 리스트: 빠른 접근 / 빠른 삽입",
                "스택 & 큐: 순서 제어",
                "힙, 해시: 빠른 검색과 우선순위 관리",
              ],
            },
            {
              emoji: "🧩",
              title: "알고리즘",
              description: "문제를 푸는 요리법",
              details: [
                "정렬, 이진 탐색: 데이터를 정리하고 찾기",
                "DFS/BFS: 길 찾기",
                "DP: 중복 계산 줄이기",
              ],
            },
            {
              emoji: "⚙️",
              title: "코딩 습관",
              description: "실전에서 실수 줄이기",
              details: [
                "입출력 최적화 (빠른 입력 사용)",
                "에지 케이스 체크리스트",
                "테스트 케이스 직접 만들기",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-3 text-3xl">{card.emoji}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                {card.description}
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {card.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1 text-gray-400">▪</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 주차별 학습 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          📅 주차별 학습 스케줄 (샘플)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <th className="border border-gray-200 px-4 py-3 dark:border-gray-700">주차</th>
                <th className="border border-gray-200 px-4 py-3 dark:border-gray-700">학습 목표</th>
                <th className="border border-gray-200 px-4 py-3 dark:border-gray-700">문제 유형</th>
                <th className="border border-gray-200 px-4 py-3 dark:border-gray-700">추천 문제 수</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-200">
              {[...
                Array(8).keys()].map((weekIndex) => {
                const data = [
                  {
                    goal: "시간 복잡도, 그리디 익히기",
                    types: "브루트포스, 정렬",
                    count: "하루 2문제",
                  },
                  {
                    goal: "자료구조 응용",
                    types: "스택/큐, 해시, 투 포인터",
                    count: "하루 2~3문제",
                  },
                  {
                    goal: "탐색 마스터",
                    types: "DFS, BFS, 백트래킹",
                    count: "하루 3문제",
                  },
                  {
                    goal: "이진 탐색 & 파라매트릭",
                    types: "이분 탐색, 매개변수 탐색",
                    count: "주 12문제",
                  },
                  {
                    goal: "DP 기초",
                    types: "기본 DP, 피보나치, 배낭 문제",
                    count: "하루 2문제",
                  },
                  {
                    goal: "DP 심화 & 최적화",
                    types: "LIS, 구간 DP, 비트마스킹",
                    count: "주 10문제",
                  },
                  {
                    goal: "기출 풀이",
                    types: "기업 기출 1~2회",
                    count: "회차별 시간 재기",
                  },
                  {
                    goal: "모의고사",
                    types: "실전 시뮬레이션",
                    count: "총 3세트",
                  },
                ][weekIndex];

                return (
                  <tr key={weekIndex} className="even:bg-gray-50 dark:even:bg-gray-800/40">
                    <td className="border border-gray-200 px-4 py-3 font-semibold dark:border-gray-700">
                      {weekIndex + 1}주차
                    </td>
                    <td className="border border-gray-200 px-4 py-3 dark:border-gray-700">
                      {data.goal}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 dark:border-gray-700">
                      {data.types}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 dark:border-gray-700">
                      {data.count}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 실전 전략 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🧪 실전 전략 5단계
        </h2>
        <ol className="space-y-6">
          {[
            {
              title: "문제 읽기",
              detail: "변수, 제한 사항, 예시 입력/출력을 꼼꼼히 체크합니다.",
              tip: "입력 범위가 작으면 브루트포스, 크면 최적화 필요!",
            },
            {
              title: "전략 세우기",
              detail: "자료구조와 알고리즘을 선택합니다.",
              tip: "마음속 도구 상자를 떠올려 보세요. (스택? 큐? 그래프?)",
            },
            {
              title: "의사 코드 작성",
              detail: "주요 단계만 간단히 적어보고 코드로 옮깁니다.",
              tip: "의사 코드는 머릿속 에디터! 실수를 줄여요.",
            },
            {
              title: "구현 & 디버깅",
              detail: "기본 케이스 → 에지 케이스 → 대량 테스트 순으로 검증합니다.",
              tip: "console.log / print로 중간 상태를 확인해보세요.",
            },
            {
              title: "복기",
              detail: "틀린 이유를 기록하고, 비슷한 문제를 다시 풀어봅니다.",
              tip: "오답 노트는 내 뇌를 위한 디버거입니다.",
            },
          ].map((step, index) => (
            <li
              key={step.title}
              className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40"
            >
              <div className="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                STEP {index + 1}
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mb-2 text-gray-700 dark:text-gray-300">{step.detail}</p>
              <p className="text-sm text-green-600 dark:text-green-400">Tip: {step.tip}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 연습 문제 추천 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🧑‍💻 유형별 필수 문제 리스트
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "브론즈 → 실버",
              description: "기본 패턴 이해",
              problems: [
                "백준 1546 평균",
                "프로그래머스 K번째수",
                "프로그래머스 체육복",
                "백준 2164 카드2",
              ],
            },
            {
              title: "실버 → 골드",
              description: "탐색 + 최적화",
              problems: [
                "백준 7576 토마토 (BFS)",
                "백준 12865 평범한 배낭 (DP)",
                "프로그래머스 여행경로 (DFS)",
                "프로그래머스 이중우선순위큐",
              ],
            },
            {
              title: "골드 도전",
              description: "복합 패턴 활용",
              problems: [
                "백준 1715 카드 정렬하기 (힙)",
                "백준 14503 로봇 청소기 (시뮬레이션)",
                "프로그래머스 순위 검색 (이분 탐색)",
                "백준 9251 LCS (DP)",
              ],
            },
            {
              title: "실전 감각",
              description: "기업 기출 & 모의고사",
              problems: [
                "카카오 기출 2018~2024",
                "라인, 네이버, 토스 기출",
                "기업별 코딩테스트 온라인 저지",
                "LeetCode Weekly Challenge",
              ],
            },
          ].map((bucket) => (
            <div
              key={bucket.title}
              className="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {bucket.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-purple-600 dark:text-purple-400">
                {bucket.description}
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {bucket.problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-2">
                    <span className="mt-1 text-purple-400">★</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 실전 환경 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🖥️ 실전 환경 세팅 가이드
        </h2>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          시험장에서 당황하지 않으려면 <strong>환경을 똑같이 맞추는 것</strong>이 중요해요. IDE와
          키보드 설정, 단축키까지 미리 익숙해지면 실전에서 시간을 절약할 수 있어요.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              필수 세팅 체크리스트
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✔️ 에디터 자동 완성 끄기 (실전에서는 제한 가능)</li>
              <li>✔️ 템플릿 코드 미리 저장</li>
              <li>✔️ 입출력 빠른 처리 함수 암기</li>
              <li>✔️ 타이머 & 주석 태그로 진행 상황 표시</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              추천 도구
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>⌨️ Code Runner 확장 + VS Code Snippet</li>
              <li>📈 Notion 오답 노트 템플릿</li>
              <li>⏱️ Pomodoro 타이머 (25분 집중 / 5분 휴식)</li>
              <li>🧠 알고리즘 플로우 차트 그리기 (Excalidraw)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 면접 연계 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🔄 코딩 테스트 → 기술 면접 연결하기
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            코딩 테스트는 단순히 점수를 위한 시험이 아니에요. <strong>문제 해결 능력</strong>과
            <strong> 컴퓨터 과학 원리</strong>를 면접에서 설명할 수 있도록 연결해야 합니다.
          </p>
          <ul className="space-y-4">
            {[
              {
                title: "왜 이 알고리즘을 선택했나요?",
                answer:
                  "시간 복잡도 비교, 다른 방법과의 차이를 설명할 수 있어야 합니다.",
              },
              {
                title: "에지 케이스는 어떻게 처리했나요?",
                answer: "테스트 케이스 작성 방법과 실제로 걸러낸 사례를 이야기하세요.",
              },
              {
                title: "리팩터링 여지는 무엇인가요?",
                answer: "코드 구조 개선, 함수 분리, 변수 네이밍 등을 정리해두세요.",
              },
            ].map((qa) => (
              <li
                key={qa.title}
                className="rounded-lg border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/40"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  ❓ {qa.title}
                </h3>
                <p>{qa.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 리소스 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          📚 추천 학습 자료 & 플랫폼
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              온라인 저지
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• 백준: 난이도별 문제, 주제별 추천</li>
              <li>• 프로그래머스: 기업 기출, 효율성 테스트</li>
              <li>• LeetCode: 글로벌 인터뷰 대비</li>
              <li>• Codeforces: 대회 감각 키우기</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              학습 자료
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• 이코테(이것이 취업을 위한 코딩 테스트다) - 기초 다지기</li>
              <li>• 컴공선배 알고리즘 유튜브 - 시각적 설명</li>
              <li>• USACO Guide - 단계별 학습</li>
              <li>• Grokking 패턴 강의 - 자주 쓰는 알고리즘 패턴</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🙋 자주 묻는 질문
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "언어는 무엇으로 준비할까요?",
              answer:
                "기업 공고를 확인하세요. Python, Java, C++가 가장 보편적이에요. 속도/표현/라이브러리 측면에서 자신의 강점을 고려하세요.",
            },
            {
              question: "시간이 부족해요. 최소한으로 무엇을 해야 할까요?",
              answer:
                "탐색(DFS/BFS), 정렬, 해시, 기본 DP 4가지를 집중해서 반복하세요. 자주 나오는 핵심 유형입니다.",
            },
            {
              question: "스스로 실력이 늘고 있는지 확인하는 법은?",
              answer:
                "한 문제를 다시 풀 때 30분 내 해결 가능하면 실력이 오른 거예요. 실전 모의고사를 주간 루틴으로 넣어보세요.",
            },
            {
              question: "코딩 테스트와 프로젝트 준비를 병행할 수 있을까요?",
              answer:
                "가능합니다. 주 3회 코딩 테스트 연습 + 주 2회 프로젝트 진행처럼 요일을 나눠 집중도를 유지하세요.",
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

      {/* 마무리 */}
      <section className="rounded-lg bg-linear-to-r from-indigo-500 to-blue-600 p-8 text-white shadow-lg">
        <h2 className="mb-4 text-3xl font-bold">🎉 하루 1문제부터 시작해보세요!</h2>
        <p className="mb-4 text-lg opacity-90">
          꾸준함이 실력을 만듭니다. 오늘부터 작은 문제라도 풀어보면서 자신만의 루틴을
          만들어보세요. 막히면 바로 답을 보기보다, <strong>스스로 질문</strong>을 던져보면 훨씬 빠르게 성장할 수 있어요.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/posts/frontend-interview-guide"
            className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-indigo-600 transition-transform hover:scale-105"
          >
            프론트엔드 면접 준비하기 →
          </Link>
          <Link
            href="/posts/backend-interview-guide"
            className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-indigo-600 transition-transform hover:scale-105"
          >
            백엔드 면접 준비하기 →
          </Link>
        </div>
      </section>
    </>
  );
}
