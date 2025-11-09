// JSON-LD 구조화된 데이터 - 구글이 사이트를 더 잘 이해하도록 도와줍니다
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "DevLog",
    description: "개발자의 성장을 기록하는 IT 블로그",
    url: "https://devlog-study.vercel.app",
    author: {
      "@type": "Person",
      name: "개발자 이름",
    },
    publisher: {
      "@type": "Organization",
      name: "DevLog",
      logo: {
        "@type": "ImageObject",
        url: "https://devlog-study.vercel.app/logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
