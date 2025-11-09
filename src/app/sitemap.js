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
    // 블로그 포스트들
    {
      url: `${baseUrl}/posts/http-vs-https`,
      lastModified: "2024-11-10",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/process-and-thread`,
      lastModified: "2024-11-10",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/what-is-rest-api`,
      lastModified: "2024-11-10",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/operating-system-for-kids`,
      lastModified: "2024-11-09",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/coding-test-roadmap`,
      lastModified: "2024-11-11",
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/posts/frontend-interview-guide`,
      lastModified: "2024-11-11",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/backend-interview-guide`,
      lastModified: "2024-11-11",
      changeFrequency: "weekly",
      priority: 0.9,
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
  ];
}
