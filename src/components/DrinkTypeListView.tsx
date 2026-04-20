'use client';

import { useState } from 'react';
import { DRINK_TYPES } from '@/types';
import { DRINK_EMOJI, type BrandSummary } from '@/lib/encyclopediaUtils';
import BrandBookPage from './BrandBookPage';

interface DrinkTypeListViewProps {
  summaries: BrandSummary[];
}

type ViewState =
  | { mode: 'list' }
  | { mode: 'brands'; drinkType: string }
  | { mode: 'book'; summary: BrandSummary };

export default function DrinkTypeListView({ summaries }: DrinkTypeListViewProps) {
  const [viewState, setViewState] = useState<ViewState>({ mode: 'list' });

  // 種類ごとの銘柄数
  const typeCounts = new Map<string, number>();
  for (const type of DRINK_TYPES) {
    typeCounts.set(type, new Set(summaries.filter(s => s.drinkType === type).map(s => s.brandName)).size);
  }

  if (viewState.mode === 'book') {
    return (
      <BrandBookPage
        summary={viewState.summary}
        onClose={() => setViewState({ mode: 'brands', drinkType: viewState.summary.drinkType })}
      />
    );
  }

  if (viewState.mode === 'brands') {
    const brands = summaries.filter(s => s.drinkType === viewState.drinkType);
    return (
      <div className="space-y-3">
        <button
          onClick={() => setViewState({ mode: 'list' })}
          className="flex items-center gap-1 text-sm mb-2"
          style={{ color: '#C53D43' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          種類一覧に戻る
        </button>

        <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: '#3C2A1E' }}>
          <span className="text-2xl">{DRINK_EMOJI[viewState.drinkType] || '🍶'}</span>
          {viewState.drinkType}の銘柄
        </h3>

        {brands.length === 0 ? (
          <p className="text-sm py-8 text-center" style={{ color: 'rgba(60,42,30,0.4)' }}>
            まだ記録がありません
          </p>
        ) : (
          <div className="space-y-2">
            {brands.map((brand, i) => (
              <button
                key={i}
                onClick={() => setViewState({ mode: 'book', summary: brand })}
                className="w-full flex items-center gap-3 p-3 rounded-xl transition-all active:scale-[0.98]"
                style={{
                  background: '#FFF8F0',
                  border: '1px solid #E8D5C4',
                }}
              >
                {brand.latestPhoto ? (
                  <img
                    src={brand.latestPhoto}
                    alt={brand.brandName}
                    className="w-12 h-12 rounded-lg object-cover shrink-0"
                    style={{ border: '2px solid #F5EDE0' }}
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-2xl"
                    style={{ background: '#F5EDE0' }}
                  >
                    {DRINK_EMOJI[brand.drinkType] || '🍶'}
                  </div>
                )}
                <div className="flex-1 text-left min-w-0">
                  <p className="font-bold text-sm truncate" style={{ color: '#3C2A1E' }}>
                    {brand.brandName}
                  </p>
                  <p className="text-xs truncate" style={{ color: 'rgba(60,42,30,0.5)' }}>
                    {brand.maker && `${brand.maker} · `}
                    {brand.prefecture !== 'その他' && `${brand.prefecture} · `}
                    {brand.recordCount}回記録
                  </p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(60,42,30,0.3)" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // 種類リスト
  return (
    <div className="space-y-2">
      <p className="text-xs text-center mb-3" style={{ color: 'rgba(60,42,30,0.4)' }}>
        お酒の種類をタップして銘柄を探索
      </p>
      {DRINK_TYPES.map(type => {
        const count = typeCounts.get(type) || 0;
        const hasRecords = count > 0;
        return (
          <button
            key={type}
            onClick={() => {
              if (hasRecords) {
                setViewState({ mode: 'brands', drinkType: type });
              }
            }}
            className="w-full flex items-center gap-4 p-4 rounded-xl transition-all active:scale-[0.98]"
            style={{
              background: hasRecords ? '#FFF8F0' : 'rgba(255,248,240,0.5)',
              border: `1px solid ${hasRecords ? '#E8D5C4' : 'rgba(232,213,196,0.4)'}`,
              opacity: hasRecords ? 1 : 0.5,
            }}
          >
            <span className="text-3xl">{DRINK_EMOJI[type] || '🍶'}</span>
            <div className="flex-1 text-left">
              <p className="font-bold" style={{ color: '#3C2A1E' }}>{type}</p>
              <p className="text-xs mt-0.5" style={{ color: hasRecords ? '#C53D43' : 'rgba(60,42,30,0.3)' }}>
                {count > 0 ? `${count}銘柄を記録` : 'まだ記録なし'}
              </p>
            </div>
            {hasRecords && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(60,42,30,0.3)" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            )}
          </button>
        );
      })}
    </div>
  );
}
