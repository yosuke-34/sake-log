# 酒ログ - Sake Log

飲んだお酒を手軽に記録できる無料Webアプリです。日本酒・ウイスキー・ビール・焼酎・ワインなど、あらゆるお酒の記録をカレンダー形式で管理できます。

🌐 **公開URL**: https://sake-log-two.vercel.app

## 主な機能

- 📅 **カレンダー記録**: 飲んだ日をカレンダーで一覧表示（祝日表示対応）
- 📖 **銘柄図鑑**: 記録したお酒が自動で図鑑に登録、都道府県別・種類別に閲覧
- 📊 **飲酒量統計**: 週間・月間の飲酒量をグラフで可視化
- 🗾 **都道府県マップ**: 飲んだお酒の産地を日本地図上に表示
- 📱 **PWA対応**: スマホのホーム画面に追加すればネイティブアプリのように使える
- 🔞 **年齢確認ゲート**: 20歳以上確認機能

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router) + TypeScript
- **スタイリング**: Tailwind CSS 4
- **バックエンド**: Supabase (PostgreSQL + Storage)
- **ホスティング**: Vercel
- **PWA**: Service Worker + Web Share Target API

## 開発

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start
```

### 環境変数

`.env.local` に以下を設定してください：

```
NEXT_PUBLIC_SUPABASE_URL=<Supabase Project URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<Supabase Anon Key>
```

## ページ構成

| パス | 内容 |
|---|---|
| `/` | トップ（カレンダー・統計・図鑑） |
| `/add` | 記録追加 |
| `/edit/[id]` | 記録編集 |
| `/about` | 酒ログについて |
| `/guide` | 使い方ガイド |
| `/columns` | お酒コラム一覧 |
| `/columns/sake-basics` | 日本酒の基礎知識 |
| `/columns/whisky-basics` | ウイスキーの基礎知識 |
| `/columns/beer-basics` | ビールの基礎知識 |
| `/responsible-drinking` | 適正飲酒ガイド |
| `/contact` | お問い合わせ |
| `/privacy` | プライバシーポリシー |

## 注意事項

本アプリはお酒の記録管理を目的としており、飲酒を推奨するものではありません。

- ⚠️ 20歳未満の飲酒は法律で禁止されています
- ⚠️ 飲酒運転は絶対にやめましょう
- ⚠️ 妊娠中・授乳期の飲酒は胎児・乳児に影響を与えます
- ⚠️ 適度な飲酒を心がけましょう

## ライセンス

© 2025 酒ログ - Sake Log. All rights reserved.
