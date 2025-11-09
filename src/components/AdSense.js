'use client';

import { useEffect } from 'react';

// Google AdSense 광고 컴포넌트
export default function AdSense({ 
  adSlot, 
  adFormat = 'auto',
  fullWidthResponsive = true,
  adStyle = {}
}) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className="my-4 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
          ...adStyle
        }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Google AdSense에서 받은 클라이언트 ID로 변경
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
}

// 특정 크기의 광고 컴포넌트들
export function AdBanner() {
  return (
    <AdSense 
      adSlot="1234567890" // 실제 슬롯 ID로 변경
      adFormat="horizontal"
      adStyle={{ 
        display: 'inline-block',
        width: '728px',
        height: '90px'
      }}
    />
  );
}

export function AdSidebar() {
  return (
    <AdSense 
      adSlot="0987654321" // 실제 슬롯 ID로 변경
      adFormat="vertical"
      adStyle={{ 
        display: 'inline-block',
        width: '300px',
        height: '600px'
      }}
    />
  );
}

export function AdInArticle() {
  return (
    <AdSense 
      adSlot="1122334455" // 실제 슬롯 ID로 변경
      adFormat="fluid"
      adStyle={{ 
        display: 'block',
        textAlign: 'center'
      }}
    />
  );
}

