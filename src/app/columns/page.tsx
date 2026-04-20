import Link from 'next/link';

export const metadata = {
  title: 'お酒コラム - 酒ログ',
  description: '日本酒、ウイスキー、ビールの基礎知識をわかりやすく解説。初心者から愛好家まで楽しめるお酒のコラム集です。',
};

const COLUMNS = [
  {
    href: '/columns/sake-basics',
    emoji: '🍶',
    title: '日本酒の基礎知識',
    description: '特定名称酒の分類、日本酒度の読み方、温度帯による味わいの違いなど、日本酒をもっと楽しむための基本を解説します。',
    color: '#C53D43',
  },
  {
    href: '/columns/whisky-basics',
    emoji: '🥃',
    title: 'ウイスキーの基礎知識',
    description: 'シングルモルトとブレンデッドの違い、世界の産地、飲み方のバリエーションなど、ウイスキーの世界への入門ガイドです。',
    color: '#8B6914',
  },
  {
    href: '/columns/beer-basics',
    emoji: '🍺',
    title: 'ビールの基礎知識',
    description: 'ラガーとエールの違い、クラフトビールのスタイル、美味しい注ぎ方など、ビールをより深く楽しむための知識を紹介します。',
    color: '#B8860B',
  },
];

export default function ColumnsPage() {
  return (
    <div className="prose prose-sm max-w-none text-foreground">
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
        <h2 className="text-lg font-bold">お酒コラム</h2>
      </div>

      <div className="space-y-6 text-sm leading-relaxed">
        <p className="text-muted">
          お酒をもっと楽しむための基礎知識をまとめました。
          初心者の方はもちろん、お酒好きの方も新しい発見があるかもしれません。
        </p>

        <div className="space-y-4">
          {COLUMNS.map((col) => (
            <Link
              key={col.href}
              href={col.href}
              className="block rounded-xl p-4 transition-all active:scale-[0.98] no-underline"
              style={{
                background: `linear-gradient(135deg, ${col.color}08 0%, ${col.color}12 100%)`,
                border: `1px solid ${col.color}20`,
              }}
            >
              <div className="flex gap-3 items-start">
                <span className="text-3xl shrink-0">{col.emoji}</span>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: col.color }}>
                    {col.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">{col.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            href="/about"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(197,61,67,0.08)', color: '#C53D43' }}
          >
            🍶 酒ログについて
          </Link>
          <Link
            href="/guide"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(139,105,20,0.08)', color: '#8B6914' }}
          >
            📘 使い方ガイド
          </Link>
        </div>
      </div>
    </div>
  );
}
