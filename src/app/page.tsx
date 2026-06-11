import Link from 'next/link';
import type { Metadata } from 'next';
import AdBannerWrapper from '@/components/AdBannerWrapper';
import FirstVisitRouter from '@/components/FirstVisitRouter';

export const metadata: Metadata = {
  title: '酒ログ - お酒の楽しみ方を学べるメディア｜日本酒・ウイスキー・ビール・焼酎・ワイン',
  description: '日本酒・ウイスキー・ビール・焼酎・ワインの基礎知識、人気銘柄ガイド、料理とのマリアージュ、二日酔いケア、適正飲酒まで——お酒をもっと深く楽しむための情報メディア「酒ログ」。記録アプリ機能で自分の飲酒履歴も管理できます。',
};

const FEATURED_COLUMNS = [
  {
    href: '/columns/sake-basics',
    emoji: '🍶',
    title: '日本酒の基礎知識',
    excerpt: '特定名称酒の分類、日本酒度・酸度の読み方、生酛/山廃/速醸の違い、新潟・兵庫・京都など主要産地の特徴、酒器選びまで体系的に解説。',
    tags: ['特定名称酒', '産地ガイド', '酒米', '銘柄紹介'],
    color: '#C53D43',
    readTime: '約12分',
  },
  {
    href: '/columns/whisky-basics',
    emoji: '🥃',
    title: 'ウイスキーの基礎知識',
    excerpt: 'シングルモルトとブレンデッドの違い、スコッチ6リージョン、樽の種類が味に与える影響、ハイボールの黄金比、ジャパニーズの歴史まで完全網羅。',
    tags: ['5大ウイスキー', '樽の種類', 'ハイボール', '銘柄紹介'],
    color: '#8B6914',
    readTime: '約11分',
  },
  {
    href: '/columns/beer-basics',
    emoji: '🍺',
    title: 'ビールの基礎知識',
    excerpt: 'ラガーとエール、IPA・スタウト・ヴァイツェンなどビアスタイル、ホップと麦芽、IBU/ABV/SRM、グラス選び、日本のクラフトブルワリーまで。',
    tags: ['ビアスタイル', 'ホップ品種', 'クラフト', '銘柄紹介'],
    color: '#B8860B',
    readTime: '約11分',
  },
  {
    href: '/columns/shochu-basics',
    emoji: '🍠',
    title: '焼酎の基礎知識',
    excerpt: '乙類・甲類の違い、芋・麦・米・黒糖・泡盛の原料別個性、九州地域性、ロック/水割り/お湯割り/前割りの楽しみ方、3M銘柄紹介まで徹底解説。',
    tags: ['原料別', '九州地域', '飲み方', '焼酎3M'],
    color: '#A52D35',
    readTime: '約9分',
  },
  {
    href: '/columns/wine-basics',
    emoji: '🍷',
    title: 'ワインの基礎知識',
    excerpt: '赤・白・ロゼ・スパークリングの4タイプ、主要ブドウ品種、フランス・イタリア・新世界・日本の産地特徴、テイスティング手順、銘柄紹介まで。',
    tags: ['ブドウ品種', '産地', 'テイスティング', '銘柄紹介'],
    color: '#6B1E2E',
    readTime: '約10分',
  },
];

const PRACTICAL_COLUMNS = [
  {
    href: '/columns/food-pairing',
    emoji: '🍽️',
    title: 'お酒と料理のマリアージュ',
    excerpt: '失敗しない5つの原則、日本酒/ビール/ワイン/ウイスキー/焼酎それぞれの王道ペアリング、家飲み/お祝い/和食シーン別のおすすめ。',
    color: '#8B6914',
    readTime: '約12分',
  },
  {
    href: '/columns/hangover-care',
    emoji: '💧',
    title: '二日酔いの原因と対策',
    excerpt: 'アセトアルデヒド・脱水・低血糖など科学的な5つの原因、飲む前/最中/翌朝の実践的ケア、症状別のおすすめ食べ物まで完全解説。',
    color: '#3C2A1E',
    readTime: '約9分',
  },
];

const ALCOHOL_TYPES = [
  { name: '日本酒', emoji: '🍶', href: '/columns/sake-basics', color: '#C53D43', count: '1,150蔵元' },
  { name: 'ウイスキー', emoji: '🥃', href: '/columns/whisky-basics', color: '#8B6914', count: '世界5大産地' },
  { name: 'ビール', emoji: '🍺', href: '/columns/beer-basics', color: '#B8860B', count: '100+スタイル' },
  { name: '焼酎', emoji: '🍠', href: '/columns/shochu-basics', color: '#A52D35', count: '5原料' },
  { name: 'ワイン', emoji: '🍷', href: '/columns/wine-basics', color: '#6B1E2E', count: '8,000年の歴史' },
];

