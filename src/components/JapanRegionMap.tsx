'use client';

import { useMemo, useState } from 'react';
import {
  REGION_GROUPS,
  DRINK_EMOJI,
  getTotalBrandsPerPrefecture,
  getTotalBrandsPerPrefectureByType,
  getPrefectureCompletionMedal,
  MEDAL_INFO,
  type BrandSummary,
} from '@/lib/encyclopediaUtils';
import { DRINK_TYPES } from '@/types';
import BrandBookPage from './BrandBookPage';
import {
  PREFECTURE_SVG_DATA,
  REGION_NAME_MAP,
  REGION_LABEL_POS,
  type RegionId,
} from '@/lib/japanMapData';

interface JapanRegionMapProps {
  summaries: BrandSummary[];
}

type ViewState =
  | { mode: 'map' }
  | { mode: 'region'; regionName: string }
  | { mode: 'prefecture'; regionName: string; prefecture: string }
  | { mode: 'brand'; summary: BrandSummary };

// 地方ごとの色（記録あり）
const REGION_COLORS: Record<RegionId, string> = {
  hokkaido: '#4A90D9',
  tohoku: '#6B8E23',
  kanto: '#C53D43',
  chubu: '#DAA520',
  kinki: '#9370DB',
  chugoku: '#20B2AA',
  shikoku: '#FF8C00',
  kyushu: '#E06080',
  okinawa: '#00CED1',
};

// 地方ごとの色（記録なし - 薄い版）
const REGION_COLORS_INACTIVE: Record<RegionId, string> = {
  hokkaido: '#D6E4F0',
  tohoku: '#D8E4C8',
  kanto: '#F0D5D7',
  chubu: '#F0E5C8',
  kinki: '#E0D5F0',
  chugoku: '#C8E8E4',
  shikoku: '#F0DCC8',
  kyushu: '#F0D0D8',
  okinawa: '#C8F0EE',
};

// ミニマップ用コンポーネント（地方選択時に表示）
function MiniJapanMap({
  highlightRegion,
  regionCounts,
  onRegionClick,
}: {
  highlightRegion?: string;
  regionCounts: Map<string, number>;
  onRegionClick?: (name: string) => void;
}) {
  // region名 → RegionId変換
  const regionNameToId = (name: string): RegionId | null => {
    for (const [id, jaName] of Object.entries(REGION_NAME_MAP)) {
      if (jaName === name) return id as RegionId;
    }
    return null;
  };

  const highlightId = highlightRegion ? regionNameToId(highlightRegion) : null;

  return (
    <svg viewBox="0 0 1000 1000" className="w-full max-w-[120px]">
      <g transform="matrix(1.028807, 0, 0, 1.028807, -47.544239, -28.806583)">
        <g transform="translate(6, 18)">
          {PREFECTURE_SVG_DATA.map((pref) => {
            const isHighlight = pref.region === highlightId;
            const jaName = REGION_NAME_MAP[pref.region];
            const count = regionCounts.get(jaName) || 0;
            return (
              <g
                key={pref.code}
                transform={`translate(${pref.tx}, ${pref.ty})`}
                fill={isHighlight ? '#C53D43' : count > 0 ? 'rgba(197,61,67,0.3)' : '#E8D5C4'}
                stroke={isHighlight ? '#7A1A28' : '#8A7A6E'}
                strokeWidth={isHighlight ? 1.5 : 0.8}
                strokeLinejoin="round"
                opacity={isHighlight ? 1 : 0.6}
                style={{ cursor: onRegionClick ? 'pointer' : 'default' }}
                onClick={() => onRegionClick?.(jaName)}
              >
                {pref.paths.map((d, i) => (
                  <path key={i} d={d} />
                ))}
              </g>
            );
          })}
        </g>
      </g>
    </svg>
  );
}

