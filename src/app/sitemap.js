// sitemap.js - 구글 검색엔진에 사이트 구조를 알려줍니다
export default function sitemap() {
  const baseUrl = "https://devlog-study.vercel.app";

  // 현재 날짜
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // 여기에 블로그 포스트들을 동적으로 추가할 수 있습니다
    // 예: posts.map(post => ({ url: `${baseUrl}/posts/${post.slug}`, ... }))
  ];
}
