'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const VISITED_KEY = 'sake-log-visited';

/**
 * トップページ用のハイブリッドルーター。
 * - 初回訪問: ランディングページを表示（return null で透過）
 * - 2回目以降: /calendar に自動リダイレクト
 *
 * SSR側のランディングHTMLはGoogleクローラー向けに配信されるため、
 * SEO的にはコンテンツリッチなページとして認識される。
 * クライアントでlocalStorageを読んでからリダイレクトを判定。
 */
export default function FirstVisitRouter() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    try {
      const hasVisited = localStorage.getItem(VISITED_KEY);
      if (hasVisited === 'true') {
        setIsRedirecting(true);
        router.replace('/calendar');
      } else {
        localStorage.setItem(VISITED_KEY, 'true');
      }
    } catch {
      // localStorage が使えない環境（プライベートモード等）はランディングを表示
    }
  }, [router]);

  if (isRedirecting) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{ background: 'rgba(255,253,245,0.95)' }}
        aria-label="読み込み中"
      >
        <div className="text-center">
          <div className="text-3xl mb-2">🍶</div>
          <div className="text-sm text-muted">読み込み中...</div>
        </div>
      </div>
    );
  }

  return null;
}
