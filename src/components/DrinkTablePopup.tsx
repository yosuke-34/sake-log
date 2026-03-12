'use client';

import { useEffect, useState } from 'react';

// ヘッダー用の絵文字（大きいアイコン）
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

// SVGドリンクアイコン（バーカウンター上のグラス表示用）
const DrinkSVG: Record<string, (props: { size: number; glowColor: string }) => JSX.Element> = {
  'ウィスキー': ({ size, glowColor }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="whisky-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4890A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B5E0A" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="whisky-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
        </linearGradient>
      </defs>
      <filter id="w-glow"><feGaussianBlur stdDeviation="1.5" /><feComposite in="SourceGraphic" /></filter>
      <rect x="8" y="10" width="24" height="20" rx="3" fill="url(#whisky-glass)" stroke="rgba(255,220,150,0.3)" strokeWidth="0.8" />
      <rect x="10" y="16" width="20" height="13" rx="2" fill="url(#whisky-liquid)" />
      <rect x="10" y="16" width="20" height="3" rx="1" fill="rgba(255,200,100,0.3)" />
      <circle cx="20" cy="24" r="3" fill={glowColor} opacity="0.15" filter="url(#w-glow)" />
    </svg>
  ),
  'ビール': ({ size, glowColor }) => (
    <svg width={size} height={size} viewBox="0 0 40 44" fill="none">
      <defs>
        <linearGradient id="beer-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C842" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#C8960A" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="beer-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
        </linearGradient>
      </defs>
      <path d="M10 6 L8 38 Q8 40 10 40 L30 40 Q32 40 32 38 L30 6 Z" fill="url(#beer-glass)" stroke="rgba(255,220,100,0.25)" strokeWidth="0.8" />
      <path d="M10.5 14 L9 37 Q9 39 10.5 39 L29.5 39 Q31 39 31 37 L29.5 14 Z" fill="url(#beer-liquid)" />
      <path d="M10.5 14 L29.5 14 L29.2 18 L10.8 18 Z" fill="rgba(255,240,180,0.35)" />
      <ellipse cx="20" cy="10" rx="10" ry="4" fill="rgba(255,250,240,0.85)" />
      <ellipse cx="20" cy="10" rx="8" ry="3" fill="rgba(255,255,255,0.6)" />
      <circle cx="15" cy="9" r="1.5" fill="rgba(255,255,255,0.5)" />
      <circle cx="23" cy="10" r="1" fill="rgba(255,255,255,0.4)" />
      <circle cx="20" cy="26" r="4" fill={glowColor} opacity="0.12" />
    </svg>
  ),
  'ジン': ({ size, glowColor }) => (
    <svg width={size} height={size} viewBox="0 0 40 44" fill="none">
      <defs>
        <linearGradient id="gin-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(180,220,255,0.5)" />
          <stop offset="100%" stopColor="rgba(140,200,240,0.7)" />
        </linearGradient>
      </defs>
      <path d="M14 4 L26 4 L32 22 L28 22 Q20 24 12 22 L8 22 Z" fill="rgba(255,255,255,0.12)" stroke="rgba(180,220,255,0.3)" strokeWidth="0.8" />
      <path d="M15 8 L25 8 L30 20 L10 20 Z" fill="url(#gin-liquid)" />
      <line x1="20" y1="22" x2="20" y2="36" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <ellipse cx="20" cy="38" rx="8" ry="2.5" fill="rgba(255,255,255,0.12)" stroke="rgba(180,220,255,0.25)" strokeWidth="0.8" />
      <circle cx="16" cy="16" r="1.5" fill="rgba(100,200,100,0.6)" />
      <circle cx="20" cy="14" r="4" fill={glowColor} opacity="0.1" />
    </svg>
  ),
  '日本酒': ({ size, glowColor }) => (
    <svg width={size} height={size} viewBox="0 0 40 36" fill="none">
      <defs>
        <linearGradient id="sake-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="100%" stopColor="rgba(220,230,255,0.7)" />
        </linearGradient>
      </defs>
      <path d="M8 8 Q8 4 12 4 L28 4 Q32 4 32 8 L30 30 Q30 34 26 34 L14 34 Q10 34 10 30 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(200,210,240,0.3)" strokeWidth="0.8" />
      <path d="M10 14 L30 14 L29 29 Q29 33 26 33 L14 33 Q11 33 11 29 Z" fill="url(#sake-liquid)" />
      <path d="M10 14 L30 14 L29.5 17 L10.5 17 Z" fill="rgba(255,255,255,0.25)" />
      <circle cx="20" cy="24" r="4" fill={glowColor} opacity="0.1" />
    </svg>
  ),
  '焼酎': ({ size, glowColor }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="shochu-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
          <stop offset="100%" stopColor="rgba(200,220,240,0.55)" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="24" height="24" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(200,220,255,0.25)" strokeWidth="0.8" />
      <rect x="10" y="16" width="20" height="15" rx="2" fill="url(#shochu-liquid)" />
      <rect x="10" y="16" width="20" height="3" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="12" y="10" width="5" height="5" rx="1" fill="rgba(200,230,255,0.3)" />
      <rect x="19" y="11" width="4" height="4" rx="1" fill="rgba(200,230,255,0.2)" />
      <circle cx="20" cy="24" r="3" fill={glowColor} opacity="0.12" />
    </svg>
  ),
  'ワイン': ({ size, glowColor }) => (
    <svg width={size} height={size} viewBox="0 0 40 48" fill="none">
      <defs>
        <linearGradient id="wine-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B1A4A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#5C0A2E" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path d="M12 4 L28 4 L30 18 Q30 26 20 26 Q10 26 10 18 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(200,150,180,0.3)" strokeWidth="0.8" />
      <path d="M13 10 L27 10 L28.5 17 Q28.5 24 20 24 Q11.5 24 11.5 17 Z" fill="url(#wine-liquid)" />
      <path d="M13 10 L27 10 L27.5 13 L12.5 13 Z" fill="rgba(200,100,150,0.25)" />
      <line x1="20" y1="26" x2="20" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <ellipse cx="20" cy="42" rx="8" ry="2.5" fill="rgba(255,255,255,0.1)" stroke="rgba(200,150,180,0.25)" strokeWidth="0.8" />
      <circle cx="20" cy="17" r="4" fill={glowColor} opacity="0.12" />
    </svg>
  ),
  'サワー': ({ size, glowColor }) => (
    <svg width={size} height={size} viewBox="0 0 40 48" fill="none">
      <defs>
        <linearGradient id="sour-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE066" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#FF9944" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF6633" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M11 6 L29 6 L27 38 Q27 40 25 40 L15 40 Q13 40 13 38 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,200,100,0.25)" strokeWidth="0.8" />
      <path d="M12 12 L28 12 L26.5 37 Q26.5 39 25 39 L15 39 Q13.5 39 13.5 37 Z" fill="url(#sour-liquid)" />
      <circle cx="16" cy="20" r="2" fill="rgba(255,255,255,0.25)" />
      <circle cx="22" cy="24" r="1.5" fill="rgba(255,255,255,0.2)" />
      <circle cx="18" cy="28" r="1.8" fill="rgba(255,255,255,0.15)" />
      <line x1="22" y1="2" x2="30" y2="0" stroke="rgba(255,200,100,0.5)" strokeWidth="1" />
      <circle cx="31" cy="0" r="3" fill="rgba(255,200,50,0.5)" />
      <circle cx="20" cy="24" r="4" fill={glowColor} opacity="0.1" />
    </svg>
  ),
};

