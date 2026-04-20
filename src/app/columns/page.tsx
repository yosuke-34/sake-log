import Link from 'next/link';
import AdBannerWrapper from '@/components/AdBannerWrapper';

export const metadata = {
  title: 'お酒コラム - 日本酒・ウイスキー・ビール・ワイン・焼酎の基礎知識',
  description: '日本酒・ウイスキー・ビール・ワイン・焼酎の基礎知識から、二日酔い対策、お酒と料理のマリアージュまで。初心者から愛好家まで楽しめる、お酒の世界を深める読み物を集めました。',
};

const COLUMN_GROUPS = [
  {
    groupName: 'お酒の種類別ガイド',
    columns: [
      {
        href: '/columns/sake-basics',
        emoji: '🍶',
        title: '日本酒の基礎知識',
        description: '特定名称酒の分類、日本酒度の読み方、温度帯による味わいの違い、保存方法など、日本酒をもっと楽しむための基本を解説。',
        color: '#C53D43',
      },
      {
        href: '/columns/whisky-basics',
        emoji: '🥃',
        title: 'ウイスキーの基礎知識',
        description: 'シングルモルトとブレンデッドの違い、世界5大産地、飲み方のバリエーションなど、ウイスキーの世界への入門ガイド。',
        color: '#8B6914',
      },
      {
        href: '/columns/beer-basics',
        emoji: '🍺',
        title: 'ビールの基礎知識',
        description: 'ラガーとエールの違い、クラフトビールのスタイル、美味しい注ぎ方など、ビールをより深く楽しむための知識。',
        color: '#B8860B',
      },
      {
        href: '/columns/shochu-basics',
        emoji: '🍠',
        title: '焼酎の基礎知識',
        description: '乙類・甲類の違いから、芋・麦・米・黒糖・泡盛など原料別の特徴、九州各県の地域性、飲み方のコツまで徹底解説。',
        color: '#A52D35',
      },
      {
        href: '/columns/wine-basics',
        emoji: '🍷',
        title: 'ワインの基礎知識',
        description: '赤白ロゼスパークリングの違い、主要ブドウ品種、フランス・イタリア・新世界・日本の産地特徴、テイスティングまで。',
        color: '#6B1E2E',
      },
    ],
  },
  {
    groupName: '楽しみ方・健康ガイド',
    columns: [
      {
        href: '/columns/food-pairing',
        emoji: '🍽️',
        title: 'お酒と料理のマリアージュ',
        description: '失敗しない5つの原則、お酒の種類ごとの王道ペアリング、シーン別おすすめ。家飲みから特別な日まで役立つ実用ガイド。',
        color: '#8B6914',
      },
      {
        href: '/columns/hangover-care',
        emoji: '💧',
        title: '二日酔いの原因と対策',
        description: 'アセトアルデヒド・脱水・低血糖など科学的原因から、予防・翌朝のケア・症状別のおすすめ食べ物まで完全解説。',
        color: '#3C2A1E',
      },
    ],
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
        <h2 className="text-lg font-bold">📝 お酒コラム</h2>
      </div>

      <div className="space-y-6 text-sm leading-relaxed">
        <p className="text-muted">
          お酒をもっと楽しむための基礎知識と読み物をまとめました。
          初めての一杯を選ぶときのヒントから、長く付き合うための健康知識まで、
          ジャンル別にご紹介します。
        </p>

        {COLUMN_GROUPS.map((group) => (
          <section key={group.groupName}>
            <h3 className="text-sm font-bold mb-3 pb-2 border-b" style={{ color: '#3C2A1E', borderColor: 'rgba(60,42,30,0.15)' }}>
              {group.groupName}
            </h3>
            <div className="space-y-3">
              {group.columns.map((col) => (
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
                    <div className="flex-1">
                      <h4 className="font-bold text-sm mb-1" style={{ color: col.color }}>
                        {col.title}
                      </h4>
                      <p className="text-xs text-muted leading-relaxed">{col.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <AdBannerWrapper />

        <section
          className="rounded-xl p-4"
          style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.15)' }}
        >
          <h4 className="font-bold text-sm mb-2" style={{ color: '#C53D43' }}>お酒とともに、健やかな毎日を</h4>
          <p className="text-xs text-muted">
            酒ログは、お酒を楽しむ方々が自分のペースで記録・振り返りできることを目指しています。
            適度な飲酒は食事や人との時間をより豊かにしますが、健康を損なわないことが何より大切です。
            飲酒は20歳になってから、<Link href="/responsible-drinking" className="underline" style={{ color: '#C53D43' }}>適正飲酒ガイド</Link>
            を参考に、ご自身のペースで楽しみましょう。
          </p>
        </section>

        <div className="flex gap-3 pt-2">
          <Link
            href="/about"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(197,61,67,0.08)', color: '#C53D43' }}
          >
            🏠 酒ログについて
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
