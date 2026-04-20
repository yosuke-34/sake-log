import Link from 'next/link';
import AdBannerWrapper from '@/components/AdBannerWrapper';

export const metadata = {
  title: 'ウイスキーの基礎知識 - 酒ログ',
  description: 'シングルモルトとブレンデッドの違い、スコッチ・バーボン・ジャパニーズウイスキーの特徴、基本的な飲み方から熟成年数の意味まで、ウイスキーの世界を初心者にもわかりやすく解説します。',
};

export default function WhiskyBasicsPage() {
  return (
    <div className="prose prose-sm max-w-none text-foreground">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/columns"
          className="p-2 rounded-full hover:bg-border/50 transition-colors text-foreground"
          aria-label="戻る"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <h2 className="text-lg font-bold">🥃 ウイスキーの基礎知識</h2>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* ヒーロー画像 */}
        <section className="rounded-xl overflow-hidden relative" style={{ height: '200px' }}>
          <img
            src="/hero-uxi.png"
            alt="ウイスキー"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }}>
            <p className="text-xs" style={{ color: 'rgba(255,253,245,0.9)', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              ウイスキーの世界への入門ガイド
            </p>
          </div>
        </section>

        <section>
          <p className="text-muted">
            ウイスキーは穀物を原料とし、蒸留・樽熟成を経て造られる奥深いお酒です。
            世界各地で個性豊かなウイスキーが造られており、その多様性こそがウイスキーの最大の魅力です。
          </p>
        </section>

        {/* モルトとブレンデッド */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>シングルモルトとブレンデッド</h3>
          <p className="text-muted mb-3">
            ウイスキーは原料と製法によって大きく分類されます。まずはこの2つを理解しましょう。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>シングルモルト</h4>
              <p className="text-xs text-muted">
                単一の蒸留所で、大麦麦芽（モルト）のみを原料として造られたウイスキー。蒸留所ごとの個性が色濃く反映されるのが特徴です。
                同じスコットランドでも、海辺の蒸留所は潮の香り、山間部の蒸留所はフローラルな香りといった地域特性が味わいに現れます。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.03)', border: '1px solid rgba(139,105,20,0.1)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>ブレンデッド</h4>
              <p className="text-xs text-muted">
                複数の蒸留所のモルトウイスキーとグレーンウイスキー（トウモロコシ等の穀物原料）をブレンドしたウイスキー。
                バランスの取れた飲みやすい味わいが特徴で、ハイボールなどのカクテルベースとしても人気です。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.02)', border: '1px solid rgba(139,105,20,0.08)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>シングルグレーン</h4>
              <p className="text-xs text-muted">
                単一の蒸留所で穀物（トウモロコシ、小麦等）を原料として造られたウイスキー。
                軽やかで甘みのある味わいが特徴で、近年注目を集めています。
              </p>
            </div>
          </div>
        </section>

        {/* 世界の産地 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>世界5大ウイスキー</h3>
          <p className="text-muted mb-3">
            ウイスキーの世界には「5大ウイスキー」と呼ばれる主要な産地があります。それぞれに独自の個性と伝統があります。
          </p>

          <div className="space-y-3">
            {[
              {
                name: 'スコッチウイスキー（スコットランド）',
                desc: 'ウイスキーの故郷とも言えるスコットランド産。スペイサイドのフルーティーなものから、アイラ島のスモーキーなピート香が特徴的なものまで、地域ごとに多彩な味わいが楽しめます。',
              },
              {
                name: 'アイリッシュウイスキー（アイルランド）',
                desc: '3回蒸留が一般的で、なめらかで軽やかな口当たりが特徴。ウイスキー初心者にもおすすめの飲みやすい味わいです。',
              },
              {
                name: 'バーボンウイスキー（アメリカ）',
                desc: '原料の51%以上がトウモロコシで、新しいオーク樽で熟成されます。バニラやキャラメルのような甘い香りと、力強い味わいが特徴です。',
              },
              {
                name: 'カナディアンウイスキー（カナダ）',
                desc: 'ライ麦を多く使用し、ライトでスムースな味わいが特徴。カクテルのベースとして世界中で愛されています。',
              },
              {
                name: 'ジャパニーズウイスキー（日本）',
                desc: 'スコッチの製法をベースに、日本独自の繊細な味わいを追求。近年、国際的な品評会で高い評価を受け、世界的な人気を博しています。水や気候の影響で、繊細かつ複雑な味わいが特徴です。',
              },
            ].map((region) => (
              <div key={region.name}>
                <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>{region.name}</h4>
                <p className="text-xs text-muted">{region.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 飲み方 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>ウイスキーの飲み方</h3>
          <p className="text-muted mb-3">
            ウイスキーにはさまざまな飲み方があり、それぞれで異なる表情を楽しめます。
          </p>

          <div className="space-y-2">
            {[
              { name: 'ストレート', desc: '何も加えず、そのままの味わいを楽しむ飲み方。ウイスキー本来の香りと味を堪能できます。少量の水（トワイスアップ用）を添えるのがマナーです。' },
              { name: 'トワイスアップ', desc: 'ウイスキーと同量の常温の水を加える飲み方。香りが最も開きやすく、テイスティングでもよく使われます。' },
              { name: 'オン・ザ・ロック', desc: '大きめの氷を入れたグラスにウイスキーを注ぐ飲み方。時間とともに温度が下がり、味わいの変化を楽しめます。' },
              { name: 'ハイボール', desc: 'ウイスキーを炭酸水で割る飲み方。日本で最も人気があり、食事との相性が抜群です。ウイスキー1に対して炭酸水3〜4が目安です。' },
              { name: '水割り', desc: 'ウイスキーを水で割る日本独自の飲み方。やわらかな味わいになり、食事中にゆっくり楽しめます。' },
              { name: 'ホットウイスキー', desc: 'ウイスキーにお湯を注ぐ飲み方。寒い季節にぴったりで、レモンやハチミツを加えてアレンジも楽しめます。' },
            ].map((style) => (
              <div key={style.name} className="flex gap-2 text-xs">
                <span className="font-bold shrink-0 w-24" style={{ color: '#8B6914' }}>{style.name}</span>
                <span className="text-muted">{style.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 熟成年数 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>熟成年数と味わい</h3>
          <div className="space-y-2 text-muted">
            <p>
              ウイスキーのラベルに書かれた「12年」「18年」などの数字は、樽の中で熟成された最低年数を示しています。
            </p>
            <p>
              熟成が長いほど、樽由来のバニラやスパイスの風味が増し、角が取れたまろやかな味わいになります。
              ただし、熟成年数が長ければ必ず美味しいというわけではなく、若いウイスキーには若いなりのフレッシュで活き活きとした魅力があります。
            </p>
            <p>
              近年は原酒不足から「ノンエイジ（NAS）」と呼ばれる年数表記のないウイスキーも増えています。
              年数にとらわれず、自分の好みの味わいを見つけることが大切です。
            </p>
          </div>
        </section>

        <AdBannerWrapper />

        {/* ナビゲーション */}
        <div className="flex gap-3 pt-2">
          <Link
            href="/columns/sake-basics"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(197,61,67,0.08)', color: '#C53D43' }}
          >
            🍶 日本酒の基礎知識
          </Link>
          <Link
            href="/columns/beer-basics"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(184,134,11,0.08)', color: '#B8860B' }}
          >
            🍺 ビールの基礎知識
          </Link>
        </div>
      </div>
    </div>
  );
}
