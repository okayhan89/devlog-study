'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AdBanner } from '@/components/AdSense';

export default function PostsArchivePage({
  initialPosts,
  categories,
  initialSearchParams,
}) {
  const searchParams = useSearchParams();

  const activeCategory = (searchParams.get('category') ?? initialSearchParams.category ?? '')
    .toString()
    .trim();
  const activeTag = (searchParams.get('tag') ?? initialSearchParams.tag ?? '')
    .toString()
    .trim();
  const searchKeyword = (searchParams.get('q') ?? initialSearchParams.q ?? '')
    .toString()
    .trim();

  const normalizedCategory = activeCategory && activeCategory !== '전체' ? activeCategory : '전체';

  const filteredPosts = useMemo(() => {
    const keyword = searchKeyword.toLowerCase();
    return initialPosts.filter((post) => {
      const matchCategory =
        normalizedCategory === '전체' ? true : post.category === normalizedCategory;
      const matchTag = activeTag ? post.tags.includes(activeTag) : true;
      const matchKeyword = keyword
        ? [post.title, post.excerpt, post.tags.join(' '), post.category]
            .join(' ')
            .toLowerCase()
            .includes(keyword)
        : true;

      return matchCategory && matchTag && matchKeyword;
    });
  }, [initialPosts, normalizedCategory, activeTag, searchKeyword]);

  const headingLabel = useMemo(() => {
    if (normalizedCategory !== '전체') {
      return `${normalizedCategory} 포스트`;
    }

    if (activeTag) {
      return `#${activeTag}`;
    }

    if (searchKeyword) {
      return `"${searchKeyword}" 검색 결과`;
    }

    return '전체 포스트';
  }, [normalizedCategory, activeTag, searchKeyword]);

  const shouldShowReset =
    normalizedCategory !== '전체' || Boolean(activeTag) || Boolean(searchKeyword);

  const uniqueTags = useMemo(
    () => Array.from(new Set(initialPosts.flatMap((post) => post.tags))),
    [initialPosts]
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* 페이지 헤더 */}
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">📚 모든 포스트</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            초등학생도 이해할 수 있는 쉬운 IT 개념 설명
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3">
            {/* 상단 광고 */}
            <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <p className="mb-2 text-center text-xs text-gray-500">광고</p>
              <AdBanner />
            </div>

            {/* 현재 필터 안내 */}
            <div className="mb-6 flex flex-wrap items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-200">
              <span className="font-semibold">현재 보기:</span>
              <span>{headingLabel}</span>
              {shouldShowReset && (
                <Link
                  href="/posts"
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-600 shadow-sm transition hover:bg-blue-100 dark:bg-blue-900/40 dark:text-blue-200 dark:hover:bg-blue-900/60"
                >
                  필터 초기화
                </Link>
              )}
            </div>

            {/* 포스트 그리드 */}
            <div className="grid gap-6 md:grid-cols-2">
              {filteredPosts.length === 0 && (
                <div className="md:col-span-2 rounded-lg border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
                  조건에 맞는 포스트가 없습니다. 다른 카테고리나 검색어를 선택해보세요.
                </div>
              )}

              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className={`flex flex-col rounded-lg border p-6 shadow-sm transition-all hover:shadow-lg ${
                    post.featured
                      ? 'border-blue-300 bg-linear-to-br from-blue-50 to-purple-50 dark:border-blue-700 dark:from-blue-900/20 dark:to-purple-900/20'
                      : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'
                  }`}
                >
                  {/* 카테고리 & 날짜 */}
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
                    {post.featured && (
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                        ⭐ NEW
                      </span>
                    )}
                    <Link
                      href={`/posts?category=${encodeURIComponent(post.category)}`}
                      className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 transition hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
                    >
                      {post.category}
                    </Link>
                    <span className="text-gray-500 dark:text-gray-400">{post.date}</span>
                  </div>

                  {/* 제목 */}
                  <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    <Link href={`/posts/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                      {post.title}
                    </Link>
                  </h2>

                  {/* 요약 */}
                  <p className="mb-4 flex-1 text-gray-600 dark:text-gray-400">{post.excerpt}</p>

                  {/* 하단: 태그 & 읽기 시간 */}
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Link
                          key={tag}
                          href={`/posts?tag=${encodeURIComponent(tag)}`}
                          className="text-xs text-gray-500 transition hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-300"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime} 읽기</span>
                  </div>

                  {/* 더 읽기 버튼 */}
                  <Link
                    href={`/posts/${post.slug}`}
                    className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    자세히 보기 →
                  </Link>
                </article>
              ))}
            </div>

            {/* 페이지네이션 (향후 구현) */}
            <div className="mt-8 flex justify-center">
              <nav className="flex space-x-2">
                <button
                  disabled
                  className="cursor-not-allowed rounded-lg border border-gray-300 px-4 py-2 text-gray-400 dark:border-gray-700"
                >
                  이전
                </button>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">1</button>
                <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                  다음
                </button>
              </nav>
            </div>
          </div>

          {/* 사이드바: 카테고리 & 검색 */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* 카테고리 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">📂 카테고리</h3>
                <ul className="space-y-2">
                  {categories.map((category) => {
                    const isActive = normalizedCategory === category.name;
                    return (
                      <li key={category.name}>
                        <Link
                          href={
                            category.name === '전체'
                              ? '/posts'
                              : `/posts?category=${encodeURIComponent(category.name)}`
                          }
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                            isActive
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200'
                              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                          }`}
                        >
                          <span>{category.name}</span>
                          <span
                            className={`rounded-full px-2 py-1 text-xs ${
                              isActive
                                ? 'bg-white text-blue-600 shadow-sm dark:bg-blue-900/60 dark:text-blue-100'
                                : 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200'
                            }`}
                          >
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* 검색 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">🔍 검색</h3>
                <form className="flex gap-2" method="get">
                  {normalizedCategory !== '전체' && (
                    <input type="hidden" name="category" value={normalizedCategory} />
                  )}
                  {activeTag && <input type="hidden" name="tag" value={activeTag} />}
                  <input
                    type="text"
                    name="q"
                    defaultValue={searchKeyword}
                    placeholder="포스트 검색..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    검색
                  </button>
                </form>
              </div>

              {/* 태그 클라우드 */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">🏷️ 인기 태그</h3>
                <div className="flex flex-wrap gap-2">
                  {uniqueTags.map((tag) => {
                    const isActiveTag = activeTag === tag;
                    return (
                      <Link
                        key={tag}
                        href={`/posts?tag=${encodeURIComponent(tag)}`}
                        className={`rounded-full px-3 py-1 text-xs transition-colors ${
                          isActiveTag
                            ? 'bg-blue-600 text-white dark:bg-blue-500'
                            : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-blue-300'
                        }`}
                      >
                        #{tag}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
