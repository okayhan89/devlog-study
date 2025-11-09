export const metadata = {
  title: "연락 | DevLog",
  description: "DevLog에 문의하거나 피드백을 보내주세요.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="container mx-auto max-w-3xl px-4 py-12">
        {/* 헤더 */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
            📬 연락하기
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            궁금한 점이나 제안사항이 있으신가요?
          </p>
        </div>

        {/* 연락 방법 */}
        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 text-5xl">📧</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                이메일
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                이메일로 문의해주세요
              </p>
              <a
                href="mailto:contact@devlog.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                contact@devlog.com
              </a>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 text-5xl">💬</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                소셜 미디어
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                SNS로 소통해요
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 문의 폼 */}
        <section className="rounded-lg border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            📝 문의하기
          </h2>

          <form className="space-y-6">
            {/* 이름 */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="홍길동"
                required
              />
            </div>

            {/* 이메일 */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="example@email.com"
                required
              />
            </div>

            {/* 제목 */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                제목
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="문의 제목을 입력하세요"
                required
              />
            </div>

            {/* 메시지 */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="문의 내용을 자세히 적어주세요"
                required
              ></textarea>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              보내기 📤
            </button>
          </form>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            ❓ 자주 묻는 질문
          </h2>
          <div className="space-y-4">
            <details className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white">
                포스트를 어떻게 요청하나요?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                위 문의 폼을 통해 원하는 주제를 제안해주세요! 여러분의 요청을
                적극 반영하여 포스트를 작성하겠습니다.
              </p>
            </details>

            <details className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white">
                광고 문의는 어떻게 하나요?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                이메일(contact@devlog.com)로 광고 관련 문의를 보내주세요. 협업
                제안도 환영합니다!
              </p>
            </details>

            <details className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white">
                오류나 개선사항을 발견했어요
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                포스트의 오류나 개선사항은 언제든 알려주세요! 더 정확하고 좋은
                콘텐츠를 만드는 데 큰 도움이 됩니다.
              </p>
            </details>

            <details className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white">
                응답은 얼마나 걸리나요?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                보통 1-3일 이내에 답변드립니다. 주말이나 공휴일에는 조금 더
                시간이 걸릴 수 있습니다.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-lg bg-linear-to-r from-green-500 to-blue-600 p-8 text-center text-white shadow-lg">
          <h2 className="mb-4 text-3xl font-bold">💬 언제든 연락주세요!</h2>
          <p className="text-lg opacity-90">
            여러분의 질문과 제안이 DevLog를 더 좋게 만듭니다.
          </p>
        </section>
      </div>
    </div>
  );
}
