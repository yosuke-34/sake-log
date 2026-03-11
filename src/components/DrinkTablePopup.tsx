'use client';

import { useEffect, useState } from 'react';

const DRINK_EMOJI: Record<string, string> = {
  'ウィスキー': '🥃',
  'ビール': '🍺',
  'ジン': '🍸',
  '日本酒': '🍶',
  '焼酎': '🫗',
  'ワイン': '🍷',
  'サワー': '🍹',
};

// お酒の種類ごとの代表的な1杯あたりml（グラス数算出用）
const GLASS_UNIT_ML: Record<string, number> = {
  'ウィスキー': 350,
  'ビール': 435,
  'ジン': 350,
  '日本酒': 180,
  '焼酎': 60,
  'ワイン': 100,
  'サワー': 350,
};

const DRINK_MESSAGES: Record<string, string[]> = {
  'ウィスキー': ['琥珀の一杯', '大人の嗜み', '至福のひととき'],
  'ビール': ['乾杯！', 'ゴクゴク！', 'プハーッ！'],
  'ジン': ['ジュニパーの香り', 'ボタニカルな一杯', '爽やかな一杯'],
  '日本酒': ['米の恵み', '一献どうぞ', '日本の心'],
  '焼酎': ['芋の香り', '麦の旨み', '本格派！'],
  'ワイン': ['至福の一杯', '乾杯！', '芳醇な香り'],
  'サワー': ['さっぱり！', 'シュワッと！', '爽快！'],
};

interface DrinkTablePopupProps {
  drinkType: string;
  count: number;
  volume: number;
  onClose: () => void;
}

function formatVolume(ml: number): string {
  if (ml >= 1000) {
    return `${(ml / 1000).toFixed(1)}L`;
  }
  return `${ml}ml`;
}