export default function HomePage() {
  return (
    <div className="pb-14 text-foreground">
      {/* リピーターは /calendar へ自動転送、初回はランディングを表示 */}
      <FirstVisitRouter />

      {/* 年齢確認バナー */}
      <div
        className="rounded-lg px-3 py-2 mb-4 text-[11px] flex items-center gap-2"
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

      {/* ヒーローセクション */}
      <section
        className="rounded-2xl p-5 mb-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(197,61,67,0.08) 0%, rgba(139,105,20,0.08) 50%, rgba(60,42,30,0.06) 100%)',
          border: '1px solid rgba(197,61,67,0.18)',
        }}
      >
        <h2 className="text-xl font-bold mb-2" style={{ color: '#3C2A1E', fontFamily: '"Noto Serif JP", serif' }}>
          お酒の楽しみ方を、もっと深く。
        </h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          酒ログは、日本酒・ウイスキー・ビール・焼酎・ワインの基礎から、料理との合わせ方、適正飲酒の知識まで、
          お酒を楽しむすべての人のための情報メディアです。記録アプリ機能で、あなた自身のお酒履歴も
          振り返ることができます。
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/columns"
            className="text-center py-2.5 rounded-lg text-sm font-bold transition-colors no-underline"
            style={{ background: '#C53D43', color: '#fff' }}
          >
            📝 コラムを読む
          </Link>
          <Link
            href="/calendar"
            className="text-center py-2.5 rounded-lg text-sm font-bold transition-colors no-underline"
            style={{ background: 'rgba(139,105,20,0.15)', color: '#8B6914', border: '1px solid rgba(139,105,20,0.3)' }}
          >
            📅 アプリを開く
          </Link>
        </div>
      </section>

      {/* お酒の種類別ガイド */}
      <section className="mb-6">
        <h2 className="text-base font-bold mb-3 pb-2 border-b" style={{ color: '#3C2A1E', borderColor: 'rgba(60,42,30,0.15)' }}>
          🍶 お酒の種類別ガイド
        </h2>
        <p className="text-xs text-muted mb-3">
          世界には数えきれないほどのお酒がありますが、まずは大きな分類を押さえると一気に世界が広がります。
        </p>
        <div className="grid grid-cols-5 gap-2">
          {ALCOHOL_TYPES.map((t) => (
            <Link
              key={t.name}
              href={t.href}
              className="rounded-xl p-2 text-center transition-all active:scale-95 no-underline"
              style={{
                background: `${t.color}10`,
                border: `1px solid ${t.color}25`,
              }}
            >
              <div className="text-2xl mb-1">{t.emoji}</div>
              <div className="text-[10px] font-bold mb-0.5" style={{ color: t.color }}>{t.name}</div>
              <div className="text-[9px] text-muted leading-tight">{t.count}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* お酒コラム（種類別） */}
      <section className="mb-6">
        <h2 className="text-base font-bold mb-3 pb-2 border-b" style={{ color: '#3C2A1E', borderColor: 'rgba(60,42,30,0.15)' }}>
          📚 お酒の基礎を深く知る
        </h2>
        <p className="text-xs text-muted mb-3">
          各お酒の歴史・製法・産地・銘柄ガイドを、専門家の参考資料に基づいて丁寧に解説。
          1記事あたり3,000〜5,000字の読み応え。
        </p>
        <div className="space-y-3">
          {FEATURED_COLUMNS.map((col) => (
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
                <span className="text-3xl shrink-0 mt-0.5">{col.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-bold text-sm" style={{ color: col.color }}>
                      {col.title}
                    </h3>
                    <span className="text-[10px] text-muted shrink-0">{col.readTime}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-2">{col.excerpt}</p>
                  <div className="flex flex-wrap gap-1">
                    {col.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 rounded"
                        style={{ background: `${col.color}15`, color: col.color }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdBannerWrapper />

      {/* お酒コラム（実用編） */}
      <section className="mb-6">
        <h2 className="text-base font-bold mb-3 pb-2 border-b" style={{ color: '#3C2A1E', borderColor: 'rgba(60,42,30,0.15)' }}>
          🍽️ もっと楽しむ・健やかに楽しむ
        </h2>
        <p className="text-xs text-muted mb-3">
          家飲みも特別な日も、お酒を健やかに楽しむための実用ガイド。
        </p>
        <div className="space-y-3">
          {PRACTICAL_COLUMNS.map((col) => (
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
                <span className="text-3xl shrink-0 mt-0.5">{col.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-bold text-sm" style={{ color: col.color }}>
                      {col.title}
                    </h3>
                    <span className="text-[10px] text-muted shrink-0">{col.readTime}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{col.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* アプリ機能の紹介 */}
      <section
        className="rounded-2xl p-5 mb-6"
        style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}
      >
        <h2 className="text-base font-bold mb-2" style={{ color: '#8B6914' }}>
          📅 飲酒記録アプリ機能
        </h2>
        <p className="text-xs text-muted mb-4 leading-relaxed">
          コラムだけでなく、酒ログには無料で使える「飲酒記録アプリ」機能もあります。
          飲んだお酒をカレンダーに記録し、銘柄図鑑や統計で自分の傾向を振り返ることができます。
          会員登録不要、データはご利用の端末で個別管理されます。
        </p>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.5)' }}>
            <div className="text-2xl mb-1">📅</div>
            <div className="text-[10px] font-bold mb-0.5" style={{ color: '#8B6914' }}>カレンダー</div>
            <div className="text-[9px] text-muted leading-tight">日付ごとに飲んだ銘柄を記録</div>
          </div>
          <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.5)' }}>
            <div className="text-2xl mb-1">📊</div>
            <div className="text-[10px] font-bold mb-0.5" style={{ color: '#8B6914' }}>飲酒量統計</div>
            <div className="text-[9px] text-muted leading-tight">純アルコール量で適量を可視化</div>
          </div>
          <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.5)' }}>
            <div className="text-2xl mb-1">📖</div>
            <div className="text-[10px] font-bold mb-0.5" style={{ color: '#8B6914' }}>銘柄図鑑</div>
            <div className="text-[9px] text-muted leading-tight">飲んだ銘柄を都道府県別に</div>
          </div>
        </div>
        <Link
          href="/calendar"
          className="block text-center py-2.5 rounded-lg text-sm font-bold transition-colors no-underline"
          style={{ background: '#8B6914', color: '#fff' }}
        >
          アプリを開く →
        </Link>
        <p className="text-[10px] text-muted mt-2 text-center">
          詳しい使い方は <Link href="/guide" className="underline" style={{ color: '#8B6914' }}>使い方ガイド</Link> をご覧ください。
        </p>
      </section>

      {/* 適正飲酒について */}
      <section
        className="rounded-2xl p-5 mb-6"
        style={{ background: 'linear-gradient(135deg, rgba(197,61,67,0.05) 0%, rgba(139,105,20,0.05) 100%)', border: '1px solid rgba(197,61,67,0.2)' }}
      >
        <h2 className="text-base font-bold mb-2" style={{ color: '#C53D43' }}>
          🍀 お酒は適量で、健やかに
        </h2>
        <p className="text-xs text-muted leading-relaxed mb-3">
          適度な飲酒は食事や人との時間をより豊かにしますが、健康を損なわないことが何より大切です。
          厚生労働省は「節度ある適度な飲酒」を1日あたり純アルコール約20g（ビール500ml、日本酒1合、
          ウイスキーダブル1杯程度）と定めています。お酒は20歳になってから、適量を守って楽しみましょう。
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/responsible-drinking"
            className="text-center py-2 rounded-lg text-xs font-bold transition-colors no-underline"
            style={{ background: 'rgba(197,61,67,0.12)', color: '#C53D43' }}
          >
            適正飲酒ガイド →
          </Link>
          <Link
            href="/columns/hangover-care"
            className="text-center py-2 rounded-lg text-xs font-bold transition-colors no-underline"
            style={{ background: 'rgba(60,42,30,0.08)', color: '#3C2A1E' }}
          >
            二日酔いケア →
          </Link>
        </div>
      </section>

      {/* サイトについて */}
      <section className="mb-6">
        <h2 className="text-base font-bold mb-3 pb-2 border-b" style={{ color: '#3C2A1E', borderColor: 'rgba(60,42,30,0.15)' }}>
          ℹ️ 酒ログについて
        </h2>
        <div className="space-y-2 text-xs text-muted leading-relaxed">
          <p>
            酒ログは、お酒を愛するすべての人のために運営される独立した情報メディアです。
            日本酒造組合中央会、国税庁、厚生労働省、各業界団体が公表する一次情報を参考に、
            初心者にも分かりやすい言葉で、お酒の世界を紹介しています。
          </p>
          <p>
            記事中で紹介する銘柄・店舗・サービスは、編集部が独自に選定したもので、
            広告や金銭的な対価による掲載は行っていません。各記事の末尾に「参考資料」を明示し、
            情報の信頼性を担保することを心がけています。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <Link
            href="/about"
            className="text-center py-2 rounded-lg text-xs font-bold transition-colors no-underline"
            style={{ background: 'rgba(197,61,67,0.08)', color: '#C53D43' }}
          >
            🏠 酒ログについて
          </Link>
          <Link
            href="/contact"
            className="text-center py-2 rounded-lg text-xs font-bold transition-colors no-underline"
            style={{ background: 'rgba(60,42,30,0.06)', color: '#3C2A1E' }}
          >
            ✉️ お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
