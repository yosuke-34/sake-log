import Link from 'next/link';
import AdBannerWrapper from '@/components/AdBannerWrapper';

export const metadata = {
  title: '日本酒の基礎知識 - 酒ログ',
  description: '日本酒の特定名称酒の分類、日本酒度や酸度の読み方、温度帯による味わいの違い、正しい保存方法まで、日本酒をより深く楽しむための基礎知識を解説します。',
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
        <section className="rounded-xl overflow-hidden relative" style={{ height: '200px' }}>
          <img
            src="/hero-nihonshu.png"
            alt="日本酒"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }}>
            <p className="text-xs" style={{ color: 'rgba(255,253,245,0.9)', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              日本酒をより深く楽しむための基礎知識
            </p>
          </div>
        </section>

        <section>
          <p className="text-muted">
            日本酒は米と水から造られる日本固有のお酒です。その種類は多岐にわたり、味わいも実にさまざまです。
            ここでは、日本酒をより深く楽しむための基礎知識をご紹介します。
          </p>
        </section>

        {/* 特定名称酒 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>特定名称酒の分類</h3>
          <p className="text-muted mb-3">
            日本酒は原料と精米歩合によって8種類の「特定名称酒」に分類されます。
            精米歩合とは、玄米をどれだけ磨いたかを示す数値で、数値が小さいほど多く磨かれています。
          </p>

          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.05)', border: '1px solid rgba(197,61,67,0.15)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>純米大吟醸 / 大吟醸</h4>
              <p className="text-xs text-muted">精米歩合50%以下。米を半分以上磨き、低温でゆっくり発酵させて造ります。フルーティーで華やかな香りが特徴で、日本酒の最高峰とされています。</p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.04)', border: '1px solid rgba(197,61,67,0.12)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>純米吟醸 / 吟醸</h4>
              <p className="text-xs text-muted">精米歩合60%以下。大吟醸ほどではありませんが、華やかな香りとすっきりした味わいが楽しめます。日常的に楽しむ高品質な日本酒として人気です。</p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.03)', border: '1px solid rgba(197,61,67,0.1)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>特別純米 / 特別本醸造</h4>
              <p className="text-xs text-muted">精米歩合60%以下、または特別な製法で造られた日本酒。米の旨味がしっかり感じられ、食事との相性が抜群です。</p>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'rgba(197,61,67,0.02)', border: '1px solid rgba(197,61,67,0.08)' }}>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#C53D43' }}>純米 / 本醸造</h4>
              <p className="text-xs text-muted">純米酒は米と米麹のみで造られ、米本来の味わいが特徴。本醸造は少量の醸造アルコールを加えることで、すっきりとした後味に仕上げています。</p>
            </div>
          </div>

          <p className="text-xs text-muted mt-3">
            「純米」が付くものは醸造アルコール無添加、付かないものは少量の醸造アルコールが添加されています。
            どちらが良い・悪いということではなく、味わいの方向性が異なるだけです。
          </p>
        </section>

        {/* 日本酒度と酸度 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>日本酒度と酸度の読み方</h3>
          <p className="text-muted mb-3">
            日本酒のラベルに書かれている数値を理解すると、好みのお酒を見つけやすくなります。
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>日本酒度（SMV）</h4>
              <p className="text-xs text-muted">
                お酒の甘口・辛口の目安を示す数値です。プラス（＋）になるほど辛口、マイナス（－）になるほど甘口とされます。
                ただし、実際の味わいは酸度との組み合わせで変わるため、あくまで目安として捉えましょう。
              </p>
              <div className="flex items-center gap-2 mt-2 text-xs">
                <span className="px-2 py-1 rounded" style={{ background: 'rgba(197,61,67,0.1)', color: '#C53D43' }}>-5以下: 甘口</span>
                <span className="px-2 py-1 rounded" style={{ background: 'rgba(60,42,30,0.05)' }}>±0: 中間</span>
                <span className="px-2 py-1 rounded" style={{ background: 'rgba(139,105,20,0.1)', color: '#8B6914' }}>+5以上: 辛口</span>
              </div>
            </div>

            <div className="mt-3">
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>酸度</h4>
              <p className="text-xs text-muted">
                お酒に含まれる酸の量を示す数値です。酸度が高いとコクのある濃醇な味わい、低いと淡麗でさっぱりした味わいになります。
                一般的に1.0〜2.0の範囲で、1.3前後が標準的です。
              </p>
            </div>
          </div>
        </section>

        {/* 温度帯 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>温度で変わる味わい</h3>
          <p className="text-muted mb-3">
            日本酒は飲む温度によって味わいが大きく変化します。同じお酒でも温度を変えるだけで、全く違った表情を見せてくれるのが日本酒の魅力です。
          </p>

          <div className="space-y-2">
            {[
              { name: '雪冷え（5℃）', desc: 'キリッと冷たく、シャープな味わい。香りは控えめで、すっきり飲めます。' },
              { name: '花冷え（10℃）', desc: '適度に冷えて香りが立ち始める温度。吟醸酒におすすめの飲み方です。' },
              { name: '涼冷え（15℃）', desc: '常温に近く、米の旨味が感じやすい温度帯。純米酒に最適です。' },
              { name: '日向燗（30℃）', desc: 'ほんのり温かく、口当たりがまろやかに。味わいが開き始めます。' },
              { name: 'ぬる燗（40℃）', desc: 'お酒の旨味が最も引き出される温度帯。食中酒として万能です。' },
              { name: '熱燗（50℃）', desc: 'しっかり温かく、キレのある味わいに。寒い季節に体が温まります。' },
              { name: '飛びきり燗（55℃以上）', desc: 'アルコール感が強まり、シャープでドライな味わい。上級者向けです。' },
            ].map((temp) => (
              <div key={temp.name} className="flex gap-2 text-xs">
                <span className="font-bold shrink-0 w-28" style={{ color: '#8B6914' }}>{temp.name}</span>
                <span className="text-muted">{temp.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 保存方法 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>日本酒の保存方法</h3>
          <div className="space-y-2 text-muted">
            <p>
              日本酒は光と温度に弱いお酒です。正しく保存することで、本来の味わいを長く楽しめます。
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li><strong>冷蔵保存が基本</strong>：特に生酒・生貯蔵酒は必ず冷蔵庫で保存しましょう。</li>
              <li><strong>直射日光を避ける</strong>：日光に当たると「日光臭」と呼ばれる不快な臭いが発生します。</li>
              <li><strong>立てて保存</strong>：空気に触れる面積を最小限にするため、瓶は立てて保存します。</li>
              <li><strong>開栓後は早めに</strong>：開封後は酸化が進むため、2週間以内に飲みきるのが理想的です。</li>
            </ul>
          </div>
        </section>

        <AdBannerWrapper />

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
