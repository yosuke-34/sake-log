'use client';

import dynamic from 'next/dynamic';

const AdBanner = dynamic(() => import('./AdBanner'), { ssr: false });

export default function AdBannerWrapper({ className = '' }: { className?: string }) {
  return <AdBanner className={className} />;
}
