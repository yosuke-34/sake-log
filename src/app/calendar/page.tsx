'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { supabase, supabaseConfigured } from '@/lib/supabase';
import { getDeviceId } from '@/lib/deviceId';
import { DrinkRecord } from '@/types';
import Calendar from '@/components/Calendar';
import RecordModal from '@/components/RecordModal';
import VolumeStats from '@/components/VolumeStats';
import BrandEncyclopedia from '@/components/BrandEncyclopedia';
import AdBanner from '@/components/AdBanner';

type Tab = 'calendar' | 'stats' | 'encyclopedia';

export default function Home() {
  const [records, setRecords] = useState<DrinkRecord[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('calendar');

  const fetchRecords = useCallback(async () => {
    if (!supabaseConfigured) {
      setLoading(false);
      return;
    }
    try {
      const deviceId = getDeviceId();

      // 既存レコード（device_id未設定）を現在のデバイスに紐付け（カラム未追加時はスキップ）
      const { error: migrateError } = await supabase
        .from('drink_records')
        .update({ device_id: deviceId })
        .is('device_id', null);

      if (migrateError) {
        // device_id カラム未追加の場合：フィルター無しで全件取得（後方互換）
        console.warn('device_id未対応のため全件取得:', migrateError.message);
        const { data, error } = await supabase
          .from('drink_records')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        setRecords((data as DrinkRecord[]) || []);
      } else {
        // device_id カラム対応済み：デバイスIDでフィルター
        const { data, error } = await supabase
          .from('drink_records')
          .select('*')
          .eq('device_id', deviceId)
          .order('created_at', { ascending: false });
        if (error) throw error;
        setRecords((data as DrinkRecord[]) || []);
      }
    } catch (err) {
      console.error('取得エラー:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  const recordDates = new Set(records.map((r) => r.date));
  const totalVolume = useMemo(
    () => records.reduce((sum, r) => sum + (r.volume_ml || 0), 0),
    [records]
  );

  const selectedRecords = selectedDate
    ? records.filter((r) => r.date === selectedDate)
    : [];

  const handleDelete = async (id: string) => {
    if (!confirm('この記録を削除しますか？')) return;

    try {
      const record = records.find((r) => r.id === id);

      if (record?.photo_url) {
        const fileName = record.photo_url.split('/').pop();
        if (fileName) {
          await supabase.storage.from('drink-photos').remove([fileName]);
        }
      }

      const { error } = await supabase.from('drink_records').delete().eq('id', id);
      if (error) throw error;

      setRecords((prev) => prev.filter((r) => r.id !== id));

      const remaining = records.filter((r) => r.date === selectedDate && r.id !== id);
      if (remaining.length === 0) {
        setSelectedDate(null);
      }
    } catch (err) {
      console.error('削除エラー:', err);
      alert('削除に失敗しました。');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-muted">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="pb-14">
      {/* 20歳以上向けの注意喚起 */}
      <div
        className="rounded-lg px-3 py-2 mb-3 text-[11px] flex items-center gap-2"
        style={{ background: 'rgba(197,61,67,0.06)', border: '1px solid rgba(197,61,67,0.18)', color: '#C53D43' }}
      >
        <span aria-hidden>🔞</span>
        <span className="flex-1">
          本サービスは20歳以上の方を対象としています。
          <Link href="/responsible-drinking" className="underline ml-1 font-bold">
            適正飲酒について
          </Link>
        </span>
      </div>

      {/* Supabase未設定時の案内 */}
      {!supabaseConfigured && (
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-4 text-sm">
          <p className="font-bold text-accent mb-1">Supabase未設定</p>
          <p className="text-foreground">
            <code className="bg-border/30 px-1 rounded">.env.local</code> に Supabase の URL と Anon Key を設定してください。
            詳しくは <code className="bg-border/30 px-1 rounded">supabase-setup.sql</code> を参照してください。
          </p>
        </div>
      )}

      {/* Tab content */}
      {activeTab === 'calendar' ? (
        <>
          {/* Calendar */}
          <div className="bg-card-bg rounded-2xl border border-border p-4 shadow-sm">
            <Calendar
              recordDates={recordDates}
              onDateClick={(date) => setSelectedDate(date)}
            />
          </div>

          {/* Stats summary */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="bg-card-bg rounded-xl border border-border p-3 text-center">
              <p className="text-2xl font-bold text-accent">{records.length}</p>
              <p className="text-xs text-muted">総記録数</p>
            </div>
            <div className="bg-card-bg rounded-xl border border-border p-3 text-center">
              <p className="text-2xl font-bold text-accent">{recordDates.size}</p>
              <p className="text-xs text-muted">記録日数</p>
            </div>
            <div className="bg-card-bg rounded-xl border border-border p-3 text-center">
              <p className="text-2xl font-bold text-accent">
                {totalVolume >= 1000
                  ? `${(totalVolume / 1000).toFixed(1)}L`
                  : `${totalVolume}ml`}
              </p>
              <p className="text-xs text-muted">総飲酒量</p>
            </div>
          </div>
          {/* 広告バナー */}
          <AdBanner />
        </>
      ) : activeTab === 'stats' ? (
        <>
          <VolumeStats records={records} />
          <AdBanner />
        </>
      ) : (
        <>
          <BrandEncyclopedia records={records} />
          <AdBanner />
        </>
      )}

      {/* Bottom tab bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card-bg border-t border-border z-30">
        <div className="max-w-lg mx-auto flex">
          <button
            onClick={() => setActiveTab('calendar')}
            className={`flex-1 flex flex-col items-center py-3 transition-colors ${
              activeTab === 'calendar' ? 'text-accent' : 'text-muted'
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <span className="text-xs mt-1 font-medium">カレンダー</span>
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex-1 flex flex-col items-center py-3 transition-colors ${
              activeTab === 'stats' ? 'text-accent' : 'text-muted'
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
            <span className="text-xs mt-1 font-medium">飲酒量</span>
          </button>
          <button
            onClick={() => setActiveTab('encyclopedia')}
            className={`flex-1 flex flex-col items-center py-3 transition-colors ${
              activeTab === 'encyclopedia' ? 'text-accent' : 'text-muted'
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" />
            </svg>
            <span className="text-xs mt-1 font-medium">図鑑</span>
          </button>
        </div>
      </div>

      {/* FAB - Add record button */}
      <Link
        href="/add"
        className="fixed bottom-20 right-6 w-14 h-14 bg-accent text-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent/90 transition-colors z-40"
        aria-label="記録を追加"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </Link>

      {/* Record modal */}
      {selectedDate && (
        <RecordModal
          date={selectedDate}
          records={selectedRecords}
          onClose={() => setSelectedDate(null)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
