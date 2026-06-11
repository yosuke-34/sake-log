import Link from 'next/link';
import ArticleMeta from '@/components/ArticleMeta';
import AffiliateLinks from '@/components/AffiliateLinks';

export const metadata = {
  title: '日本酒の基礎知識 - 特定名称酒・日本酒度・産地・酒器まで徹底解説',
  description: '日本酒の特定名称酒の分類、日本酒度・酸度の読み方、生酛/山廃/速醸など製法の違い、新潟・兵庫・京都など主要産地ごとの特徴、温度帯別の楽しみ方、酒器の選び方、ラベルの読み解き方まで網羅した、初心者から愛好家まで使える完全ガイド。',
};

export default function SakeBasicsPage() {
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
        <h2 className="text-lg font-bold">🍶 日本酒の基礎知識</h2>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* ヒーロー画像 */}
        <section className="rounded-xl overflow-hidden relative">
          <img
            src="/hero-nihonshu.png"
            alt="日本酒のグラスと酒器のイメージ"
            className="block w-full h-auto"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)', paddingTop: '40px' }}>
            <p className="text-xs" style={{ color: 'rgba(255,253,245,0.92)', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              米・水・麹から生まれる、日本固有の醸造酒
            </p>
          </div>
        </section>

        {/* イントロ */}
        <section>
          <p className="text-muted">
            日本酒は米と水、そして麹から造られる日本固有の醸造酒です。「清酒」とも呼ばれ、酒税法では
            「米、米こうじ及び水を原料として発酵させて、こしたもの」と定義されています。
            国税庁の統計によると、日本国内には2024年時点で約1,150の蔵元があり、それぞれが独自の哲学と
            技術で個性豊かな酒を醸しています。
          </p>
          <p className="text-muted mt-2">
            「日本酒は難しい」という声をよく聞きますが、ラベルに書かれている情報を読み解く文法と、
            自分の好みの方向性を知るための4〜5つのキーワードを押さえれば、選び方は一気にシンプルになります。
            このページでは、特定名称酒の分類、日本酒度や酸度の読み方、製法の違い、主要産地の個性、
            温度による味わいの変化、酒器の選び方まで、実際に酒ログで記録するときに役立つ知識を体系的に整理します。
          </p>
        </section>

        {/* 特定名称酒 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>特定名称酒の分類</h3>
          <p className="text-muted mb-3">
            日本酒は原料と精米歩合によって8種類の「特定名称酒」に分類されます。
            精米歩合とは、玄米の外側をどれだけ磨いたかを示す数値で、数値が小さいほど多く磨かれています。
            米の外側にはタンパク質や脂質が多く含まれており、これを削ることで雑味の少ないクリアな酒になります。
            一方で、外側にある旨味成分も一緒に削られるため、磨けば磨くほど良いというわけではなく、
            「磨きの少なさ」を売りにする蔵もあります。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.05)', border: '1px solid rgba(197,61,67,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>純米大吟醸 / 大吟醸（精米歩合50%以下）</h4>
              <p className="text-xs text-muted">
                米を半分以上磨き、低温でゆっくり発酵させて造ります。フルーティーで華やかな香り（吟醸香・カプロン酸エチル系）が特徴で、
                リンゴ・洋ナシ・メロンを思わせる香味が引き出されます。日本酒の最高峰とされ、贈答品としても人気。
                「純米大吟醸」は米と米麹と水だけ、「大吟醸」は少量の醸造アルコールが加えられているのが違いです。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>純米吟醸 / 吟醸（精米歩合60%以下）</h4>
              <p className="text-xs text-muted">
                大吟醸ほど磨きこまれてはいませんが、華やかな香りとすっきりした味わいが楽しめます。
                日常的に楽しむ「ちょっと贅沢」な日本酒として人気が高く、価格と品質のバランスが優れたカテゴリ。
                和食はもちろん、洋食・中華・エスニックなど幅広く合います。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.03)', border: '1px solid rgba(197,61,67,0.1)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>特別純米 / 特別本醸造（精米歩合60%以下または特別な製法）</h4>
              <p className="text-xs text-muted">
                精米歩合60%以下、または蔵が定めた特別な製法（たとえば全量手造り、契約栽培米使用など）で造られた日本酒。
                米の旨味がしっかり感じられ、食事との相性が抜群です。「特別」の中身は蔵によって異なるので、
                ラベル裏の説明文を読むのが面白い発見につながります。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.02)', border: '1px solid rgba(197,61,67,0.08)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>純米 / 本醸造</h4>
              <p className="text-xs text-muted">
                純米酒は米と米麹のみで造られ、米本来のふくよかな旨味が特徴。
                本醸造は少量（白米重量の10%以下）の醸造アルコールを加えることで、香りを引き立てつつ、すっきりとした後味に仕上げます。
                どちらも食中酒として優秀で、燗酒に向くタイプも多く、日常使いの1本としておすすめ。
              </p>
            </div>
          </div>

          <p className="text-xs text-muted mt-3">
            「純米」が付くものは醸造アルコール無添加、付かないものは少量の醸造アルコールが添加されています。
            どちらが良い・悪いということではなく、味わいの方向性が異なるだけ。
            醸造アルコールは「悪いもの」というイメージを持たれがちですが、適切に使われることで香りを引き立て、
            キレの良い後味を実現するための技術です。
          </p>
        </section>

        {/* 製法の違い */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>製法の違い（生酛・山廃・速醸）</h3>
          <p className="text-muted mb-3">
            ラベルに「生酛（きもと）」「山廃（やまはい）」と書かれている日本酒を見かけることが増えました。
            これは「酒母（しゅぼ）」と呼ばれる、酵母を大量に培養する工程の違いを示しています。
            知っておくと、味わいの予想がぐっと立てやすくなります。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>生酛（きもと）造り</h4>
              <p className="text-xs text-muted">
                江戸時代以前から続く伝統製法。蔵に住む天然の乳酸菌の力を借りて、約1ヶ月かけて酒母を育てます。
                山卸（やまおろし）と呼ばれる、櫂で米を擦り潰す重労働が必要で、酒造りの中でも最も手のかかる手法。
                濃醇で複雑な旨味、力強い酸、深いコクが特徴で、燗酒で本領を発揮します。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.1)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>山廃（やまはい）仕込み</h4>
              <p className="text-xs text-muted">
                明治時代に開発された、生酛から「山卸」の工程を省いた方法。山卸を廃止したから「山廃」。
                生酛と同じく天然の乳酸菌を使うため、生酛系の力強さ・複雑さを残しつつ、労力を軽減。
                ぬる燗〜熱燗にしたときの旨味の伸びは、山廃ならではの楽しみ方。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.02)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>速醸（そくじょう）酛</h4>
              <p className="text-xs text-muted">
                明治時代後期に開発された、人工の乳酸を最初から添加する近代的な手法。
                2週間程度で酒母が完成し、衛生管理も容易。現在流通する日本酒の約9割がこの製法で造られています。
                クリアでフルーティな仕上がりに向き、吟醸酒系では速醸が主流。
              </p>
            </div>
          </div>
        </section>

        {/* 日本酒度と酸度 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>日本酒度・酸度・アミノ酸度の読み方</h3>
          <p className="text-muted mb-3">
            日本酒のラベル裏や蔵元のWebサイトに書かれている数値を理解すると、好みのお酒を見つけやすくなります。
            ただし「数値だけ」では味は決まりません。3つの指標を組み合わせて読み解くのがコツです。
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>日本酒度（SMV）</h4>
              <p className="text-xs text-muted">
                日本酒の比重を示す数値で、糖分量の目安。プラス（＋）になるほど辛口、マイナス（－）になるほど甘口です。
                日本酒度＝0が水と同じ比重で、糖分が多いと比重が増えるためマイナスに振れます。
                ただし、実際の味わいは酸度との組み合わせで変わるため、あくまで一つの目安として捉えましょう。
              </p>
              <div className="flex items-center gap-2 mt-2 text-xs flex-wrap">
                <span className="px-2 py-1 rounded" style={{ background: 'rgba(197,61,67,0.1)', color: '#C53D43' }}>-5以下: 甘口</span>
                <span className="px-2 py-1 rounded" style={{ background: 'rgba(60,42,30,0.05)' }}>±0: 中間</span>
                <span className="px-2 py-1 rounded" style={{ background: 'rgba(139,105,20,0.1)', color: '#8B6914' }}>+5以上: 辛口</span>
                <span className="px-2 py-1 rounded" style={{ background: 'rgba(139,105,20,0.18)', color: '#8B6914' }}>+10以上: 超辛口</span>
              </div>
            </div>

            <div className="mt-3">
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>酸度</h4>
              <p className="text-xs text-muted">
                お酒に含まれる有機酸（コハク酸・リンゴ酸・乳酸など）の量を示す数値。
                酸度が高いとコクのある濃醇な味わい、低いと淡麗でさっぱりした味わいになります。
                一般的に1.0〜2.0の範囲で、1.3前後が標準的。生酛系は1.8以上の高酸度になることも多いです。
              </p>
              <p className="text-xs text-muted mt-1">
                <strong>意外なルール：</strong>同じ日本酒度でも、酸度が高ければ「辛口寄り」に、低ければ「甘口寄り」に感じます。
                日本酒度+5・酸度1.8 → キレのある辛口／日本酒度+5・酸度1.2 → 比較的おだやかな辛口、という具合。
              </p>
            </div>

            <div className="mt-3">
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>アミノ酸度</h4>
              <p className="text-xs text-muted">
                旨味成分（アミノ酸）の量を示します。1.0〜2.0が一般的で、数値が高いほど旨味やコクが強くなり、
                低いほどキレのあるすっきりした味わいに。熟成酒・古酒・燗酒向きの酒ほどアミノ酸度が高い傾向。
              </p>
            </div>
          </div>
        </section>

        {/* 主要産地 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>主要産地と地域の個性</h3>
          <p className="text-muted mb-3">
            日本酒は「米と水と人」の産物。同じ製法でも、産地が違えば味わいの傾向もがらりと変わります。
            国税庁の統計では兵庫県と京都府が出荷量上位（伏見・灘の大手蔵）ですが、銘柄数の多さや酒質の評価では
            新潟、長野、福島などが目立ちます。代表的な産地の特徴を押さえると、選び方の幅が広がります。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.05)', border: '1px solid rgba(197,61,67,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>新潟県</h4>
              <p className="text-xs text-muted">
                日本酒の生産量全国第3位、銘柄の多さでは圧倒的トップクラス。
                雪解け水の軟水と寒冷な気候が、淡麗辛口のすっきりした酒質を生みます。
                代表銘柄：八海山、久保田、〆張鶴、越乃寒梅、上善如水、鶴齢など。「淡麗辛口の代名詞」となった土地。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>兵庫県（灘五郷）</h4>
              <p className="text-xs text-muted">
                日本酒生産量第1位。神戸〜西宮一帯の「灘五郷」は江戸時代から続く酒どころで、
                硬度の高い「宮水」と最高峰の酒米「山田錦」の産地。男酒（おとこざけ）と呼ばれる、辛口で力強い酒質が伝統。
                代表銘柄：白鶴、菊正宗、剣菱、櫻正宗、福寿、龍力。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>京都府（伏見）</h4>
              <p className="text-xs text-muted">
                灘と並ぶ古くからの酒どころ。中軟水の「伏水」を使い、灘の「男酒」に対して「女酒」と称されるまろやかな酒質。
                代表銘柄：月桂冠、黄桜、玉乃光、英勲、富翁。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>秋田県</h4>
              <p className="text-xs text-muted">
                寒冷地ゆえの低温長期発酵が可能で、繊細かつ華やかな吟醸酒の名産地。
                独自の酒米「秋田酒こまち」を活用した蔵が多い。代表銘柄：新政、雪の茅舎、両関、福小町、刈穂、飛良泉。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>山形県</h4>
              <p className="text-xs text-muted">
                全47都道府県で初めて「県全体のGI（地理的表示）」を取得。「出羽燦々」「雪女神」など独自の酒米も豊富。
                フルーティで品のある酒質が世界的に評価されています。代表銘柄：十四代、出羽桜、楯野川、東光、上喜元。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>福島県</h4>
              <p className="text-xs text-muted">
                全国新酒鑑評会金賞受賞数で長らく上位を占めるレベルの高い産地。
                丁寧な造りと安定した品質で、ハズレを引きにくい県と評されることも。
                代表銘柄：飛露喜、十四代並みに入手困難な「廣戸川」「写楽（宮泉）」、奥の松、大七、栄川。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>広島県（西条）</h4>
              <p className="text-xs text-muted">
                軟水仕込みの吟醸酒発祥の地と言われる西条を擁する銘醸地。
                やわらかく上品な味わいが伝統。代表銘柄：賀茂鶴、賀茂泉、亀齢、白牡丹、酔心。
              </p>
            </div>
          </div>
        </section>

        {/* 温度帯 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>温度で変わる味わい</h3>
          <p className="text-muted mb-3">
            日本酒は飲む温度によって味わいが大きく変化します。同じお酒でも温度を変えるだけで、全く違った表情を見せてくれる
            のが日本酒の魅力。世界の酒の中でも、ここまで温度帯ごとに名前と楽しみ方が体系化されているのは日本酒だけです。
          </p>

          <div className="space-y-2">
            {[
              { name: '雪冷え（5℃）', desc: 'キリッと冷たく、シャープな味わい。香りは控えめで、すっきり飲めます。スパークリング日本酒や夏向け。' },
              { name: '花冷え（10℃）', desc: '適度に冷えて香りが立ち始める温度。吟醸酒・大吟醸におすすめの飲み方です。' },
              { name: '涼冷え（15℃）', desc: '常温に近く、米の旨味が感じやすい温度帯。純米酒に最適。' },
              { name: '冷や（20℃前後）', desc: '日本酒の「常温」。米の旨味と香りのバランスが最も自然に楽しめる温度。' },
              { name: '日向燗（30℃）', desc: 'ほんのり温かく、口当たりがまろやかに。味わいが開き始める入口の温度。' },
              { name: '人肌燗（35℃）', desc: 'お風呂のお湯くらいの温度。米のふくよかさが心地よく感じられます。' },
              { name: 'ぬる燗（40℃）', desc: 'お酒の旨味が最も引き出される温度帯。食中酒として万能で、最も玄人受けする温度。' },
              { name: '上燗（45℃）', desc: '注いだ瞬間に湯気が立ち、香りが華やかに開く温度。山廃・生酛系で本領発揮。' },
              { name: '熱燗（50℃）', desc: 'しっかり温かく、キレのある味わいに。寒い季節に体が温まります。' },
              { name: '飛びきり燗（55℃以上）', desc: 'アルコール感が強まり、シャープでドライな味わい。上級者向け。' },
            ].map((temp) => (
              <div key={temp.name} className="flex gap-2 text-xs">
                <span className="font-bold shrink-0 w-28" style={{ color: '#8B6914' }}>{temp.name}</span>
                <span className="text-muted">{temp.desc}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted mt-3">
            <strong>燗酒のコツ：</strong>電子レンジは熱ムラが出やすいので、徳利を湯煎するのが基本です。
            鍋に湯を沸かし、火を止めてから徳利を入れ、好みの温度になるまで待ちます。アルコールが揮発しすぎず、
            旨味成分がきれいに広がります。
          </p>
        </section>

        {/* 酒器の選び方 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>酒器の選び方</h3>
          <p className="text-muted mb-3">
            同じ日本酒でも、注ぐ器で味わいの感じ方は驚くほど変わります。グラスは「香りの広がり」と「口当たり」を
            決定づける重要な要素。お気に入りの一本を見つけたら、酒器も合わせて楽しんでみましょう。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>ワイングラス</h4>
              <p className="text-xs text-muted">
                吟醸酒・大吟醸など、香りが命の日本酒に最適。グラスの形状が香りを集め、立ちのぼらせます。
                ブルゴーニュ型は香りの多層性を感じやすく、ボルドー型はシャープな印象に。
                「日本酒専用ワイングラス」も各社から販売されています。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>おちょこ・盃</h4>
              <p className="text-xs text-muted">
                日本酒の伝統的な酒器。少量ずつ注いで、口当たり優先で楽しむときに。
                陶磁器、ガラス、漆器、錫（すず）など素材も豊富で、それぞれ感じる温度や舌触りが異なります。
                錫の酒器は熱伝導が良く、燗酒・冷酒どちらも本領発揮。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>枡（ます）</h4>
              <p className="text-xs text-muted">
                ヒノキの香りが日本酒に移り、独特の風情を楽しめます。お祝いの場で使われることが多い酒器。
                純米酒・本醸造などの食中酒向き。グラスを枡に重ねて、こぼれるほど注ぐ「もっきり」は居酒屋の定番。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>徳利（とっくり）</h4>
              <p className="text-xs text-muted">
                日本酒を注ぐための容器。燗酒には、首の細い徳利が湯煎しやすく適しています。
                陶器の徳利は保温性が高く、ガラスの徳利は冷酒に。
              </p>
            </div>
          </div>
        </section>

        {/* ラベル */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>ラベルの読み方</h3>
          <p className="text-muted mb-3">
            日本酒のラベルには法律で表示が義務付けられている情報と、蔵元が任意で記載する情報があります。
            以下の情報を押さえると、ラベルから味わいの予想が立てやすくなります。
          </p>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.1)' }}>
              <strong style={{ color: '#3C2A1E' }}>原材料名：</strong>
              <span className="text-muted">「米、米こうじ」のみ＝純米酒系。「米、米こうじ、醸造アルコール」＝本醸造系。</span>
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.1)' }}>
              <strong style={{ color: '#3C2A1E' }}>精米歩合：</strong>
              <span className="text-muted">米をどれだけ磨いたか。50%以下＝大吟醸系、60%以下＝吟醸系、70%以下＝特別系、それ以上＝普通の純米/本醸造。</span>
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.1)' }}>
              <strong style={{ color: '#3C2A1E' }}>アルコール度数：</strong>
              <span className="text-muted">通常15〜16度。原酒は18度以上のことも。低アルコールタイプ（12〜13度）も増加中。</span>
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.1)' }}>
              <strong style={{ color: '#3C2A1E' }}>製造年月：</strong>
              <span className="text-muted">瓶詰めされた年月。日本酒は鮮度が大事で、特に生酒は3〜6ヶ月以内、火入れ酒でも1年以内に飲み切るのが目安。</span>
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.1)' }}>
              <strong style={{ color: '#3C2A1E' }}>使用米：</strong>
              <span className="text-muted">「山田錦」「五百万石」「美山錦」「雄町」など。各品種の特徴を覚えると味わいの予想が立つ。</span>
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.1)' }}>
              <strong style={{ color: '#3C2A1E' }}>火入れ表示：</strong>
              <span className="text-muted">「生酒（無濾過生原酒）」＝火入れなし、フレッシュ。「生貯蔵酒」＝出荷前に火入れ1回。「生詰め」＝貯蔵前に火入れ1回。表示なし＝2回火入れの標準品。</span>
            </div>
          </div>
        </section>

        {/* 主要な酒米 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>覚えておきたい酒米</h3>
          <p className="text-muted mb-3">
            日本酒造り専用に育てられた米を「酒造好適米（しゅぞうこうてきまい）」と呼びます。
            食用米とは粒の構造・性質が異なり、酒造りに適した特性を持ちます。代表的な品種を知ると、ラベルからの情報量が一気に増えます。
          </p>

          <div className="space-y-2">
            {[
              { name: '山田錦', desc: '酒米の王様。兵庫県が主産地で、大吟醸の最高峰には欠かせない品種。芳醇でバランスの取れた酒質を生む。' },
              { name: '五百万石', desc: '新潟県を中心に栽培される、淡麗辛口酒の代表的品種。すっきりとキレの良い酒に向く。' },
              { name: '美山錦', desc: '長野県発祥で、東北・北陸でも広く栽培。爽やかで軽快な酒質を生み、コストパフォーマンスに優れる。' },
              { name: '雄町（おまち）', desc: '岡山県が主産地の伝統品種。濃醇で複雑な味わいを生み、「雄町ファン（オマチスト）」と呼ばれる熱狂的愛好家も。' },
              { name: '出羽燦々', desc: '山形県が独自開発した酒米。県のブランドを支える品種で、繊細で香り高い吟醸酒に。' },
              { name: '愛山', desc: '兵庫県の希少品種。山田錦と雄町を親に持ち、甘みと複雑さを両立した特別感のある酒に。' },
            ].map((rice) => (
              <div key={rice.name} className="text-xs flex gap-2 p-2 rounded" style={{ background: 'rgba(197,61,67,0.04)' }}>
                <span className="font-bold shrink-0 w-20" style={{ color: '#C53D43' }}>{rice.name}</span>
                <span className="text-muted">{rice.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 銘柄紹介 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>知っておきたい人気銘柄・プレミアム銘柄</h3>
          <p className="text-muted mb-3">
            日本酒の世界には全国に約1,150の蔵元があり、銘柄は数千に及びます。ここでは初心者がまず押さえておきたい
            「定番銘柄」と、お酒好きの間で話題になる「プレミアム銘柄」を紹介します。銘柄を覚えると、酒店での選び方や
            居酒屋でのオーダーが楽になります。
          </p>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#C53D43' }}>📚 定番・入手しやすい銘柄</h4>
          <p className="text-xs text-muted mb-2">スーパーや酒販店で広く流通している、ハズレを引きにくい鉄板の銘柄。</p>
          <div className="space-y-2 mb-5">
            {[
              { name: '八海山（新潟）', desc: '淡麗辛口の代名詞。普通酒〜大吟醸まで全レンジが安定した品質で、価格も手頃。1,500円〜。' },
              { name: '久保田（新潟）', desc: '朝日酒造の人気銘柄。「百寿」「千寿」「萬寿」とランクが上がる構成がわかりやすい。1,500円〜。' },
              { name: '獺祭（だっさい / 山口）', desc: '旭酒造の銘柄で、「磨き二割三分」が有名。世界中で愛される現代的なフルーティな酒質。3,000円〜。' },
              { name: '黒龍（福井）', desc: '吟醸酒造りのパイオニア。安定した華やかさと上品さで料亭でも定番。2,500円〜。' },
              { name: '〆張鶴（しめはりつる / 新潟）', desc: '宮尾酒造の銘柄。柔らかい飲み口とキレの良さで、燗にしても美味しい万能型。2,000円〜。' },
              { name: '上善如水（じょうぜんみずのごとし / 新潟）', desc: '白瀧酒造。「水のように飲める」をコンセプトに、初心者にも飲みやすい設計。1,200円〜。' },
              { name: '菊正宗・白鶴・剣菱（兵庫・灘）', desc: '江戸時代から続く灘の大手。辛口の食中酒として家庭に定着した、まさに「定番中の定番」。1,000円〜。' },
            ].map((b) => (
              <div key={b.name} className="text-xs p-2.5 rounded" style={{ background: 'rgba(197,61,67,0.04)' }}>
                <div className="flex gap-2">
                  <span className="font-bold shrink-0 w-32" style={{ color: '#C53D43' }}>{b.name}</span>
                  <span className="text-muted">{b.desc}</span>
                </div>
                <AffiliateLinks keyword={b.name} />
              </div>
            ))}
          </div>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#8B6914' }}>🌟 ステップアップ銘柄</h4>
          <p className="text-xs text-muted mb-2">専門の酒販店や通販でよく出会う、玄人受けする人気の中堅銘柄。</p>
          <div className="space-y-2 mb-5">
            {[
              { name: '醸し人九平次（かもしびとくへいじ / 愛知）', desc: '萬乗醸造。世界の三つ星レストランで採用される、繊細でモダンな酒質。3,000円〜。' },
              { name: '田酒（でんしゅ / 青森）', desc: '西田酒造店。「田から生まれた酒」が由来。米の旨味が前に出る、本格純米酒の王道。3,000円〜。' },
              { name: '出羽桜・楯野川（山形）', desc: '山形の高品質吟醸を代表する蔵。フルーティで品があり、世界でも高評価。3,000円〜。' },
              { name: '雪の茅舎（ゆきのぼうしゃ / 秋田）', desc: '齋彌酒造店。蔵付き酵母を活かした個性的な香りと旨味が魅力。2,500円〜。' },
              { name: '鳳凰美田（ほうおうびでん / 栃木）', desc: '小林酒造。フルーティで華やかな吟醸酒の代表格。リンゴやライチを思わせる香り。3,000円〜。' },
              { name: '醴泉（れいせん / 岐阜）', desc: '玉泉堂酒造。山田錦を中心に造られる、上品でしっかりした酒質。2,500円〜。' },
              { name: '〆張鶴（しめはりつる）/ 鶴齢（かくれい）', desc: '新潟の名酒。久保田・八海山と並ぶ淡麗系の人気銘柄。' },
            ].map((b) => (
              <div key={b.name} className="text-xs p-2.5 rounded" style={{ background: 'rgba(139,105,20,0.04)' }}>
                <div className="flex gap-2">
                  <span className="font-bold shrink-0 w-32" style={{ color: '#8B6914' }}>{b.name}</span>
                  <span className="text-muted">{b.desc}</span>
                </div>
                <AffiliateLinks keyword={b.name} />
              </div>
            ))}
          </div>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#A52D35' }}>👑 プレミアム・希少銘柄</h4>
          <p className="text-xs text-muted mb-2">抽選販売・特約店限定・プレミア価格などで入手困難な銘柄。出会えたら飲んでみる価値あり。</p>
          <div className="space-y-2 mb-3">
            {[
              { name: '十四代（じゅうよんだい / 山形）', desc: '高木酒造。日本酒プレミアの代名詞。「本丸」でも定価4,000円が市場で数万円。中取り・龍泉などの上位は10万円超。' },
              { name: '飛露喜（ひろき / 福島）', desc: '廣木酒造本店。1999年に「無濾過生原酒」で一世を風靡。福島を代表する超人気銘柄。定価3,000円台。' },
              { name: '写楽（しゃらく / 福島）', desc: '宮泉銘醸。「会津の良酒」を目指す若手蔵の代表格。すっきりした旨味で人気急上昇中。' },
              { name: '新政（あらまさ / 秋田）', desc: '伝統的な6号酵母を活用し、生酛・木桶仕込みで「No.6」「コスモス」「亜麻猫」など個性派ラインナップ。' },
              { name: '而今（じこん / 三重）', desc: '木屋正酒造。「過去や未来でなく而（しか）して今」が銘柄名の由来。緻密で華やかな酒質。' },
              { name: '田酒 純米大吟醸 斗瓶取り', desc: '田酒の最高峰。年間生産量が少なく、特約店でも抽選販売。出会えたら奇跡レベル。' },
              { name: '黒龍 石田屋・二左衛門・無二（福井）', desc: '黒龍酒造の超プレミアムライン。蔵元限定販売も多い。1本3〜5万円台。' },
              { name: '磯自慢 中取り35（静岡）', desc: '磯自慢酒造の最高峰。山田錦35%精米の華やかさは別格。' },
            ].map((b) => (
              <div key={b.name} className="text-xs p-2.5 rounded" style={{ background: 'rgba(165,45,53,0.05)', border: '1px solid rgba(165,45,53,0.12)' }}>
                <div className="font-bold mb-0.5" style={{ color: '#A52D35' }}>{b.name}</div>
                <div className="text-muted">{b.desc}</div>
                <AffiliateLinks keyword={b.name} />
              </div>
            ))}
          </div>

          <p className="text-[11px] text-muted">
            ※ 価格・入手難度は2026年時点の一般的な情報です。プレミア銘柄を不当に高い転売価格で購入することは推奨しません。
            正規ルート（特約店・蔵元直販・抽選）での購入を心がけましょう。
          </p>
        </section>

        {/* 保存方法 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>日本酒の保存方法</h3>
          <div className="space-y-2 text-muted">
            <p>
              日本酒は光と温度に弱いお酒です。正しく保存することで、本来の味わいを長く楽しめます。
              ワインのような長期熟成を前提とした酒ではないため、基本は「買ってから早めに飲む」が鉄則。
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li><strong>冷蔵保存が基本</strong>：特に生酒・生貯蔵酒は必ず冷蔵庫で保存しましょう。火入れ酒でも、開栓後は冷蔵が安心。</li>
              <li><strong>直射日光を避ける</strong>：日光に当たると「日光臭」と呼ばれる玉ねぎのような不快な臭いが発生します。茶色や青色の瓶はこれを防ぐため。</li>
              <li><strong>立てて保存</strong>：横にするとキャップに酒が触れ続け、劣化の原因になります。瓶は立てて保存。</li>
              <li><strong>開栓後は早めに</strong>：開封後は酸化が進むため、生酒系は1週間、火入れ酒でも2週間以内に飲みきるのが理想的。</li>
              <li><strong>冷凍はNG</strong>：日本酒は冷凍すると味わいが大きく損なわれます。シャーベットにして楽しむなど、意図的な楽しみ方を除いて避けましょう。</li>
            </ul>
          </div>
        </section>

        {/* よくある質問 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>よくある質問</h3>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>Q. 「生酒」「生貯蔵酒」「生詰め」の違いは？</p>
              <p className="text-xs text-muted">
                A. 日本酒は通常、貯蔵前と出荷前に2回「火入れ」（加熱殺菌）されます。生酒は両方とも火入れなしで、フレッシュさが命の代わりに劣化が早い。
                生貯蔵酒は貯蔵中は生で、出荷前に1回火入れ。生詰めは逆に貯蔵前に火入れし、瓶詰め時は生のまま。それぞれ風味のバランスが微妙に異なります。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>Q. 古酒（熟成酒）ってどんなお酒？</p>
              <p className="text-xs text-muted">
                A. 3年以上熟成させた日本酒。色は琥珀色に変わり、味わいはまろやかでナッツ・カラメル・ドライフルーツのような複雑な香味に。
                シェリーやブランデーに近い感覚で楽しめます。常温で熟成させると色が深く濃厚に、冷蔵で熟成させると色が淡くキレが残ります。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>Q. にごり酒・どぶろくの違いは？</p>
              <p className="text-xs text-muted">
                A. にごり酒は、もろみ（発酵中の状態）を粗く濾しただけの日本酒。法律上は「清酒」に分類されます。
                どぶろくは濾していない、もろみそのもの。日本酒（清酒）の定義から外れるため「その他の醸造酒」として扱われ、酒税区分も異なります。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>Q. スパークリング日本酒って？</p>
              <p className="text-xs text-muted">
                A. 瓶内二次発酵やCO2注入で発泡性を持たせた日本酒。シャンパンのような華やかさで、近年人気急上昇。
                「澪（みお）」「水芭蕉Pure」「南部美人あわさけ」などが代表的。乾杯やデザートの一杯に最適です。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>Q. 日本酒は太る？</p>
              <p className="text-xs text-muted">
                A. 日本酒1合（180ml）あたり約200kcal、糖質は約7gで、ビールや甘いカクテルに比べて極端に高いわけではありません。
                ただしアルコールには「代謝優先のカロリー」があり、おつまみと組み合わせて飲み過ぎれば当然太ります。
                純アルコール20gを意識し、おつまみのカロリーをコントロールするのが現実的です。
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
            ⚠️ 日本酒のアルコール度数は通常15〜16度。1合（180ml）で純アルコール約22g相当となり、
            これだけで厚労省が示す「1日の節度ある適度な飲酒量（純アルコール20g）」を超えます。
            <Link href="/responsible-drinking" className="underline ml-1" style={{ color: '#C53D43' }}>適正飲酒ガイド</Link>
            も合わせてご確認ください。
          </p>
        </section>

        {/* 記事情報 */}
        <ArticleMeta
          publishedAt="2026年5月20日"
          updatedAt="2026年5月22日"
          readTimeMinutes={12}
          references={[
            { name: '国税庁「酒のしおり」', url: 'https://www.nta.go.jp/taxes/sake/shiori-gaikyo/shiori/2024/index.htm' },
            { name: '日本酒造組合中央会「日本酒入門」', url: 'https://japansake.or.jp/sake/' },
            { name: '厚生労働省「健康日本21（アルコール）」', url: 'https://www.mhlw.go.jp/topics/tobacco/houkoku/061122c.html' },
            { name: '日本酒サービス研究会・酒匠研究会連合会（SSI）資料' },
          ]}
        />

        {/* ナビゲーション */}
        <div className="flex gap-3 pt-2">
          <Link
            href="/columns/whisky-basics"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(139,105,20,0.08)', color: '#8B6914' }}
          >
            🥃 ウイスキーの基礎知識
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
