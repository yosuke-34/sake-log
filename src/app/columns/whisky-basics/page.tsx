import Link from 'next/link';
import AdBannerWrapper from '@/components/AdBannerWrapper';
import ArticleMeta from '@/components/ArticleMeta';

export const metadata = {
  title: 'ウイスキーの基礎知識 - 5大産地・樽・飲み方・ジャパニーズ完全ガイド',
  description: 'スコッチ・アイリッシュ・バーボン・カナディアン・ジャパニーズの5大ウイスキー、シングルモルトとブレンデッドの違い、樽の種類が味に与える影響、スコッチ6リージョン、ハイボールの黄金比、グラス選びまで、初心者から愛好家まで使える完全ガイド。',
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
        <section className="rounded-xl overflow-hidden relative">
          <img
            src="/hero-uxi.png"
            alt="ウイスキーのグラスのイメージ"
            className="block w-full h-auto"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)', paddingTop: '40px' }}>
            <p className="text-xs" style={{ color: 'rgba(255,253,245,0.9)', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              穀物・蒸留・樽熟成が生む、奥深い世界
            </p>
          </div>
        </section>

        {/* イントロ */}
        <section>
          <p className="text-muted">
            ウイスキーは穀物（大麦・トウモロコシ・ライ麦・小麦など）を原料に、糖化・発酵・蒸留・樽熟成という
            4つの工程を経て造られる蒸留酒です。語源はゲール語「Uisge Beatha（命の水）」と言われ、
            16世紀のスコットランドとアイルランドに起源を持ちます。日本では1923年にニッカ・サントリーの前身の蒸留所が
            建設され、独自の発展を遂げてきました。
          </p>
          <p className="text-muted mt-2">
            ウイスキーの魅力は「同じ大麦・水・酵母から、こんなにも違う酒が生まれるのか」という奥深さにあります。
            蒸留所ごとの個性、樽の種類、熟成年数、ブレンドの妙——どの軸からアプローチしても、新たな発見があります。
            このページでは、5大ウイスキーの違い、シングルモルト/ブレンデッドの分類、樽が味に与える影響、
            スコッチの6つの産地、ハイボールの黄金比、グラスの選び方まで、ウイスキーを楽しむための知識を網羅します。
          </p>
        </section>

        {/* モルトとブレンデッド */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>シングルモルトとブレンデッドの違い</h3>
          <p className="text-muted mb-3">
            ウイスキーは原料と製造方法によって大きく分類されます。まずはこの4つのカテゴリを押さえましょう。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.06)', border: '1px solid rgba(139,105,20,0.18)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>シングルモルト・ウイスキー</h4>
              <p className="text-xs text-muted">
                単一の蒸留所で、大麦麦芽（モルト）のみを原料として造られたウイスキー。
                蒸留所ごとの個性が色濃く反映されるのが特徴で、同じスコットランドでも、海辺の蒸留所は潮の香り、
                山間部の蒸留所はフローラルな香りといった地域特性が味わいに現れます。
                ボトル価格は4,000円〜数十万円までと幅広く、入門者から愛好家まで幅広いファン層を持ちます。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.04)', border: '1px solid rgba(139,105,20,0.14)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>ブレンデッド・ウイスキー</h4>
              <p className="text-xs text-muted">
                複数の蒸留所のモルトウイスキーとグレーンウイスキー（トウモロコシ等の穀物原料）をブレンドしたウイスキー。
                バランスの取れた飲みやすい味わいが特徴で、ハイボールなどのカクテルベースとしても人気。
                サントリー角・オールド、ニッカ ブラックなど、日本の主要銘柄もブレンデッドが中心です。
                世界全体のウイスキー流通量の約9割がブレンデッドと言われます。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.03)', border: '1px solid rgba(139,105,20,0.1)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>シングルグレーン・ウイスキー</h4>
              <p className="text-xs text-muted">
                単一の蒸留所で穀物（トウモロコシ、小麦等）を主原料として造られたウイスキー。
                連続式蒸留機で蒸留されるため、軽やかで甘みのある味わいが特徴。
                日本では「知多」（サントリー）、「カフェグレーン」（ニッカ）などが代表的。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.03)', border: '1px solid rgba(139,105,20,0.1)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>ブレンデッドモルト・ウイスキー</h4>
              <p className="text-xs text-muted">
                複数の蒸留所のシングルモルトのみをブレンドしたウイスキー（グレーンは含まない）。
                「ピュアモルト」「ヴァテッドモルト」とも呼ばれます。
                モルトの濃厚さを持ちつつ、ブレンドの妙でバランス良く仕上げられた、玄人受けするカテゴリ。
              </p>
            </div>
          </div>
        </section>

        {/* 世界の産地 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>世界5大ウイスキーの個性</h3>
          <p className="text-muted mb-3">
            ウイスキーの世界には「5大ウイスキー」と呼ばれる主要な産地があります。それぞれに独自の伝統と
            法律上の定義があり、味わいの傾向も明確に異なります。「自分はどの産地が好みか」を知ることが、
            ウイスキー選びの第一歩です。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>🏴󠁧󠁢󠁳󠁣󠁴󠁿 スコッチウイスキー（スコットランド）</h4>
              <p className="text-xs text-muted">
                ウイスキーの故郷とも言える存在。法律で「スコットランド国内で蒸留・3年以上樽熟成」が義務付けられています。
                スペイサイドのフルーティなものから、アイラ島のスモーキーなピート香が特徴的なものまで、地域ごとに多彩。
                代表銘柄：マッカラン、グレンフィディック、グレンリベット、ボウモア、ラフロイグ、ジョニーウォーカー、シーバスリーガル。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>🇮🇪 アイリッシュウイスキー（アイルランド）</h4>
              <p className="text-xs text-muted">
                3回蒸留が一般的で、なめらかで軽やかな口当たりが特徴。スコッチに比べてピートを使わないことが多く、
                クセが少なくウイスキー初心者にもおすすめ。「e」を入れて「Whiskey」と綴るのが特徴。
                代表銘柄：ジェムソン、ブッシュミルズ、タラモアデュー、レッドブレスト。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>🇺🇸 アメリカンウイスキー（バーボン等）</h4>
              <p className="text-xs text-muted">
                バーボンは原料の51%以上がトウモロコシで、内側を焦がした新オーク樽で熟成されます。
                バニラ・キャラメル・ココナッツのような甘い香りと、力強い味わいが特徴。
                ライウイスキーはライ麦が主体で、よりスパイシーでドライ。テネシーウイスキーは活性炭ろ過が義務。
                代表銘柄：ジムビーム、メーカーズマーク、ワイルドターキー、フォアローゼズ、ジャックダニエル。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>🇨🇦 カナディアンウイスキー（カナダ）</h4>
              <p className="text-xs text-muted">
                ライ麦を多く使用し、ライトでスムースな味わいが特徴。クセが少なく、カクテルベースとして
                世界中で愛されています。アメリカ禁酒法時代にカナダから密輸された歴史を持ち、北米市場では今も大きなシェア。
                代表銘柄：カナディアンクラブ、クラウンローヤル、シーグラム。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>🇯🇵 ジャパニーズウイスキー（日本）</h4>
              <p className="text-xs text-muted">
                スコッチの製法をベースに、日本独自の繊細な味わいを追求。1923年、寿屋（現サントリー）の鳥井信治郎と
                ニッカウヰスキー創業者の竹鶴政孝によって本格製造が始まりました。
                2000年代から国際的な品評会で連続受賞し、世界的人気を博すように。
                代表銘柄：山崎、白州、響、余市、宮城峡、知多、イチローズモルト、富士。
              </p>
            </div>
          </div>
        </section>

        {/* スコッチ6地域 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>スコッチの6つのリージョン</h3>
          <p className="text-muted mb-3">
            スコットランドは小さな国ですが、地域ごとにシングルモルトの個性が大きく異なります。
            ウイスキー業界では伝統的に6つのリージョン（地域）に分類されます。
            シングルモルトを選ぶときの「最初の絞り込み」として有効です。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>スペイサイド</h4>
              <p className="text-xs text-muted">
                スコットランドで最も蒸留所が集中する地域。フルーティで華やか、シェリー樽熟成の甘い香りが特徴の銘柄が多い。
                世界で最も売れているシングルモルトの多くがここから。
                代表蒸留所：マッカラン、グレンフィディック、グレンリベット、グレンファークラス、バルヴェニー。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>ハイランド</h4>
              <p className="text-xs text-muted">
                スコットランド最大の地域。蒸留所ごとに個性の幅が大きく、フローラルな北部、軽快な南部、
                スモーキーな西部、力強い東部と、エリアでも違いが楽しめる。
                代表蒸留所：グレンモーレンジィ、ダルモア、オーバン、グレンドロナック。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>アイラ</h4>
              <p className="text-xs text-muted">
                ピート（泥炭）を麦芽の燻蒸に使うため、消毒液・正露丸を思わせる強烈なスモーキー香で有名。
                好き嫌いが激しく分かれるが、ハマると抜け出せない魔性の島。
                代表蒸留所：ラフロイグ、アードベッグ、ボウモア、ラガヴーリン、カリラ、ブナハーブン、ブルックラディ。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>アイランズ</h4>
              <p className="text-xs text-muted">
                アイラ島を除く島々の総称（オークニー、スカイ、マル、ジュラ、アランなど）。
                島ごとに個性が大きく、潮気・スモーキー感・甘さの組み合わせが多彩。
                代表蒸留所：タリスカー（スカイ）、ハイランドパーク（オークニー）、ジュラ、アラン。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>ローランド</h4>
              <p className="text-xs text-muted">
                スコットランド南部。3回蒸留の伝統を持つ蒸留所も多く、軽快でフローラルな繊細な味わいが特徴。
                ウイスキー入門に好適。代表蒸留所：オーヘントッシャン、グレンキンチー、ブラドノック。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>キャンベルタウン</h4>
              <p className="text-xs text-muted">
                かつて30以上の蒸留所があった「ウイスキーの首都」。現在は3つのみが稼働。
                塩気とスモーキーさを兼ね備えた骨太な酒質。代表蒸留所：スプリングバンク、グレンスコシア、グレンガイル。
              </p>
            </div>
          </div>
        </section>

        <AdBannerWrapper />

        {/* 樽の種類 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>樽の種類が味わいを決める</h3>
          <p className="text-muted mb-3">
            ウイスキーの色・香り・味わいの「7割は樽が決める」と言われるほど、熟成樽の影響は大きいもの。
            蒸留したての無色透明な原酒（ニューポット）が、何年もの熟成を経て琥珀色のウイスキーになる過程は、
            樽からの成分溶出と酸化反応の連鎖です。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.04)', border: '1px solid rgba(139,105,20,0.14)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>バーボン樽（アメリカン・オーク）</h4>
              <p className="text-xs text-muted">
                内側を焦がした新しいアメリカンホワイトオーク樽は、バーボンに1回だけ使われた後、スコッチやジャパニーズに転用されます。
                バニラ、ハチミツ、ココナッツ、青リンゴのような明るく甘い香味を生み、スコッチの主力樽。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.04)', border: '1px solid rgba(139,105,20,0.14)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>シェリー樽（ヨーロピアン・オーク）</h4>
              <p className="text-xs text-muted">
                スペインでシェリー酒の熟成に使われた樽を再利用。レーズン、ドライフルーツ、チョコレート、
                スパイスのような濃厚で甘いリッチな香味を生む。マッカランやグレンドロナックが代表的。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.04)', border: '1px solid rgba(139,105,20,0.14)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>ミズナラ樽（日本産オーク）</h4>
              <p className="text-xs text-muted">
                日本固有のオーク。サンダルウッドや伽羅（きゃら）のような独特なオリエンタル・スパイス香を生み、
                世界的に評価が高まっている。山崎・響に使われ、ジャパニーズウイスキーの個性を象徴する樽。
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.04)', border: '1px solid rgba(139,105,20,0.14)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>ワイン樽・ラム樽・ポート樽など</h4>
              <p className="text-xs text-muted">
                「カスク・フィニッシュ」と呼ばれる、最後の数ヶ月〜数年だけ別の樽で追熟する手法でよく使われます。
                ポート樽はベリー系の甘み、ソーテルヌ樽はハチミツのような甘さ、ラム樽はトロピカルな印象を加味します。
              </p>
            </div>
          </div>
        </section>

        {/* 飲み方 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>ウイスキーの飲み方</h3>
          <p className="text-muted mb-3">
            ウイスキーにはさまざまな飲み方があり、それぞれで異なる表情を楽しめます。
            「正解」はありません。同じ1本でも、ストレート→トワイスアップ→ハイボールと変化させると、
            隠れていた香味が次々に顔を出します。
          </p>

          <div className="space-y-2">
            {[
              { name: 'ストレート', desc: 'グラスに注いで、何も加えずそのまま。ウイスキー本来の香りと味を堪能できる飲み方。少量の常温水（チェイサー）を傍らに置くのがマナー。アルコール感が強いので、口当てる量を少しずつに。' },
              { name: 'トワイスアップ', desc: 'ウイスキーと同量の常温水を加える飲み方。香りが最も開きやすく、テイスティングでも標準的に使われる。スコッチ蒸留所のマスターブレンダーも、まずはこの方法で確認します。' },
              { name: 'オン・ザ・ロック', desc: '大きめの氷を入れたグラスにウイスキーを注ぐ飲み方。時間とともに温度が下がり、味わいの変化を楽しめる。氷は丸氷や角氷など溶けにくいものを選ぶと、薄まりすぎず楽しめます。' },
              { name: 'ハイボール', desc: 'ウイスキーを炭酸水で割る飲み方。日本では食中酒の王道として定着。ウイスキー1：炭酸水3〜4が基本比率。後述の「黄金比」を参照。' },
              { name: '水割り', desc: 'ウイスキーを水で割る、日本独自の飲み方。やわらかな味わいになり、食事中にゆっくり楽しめます。1:2〜1:2.5が一般的。' },
              { name: 'ホットウイスキー', desc: 'ウイスキーにお湯を注ぐ飲み方。寒い季節にぴったりで、レモン・蜂蜜・シナモンを加えてホットトディとして楽しむのも人気。お湯7:ウイスキー3が目安。' },
              { name: 'ミスト', desc: 'クラッシュアイス（細かく砕いた氷）を満たしたグラスにウイスキーを注ぐ飲み方。表面が霜のように曇り、ヒンヤリした清涼感が楽しめる。夏向け。' },
            ].map((style) => (
              <div key={style.name} className="rounded-lg p-3 text-xs" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>{style.name}</div>
                <div className="text-muted">{style.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ハイボール黄金比 */}
        <section className="rounded-xl p-4" style={{ background: 'rgba(139,105,20,0.06)', border: '1px solid rgba(139,105,20,0.2)' }}>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>🍻 ハイボールの黄金比と作り方</h3>
          <p className="text-xs text-muted mb-3">
            日本で最も愛されているウイスキーの飲み方であるハイボール。家でお店並みのハイボールを作るには、コツがあります。
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-xs text-muted">
            <li><strong>グラスをよく冷やす</strong>：冷凍庫で冷やしておいたグラスを使うと、炭酸の抜けが遅くなります。</li>
            <li><strong>大きめの氷を山盛りに</strong>：氷が小さいと溶けやすく薄まる原因。冷凍庫で作ったしっかりした氷か、コンビニのロックアイスを推奨。</li>
            <li><strong>ウイスキーを先に注ぐ</strong>：氷をかき混ぜてグラスを冷やし、ウイスキーを30ml注ぎます。マドラーで軽く回して全体を冷却。</li>
            <li><strong>炭酸水をゆっくり注ぐ</strong>：ウイスキー1：炭酸水3〜4が黄金比（合計120〜150ml）。氷に直接当てず、グラスの縁を伝わせて静かに注ぐと炭酸が抜けにくい。</li>
            <li><strong>1回だけ縦に混ぜる</strong>：マドラーを底まで差し入れ、1回だけ上に引き上げる「縦混ぜ」。混ぜすぎは炭酸抜けの元。</li>
            <li><strong>レモンピールを絞る</strong>：好みでレモンの皮を絞り、油分だけをグラス上に吹きかけると、爽やかさが格段にアップ。</li>
          </ol>
          <p className="text-[11px] text-muted mt-3">
            使うウイスキーで印象が大きく変わります。スコッチハイボールはピート感、バーボンハイボールは甘さ、
            ジャパニーズハイボールはバランスの良さが楽しめます。
          </p>
        </section>

        {/* 熟成年数 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>熟成年数と味わい</h3>
          <div className="space-y-2 text-muted">
            <p>
              ウイスキーのラベルに書かれた「12年」「18年」などの数字は、ボトリングに使われた原酒の中で
              <strong>最も若い原酒の熟成年数</strong>を示します。25年と書かれていても、ブレンドに使われている原酒の
              一部はもっと長く熟成されていることが普通です。
            </p>
            <p>
              熟成が長いほど、樽由来のバニラやスパイス、複雑な熟成香（古い書斎や革のような）が増し、
              角が取れたまろやかな味わいになります。一方で、若いウイスキーには、フレッシュで活き活きとした
              フルーティさ、力強さがあり、それぞれに魅力があります。「長熟＝良い」とは限りません。
            </p>
            <p>
              近年は世界的な原酒不足から「ノンエイジ（NAS）」と呼ばれる年数表記のないウイスキーが増えています。
              これらは複数年代の原酒をブレンドし、ブレンダーが理想とする味わいを実現する設計品。
              年数にとらわれず、自分の好みの味わいを見つけることが大切です。
            </p>
          </div>
        </section>

        {/* グラスの選び方 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>グラスの選び方</h3>
          <p className="text-muted mb-3">
            ウイスキーの香りは温度・グラス形状・空気との接触面積で大きく変わります。
            飲み方に合わせてグラスを選ぶと、同じ1本でも体験の質が変わります。
          </p>

          <div className="space-y-2">
            <div className="rounded-lg p-3 text-xs" style={{ background: 'rgba(139,105,20,0.04)' }}>
              <div className="font-bold mb-1" style={{ color: '#8B6914' }}>テイスティンググラス（チューリップ型）</div>
              <div className="text-muted">グレンケアン社のグラスが代表格。上部がすぼまった形状で、香りを集中させる。ストレート・トワイスアップに最適。</div>
            </div>
            <div className="rounded-lg p-3 text-xs" style={{ background: 'rgba(139,105,20,0.04)' }}>
              <div className="font-bold mb-1" style={{ color: '#8B6914' }}>ロックグラス（オールドファッションド）</div>
              <div className="text-muted">底が厚く重い、口の広いグラス。氷を入れて、香りを開放的に楽しむオン・ザ・ロック用。</div>
            </div>
            <div className="rounded-lg p-3 text-xs" style={{ background: 'rgba(139,105,20,0.04)' }}>
              <div className="font-bold mb-1" style={{ color: '#8B6914' }}>タンブラー（ハイボールグラス）</div>
              <div className="text-muted">背の高い細長いグラス。ハイボール・水割り用。炭酸が抜けにくい形状。容量300〜350mlが標準。</div>
            </div>
            <div className="rounded-lg p-3 text-xs" style={{ background: 'rgba(139,105,20,0.04)' }}>
              <div className="font-bold mb-1" style={{ color: '#8B6914' }}>ショットグラス</div>
              <div className="text-muted">30〜45ml容量の小型グラス。バーボンなどの一口飲み（ショット）用。家ではあまり使われない。</div>
            </div>
          </div>
        </section>

        {/* ジャパニーズの歴史 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>ジャパニーズウイスキーの歴史と現在</h3>
          <div className="space-y-2 text-muted text-xs">
            <p>
              日本のウイスキー製造は、寿屋（現サントリー）の鳥井信治郎が1923年に山崎蒸溜所を建設したことに始まります。
              スコットランドでウイスキー製造を学んだ竹鶴政孝が現場を指揮し、1929年に日本初の本格ウイスキー「白札」が発売。
              その後、竹鶴は独立して1934年に大日本果汁（現ニッカウヰスキー）を設立し、北海道・余市に蒸留所を構えました。
            </p>
            <p>
              戦後の高度成長期には「トリスバー」「ニッカバー」を中心にウイスキー文化が定着。
              1980年代には世界的にウイスキー市場が縮小したものの、2000年代に入ってジャパニーズウイスキーが
              国際品評会で連続受賞し、「Japanese Whisky」のブランドが確立。山崎・響・余市・白州・宮城峡・知多などの
              定番銘柄は世界的なプレミア商品となり、現在は品薄状態が続いています。
            </p>
            <p>
              近年は若鶴（富山）、本坊酒造（鹿児島・信州）、ガイアフロー（静岡）、長濱（滋賀）、堅展実業（厚岸）、
              三郎丸（富山）、桜尾（広島）など、クラフト蒸留所が全国で続々と立ち上がっており、ジャパニーズウイスキーの
              バリエーションは急速に拡大しています。
            </p>
            <p>
              2021年には日本洋酒酒造組合が「ジャパニーズウイスキー」の自主基準を制定。「日本国内で麦芽を使用」
              「日本国内の蒸留所で蒸留」「日本国内で3年以上の樽熟成」「日本国内でボトリング」などが条件となり、
              海外原酒を混合したものを「ジャパニーズ」と表示するのは2024年4月以降禁止されました。
            </p>
          </div>
        </section>

        <AdBannerWrapper />

        {/* 銘柄紹介 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>知っておきたい人気銘柄・プレミアム銘柄</h3>
          <p className="text-muted mb-3">
            ウイスキーは世界中で何千もの銘柄が流通しています。ここでは初心者がまず押さえておきたい
            「定番銘柄」と、愛好家の間で話題になる「プレミアム銘柄」を紹介します。
          </p>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#8B6914' }}>📚 定番・入手しやすい銘柄</h4>
          <p className="text-xs text-muted mb-2">スーパー・量販店で見かける、味も価格も安定した鉄板銘柄。</p>
          <div className="space-y-2 mb-5">
            {[
              { name: 'サントリー 角瓶（ジャパニーズ）', desc: 'ハイボールの代名詞。1937年発売の超ロングセラー。スモーキー控えめで食中酒に最適。1,500円〜。' },
              { name: 'サントリー トリス クラシック', desc: '低価格帯の代表。ハイボールベースとして家飲み向き。1,000円台。' },
              { name: 'ニッカ ブラックニッカ ディープブレンド', desc: 'コスパ最強クラスのブレンデッド。バニラ感がほどよく、ハイボール・水割り万能。1,500円。' },
              { name: 'ジョニーウォーカー ブラックラベル12年', desc: '世界で最も売れているスコッチブレンデッド。スモーキーさと甘さのバランスが取れた万能型。2,500円〜。' },
              { name: 'グレンフィディック12年', desc: '世界で最も売れているシングルモルト。フルーティーで軽快、初心者の入門に最適。3,500円〜。' },
              { name: 'ジムビーム（バーボン）', desc: 'バーボン入門の定番。バニラとキャラメルの甘い香り。ハイボールにも最適。1,800円〜。' },
              { name: 'ジャックダニエル ブラック', desc: 'テネシーウイスキーの代表。チャコールメロウイング製法による独特のなめらかさ。2,500円〜。' },
              { name: 'メーカーズマーク', desc: '赤い封蝋が目印のバーボン。冬小麦使用でやわらかな甘さ。3,000円〜。' },
            ].map((b) => (
              <div key={b.name} className="text-xs flex gap-2 p-2.5 rounded" style={{ background: 'rgba(139,105,20,0.04)' }}>
                <span className="font-bold shrink-0 w-40" style={{ color: '#8B6914' }}>{b.name}</span>
                <span className="text-muted">{b.desc}</span>
              </div>
            ))}
          </div>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#B8860B' }}>🌟 ステップアップ銘柄</h4>
          <p className="text-xs text-muted mb-2">バーやウイスキー専門店でよく出会う、好みの傾向を探る中級者向け。</p>
          <div className="space-y-2 mb-5">
            {[
              { name: 'マッカラン12年（スペイサイド）', desc: 'シェリー樽熟成の王道。ドライフルーツ・チョコレートのリッチな香り。8,000円〜（年々高騰中）。' },
              { name: 'グレンモーレンジィ オリジナル10年', desc: 'ハイランドの定番。バニラ・柑橘・蜂蜜の華やかな香りで、女性にも人気。4,500円〜。' },
              { name: 'タリスカー10年（アイランズ）', desc: '「海のウイスキー」と称される潮気のあるスモーキー。ペッパー感も特徴。5,000円〜。' },
              { name: 'ボウモア12年（アイラ）', desc: 'アイラモルト入門に最適。ピート香はあるが、甘さもある「アイラの女性」と評される銘柄。5,500円〜。' },
              { name: 'ラフロイグ10年（アイラ）', desc: 'アイラの王様。正露丸のような独特のヨード香で好き嫌いが分かれる、玄人向けの一本。6,000円〜。' },
              { name: 'ニッカ 余市', desc: '北海道余市蒸留所のシングルモルト。重厚で力強い、ジャパニーズの実力派。9,000円〜。' },
              { name: 'サントリー 白州', desc: '南アルプスの森林を思わせる爽やかさ。ハイボールが特に絶妙。9,000円〜（NA）。' },
              { name: 'イチローズモルト＆グレーン ホワイトラベル', desc: 'ベンチャーウイスキー（埼玉・秩父）の人気ブレンド。複雑な味わいで国際的に高評価。5,000円〜。' },
            ].map((b) => (
              <div key={b.name} className="text-xs flex gap-2 p-2.5 rounded" style={{ background: 'rgba(184,134,11,0.04)' }}>
                <span className="font-bold shrink-0 w-40" style={{ color: '#B8860B' }}>{b.name}</span>
                <span className="text-muted">{b.desc}</span>
              </div>
            ))}
          </div>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#A52D35' }}>👑 プレミアム・希少銘柄</h4>
          <p className="text-xs text-muted mb-2">抽選・限定販売・閉鎖蒸留所などで入手困難なボトル。歴史的価値・コレクション性も高い。</p>
          <div className="space-y-2 mb-3">
            {[
              { name: 'サントリー 山崎18年', desc: 'ジャパニーズの最高峰。世界的人気で正規価格8万円台が市場で30〜50万円。25年は100万円超。' },
              { name: 'サントリー 響21年', desc: 'マスターブレンダーの集大成。「ハーモニー」の名にふさわしいバランス。市場価格50万円超。' },
              { name: '軽井沢（閉鎖蒸留所）', desc: '2000年閉鎖、2011年解体。残された原酒のボトルは1本数十万〜数百万円。投資対象としても有名。' },
              { name: '羽生（閉鎖蒸留所）/ イチローズモルト カードシリーズ', desc: '54本セットが香港オークションで約1億円で落札された伝説のシリーズ。' },
              { name: 'マッカラン25年・30年', desc: 'シェリー樽熟成の究極。25年で40万円超、30年は100万円超のラインナップ。' },
              { name: 'ボウモア40年', desc: '世界最古級のアイラモルト。100万円超のセラーアイテム。' },
              { name: 'ポートエレン（閉鎖蒸留所）', desc: '1983年閉鎖のアイラ蒸留所。残された原酒は数十万円台。2024年再開予定。' },
              { name: 'ザ・グレンリベット セラーコレクション', desc: '最古の原酒を瓶詰めしたシリーズ。1940年代蒸留などのレアボトルが含まれる。' },
              { name: 'カバラン ソリスト（台湾）', desc: '熱帯気候による急速熟成で世界的評価。シングルカスクの中には10万円超のものも。' },
            ].map((b) => (
              <div key={b.name} className="text-xs p-2.5 rounded" style={{ background: 'rgba(165,45,53,0.05)', border: '1px solid rgba(165,45,53,0.12)' }}>
                <div className="font-bold mb-0.5" style={{ color: '#A52D35' }}>{b.name}</div>
                <div className="text-muted">{b.desc}</div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-muted">
            ※ 価格は2026年時点の市場相場（参考）です。ジャパニーズウイスキーは特に投機対象となっており、
            定価と市場価格に大きな乖離があります。バーで一杯（30ml）試してから検討するのが賢明です。
          </p>
        </section>

        {/* 保存 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>ウイスキーの保存</h3>
          <ul className="list-disc pl-5 space-y-1 text-xs text-muted">
            <li><strong>未開栓は立てて常温保管</strong>：ワインと違い、コルクも蒸留酒に長時間触れると傷むため、瓶は立てて保存。</li>
            <li><strong>直射日光を避ける</strong>：光は香味を劣化させます。暗所か、化粧箱に入れたまま保管が安心。</li>
            <li><strong>温度変化を避ける</strong>：エアコンの効いた室内なら問題ありませんが、夏場の高温と冬場の極寒の繰り返しは避けたい。</li>
            <li><strong>開栓後は1年以内に</strong>：開栓後は空気と接触し、ゆっくり酸化が進みます。半分以下になったら、小瓶に詰め替えて酸素接触を減らすと長持ち。</li>
            <li><strong>冷蔵は不要</strong>：アルコール度数が高いため、常温で問題ありません。冷蔵すると香りが閉じてしまい本来の魅力を失います。</li>
          </ul>
        </section>

        {/* 注意 */}
        <section
          className="rounded-lg p-4"
          style={{ background: 'rgba(60,42,30,0.05)', border: '1px solid rgba(60,42,30,0.1)' }}
        >
          <p className="text-xs text-muted">
            ⚠️ ウイスキーはアルコール度数40度以上の強い蒸留酒です。シングル（30ml）で純アルコール約10g、
            ダブル（60ml）で約20g＝厚労省の節度ある適度な飲酒量の上限に達します。
            必ず水（チェイサー）と一緒に、ゆっくり楽しみましょう。
            <Link href="/responsible-drinking" className="underline ml-1" style={{ color: '#C53D43' }}>適正飲酒ガイド</Link>
          </p>
        </section>

        {/* 記事情報 */}
        <ArticleMeta
          publishedAt="2026年5月20日"
          updatedAt="2026年5月22日"
          readTimeMinutes={11}
          references={[
            { name: 'スコッチウイスキー協会（SWA）公式情報', url: 'https://www.scotch-whisky.org.uk/' },
            { name: '日本洋酒酒造組合「ジャパニーズウイスキーの表示に関する基準」', url: 'https://www.yoshu.or.jp/' },
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
