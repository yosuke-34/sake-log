'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { supabase, supabaseConfigured } from '@/lib/supabase';
import { getDeviceId } from '@/lib/deviceId';
import { DrinkRecord } from '@/types';
import AddRecordForm from '@/components/AddRecordForm';

export default function EditPage() {
  const params = useParams();
  const id = params.id as string;
  const [record, setRecord] = useState<DrinkRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecord() {
      if (!supabaseConfigured || !id) {
        setLoading(false);
        return;
      }
      try {
        const deviceId = getDeviceId();
        const { data, error } = await supabase
          .from('drink_records')
          .select('*')
          .eq('id', id)
          .eq('device_id', deviceId)
          .single();

        if (error) throw error;
        setRecord(data as DrinkRecord);
      } catch (err) {
        console.error('取得エラー:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchRecord();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-muted">読み込み中...</div>
      </div>
    );
  }

  if (!record) {
    return (
      <div className="text-center py-20">
        <p className="text-muted mb-4">記録が見つかりません</p>
        <Link href="/" className="text-accent underline">トップに戻る</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-border/50 transition-colors text-foreground"
          aria-label="戻る"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <h2 className="text-lg font-bold">記録を編集する</h2>
      </div>
      <AddRecordForm editRecord={record} />
    </div>
  );
}
