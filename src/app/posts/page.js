import { Suspense } from 'react';
import PostsArchivePage from '@/components/posts/PostsArchivePage';
import { posts, categories } from '@/data/posts';

export const metadata = {
  title: '모든 포스트 | DevLog',
  description: 'IT 개념을 쉽게 설명하는 블로그의 모든 포스트를 확인해보세요.',
};

export default function PostsPage({ searchParams }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black">
          <div className="rounded-lg bg-white px-6 py-4 text-gray-600 shadow dark:bg-gray-900 dark:text-gray-300">
            포스트를 불러오는 중입니다...
          </div>
        </div>
      }
    >
      <PostsArchivePage
        initialPosts={posts}
        categories={categories}
        initialSearchParams={{
          category: searchParams?.category ?? '',
          tag: searchParams?.tag ?? '',
          q: searchParams?.q ?? '',
        }}
      />
    </Suspense>
  );
}
