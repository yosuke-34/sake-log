import Link from 'next/link';
import ArticleMeta from '@/components/ArticleMeta';
import AffiliateLinks from '@/components/AffiliateLinks';

export const metadata = {
  title: 'ビールの基礎知識 - スタイル・ホップ・麦芽・注ぎ方・クラフト完全ガイド',
  description: 'ラガーとエールの違い、IPA・スタウト・ヴァイツェンなどビアスタイル徹底解説、ホップと麦芽の種類、IBU/ABV/SRMの数値の読み方、美味しい注ぎ方とグラスの選び方、日本のクラフトブルワリーまで、ビールをもっと楽しむための完全ガイド。',
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
        <section className="rounded-xl overflow-hidden relative">
          <img
            src="/hero-beer.png"
            alt="ビールのグラスのイメージ"
            className="block w-full h-auto"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)', paddingTop: '40px' }}>
            <p className="text-xs" style={{ color: 'rgba(255,253,245,0.9)', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              麦芽・ホップ・水・酵母が織りなす、100以上の世界
            </p>
          </div>
        </section>

        {/* イントロ */}
        <section>
          <p className="text-muted">
            ビールは世界で最も広く飲まれているお酒の一つです。麦芽、ホップ、水、酵母の4つの原料から造られ、
            その組み合わせや製法によって100を超えるスタイルが存在します。日本ではアサヒ、キリン、サッポロ、サントリーの
            大手4社のラガービールが主流ですが、1994年の酒税法改正以降、各地で個性豊かなクラフトビールが
            醸造されるようになり、ビールの楽しみ方は劇的に広がりました。
          </p>
          <p className="text-muted mt-2">
            このページでは、ラガーとエールの違いというビールの2大分類から始めて、知っておきたいスタイル、
            ホップと麦芽の役割、ラベルに書かれているIBU/ABV/SRMの数値の読み方、美味しい注ぎ方とグラスの選び方、
            日本と世界のクラフトブルワリー事情まで、ビールをより深く楽しむための知識を体系的に紹介します。
          </p>
        </section>

        {/* 4つの原料 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>ビールを形作る4つの原料</h3>
          <p className="text-muted mb-3">
            「ビール純粋令」という1516年にバイエルン公国で定められた法律は、ビールの原料を麦芽・ホップ・水のみと規定し、
            のちに酵母が加わって「4つの原料」と呼ばれるようになりました。今でもドイツ、特にバイエルン地方ではこの精神が守られています。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#B8860B' }}>🌾 麦芽（モルト）</h4>
              <p className="text-xs text-muted">
                大麦を発芽させ、乾燥（または焙煎）して造ります。発芽過程で酵素が作られ、デンプンを糖に変えます。
                乾燥温度を変えると色と風味が変わり、淡色麦芽（ピルスナーモルト）から深い焙煎モルト（ロースト・チョコレートモルト）まで多様。
                小麦麦芽、ライ麦麦芽、燕麦（オーツ）麦芽など、大麦以外の穀物も使われます。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#B8860B' }}>🌿 ホップ</h4>
              <p className="text-xs text-muted">
                ビールの苦味と香りを担うつる性植物。雌花の樹脂腺に含まれる「α酸」が煮沸で苦味成分に変わります。
                煮沸前半に投入＝苦味、後半に投入＝香りが残る、というように添加タイミングで効果が変わります。
                品種は世界に200以上あり、それぞれ柑橘系・トロピカル系・ハーブ系など個性的な香りを持ちます。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#B8860B' }}>💧 水</h4>
              <p className="text-xs text-muted">
                ビールの90%以上は水。硬水か軟水かでビアスタイルの相性が変わります。
                チェコのピルゼン（軟水）はピルスナーに、ドイツのミュンヘン（中硬水）はメルツェンに、
                アイルランドのダブリン（硬水）はスタウトに、それぞれの土地の水が酒質を決めてきました。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#B8860B' }}>🦠 酵母</h4>
              <p className="text-xs text-muted">
                糖をアルコールと炭酸ガスに変える微生物。下面発酵酵母（ラガー酵母）と上面発酵酵母（エール酵母）があり、
                それぞれ発酵温度と生成される香味成分が異なります。野生酵母を使うランビックや、複数の酵母をブレンドする
                ベルジャンビールもあり、酵母の選択がビールの個性を大きく決めます。
              </p>
            </div>
          </div>
        </section>

        {/* ラガーとエール */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>ラガーとエール：2つの大分類</h3>
          <p className="text-muted mb-3">
            ビールは発酵方法の違いによって、大きく「ラガー」と「エール」の2つに分類されます。
            どの酵母を使い、どの温度で発酵させるか、という製法の違いが香味の方向性を決定づけます。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#B8860B' }}>ラガー（下面発酵）</h4>
              <p className="text-xs text-muted">
                低温（5〜10℃）でゆっくり発酵させて造るビール。発酵後の数週間〜数ヶ月の低温熟成（lagering）を経て、
                すっきりとした味わいとキレの良い後味に仕上がります。日本の大手ビール（アサヒスーパードライ、キリン一番搾り、
                サッポロ黒ラベル、サントリープレモルなど）のほとんどがこのタイプ。
                世界のビール消費量の約9割がラガーです。代表的なスタイルにピルスナー、ヘレス、メルツェン、シュバルツなど。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(184,134,11,0.04)', border: '1px solid rgba(184,134,11,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#B8860B' }}>エール（上面発酵）</h4>
              <p className="text-xs text-muted">
                やや高めの温度（15〜25℃）で発酵させるビール。発酵が活発で、酵母由来のエステル香（フルーティな香り）が
                豊富に生成されるため、複雑な味わいが特徴です。クラフトビールの多くがこのタイプに属します。
                IPA、ペールエール、スタウト、ヴァイツェン、ベルジャン全般など多彩なスタイルがあり、
                個性豊かな味わいを楽しめるのが魅力。
              </p>
            </div>
          </div>
        </section>

        {/* クラフトビールのスタイル */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>知っておきたい主要ビアスタイル</h3>
          <p className="text-muted mb-3">
            クラフトビールを楽しむなら、まずはこれらの代表的なスタイルを押さえておきましょう。
            自分の好みの傾向がわかってきたら、その隣接スタイルに広げていくのが楽しみ方のコツ。
          </p>

          <div className="space-y-3">
            {[
              {
                name: 'ピルスナー（チェコ・ドイツ）',
                desc: '世界で最も飲まれているスタイル。1842年チェコのピルゼンで誕生した、軽快で爽やかなホップの苦味と麦芽の甘みのバランスが特徴。日本の大手ビールの多くがこのスタイル。',
                color: '#DAA520',
              },
              {
                name: 'ヘレス（ドイツ・バイエルン）',
                desc: 'ピルスナーよりもホップの苦味が穏やかで、麦芽の甘さがやや前に出るドイツ南部のスタイル。淡い金色で、軽快なのどごし。ミュンヘンビアホールの定番。',
                color: '#FAD03B',
              },
              {
                name: 'IPA（インディア・ペール・エール）',
                desc: '大量のホップを使用し、柑橘系やトロピカルフルーツのような華やかな香りと強い苦味が特徴。クラフトビール人気の立役者。さらに苦味を強調したダブルIPA（DIPA）、濁った見た目とジューシーな味のヘイジーIPA、低アルコールのセッションIPAなど派生スタイルも豊富。',
                color: '#B8860B',
              },
              {
                name: 'ペールエール',
                desc: 'IPAよりもホップの苦味が穏やかで、モルトの甘みとのバランスが良いスタイル。クラフトビール入門におすすめの飲みやすさがあります。アメリカンペールエールはホップアロマが強く、イングリッシュペールエールはモルト寄りのバランス型。',
                color: '#CD853F',
              },
              {
                name: 'スタウト / ポーター',
                desc: '焙煎した麦芽を使用し、コーヒーやチョコレートのような深い風味が特徴の黒ビール。ギネスが代表格。見た目の印象ほど重くなく、ドライスタウトは意外と軽快。インペリアルスタウトは10%超のアルコール度数で濃厚。オーツミルクスタウトはなめらかな甘さが特徴。',
                color: '#3C2A1E',
              },
              {
                name: 'ヴァイツェン / ヘーフェヴァイツェン（ドイツ）',
                desc: '小麦麦芽を50%以上使用したドイツ・バイエルン発祥のビール。バナナやクローブのようなフルーティな香りと、なめらかな口当たりが特徴。苦味が少なく、ビールが苦手な方にもおすすめ。',
                color: '#DEB887',
              },
              {
                name: 'ベルジャンホワイト（ヒューガルデン等）',
                desc: '小麦麦芽にコリアンダーシードやオレンジピールを加えるベルギーのスタイル。爽やかな酸味とスパイス香、柑橘の香り。タイ料理・エスニックと相性抜群。',
                color: '#F2E8C9',
              },
              {
                name: 'サワーエール（ランビック・ベルリーナ等）',
                desc: '意図的に酸味を持たせた個性的なスタイル。ベルギーのランビック、グーズ、フランダース・レッドエール、ドイツのベルリーナ・ヴァイセなど。フルーツを加えたものも多く、シャンパンのような味わいの一杯も。',
                color: '#C53D43',
              },
              {
                name: 'セゾン（ベルギー農場ビール）',
                desc: '夏の農作業時に飲まれた、ベルギー南部の伝統スタイル。爽やかな酸味、スパイシーで複雑な香りが特徴。ピリッとした余韻が料理によく合う、玄人受けのスタイル。',
                color: '#D4A54A',
              },
            ].map((style) => (
              <div key={style.name} className="rounded-lg p-3" style={{ background: `${style.color}10`, border: `1px solid ${style.color}25` }}>
                <h4 className="font-bold text-xs mb-1" style={{ color: style.color }}>{style.name}</h4>
                <p className="text-xs text-muted">{style.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ホップの種類 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>覚えておきたいホップ品種</h3>
          <p className="text-muted mb-3">
            ホップはビールの「香り」と「苦み」を担う主役級の原料。IPAやペールエールのラベルに書かれているホップ名を
            知ると、味わいの予想が立ちやすくなります。代表品種を紹介します。
          </p>

          <div className="space-y-2">
            {[
              { name: 'カスケード（米国）', desc: '柑橘・グレープフルーツのような爽やかな香り。アメリカンペールエールの定番。' },
              { name: 'シトラ（米国）', desc: '名前のとおり強烈な柑橘香に加え、パッションフルーツ・ライチ的なトロピカル感。ヘイジーIPAの主役。' },
              { name: 'モザイク（米国）', desc: 'ベリー・マンゴー・ハーブの複雑な香り。バランス型のIPAに使われる。' },
              { name: 'シヌーク（米国）', desc: '松ヤニ・グレープフルーツのような重厚な苦味と香り。ダブルIPA向き。' },
              { name: 'ザーツ（チェコ）', desc: 'ピルスナーの伝統ホップ。繊細でハーバルな上品な香り。チェコビールに必須。' },
              { name: 'ハラタウ（独）', desc: '「ノーブルホップ」の一つ。土っぽく上品な香り。ヘレス、ボックに使われる。' },
              { name: 'ギャラクシー（豪）', desc: 'パッションフルーツ・桃のような華やかな香り。近年人気急上昇。' },
              { name: '信州早生（日本）', desc: '日本の代表的ホップ品種。穏やかで上品な香りで、ピルスナーや国産クラフトに使われる。' },
            ].map((hop) => (
              <div key={hop.name} className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(184,134,11,0.04)' }}>
                <span className="font-bold shrink-0 w-32" style={{ color: '#B8860B' }}>{hop.name}</span>
                <span className="text-muted">{hop.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* IBU・ABV・SRM */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>ラベルの数値（IBU・ABV・SRM）の読み方</h3>
          <p className="text-muted mb-3">
            クラフトビールのラベルには「IBU 65」「ABV 6.5%」「SRM 12」といった数値が書かれていることがあります。
            これらを読み解くと、飲む前に味わいの予想が立てやすくなります。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#B8860B' }}>IBU（International Bitterness Units / 国際苦味単位）</h4>
              <p className="text-xs text-muted">
                苦味の指標。0〜100以上の数値で表され、数値が大きいほど苦みが強い。
                ライトラガー：5〜15／ピルスナー：25〜45／ペールエール：30〜50／IPA：40〜70／ダブルIPA：65〜100以上。
                ただし麦芽の甘さで苦みが緩和されることもあるので、IBUは絶対的な指標ではなく目安です。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#B8860B' }}>ABV（Alcohol By Volume / アルコール度数）</h4>
              <p className="text-xs text-muted">
                アルコール度数を体積パーセントで表示。日本の大手ラガーは5%前後、IPAは6〜7%、ダブルIPA・スタウトは8〜12%、
                バーレイワインやインペリアルスタウトは10〜14%。9%を超えると、ワインに近い飲み方（小さなグラスでゆっくり）が推奨されます。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#B8860B' }}>SRM（Standard Reference Method / 色度）</h4>
              <p className="text-xs text-muted">
                ビールの色の濃さを示す数値。1〜40以上で、数値が大きいほど色が濃くなります。
                ライトラガー：2〜4／ピルスナー：3〜5／ペールエール：6〜12／アンバー：10〜17／ブラウン：18〜25／スタウト：30以上。
                色は焙煎した麦芽の量で決まるため、ロースト・キャラメル感の予想にも使えます。
              </p>
            </div>
          </div>
        </section>

        {/* 注ぎ方 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>美味しいビールの注ぎ方（三度注ぎ）</h3>
          <div className="space-y-3 text-muted">
            <p>
              家庭でもお店のような美味しいビールを楽しむために、ラガービール定番の「三度注ぎ」をマスターしましょう。
              泡のクオリティが、ビールの味わいを大きく左右します。
            </p>

            <div className="space-y-2 pl-4 border-l-2" style={{ borderColor: 'rgba(184,134,11,0.2)' }}>
              <p className="text-xs">
                <strong>1回目</strong>：グラスを立てた状態で、高い位置（缶を30〜40cm離す）から勢いよく注ぎ、泡を立てます。グラスの半分くらいまで注いだら止めます。
              </p>
              <p className="text-xs">
                <strong>2回目</strong>：泡が落ち着いて、麦芽の沈殿が安定するのを待ちます。今度はゆっくりと、グラスを少し傾けて、グラスの7分目くらいまで注ぎます。
              </p>
              <p className="text-xs">
                <strong>3回目</strong>：さらに泡が落ち着いたら、最後にそっと注いで、泡がグラスの縁から少し盛り上がる「マッシュルームヘッド」に仕上げます。
              </p>
            </div>

            <p className="text-xs">
              ビールと泡の理想的な比率は「7:3」です。きめ細かい泡がフタの役割をして、炭酸ガスの抜けと酸化を防ぎ、
              最後まで美味しく飲めます。グラスは事前に水で軽く濡らしておくと泡が長持ちします（油分残りはNG）。
            </p>

            <p className="text-xs">
              <strong>IPA・スタウトなどクラフトビールの注ぎ方：</strong>三度注ぎは大手ラガー向け。クラフトビールは1回で
              静かに注ぎ、香りの揮発を防ぐのが基本。グラスを45度に傾け、内側を伝わせるように注ぎます。
            </p>
          </div>
        </section>

        {/* 温度 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>ビアスタイル別の適温</h3>
          <div className="space-y-2 text-muted">
            <p>
              ビールのスタイルによって、美味しく飲める温度は異なります。冷やしすぎると香りが閉じてしまうので、
              スタイルに合わせた温度を意識しましょう。
            </p>
            <div className="space-y-1">
              {[
                { temp: '4〜6℃', styles: 'ピルスナー、ライトラガー、ジャパニーズビール' },
                { temp: '6〜8℃', styles: 'ペールエール、IPA、ヴァイツェン、ヘレス' },
                { temp: '8〜12℃', styles: 'スタウト、ポーター、ベルジャン、IPA系の高アルコール' },
                { temp: '12〜14℃', styles: 'バーレイワイン、インペリアルスタウト、熟成系' },
              ].map((item) => (
                <div key={item.temp} className="flex gap-2 text-xs">
                  <span className="font-bold shrink-0 w-16" style={{ color: '#B8860B' }}>{item.temp}</span>
                  <span className="text-muted">{item.styles}</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-2">
              一般的に、軽い味わいのビールは低温で、複雑で重厚な味わいのビールはやや高めの温度で飲むと、
              それぞれの魅力が最も引き出されます。冷蔵庫から出して数分置く「温度ゆるめ」がIPA・スタウト系には有効。
            </p>
          </div>
        </section>

        {/* グラスの選び方 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>ビアグラスの種類と用途</h3>
          <p className="text-muted mb-3">
            ビアグラスの形状は、見た目だけでなく香り・味わい・泡の立ち方に大きく影響します。
            お気に入りのスタイルが見つかったら、専用グラスで楽しむと印象が変わります。
          </p>

          <div className="space-y-2">
            <div className="rounded-lg p-3 text-xs" style={{ background: 'rgba(184,134,11,0.04)' }}>
              <div className="font-bold mb-1" style={{ color: '#B8860B' }}>パイントグラス（イングリッシュ／アメリカン）</div>
              <div className="text-muted">最もポピュラーな円筒形のグラス。容量470ml前後。ペールエール、IPA、スタウトなどエール全般に。シンプルで万能。</div>
            </div>
            <div className="rounded-lg p-3 text-xs" style={{ background: 'rgba(184,134,11,0.04)' }}>
              <div className="font-bold mb-1" style={{ color: '#B8860B' }}>ピルスナーグラス</div>
              <div className="text-muted">背が高くスリムで、口がやや広がる形状。容量330〜400ml。ピルスナー、ヘレスなどのラガーに最適。泡を長く保ち、ホップの香りを集める設計。</div>
            </div>
            <div className="rounded-lg p-3 text-xs" style={{ background: 'rgba(184,134,11,0.04)' }}>
              <div className="font-bold mb-1" style={{ color: '#B8860B' }}>ヴァイツェングラス</div>
              <div className="text-muted">上部が花瓶のように膨らみ、底に向けて細くなる独特の形。500ml以上の大容量で、ヴァイツェン特有の泡を大きく立てる設計。バナナ香を逃さない。</div>
            </div>
            <div className="rounded-lg p-3 text-xs" style={{ background: 'rgba(184,134,11,0.04)' }}>
              <div className="font-bold mb-1" style={{ color: '#B8860B' }}>チューリップグラス</div>
              <div className="text-muted">脚付きで、ボウル状の本体が口でくびれる形。ベルジャンエールやサワーエール、高アルコールIPAに最適。香りを集めながら泡を保つ。</div>
            </div>
            <div className="rounded-lg p-3 text-xs" style={{ background: 'rgba(184,134,11,0.04)' }}>
              <div className="font-bold mb-1" style={{ color: '#B8860B' }}>スニフター（ブランデーグラス）</div>
              <div className="text-muted">底が膨らみ口がすぼまる球形。インペリアルスタウト、バーレイワインなど高アルコールビールを少量ずつ味わうのに最適。</div>
            </div>
            <div className="rounded-lg p-3 text-xs" style={{ background: 'rgba(184,134,11,0.04)' }}>
              <div className="font-bold mb-1" style={{ color: '#B8860B' }}>マグ・ジョッキ</div>
              <div className="text-muted">取っ手付きで丈夫。容量500ml以上が一般的。ビアホールやBBQでの定番。手の熱がビールに伝わりにくく、ラガーをガブガブ楽しむのに向く。</div>
            </div>
          </div>
        </section>

        {/* 日本のクラフトビール */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>日本のクラフトビール事情</h3>
          <div className="space-y-2 text-muted text-xs">
            <p>
              日本のクラフトビール史は1994年の酒税法改正に始まります。それまでは年間2,000kl以上の製造能力がないと
              ビール製造免許が下りませんでしたが、これが60klに引き下げられたことで、小規模ブルワリーの参入が一気に進みました。
            </p>
            <p>
              90年代後半には観光地を中心に「地ビール」ブームが起きましたが、品質のばらつきが大きく、一度ブームが終焉。
              2000年代後半から「クラフトビール」として再評価が進み、現在は2024年時点で全国に約650のブルワリーが稼働しています。
              年商トップは「ヤッホーブルーイング（よなよなエール）」で、コンビニ・スーパーでも全国流通。
            </p>
            <p>
              代表的なブルワリー：<strong>ヤッホーブルーイング</strong>（軽井沢／よなよなエール、水曜日のネコ、インドの青鬼）、
              <strong>ベアードブルーイング</strong>（沼津／ライジングサン、スルガベイ）、<strong>コエドブルワリー</strong>（川越／瑠璃、伽羅、紅赤）、
              <strong>サンクトガーレン</strong>（厚木／湘南ビール、感謝の生）、<strong>志賀高原ビール</strong>（長野／玉村本店）、
              <strong>南信州ビール</strong>（駒ヶ根／アップルホップ）、<strong>箕面ビール</strong>（大阪／W-IPA、ヴァイツェン）、
              <strong>ベイブルーイング横浜</strong>、<strong>うちゅうブルーイング</strong>（山梨）、<strong>WEST COAST BREWING</strong>（静岡）など。
            </p>
            <p>
              旅先でその土地のクラフトビールを探すのも、お酒好きならではの楽しみ方。
              酒ログの記録機能を使えば、訪れた土地のブルワリーを巡る「ビール旅」の記録も付けられます。
            </p>
          </div>
        </section>

        {/* ビールと料理 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>ビールと料理の合わせ方</h3>
          <p className="text-muted mb-3">
            ビールはどんな料理にも合わせやすい万能酒ですが、スタイル別に「黄金パターン」があります。
          </p>
          <div className="space-y-2">
            {[
              { style: 'ピルスナー / ラガー', food: '唐揚げ、餃子、焼き鳥、寿司、刺身、ポテトフライ' },
              { style: 'IPA', food: 'スパイシーなカレー、ハンバーガー、バッファローウィング、チェダー' },
              { style: 'ペールエール', food: 'ピザ、グリル料理、フィッシュ&チップス、グラタン' },
              { style: 'ヴァイツェン', food: 'ソーセージ、白身魚のムニエル、ブレッドプディング' },
              { style: 'スタウト', food: '牡蠣、ビーフシチュー、チョコレートケーキ、コーヒーゼリー' },
              { style: 'ベルジャンホワイト', food: 'ムール貝、サラダ、エスニック料理、タイカレー' },
            ].map((p) => (
              <div key={p.style} className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(184,134,11,0.04)' }}>
                <span className="font-bold shrink-0 w-32" style={{ color: '#B8860B' }}>{p.style}</span>
                <span className="text-muted">{p.food}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-3">
            より詳しいペアリングは<Link href="/columns/food-pairing" className="underline" style={{ color: '#C53D43' }}>マリアージュガイド</Link>もご参照ください。
          </p>
        </section>

        {/* 銘柄紹介 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>知っておきたい人気銘柄・プレミアム銘柄</h3>
          <p className="text-muted mb-3">
            ビールは世界中に何千もの銘柄があります。ここでは初心者がまず押さえておきたい
            「定番銘柄」と、ビール愛好家が一度は試したい「プレミアム・希少銘柄」を紹介します。
          </p>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#B8860B' }}>📚 定番・入手しやすい銘柄</h4>
          <p className="text-xs text-muted mb-2">コンビニ・スーパーで広く流通する、家飲みの鉄板。</p>
          <div className="space-y-2 mb-5">
            {[
              { name: 'アサヒ スーパードライ', desc: '日本市場シェアトップ。「辛口・キレ」を打ち出した1987年発売の革命的銘柄。350ml缶 約230円。' },
              { name: 'キリン 一番搾り', desc: '麦芽の旨味を強調した「一番搾り製法」。やや甘めでバランス型。350ml缶 約230円。' },
              { name: 'サッポロ 黒ラベル', desc: '日本最古のビールブランド「サッポロ」の主力。すっきりとした飲み口で根強い人気。350ml缶 約230円。' },
              { name: 'サントリー ザ・プレミアム・モルツ', desc: 'プレミアムビール市場を切り拓いた銘柄。華やかなホップアロマが特徴。350ml缶 約260円。' },
              { name: 'ヱビスビール', desc: 'サッポロが製造する高品質ビール。麦芽100%、長期熟成。料理を選ばない高級ラガー。350ml缶 約260円。' },
              { name: 'よなよなエール（ヤッホーブルーイング）', desc: '日本のクラフトビールを代表するアメリカンペールエール。柑橘ホップの華やかな香り。350ml缶 約300円。' },
              { name: 'ハイネケン（オランダ）', desc: '世界190カ国以上で流通するインターナショナルラガー。緑のボトルが象徴。350ml缶 約280円。' },
              { name: 'ギネス（アイルランド）', desc: '世界で最も有名なスタウト。クリーミーな泡と焙煎の苦味で唯一無二の存在感。約330円。' },
            ].map((b) => (
              <div key={b.name} className="text-xs p-2.5 rounded" style={{ background: 'rgba(184,134,11,0.04)' }}>
                <div className="flex gap-2">
                  <span className="font-bold shrink-0 w-40" style={{ color: '#B8860B' }}>{b.name}</span>
                  <span className="text-muted">{b.desc}</span>
                </div>
                <AffiliateLinks keyword={b.name} />
              </div>
            ))}
          </div>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#A0741A' }}>🌟 ステップアップ銘柄</h4>
          <p className="text-xs text-muted mb-2">クラフトビール専門店や通販でよく出会う、好みの方向性を見つける中級者向け。</p>
          <div className="space-y-2 mb-5">
            {[
              { name: '水曜日のネコ（ヤッホーブルーイング）', desc: 'ベルジャンホワイト系。コリアンダー＆オレンジピールの爽やかな白ビール。500円前後。' },
              { name: 'インドの青鬼（ヤッホーブルーイング）', desc: 'IPA入門の決定版。柑橘ホップと強めの苦味で「IPAとは何か」が体験できる。500円前後。' },
              { name: 'コエド 瑠璃・伽羅・紅赤（埼玉）', desc: '埼玉・川越のクラフトブルワリー。瑠璃（ピルスナー）、伽羅（IPA系）、紅赤（さつまいも使用）と個性派。' },
              { name: 'ベアード スルガベイ・インペリアルIPA（沼津）', desc: '日本のIPAブームを牽引した1本。トロピカルなホップと厚みあるモルト。750円前後。' },
              { name: 'パンクIPA（BrewDog / 英国）', desc: 'クラフトビール革命の象徴。グレープフルーツ系のシトラホップが効いたモダンIPA。600円前後。' },
              { name: 'ヒューガルデン ホワイト（ベルギー）', desc: 'ベルジャンホワイトの代表格。オレンジピール＆コリアンダーの爽快感。450円前後。' },
              { name: 'シメイ ブルー（ベルギー・トラピスト）', desc: '修道院ビールの定番。フルーティで複雑、9%の高アルコール。チーズと至福のペアリング。700円前後。' },
              { name: 'デリリウム・トレメンス（ベルギー）', desc: 'ピンクの象がトレードマーク。世界最優秀ビール受賞歴のあるトリペル。600円前後。' },
              { name: 'シエラネバダ ペールエール（米国）', desc: 'アメリカンクラフトの原点。1980年からあるカスケードホップ全開の傑作。500円前後。' },
            ].map((b) => (
              <div key={b.name} className="text-xs p-2.5 rounded" style={{ background: 'rgba(160,116,26,0.05)' }}>
                <div className="flex gap-2">
                  <span className="font-bold shrink-0 w-44" style={{ color: '#A0741A' }}>{b.name}</span>
                  <span className="text-muted">{b.desc}</span>
                </div>
                <AffiliateLinks keyword={b.name} />
              </div>
            ))}
          </div>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#A52D35' }}>👑 プレミアム・希少銘柄</h4>
          <p className="text-xs text-muted mb-2">並行輸入や専門店、ビアバーでしか出会えない、世界のレジェンド級ビール。</p>
          <div className="space-y-2 mb-3">
            {[
              { name: 'ロシュフォール10（ベルギー・トラピスト）', desc: '世界トップクラスのクワッドルペル。アルコール度数11.3%。世界6つしかない正規トラピスト修道院ビールの最高峰の1本。' },
              { name: 'ヴェスヴェルテレン12（ベルギー）', desc: '「世界最高のビール」と長年評されてきた幻のビール。修道院でしか買えず、入手難度は世界トップ。' },
              { name: 'オルヴァル（ベルギー・トラピスト）', desc: '野生酵母ブレタノマイセスを使った独自の酸味。瓶熟成で味が変化していく、玄人向けの一杯。' },
              { name: 'カンティヨン（ベルギー）', desc: 'ブリュッセルのランビック蔵。グーズ・クリーク・フランボワーズなどの自然発酵ビール。プレミア価格の代名詞。' },
              { name: 'スリーフロイズ ダークロード（米国）', desc: 'インディアナの伝説的ブルワリー。年1回の販売日「Dark Lord Day」のみ限定発売されるインペリアルスタウト。' },
              { name: '志賀高原ビール One Off（長野）', desc: '玉村本店のクラフト。常設品でなく単発生産の限定醸造。コレクター垂涎の品。' },
              { name: 'うちゅうブルーイング（山梨）', desc: '近年大人気のヘイジーIPA系専門ブルワリー。販売数日で完売する超希少銘柄。' },
              { name: 'ヴァイエンステファン（独・最古）', desc: '1040年創業の世界最古のブルワリー。ヴァイツェンの教科書とされる伝統の一本。' },
              { name: 'ピルスナー・ウルケル（チェコ）', desc: 'ピルスナー発祥の地、1842年から続くオリジナル。樽生で飲める店は世界でも限られる。' },
            ].map((b) => (
              <div key={b.name} className="text-xs p-2.5 rounded" style={{ background: 'rgba(165,45,53,0.05)', border: '1px solid rgba(165,45,53,0.12)' }}>
                <div className="font-bold mb-0.5" style={{ color: '#A52D35' }}>{b.name}</div>
                <div className="text-muted">{b.desc}</div>
                <AffiliateLinks keyword={b.name} />
              </div>
            ))}
          </div>

          <p className="text-[11px] text-muted">
            ※ 価格・流通状況は2026年時点の参考情報です。クラフトビールは限定醸造・季節限定が多く、
            次に入手できるとは限らないため、気になったらその場で試すのがおすすめです。
          </p>
        </section>

        {/* 保存方法 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#B8860B' }}>ビールの保存</h3>
          <ul className="list-disc pl-5 space-y-1 text-xs text-muted">
            <li><strong>冷蔵保存が基本</strong>：日光と温度変化はビールの大敵。「日光臭」と呼ばれる劣化臭はわずか数分の直射日光で発生します。</li>
            <li><strong>瓶は立てて</strong>：横にすると王冠（蓋）に長時間触れて劣化の原因に。</li>
            <li><strong>賞味期限は鮮度の目安</strong>：ビールは時間と共に風味が落ちます。特にホップアロマが命のIPA系は、製造後3ヶ月以内に飲み切るのが理想。</li>
            <li><strong>缶ビールは振動を避けて</strong>：持ち帰り直後は冷蔵庫で1時間ほど落ち着かせてから開栓すると、泡立ちが良くなります。</li>
          </ul>
        </section>

        {/* 注意 */}
        <section
          className="rounded-lg p-4"
          style={{ background: 'rgba(60,42,30,0.05)', border: '1px solid rgba(60,42,30,0.1)' }}
        >
          <p className="text-xs text-muted">
            ⚠️ ビールはアルコール度数5%前後でも、500mlで純アルコール20g＝厚労省の節度ある適度な飲酒量の目安です。
            「飲みやすい」「水分補給代わりに」と考えがちですが、利尿作用が強く脱水のリスクもあるため、
            水と一緒にゆっくり楽しみましょう。
            <Link href="/responsible-drinking" className="underline ml-1" style={{ color: '#C53D43' }}>適正飲酒ガイド</Link>
          </p>
        </section>

        {/* 記事情報 */}
        <ArticleMeta
          publishedAt="2026年5月20日"
          updatedAt="2026年5月22日"
          readTimeMinutes={11}
          references={[
            { name: 'ビール酒造組合「ビール大学」', url: 'https://www.brewers.or.jp/' },
            { name: 'クラフトビール協会（日本）', url: 'https://beertaster.org/' },
            { name: 'Beer Judge Certification Program（BJCP）スタイルガイドライン', url: 'https://www.bjcp.org/style/2021/' },
            { name: '国税庁「酒のしおり」', url: 'https://www.nta.go.jp/taxes/sake/shiori-gaikyo/shiori/2024/index.htm' },
            { name: '厚生労働省「健康日本21（アルコール）」', url: 'https://www.mhlw.go.jp/topics/tobacco/houkoku/061122c.html' },
          ]}
        />

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