export default function DrinkTablePopup({ drinkType, count, volume, onClose }: DrinkTablePopupProps) {
  const [visibleGlasses, setVisibleGlasses] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const emoji = DRINK_EMOJI[drinkType] || '🍶';
  const messages = DRINK_MESSAGES[drinkType] || ['乾杯！'];

  const unitMl = GLASS_UNIT_ML[drinkType] || 350;
  const glassCount = Math.max(1, Math.round(volume / unitMl));
  const message = messages[glassCount % messages.length];

  const displayCount = Math.min(glassCount, 12);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleGlasses(i);
      if (i >= displayCount) {
        clearInterval(interval);
        setTimeout(() => setShowMessage(true), 200);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [displayCount]);

  // バーカウンター上のグラス配置（パース付き：奥は小さく、手前は大きく）
  const getGlassPositions = (total: number) => {
    const positions: { x: number; y: number; scale: number; rotate: number }[] = [];
    if (total === 1) {
      positions.push({ x: 50, y: 55, scale: 1, rotate: 0 });
    } else if (total === 2) {
      positions.push({ x: 35, y: 45, scale: 0.9, rotate: -3 });
      positions.push({ x: 65, y: 60, scale: 1.05, rotate: 3 });
    } else if (total === 3) {
      positions.push({ x: 50, y: 30, scale: 0.8, rotate: 0 });
      positions.push({ x: 30, y: 65, scale: 1.05, rotate: -5 });
      positions.push({ x: 70, y: 60, scale: 1, rotate: 4 });
    } else if (total <= 6) {
      // 奥の列（小さめ）
      const topRow = Math.ceil(total / 2);
      const botRow = total - topRow;
      for (let i = 0; i < topRow; i++) {
        const x = topRow === 1 ? 50 : 25 + (i * 50) / (topRow - 1);
        positions.push({ x, y: 28 + (i % 2) * 6, scale: 0.75 + (i % 2) * 0.05, rotate: (i - (topRow - 1) / 2) * 4 });
      }
      // 手前の列（大きめ）
      for (let i = 0; i < botRow; i++) {
        const x = botRow === 1 ? 50 : 28 + (i * 44) / (botRow - 1);
        positions.push({ x, y: 65 + (i % 2) * 5, scale: 1 + (i % 2) * 0.05, rotate: (i - (botRow - 1) / 2) * 4 });
      }
    } else {
      // 3列配置（奥→中→手前で徐々に大きく）
      const rows = [Math.ceil(total / 3), Math.ceil((total - Math.ceil(total / 3)) / 2), total - Math.ceil(total / 3) - Math.ceil((total - Math.ceil(total / 3)) / 2)];
      const yBases = [20, 48, 75];
      const scales = [0.7, 0.85, 1.05];
      for (let row = 0; row < 3; row++) {
        const n = rows[row];
        for (let i = 0; i < n; i++) {
          const x = n === 1 ? 50 : 18 + (i * 64) / (n - 1);
          positions.push({
            x,
            y: yBases[row] + (i % 2) * 5,
            scale: scales[row] + (i % 2) * 0.03,
            rotate: (i - (n - 1) / 2) * 4,
          });
        }
      }
    }
    return positions;
  };

  const positions = getGlassPositions(displayCount);

  return (
    <>
      <style>{`
        @keyframes glassPopIn {
          0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 0; }
          50% { transform: translate(-50%, -50%) scale(calc(var(--s) * 1.25)) rotate(var(--rot)); opacity: 1; }
          70% { transform: translate(-50%, -50%) scale(calc(var(--s) * 0.92)) rotate(var(--rot)); }
          100% { transform: translate(-50%, -50%) scale(var(--s)) rotate(var(--rot)); opacity: 1; }
        }
        @keyframes messageSlideIn {
          0% { transform: translateY(-10px) scale(0.8); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes cardReveal {
          0% { transform: translateY(30px) scale(0.95); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes overlayFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes shimmer {
          0% { opacity: 0.03; }
          50% { opacity: 0.08; }
          100% { opacity: 0.03; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        .drink-popup-overlay {
          animation: overlayFadeIn 0.25s ease-out;
        }
        .drink-popup-card {
          animation: cardReveal 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-item {
          animation: glassPopIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        .message-pop {
          animation: messageSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .bar-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .ambient-glow {
          animation: glowPulse 4s ease-in-out infinite;
        }
      `}</style>
      <div
        className="drink-popup-overlay fixed inset-0 z-50 flex items-center justify-center p-5"
        style={{ backgroundColor: 'rgba(0,0,0,0.65)' }}
        onClick={onClose}
      >
        <div
          className="drink-popup-card w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ヘッダー（ダーク系バー風） */}
          <div
            className="px-5 pt-5 pb-3 text-center relative"
            style={{ background: 'linear-gradient(180deg, #1a1412 0%, #2a2018 100%)' }}
          >
            {/* 間接照明風グロー */}
            <div
              className="ambient-glow absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(255,180,80,0.4) 0%, transparent 70%)' }}
            />
            <p className="text-4xl mb-1 relative" style={{ filter: 'drop-shadow(0 2px 8px rgba(255,180,80,0.3))' }}>{emoji}</p>
            <p className="text-base font-bold text-amber-100/90 relative">{drinkType}</p>
            <p className="text-2xl font-bold relative" style={{ color: '#E8A87C' }}>{formatVolume(volume)}</p>
            <p className="text-xs relative" style={{ color: 'rgba(255,255,255,0.45)' }}>{glassCount}杯分（{count}回記録）</p>
          </div>

          {/* バーカウンター（パース付き斜め上視点） */}
          <div
            className="relative overflow-hidden"
            style={{
              height: '240px',
              perspective: '600px',
            }}
          >
            {/* カウンター天板（パース変形） */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, #1a1412 0%, #2C1E14 8%, #3D2B1A 20%, #4A3423 50%, #3D2B1A 80%, #2C1E14 100%)',
              }}
            >
              {/* 木目テクスチャ */}
              <div className="absolute inset-0">
                {[8, 18, 30, 42, 55, 68, 80, 92].map((top, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0"
                    style={{
                      top: `${top}%`,
                      height: '1px',
                      background: `linear-gradient(90deg, transparent ${5 + i * 3}%, rgba(80,55,30,0.4) ${20 + i * 5}%, rgba(80,55,30,0.2) 50%, rgba(80,55,30,0.35) ${65 + i * 3}%, transparent ${90 - i * 2}%)`,
                    }}
                  />
                ))}
              </div>

              {/* 光の反射（斜めハイライト） */}
              <div
                className="bar-shimmer absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, transparent 20%, rgba(255,240,200,0.06) 35%, transparent 50%, rgba(255,240,200,0.04) 65%, transparent 80%)',
                }}
              />

              {/* カウンターの奥のエッジライン */}
              <div
                className="absolute left-0 right-0"
                style={{
                  top: '6%',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent 5%, rgba(255,200,120,0.15) 30%, rgba(255,200,120,0.2) 50%, rgba(255,200,120,0.15) 70%, transparent 95%)',
                }}
              />

              {/* 手前のカウンターエッジ（明るい） */}
              <div
                className="absolute left-0 right-0 bottom-0"
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, rgba(60,40,20,1) 0%, rgba(90,65,35,1) 30%, rgba(100,72,40,1) 50%, rgba(90,65,35,1) 70%, rgba(60,40,20,1) 100%)',
                }}
              />
            </div>

            {/* ボトルのシルエット（奥の棚） */}
            <div className="absolute top-0 left-0 right-0 h-8 flex justify-center items-end gap-3 opacity-[0.12]">
              {['▐█▌', '▐█▌', '▐██▌', '▐█▌', '▐██▌', '▐█▌'].map((b, i) => (
                <div
                  key={i}
                  className="text-amber-200"
                  style={{
                    fontSize: `${10 + (i % 3) * 2}px`,
                    transform: `scaleY(${1.2 + (i % 2) * 0.5})`,
                  }}
                >
                  {b}
                </div>
              ))}
            </div>

            {/* グラス影＋グラス本体 */}
            {positions.map((pos, i) => (
              <div
                key={i}
                className="glass-item absolute"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  fontSize: `${(displayCount <= 4 ? 2.8 : displayCount <= 8 ? 2.2 : 1.8) * pos.scale}rem`,
                  animationDelay: `${i * 150}ms`,
                  ['--rot' as string]: `${pos.rotate}deg`,
                  ['--s' as string]: `${pos.scale}`,
                  visibility: i < visibleGlasses ? 'visible' : 'hidden',
                  filter: `drop-shadow(0 ${4 * pos.scale}px ${8 * pos.scale}px rgba(0,0,0,0.5)) drop-shadow(0 0 ${12 * pos.scale}px rgba(255,180,80,0.08))`,
                  zIndex: Math.round(pos.y),
                }}
              >
                {emoji}
              </div>
            ))}

            {/* 間接照明の反射（上からの光） */}
            <div
              className="ambient-glow absolute pointer-events-none"
              style={{
                top: '15%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '30%',
                background: 'radial-gradient(ellipse, rgba(255,200,120,0.06) 0%, transparent 70%)',
              }}
            />

            {/* メッセージ */}
            {showMessage && (
              <div
                className="message-pop absolute top-3 right-3"
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '16px',
                  padding: '4px 14px',
                  border: '1px solid rgba(255,180,80,0.2)',
                }}
              >
                <span className="text-sm font-bold" style={{ color: '#E8A87C' }}>{message}</span>
              </div>
            )}
          </div>

          {/* フッター */}
          <button
            onClick={onClose}
            className="w-full px-5 py-3 text-center text-sm transition-colors"
            style={{
              background: '#1a1412',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            とじる
          </button>
        </div>
      </div>
    </>
  );
}
