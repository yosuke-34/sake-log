'use client';

import { useMemo, useState } from 'react';
import { DrinkRecord, DrinkType, DRINK_TYPES } from '@/types';
import DrinkTablePopup from './DrinkTablePopup';
import Tutorial, { STATS_TUTORIAL_STEPS, STATS_TUTORIAL_STORAGE_KEY } from './Tutorial';

const DRINK_EMOJI: Record<string, string> = {
  'ウィスキー': '🥃',
  'ビール': '🍺',
  'ジン': '🍸',
  '日本酒': '🍶',
  '焼酎': '🫗',
  'ワイン': '🍷',
  'サワー': '🍹',
};

interface VolumeStatsProps {
  records: DrinkRecord[];
}

type ViewMode = 'monthly' | 'total';

function formatVolume(ml: number): string {
  if (ml >= 1000) {
    return `${(ml / 1000).toFixed(1)}L`;
  }
  return `${ml}ml`;
}

function getCurrentMonth(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

function shiftMonth(month: string, delta: number): string {
  const [y, m] = month.split('-').map(Number);
  const d = new Date(y, m - 1 + delta, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

export default function VolumeStats({ records }: VolumeStatsProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('monthly');
  const [selectedMonth, setSelectedMonth] = useState(() => getCurrentMonth());

  // 選択月のレコードのみ抽出
  const monthlyRecords = useMemo(
    () => records.filter((r) => r.date.startsWith(selectedMonth)),
    [records, selectedMonth]
  );

  return (
    <div className="space-y-4">
      {/* 切り替えボタン */}
      <div data-tutorial="stats-toggle" className="flex bg-card-bg rounded-xl border border-border p-1 gap-1">
        <button
          onClick={() => setViewMode('monthly')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${
            viewMode === 'monthly'
              ? 'bg-accent text-white shadow-sm'
              : 'text-muted hover:text-foreground'
          }`}
        >
          月別サマリー
        </button>
        <button
          onClick={() => setViewMode('total')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${
            viewMode === 'total'
              ? 'bg-accent text-white shadow-sm'
              : 'text-muted hover:text-foreground'
          }`}
        >
          総飲酒量
        </button>
      </div>

      {viewMode === 'monthly' ? (
        <MonthlyView
          records={monthlyRecords}
          month={selectedMonth}
          onPrevMonth={() => setSelectedMonth((m) => shiftMonth(m, -1))}
          onNextMonth={() => setSelectedMonth((m) => shiftMonth(m, 1))}
          isCurrentMonth={selectedMonth === getCurrentMonth()}
        />
      ) : (
        <TotalView records={records} />
      )}

      <Tutorial steps={STATS_TUTORIAL_STEPS} storageKey={STATS_TUTORIAL_STORAGE_KEY} />
    </div>
  );
}

// ── 月別サマリー ──
function MonthlyView({
  records,
  month,
  onPrevMonth,
  onNextMonth,
  isCurrentMonth,
}: {
  records: DrinkRecord[];
  month: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  isCurrentMonth: boolean;
}) {
  const [y, m] = month.split('-');

  const statsByType = useMemo(() => {
    const map: Record<string, { count: number; volume: number }> = {};
    for (const type of DRINK_TYPES) {
      map[type] = { count: 0, volume: 0 };
    }
    for (const r of records) {
      const type = r.drink_type;
      if (map[type]) {
        map[type].count += 1;
        map[type].volume += r.volume_ml || 0;
      }
    }
    return map;
  }, [records]);

  const totalVolume = useMemo(
    () => records.reduce((sum, r) => sum + (r.volume_ml || 0), 0),
    [records]
  );

  const sortedTypes = useMemo(() => {
    return [...DRINK_TYPES].sort(
      (a, b) => statsByType[b].volume - statsByType[a].volume
    );
  }, [statsByType]);

  const maxVolume = useMemo(() => {
    return Math.max(...Object.values(statsByType).map((s) => s.volume), 1);
  }, [statsByType]);

  // 記録がある種類のみフィルター
  const typesWithRecords = sortedTypes.filter((t) => statsByType[t].count > 0);

  const [popupType, setPopupType] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {/* 月の飲酒量ヘッダー */}
      <div data-tutorial="stats-month" className="bg-card-bg rounded-2xl border border-border p-5">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={onPrevMonth}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-border/30 transition-colors"
            aria-label="前月"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <p className="text-sm text-muted">{Number(y)}年{Number(m)}月の飲酒量</p>
          <button
            onClick={onNextMonth}
            disabled={isCurrentMonth}
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
              isCurrentMonth ? 'opacity-30 cursor-not-allowed' : 'hover:bg-border/30'
            }`}
            aria-label="翌月"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        <p className="text-4xl font-bold text-accent text-center">{formatVolume(totalVolume)}</p>
        <div className="flex justify-center gap-4 mt-2 text-xs text-muted">
          <span>{records.length}件の記録</span>
          <span>{new Set(records.map((r) => r.date)).size}日</span>
        </div>
      </div>

      {/* 種類別内訳 */}
      <div data-tutorial="stats-type-breakdown">
        {typesWithRecords.length > 0 ? (
          <TypeBreakdownList
            sortedTypes={sortedTypes}
            statsByType={statsByType}
            maxVolume={maxVolume}
            onSelect={setPopupType}
          />
        ) : (
          <div className="bg-card-bg rounded-2xl border border-border p-8 text-center">
            <p className="text-3xl mb-2">🍶</p>
            <p className="text-muted text-sm">この月の記録はありません</p>
          </div>
        )}
      </div>

      {/* 日別の内訳 */}
      <div data-tutorial="stats-daily">
        <DailyBreakdown records={records} />
      </div>

      {/* ポップアップ */}
      {popupType && statsByType[popupType] && (
        <DrinkTablePopup
          drinkType={popupType}
          count={statsByType[popupType].count}
          volume={statsByType[popupType].volume}
          onClose={() => setPopupType(null)}
        />
      )}
    </div>
  );
}

// ── 種類別リスト（共通） ──
function TypeBreakdownList({
  sortedTypes,
  statsByType,
  maxVolume,
  onSelect,
}: {
  sortedTypes: string[];
  statsByType: Record<string, { count: number; volume: number }>;
  maxVolume: number;
  onSelect: (type: string) => void;
}) {
  return (
    <div className="bg-card-bg rounded-2xl border border-border p-4">
      <h3 className="text-sm font-bold text-foreground mb-3">種類別の飲酒量</h3>
      <div className="space-y-3">
        {sortedTypes.map((type) => {
          const stat = statsByType[type];
          const emoji = DRINK_EMOJI[type] || '🍶';
          const barWidth = maxVolume > 0 ? (stat.volume / maxVolume) * 100 : 0;
          const hasRecords = stat.count > 0;

          return (
            <div
              key={type}
              onClick={hasRecords ? () => onSelect(type) : undefined}
              className={hasRecords ? 'cursor-pointer active:scale-[0.98] transition-transform' : ''}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium flex items-center gap-1.5">
                  <span>{emoji}</span>
                  <span>{type}</span>
                </span>
                <span className="text-sm text-muted">
                  {hasRecords ? (
                    <>
                      <span className="font-bold text-accent">{formatVolume(stat.volume)}</span>
                      <span className="ml-1">({stat.count}件)</span>
                    </>
                  ) : (
                    <span className="text-border">—</span>
                  )}
                </span>
              </div>
              {stat.volume > 0 && (
                <div className="h-2 bg-border/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── 日別内訳（当月用） ──
function DailyBreakdown({ records }: { records: DrinkRecord[] }) {
  const dailyStats = useMemo(() => {
    const map: Record<string, { volume: number; count: number }> = {};
    for (const r of records) {
      if (!map[r.date]) map[r.date] = { volume: 0, count: 0 };
      map[r.date].volume += r.volume_ml || 0;
      map[r.date].count += 1;
    }
    return Object.entries(map).sort((a, b) => b[0].localeCompare(a[0]));
  }, [records]);

  if (dailyStats.length === 0) return null;

  const maxDaily = Math.max(...dailyStats.map(([, s]) => s.volume), 1);

  return (
    <div className="bg-card-bg rounded-2xl border border-border p-4">
      <h3 className="text-sm font-bold text-foreground mb-3">日別の飲酒量</h3>
      <div className="space-y-3">
        {dailyStats.map(([date, stat]) => {
          const d = new Date(date);
          const dayLabel = `${d.getMonth() + 1}/${d.getDate()}`;
          const weekday = ['日', '月', '火', '水', '木', '金', '土'][d.getDay()];
          const barWidth = (stat.volume / maxDaily) * 100;
          return (
            <div key={date}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">
                  {dayLabel}（{weekday}）
                </span>
                <span className="text-sm">
                  <span className="font-bold text-accent">{formatVolume(stat.volume)}</span>
                  <span className="text-muted ml-1">({stat.count}件)</span>
                </span>
              </div>
              <div className="h-2 bg-border/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent/70 rounded-full transition-all duration-500"
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── 全期間の総飲酒量ビュー ──
function TotalView({ records }: { records: DrinkRecord[] }) {
  const statsByType = useMemo(() => {
    const map: Record<string, { count: number; volume: number }> = {};
    for (const type of DRINK_TYPES) {
      map[type] = { count: 0, volume: 0 };
    }
    for (const r of records) {
      const type = r.drink_type;
      if (map[type]) {
        map[type].count += 1;
        map[type].volume += r.volume_ml || 0;
      }
    }
    return map;
  }, [records]);

  const totalVolume = useMemo(
    () => records.reduce((sum, r) => sum + (r.volume_ml || 0), 0),
    [records]
  );

  const sortedTypes = useMemo(() => {
    return [...DRINK_TYPES].sort(
      (a, b) => statsByType[b].volume - statsByType[a].volume
    );
  }, [statsByType]);

  const maxVolume = useMemo(() => {
    return Math.max(...Object.values(statsByType).map((s) => s.volume), 1);
  }, [statsByType]);

  const [popupType, setPopupType] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {/* 総飲酒量 */}
      <div className="bg-card-bg rounded-2xl border border-border p-5 text-center">
        <p className="text-sm text-muted mb-1">総飲酒量</p>
        <p className="text-4xl font-bold text-accent">{formatVolume(totalVolume)}</p>
        <p className="text-xs text-muted mt-1">{records.length}件の記録</p>
      </div>

      {/* 種類別内訳 */}
      <TypeBreakdownList
        sortedTypes={sortedTypes}
        statsByType={statsByType}
        maxVolume={maxVolume}
        onSelect={setPopupType}
      />

      {/* 月別サマリー */}
      <MonthlyBreakdown records={records} />

      {/* ポップアップ */}
      {popupType && statsByType[popupType] && (
        <DrinkTablePopup
          drinkType={popupType}
          count={statsByType[popupType].count}
          volume={statsByType[popupType].volume}
          onClose={() => setPopupType(null)}
        />
      )}
    </div>
  );
}

// ── 月別サマリー（総飲酒量用） ──
function MonthlyBreakdown({ records }: { records: DrinkRecord[] }) {
  const monthlyStats = useMemo(() => {
    const map: Record<string, number> = {};
    for (const r of records) {
      const month = r.date.substring(0, 7);
      map[month] = (map[month] || 0) + (r.volume_ml || 0);
    }
    return Object.entries(map).sort((a, b) => b[0].localeCompare(a[0]));
  }, [records]);

  if (monthlyStats.length === 0) return null;

  const maxMonthly = Math.max(...monthlyStats.map(([, v]) => v), 1);

  return (
    <div className="bg-card-bg rounded-2xl border border-border p-4">
      <h3 className="text-sm font-bold text-foreground mb-3">月別の飲酒量</h3>
      <div className="space-y-3">
        {monthlyStats.map(([month, volume]) => {
          const [y, m] = month.split('-');
          const barWidth = (volume / maxMonthly) * 100;
          return (
            <div key={month}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{Number(y)}年{Number(m)}月</span>
                <span className="text-sm font-bold text-accent">{formatVolume(volume)}</span>
              </div>
              <div className="h-2 bg-border/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent/70 rounded-full transition-all duration-500"
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
