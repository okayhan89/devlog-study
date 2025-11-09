'use client';

import { useEffect, useState } from 'react';

// Google AdSense 광고 컴포넌트
export default function AdSense({ 
  adSlot, 
  adFormat = 'auto',
  fullWidthResponsive = true,
  adStyle = {}
}) {
  const [isAdSenseReady, setIsAdSenseReady] = useState(false);
  
  // AdSense 클라이언트 ID가 실제 값인지 확인
  const adClient = "ca-pub-XXXXXXXXXXXXXXXX";
  const isRealAdClient = adClient !== "ca-pub-XXXXXXXXXXXXXXXX";

  useEffect(() => {
    // AdSense가 승인되고 실제 클라이언트 ID가 있을 때만 실행
    if (isRealAdClient) {
      try {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        setIsAdSenseReady(true);
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, [isRealAdClient]);

  // AdSense가 아직 설정되지 않았으면 플레이스홀더 표시
  if (!isRealAdClient) {
    return (
      <div className="my-4 flex min-w-[250px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
        <div className="text-center">
          <div className="mb-2 text-3xl">📢</div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            광고 영역
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
            AdSense 승인 후 광고가 표시됩니다
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-4 flex min-w-[250px] justify-center">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
          minWidth: '250px',
          ...adStyle
        }}
        data-ad-client={adClient}
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
        minWidth: '320px',
        maxWidth: '728px',
        width: '100%',
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
        minWidth: '250px',
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
        textAlign: 'center',
        minWidth: '250px',
        width: '100%'
      }}
    />
  );
}