export default function JapanRegionMap({ summaries }: JapanRegionMapProps) {
  const [viewState, setViewState] = useState<ViewState>({ mode: 'map' });
  const [hoveredRegion, setHoveredRegion] = useState<RegionId | null>(null);

  // 地方ごとの銘柄数
  const regionCounts = new Map<string, number>();
  for (const region of REGION_GROUPS) {
    regionCounts.set(
      region.name,
      summaries.filter(s => region.prefectures.includes(s.prefecture)).length
    );
  }

  // 都道府県ごとの銘柄数（記録済み）
  const prefectureCounts = new Map<string, number>();
  for (const s of summaries) {
    prefectureCounts.set(s.prefecture, (prefectureCounts.get(s.prefecture) || 0) + 1);
  }

  // 都道府県ごとの登録可能銘柄数（BRAND_DATAベース）
  const totalBrandsPerPref = useMemo(() => getTotalBrandsPerPrefecture(), []);
  // 都道府県×種類ごとの登録可能銘柄数
  const totalByPrefType = useMemo(() => getTotalBrandsPerPrefectureByType(), []);

  // region名 → RegionId変換
  const regionNameToId = (name: string): RegionId | null => {
    for (const [id, jaName] of Object.entries(REGION_NAME_MAP)) {
      if (jaName === name) return id as RegionId;
    }
    return null;
  };

  // 地方ごとにプレフェクチャーをグループ化（全モードで呼ぶ必要あり - Hooks ルール）
  const regionGroups = useMemo(() => {
    const groups: Record<RegionId, typeof PREFECTURE_SVG_DATA> = {
      hokkaido: [], tohoku: [], kanto: [], chubu: [],
      kinki: [], chugoku: [], shikoku: [], kyushu: [], okinawa: [],
    };
    for (const pref of PREFECTURE_SVG_DATA) {
      groups[pref.region].push(pref);
    }
    return groups;
  }, []);

  if (viewState.mode === 'brand') {
    return (
      <BrandBookPage
        summary={viewState.summary}
        onClose={() => {
          const region = REGION_GROUPS.find(r => r.prefectures.includes(viewState.summary.prefecture));
          setViewState({
            mode: 'prefecture',
            regionName: region?.name || '',
            prefecture: viewState.summary.prefecture,
          });
        }}
      />
    );
  }

  if (viewState.mode === 'prefecture') {
    const brands = summaries.filter(s => s.prefecture === viewState.prefecture);
    const backLabel = viewState.regionName ? `${viewState.regionName}に戻る` : '地図に戻る';

    // 種類ごとにグループ化（BRAND_DATAに登録がある種類のみ表示）
    const drinkTypesInPref = DRINK_TYPES.filter(type => {
      const totalKey = `${viewState.prefecture}::${type}`;
      return (totalByPrefType.get(totalKey) || 0) > 0;
    });

    return (
      <div className="space-y-3">
        <button
          onClick={() => viewState.regionName
            ? setViewState({ mode: 'region', regionName: viewState.regionName })
            : setViewState({ mode: 'map' })
          }
          className="flex items-center gap-1 text-sm"
          style={{ color: '#C53D43' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          {backLabel}
        </button>

        {/* パンくずナビ */}
        <div className="flex items-center gap-1 text-xs mb-3 flex-wrap" style={{ color: 'rgba(60,42,30,0.4)' }}>
          <button onClick={() => setViewState({ mode: 'map' })} className="hover:underline" style={{ color: 'rgba(60,42,30,0.5)' }}>
            地図
          </button>
          <span>›</span>
          {viewState.regionName && (
            <>
              <button
                onClick={() => setViewState({ mode: 'region', regionName: viewState.regionName })}
                className="hover:underline"
                style={{ color: 'rgba(60,42,30,0.5)' }}
              >
                {viewState.regionName}
              </button>
              <span>›</span>
            </>
          )}
          <span style={{ color: '#3C2A1E' }}>{viewState.prefecture}</span>
        </div>

        <h3 className="text-lg font-bold" style={{ color: '#3C2A1E' }}>
          {viewState.prefecture}の銘柄
        </h3>

        {brands.length === 0 ? (
          <p className="text-sm py-8 text-center" style={{ color: 'rgba(60,42,30,0.4)' }}>
            まだ記録がありません
          </p>
        ) : (
          <div className="space-y-4">
            {drinkTypesInPref.map(type => {
              const typeBrands = brands.filter(b => b.drinkType === type);
              const totalKey = `${viewState.prefecture}::${type}`;
              const totalAvailable = totalByPrefType.get(totalKey) || 0;
              const recordedCount = typeBrands.length;
              const emoji = DRINK_EMOJI[type] || '🍶';

              return (
                <div key={type}>
                  {/* 種類ヘッダー */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold" style={{ color: '#3C2A1E' }}>{type}</span>
                        <span className="text-xs" style={{ color: recordedCount > 0 ? '#C53D43' : 'rgba(60,42,30,0.35)' }}>
                          {recordedCount}/{totalAvailable}銘柄
                        </span>
                      </div>
                      {/* ミニ進捗バー */}
                      {totalAvailable > 0 && (
                        <div className="h-1 rounded-full overflow-hidden mt-1" style={{ background: 'rgba(60,42,30,0.06)' }}>
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${Math.min(100, (recordedCount / totalAvailable) * 100)}%`,
                              background: recordedCount > 0 ? 'linear-gradient(90deg, #C53D43, #C53D43CC)' : 'transparent',
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 銘柄リスト */}
                  {typeBrands.length > 0 ? (
                    <div className="space-y-1.5 ml-1">
                      {typeBrands.map((brand, i) => (
                        <button
                          key={i}
                          onClick={() => setViewState({ mode: 'brand', summary: brand })}
                          className="w-full flex items-center gap-3 p-2.5 rounded-xl transition-all active:scale-[0.98]"
                          style={{
                            background: '#FFF8F0',
                            border: '1px solid #E8D5C4',
                          }}
                        >
                          {brand.latestPhoto ? (
                            <img
                              src={brand.latestPhoto}
                              alt={brand.brandName}
                              className="w-10 h-10 rounded-lg object-cover shrink-0"
                              style={{ border: '2px solid #F5EDE0' }}
                            />
                          ) : (
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-xl"
                              style={{ background: '#F5EDE0' }}
                            >
                              {emoji}
                            </div>
                          )}
                          <div className="flex-1 text-left min-w-0">
                            <p className="font-bold text-sm truncate" style={{ color: '#3C2A1E' }}>
                              {brand.brandName}
                            </p>
                            <p className="text-xs truncate" style={{ color: 'rgba(60,42,30,0.5)' }}>
                              {brand.maker && `${brand.maker} · `}{brand.recordCount}回記録
                            </p>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(60,42,30,0.3)" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs py-2 pl-9" style={{ color: 'rgba(60,42,30,0.3)' }}>
                      まだ記録なし
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (viewState.mode === 'region') {
    const region = REGION_GROUPS.find(r => r.name === viewState.regionName);
    if (!region) return null;

    return (
      <div className="space-y-3">
        <button
          onClick={() => setViewState({ mode: 'map' })}
          className="flex items-center gap-1 text-sm mb-2"
          style={{ color: '#C53D43' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          地図に戻る
        </button>

        {/* ミニマップ + 地方名 */}
        <div className="flex items-center gap-4 mb-2">
          <MiniJapanMap
            highlightRegion={viewState.regionName}
            regionCounts={regionCounts}
            onRegionClick={(name) => setViewState({ mode: 'region', regionName: name })}
          />
          <div>
            <h3 className="text-xl font-bold" style={{ color: '#3C2A1E', fontFamily: '"Noto Serif JP", serif' }}>
              {viewState.regionName}
            </h3>
            <p className="text-xs mt-1" style={{ color: 'rgba(60,42,30,0.4)' }}>
              {region.prefectures.length}都道府県
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {region.prefectures.map(pref => {
            const count = prefectureCounts.get(pref) || 0;
            const totalAvailable = totalBrandsPerPref.get(pref) || 0;
            const hasRecords = count > 0;
            const medal = getPrefectureCompletionMedal(count, totalAvailable);
            const medalInfo = medal ? MEDAL_INFO[medal] : null;
            const completionPct = totalAvailable > 0 ? Math.round((count / totalAvailable) * 100) : 0;

            return (
              <button
                key={pref}
                onClick={() => {
                  if (hasRecords) {
                    setViewState({ mode: 'prefecture', regionName: viewState.regionName, prefecture: pref });
                  }
                }}
                className="p-3 rounded-xl text-left transition-all active:scale-[0.98]"
                style={{
                  background: hasRecords ? '#FFF8F0' : 'rgba(255,248,240,0.5)',
                  border: `1px solid ${hasRecords ? (medalInfo ? medalInfo.color + '40' : '#E8D5C4') : 'rgba(232,213,196,0.4)'}`,
                  opacity: hasRecords ? 1 : 0.5,
                }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold" style={{ color: '#3C2A1E' }}>{pref}</p>
                  {medalInfo && (
                    <span className="text-lg" title={medalInfo.label}>{medalInfo.emoji}</span>
                  )}
                </div>
                <p className="text-xs mt-0.5" style={{ color: hasRecords ? '#C53D43' : 'rgba(60,42,30,0.3)' }}>
                  {count > 0 ? `${count}/${totalAvailable}銘柄` : totalAvailable > 0 ? `0/${totalAvailable}銘柄` : '—'}
                </p>
                {/* コンプリート進捗バー */}
                {hasRecords && totalAvailable > 0 && (
                  <div className="mt-1.5">
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(60,42,30,0.08)' }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${Math.min(100, completionPct)}%`,
                          background: medalInfo
                            ? `linear-gradient(90deg, ${medalInfo.color}, ${medalInfo.color}CC)`
                            : 'linear-gradient(90deg, #C53D43, #C53D43CC)',
                        }}
                      />
                    </div>
                    <p className="text-[10px] mt-0.5 text-right" style={{ color: 'rgba(60,42,30,0.35)' }}>
                      {completionPct}%
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // =====================================================
  // メイン地図ビュー（Geolonia SVG ベースの日本列島）
  // =====================================================
  return (
    <div className="space-y-3">
      <p className="text-xs text-center" style={{ color: 'rgba(60,42,30,0.4)' }}>
        地方をタップして銘柄を探索
      </p>
      <div className="flex justify-center">
        <svg
          viewBox="0 0 1000 1000"
          className="w-full max-w-[380px]"
          style={{ filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.08))' }}
        >
          <defs>
            {/* 各地方のグラデーション */}
            {(Object.keys(REGION_COLORS) as RegionId[]).map(regionId => {
              const jaName = REGION_NAME_MAP[regionId];
              const count = regionCounts.get(jaName) || 0;
              const hasRecords = count > 0;
              const baseColor = hasRecords ? REGION_COLORS[regionId] : REGION_COLORS_INACTIVE[regionId];
              return (
                <linearGradient key={regionId} id={`grad-${regionId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={baseColor} stopOpacity={hasRecords ? 1 : 0.8} />
                  <stop offset="100%" stopColor={baseColor} stopOpacity={hasRecords ? 0.85 : 0.6} />
                </linearGradient>
              );
            })}
          </defs>

          {/* Geolonia SVG と同じ transform */}
          <g transform="matrix(1.028807, 0, 0, 1.028807, -47.544239, -28.806583)">
            <g transform="translate(6, 18)">
              {/* 各地方をグループで描画 */}
              {(Object.keys(regionGroups) as RegionId[]).map(regionId => {
                const prefs = regionGroups[regionId];
                const jaName = REGION_NAME_MAP[regionId];
                const count = regionCounts.get(jaName) || 0;
                const hasRecords = count > 0;
                const isHovered = hoveredRegion === regionId;
                const labelPos = REGION_LABEL_POS[regionId];

                return (
                  <g
                    key={regionId}
                    onClick={() => setViewState({ mode: 'region', regionName: jaName })}
                    onMouseEnter={() => setHoveredRegion(regionId)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* 各都道府県のパス */}
                    {prefs.map(pref => (
                      <g
                        key={pref.code}
                        transform={`translate(${pref.tx}, ${pref.ty})`}
                        fill={`url(#grad-${regionId})`}
                        stroke={hasRecords ? REGION_COLORS[regionId] : '#A89888'}
                        strokeWidth={isHovered ? 2 : 1}
                        strokeLinejoin="round"
                        fillRule="nonzero"
                        opacity={isHovered ? 1 : (hasRecords ? 0.95 : 0.7)}
                        className="transition-opacity duration-200"
                      >
                        {pref.paths.map((d, i) => (
                          <path key={i} d={d} />
                        ))}
                      </g>
                    ))}

                    {/* 地方名ラベル */}
                    <text
                      x={labelPos.x}
                      y={labelPos.y - (count > 0 ? 8 : 0)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={regionId === 'okinawa' ? 18 : 22}
                      fontWeight="bold"
                      fill={hasRecords ? '#FFF' : '#6B5B4F'}
                      stroke={hasRecords ? 'rgba(0,0,0,0.4)' : 'none'}
                      strokeWidth={hasRecords ? 3 : 0}
                      paintOrder="stroke"
                      style={{ fontFamily: '"Noto Sans JP", sans-serif', pointerEvents: 'none' }}
                    >
                      {jaName}
                    </text>
                    {/* 銘柄数 */}
                    {count > 0 && (
                      <text
                        x={labelPos.x}
                        y={labelPos.y + 16}
                        textAnchor="middle"
                        fontSize={14}
                        fill="#FFF"
                        stroke="rgba(0,0,0,0.3)"
                        strokeWidth={2}
                        paintOrder="stroke"
                        style={{ pointerEvents: 'none' }}
                      >
                        {count}銘柄
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          </g>
        </svg>
      </div>

      {/* 凡例 */}
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 px-2">
        {(Object.keys(REGION_COLORS) as RegionId[]).map(regionId => {
          const jaName = REGION_NAME_MAP[regionId];
          const count = regionCounts.get(jaName) || 0;
          return (
            <button
              key={regionId}
              onClick={() => setViewState({ mode: 'region', regionName: jaName })}
              className="flex items-center gap-1 text-[10px] py-0.5 transition-opacity hover:opacity-80"
              style={{ color: count > 0 ? REGION_COLORS[regionId] : 'rgba(60,42,30,0.35)' }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ background: count > 0 ? REGION_COLORS[regionId] : REGION_COLORS_INACTIVE[regionId] }}
              />
              {jaName}
              {count > 0 && <span className="font-bold">({count})</span>}
            </button>
          );
        })}
      </div>

      {/* その他（都道府県不明）の銘柄 */}
      {summaries.filter(s => s.prefecture === 'その他').length > 0 && (
        <button
          onClick={() => setViewState({ mode: 'prefecture', regionName: '', prefecture: 'その他' })}
          className="w-full p-3 rounded-xl text-center text-sm"
          style={{
            background: 'rgba(255,248,240,0.6)',
            border: '1px solid rgba(232,213,196,0.5)',
            color: 'rgba(60,42,30,0.5)',
          }}
        >
          その他の銘柄（{summaries.filter(s => s.prefecture === 'その他').length}件）
        </button>
      )}
    </div>
  );
}
