import type { Metadata, Viewport } from "next";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import AgeVerificationGate from "@/components/AgeVerificationGate";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#C53D43",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sake-log-two.vercel.app"),
  title: {
    default: "酒ログ - お酒の記録帳アプリ｜日本酒・ウイスキー・ビールを記録",
    template: "%s | 酒ログ",
  },
  description:
    "飲んだお酒をカレンダーで記録できる無料Webアプリ「酒ログ」。日本酒・ウイスキー・ビール・焼酎・ワインなど、銘柄・産地・飲酒量を手軽に管理。銘柄図鑑、都道府県マップ、飲酒量統計で、あなたのお酒ライフをもっと豊かに。",
  keywords: [
    "酒ログ",
    "お酒 記録",
    "日本酒 記録 アプリ",
    "ウイスキー 記録",
    "ビール 記録",
    "銘柄図鑑",
    "飲酒量 管理",
    "PWA",
  ],
  authors: [{ name: "酒ログ運営" }],
  creator: "酒ログ",
  publisher: "酒ログ",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://sake-log-two.vercel.app/",
    siteName: "酒ログ",
    title: "酒ログ - お酒の記録帳アプリ",
    description:
      "飲んだお酒をカレンダーで記録できる無料Webアプリ。銘柄図鑑、都道府県マップ、飲酒量統計で、あなたのお酒ライフをもっと豊かに。",
  },
  twitter: {
    card: "summary_large_image",
    title: "酒ログ - お酒の記録帳アプリ",
    description: "飲んだお酒をカレンダーで記録できる無料Webアプリ。",
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "酒ログ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;700&family=Zen+Antique+Soft&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3074656347564106" crossOrigin="anonymous"></script>
      </head>
      <body className="antialiased min-h-dvh">
        <ServiceWorkerRegister />
        <AgeVerificationGate />
        {/* 暖簾ヘッダー */}
        <header
          className="relative text-white px-4 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #B5313A 0%, #C53D43 40%, #C53D43 60%, #A82D35 100%)',
            boxShadow: '0 4px 12px rgba(165,45,53,0.3)',
          }}
        >
          {/* 暖簾の布感テクスチャ */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.3) 2px,
                rgba(255,255,255,0.3) 3px
              )`,
            }}
          />
          {/* 上部の竿（棒）部分 */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{
              background: 'linear-gradient(180deg, #8B6914 0%, #C5993E 30%, #D4A84A 50%, #C5993E 70%, #8B6914 100%)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          />
          {/* 暖簾の縦切れ目風ライン */}
          <div
            className="absolute top-1.5 left-1/2 -translate-x-1/2 w-px opacity-10"
            style={{
              height: 'calc(100% - 6px)',
              background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.6) 80%, transparent)',
            }}
          />
          {/* コンテンツ */}
          <div className="relative pt-5 pb-4">
            <h1
              className="text-2xl text-center tracking-[0.3em]"
              style={{
                fontFamily: '"Zen Antique Soft", "Noto Serif JP", serif',
                textShadow: '0 1px 3px rgba(0,0,0,0.15)',
                letterSpacing: '0.3em',
              }}
            >
              酒ログ
            </h1>
          </div>
          {/* 暖簾の裾（波型カット風） */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 400 12"
              preserveAspectRatio="none"
              className="w-full h-3 block"
              style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))' }}
            >
              <path
                d="M0,0 Q25,10 50,2 Q75,10 100,2 Q125,10 150,2 Q175,10 200,2 Q225,10 250,2 Q275,10 300,2 Q325,10 350,2 Q375,10 400,2 L400,12 L0,12 Z"
                fill="#C53D43"
              />
            </svg>
          </div>
        </header>
        <main className="max-w-lg mx-auto px-4 py-4 pb-16">
          {children}
        </main>
        <footer className="py-6 pb-24 text-xs text-muted max-w-lg mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="/about" className="hover:text-foreground transition-colors">酒ログについて</a>
            <a href="/guide" className="hover:text-foreground transition-colors">使い方ガイド</a>
            <a href="/columns" className="hover:text-foreground transition-colors">お酒コラム</a>
            <a href="/responsible-drinking" className="hover:text-foreground transition-colors">適正飲酒</a>
            <a href="/contact" className="hover:text-foreground transition-colors">お問い合わせ</a>
            <a href="/privacy" className="hover:text-foreground transition-colors">プライバシーポリシー</a>
          </div>
          <div className="mt-4 pt-4 border-t border-border/30 text-center space-y-1">
            <p className="text-[10px] text-muted">
              ⚠️ 未成年者の飲酒は法律で禁止されています。飲酒運転は絶対にやめましょう。
            </p>
            <p className="text-[10px] text-muted">
              © 2025 酒ログ - Sake Log. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
