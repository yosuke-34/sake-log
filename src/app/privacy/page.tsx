import Link from 'next/link';

export const metadata = {
  title: 'プライバシーポリシー - 酒ログ',
};

export default function PrivacyPage() {
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
        <h2 className="text-lg font-bold">プライバシーポリシー</h2>
      </div>

      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h3 className="text-base font-bold mb-2 text-foreground">1. はじめに</h3>
          <p className="text-muted">
            「酒ログ」（以下「本アプリ」）は、ユーザーの飲酒記録を管理するためのWebアプリケーションです。
            本アプリの運営者（以下「運営者」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
            本プライバシーポリシーでは、本アプリにおける情報の取り扱いについてご説明します。
          </p>
        </section>

        <section>
          <h3 className="text-base font-bold mb-2 text-foreground">2. 収集する情報</h3>
          <p className="text-muted">本アプリでは、以下の情報を収集・保存します。</p>
          <ul className="list-disc pl-5 text-muted space-y-1 mt-2">
            <li>飲酒記録データ（日付、場所、お酒の種類、銘柄、飲酒量、写真、メモ）</li>
            <li>端末識別子（デバイスID）：記録の紐付けに使用</li>
            <li>アクセスログ（IPアドレス、ブラウザ情報等）：サービスの運営・改善に使用</li>
          </ul>
        </section>

        <section>
          <h3 className="text-base font-bold mb-2 text-foreground">3. 情報の利用目的</h3>
          <p className="text-muted">収集した情報は、以下の目的で利用します。</p>
          <ul className="list-disc pl-5 text-muted space-y-1 mt-2">
            <li>本アプリの機能提供および改善</li>
            <li>ユーザー体験の向上</li>
            <li>サービスの利用状況の分析</li>
          </ul>
        </section>

        <section>
          <h3 className="text-base font-bold mb-2 text-foreground">4. 広告について</h3>
          <p className="text-muted">
            本アプリでは、第三者配信の広告サービス（Google AdSense）を利用することがあります。
            広告配信事業者は、ユーザーの興味に応じた広告を表示するために、Cookie（クッキー）を使用することがあります。
            Cookieの利用により、ユーザーの当サイトや他サイトの閲覧情報に基づいた広告が表示されます。
          </p>
          <p className="text-muted mt-2">
            ユーザーは、Googleの広告設定ページ（
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline"
            >
              ads settings
            </a>
            ）にて、パーソナライズ広告を無効にすることができます。
            また、
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline"
            >
              aboutads.info
            </a>
            にアクセスすることで、パーソナライズ広告に使われる第三者配信事業者のCookieを無効にすることができます。
          </p>
        </section>

        <section>
          <h3 className="text-base font-bold mb-2 text-foreground">5. データの保存</h3>
          <p className="text-muted">
            ユーザーの飲酒記録データは、Supabase（クラウドデータベース）に保存されます。
            写真データはSupabase Storageに保存されます。
            これらのデータはデバイスIDに紐づけられており、他のユーザーからはアクセスできません。
          </p>
        </section>

        <section>
          <h3 className="text-base font-bold mb-2 text-foreground">6. 第三者提供</h3>
          <p className="text-muted">
            運営者は、法令に基づく場合を除き、ユーザーの個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section>
          <h3 className="text-base font-bold mb-2 text-foreground">7. Cookie（クッキー）について</h3>
          <p className="text-muted">
            本アプリでは、サービスの提供および広告配信のためにCookieを使用します。
            ユーザーはブラウザの設定により、Cookieの受け入れを拒否することができますが、
            その場合、一部の機能が利用できなくなる可能性があります。
          </p>
        </section>

        <section>
          <h3 className="text-base font-bold mb-2 text-foreground">8. アクセス解析ツール</h3>
          <p className="text-muted">
            本アプリでは、サービスの利用状況を把握するためにアクセス解析ツールを使用する場合があります。
            これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
          </p>
        </section>

        <section>
          <h3 className="text-base font-bold mb-2 text-foreground">9. 免責事項</h3>
          <p className="text-muted">
            本アプリは飲酒記録の管理を目的としたものであり、飲酒を推奨するものではありません。
            適度な飲酒を心がけ、20歳未満の飲酒は法律で禁止されています。
            本アプリの利用により生じた損害について、運営者は一切の責任を負いません。
          </p>
        </section>

        <section>
          <h3 className="text-base font-bold mb-2 text-foreground">10. プライバシーポリシーの変更</h3>
          <p className="text-muted">
            運営者は、必要に応じて本プライバシーポリシーを変更することがあります。
            変更後のプライバシーポリシーは、本ページに掲載した時点から効力を有するものとします。
          </p>
        </section>

        <section>
          <p className="text-muted text-xs mt-8">
            制定日: 2026年3月21日
          </p>
        </section>
      </div>
    </div>
  );
}
