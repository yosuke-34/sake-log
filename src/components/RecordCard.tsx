'use client';

import Link from 'next/link';
import { DrinkRecord } from '@/types';

const DRINK_EMOJI: Record<string, string> = {
  'ウィスキー': '🥃',
  'ビール': '🍺',
  'ジン': '🍸',
  '日本酒': '🍶',
  '焼酎': '🫗',
  'ワイン': '🍷',
  'サワー': '🍹',
};

interface RecordCardProps {
  record: DrinkRecord;
  onDelete: (id: string) => void;
}

export default function RecordCard({ record, onDelete }: RecordCardProps) {
  const emoji = DRINK_EMOJI[record.drink_type] || '🍶';

  return (
    <div className="bg-card-bg rounded-xl border border-border p-4 shadow-sm">
      <div className="flex gap-3">
        {record.photo_url ? (
          <img
            src={record.photo_url}
            alt={record.brand}
            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
          />
        ) : (
          <div className="w-20 h-20 bg-border/30 rounded-lg flex items-center justify-center flex-shrink-0 text-3xl">
            {emoji}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-bold text-foreground truncate">{record.brand}</p>
              <p className="text-sm text-muted mt-0.5">
                {emoji} {record.drink_type}
                {record.sake_type && (
                  <span className="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                    {record.sake_type}
                  </span>
                )}
              </p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Link
                href={`/edit/${record.id}`}
                className="text-muted hover:text-accent transition-colors p-1"
                aria-label="編集"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </Link>
              <button
                onClick={() => onDelete(record.id)}
                className="text-muted hover:text-accent transition-colors p-1"
                aria-label="削除"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-1 text-sm text-muted">
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {record.location}
            </span>
            {record.volume_ml > 0 && (
              <span className="flex items-center gap-1 text-accent font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 2h8l-1 9H9L8 2z" />
                  <path d="M9 11l-1 9h8l-1-9" />
                </svg>
                {record.volume_ml.toLocaleString()}ml
              </span>
            )}
          </div>
          {record.note && (
            <p className="text-xs text-muted mt-1 line-clamp-2">{record.note}</p>
          )}
        </div>
      </div>
    </div>
  );
}
