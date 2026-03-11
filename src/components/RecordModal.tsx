'use client';

import { DrinkRecord } from '@/types';
import RecordCard from './RecordCard';

interface RecordModalProps {
  date: string;
  records: DrinkRecord[];
  onClose: () => void;
  onDelete: (id: string) => void;
}

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-');
  const date = new Date(Number(y), Number(m) - 1, Number(d));
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  return `${Number(m)}月${Number(d)}日（${weekdays[date.getDay()]}）`;
}

export default function RecordModal({ date, records, onClose, onDelete }: RecordModalProps) {
  return (
    <div
      className="modal-overlay fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content bg-background rounded-t-2xl sm:rounded-2xl w-full sm:max-w-lg max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-bold">{formatDate(date)}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-border/50 transition-colors"
            aria-label="閉じる"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Records list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {records.length === 0 ? (
            <p className="text-center text-muted py-8">この日の記録はありません</p>
          ) : (
            records.map((record) => (
              <RecordCard key={record.id} record={record} onDelete={onDelete} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
