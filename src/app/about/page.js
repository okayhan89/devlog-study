export const metadata = {
  title: "소개 | DevLog",
  description: "초등학생도 이해할 수 있는 쉬운 IT 블로그, DevLog를 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* 헤더 */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
            👋 안녕하세요!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            IT를 쉽게 설명하는 블로그,{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              DevLog
            </span>
            입니다
          </p>
        </div>

        {/* 메인 소개 */}
        <section className="mb-12 rounded-lg bg-linear-to-br from-blue-50 to-purple-50 p-8 shadow-lg dark:from-blue-900/20 dark:to-purple-900/20">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            🎯 우리의 목표
          </h2>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <p>
              <strong className="text-blue-600 dark:text-blue-400">
                DevLog
              </strong>
              는 복잡한 IT 개념을{" "}
              <strong>초등학생도 이해할 수 있을 만큼 쉽게</strong> 설명하는
              블로그입니다.
            </p>
            <p>
              컴퓨터 과학의 어려운 용어들을 일상생활의 비유와 재미있는 예시로
              풀어내어, 누구나 IT 지식을 쉽게 배울 수 있도록 돕습니다.
            </p>
          </div>
        </section>

        {/* 블로그 특징 */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            ✨ DevLog의 특별한 점
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-3 text-4xl">🎓</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                쉬운 설명
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                일상생활의 비유를 활용해 복잡한 개념을 누구나 이해할 수 있도록
                설명합니다.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-3 text-4xl">💡</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                실생활 예시
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                학교, 회사, 레스토랑 등 익숙한 상황에 빗대어 IT 개념을
                설명합니다.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-3 text-4xl">🎨</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                시각적 디자인
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                이모지와 색상 박스를 활용해 읽기 쉽고 재미있는 콘텐츠를
                제공합니다.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-3 text-4xl">📚</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                다양한 주제
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                네트워크, 운영체제, 데이터베이스, 보안 등 다양한 IT 주제를
                다룹니다.
              </p>
            </div>
          </div>
        </section>

        {/* 다루는 주제 */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            📖 주요 카테고리
          </h2>
          <div className="space-y-4">
            {[
              {
                emoji: "🌐",
                name: "네트워크",
                desc: "인터넷, HTTP, DNS 등 네트워크 기초",
              },
              {
                emoji: "🖥️",
                name: "운영체제",
                desc: "프로세스, 스레드, 메모리 관리 등",
              },
              {
                emoji: "💾",
                name: "데이터베이스",
                desc: "SQL, NoSQL, 트랜잭션 등",
              },
              {
                emoji: "🔐",
                name: "보안",
                desc: "암호화, 인증, 보안 기초 개념",
              },
              {
                emoji: "🎨",
                name: "프론트엔드",
                desc: "HTML, CSS, JavaScript, React 등",
              },
              { emoji: "⚙️", name: "백엔드", desc: "API, 서버, REST 등" },
              {
                emoji: "🧮",
                name: "알고리즘",
                desc: "정렬, 탐색, 자료구조 등",
              },
            ].map((category) => (
              <div
                key={category.name}
                className="flex items-start rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="mr-4 text-3xl">{category.emoji}</span>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 블로그 철학 */}
        <section className="mb-12 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            💭 우리의 철학
          </h2>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <blockquote className="border-l-4 border-blue-600 pl-4 italic">
              "복잡한 것을 쉽게 설명할 수 있다면, 그것이 진정한 이해입니다."
            </blockquote>
            <p>
              IT 지식은 전문가만의 영역이 아닙니다. 모든 사람이 기술을 이해하고
              활용할 수 있어야 합니다.
            </p>
            <p>
              우리는 어려운 용어와 복잡한 설명 대신,{" "}
              <strong>누구나 공감할 수 있는 비유</strong>와
              <strong> 친근한 예시</strong>로 IT 개념을 전달합니다.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-lg bg-linear-to-r from-blue-600 to-purple-600 p-8 text-center text-white shadow-lg">
          <h2 className="mb-4 text-3xl font-bold">🚀 함께 배워요!</h2>
          <p className="mb-6 text-lg opacity-90">
            IT에 관심 있는 모든 분들을 환영합니다.
            <br />
            어려운 개념도 쉽게, 재미있게 배워봅시다!
          </p>
          <a
            href="/posts"
            className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-blue-600 transition-transform hover:scale-105"
          >
            포스트 보러가기 →
          </a>
        </section>
      </div>
    </div>
  );
}
