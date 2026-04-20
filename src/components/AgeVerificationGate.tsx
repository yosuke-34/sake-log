'use client';

/**
 * 年齢確認ゲート
 * アルコール関連コンテンツの表示前に20歳以上確認を行う。
 * AdSenseのポリシー（アルコール関連サイトは年齢確認推奨）に対応。
 *
 * localStorage にフラグを保存し、一度確認すれば再表示しない。
 */

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'sake-log-age-verified';

export default function AgeVerificationGate() {
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setVerified(stored === 'true');
    } catch {
      setVerified(true); // localStorage不可なら表示しない
    }
  }, []);

  const handleConfirm = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // 保存失敗しても閉じる
    }
    setVerified(true);
  };

  const handleDeny = () => {
    // 未成年は外部サイトへリダイレクト（例: 政府の未成年飲酒防止ページ）
    window.location.href = 'https://www.nta.go.jp/taxes/sake/minor/20/index.htm';
  };

  // 初期化中または確認済みの場合は何も表示しない
  if (verified === null || verified === true) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        background: 'rgba(60,42,30,0.85)',
        backdropFilter: 'blur(8px)',
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div
        className="w-full max-w-md rounded-2xl p-6 shadow-2xl"
        style={{
          background: '#FFFDF5',
          border: '2px solid #C53D43',
        }}
      >
        <div className="text-center mb-4">
          <div className="text-5xl mb-2" aria-hidden>🍶</div>
          <h2
            id="age-gate-title"
            className="text-xl font-bold mb-2"
            style={{ color: '#C53D43', fontFamily: '"Zen Antique Soft", serif', letterSpacing: '0.1em' }}
          >
            年齢確認
          </h2>
          <p className="text-sm" style={{ color: '#3C2A1E' }}>
            酒ログはお酒に関する情報を掲載しています。
          </p>
        </div>

        <div
          className="rounded-lg p-4 mb-5 text-sm"
          style={{ background: 'rgba(197,61,67,0.06)', border: '1px solid rgba(197,61,67,0.15)' }}
        >
          <p className="font-bold mb-2" style={{ color: '#C53D43' }}>
            あなたは20歳以上ですか？
          </p>
          <ul className="text-xs space-y-1" style={{ color: '#3C2A1E' }}>
            <li>• 未成年者の飲酒は法律で禁止されています。</li>
            <li>• 飲酒運転は絶対にやめましょう。</li>
            <li>• 妊娠中・授乳期の飲酒は胎児・乳児に影響を与えます。</li>
            <li>• 適度な飲酒を心がけましょう。</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleConfirm}
            className="w-full py-3 rounded-lg font-bold text-sm text-white transition-colors"
            style={{ background: '#C53D43' }}
          >
            はい、20歳以上です（入る）
          </button>
          <button
            onClick={handleDeny}
            className="w-full py-3 rounded-lg font-bold text-sm transition-colors"
            style={{
              background: 'transparent',
              border: '1px solid #8B6914',
              color: '#8B6914',
            }}
          >
            いいえ、20歳未満です
          </button>
        </div>

        <p className="text-[10px] text-center mt-4" style={{ color: '#8B6914' }}>
          この確認は端末ごとに一度のみ表示されます。
        </p>
      </div>
    </div>
  );
}
