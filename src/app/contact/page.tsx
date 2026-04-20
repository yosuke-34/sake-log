import Link from 'next/link';

export const metadata = {
  title: 'お問い合わせ - 酒ログ',
  description: '酒ログに関するご意見・ご質問・不具合のご報告はこちらからお問い合わせください。皆様のフィードバックがアプリ改善の原動力です。',
};

export default function ContactPage() {
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
        <h2 className="text-lg font-bold">お問い合わせ</h2>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* 導入 */}
        <section>
          <p className="text-muted">
            酒ログをご利用いただきありがとうございます。
            アプリに関するご意見・ご質問・不具合のご報告など、お気軽にお問い合わせください。
            皆様のフィードバックがアプリ改善の原動力となります。
          </p>
        </section>

        {/* お問い合わせ方法 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>お問い合わせ方法</h3>
          <div
            className="rounded-lg p-4"
            style={{ background: 'rgba(197,61,67,0.05)', border: '1px solid rgba(197,61,67,0.15)' }}
          >
            <h4 className="font-bold text-sm mb-2" style={{ color: '#C53D43' }}>📧 メールでのお問い合わせ</h4>
            <p className="text-xs text-muted mb-2">
              下記メールアドレスまで、以下の情報を明記のうえご連絡ください。
            </p>
            <div className="bg-white rounded p-3 my-3 text-sm font-mono text-center" style={{ border: '1px solid rgba(197,61,67,0.2)', color: '#3C2A1E' }}>
              sake-log-support [at] example.com
            </div>
            <p className="text-[10px] text-muted">
              ※ スパム対策のため「@」を「[at]」と表記しています。送信時は「@」に置き換えてください。
            </p>
          </div>
        </section>

        {/* 記載内容 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>お問い合わせ時に記載いただきたい内容</h3>
          <ul className="list-disc pl-5 space-y-1 text-muted text-xs">
            <li>お問い合わせの種類（不具合報告・機能要望・広告掲載・その他）</li>
            <li>ご利用環境（端末種類・OS・ブラウザの種類とバージョン）</li>
            <li>発生した問題の詳細（不具合の場合、再現手順も記載いただけると助かります）</li>
            <li>お名前またはニックネーム（任意）</li>
          </ul>
        </section>

        {/* 回答について */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>回答について</h3>
          <ul className="list-disc pl-5 space-y-2 text-muted text-xs">
            <li>内容を確認のうえ、<strong>原則3〜7営業日以内</strong>にご返信いたします。</li>
            <li>内容によってはお時間をいただく場合や、ご返信を差し控える場合がございます。</li>
            <li>個人情報（メールアドレス等）はお問い合わせ対応以外の目的で使用することはありません。</li>
            <li>営業・勧誘目的のお問い合わせへは返信いたしかねます。</li>
          </ul>
        </section>

        {/* よくある質問 */}
        <section>
          <h3 className="text-base font-bold mb-3" style={{ color: '#C53D43' }}>よくある質問</h3>

          <div className="space-y-3">
            <div
              className="rounded-lg p-3"
              style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}
            >
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>
                Q. 記録したデータが消えてしまいました。復元できますか？
              </p>
              <p className="text-xs text-muted">
                A. 酒ログはデバイスごとに固有のIDを用いてデータを管理しています。
                ブラウザのデータ削除・シークレットモード・別端末からのアクセスでは、以前のデータを参照できません。
                URL末尾の「?d=xxxxx」をブックマークしておくことで、同じIDでの復元が可能です。
              </p>
            </div>

            <div
              className="rounded-lg p-3"
              style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}
            >
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>
                Q. データを複数端末で共有できますか？
              </p>
              <p className="text-xs text-muted">
                A. 上記の「?d=xxxxx」付きURLをコピーして別端末で開くと、同じデータを参照できます。
                ただし、アカウント認証を行わない簡易的な方式のため、URLの管理にはご注意ください。
              </p>
            </div>

            <div
              className="rounded-lg p-3"
              style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}
            >
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>
                Q. 銘柄図鑑に載っていないお酒があります。追加してもらえますか？
              </p>
              <p className="text-xs text-muted">
                A. 全国の酒造を少しずつ追加しています。掲載希望の銘柄がございましたら、
                酒蔵名・商品名・公式サイトURLを添えてお問い合わせください。
              </p>
            </div>

            <div
              className="rounded-lg p-3"
              style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}
            >
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>
                Q. 利用料金はかかりますか？
              </p>
              <p className="text-xs text-muted">
                A. 酒ログは完全無料でご利用いただけます。運営費用は広告収入等で賄っています。
              </p>
            </div>

            <div
              className="rounded-lg p-3"
              style={{ background: 'rgba(60,42,30,0.03)', border: '1px solid rgba(60,42,30,0.08)' }}
            >
              <p className="font-bold text-xs mb-1" style={{ color: '#3C2A1E' }}>
                Q. 広告掲載や提携の相談をしたいのですが。
              </p>
              <p className="text-xs text-muted">
                A. 件名に「【広告・提携】」と明記のうえ、上記メールアドレスまでご連絡ください。
                内容を拝見のうえ、担当者よりご返信いたします。
              </p>
            </div>
          </div>
        </section>

        {/* 運営情報 */}
        <section
          className="rounded-lg p-4"
          style={{ background: 'rgba(139,105,20,0.05)', border: '1px solid rgba(139,105,20,0.15)' }}
        >
          <h3 className="text-sm font-bold mb-2" style={{ color: '#8B6914' }}>サイト運営について</h3>
          <dl className="text-xs space-y-1 text-muted">
            <div className="flex">
              <dt className="w-24 shrink-0 font-bold" style={{ color: '#3C2A1E' }}>サイト名</dt>
              <dd>酒ログ（Sake Log）</dd>
            </div>
            <div className="flex">
              <dt className="w-24 shrink-0 font-bold" style={{ color: '#3C2A1E' }}>運営開始</dt>
              <dd>2025年</dd>
            </div>
            <div className="flex">
              <dt className="w-24 shrink-0 font-bold" style={{ color: '#3C2A1E' }}>サービス内容</dt>
              <dd>お酒の記録管理Webアプリの提供、お酒に関する情報発信</dd>
            </div>
            <div className="flex">
              <dt className="w-24 shrink-0 font-bold" style={{ color: '#3C2A1E' }}>お問い合わせ</dt>
              <dd>本ページのメールアドレスまで</dd>
            </div>
          </dl>
        </section>

        <section
          className="rounded-lg p-4 mt-6"
          style={{ background: 'rgba(60,42,30,0.05)', border: '1px solid rgba(60,42,30,0.1)' }}
        >
          <p className="text-xs text-muted">
            ⚠️ 酒ログは飲酒記録の管理を目的としたアプリです。飲酒を推奨するものではありません。
            お酒は20歳になってから、適量を楽しみましょう。
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
            href="/privacy"
            className="flex-1 text-center py-3 rounded-lg text-sm font-bold transition-colors"
            style={{ background: 'rgba(139,105,20,0.08)', color: '#8B6914' }}
          >
            🔒 プライバシー
          </Link>
        </div>
      </div>
    </div>
  );
}
