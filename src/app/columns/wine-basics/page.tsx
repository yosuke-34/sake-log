import Link from 'next/link';
import AdBannerWrapper from '@/components/AdBannerWrapper';

export const metadata = {
  title: 'ワインの基礎知識 - 種類・ブドウ品種・産地・テイスティングまで',
  description: '赤・白・ロゼ・スパークリング、主要なブドウ品種、フランス・イタリア・新世界・日本の産地特徴、テイスティングの手順、保存方法、食事との合わせ方まで、ワイン初心者が押さえるべき基礎を網羅したガイド。',
};

export default function WineBasicsPage() {
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
        <h2 className="text-lg font-bold">🍷 ワインの基礎知識</h2>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* イントロ */}
        <section>
          <p className="text-muted">
            ワインはブドウだけで造られる醸造酒で、8,000年以上の歴史を持つと言われる世界最古の酒の一つです。
            日本のコンビニやスーパーでも数千種類が流通する一大ジャンルですが、ラベルに書かれている情報を
            読み解く「文法」がわかると、自分の好みの一本を見つけるスピードが一気に上がります。
          </p>
          <p className="text-muted mt-2">
            このページでは、ワインを楽しむうえで最低限押さえておきたい4つの切り口
            「種類」「ブドウ品種」「産地」「飲み方・ペアリング」を整理します。難しい格付けや
            ソムリエ理論には立ち入らず、日常的にワインを楽しむ実用知識に絞りました。
          </p>
        </section>

        {/* 種類 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>まずは「4つの種類」から</h3>
          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(165,45,53,0.06)', border: '1px solid rgba(165,45,53,0.2)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#A52D35' }}>🍷 赤ワイン</h4>
              <p className="text-xs text-muted">
                黒ブドウを果皮・種ごと発酵させて造ります。皮の色素で赤く、種のタンニン（渋み）が加わるのが特徴。
                肉料理やチーズとの相性が良く、力強いフルボディ〜繊細なライトボディまで幅広い。常温〜14〜18℃で飲むのが基本。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(212,168,74,0.08)', border: '1px solid rgba(212,168,74,0.25)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>🥂 白ワイン</h4>
              <p className="text-xs text-muted">
                白ブドウ（緑色の皮）、あるいは黒ブドウを皮と切り離して発酵。渋みが少なく、酸味と香りが主役。
                魚介類・前菜・白身肉と相性抜群。しっかり冷やして（6〜10℃）飲むのが一般的です。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(255,182,193,0.2)', border: '1px solid rgba(255,105,120,0.3)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>🌸 ロゼワイン</h4>
              <p className="text-xs text-muted">
                黒ブドウを果皮と短時間だけ接触させて、薄いピンク色に仕上げたワイン。赤と白のいいとこ取りで、
                料理の守備範囲が非常に広く、和食にも合います。軽めの前菜からBBQまで万能。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(248,248,255,0.5)', border: '1px solid rgba(100,149,237,0.3)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>🍾 スパークリングワイン</h4>
              <p className="text-xs text-muted">
                炭酸ガスを含む発泡性ワインの総称。フランスの「シャンパーニュ地方」で造られたものだけが
                「シャンパン」を名乗れます。スペインの「カヴァ」、イタリアの「プロセッコ」「フランチャコルタ」、
                日本の「スパークリング」などがあり、価格と品質の幅が広いジャンルです。
              </p>
            </div>
          </div>
        </section>

        {/* ブドウ品種 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>代表的なブドウ品種</h3>
          <p className="text-muted mb-3">
            ワインの味を決める最大の要素がブドウ品種です。「国際品種」と呼ばれる世界各地で栽培される品種を
            覚えると、ラベルを見ただけで味わいの方向性が推測できるようになります。
          </p>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#A52D35' }}>赤ワインの代表品種</h4>
          <div className="space-y-2 mb-4">
            {[
              { name: 'カベルネ・ソーヴィニヨン', desc: '世界で最も有名な黒ブドウ。重厚でタンニンが豊富、長期熟成向き。ボルドーやカリフォルニアの代表品種。' },
              { name: 'メルロー', desc: '柔らかく果実味豊かで、渋みが穏やか。初心者にも飲みやすい。ボルドー右岸やチリで有名。' },
              { name: 'ピノ・ノワール', desc: '繊細でエレガント。赤い果実や花の香りで、和食との相性も良い。ブルゴーニュの象徴的品種。' },
              { name: 'シラー / シラーズ', desc: 'スパイシーで力強い。フランス・ローヌや、オーストラリアで大人気。BBQや羊肉に合う。' },
              { name: 'サンジョヴェーゼ', desc: 'イタリアのキャンティで有名。酸味がしっかりあり、トマトソース料理と抜群の相性。' },
              { name: 'マスカット・ベーリーA', desc: '日本で開発された黒ブドウ。イチゴキャンディのような香りで、醤油を使った和食にも合う。' },
            ].map((v) => (
              <div key={v.name} className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(165,45,53,0.04)' }}>
                <span className="font-bold shrink-0 w-32" style={{ color: '#A52D35' }}>{v.name}</span>
                <span className="text-muted">{v.desc}</span>
              </div>
            ))}
          </div>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#8B6914' }}>白ワインの代表品種</h4>
          <div className="space-y-2">
            {[
              { name: 'シャルドネ', desc: '世界で最もポピュラーな白ブドウ。樽熟成ならバターやナッツ、ステンレス熟成ならシャープで爽やか。和食にも合う万能選手。' },
              { name: 'ソーヴィニヨン・ブラン', desc: 'ハーブやグレープフルーツを思わせる爽快な香り。爽やかな酸味でサラダや魚介に最適。ニュージーランド産が人気。' },
              { name: 'リースリング', desc: 'ドイツを代表する品種。辛口〜極甘口まで幅広く、繊細な香りと高い酸度が特徴。エスニック料理とも好相性。' },
              { name: '甲州', desc: '山梨を中心に栽培される日本固有品種。渋み控えめで酸味もマイルド。寿司・刺身・天ぷらと好相性で、和食の定番ワインに。' },
              { name: 'ピノ・グリ / ピノ・グリージョ', desc: 'アルザスでは豊かなコクとスパイス香、イタリアでは軽快で爽やか。産地で表情が変わる面白い品種。' },
              { name: 'ミュスカ / モスカート', desc: '花のような華やかな香り。辛口、甘口、スパークリングと幅広く、デザートとの相性が抜群。' },
            ].map((v) => (
              <div key={v.name} className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(212,168,74,0.06)' }}>
                <span className="font-bold shrink-0 w-32" style={{ color: '#8B6914' }}>{v.name}</span>
                <span className="text-muted">{v.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <AdBannerWrapper />

        {/* 産地 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>主要産地の個性</h3>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>🇫🇷 フランス</h4>
              <p className="text-xs text-muted">
                ワインの聖地。ボルドー（重厚な赤）、ブルゴーニュ（繊細な赤白）、シャンパーニュ（発泡）、
                ロワール（多様）、アルザス（白）など、地方ごとに個性が明確。AOC制度で厳格に品質管理されています。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>🇮🇹 イタリア</h4>
              <p className="text-xs text-muted">
                生産量世界一。キャンティ・バローロ・アマローネ・ブルネッロなど銘醸地が各州に。
                地元料理と合わせることを前提にした食中酒として発達しており、非常に日常的で親しみやすい。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>🌎 新世界（チリ・アメリカ・豪・NZ・南ア）</h4>
              <p className="text-xs text-muted">
                果実味が豊かでわかりやすい味わい、価格に対する品質の高さ（コスパ）が魅力。
                チリのカベルネ、カリフォルニアのジンファンデル、豪州シラーズ、NZソーヴィニヨン・ブランなど、
                日本で買える価格帯で世界レベルの品質が楽しめます。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>🗾 日本</h4>
              <p className="text-xs text-muted">
                山梨・長野・北海道が三大産地。甲州、マスカット・ベーリーAといった固有品種に加え、
                シャルドネやメルローなど国際品種でも世界的評価が高まっています。和食との相性抜群。
              </p>
            </div>
          </div>
        </section>

        {/* テイスティング */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>テイスティングの手順</h3>
          <p className="text-muted mb-3">
            「同じワインでも、どう味わうかで印象が変わる」のがワインの面白さ。以下の手順を意識すると、
            酒ログに記録するときのコメントが格段に書きやすくなります。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-xs text-muted">
            <li><strong>色を見る</strong>：グラスを白い紙の上で傾け、色調・濃度・輝きを観察。赤なら紫〜ルビー〜ガーネットと年齢が推測できます。</li>
            <li><strong>香りを嗅ぐ</strong>：最初はそのまま（第一アロマ＝果実香）、次にグラスを回して空気に触れさせる（第二・第三アロマ＝発酵香・熟成香）。</li>
            <li><strong>口に含む</strong>：少量を口全体に広げる。甘味・酸味・渋味・苦味・ボディ（軽い/重い）・余韻の長さを感じ取る。</li>
            <li><strong>飲み込む or 吐き出す</strong>：喉の奥で鼻から抜ける香り（フィニッシュ）を確認。複雑さと持続時間が品質の指標に。</li>
          </ol>
          <p className="text-[11px] text-muted mt-3">
            ※ テイスティングの専門用語は多数ありますが、最初は「果物っぽい / 花っぽい / スパイシー / 土っぽい / 軽い / 重い / 酸っぱい / 渋い」
            など自分の言葉で十分。記録を続けることで語彙が自然と増えていきます。
          </p>
        </section>

        {/* 保存 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>保存方法</h3>
          <ul className="list-disc pl-5 space-y-1 text-xs text-muted">
            <li><strong>未開栓</strong>：温度15℃前後・湿度70%・振動と光を避けた場所。セラーが理想だが、野菜室でも代用可。</li>
            <li><strong>コルク栓は横向きに</strong>：コルクが乾燥すると密閉性が落ちるため、寝かせて保存。スクリューキャップは縦でもOK。</li>
            <li><strong>開栓後は冷蔵庫</strong>：赤白問わず冷蔵庫で保存。バキュバンなどの真空保存器具があれば3〜5日、なければ2〜3日以内に飲み切るのが目安。</li>
            <li><strong>スパークリングは専用ストッパー</strong>：炭酸抜けを防ぐ専用の栓が100円ショップでも入手可能。</li>
          </ul>
        </section>

        {/* 料理 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>料理とのマリアージュの鉄則</h3>
          <p className="text-muted mb-3">
            「迷ったら、色を合わせる」「同じ産地のものを合わせる」という2つのシンプルなルールで、
            ほぼ失敗しません。
          </p>

          <div className="space-y-2">
            <div className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(165,45,53,0.04)' }}>
              <span className="font-bold shrink-0 w-28" style={{ color: '#A52D35' }}>重めの赤</span>
              <span className="text-muted">ステーキ、ジビエ、煮込み料理、熟成チーズ</span>
            </div>
            <div className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(165,45,53,0.04)' }}>
              <span className="font-bold shrink-0 w-28" style={{ color: '#A52D35' }}>軽めの赤</span>
              <span className="text-muted">鶏料理、豚肉、和食（醤油系）、焼き鳥のタレ</span>
            </div>
            <div className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(212,168,74,0.06)' }}>
              <span className="font-bold shrink-0 w-28" style={{ color: '#8B6914' }}>辛口の白</span>
              <span className="text-muted">白身魚、貝類、鶏胸肉、天ぷら、和食全般</span>
            </div>
            <div className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(212,168,74,0.06)' }}>
              <span className="font-bold shrink-0 w-28" style={{ color: '#8B6914' }}>樽香の白</span>
              <span className="text-muted">バターを使った魚料理、グラタン、カルボナーラ</span>
            </div>
            <div className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(255,182,193,0.15)' }}>
              <span className="font-bold shrink-0 w-28" style={{ color: '#C53D43' }}>ロゼ</span>
              <span className="text-muted">生ハム、サーモン、BBQ、タイ料理・韓国料理</span>
            </div>
            <div className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(100,149,237,0.06)' }}>
              <span className="font-bold shrink-0 w-28" style={{ color: '#3C2A1E' }}>スパークリング</span>
              <span className="text-muted">前菜、揚げ物、鮨、中華、乾杯全般</span>
            </div>
          </div>
        </section>

        {/* 注意 */}
        <section
          className="rounded-lg p-4"
          style={{ background: 'rgba(60,42,30,0.05)', border: '1px solid rgba(60,42,30,0.1)' }}
        >
          <p className="text-xs text-muted">
            ⚠️ ワインはアルコール度数12〜14度が一般的で、グラス2杯（約240ml）が純アルコール20gの目安です。
            料理と一緒にゆっくり楽しみ、水を挟みながら適量を守りましょう。
            <Link href="/responsible-drinking" className="underline ml-1" style={{ color: '#C53D43' }}>適正飲酒ガイド</Link>
          </p>
        </section>

        {/* ナビゲーション */}
        <div className="flex gap-3 pt-2">
          <Link
            href="/columns/shochu-basics"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(139,105,20,0.08)', color: '#8B6914' }}
          >
            🍠 焼酎の基礎知識
          </Link>
          <Link
            href="/columns/food-pairing"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(197,61,67,0.08)', color: '#C53D43' }}
          >
            🍽️ お酒と料理
          </Link>
        </div>
      </div>
    </div>
  );
}
