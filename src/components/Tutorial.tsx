'use client';

import { useState, useEffect, useCallback } from 'react';

export interface TutorialStep {
  target: string;       // data-tutorial attribute value
  emoji: string;
  message: string;
  subMessage?: string;
}

interface TutorialProps {
  steps: TutorialStep[];
  storageKey: string;
}

// /add ページ用のデフォルトステップ（後方互換）
const ADD_PAGE_STEPS: TutorialStep[] = [
  {
    target: 'date',
    emoji: '📅',
    message: 'まずは日付を選びましょう',
    subMessage: '飲んだ日を記録します',
  },
  {
    target: 'location',
    emoji: '📍',
    message: '飲んだ場所を入力',
    subMessage: '「自宅」ボタンで簡単入力もできます',
  },
  {
    target: 'type',
    emoji: '🍶',
    message: 'お酒の種類を選んでください',
    subMessage: '銘柄はリストから選べます',
  },
  {
    target: 'save',
    emoji: '✨',
    message: '最後に「記録する」をタップ！',
    subMessage: '写真やメモも追加できます',
  },
];

export const ADD_TUTORIAL_STEPS = ADD_PAGE_STEPS;
export const ADD_TUTORIAL_STORAGE_KEY = 'sake-log-tutorial-seen';

export const STATS_TUTORIAL_STEPS: TutorialStep[] = [
  {
    target: 'stats-toggle',
    emoji: '📊',
    message: '月別と累計を切り替え',
    subMessage: '「月別サマリー」と「総飲酒量」を表示できます',
  },
  {
    target: 'stats-month',
    emoji: '📅',
    message: '← → で月を移動',
    subMessage: '過去の飲酒量もチェックできます',
  },
  {
    target: 'stats-type-breakdown',
    emoji: '🍶',
    message: '種類別の内訳を確認',
    subMessage: 'タップすると詳細が見られます',
  },
  {
    target: 'stats-daily',
    emoji: '📈',
    message: '日別の飲酒量もわかる',
    subMessage: '飲みすぎた日が一目瞭然！',
  },
];
export const STATS_TUTORIAL_STORAGE_KEY = 'sake-log-tutorial-stats-seen';

export const ENCYCLOPEDIA_TUTORIAL_STEPS: TutorialStep[] = [
  {
    target: 'encyclopedia-header',
    emoji: '📖',
    message: 'あなたの銘柄図鑑',
    subMessage: '記録したお酒がここに集まります',
  },
  {
    target: 'encyclopedia-toggle',
    emoji: '🗾',
    message: '表示モードを切り替え',
    subMessage: '都道府県別 or お酒の種類別で見られます',
  },
  {
    target: 'encyclopedia-content',
    emoji: '🍶',
    message: '地図やリストで銘柄を確認',
    subMessage: '記録が増えるほど図鑑が充実します！',
  },
];
export const ENCYCLOPEDIA_TUTORIAL_STORAGE_KEY = 'sake-log-tutorial-encyclopedia-seen';

