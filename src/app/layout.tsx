import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "酒ログ - お酒の記録帳",
  description: "飲んだお酒を記録するアプリ",
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-dvh">
        <header className="bg-accent text-white py-4 px-4 shadow-md">
          <h1 className="text-xl text-center tracking-wider">
            酒ログ
          </h1>
        </header>
        <main className="max-w-lg mx-auto px-4 py-4">
          {children}
        </main>
      </body>
    </html>
  );
}
