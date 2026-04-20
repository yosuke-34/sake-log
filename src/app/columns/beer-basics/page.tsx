import Link from 'next/link';
import AdBannerWrapper from '@/components/AdBannerWrapper';

export const metadata = {
  title: 'ビールの基礎知識 - 酒ログ',
  description: 'ラガーとエールの違い、IPAやスタウトなどクラフトビールのスタイル解説、美味しいビールの注ぎ方、適切な温度まで。ビールをもっと楽しむための基礎知識を紹介します。',
};

export default function BeerBasicsPage() {
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
        <h2 className="text-lg font-bold">🍺 ビールの基礎知識</h2>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* ヒーロー画像 */}
        <section className="rounded-xl overflow-hidden relative" style={{ height: '200px' }}>
          <img
            src="/hero-beer.png"
            alt="ビール"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }}>
            <p className="text-xs" style={{ color: 'rgba(255,253,245,0.9)', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              ビールをもっと楽しむための基礎知識
            </p>
          </div>
        </section>

        <section>
          <p className="text-muted">
            ビールは世界で最も広く飲まれているお酒の一つです。麦芽、ホップ、水、酵母の4つの原料から造られ、
            その組み合わせや製法によって100を超えるスタイルが存在します。
          </p>
        </section>

        {/* ラガーとエール */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>ラガーとエール：2つの大分類</h3>
          <p className="text-muted mb-3">
            ビールは発酵方法の違いによって、大きく「ラガー」と「エール」の2つに分類されます。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#B8860B' }}>ラガー（下面発酵）</h4>
              <p className="text-xs text-muted">
                低温（5〜10℃）でゆっくり発酵させて造るビール。すっきりとした味わいとキレの良い後味が特徴です。
                日本の大手ビール（アサヒスーパードライ、キリン一番搾りなど）のほとんどがこのタイプ。
                世界のビール消費量の約9割がラガーです。代表的なスタイルにピルスナー、ヘレス、メルツェンなどがあります。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(184,134,11,0.03)', border: '1px solid rgba(184,134,11,0.1)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#B8860B' }}>エール（上面発酵）</h4>
              <p className="text-xs text-muted">
                やや高めの温度（15〜25℃）で発酵させるビール。フルーティーで複雑な味わいが特徴です。
                クラフトビールの多くがこのタイプに属します。IPA、ペールエール、スタウト、ヴァイツェンなど多彩なスタイルがあり、
                個性豊かな味わいを楽しめるのが魅力です。
              </p>
            </div>
          </div>
        </section>

        {/* クラフトビールのスタイル */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>知っておきたいビアスタイル</h3>
          <p className="text-muted mb-3">
            クラフトビールを楽しむなら、まずはこれらの代表的なスタイルを押さえておきましょう。
          </p>

          <div className="space-y-3">
            {[
              {
                name: 'ピルスナー',
                desc: '世界で最も飲まれているスタイル。チェコ発祥で、爽やかなホップの苦味と麦芽の甘みのバランスが特徴。日本の大手ビールの多くがこのスタイルです。',
                color: '#DAA520',
              },
              {
                name: 'IPA（インディア・ペール・エール）',
                desc: '大量のホップを使用し、柑橘系やトロピカルフルーツのような華やかな香りと強い苦味が特徴。クラフトビール人気の立役者で、さらに苦味を強調したダブルIPAやヘイジーIPAなど派生スタイルも豊富です。',
                color: '#B8860B',
              },
              {
                name: 'ペールエール',
                desc: 'IPAよりもホップの苦味が穏やかで、モルトの甘みとのバランスが良いスタイル。クラフトビール入門におすすめの飲みやすさがあります。',
                color: '#CD853F',
              },
              {
                name: 'スタウト',
                desc: '焙煎した麦芽を使用し、コーヒーやチョコレートのような深い風味が特徴の黒ビール。ギネスが代表格です。見た目の印象ほど重くなく、意外と飲みやすいものも多くあります。',
                color: '#3C2A1E',
              },
              {
                name: 'ヴァイツェン',
                desc: '小麦麦芽を50%以上使用したドイツ発祥のビール。バナナやクローブのようなフルーティーな香りと、なめらかな口当たりが特徴。苦味が少なく、ビールが苦手な方にもおすすめです。',
                color: '#DEB887',
              },
              {
                name: 'サワーエール',
                desc: '意図的に酸味を持たせた個性的なスタイル。ベルギーのランビックやベルリーナ・ヴァイセなどが代表格。フルーツを加えたものも多く、ビールの新しい楽しみ方を提案してくれます。',
                color: '#C53D43',
              },
            ].map((style) => (
              <div key={style.name} className="rounded-lg p-3" style={{ background: `${style.color}08`, border: `1px solid ${style.color}18` }}>
                <h4 className="font-bold text-xs mb-1" style={{ color: style.color }}>{style.name}</h4>
                <p className="text-xs text-muted">{style.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 注ぎ方 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>美味しいビールの注ぎ方</h3>
          <div className="space-y-3 text-muted">
            <p>
              家庭でもお店のような美味しいビールを楽しむために、「三度注ぎ」をマスターしましょう。
            </p>

            <div className="space-y-2 pl-4 border-l-2" style={{ borderColor: 'rgba(184,134,11,0.2)' }}>
              <p className="text-xs">
                <strong>1回目</strong>：グラスを立てた状態で、高い位置から勢いよく注ぎ、泡を立てます。グラスの半分くらいまで注いだら止めます。
              </p>
              <p className="text-xs">
                <strong>2回目</strong>：泡が落ち着いたら、今度はゆっくりとグラスの7分目くらいまで注ぎます。
              </p>
              <p className="text-xs">
                <strong>3回目</strong>：さらに泡が落ち着いたら、最後にそっと注いで、泡がグラスの縁から少し盛り上がるくらいに仕上げます。
              </p>
            </div>

            <p className="text-xs">
              ビールと泡の理想的な比率は「7:3」です。きめ細かい泡がフタの役割をして、炭酸ガスの抜けを防ぎ、最後まで美味しく飲めます。
            </p>
          </div>
        </section>

        {/* 温度 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>ビールの適温</h3>
          <div className="space-y-2 text-muted">
            <p>
              ビールのスタイルによって、美味しく飲める温度は異なります。
            </p>
            <div className="space-y-1">
              {[
                { temp: '4〜6℃', styles: 'ピルスナー、ライトラガー' },
                { temp: '6〜8℃', styles: 'ペールエール、IPA、ヴァイツェン' },
                { temp: '8〜12℃', styles: 'スタウト、ポーター、バーレイワイン' },
                { temp: '12〜14℃', styles: 'ベルギービール、ランビック' },
              ].map((item) => (
                <div key={item.temp} className="flex gap-2 text-xs">
                  <span className="font-bold shrink-0 w-16" style={{ color: '#B8860B' }}>{item.temp}</span>
                  <span className="text-muted">{item.styles}</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-2">
              一般的に、軽い味わいのビールは低温で、複雑で重厚な味わいのビールはやや高めの温度で飲むと、
              それぞれの魅力が最も引き出されます。
            </p>
          </div>
        </section>

        {/* 日本のクラフトビール */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>日本のクラフトビール事情</h3>
          <div className="space-y-2 text-muted">
            <p>
              1994年の酒税法改正をきっかけに、日本各地で小規模なブルワリーが誕生しました。
              当初は「地ビール」と呼ばれていましたが、品質の向上とともに「クラフトビール」として再び注目を集めています。
            </p>
            <p>
              現在、日本には800を超えるクラフトブルワリーがあり、地域の特産品や風土を活かした個性的なビールが次々と生まれています。
              旅先でその土地のクラフトビールを探すのも、お酒好きならではの楽しみ方です。
            </p>
            <p>
              酒ログの銘柄図鑑では、飲んだクラフトビールを都道府県別に記録でき、
              全国のクラフトビールを巡る旅の記録としてもお使いいただけます。
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
            href="/columns/whisky-basics"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(139,105,20,0.08)', color: '#8B6914' }}
          >
            🥃 ウイスキーの基礎知識
          </Link>
        </div>
      </div>
    </div>
  );
}
