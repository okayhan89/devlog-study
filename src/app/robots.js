// robots.js - 검색엔진 크롤러에게 규칙을 알려줍니다
export default function robots() {
  const baseUrl = "https://devlog-study.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"], // 크롤링 제외할 경로
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
