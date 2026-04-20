'use client';

import { useMemo, useState } from 'react';
import type { DrinkRecord } from '@/types';
import { buildBrandLookupMap, summarizeByBrand } from '@/lib/encyclopediaUtils';
import JapanRegionMap from './JapanRegionMap';
import DrinkTypeListView from './DrinkTypeListView';
import Tutorial, { ENCYCLOPEDIA_TUTORIAL_STEPS, ENCYCLOPEDIA_TUTORIAL_STORAGE_KEY } from './Tutorial';

type EncyclopediaMode = 'prefecture' | 'drinkType';

interface BrandEncyclopediaProps {
  records: DrinkRecord[];
}

export default function BrandEncyclopedia({ records }: BrandEncyclopediaProps) {
  const [mode, setMode] = useState<EncyclopediaMode>('prefecture');

  const summaries = useMemo(() => {
    const lookupMap = buildBrandLookupMap();
    return summarizeByBrand(records, lookupMap);
  }, [records]);

  return (
    <div className="space-y-4">
      {/* ヘッダー */}
      <div data-tutorial="encyclopedia-header" className="text-center">
        <h2
          className="text-lg font-bold"
          style={{ color: '#3C2A1E', fontFamily: '"Noto Serif JP", serif' }}
        >
          銘柄図鑑
        </h2>
        <p className="text-xs mt-0.5" style={{ color: 'rgba(60,42,30,0.4)' }}>
          {summaries.length > 0
            ? `${summaries.length}銘柄を収録`
            : '記録したお酒がここに集まります'}
        </p>
      </div>

      {/* モード切替トグル */}
      <div
        data-tutorial="encyclopedia-toggle"
        className="flex rounded-xl p-1 gap-1"
        style={{ background: '#FFF8F0', border: '1px solid #E8D5C4' }}
      >
        <button
          onClick={() => setMode('prefecture')}
          className="flex-1 py-2 rounded-lg text-sm font-bold transition-all"
          style={{
            background: mode === 'prefecture' ? '#C53D43' : 'transparent',
            color: mode === 'prefecture' ? '#FFF8F0' : '#8B7355',
          }}
        >
          都道府県別
        </button>
        <button
          onClick={() => setMode('drinkType')}
          className="flex-1 py-2 rounded-lg text-sm font-bold transition-all"
          style={{
            background: mode === 'drinkType' ? '#C53D43' : 'transparent',
            color: mode === 'drinkType' ? '#FFF8F0' : '#8B7355',
          }}
        >
          お酒の種類別
        </button>
      </div>

      {/* コンテンツ */}
      <div data-tutorial="encyclopedia-content">
        {mode === 'prefecture' ? (
          <JapanRegionMap summaries={summaries} />
        ) : (
          <DrinkTypeListView summaries={summaries} />
        )}
      </div>

      <Tutorial steps={ENCYCLOPEDIA_TUTORIAL_STEPS} storageKey={ENCYCLOPEDIA_TUTORIAL_STORAGE_KEY} />
    </div>
  );
}
