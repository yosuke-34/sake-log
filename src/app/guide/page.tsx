import Link from 'next/link';
import AdBannerWrapper from '@/components/AdBannerWrapper';

export const metadata = {
  title: '使い方ガイド - 酒ログ',
  description: '酒ログの使い方を詳しく解説。お酒の記録方法、銘柄図鑑の活用法、飲酒量統計の見方、スマホへのインストール方法をステップバイステップでご紹介します。',
};

export default function GuidePage() {
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
        <h2 className="text-lg font-bold">使い方ガイド</h2>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* はじめに */}
        <section>
          <p className="text-muted">
            酒ログの基本的な使い方をご紹介します。初めてお使いの方は、このガイドに沿って操作してみてください。
          </p>
        </section>

        {/* ステップ1: 記録する */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs mr-2" style={{ background: '#C53D43' }}>1</span>
            お酒を記録する
          </h3>
          <div className="space-y-3 text-muted">
            <p>
              画面右下の赤い「＋」ボタンをタップして、記録画面を開きます。
            </p>
            <div className="space-y-2 pl-4 border-l-2" style={{ borderColor: 'rgba(197,61,67,0.2)' }}>
              <p><strong>日付</strong>：飲んだ日を選択します。初期値は今日の日付です。</p>
              <p><strong>場所</strong>：飲んだ場所を入力します。「自宅」ボタンをタップすると自動入力されます。過去に入力した場所はサジェスト表示されるので、同じお店の名前を何度も入力する必要はありません。</p>
              <p><strong>種類</strong>：ビール、日本酒、ウイスキー、焼酎、ワイン、ジンなどから選びます。</p>
              <p><strong>銘柄</strong>：3つの方法で入力できます。</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>「都道府県」：都道府県を選んでから銘柄リストから選択</li>
                <li>「検索」：銘柄名やメーカー名で全国横断検索</li>
                <li>「任意入力」：リストにない銘柄を自由に入力</li>
              </ul>
              <p><strong>飲み方・杯数</strong>：グラス、ジョッキ、瓶など飲み方を選び、杯数を「＋」「－」で調整します。合計ml数が自動計算されます。</p>
              <p><strong>写真</strong>：お酒のラベルや料理の写真を撮影・添付できます。後から見返す時の楽しみが増えます。</p>
              <p><strong>メモ</strong>：味の感想や一緒に飲んだ人の名前など、自由にメモを残せます。</p>
            </div>
            <p>
              すべて入力したら「記録する」ボタンで保存。続けて別のお酒を記録する場合は、
              確認ダイアログで「続けて登録する」を選ぶと、日付と場所が引き継がれた状態で新しい記録を作成できます。
            </p>
          </div>
        </section>

        {/* ステップ2: カレンダーで確認 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs mr-2" style={{ background: '#C53D43' }}>2</span>
            カレンダーで振り返る
          </h3>
          <div className="space-y-3 text-muted">
            <p>
              トップ画面のカレンダーで、記録がある日にはドットが表示されます。
              日付をタップすると、その日の記録一覧が表示されます。
            </p>
            <p>
              各記録カードから「編集」で内容の修正、「削除」で記録の取り消しが可能です。
              写真付きの記録はサムネイルも表示されるので、視覚的にも楽しめます。
            </p>
          </div>
        </section>

        {/* ステップ3: 銘柄図鑑 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs mr-2" style={{ background: '#C53D43' }}>3</span>
            銘柄図鑑を楽しむ
          </h3>
          <div className="space-y-3 text-muted">
            <p>
              下部タブの「図鑑」をタップすると、これまで記録したお酒の銘柄図鑑が表示されます。
            </p>
            <p>
              <strong>都道府県別表示</strong>では、日本地図から地方を選んで、各都道府県のお酒を閲覧できます。
              全国のお酒を制覇する楽しみが広がります。
            </p>
            <p>
              <strong>お酒の種類別表示</strong>では、日本酒、ウイスキーなどカテゴリごとに銘柄を確認できます。
            </p>
            <p>
              銘柄をタップすると詳細ページが開き、写真、飲んだ回数、合計飲酒量、メダル獲得状況などが確認できます。
              一定量飲むとメダル（銅→銀→金→プラチナ）が獲得でき、コレクション要素も楽しめます。
            </p>
          </div>
        </section>

        {/* ステップ4: 飲酒量統計 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs mr-2" style={{ background: '#C53D43' }}>4</span>
            飲酒量を確認する
          </h3>
          <div className="space-y-3 text-muted">
            <p>
              下部タブの「飲酒量」をタップすると、飲酒量の統計データが表示されます。
            </p>
            <p>
              週間・月間のグラフで飲酒量の推移を確認でき、お酒の種類別の割合もチャートで可視化されます。
              飲みすぎの傾向に気づいたり、健康管理の参考にご活用ください。
            </p>
          </div>
        </section>

        {/* スマホにインストール */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>
            📱 スマホにインストールする方法
          </h3>
          <div className="space-y-3 text-muted">
            <p>酒ログはPWA対応で、スマホのホーム画面に追加してアプリのように使えます。</p>

            <div>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>iPhone（Safari）の場合</h4>
              <ol className="list-decimal pl-5 space-y-1 text-xs">
                <li>Safariで酒ログのサイトを開く</li>
                <li>画面下部の「共有」ボタン（□に↑のアイコン）をタップ</li>
                <li>「ホーム画面に追加」を選択</li>
                <li>「追加」をタップ</li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>Android（Chrome）の場合</h4>
              <ol className="list-decimal pl-5 space-y-1 text-xs">
                <li>Chromeで酒ログのサイトを開く</li>
                <li>アドレスバー付近に「インストール」バナーが表示されたらタップ</li>
                <li>または、右上メニュー（⋮）→「アプリをインストール」を選択</li>
              </ol>
            </div>
          </div>
        </section>

        {/* よくある質問 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#8B6914' }}>よくある質問</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-xs" style={{ color: '#3C2A1E' }}>Q. データは他の人に見られますか？</p>
              <p className="text-muted text-xs mt-1">
                いいえ。データはデバイスごとに管理されており、他のユーザーからアクセスすることはできません。
              </p>
            </div>
            <div>
              <p className="font-bold text-xs" style={{ color: '#3C2A1E' }}>Q. 機種変更したらデータは消えますか？</p>
              <p className="text-muted text-xs mt-1">
                現在はデバイスごとにデータが紐づいているため、機種変更時にはデータの移行はできません。
                今後のアップデートで対応予定です。
              </p>
            </div>
            <div>
              <p className="font-bold text-xs" style={{ color: '#3C2A1E' }}>Q. 利用料金はかかりますか？</p>
              <p className="text-muted text-xs mt-1">
                完全無料です。アカウント登録も不要で、すぐにお使いいただけます。
              </p>
            </div>
          </div>
        </section>

        <AdBannerWrapper />

        {/* ナビゲーション */}
        <div className="flex gap-3 pt-2">
          <Link
            href="/about"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(197,61,67,0.08)', color: '#C53D43' }}
          >
            🍶 酒ログについて
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
