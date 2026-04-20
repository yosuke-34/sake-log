import Link from 'next/link';
import AdBannerWrapper from '@/components/AdBannerWrapper';

export const metadata = {
  title: 'お酒と料理のマリアージュ - 失敗しない合わせ方の基本ルール',
  description: '日本酒・ビール・ワイン・ウイスキー・焼酎それぞれに合う料理を、科学的な根拠と実例でわかりやすく解説。五味のバランス、色合わせ、産地合わせなど、家飲みから外食まで使える実用的なペアリングガイド。',
};

export default function FoodPairingPage() {
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
        <h2 className="text-lg font-bold">🍽️ お酒と料理のマリアージュ</h2>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* イントロ */}
        <section>
          <p className="text-muted">
            「マリアージュ（Mariage）」はフランス語で「結婚」を意味し、ワインと料理の理想的な組み合わせを指します。
            お酒と料理の相性が合うと、それぞれを単独で楽しむ時よりも、味わいが何倍にも膨らむ経験ができます。
            逆に相性が悪いと、せっかくの一品もお酒も台無しになることも。
          </p>
          <p className="text-muted mt-2">
            ソムリエでなくても、いくつかの原則を知っていれば失敗はぐっと減らせます。このページでは、
            お酒と料理を合わせるときの基本原則、お酒の種類ごとの王道ペアリング、シーン別の実例を紹介します。
            酒ログに記録するときに「どのおつまみと合わせたか」も書き残すと、自分だけのマリアージュ辞典ができていきます。
          </p>
        </section>

        {/* 基本原則 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>失敗しない5つの原則</h3>

          <div className="space-y-3">
            <div className="rounded-lg p-4" style={{ background: 'rgba(197,61,67,0.05)', border: '1px solid rgba(197,61,67,0.18)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#C53D43' }}>① 色を合わせる</h4>
              <p className="text-xs text-muted">
                「赤ワインは赤身の肉、白ワインは白身の魚」は最もシンプルで外さない鉄則。
                日本酒なら「濃醇系（赤）は照り焼き・すき焼き、淡麗系（白）は刺身・冷奴」というように、
                料理の色味・濃さとお酒のボディを揃えると、ほぼ失敗しません。
              </p>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.18)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#8B6914' }}>② 産地を合わせる</h4>
              <p className="text-xs text-muted">
                「その土地のお酒は、その土地の料理と合う」。何百年もかけて同じ地域で育まれた食文化と酒は、
                自然と調和します。ボルドーワイン×ボルドー料理、イタリアワイン×パスタ、日本酒×和食、
                焼酎×九州料理など、この基本を覚えると迷いません。
              </p>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.15)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#3C2A1E' }}>③ 五味のバランスで考える</h4>
              <p className="text-xs text-muted">
                甘味・酸味・塩味・苦味・旨味の5つ。お酒の持つ味わいと、料理の味わいを
                「補完」または「対比」させるのがコツ。例えば、油っこい料理には酸味のあるお酒（サンジョヴェーゼ、
                辛口の白、ハイボール）で口をリセット。淡い料理には控えめな酸味のお酒で調和を。
              </p>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.15)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#C53D43' }}>④ 香りの方向性を揃える</h4>
              <p className="text-xs text-muted">
                ハーブを使った料理にはハーブ香のあるソーヴィニヨン・ブラン、燻製料理にはスモーキーな
                アイラウイスキー、スパイシーな料理にはシラーやスパイシーな本格焼酎、というように、
                香りのベクトルを合わせると相乗効果が生まれます。
              </p>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(139,105,20,0.04)', border: '1px solid rgba(139,105,20,0.15)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#8B6914' }}>⑤ 強さを揃える</h4>
              <p className="text-xs text-muted">
                繊細な刺身に重厚なカベルネを合わせると、刺身が埋もれます。逆に、濃厚なビーフシチューに
                繊細な白ワインを合わせると、ワインが負けます。料理の「味の強さ」とお酒の「個性の強さ」を
                同レベルで揃えるのが基本です。
              </p>
            </div>
          </div>
        </section>

        <AdBannerWrapper />

        {/* お酒別ペアリング */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>お酒別 定番マリアージュ</h3>

          {/* 日本酒 */}
          <div className="mb-5">
            <h4 className="font-bold text-sm mb-2" style={{ color: '#C53D43' }}>🍶 日本酒</h4>
            <div className="space-y-2">
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(197,61,67,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>大吟醸 / 吟醸</div>
                <p className="text-muted">華やかな果実香が特徴。刺身（白身魚・貝）、カルパッチョ、前菜、うすい味付けの和食。冷やして香りを楽しむ。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(197,61,67,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>純米酒</div>
                <p className="text-muted">お米の旨味がしっかりしたタイプ。肉料理（鶏の照り焼き、豚の角煮）、煮物、チーズ、だし巻き卵。ぬる燗もおすすめ。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(197,61,67,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>本醸造（辛口）</div>
                <p className="text-muted">キレがあり、食中酒として最強。天ぷら、焼き魚、塩焼き鳥、鍋物、お好み焼きなど幅広く対応。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(197,61,67,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>生酛 / 山廃系</div>
                <p className="text-muted">複雑で力強い旨味。熟成チーズ、生ハム、レバー、ジビエ、燻製、味の濃い料理と渡り合える。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(197,61,67,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>にごり / どぶろく</div>
                <p className="text-muted">ヨーグルトのような乳酸感。イチゴなどのフルーツ、ケーキ、エスニック料理（パクチー、ナンプラー）と意外な相性。</p>
              </div>
            </div>
          </div>

          {/* ビール */}
          <div className="mb-5">
            <h4 className="font-bold text-sm mb-2" style={{ color: '#8B6914' }}>🍺 ビール</h4>
            <div className="space-y-2">
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(184,134,11,0.06)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>ピルスナー / ラガー</div>
                <p className="text-muted">爽快な喉越し。唐揚げ、餃子、焼き鳥、枝豆、ポテトフライ、寿司。揚げ物の油を流す役割でどんな場面にも。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(184,134,11,0.06)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>ペールエール / IPA</div>
                <p className="text-muted">ホップの華やかな苦みと香り。スパイシーなカレー、バッファローウィング、ハンバーガー、チェダーチーズ。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(184,134,11,0.06)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>ヴァイツェン</div>
                <p className="text-muted">バナナ・クローブのような香り。ソーセージ、白身魚のムニエル、エッグベネディクトと王道の組み合わせ。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(184,134,11,0.06)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>スタウト / ポーター</div>
                <p className="text-muted">ローストモルトのコク。牡蠣、ビーフシチュー、チョコレートケーキ。意外とデザートと好相性。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(184,134,11,0.06)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>ベルジャンエール（白ビール含む）</div>
                <p className="text-muted">コリアンダーやオレンジピールの香り。ムール貝、シーフード、エスニック料理、タイカレー。</p>
              </div>
            </div>
          </div>

          {/* ワイン */}
          <div className="mb-5">
            <h4 className="font-bold text-sm mb-2" style={{ color: '#A52D35' }}>🍷 ワイン</h4>
            <div className="space-y-2">
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(165,45,53,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>スパークリング（シャンパン・プロセッコ）</div>
                <p className="text-muted">前菜、揚げ物、寿司、塩味の効いた料理全般。脂っこい料理を爽やかにリセットする「万能食前酒」。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(165,45,53,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>辛口白（シャルドネ、ソーヴィニヨン・ブラン、甲州）</div>
                <p className="text-muted">白身魚、貝、鶏むね、前菜、ハーブ料理、和食。甲州はなんと醤油との相性も◎。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(165,45,53,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>ロゼ</div>
                <p className="text-muted">生ハム、サーモン、BBQ、タイ料理。赤と白の守備範囲をカバーする万能選手。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(165,45,53,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>軽めの赤（ピノ・ノワール、ガメイ、マスカット・ベーリーA）</div>
                <p className="text-muted">鶏もも、豚肉、鮪のタタキ、きのこ料理、鰻蒲焼。醤油を使った和食とも相性良し。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(165,45,53,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>重めの赤（カベルネ、シラー、サンジョヴェーゼ）</div>
                <p className="text-muted">ステーキ、ラム、ジビエ、濃厚なシチュー、熟成チーズ、ペッパーを効かせた料理。</p>
              </div>
            </div>
          </div>

          {/* ウイスキー */}
          <div className="mb-5">
            <h4 className="font-bold text-sm mb-2" style={{ color: '#8B6914' }}>🥃 ウイスキー</h4>
            <div className="space-y-2">
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(139,105,20,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>ハイボール（スコッチ / ジャパニーズ）</div>
                <p className="text-muted">唐揚げ、餃子、焼き鳥、天ぷら、ピザ、焼肉。食中酒として万能。レモンを絞ると和食との相性がさらに上がる。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(139,105,20,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>バーボン</div>
                <p className="text-muted">バーベキュー、スモークチキン、ペカンパイ、チョコレート。甘みとバニラ香が甘辛い料理に寄り添う。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(139,105,20,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>シングルモルト（スペイサイド・ハイランド）</div>
                <p className="text-muted">スモークサーモン、蜂蜜漬けのナッツ、ドライフルーツ、ダークチョコレート。食後にじっくりと。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(139,105,20,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>アイラモルト（ピート香の強いタイプ）</div>
                <p className="text-muted">牡蠣、カラスミ、ブルーチーズ、燻製全般、葉巻。好き嫌いは分かれるが、ハマると抜け出せない魔性の組み合わせ。</p>
              </div>
            </div>
          </div>

          {/* 焼酎 */}
          <div className="mb-5">
            <h4 className="font-bold text-sm mb-2" style={{ color: '#C53D43' }}>🍠 焼酎</h4>
            <div className="space-y-2">
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(197,61,67,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>芋焼酎（お湯割り）</div>
                <p className="text-muted">豚の角煮、黒豚しゃぶしゃぶ、煮物、薩摩揚げ、ホルモン焼き。甘くコクのある料理と相乗効果。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(197,61,67,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>麦焼酎（ロック / 水割り）</div>
                <p className="text-muted">焼き鳥、天ぷら、寿司、刺身（白身）。クセの少ない麦焼酎は食中酒として万能。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(197,61,67,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>米焼酎</div>
                <p className="text-muted">鰻の蒲焼、湯豆腐、鍋物、白身魚の煮付け。日本酒に近い用途で使える。</p>
              </div>
              <div className="text-xs p-3 rounded" style={{ background: 'rgba(197,61,67,0.05)' }}>
                <div className="font-bold mb-1" style={{ color: '#3C2A1E' }}>泡盛古酒</div>
                <p className="text-muted">ラフテー、ミミガー、豆腐よう、ブルーチーズ。熟成した旨味が際立つ組み合わせ。</p>
              </div>
            </div>
          </div>
        </section>

        {/* シーン別 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>シーン別おすすめ</h3>

          <div className="space-y-3">
            <div className="rounded-lg p-4" style={{ background: 'rgba(197,61,67,0.05)', border: '1px solid rgba(197,61,67,0.15)' }}>
              <h4 className="font-bold text-sm mb-2" style={{ color: '#C53D43' }}>🏠 家飲みの定番セット</h4>
              <ul className="text-xs text-muted list-disc pl-4 space-y-1">
                <li><strong>刺身盛り合わせ</strong> × 冷やした純米吟醸 / 甲州</li>
                <li><strong>ピザ（マルゲリータ）</strong> × キャンティ（イタリア産サンジョヴェーゼ）</li>
                <li><strong>唐揚げ</strong> × ハイボール / ピルスナー</li>
                <li><strong>チーズ盛り</strong> × 熟成させた日本酒 or 重めの赤ワイン</li>
                <li><strong>餃子</strong> × ビール全般 / 麦焼酎ハイボール</li>
              </ul>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}>
              <h4 className="font-bold text-sm mb-2" style={{ color: '#8B6914' }}>🎉 お祝い・特別な日</h4>
              <ul className="text-xs text-muted list-disc pl-4 space-y-1">
                <li>前菜 → シャンパンやスパークリング</li>
                <li>魚料理 → シャルドネ or 吟醸酒</li>
                <li>肉料理 → ピノ・ノワール or カベルネ・ソーヴィニヨン</li>
                <li>デザート → 甘口ワイン or モルトウイスキー</li>
              </ul>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-sm mb-2" style={{ color: '#3C2A1E' }}>🍣 和食の定番</h4>
              <ul className="text-xs text-muted list-disc pl-4 space-y-1">
                <li><strong>寿司</strong> → 冷酒 / 淡麗辛口 / スパークリングワイン</li>
                <li><strong>天ぷら</strong> → 冷えたビール / 辛口白ワイン / ハイボール</li>
                <li><strong>すき焼き</strong> → 濃醇な純米酒 / 軽めの赤ワイン</li>
                <li><strong>鍋物</strong> → ぬる燗 / ロゼワイン</li>
                <li><strong>蕎麦・うどん</strong> → 冷酒 / 麦焼酎</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 豆知識 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>マリアージュの豆知識</h3>

          <div className="space-y-2 text-xs text-muted">
            <div className="p-3 rounded" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <strong style={{ color: '#3C2A1E' }}>🧂 塩気のある料理 ×  辛口のお酒</strong>：
              塩味はアルコールの刺激を和らげる効果があり、ほぼ全てのお酒と好相性。悩んだら「塩気のあるおつまみ」で。
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <strong style={{ color: '#3C2A1E' }}>🍋 酸味のあるお酒 × 脂の多い料理</strong>：
              酸味が脂をさっぱりと洗い流すので、揚げ物や中華料理と抜群。ハイボールにレモンを加える理由はここにあります。
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <strong style={{ color: '#3C2A1E' }}>🔥 辛い料理 × 甘めのお酒</strong>：
              カプサイシンの刺激を甘みが中和。辛口よりも、ほんのり甘いリースリングや白ワイン、果実系のカクテルが合う。
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <strong style={{ color: '#3C2A1E' }}>🧀 苦味のあるお酒 × 旨味の強い料理</strong>：
              IPAやビターなビールは、旨味の濃い煮込み料理やチーズと相性抜群。苦味が旨味を引き立てる。
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}>
              <strong style={{ color: '#3C2A1E' }}>❌ 避けたほうがいい組み合わせ</strong>：
              生魚 × 重い赤ワイン（鉄分と魚の油が生臭さを増幅）、卵黄 × タンニンの強い赤（卵のコクがワインを重くする）、
              チョコ × 辛口白ワイン（チョコの甘みがワインを酸っぱく感じさせる）など。
            </div>
          </div>
        </section>

        {/* 酒ログ活用 */}
        <section
          className="rounded-lg p-5"
          style={{ background: 'linear-gradient(135deg, rgba(197,61,67,0.05) 0%, rgba(139,105,20,0.05) 100%)', border: '1px solid rgba(197,61,67,0.2)' }}
        >
          <h3 className="text-base font-bold mb-2" style={{ color: '#C53D43' }}>酒ログで「自分のマリアージュ辞典」を作ろう</h3>
          <p className="text-xs text-muted">
            どんなに素晴らしいペアリングの本を読んでも、最後に信じられるのは「自分が美味しいと思った組み合わせ」。
            酒ログの記録機能を使って、銘柄と一緒に「どんな料理と合わせたか」「美味しかったか」をメモしていくと、
            あなただけの黄金パターンが見つかります。
          </p>
        </section>

        {/* 注意 */}
        <section
          className="rounded-lg p-4"
          style={{ background: 'rgba(60,42,30,0.05)', border: '1px solid rgba(60,42,30,0.1)' }}
        >
          <p className="text-xs text-muted">
            ⚠️ マリアージュを楽しむ前に、まずは適正飲酒を。どんなに美味しいお酒も、健康を損なえば楽しめません。
            <Link href="/responsible-drinking" className="underline ml-1" style={{ color: '#C53D43' }}>適正飲酒ガイド</Link>も
            ぜひご参照ください。
          </p>
        </section>

        {/* ナビゲーション */}
        <div className="flex gap-3 pt-2">
          <Link
            href="/columns"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(197,61,67,0.08)', color: '#C53D43' }}
          >
            📝 コラム一覧
          </Link>
          <Link
            href="/columns/hangover-care"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(139,105,20,0.08)', color: '#8B6914' }}
          >
            💧 二日酔い対策
          </Link>
        </div>
      </div>
    </div>
  );
}
