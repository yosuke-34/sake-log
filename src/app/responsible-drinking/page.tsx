import Link from 'next/link';

export const metadata = {
  title: '適正飲酒ガイド - お酒と健康的に付き合うために | 酒ログ',
  description: 'お酒を健康的に楽しむための適正飲酒ガイドです。純アルコール量の考え方、健康リスク、飲酒を控えるべき方、未成年・飲酒運転の禁止など、責任ある飲酒のための情報をまとめています。',
};

export default function ResponsibleDrinkingPage() {
  return (
    <div className="prose prose-sm max-w-none text-foreground">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-border/50 transition-colors text-foreground"
          aria-label="戻る"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <h2 className="text-lg font-bold">適正飲酒ガイド</h2>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* 導入 */}
        <section
          className="rounded-xl p-5"
          style={{ background: 'linear-gradient(135deg, rgba(197,61,67,0.08) 0%, rgba(139,105,20,0.08) 100%)', border: '1px solid rgba(197,61,67,0.2)' }}
        >
          <p className="text-base font-bold mb-2" style={{ color: '#C53D43' }}>
            お酒と健康的に付き合うために
          </p>
          <p className="text-muted text-xs">
            お酒は古来より人々の生活に寄り添ってきた文化的飲料ですが、
            飲み方を誤ると健康を損なう原因にもなります。
            本ページでは、厚生労働省や公的機関が公表する情報をもとに、
            適正な飲酒のための知識をまとめました。
          </p>
        </section>

        {/* 絶対に守るべきこと */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>絶対に守るべき3つのルール</h3>

          <div className="space-y-3">
            <div
              className="rounded-lg p-4"
              style={{ background: 'rgba(197,61,67,0.08)', border: '1px solid rgba(197,61,67,0.25)' }}
            >
              <h4 className="font-bold text-sm mb-1" style={{ color: '#C53D43' }}>
                ① 20歳未満の飲酒は法律で禁止
              </h4>
              <p className="text-xs text-muted">
                「二十歳未満ノ者ノ飲酒ノ禁止ニ関スル法律」により、20歳未満の飲酒は禁じられています。
                成長期の飲酒はアルコール依存症や脳の発達への悪影響のリスクが高く、
                保護者や販売者にも責任が問われます。
              </p>
            </div>

            <div
              className="rounded-lg p-4"
              style={{ background: 'rgba(197,61,67,0.08)', border: '1px solid rgba(197,61,67,0.25)' }}
            >
              <h4 className="font-bold text-sm mb-1" style={{ color: '#C53D43' }}>
                ② 飲酒運転は絶対にしない
              </h4>
              <p className="text-xs text-muted">
                道路交通法により、酒気帯び運転・酒酔い運転は厳しく罰せられます。
                「少しだけだから」「時間が経ったから」は通用しません。
                飲酒時は必ず公共交通機関や代行運転を利用しましょう。
                同乗者や酒類提供者も処罰対象となります。
              </p>
            </div>

            <div
              className="rounded-lg p-4"
              style={{ background: 'rgba(197,61,67,0.08)', border: '1px solid rgba(197,61,67,0.25)' }}
            >
              <h4 className="font-bold text-sm mb-1" style={{ color: '#C53D43' }}>
                ③ 妊娠中・授乳期の飲酒は控える
              </h4>
              <p className="text-xs text-muted">
                妊娠中の飲酒は、胎児性アルコール・スペクトラム障害（FASD）の原因となります。
                授乳期の飲酒もアルコールが母乳を通じて乳児に移行する可能性があります。
                「少量なら大丈夫」という安全量は確立されていません。
              </p>
            </div>
          </div>
        </section>

        {/* 純アルコール量 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>純アルコール量の考え方</h3>
          <p className="text-muted mb-3">
            厚生労働省は「健康日本21」において、節度ある適度な飲酒量の目安として
            <strong style={{ color: '#C53D43' }}>1日平均純アルコール20g程度</strong>を示しています。
            純アルコール量は次の式で計算できます。
          </p>

          <div
            className="rounded-lg p-4 my-3 text-center"
            style={{ background: 'rgba(139,105,20,0.08)', border: '1px dashed rgba(139,105,20,0.3)' }}
          >
            <p className="text-sm font-bold" style={{ color: '#8B6914' }}>
              純アルコール量（g）＝ 飲酒量（ml）× アルコール度数（%）× 0.8 ÷ 100
            </p>
          </div>

          <p className="text-muted mb-3">
            お酒の種類別に純アルコール20gの目安量は以下の通りです。
          </p>

          <div className="space-y-2">
            {[
              { type: 'ビール（5%）', amount: '中瓶1本（500ml）', emoji: '🍺' },
              { type: '日本酒（15%）', amount: '1合（180ml）', emoji: '🍶' },
              { type: '焼酎（25%）', amount: '0.6合（約110ml）', emoji: '🥃' },
              { type: 'ウイスキー（43%）', amount: 'ダブル1杯（60ml）', emoji: '🥃' },
              { type: 'ワイン（12%）', amount: 'グラス2杯弱（200ml）', emoji: '🍷' },
              { type: 'チューハイ（7%）', amount: '350ml缶1本', emoji: '🍹' },
            ].map((item) => (
              <div
                key={item.type}
                className="flex items-center gap-3 text-xs p-2 rounded"
                style={{ background: 'rgba(60,42,30,0.03)' }}
              >
                <span className="text-xl">{item.emoji}</span>
                <div className="flex-1">
                  <div className="font-bold" style={{ color: '#3C2A1E' }}>{item.type}</div>
                  <div className="text-muted">{item.amount}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-muted mt-3">
            ※ 女性、高齢者、体質的にアルコールを代謝しにくい方はこの量より少なめにすることが推奨されます。
          </p>
        </section>

        {/* 特に注意が必要な方 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>飲酒を控えるべき・注意が必要な方</h3>
          <ul className="list-disc pl-5 space-y-2 text-xs text-muted">
            <li><strong>女性</strong>：男性に比べて体内の水分量やアルコール分解酵素の働きが異なるため、男性より少ない量に留めることが望ましいとされています。</li>
            <li><strong>高齢者</strong>：加齢によりアルコール分解能力が低下します。また、転倒や事故のリスクも高まります。</li>
            <li><strong>若年者（20代前半まで）</strong>：脳の発達が続いているため、多量飲酒は将来的な依存症リスクを高めます。</li>
            <li><strong>お酒に弱い方（フラッシング反応のある方）</strong>：顔が赤くなる・動悸がするなどの反応がある方は、食道がんなどのリスクが高いため特に注意が必要です。</li>
            <li><strong>持病・服薬中の方</strong>：肝疾患、糖尿病、高血圧、痛風などをお持ちの方や、薬を服用中の方は、必ず医師に相談してください。</li>
            <li><strong>アルコール依存症の経験がある方</strong>：1杯でも依存症の再燃リスクがあります。飲酒は避けてください。</li>
          </ul>
        </section>

        {/* 健康リスク */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>過度な飲酒による健康リスク</h3>
          <p className="text-muted mb-3">
            長期・多量の飲酒は、さまざまな疾患のリスクを高めることが科学的に知られています。
          </p>

          <div className="grid grid-cols-2 gap-2">
            {[
              { title: '肝疾患', desc: '脂肪肝、アルコール性肝炎、肝硬変、肝がん' },
              { title: 'がん', desc: '口腔、咽頭、食道、大腸、乳房など' },
              { title: '循環器疾患', desc: '高血圧、不整脈、脳卒中、心筋症' },
              { title: '消化器疾患', desc: '急性・慢性膵炎、胃炎、胃潰瘍' },
              { title: '精神疾患', desc: 'うつ病、不眠症、認知症、依存症' },
              { title: '外傷・事故', desc: '転倒、交通事故、暴力、溺水' },
            ].map((risk) => (
              <div
                key={risk.title}
                className="rounded p-2 text-xs"
                style={{ background: 'rgba(197,61,67,0.05)', border: '1px solid rgba(197,61,67,0.15)' }}
              >
                <div className="font-bold mb-1" style={{ color: '#C53D43' }}>{risk.title}</div>
                <div className="text-muted text-[11px]">{risk.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 健康的な飲み方 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>お酒を楽しむための7つの心得</h3>
          <ol className="list-decimal pl-5 space-y-2 text-xs text-muted">
            <li><strong>適量を守る</strong>：1日平均純アルコール20g程度を目安に。</li>
            <li><strong>食事と一緒に</strong>：空腹時の飲酒はアルコールの吸収が早まり、胃を傷めます。食事と一緒にゆっくりと。</li>
            <li><strong>水を飲みながら</strong>：「和らぎ水」「チェイサー」を挟むことで、悪酔い・脱水・翌日の不調を防げます。</li>
            <li><strong>休肝日を設ける</strong>：週に2日はお酒を飲まない日を作り、肝臓を休ませましょう。</li>
            <li><strong>強いお酒は薄めて</strong>：ウイスキーや焼酎はストレートで一気に飲まず、水割りやロックで時間をかけて。</li>
            <li><strong>他人にお酒を強要しない</strong>：アルコールハラスメント（アルハラ）は重大な社会問題です。相手の体質・意思を尊重しましょう。</li>
            <li><strong>寝酒に頼らない</strong>：アルコールは睡眠の質を下げます。不眠の解消目的での飲酒は逆効果です。</li>
          </ol>
        </section>

        {/* 相談窓口 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>相談窓口</h3>
          <p className="text-muted mb-3">
            ご自身や身近な方のお酒の飲み方に不安を感じたら、早めに専門機関へご相談ください。
          </p>

          <div className="space-y-2 text-xs">
            <div
              className="rounded-lg p-3"
              style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}
            >
              <div className="font-bold" style={{ color: '#3C2A1E' }}>厚生労働省 アルコール健康障害対策</div>
              <div className="text-muted mt-1">全国の専門医療機関・相談窓口の情報が掲載されています。</div>
            </div>
            <div
              className="rounded-lg p-3"
              style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}
            >
              <div className="font-bold" style={{ color: '#3C2A1E' }}>各都道府県の精神保健福祉センター</div>
              <div className="text-muted mt-1">アルコール依存症を含む、こころの健康に関する相談を無料で受け付けています。</div>
            </div>
            <div
              className="rounded-lg p-3"
              style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}
            >
              <div className="font-bold" style={{ color: '#3C2A1E' }}>AA（アルコホーリクス・アノニマス）</div>
              <div className="text-muted mt-1">飲酒問題からの回復を目指す当事者の自助グループです。全国に集会があります。</div>
            </div>
          </div>
        </section>

        {/* 参考情報 */}
        <section
          className="rounded-lg p-4"
          style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}
        >
          <h4 className="text-sm font-bold mb-2" style={{ color: '#8B6914' }}>参考情報</h4>
          <ul className="text-[11px] text-muted list-disc pl-4 space-y-1">
            <li>厚生労働省「健康日本21（第三次）」</li>
            <li>厚生労働省「健康に配慮した飲酒に関するガイドライン」（2024年2月）</li>
            <li>国税庁「お酒と健康」</li>
            <li>公益財団法人アルコール健康医学協会</li>
          </ul>
          <p className="text-[10px] text-muted mt-3">
            ※ 本ページの情報は一般的な情報提供を目的としています。健康上の判断や治療については、必ず医師等の専門家にご相談ください。
          </p>
        </section>

        {/* 酒ログの姿勢 */}
        <section
          className="rounded-lg p-5"
          style={{ background: 'linear-gradient(135deg, rgba(197,61,67,0.05) 0%, rgba(60,42,30,0.05) 100%)', border: '1px solid rgba(197,61,67,0.2)' }}
        >
          <h4 className="text-sm font-bold mb-2" style={{ color: '#C53D43' }}>酒ログからのお願い</h4>
          <p className="text-xs text-muted">
            酒ログは、お酒を文化として楽しむ方々の記録をサポートするアプリです。
            決して飲酒を推奨するものではありません。
            記録機能を通じて、ご自身の飲酒習慣を可視化し、
            健康的なお酒との付き合い方を考えるきっかけにしていただければ幸いです。
          </p>
        </section>

        {/* ナビゲーション */}
        <div className="flex gap-3 pt-2">
          <Link
            href="/about"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(197,61,67,0.08)', color: '#C53D43' }}
          >
            🏠 酒ログについて
          </Link>
          <Link
            href="/contact"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(139,105,20,0.08)', color: '#8B6914' }}
          >
            ✉️ お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