export default function Tutorial({ steps, storageKey }: TutorialProps) {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const [arrowPosition, setArrowPosition] = useState<'top' | 'bottom'>('top');

  // 初回表示チェック
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = localStorage.getItem(storageKey);
    if (!seen) {
      // 少し遅延してからフォームが描画された後に表示
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, [storageKey]);

  // 対象要素をハイライトし吹き出しを配置
  const positionTooltip = useCallback(() => {
    const currentStep = steps[step];
    if (!currentStep) return;

    const el = document.querySelector(`[data-tutorial="${currentStep.target}"]`);
    if (!el) return;

    // スポットライト: 対象要素を暗幕の上に浮かせる
    // 前のステップの要素をリセット
    document.querySelectorAll('[data-tutorial]').forEach((e) => {
      (e as HTMLElement).style.position = '';
      (e as HTMLElement).style.zIndex = '';
      (e as HTMLElement).style.background = '';
      (e as HTMLElement).style.borderRadius = '';
      (e as HTMLElement).style.boxShadow = '';
    });

    const htmlEl = el as HTMLElement;
    htmlEl.style.position = 'relative';
    htmlEl.style.zIndex = '50';
    htmlEl.style.background = '#FFF8F0';
    htmlEl.style.borderRadius = '12px';
    htmlEl.style.boxShadow = '0 0 0 4px rgba(197,61,67,0.3), 0 4px 24px rgba(0,0,0,0.15)';

    // 位置計算（scrollIntoViewは使わず、固定配置で画面中央付近に吹き出しを表示）
    const rect = htmlEl.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    const tooltipHeight = 176;
    const leftPos = Math.max(16, Math.min(rect.left, window.innerWidth - 300));

    // 要素が画面内にある場合はその近くに表示、画面外なら中央に表示
    const isInView = rect.top >= 0 && rect.bottom <= viewportHeight;

    if (isInView && spaceBelow > tooltipHeight) {
      setArrowPosition('top');
      setTooltipStyle({
        position: 'fixed',
        left: `${leftPos}px`,
        top: `${rect.bottom + 16}px`,
        zIndex: 51,
      });
    } else if (isInView && spaceAbove > tooltipHeight) {
      setArrowPosition('bottom');
      setTooltipStyle({
        position: 'fixed',
        left: `${leftPos}px`,
        top: `${rect.top - tooltipHeight}px`,
        zIndex: 51,
      });
    } else {
      // 画面外の場合やスペースがない場合は画面中央に表示
      setArrowPosition('top');
      setTooltipStyle({
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 51,
      });
    }
  }, [step, steps]);

  // チュートリアル表示中はスクロールをロック（iOS対策）
  useEffect(() => {
    if (!visible) return;
    const scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    positionTooltip();

    const handler = () => positionTooltip();
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [visible, step, positionTooltip]);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    // スポットライトをリセット
    document.querySelectorAll('[data-tutorial]').forEach((e) => {
      (e as HTMLElement).style.position = '';
      (e as HTMLElement).style.zIndex = '';
      (e as HTMLElement).style.background = '';
      (e as HTMLElement).style.borderRadius = '';
      (e as HTMLElement).style.boxShadow = '';
    });
    setVisible(false);
    localStorage.setItem(storageKey, 'true');
  };

  if (!visible) return null;

  const currentStep = steps[step];
  const isLast = step === steps.length - 1;

  return (
    <>
      {/* 暗幕 */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={handleClose}
        style={{ animation: 'tutorialFadeIn 0.3s ease-out' }}
      />

      {/* 吹き出し */}
      <div
        style={{ ...tooltipStyle, animation: 'tutorialSlideIn 0.25s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="bg-white rounded-2xl shadow-xl p-5 max-w-[280px]"
          style={{ border: '2px solid rgba(197,61,67,0.15)' }}
        >
          {/* 矢印（上向き） */}
          {arrowPosition === 'top' && (
            <div
              className="absolute -top-2 left-8"
              style={{
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderBottom: '8px solid white',
                filter: 'drop-shadow(0 -1px 1px rgba(197,61,67,0.1))',
              }}
            />
          )}

          {/* コンテンツ */}
          <div className="text-center">
            <span className="text-3xl block mb-2">{currentStep.emoji}</span>
            <p className="font-bold text-base mb-1" style={{ color: '#3C2A1E' }}>
              {currentStep.message}
            </p>
            {currentStep.subMessage && (
              <p className="text-xs mb-4" style={{ color: 'rgba(60,42,30,0.5)' }}>
                {currentStep.subMessage}
              </p>
            )}
          </div>

          {/* ドットインジケーター + ボタン */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-1.5">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{
                    background: i === step ? '#C53D43' : 'rgba(60,42,30,0.15)',
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleClose}
                className="text-xs px-3 py-1.5 rounded-full transition-colors"
                style={{ color: 'rgba(60,42,30,0.4)' }}
              >
                スキップ
              </button>
              <button
                onClick={handleNext}
                className="text-xs px-4 py-1.5 rounded-full font-bold text-white transition-colors"
                style={{ background: '#C53D43' }}
              >
                {isLast ? 'はじめる！' : '次へ'}
              </button>
            </div>
          </div>

          {/* 矢印（下向き） */}
          {arrowPosition === 'bottom' && (
            <div
              className="absolute -bottom-2 left-8"
              style={{
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid white',
                filter: 'drop-shadow(0 1px 1px rgba(197,61,67,0.1))',
              }}
            />
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes tutorialFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes tutorialSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
