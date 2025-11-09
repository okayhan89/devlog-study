import PostsArchivePage from '@/components/posts/PostsArchivePage';
import { posts, categories } from '@/data/posts';

export const metadata = {
  title: '모든 포스트 | DevLog',
  description: 'IT 개념을 쉽게 설명하는 블로그의 모든 포스트를 확인해보세요.',
};

export default function PostsPage({ searchParams }) {
  return (
    <PostsArchivePage
      initialPosts={posts}
      categories={categories}
      initialSearchParams={{
        category: searchParams?.category ?? '',
        tag: searchParams?.tag ?? '',
        q: searchParams?.q ?? '',
      }}
    />
  );
}
