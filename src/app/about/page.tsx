import Link from 'next/link';
import AdBannerWrapper from '@/components/AdBannerWrapper';

export const metadata = {
  title: '酒ログについて - お酒の記録帳アプリ',
  description: '酒ログは、飲んだお酒を手軽に記録できるWebアプリです。カレンダー記録、銘柄図鑑、飲酒量統計、都道府県マップなど充実の機能で、あなたのお酒ライフを豊かにします。',
};

export default function AboutPage() {
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
        <h2 className="text-lg font-bold">酒ログについて</h2>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* ヒーローセクション */}
        <section className="rounded-xl overflow-hidden relative" style={{ height: '220px' }}>
          {/* 背景写真 */}
          <img
            src="/hero-beer.png"
            alt="ビールジョッキ"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* オーバーレイテキスト */}
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: 'rgba(0,0,0,0.35)' }}>
            <h1
              className="text-4xl mb-1"
              style={{
                fontFamily: '"Zen Antique Soft", serif',
                color: '#FFFDF5',
                textShadow: '3px 3px 10px rgba(0,0,0,0.8), 0 0 30px rgba(197,61,67,0.5)',
                letterSpacing: '0.2em',
              }}
            >
              酒ログ〜
            </h1>
            <p className="text-sm" style={{ color: 'rgba(255,253,245,0.9)', textShadow: '1px 1px 6px rgba(0,0,0,0.9)' }}>
              あなたのお酒ライフを、もっと豊かに。
            </p>
          </div>
        </section>

        {/* 酒ログとは */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>酒ログとは？</h3>
          <p className="text-muted">
            「酒ログ」は、飲んだお酒を手軽に記録できるWebアプリケーションです。
            日本酒、ウイスキー、ビール、焼酎、ワイン、ジンなど、あらゆるお酒の記録をカレンダー形式で管理できます。
          </p>
          <p className="text-muted mt-2">
            「あの時飲んだお酒、なんだったっけ？」「この銘柄、前にも飲んだことがある気がする…」
            そんな経験はありませんか？酒ログを使えば、飲んだお酒の銘柄、場所、量、感想をすべて記録でき、
            あとから簡単に振り返ることができます。
          </p>
        </section>

        {/* 主な機能 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>主な機能</h3>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0">📅</span>
              <div>
                <h4 className="font-bold text-sm" style={{ color: '#3C2A1E' }}>カレンダー記録</h4>
                <p className="text-muted text-xs mt-1">
                  飲んだ日付をカレンダーで一覧表示。いつ、どこで、何を飲んだかが一目でわかります。
                  祝日も色付きで表示されるので、記念日の記録もバッチリです。
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0">📖</span>
              <div>
                <h4 className="font-bold text-sm" style={{ color: '#3C2A1E' }}>銘柄図鑑</h4>
                <p className="text-muted text-xs mt-1">
                  記録したお酒が自動的に図鑑に登録されます。都道府県別、お酒の種類別に閲覧でき、
                  日本地図から地域ごとのお酒を探すこともできます。飲んだ量に応じてメダルがもらえる実績システムも搭載。
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0">📊</span>
              <div>
                <h4 className="font-bold text-sm" style={{ color: '#3C2A1E' }}>飲酒量統計</h4>
                <p className="text-muted text-xs mt-1">
                  週間・月間の飲酒量をグラフで可視化。お酒の種類別の割合も確認でき、
                  自分の飲酒パターンを客観的に把握できます。健康管理にもお役立てください。
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0">🗾</span>
              <div>
                <h4 className="font-bold text-sm" style={{ color: '#3C2A1E' }}>都道府県マップ</h4>
                <p className="text-muted text-xs mt-1">
                  飲んだお酒の産地を日本地図上に表示。全国47都道府県のお酒を制覇する楽しみが広がります。
                  各地方のお酒を探索して、お気に入りの一本を見つけましょう。
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0">📱</span>
              <div>
                <h4 className="font-bold text-sm" style={{ color: '#3C2A1E' }}>スマホアプリのように使える</h4>
                <p className="text-muted text-xs mt-1">
                  PWA（Progressive Web App）対応で、スマホのホーム画面に追加すれば、
                  まるでネイティブアプリのように使えます。オフライン対応で、電波の届かない場所でも記録を確認できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* こんな方におすすめ */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>こんな方におすすめ</h3>
          <ul className="list-none space-y-2 text-muted">
            <li className="flex items-center gap-2">
              <span style={{ color: '#C53D43' }}>✓</span>
              飲んだお酒を記録して振り返りたい方
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: '#C53D43' }}>✓</span>
              日本全国のお酒を飲み比べたい方
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: '#C53D43' }}>✓</span>
              自分の飲酒量を把握して健康管理したい方
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: '#C53D43' }}>✓</span>
              お気に入りの銘柄を忘れないようにしたい方
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: '#C53D43' }}>✓</span>
              お酒の写真と一緒に思い出を残したい方
            </li>
          </ul>
        </section>

        {/* 利用料金 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>ご利用について</h3>
          <p className="text-muted">
            酒ログは完全無料でご利用いただけます。アカウント登録も不要で、アクセスしたらすぐに使い始められます。
            お使いのデバイスごとにデータが保存されるため、プライバシーも安心です。
          </p>
        </section>

        {/* 注意事項 */}
        <section
          className="rounded-lg p-4"
          style={{ background: 'rgba(60,42,30,0.05)', border: '1px solid rgba(60,42,30,0.1)' }}
        >
          <p className="text-xs text-muted">
            ⚠️ 本アプリは飲酒記録の管理を目的としたものであり、飲酒を推奨するものではありません。
            お酒は20歳になってから。飲酒運転は法律で禁止されています。適度な飲酒を心がけましょう。
          </p>
        </section>

        <AdBannerWrapper />

        {/* ナビゲーション */}
        <div className="flex gap-3 pt-2">
          <Link
            href="/guide"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(197,61,67,0.08)', color: '#C53D43' }}
          >
            📘 使い方ガイド
          </Link>
          <Link
            href="/columns"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(139,105,20,0.08)', color: '#8B6914' }}
          >
            📝 お酒コラム
          </Link>
        </div>
      </div>
    </div>
  );
}
