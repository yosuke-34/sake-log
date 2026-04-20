'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { BrandSummary } from '@/lib/encyclopediaUtils';
import { DRINK_EMOJI, getVolumeMedal, getVolumeProgress, MEDAL_INFO } from '@/lib/encyclopediaUtils';

interface BrandBookPageProps {
  summary: BrandSummary;
  onClose: () => void;
}

function formatVolume(ml: number): string {
  if (ml >= 1000) return `${(ml / 1000).toFixed(1)}L`;
  return `${ml}ml`;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

export default function BrandBookPage({ summary, onClose }: BrandBookPageProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const emoji = DRINK_EMOJI[summary.drinkType] || '🍶';
  const record = summary.records[currentPage];
  const note = record?.note || summary.latestNote;

  // 写真のある全レコードを集める
  const photosWithIndex = summary.records
    .map((r, i) => ({ photo: r.photo_url, index: i }))
    .filter(p => p.photo);
  const currentRecordPhoto = record?.photo_url;
  const currentPhotoIdx = photosWithIndex.findIndex(p => p.index === currentPage);

  // メダル
  const medal = getVolumeMedal(summary.totalVolume);
  const medalInfo = medal ? MEDAL_INFO[medal] : null;
  const progress = getVolumeProgress(summary.totalVolume);

  const goToPrev = () => setCurrentPage(Math.max(0, currentPage - 1));
  const goToNext = () => setCurrentPage(Math.min(summary.records.length - 1, currentPage + 1));
  const hasPrev = currentPage > 0;
  const hasNext = currentPage < summary.records.length - 1;

  return (
    <div>
      <style>{`
        @keyframes bookOpen {
          0% { transform: perspective(800px) rotateY(-15deg) scale(0.9); opacity: 0; }
          100% { transform: perspective(800px) rotateY(0deg) scale(1); opacity: 1; }
        }
        @keyframes bookOverlayIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes medalBounce {
          0% { transform: scale(0); }
          50% { transform: scale(1.3); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .book-overlay { animation: bookOverlayIn 0.25s ease-out; }
        .book-container { animation: bookOpen 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .medal-badge { animation: medalBounce 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
      `}</style>
      <div
        className="book-overlay fixed inset-0 z-50 overflow-y-auto"
        style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
        onClick={onClose}
      >
        <div className="min-h-full flex items-center justify-center p-4 py-8">
        <div
          className="book-container w-full max-w-lg rounded-lg overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#F5EDE0',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 0 30px rgba(0,0,0,0.05)',
          }}
        >
          {/* 本の上部装飾 */}
          <div
            className="h-2"
            style={{
              background: 'linear-gradient(90deg, #8B6914 0%, #C4A24E 20%, #D4B85A 50%, #C4A24E 80%, #8B6914 100%)',
            }}
          />

          {/* 見開きページ */}
          <div className="flex flex-col sm:flex-row">
            {/* 左ページ: 写真スライダー */}
            <div
              className="sm:w-1/2 p-4 flex flex-col items-center justify-center relative"
              style={{
                background: 'linear-gradient(135deg, #F5EDE0 0%, #EDE4D3 100%)',
                borderRight: '1px solid rgba(139,105,20,0.15)',
              }}
            >
              {/* ページ番号 */}
              {summary.records.length > 1 && (
                <div className="absolute top-2 left-3 text-xs" style={{ color: 'rgba(60,42,30,0.3)' }}>
                  {currentPage + 1} / {summary.records.length}
                </div>
              )}

              {/* メダルバッジ（写真の右上） */}
              {medalInfo && (
                <div className="absolute top-2 right-3 z-10 medal-badge">
                  <span className="text-2xl" title={medalInfo.label}>{medalInfo.emoji}</span>
                </div>
              )}

              {/* 写真 + スライド矢印 */}
              <div className="relative">
                {currentRecordPhoto ? (
                  <div
                    className="rounded-md overflow-hidden"
                    style={{
                      width: '200px',
                      height: '220px',
                      boxShadow: '2px 3px 12px rgba(0,0,0,0.15)',
                      border: '3px solid #FFF8F0',
                    }}
                  >
                    <img
                      src={currentRecordPhoto}
                      alt={summary.brandName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center gap-2 rounded-lg"
                    style={{
                      width: '200px',
                      height: '180px',
                      background: 'rgba(255,248,240,0.8)',
                      border: '2px dashed rgba(139,105,20,0.2)',
                    }}
                  >
                    <span className="text-5xl">{emoji}</span>
                    <span className="text-xs" style={{ color: 'rgba(60,42,30,0.4)' }}>No Photo</span>
                  </div>
                )}

                {/* 左矢印 */}
                {summary.records.length > 1 && hasPrev && (
                  <button
                    onClick={goToPrev}
                    className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all active:scale-90"
                    style={{
                      background: 'rgba(255,248,240,0.95)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      border: '1px solid rgba(139,105,20,0.15)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2.5">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                )}

                {/* 右矢印 */}
                {summary.records.length > 1 && hasNext && (
                  <button
                    onClick={goToNext}
                    className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all active:scale-90"
                    style={{
                      background: 'rgba(255,248,240,0.95)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      border: '1px solid rgba(139,105,20,0.15)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                )}
              </div>

              {/* ページドット */}
              {summary.records.length > 1 && (
                <div className="flex gap-1.5 mt-3">
                  {summary.records.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{
                        background: i === currentPage ? '#C53D43' : 'rgba(60,42,30,0.2)',
                        transform: i === currentPage ? 'scale(1.3)' : 'scale(1)',
                      }}
                    />
                  ))}
                </div>
              )}

              {/* 中央の綴じ目シャドウ */}
              <div
                className="absolute top-0 bottom-0 right-0 w-4 hidden sm:block pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.06) 60%, rgba(0,0,0,0.1) 100%)',
                }}
              />
            </div>

            {/* 右ページ: 詳細情報 */}
            <div
              className="sm:w-1/2 p-5 relative"
              style={{
                background: 'linear-gradient(135deg, #EDE4D3 0%, #F5EDE0 100%)',
              }}
            >
              {/* 綴じ目シャドウ */}
              <div
                className="absolute top-0 bottom-0 left-0 w-4 hidden sm:block pointer-events-none"
                style={{
                  background: 'linear-gradient(270deg, transparent 0%, rgba(0,0,0,0.06) 60%, rgba(0,0,0,0.1) 100%)',
                }}
              />

              {/* 銘柄名 */}
              <h2
                className="text-xl font-bold mb-1 leading-tight"
                style={{ color: '#3C2A1E', fontFamily: '"Noto Serif JP", serif' }}
              >
                {summary.brandName}
              </h2>

              {/* 酒造名 */}
              {summary.maker && (
                <p className="text-sm mb-2" style={{ color: 'rgba(60,42,30,0.6)' }}>
                  {summary.makerUrl ? (
                    <a
                      href={summary.makerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors"
                      style={{ color: '#8B6914' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {summary.maker}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  ) : (
                    summary.maker
                  )}
                </p>
              )}

              {/* バッジ */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(197,61,67,0.12)', color: '#C53D43' }}
                >
                  {summary.drinkType}
                </span>
                {record?.sake_type && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(197,61,67,0.08)', color: '#C53D43' }}
                  >
                    {record.sake_type}
                  </span>
                )}
                {summary.prefecture !== 'その他' && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(139,105,20,0.1)', color: '#8B6914' }}
                  >
                    {summary.prefecture}
                  </span>
                )}
              </div>

              {/* メダル・進捗セクション */}
              {(medalInfo || progress) && (
                <div
                  className="rounded-lg p-2.5 mb-3"
                  style={{
                    background: medalInfo ? medalInfo.bgColor : 'rgba(60,42,30,0.05)',
                    border: `1px solid ${medalInfo ? medalInfo.color + '30' : 'rgba(60,42,30,0.1)'}`,
                  }}
                >
                  {medalInfo ? (
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{medalInfo.emoji}</span>
                      <div>
                        <p className="text-xs font-bold" style={{ color: medalInfo.color }}>
                          {medalInfo.label}達成！
                        </p>
                        <p className="text-xs" style={{ color: 'rgba(60,42,30,0.5)' }}>
                          累計 {formatVolume(summary.totalVolume)}
                        </p>
                      </div>
                    </div>
                  ) : progress && (
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs" style={{ color: 'rgba(60,42,30,0.5)' }}>
                          {progress.label}
                        </span>
                        <span className="text-xs font-bold" style={{ color: 'rgba(60,42,30,0.6)' }}>
                          {formatVolume(progress.current)} / {formatVolume(progress.next)}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(60,42,30,0.1)' }}>
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${Math.min(100, (progress.current / progress.next) * 100)}%`,
                            background: 'linear-gradient(90deg, #CD7F32, #D4A24E)',
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 区切り線 */}
              <div className="h-px mb-2.5" style={{ background: 'rgba(139,105,20,0.15)' }} />

              {/* 詳細情報 */}
              <div className="space-y-2 text-sm" style={{ color: '#3C2A1E' }}>
                <div className="flex items-start gap-2">
                  <span className="shrink-0 w-5 text-center opacity-60">📅</span>
                  <div>
                    <span className="text-xs block" style={{ color: 'rgba(60,42,30,0.5)' }}>飲んだ日</span>
                    <span>{formatDate(record?.date || summary.latestDate)}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="shrink-0 w-5 text-center opacity-60">📍</span>
                  <div>
                    <span className="text-xs block" style={{ color: 'rgba(60,42,30,0.5)' }}>お店・場所</span>
                    <span>{record?.location || summary.latestLocation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="shrink-0 w-5 text-center opacity-60">🍶</span>
                  <div>
                    <span className="text-xs block" style={{ color: 'rgba(60,42,30,0.5)' }}>飲酒量</span>
                    <span>{formatVolume(record?.volume_ml || 0)}</span>
                    {summary.recordCount > 1 && (
                      <span className="text-xs ml-1" style={{ color: 'rgba(60,42,30,0.4)' }}>
                        （合計 {formatVolume(summary.totalVolume)} / {summary.recordCount}回）
                      </span>
                    )}
                  </div>
                </div>

                {note && (
                  <div className="flex items-start gap-2">
                    <span className="shrink-0 w-5 text-center opacity-60">📝</span>
                    <div>
                      <span className="text-xs block" style={{ color: 'rgba(60,42,30,0.5)' }}>メモ</span>
                      <span className="italic" style={{ color: 'rgba(60,42,30,0.8)' }}>
                        {note}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 楽天で購入リンク */}
          <div
            className="px-4 py-2"
            style={{
              background: 'linear-gradient(180deg, #F5EDE0 0%, #E8DFD0 100%)',
              borderTop: '1px solid rgba(139,105,20,0.08)',
            }}
          >
            <a
              href={`https://hb.afl.rakuten.co.jp/ichiba/5229625a.cf8fbb4e.5229625b.f1834795/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F${encodeURIComponent(summary.brandName + ' ' + summary.drinkType)}%2F&link_type=hybrid_url&ut=eyJwYWdlIjoic2VhcmNoIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-bold transition-all active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #BF0000 0%, #E60012 100%)',
                color: '#fff',
                boxShadow: '0 2px 8px rgba(191,0,0,0.2)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
              楽天市場でこの銘柄を探す
            </a>
            <p className="text-center mt-1" style={{ fontSize: '10px', color: 'rgba(60,42,30,0.35)' }}>
              ※ 楽天市場の検索結果に移動します
            </p>
          </div>

          {/* フッターボタン */}
          <div
            className="flex items-center justify-between px-4 py-2"
            style={{
              background: 'linear-gradient(180deg, #E8DFD0 0%, #DDD4C4 100%)',
              borderTop: '1px solid rgba(139,105,20,0.12)',
            }}
          >
            <button
              onClick={() => router.push(`/edit/${record?.id}`)}
              className="text-sm px-3 py-1 rounded-full flex items-center gap-1 transition-colors"
              style={{ color: '#C53D43', background: 'rgba(197,61,67,0.08)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              編集
            </button>
            <button
              onClick={onClose}
              className="text-sm px-4 py-1 rounded"
              style={{ color: 'rgba(60,42,30,0.5)' }}
            >
              とじる
            </button>
          </div>

          {/* 本の下部装飾 */}
          <div
            className="h-2"
            style={{
              background: 'linear-gradient(90deg, #8B6914 0%, #C4A24E 20%, #D4B85A 50%, #C4A24E 80%, #8B6914 100%)',
            }}
          />
        </div>
        </div>
      </div>
    </div>
  );
}