// グローカラー
const GLOW_COLORS: Record<string, string> = {
  'ウィスキー': 'rgba(255,180,60,1)',
  'ビール': 'rgba(255,210,80,1)',
  'ジン': 'rgba(140,200,255,1)',
  '日本酒': 'rgba(200,210,255,1)',
  '焼酎': 'rgba(180,210,240,1)',
  'ワイン': 'rgba(200,100,150,1)',
  'サワー': 'rgba(255,180,80,1)',
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
  const glowColor = GLOW_COLORS[drinkType] || 'rgba(255,180,80,1)';

  const unitMl = GLASS_UNIT_ML[drinkType] || 350;
  const glassCount = Math.max(1, Math.round(volume / unitMl));
  const message = messages[glassCount % messages.length];

  const displayCount = Math.min(glassCount, 30);

  useEffect(() => {
    let i = 0;
    const delay = displayCount <= 10 ? 120 : displayCount <= 20 ? 60 : 40;
    const interval = setInterval(() => {
      i++;
      setVisibleGlasses(i);
      if (i >= displayCount) {
        clearInterval(interval);
        setTimeout(() => setShowMessage(true), 200);
      }
    }, delay);
    return () => clearInterval(interval);
  }, [displayCount]);

  // バーカウンター上のグラス配置（整列グリッド：10個で1列、奥に列を追加）
  const getGlassPositions = (total: number) => {
    const positions: { x: number; y: number; scale: number }[] = [];
    const perRow = 10;
    const rowCount = Math.ceil(total / perRow);

    const rowConfigs = (() => {
      if (rowCount === 1) {
        return [{ yBase: 52, scale: 1.0 }];
      } else if (rowCount === 2) {
        return [
          { yBase: 28, scale: 0.78 },
          { yBase: 68, scale: 1.0 },
        ];
      } else {
        return [
          { yBase: 16, scale: 0.65 },
          { yBase: 44, scale: 0.82 },
          { yBase: 72, scale: 1.0 },
        ];
      }
    })();

    let placed = 0;
    for (let row = 0; row < rowCount; row++) {
      const n = Math.min(perRow, total - placed);
      const config = rowConfigs[row];
      // 詰めた配置（間隔を狭く）
      const itemWidth = 9; // 各グラスの占める幅（%）
      const totalWidth = n * itemWidth;
      const startX = (100 - totalWidth) / 2 + itemWidth / 2;
      for (let i = 0; i < n; i++) {
        const x = n === 1 ? 50 : startX + (i * (totalWidth - itemWidth)) / (n - 1);
        positions.push({
          x,
          y: config.yBase,
          scale: config.scale,
        });
        placed++;
      }
    }
    return positions;
  };

  const positions = getGlassPositions(displayCount);

  // グラスサイズの計算
  const getGlassSize = () => {
    if (displayCount <= 3) return 52;
    if (displayCount <= 5) return 44;
    if (displayCount <= 10) return 36;
    if (displayCount <= 20) return 30;
    return 26;
  };
  const baseGlassSize = getGlassSize();

  const RenderDrinkIcon = DrinkSVG[drinkType];

  return (
    <>
      <style>{`
        @keyframes glassPopIn {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          50% { transform: translate(-50%, -50%) scale(calc(var(--s) * 1.2)); opacity: 1; }
          70% { transform: translate(-50%, -50%) scale(calc(var(--s) * 0.93)); }
          100% { transform: translate(-50%, -50%) scale(var(--s)); opacity: 1; }
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
          0% { opacity: 0.04; }
          50% { opacity: 0.1; }
          100% { opacity: 0.04; }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translate(-50%, -50%) scale(var(--s)); }
          50% { transform: translate(-50%, calc(-50% - 2px)) scale(var(--s)); }
        }
        .drink-popup-overlay {
          animation: overlayFadeIn 0.25s ease-out;
        }
        .drink-popup-card {
          animation: cardReveal 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-item {
          animation: glassPopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        .glass-item.visible {
          animation: glassPopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     gentleFloat 3s ease-in-out infinite 0.5s;
        }
        .message-pop {
          animation: messageSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .bar-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
      <div
        className="drink-popup-overlay fixed inset-0 z-50 flex items-center justify-center p-5"
        style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
        onClick={onClose}
      >
        <div
          className="drink-popup-card w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,0,0,0.2)' }}
        >
          {/* ヘッダー */}
          <div
            className="px-5 pt-5 pb-3 text-center relative"
            style={{ background: 'linear-gradient(180deg, #2A1E16 0%, #342618 100%)' }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-16 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(255,200,120,0.15) 0%, transparent 70%)' }}
            />
            <p className="text-4xl mb-1 relative" style={{ filter: 'drop-shadow(0 2px 12px rgba(255,180,80,0.3))' }}>{emoji}</p>
            <p className="text-base font-bold relative tracking-wider" style={{ color: '#E8D5C4' }}>{drinkType}</p>
            <p className="text-3xl font-bold relative mt-1" style={{ color: '#E8A87C', textShadow: '0 0 20px rgba(232,168,124,0.2)' }}>{formatVolume(volume)}</p>
            <p className="text-xs relative mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{glassCount}杯分（{count}回記録）</p>
          </div>

          {/* グラス陳列エリア */}
          <div
            className="relative overflow-hidden"
            style={{ height: '260px', perspective: '600px' }}
          >
            {/* カウンター背景（ダークウォールナット） */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, #2A1E16 0%, #3D2E20 8%, #4A3828 20%, #58442E 40%, #4A3828 60%, #3D2E20 80%, #352618 92%, #3D2E20 100%)',
              }}
            >
              {/* 木目テクスチャ */}
              <div className="absolute inset-0">
                {[6, 14, 24, 36, 48, 60, 72, 84, 94].map((top, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0"
                    style={{
                      top: `${top}%`,
                      height: '1px',
                      background: `linear-gradient(90deg, transparent ${3 + i * 2}%, rgba(120,90,50,0.25) ${15 + i * 4}%, rgba(120,90,50,0.12) 50%, rgba(120,90,50,0.2) ${70 + i * 2}%, transparent ${92 - i * 2}%)`,
                    }}
                  />
                ))}
              </div>

              {/* 光の反射 */}
              <div
                className="bar-shimmer absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, transparent 15%, rgba(255,240,200,0.06) 30%, transparent 45%, rgba(255,240,200,0.05) 60%, transparent 75%)',
                }}
              />

              {/* カウンターの奥のエッジライン */}
              <div
                className="absolute left-0 right-0"
                style={{
                  top: '4%',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent 5%, rgba(255,210,140,0.1) 30%, rgba(255,210,140,0.15) 50%, rgba(255,210,140,0.1) 70%, transparent 95%)',
                }}
              />

              {/* 手前のカウンターエッジ */}
              <div
                className="absolute left-0 right-0 bottom-0"
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, rgba(60,44,24,1) 0%, rgba(90,68,40,1) 30%, rgba(105,80,48,1) 50%, rgba(90,68,40,1) 70%, rgba(60,44,24,1) 100%)',
                }}
              />
            </div>

            {/* ボトルのシルエット（奥の棚） */}
            <div className="absolute top-0 left-0 right-0 h-6 flex justify-center items-end gap-4 opacity-[0.06]">
              {[12, 16, 10, 14, 11, 15, 13].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: `${4 + (i % 2) * 2}px`,
                    height: `${h}px`,
                    background: 'linear-gradient(180deg, rgba(200,160,80,0.8), rgba(200,160,80,0.3))',
                    borderRadius: '1px 1px 0 0',
                  }}
                />
              ))}
            </div>

            {/* グラス本体（SVG） */}
            {positions.map((pos, i) => (
              <div
                key={i}
                className={`glass-item absolute ${i < visibleGlasses ? 'visible' : ''}`}
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  animationDelay: `${i * (displayCount <= 10 ? 120 : displayCount <= 20 ? 60 : 40)}ms`,
                  ['--s' as string]: `${pos.scale}`,
                  ['--rot' as string]: '0deg',
                  visibility: i < visibleGlasses ? 'visible' : 'hidden',
                  filter: `drop-shadow(0 ${3 * pos.scale}px ${5 * pos.scale}px rgba(0,0,0,0.45))`,
                  zIndex: Math.round(pos.y),
                }}
              >
                {RenderDrinkIcon ? (
                  <RenderDrinkIcon size={Math.round(baseGlassSize * pos.scale)} glowColor={glowColor} />
                ) : (
                  <span style={{ fontSize: `${baseGlassSize * pos.scale * 0.6}px` }}>{emoji}</span>
                )}
              </div>
            ))}

            {/* 間接照明の反射 */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: '8%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '70%',
                height: '35%',
                background: 'radial-gradient(ellipse, rgba(255,200,120,0.06) 0%, transparent 70%)',
              }}
            />

            {/* グラスの反射光（カウンター上） */}
            {positions.slice(0, Math.min(visibleGlasses, positions.length)).map((pos, i) => {
              const lastRowY = positions[positions.length - 1]?.y ?? 50;
              if (pos.y < lastRowY - 5) return null;
              return (
                <div
                  key={`glow-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y + 8}%`,
                    width: `${16 * pos.scale}px`,
                    height: `${4 * pos.scale}px`,
                    transform: 'translateX(-50%)',
                    background: `radial-gradient(ellipse, ${glowColor.replace(',1)', ',0.1)')} 0%, transparent 70%)`,
                    zIndex: 1,
                  }}
                />
              );
            })}

            {/* メッセージ */}
            {showMessage && (
              <div
                className="message-pop absolute top-3 right-3"
                style={{
                  background: 'rgba(42,30,22,0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  padding: '5px 16px',
                  border: '1px solid rgba(255,200,120,0.15)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
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
              background: 'linear-gradient(180deg, #342618 0%, #2A1E16 100%)',
              color: 'rgba(232,213,196,0.4)',
              borderTop: '1px solid rgba(255,200,120,0.06)',
            }}
          >
            とじる
          </button>
        </div>
      </div>
    </>
  );
}
