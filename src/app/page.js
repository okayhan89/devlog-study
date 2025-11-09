import Sidebar from "@/components/Sidebar";
import { AdBanner, AdInArticle } from "@/components/AdSense";

export default function Home() {
  // 샘플 블로그 포스트 데이터
  const posts = [
    {
      id: 1,
      title: "Next.js 14와 App Router 완벽 가이드",
      excerpt:
        "Next.js 14의 새로운 기능과 App Router를 활용한 모던 웹 개발 방법을 알아봅니다.",
      date: "2024. 3. 15",
      category: "Next.js",
      readTime: "5분",
      tags: ["Next.js", "React", "Frontend"],
    },
    {
      id: 2,
      title: "React Server Components 이해하기",
      excerpt:
        "React Server Components의 동작 원리와 실전 활용법을 상세히 다룹니다.",
      date: "2024. 3. 10",
      category: "React",
      readTime: "8분",
      tags: ["React", "Server Components"],
    },
    {
      id: 3,
      title: "TypeScript 제네릭 마스터하기",
      excerpt:
        "TypeScript의 제네릭을 활용하여 타입 안정성을 높이는 방법을 알아봅니다.",
      date: "2024. 3. 5",
      category: "TypeScript",
      readTime: "6분",
      tags: ["TypeScript", "Programming"],
    },
    {
      id: 4,
      title: "Tailwind CSS로 반응형 디자인 만들기",
      excerpt:
        "Tailwind CSS의 유틸리티 클래스를 활용한 효율적인 반응형 웹 디자인 구현 방법",
      date: "2024. 3. 1",
      category: "CSS",
      readTime: "4분",
      tags: ["CSS", "Tailwind", "Frontend"],
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* 메인 콘텐츠 영역 */}
          <div className="lg:col-span-2">
            {/* 환영 배너 */}
            <div className="mb-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white shadow-lg">
              <h1 className="mb-2 text-3xl font-bold">환영합니다! 👋</h1>
              <p className="text-lg opacity-90">
                개발자의 성장과 학습을 기록하는 블로그입니다.
              </p>
            </div>

            {/* 상단 배너 광고 */}
            <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <p className="mb-2 text-center text-xs text-gray-500 dark:text-gray-500">
                광고
              </p>
              <AdBanner />
            </div>

            {/* 포스트 리스트 */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                최신 포스트
              </h2>

              {posts.map((post, index) => (
                <div key={post.id}>
                  {/* 두 번째 포스트 뒤에 중간 광고 삽입 */}
                  {index === 1 && (
                    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                      <p className="mb-2 text-center text-xs text-gray-500 dark:text-gray-500">
                        광고
                      </p>
                      <AdInArticle />
                    </div>
                  )}

                  <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                    <div className="mb-3 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} 읽기</span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                      <a href="#">{post.title}</a>
                    </h3>

                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-500 dark:text-gray-500"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#"
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        더 읽기 →
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="mt-8 flex justify-center">
              <nav className="flex space-x-2">
                <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                  이전
                </button>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  1
                </button>
                <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                  2
                </button>
                <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                  3
                </button>
                <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                  다음
                </button>
              </nav>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
