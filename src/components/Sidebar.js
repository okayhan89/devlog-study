import Link from "next/link";
import { AdSidebar } from "./AdSense";
import { categories as categoryData, posts } from "@/data/posts";

export default function Sidebar() {
  const categories = categoryData;

  const tagCounts = posts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  const tags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)
    .slice(0, 12);

  return (
    <aside className="space-y-6">
      {/* 프로필 카드 */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-24 w-24 rounded-full bg-blue-600 p-1">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-900">
              <span className="text-3xl font-bold text-gray-700 dark:text-gray-300">
                DEV
              </span>
            </div>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
            개발자 이름
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            풀스택 개발자 / IT 블로거
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">
            새로운 기술을 배우고 공유하는 것을 좋아합니다.
          </p>

          {/* 소셜 링크 */}
          <div className="mt-4 flex space-x-3">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 카테고리 */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
          카테고리
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={
                  category.name === "전체"
                    ? "/posts"
                    : `/posts?category=${encodeURIComponent(category.name)}`
                }
                className="flex items-center justify-between text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <span>{category.name}</span>
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 태그 */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
          태그
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/posts?tag=${encodeURIComponent(tag)}`}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-blue-300"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* 광고 영역 */}
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-2 text-center text-xs text-gray-500 dark:text-gray-500">
          광고
        </p>
        <AdSidebar />
      </div>
    </aside>
  );
}
