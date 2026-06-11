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
| `/` | SSRランディング（初回訪問者向け）／リピーターは自動的に `/calendar` へ |
| `/calendar` | カレンダー・統計・図鑑のアプリ機能 |
| `/add` | 記録追加 |
| `/edit/[id]` | 記録編集 |
| `/about` | 酒ログについて |
| `/guide` | 使い方ガイド |
| `/columns` | お酒コラム一覧 |
| `/columns/sake-basics` | 日本酒の基礎知識（人気・希少銘柄ガイド付き） |
| `/columns/whisky-basics` | ウイスキーの基礎知識（人気・希少銘柄ガイド付き） |
| `/columns/beer-basics` | ビールの基礎知識（人気・希少銘柄ガイド付き） |
| `/columns/shochu-basics` | 焼酎の基礎知識（人気・希少銘柄ガイド付き） |
| `/columns/wine-basics` | ワインの基礎知識（人気・希少銘柄ガイド付き） |
| `/columns/food-pairing` | お酒と料理のマリアージュ |
| `/columns/hangover-care` | 二日酔いの原因と対策 |
| `/responsible-drinking` | 適正飲酒ガイド |
| `/contact` | お問い合わせ |
| `/privacy` | プライバシーポリシー |

## 🚚 PC引越し・新環境セットアップ

このプロジェクトは **フォルダ1つで完結する設計**になっています。

### 引越し手順

1. **このプロジェクトフォルダ全体を新PCにコピー**（USB/外付けSSD/クラウド経由）
2. 新PC で Node.js 18+ と Git をインストール
3. プロジェクトフォルダに移動して `npm install`
4. `secrets/env.local.backup.txt` を `.env.local` にコピー（中身そのまま）
5. `npm run dev` で動作確認

### 新PC の Claude Code に引継ぎ依頼

新環境で Claude Code を起動して、こう伝えてください：

> `HANDOVER.md` を読んで状況を理解して、続きから作業を再開して

これで [HANDOVER.md](./HANDOVER.md) に書かれた全文脈（経緯・現状・進行中タスク）が Claude に伝わり、シームレスに開発を継続できます。

### 引越しキットの構成

| ファイル/フォルダ | 役割 |
|---|---|
| `HANDOVER.md` | 引継ぎマスター文書（最初に読むべき） |
| `secrets/` | アカウント情報・env のバックアップ（gitignore対象） |
| `secrets/env.local.backup.txt` | `.env.local` の完全バックアップ |
| `secrets/accounts.md` | 各種サービスのアカウント情報 |
| `.env.local.example` | 環境変数のテンプレート（公開可） |
| `.claude/conversation-archive/` | Claude会話履歴のバックアップ（gitignore対象） |
| `docs/google-play-listing.md` | Google Play ストア掲載文ドラフト |
| `docs/screenshot-guide.md` | スクリーンショット撮影ガイド |

## 注意事項

本アプリはお酒の記録管理を目的としており、飲酒を推奨するものではありません。

- ⚠️ 20歳未満の飲酒は法律で禁止されています
- ⚠️ 飲酒運転は絶対にやめましょう
- ⚠️ 妊娠中・授乳期の飲酒は胎児・乳児に影響を与えます
- ⚠️ 適度な飲酒を心がけましょう

## ライセンス

© 2025 酒ログ - Sake Log. All rights reserved.
