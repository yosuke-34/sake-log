import Link from 'next/link';
import AdBannerWrapper from '@/components/AdBannerWrapper';

export const metadata = {
  title: '焼酎の基礎知識 - 乙類・甲類の違いから原料別の特徴、飲み方まで',
  description: '日本の蒸留酒・焼酎の基礎を徹底解説。乙類（本格焼酎）と甲類の違い、芋・麦・米・黒糖など原料ごとの香味特性、九州各県の地域性、ロック・水割り・お湯割り・前割りなど飲み方のコツまで網羅したガイドです。',
};

export default function ShochuBasicsPage() {
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
        <h2 className="text-lg font-bold">🍠 焼酎の基礎知識</h2>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* ヒーロー画像 */}
        <section className="rounded-xl overflow-hidden relative">
          <img
            src="/hero-shochu.png"
            alt="焼酎の黒ぢょかとおちょこのイメージ"
            className="block w-full h-auto"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)', paddingTop: '40px' }}>
            <p className="text-xs" style={{ color: 'rgba(255,253,245,0.92)', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              500年の歴史を持つ、日本固有の蒸留酒
            </p>
          </div>
        </section>

        {/* イントロ */}
        <section>
          <p className="text-muted">
            焼酎は日本が誇る蒸留酒で、500年以上の歴史を持ちます。米焼酎は熊本・球磨地方、芋焼酎は鹿児島・宮崎、
            麦焼酎は大分・長崎の壱岐、黒糖焼酎は奄美群島、泡盛は沖縄と、産地ごとに個性豊かに発展してきました。
            日本酒やワインと比べて「料理との守備範囲が広い」「カロリーあたりのアルコール量が高効率」
            「糖質・プリン体がほぼゼロ」といった実用的な長所もあり、近年国内外で評価が高まっています。
          </p>
          <p className="text-muted mt-2">
            ただ、スーパーの棚に並ぶ「甲類焼酎」と、居酒屋で銘柄指定される「本格焼酎」が
            まったく違う飲み物であることは、意外に知られていません。ここでは焼酎の分類、
            原料別の味わい、地域性、飲み方、保存方法まで、実際に酒ログで記録していくときに役立つ
            知識をまとめます。
          </p>
        </section>

        {/* 乙類と甲類 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>まず押さえる: 乙類と甲類の違い</h3>
          <p className="text-muted mb-3">
            焼酎は「酒税法上」大きく二つに分類されます。同じ「焼酎」という名前でも、製法・香味・価格帯が大きく異なります。
          </p>

          <div className="grid grid-cols-1 gap-3">
            <div className="rounded-lg p-4" style={{ background: 'rgba(139,105,20,0.06)', border: '1px solid rgba(139,105,20,0.2)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#8B6914' }}>乙類（本格焼酎・単式蒸留）</h4>
              <p className="text-xs text-muted">
                一度だけ蒸留する「単式蒸留機」で造られ、原料本来の香りや風味が色濃く残ります。
                芋焼酎、麦焼酎、米焼酎、黒糖焼酎、蕎麦焼酎、泡盛などがこれに該当。アルコール度数は
                通常20〜25度、樽熟成タイプでは40度前後のものもあります。ラベルには「本格焼酎」と
                表記されることが一般的です。
              </p>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#3C2A1E' }}>甲類（連続式蒸留）</h4>
              <p className="text-xs text-muted">
                連続式蒸留機で不純物を徹底的に取り除いた、クリアで中性的な焼酎。チューハイやサワーの
                ベース、梅酒の漬け込み、果実酒づくりに使われます。アルコール度数は20度または25度が主流。
                「ホワイトリカー」と呼ばれるものもほぼ甲類です。
              </p>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.15)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#C53D43' }}>混和焼酎（甲類乙類混和）</h4>
              <p className="text-xs text-muted">
                乙類と甲類をブレンドしたもの。本格焼酎の香りを抑えつつ、飲みやすさを両立した
                コストパフォーマンス重視の商品が多いジャンルです。ラベル裏の原材料表記で
                見分けられます。
              </p>
            </div>
          </div>
        </section>

        {/* 原料別の図解 */}
        <section className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(60,42,30,0.1)' }}>
          <img
            src="/accent-shochu-regions.png"
            alt="焼酎の主要産地（麦・米・芋・黒糖・泡盛）"
            className="w-full h-auto block"
          />
        </section>

        {/* 原料別 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>原料別: 本格焼酎の香味マップ</h3>
          <p className="text-muted mb-3">
            本格焼酎は原料によって味わいが大きく異なります。酒ログで銘柄を記録するときは、
            まず「何の焼酎か」を意識すると、好みの傾向が見えてきます。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.05)', border: '1px solid rgba(197,61,67,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>🍠 芋焼酎（鹿児島・宮崎）</h4>
              <p className="text-xs text-muted">
                サツマイモ（主にコガネセンガン）が原料。甘くふくよかで、品種によっては
                バナナやマスカットを思わせる華やかな香りを持ちます。黒麹を使うとコクと
                キレ、白麹ですっきり、黄麹はフルーティな仕上がりになる傾向。
                お湯割りで特に本領を発揮します。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>🌾 麦焼酎（大分・長崎壱岐）</h4>
              <p className="text-xs text-muted">
                大麦が原料で、軽快でクセが少なく、飲みやすいのが特徴。大分産は白麹で
                スッキリ仕上げたタイプが主流、壱岐は米麹＋麦の伝統製法で香ばしさが残ります。
                樽貯蔵のタイプはウイスキーのような琥珀色で、ロックや水割りで楽しめます。
                初めて本格焼酎を試す方におすすめ。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>🍚 米焼酎（熊本県人吉・球磨地方）</h4>
              <p className="text-xs text-muted">
                米を原料とする焼酎で、球磨焼酎はWTO（世界貿易機関）で地理的表示が認められた、
                いわば「焼酎界のシャンパーニュ」。吟醸香を思わせる華やかさとクリアな口当たりで、
                冷酒のような感覚で楽しめます。和食全般との相性は抜群。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>🌴 黒糖焼酎（奄美群島）</h4>
              <p className="text-xs text-muted">
                奄美大島・徳之島・喜界島などで造られる、黒糖を原料とした焼酎。国税庁の
                特例で奄美群島でのみ生産が認められています。甘い香りを持ちながら糖分は
                ゼロで、ラムに近い風味。ロックやソーダ割りで楽しむと、トロピカルな
                デザート感覚の一杯になります。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.04)', border: '1px solid rgba(139,105,20,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>🏝️ 泡盛（沖縄）</h4>
              <p className="text-xs text-muted">
                タイ米と黒麹だけを使い、全麹仕込みで造られる沖縄の蒸留酒。焼酎の仲間として
                分類されますが、その製法は焼酎の原型とも言われる独自のもの。3年以上貯蔵した
                ものを「古酒（クース）」と呼び、まろやかで複雑な香りが楽しめます。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.03)', border: '1px solid rgba(197,61,67,0.1)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>🌰 その他の焼酎</h4>
              <p className="text-xs text-muted">
                蕎麦焼酎（宮崎）、栗焼酎（高知）、ゴマ焼酎（福岡）、シソ焼酎、ジャガイモ焼酎など、
                多様な原料が使われています。地域の特産品を活かした焼酎を探すのも旅の楽しみです。
              </p>
            </div>
          </div>
        </section>

        <AdBannerWrapper />

        {/* 飲み方 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>飲み方の基本とおすすめペアリング</h3>
          <p className="text-muted mb-3">
            本格焼酎は度数が25度前後と高いため、割り方で風味が大きく変わります。
            「どう割るか」を記録しておくと、自分の好みの黄金比が見えてきます。
          </p>

          <div className="space-y-2">
            {[
              {
                name: 'ロック',
                desc: '大きめの氷を1〜2個。最初は冷やされた凛々しい香り、溶けるにつれてまろやかに変化します。麦焼酎、樽貯蔵タイプ、古酒におすすめ。',
              },
              {
                name: '水割り',
                desc: '焼酎5：水5〜6が目安。夏場の食中酒に最適。米焼酎・麦焼酎に合います。硬水と軟水で味わいが変わるので、ミネラルウォーターを使い分けると楽しい。',
              },
              {
                name: 'お湯割り',
                desc: '焼酎6：お湯4が黄金比。必ず「お湯を先に」注ぎ、そこに焼酎を静かに入れるのが鉄則。香りが立ちのぼり、芋焼酎の甘さが最大限引き出されます。',
              },
              {
                name: '前割り',
                desc: '飲む数日〜1週間前に焼酎と水を合わせて寝かせておく、九州に伝わる伝統の飲み方。水と焼酎が馴染み、角が取れたまろやかな味わいに。黒ぢょかで温めて飲むのが王道。',
              },
              {
                name: 'ソーダ割り（ハイボール）',
                desc: '焼酎4：ソーダ6が基本。樽貯蔵の麦焼酎や黒糖焼酎と相性抜群。レモンピールを落とすと格段に爽やかに。',
              },
              {
                name: 'お茶割り / ウーロン割り',
                desc: '緑茶、烏龍茶、ジャスミン茶などで割る、居酒屋定番の飲み方。食事と合わせやすく、翌朝に残りにくいのも◎。甲類焼酎・麦焼酎向き。',
              },
            ].map((method) => (
              <div
                key={method.name}
                className="rounded-lg p-3 text-xs"
                style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}
              >
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>{method.name}</div>
                <div className="text-muted">{method.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 食事との相性 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>料理とのマリアージュ</h3>
          <p className="text-muted mb-3">
            焼酎は「糖質・プリン体がほぼゼロ」「余韻が軽やか」という性質から、濃い味の料理にも
            繊細な料理にも寄り添える稀有な酒です。原料ごとの目安は以下の通り。
          </p>

          <div className="space-y-2">
            <div className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(197,61,67,0.04)' }}>
              <span className="font-bold shrink-0 w-20" style={{ color: '#C53D43' }}>芋焼酎</span>
              <span className="text-muted">豚の角煮、黒豚しゃぶしゃぶ、薩摩揚げ、濃い味の煮物、バーベキュー</span>
            </div>
            <div className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(139,105,20,0.04)' }}>
              <span className="font-bold shrink-0 w-20" style={{ color: '#8B6914' }}>麦焼酎</span>
              <span className="text-muted">焼き鳥、天ぷら、寿司、枝豆、刺身（白身魚）</span>
            </div>
            <div className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(197,61,67,0.04)' }}>
              <span className="font-bold shrink-0 w-20" style={{ color: '#C53D43' }}>米焼酎</span>
              <span className="text-muted">鰻の蒲焼き、湯豆腐、鍋物、精進料理、和菓子</span>
            </div>
            <div className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(60,42,30,0.04)' }}>
              <span className="font-bold shrink-0 w-20" style={{ color: '#3C2A1E' }}>黒糖焼酎</span>
              <span className="text-muted">チョコレート、ドライフルーツ、ブルーチーズ、ラムレーズンアイス</span>
            </div>
            <div className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(139,105,20,0.04)' }}>
              <span className="font-bold shrink-0 w-20" style={{ color: '#8B6914' }}>泡盛古酒</span>
              <span className="text-muted">ラフテー、ミミガー、スクガラス豆腐、葉巻、ビターチョコ</span>
            </div>
          </div>
        </section>

        {/* 保存 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>保存とエイジング</h3>
          <div className="space-y-2 text-muted">
            <p>
              蒸留酒である焼酎は、日本酒と違って開封後も劣化が穏やかです。ただし、より良い状態で
              長く楽しむためのコツはあります。
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li><strong>直射日光を避け、常温で</strong>：冷蔵庫は不要。納戸や棚の奥で十分。</li>
              <li><strong>瓶は立てて保存</strong>：寝かせるとコルクや蓋のゴムにアルコールが触れ、劣化の原因に。</li>
              <li><strong>温度変化の少ない場所で</strong>：エアコンの風が直接当たる場所は避けましょう。</li>
              <li><strong>古酒づくりに挑戦も</strong>：泡盛・黒糖焼酎・米焼酎は、瓶のまま年単位で寝かせると「家庭熟成」が楽しめます。</li>
            </ul>
          </div>
        </section>

        {/* 焼酎あるあるQ&A */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>よくある疑問</h3>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>Q. 焼酎は太りにくい？</p>
              <p className="text-xs text-muted">
                A. 蒸留酒なので糖質・プリン体はほぼゼロ。ただしアルコール自体に代謝優先のカロリーがあるため、
                「飲みすぎれば太る」のはどの酒も同じ。割り材のジュースやシロップに注意するのが現実的です。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>Q. 黒麹・白麹・黄麹で何が違う？</p>
              <p className="text-xs text-muted">
                A. 黒麹はコクとキレのあるガツンとした味わい、白麹はすっきり軽快、黄麹は華やかでフルーティ。
                同じ蔵・同じ原料でも麹を変えるだけで別物になるほど影響が大きい要素です。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>Q. 「○○年貯蔵」と書いてあるのに安いのはなぜ？</p>
              <p className="text-xs text-muted">
                A. 焼酎はステンレスタンク・甕・樽など複数の容器で貯蔵されます。樽熟成はコストがかかりますが、
                甕やタンク熟成は比較的安価で、長期貯蔵でも手の届く価格で提供されています。
              </p>
            </div>
          </div>
        </section>

        {/* 注意 */}
        <section
          className="rounded-lg p-4"
          style={{ background: 'rgba(60,42,30,0.05)', border: '1px solid rgba(60,42,30,0.1)' }}
        >
          <p className="text-xs text-muted">
            ⚠️ 焼酎は度数が高いお酒です。必ず水やお茶を用意し、適量を守って楽しみましょう。
            純アルコール20g（焼酎25度なら約100ml）が1日の適量の目安です。
            詳しくは<Link href="/responsible-drinking" className="underline" style={{ color: '#C53D43' }}>適正飲酒ガイド</Link>をご覧ください。
          </p>
        </section>

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
            href="/columns/wine-basics"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(139,105,20,0.08)', color: '#8B6914' }}
          >
            🍷 ワインの基礎知識
          </Link>
        </div>
      </div>
    </div>
  );
}
