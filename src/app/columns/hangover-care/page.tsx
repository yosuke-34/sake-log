import Link from 'next/link';
import AdBannerWrapper from '@/components/AdBannerWrapper';

export const metadata = {
  title: '二日酔いの原因と対策 - 予防・翌朝のケア・食べ物まで科学的に解説',
  description: 'なぜ二日酔いは起こるのか？アセトアルデヒド・脱水・低血糖など科学的な原因から、飲む前・飲んでいる最中・翌朝の実践的な対策、症状別のおすすめ食べ物まで、健康に楽しむための完全ガイド。',
};

export default function HangoverCarePage() {
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
        <h2 className="text-lg font-bold">💧 二日酔いの原因と対策</h2>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* ヒーロー画像 */}
        <section className="rounded-xl overflow-hidden relative" style={{ height: '200px' }}>
          <img
            src="/hero-hangover.png"
            alt="朝日と水のグラスのイメージ"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(255,240,200,0.3) 0%, transparent 70%)' }}>
            <p className="text-xs" style={{ color: '#3C2A1E', textShadow: '1px 1px 4px rgba(255,250,230,0.8)' }}>
              原因を知れば、予防と対策の精度が上がる
            </p>
          </div>
        </section>

        {/* イントロ */}
        <section>
          <p className="text-muted">
            楽しいお酒の席のあと、翌朝ズキズキとした頭痛や吐き気、だるさに襲われた経験は、
            お酒を嗜むほとんどの方にあるはずです。一般に「二日酔い」と呼ばれるこの症状は、
            実は複数の生理学的な要因が重なって起こります。原因を知れば、予防と対策の精度が
            一気に上がります。
          </p>
          <p className="text-muted mt-2">
            このページでは、二日酔いの主な原因を整理し、「飲む前」「飲んでいる最中」「飲んだ後」
            「翌朝」の4段階で実践的なケア方法を紹介します。本記事は一般的な情報提供を目的としており、
            症状が重い場合や頻繁に繰り返す場合は医療機関にご相談ください。
          </p>
        </section>

        {/* 5つの原因の図解 */}
        <section className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(60,42,30,0.1)' }}>
          <img
            src="/accent-hangover-causes.png"
            alt="二日酔いを引き起こす5つの原因の概要図"
            className="w-full h-auto block"
          />
        </section>

        {/* 原因 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>二日酔いの主な原因は5つ</h3>

          <div className="space-y-3">
            <div className="rounded-lg p-4" style={{ background: 'rgba(197,61,67,0.06)', border: '1px solid rgba(197,61,67,0.2)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#C53D43' }}>① アセトアルデヒドの蓄積</h4>
              <p className="text-xs text-muted">
                体内に入ったアルコール（エタノール）は、肝臓で「アセトアルデヒド」という有害物質に変わり、
                さらに「酢酸」へ分解されて水と二酸化炭素になります。大量に飲酒すると分解が追いつかず、
                アセトアルデヒドが体内に残留。これが頭痛・吐き気・動悸の主犯です。日本人はアセトアルデヒドを
                分解する酵素（ALDH2）の活性が弱い体質の人が多く、欧米人に比べて二日酔いになりやすいとされています。
              </p>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(139,105,20,0.06)', border: '1px solid rgba(139,105,20,0.2)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#8B6914' }}>② 脱水</h4>
              <p className="text-xs text-muted">
                アルコールには利尿作用があり、飲んだ量以上の水分が尿として排出されます。
                ビール500mlを飲むと、約650mlの水分が失われるとも言われます。これにより体内が脱水状態になり、
                頭痛・喉の渇き・倦怠感を引き起こします。朝起きて口がカラカラな経験は、この脱水によるものです。
              </p>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(60,42,30,0.05)', border: '1px solid rgba(60,42,30,0.15)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#3C2A1E' }}>③ 低血糖</h4>
              <p className="text-xs text-muted">
                アルコールを分解する過程で、肝臓は本来の仕事である「糖の産生（糖新生）」が抑制されます。
                結果として血糖値が下がり、だるさ・集中力低下・冷や汗・手の震えが現れます。空腹時の飲酒は特に
                この症状が強く出やすいので要注意。
              </p>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(197,61,67,0.05)', border: '1px solid rgba(197,61,67,0.15)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#C53D43' }}>④ 胃酸過多・胃腸障害</h4>
              <p className="text-xs text-muted">
                アルコールは胃の粘膜を直接刺激し、胃酸の分泌を増やします。これが胃のむかつき・胸焼け・
                吐き気の原因。特に度数の高いお酒をストレートで飲んだり、空腹で飲み始めたりすると強く出ます。
              </p>
            </div>

            <div className="rounded-lg p-4" style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#8B6914' }}>⑤ 睡眠の質の低下</h4>
              <p className="text-xs text-muted">
                お酒を飲むと入眠は早くなりますが、睡眠後半にレム睡眠が妨げられ、深いノンレム睡眠も減少します。
                結果として「寝たのに疲れが取れない」状態に。翌朝のだるさ・集中力低下はこれが大きな要因です。
                「寝酒」が健康法として推奨されない最大の理由でもあります。
              </p>
            </div>
          </div>
        </section>

        <AdBannerWrapper />

        {/* 予防 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>予防: 飲む前と飲んでいる最中の対策</h3>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#C53D43' }}>🕐 飲む前（30分〜1時間前）</h4>
          <ul className="list-disc pl-5 space-y-1 text-xs text-muted mb-4">
            <li><strong>何かを食べておく</strong>：空腹でのアルコール摂取は吸収が早まるため、軽くでも食べる。おすすめは炭水化物＋タンパク質＋脂質のバランス（おにぎりとチーズ、サンドイッチなど）。</li>
            <li><strong>乳製品は有効</strong>：ヨーグルトや牛乳が胃壁を保護し、アルコールの急激な吸収を抑える効果が期待できる。</li>
            <li><strong>水分を摂る</strong>：コップ1杯の水で体を潤しておく。脱水の予防に効果的。</li>
            <li><strong>市販の二日酔い予防ドリンク</strong>：ウコン・ヘパリーゼ系、しじみエキス、オルニチンなどは補助的に有効とされる（ただし医薬品ではない）。</li>
          </ul>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#C53D43' }}>🍻 飲んでいる最中</h4>
          <ul className="list-disc pl-5 space-y-1 text-xs text-muted mb-4">
            <li><strong>水を交互に飲む（チェイサー）</strong>：お酒1杯に対して水を同量飲むのが理想。「和らぎ水（やわらぎみず）」とも呼ばれる日本酒の伝統。</li>
            <li><strong>食べながらゆっくり</strong>：タンパク質・脂質を含むおつまみはアルコール吸収を穏やかに。枝豆、冷や奴、チーズ、ナッツなどは定番で優秀。</li>
            <li><strong>度数の違うお酒を混ぜない（ちゃんぽん）</strong>：飲む総量を見失いやすいだけでなく、異なる添加物・発酵副産物が負担になる説もある。</li>
            <li><strong>強いお酒は薄めて</strong>：ウイスキーや焼酎はストレートで一気に飲まず、水割り・ロック・ハイボールで時間をかけて。</li>
            <li><strong>ペースを決める</strong>：「1時間に1杯」を目安にすると、肝臓の分解速度（平均7gのアルコール／時）に近く、翌日に残りにくい。</li>
          </ul>

          <h4 className="font-bold text-sm mb-2" style={{ color: '#C53D43' }}>🌙 飲んだ後・寝る前</h4>
          <ul className="list-disc pl-5 space-y-1 text-xs text-muted">
            <li><strong>コップ2〜3杯の水を飲む</strong>：就寝前の水分補給が最大のポイント。ミネラルウォーターなら電解質補給も兼ねて◎。</li>
            <li><strong>スポーツドリンクも有効</strong>：経口補水液（OS-1など）やポカリスエットは、脱水時の吸収効率が高い。</li>
            <li><strong>すぐには寝ない</strong>：可能なら30分程度起きてから。入浴はNG（脱水と血圧変動のリスク）。</li>
            <li><strong>暖かく、暗く、静かな環境で</strong>：睡眠の質を少しでも確保する工夫を。</li>
          </ul>
        </section>

        {/* 翌朝 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>翌朝: 症状別のケア</h3>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>💧 頭痛・だるさがあるとき</h4>
              <p className="text-xs text-muted">
                まずは水分補給。経口補水液やスポーツドリンクをゆっくり飲む。コーヒーは利尿作用を促すため、
                脱水が残っているうちは控えめに。カフェイン入りの頭痛薬は胃を荒らすこともあるので慎重に。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.05)', border: '1px solid rgba(197,61,67,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>🍲 胃がムカムカするとき</h4>
              <p className="text-xs text-muted">
                胃に優しい温かいものを少量ずつ。お粥、味噌汁、うどん、豆腐など。柑橘類は胃酸を刺激するので避けて。
                吐き気が強いときは無理に食べず、まず水分だけでOK。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>🥚 エネルギー不足・低血糖を感じるとき</h4>
              <p className="text-xs text-muted">
                糖質をゆっくり補給。はちみつ入りのお湯、バナナ、トースト。タンパク質（卵・納豆）を加えると
                アセトアルデヒド分解を助けるアミノ酸が補えます。
              </p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(139,105,20,0.04)', border: '1px solid rgba(139,105,20,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#8B6914' }}>🍋 おすすめの食べ物・飲み物</h4>
              <ul className="text-xs text-muted list-disc pl-4 space-y-0.5">
                <li><strong>しじみ汁</strong>：オルニチンが肝臓の働きをサポート</li>
                <li><strong>トマトジュース</strong>：水分・ミネラル・リコピンを同時に摂れる</li>
                <li><strong>梅干しのお粥</strong>：クエン酸と水分・塩分・糖質の理想的な組み合わせ</li>
                <li><strong>柿</strong>：タンニンがアセトアルデヒドを吸着する説も</li>
                <li><strong>卵（特に黄身）</strong>：システイン（アミノ酸）が分解を助ける</li>
                <li><strong>経口補水液・スポーツドリンク</strong>：電解質バランスの回復に</li>
              </ul>
            </div>
          </div>

          <p className="text-[11px] text-muted mt-3">
            ※ 個人差があり、上記は一般的に推奨される内容です。嘔吐が止まらない・意識が朦朧とするなど重い症状の場合は、
            急性アルコール中毒の可能性があるため直ちに医療機関へ。
          </p>
        </section>

        {/* 飲んではいけない */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>やってはいけないNG対処法</h3>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded" style={{ background: 'rgba(197,61,67,0.06)', border: '1px solid rgba(197,61,67,0.2)' }}>
              <span className="font-bold" style={{ color: '#C53D43' }}>❌ 迎え酒：</span>
              <span className="text-muted">一時的に症状は紛れますが、肝臓の負担を重ねるだけ。アルコール依存症の入り口にもなりやすく、絶対に避けるべき。</span>
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(197,61,67,0.06)', border: '1px solid rgba(197,61,67,0.2)' }}>
              <span className="font-bold" style={{ color: '#C53D43' }}>❌ サウナで汗を流す：</span>
              <span className="text-muted">脱水が悪化し、心臓・血圧への負担が急増。命に関わるリスクも。</span>
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(197,61,67,0.06)', border: '1px solid rgba(197,61,67,0.2)' }}>
              <span className="font-bold" style={{ color: '#C53D43' }}>❌ 熱いシャワー・熱いお風呂：</span>
              <span className="text-muted">血管拡張で血圧が急変し、失神・転倒のリスク。ぬるめのシャワー程度に留めて。</span>
            </div>
            <div className="p-3 rounded" style={{ background: 'rgba(197,61,67,0.06)', border: '1px solid rgba(197,61,67,0.2)' }}>
              <span className="font-bold" style={{ color: '#C53D43' }}>❌ 激しい運動：</span>
              <span className="text-muted">体内の水分・電解質バランスをさらに崩し、不整脈や熱中症のリスク。安静が基本。</span>
            </div>
          </div>
        </section>

        {/* 根本対策 */}
        <section
          className="rounded-lg p-5"
          style={{ background: 'linear-gradient(135deg, rgba(197,61,67,0.08) 0%, rgba(139,105,20,0.08) 100%)', border: '1px solid rgba(197,61,67,0.25)' }}
        >
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>根本対策: 酒ログで「自分の適量」を見つける</h3>
          <p className="text-xs text-muted mb-2">
            二日酔いを完全に防ぐ唯一の方法は「適量を守ること」です。しかし「自分の適量」は体質・体調・その日のコンディションで変わります。
            酒ログのようなツールで「いつ、何を、どれだけ飲んで、翌日どうだったか」を記録すると、自分の適量が数値として見えてきます。
          </p>
          <p className="text-xs text-muted">
            「純アルコール量」という指標で記録すれば、種類の違うお酒でも比較可能です。詳しくは
            <Link href="/responsible-drinking" className="underline ml-1" style={{ color: '#C53D43' }}>適正飲酒ガイド</Link>
            で解説しています。
          </p>
        </section>

        {/* 免責 */}
        <section
          className="rounded-lg p-4"
          style={{ background: 'rgba(60,42,30,0.05)', border: '1px solid rgba(60,42,30,0.1)' }}
        >
          <p className="text-[11px] text-muted">
            本記事は一般的な情報提供を目的としており、医療行為の代替ではありません。
            重い症状が続く場合、嘔吐が止まらない場合、意識が朦朧とする場合などは、迷わず医療機関を受診してください。
            また、頻繁に二日酔いを繰り返す場合は、飲酒量の見直しと専門医への相談をおすすめします。
          </p>
        </section>

        {/* ナビゲーション */}
        <div className="flex gap-3 pt-2">
          <Link
            href="/responsible-drinking"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(197,61,67,0.08)', color: '#C53D43' }}
          >
            🍀 適正飲酒ガイド
          </Link>
          <Link
            href="/columns/food-pairing"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(139,105,20,0.08)', color: '#8B6914' }}
          >
            🍽️ お酒と料理
          </Link>
        </div>
      </div>
    </div>
  );
}
