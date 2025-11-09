import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO 최적화된 metadata
export const metadata = {
  metadataBase: new URL("https://devlog-study.vercel.app"),
  title: {
    default: "DevLog - IT 개발 블로그",
    template: "%s | DevLog", // 페이지별 제목 템플릿
  },
  description:
    "개발자의 성장을 기록하는 공간. JavaScript, React, Next.js, TypeScript 등 프론트엔드 개발 지식을 공유합니다.",
  keywords: [
    "개발 블로그",
    "IT 블로그",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "프론트엔드",
    "웹 개발",
  ],
  authors: [{ name: "개발자 이름" }],
  creator: "개발자 이름",
  publisher: "DevLog",

  // Open Graph (페이스북, 카카오톡 등 소셜 미디어)
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://devlog-study.vercel.app",
    title: "DevLog - IT 개발 블로그",
    description: "개발자의 성장을 기록하는 공간",
    siteName: "DevLog",
    images: [
      {
        url: "/og-image.jpg", // 대표 이미지 (1200x630px 권장)
        width: 1200,
        height: 630,
        alt: "DevLog 블로그 대표 이미지",
      },
    ],
  },

  // Twitter 카드
  twitter: {
    card: "summary_large_image",
    title: "DevLog - IT 개발 블로그",
    description: "개발자의 성장을 기록하는 공간",
    creator: "@your_twitter_handle",
    images: ["/og-image.jpg"],
  },

  // 검색엔진 최적화
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 언어 및 지역
  alternates: {
    canonical: "https://devlog-study.vercel.app",
  },

  // 추가 메타 태그
  other: {
    "google-site-verification": "lYWwhAsrRMItF1D4KBQ85YFQNHqL5ZeTceT6Tl-0vaY", // Google Search Console 인증 코드
    "naver-site-verification": "your-naver-verification-code", // 네이버 웹마스터 인증 코드
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <StructuredData />
        {/* Google AdSense 스크립트 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics (선택사항) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
