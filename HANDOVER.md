# 🍶 酒ログ プロジェクト 引継ぎマスタードキュメント

> **新PCのClaude Codeへの指示**：
> このドキュメントを最初に読んで、プロジェクトの全文脈・履歴・現状・進行中タスクを理解してください。
> 「HANDOVER.md を読んで状況を理解して」とユーザーから言われたら、このファイルを最初に開いてください。
>
> まず下記「🚚 新PCでの復元フロー」セクションを参照し、ユーザーが必要な復元ステップを完了しているか確認してください。
> 未完了のステップがあれば、コマンドベースで案内してください。
> 復元完了後は、後半の「📍 現在進行中: Phase E」の続きから作業を再開すること。

---

## 🚚 新PCでの復元フロー

このプロジェクトはフォルダ1つで完結する設計です。新PCで以下を順番に実行してください。

### Step 1: 必要なツールをインストール

| ツール | 用途 | 確認コマンド |
|---|---|---|
| **Node.js 18+** | アプリ実行 | `node -v` |
| **Git** | バージョン管理 | `git --version` |
| **GitHub CLI (gh)** | GitHub認証 | `gh --version` |

### Step 2: プロジェクトフォルダを新PCに配置

旧PCからフォルダごとコピー済みの場合：
```bash
cd /path/to/酒
```

GitHubから clone する場合（`secrets/` と `.claude/conversation-archive/` は別途復元が必要）：
```bash
git clone https://github.com/yosuke-34/sake-log.git
cd sake-log
```

### Step 3: 環境変数を復元

```bash
# 旧PCからコピーした secrets/ があれば
cp secrets/env.local.backup.txt .env.local

# 無い場合は .env.local.example を参考に手動で .env.local を作成
# 必要な値: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
# 取得元: Vercel Dashboard → Project Settings → Environment Variables
```

### Step 4: 依存関係をインストール

```bash
npm install
```

### Step 5: GitHub 認証

```bash
gh auth login
# プロンプトに従ってブラウザで認証
# 重要: yosuke-34 アカウントを選ぶ（push権限あり）
# 副アカウント okamoto052 は push 不可なので使わない
```

複数アカウントがある場合の切替：
```bash
gh auth switch --user yosuke-34
```

### Step 6: 動作確認

```bash
# 開発サーバー起動
npm run dev
# → http://localhost:3000 でアクセス

# 本番ビルド検証
npm run build
# → エラーなく21ページ生成されればOK
```

### Step 7: Claude Code の引継ぎ

このファイル（HANDOVER.md）を最初に読み込めば全文脈が引き継がれます。
詳細な過去の対話履歴が必要な場合のみ `.claude/conversation-archive/` を参照してください。

### 復元完了チェックリスト

- [ ] `node -v` が 18 以上
- [ ] `.env.local` が存在し、Supabase の値が入っている
- [ ] `npm install` がエラーなく完了
- [ ] `npm run dev` が起動し、ホームページが表示される
- [ ] `/calendar` でカレンダーが表示される（年齢確認モーダル経由）
- [ ] `/columns/sake-basics` で楽天・Amazonボタンが表示される
- [ ] `gh auth status` で yosuke-34 がアクティブ
- [ ] `git push origin master` が（ダミーコミットで）成功する

すべて通れば復元完了。下記の「📍 現在進行中: Phase E」から作業再開してください。

---

## 📌 プロジェクト概要

| 項目 | 内容 |
|---|---|
| **名称** | 酒ログ (Sake Log) |
| **公開URL** | https://sake-log-two.vercel.app/ |
| **GitHub** | https://github.com/yosuke-34/sake-log |
| **コンセプト** | スマホアプリで完結する飲酒記録ツール＋お酒の情報メディア |
| **対象ユーザー** | 20歳以上のお酒好き |
| **収益化方針** | 楽天・Amazonアフィリエイト（AdSenseは断念） |

---

## 🛠 技術スタック

- **Framework**: Next.js 15.5.12 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **DB / Storage**: Supabase（device_id ベースの RLS）
- **Deploy**: Vercel（GitHub auto-deploy）
- **PWA**: manifest.json + sw.js（Service Worker v2）

---

## 📅 開発の経緯（時系列サマリ）

### Phase 0: アプリ機能構築（事前）
- カレンダー記録、飲酒量統計、銘柄図鑑、写真添付、Share Target API対応
- PWA対応、device_id でデータ分離

### AdSense 申請 → 4回連続不承認 ❌
- 1回目：「広告掲載の準備が整っていない」→ コラム・年齢確認・適正飲酒ページを追加
- 2回目：「有用性の低いコンテンツ」→ 4新規コラム＋実写画像追加
- 3回目：「有用性の低いコンテンツ」→ 既存3コラム大幅拡充＋E-E-A-Tシグナル＋128銘柄紹介
- 4回目：「有用性の低いコンテンツ」→ **AdSense諦め、戦略転換**

### 戦略転換（Phase A-E）
ユーザーの本来のビジョン「スマホアプリで完結」に合わせて、アフィリエイト中心の収益化に転換。

| Phase | 内容 | 状態 |
|---|---|---|
| A | AdSense完全撤去（広告タグ・コンポーネント・15ファイル分のコード削除） | ✅完了 |
| B | 年齢確認モーダルの方針決定（現状維持） | ✅完了 |
| C | AffiliateLinks コンポーネント作成、5酒種128銘柄に楽天・Amazonリンク導入 | ✅完了 |
| D | PWA体験向上（RecordCard/BrandBookPageに購入リンク、オフライン対応強化） | ✅完了 |
| E | **Google Play配信準備中** | 🔄進行中 |

---

## 🏗 サイト構造

### 重要ファイル

```
src/app/
  page.tsx              ← SSRランディング（初回訪問者向け）
  calendar/page.tsx     ← 旧トップのアプリ機能（カレンダー・統計・図鑑）クライアント
  layout.tsx            ← 全体レイアウト（ヘッダー暖簾、フッター）
  sitemap.ts, robots.ts ← SEO
  columns/
    page.tsx            ← コラム一覧
    sake-basics/        ← 日本酒基礎（拡充済み、銘柄ガイド付き）
    whisky-basics/      ← ウイスキー基礎（拡充済み、銘柄ガイド付き）
    beer-basics/        ← ビール基礎（拡充済み、銘柄ガイド付き）
    shochu-basics/      ← 焼酎基礎（銘柄ガイド付き）
    wine-basics/        ← ワイン基礎（銘柄ガイド付き）
    food-pairing/       ← マリアージュ
    hangover-care/      ← 二日酔いケア
  about/, guide/, contact/, privacy/, responsible-drinking/

src/components/
  Calendar.tsx           ← メインカレンダー
  RecordCard.tsx         ← 記録カード（AffiliateLinks組み込み済み）
  RecordModal.tsx        ← 記録モーダル
  AddRecordForm.tsx      ← 記録追加フォーム
  VolumeStats.tsx        ← 飲酒量統計
  BrandEncyclopedia.tsx  ← 銘柄図鑑（タブビュー）
  BrandBookPage.tsx      ← 銘柄詳細ページ（AffiliateLinks組み込み済み）
  JapanRegionMap.tsx     ← 都道府県マップ
  AgeVerificationGate.tsx ← 20歳以上確認モーダル
  ArticleMeta.tsx        ← コラム末尾の著者・出典セクション
  AffiliateLinks.tsx     ← ★楽天・Amazonリンクボタン（重要）
  FirstVisitRouter.tsx   ← トップから/calendarへの自動リダイレクト
  ServiceWorkerRegister.tsx
  Tutorial.tsx

public/
  manifest.json          ← PWA設定（TWA要件最適化済み）
  sw.js                  ← Service Worker v2（offline.html対応）
  offline.html           ← オフラインフォールバックページ
  hero-*.png, accent-*.png ← コラム挿絵
  icon-192.png, icon-512.png ← アプリアイコン

docs/
  google-play-listing.md ← ストア掲載文ドラフト
  screenshot-guide.md    ← スクリーンショット撮影ガイド

secrets/                 ← .gitignore対象（ローカル保管のみ）
  README.md
  accounts.md            ← アカウント情報一覧
  env.local.backup.txt   ← .env.localのバックアップ

.claude/
  launch.json            ← preview server設定
  settings.local.json    ← Claude Code ローカル設定（gitignore対象）
  conversation-archive/  ← 会話履歴バックアップ（gitignore対象、任意）
```

---

## 💡 重要な技術的決定

### トップページのハイブリッドルーティング
- `/` は SSR ランディングページ（コラム紹介・酒種ガイド・コンテンツリッチ）
- `FirstVisitRouter` (`src/components/FirstVisitRouter.tsx`) が localStorage の `sake-log-visited` を判定
- 初回：ランディング表示
- 2回目以降：自動的に `/calendar` にリダイレクト
- SEOクローラーは SSR HTML を読み、リピーターはサクッとアプリへ

### アフィリエイト戦略
- `src/components/AffiliateLinks.tsx` が中心
- 環境変数 `NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID` / `NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG` で上書き可
- 楽天ID デフォルト: `5229625a.cf8fbb4e.5229625b.f1834795`（既存IDがハードコード済み）
- Amazon: 未登録のため検索URLにフォールバック
- 配置箇所:
  - 5酒種コラムの128銘柄カード
  - カレンダーの記録カード（RecordCard）
  - 銘柄図鑑の詳細ページ（BrandBookPage）

### 年齢確認ゲート
- `AgeVerificationGate.tsx` で初回起動時に表示
- `sake-log-age-verified` localStorage に記録
- 「いいえ」で国税庁の未成年飲酒防止ページにリダイレクト

### SEO/メタデータ
- `layout.tsx` で metadataBase、OpenGraph、Twitter Card、robots、appleWebApp等設定済み
- `sitemap.ts`、`robots.ts` で動的サイトマップ・クロール許可生成

### Service Worker（v2）
- ナビゲーションリクエスト: ネットワーク優先 → キャッシュ → offline.html の3段階フォールバック
- 静的リソース: ネットワーク優先、失敗時キャッシュ
- POST `/add?shared=1` で写真共有を処理

---

## 🔐 認証情報・環境変数

詳細は `secrets/accounts.md` 参照。

### 必須の環境変数（`.env.local`）
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

新PC では `secrets/env.local.backup.txt` → `.env.local` にコピー。

### GitHub アカウント
- 主: `yosuke-34`（push権限あり）
- 副: `okamoto052`（push権限なし）
- 切替: `gh auth switch --user yosuke-34`

### 運営用Gmail
- `sakelogapp.info@gmail.com`（Google Play Developer、公開連絡先）

---

## 📍 現在進行中: Phase E（Google Play配信）

### 全体ロードマップ

| ステップ | 担当 | 状態 |
|---|---|---|
| ① manifest.jsonをTWA要件に最適化 | Claude | ✅完了 |
| ② ストア掲載文ドラフト作成 | Claude | ✅完了（`docs/google-play-listing.md`） |
| ③ スクリーンショット撮影ガイド | Claude | ✅完了（`docs/screenshot-guide.md`） |
| ④ Google Play Developer 登録（$25） | ユーザー | 🔄本人確認中 |
| ⑤ アプリアイコン・スクリーンショット撮影 | 両者 | ⏳未着手 |
| ⑥ 機能グラフィック作成（1024×500） | 両者 | ⏳未着手 |
| ⑦ Bubblewrap で AAB 生成 | Claude | ⏳未着手 |
| ⑧ Google Play Console にアップロード | ユーザー | ⏳未着手 |
| ⑨ 審査提出 → 公開 | Google | ⏳未着手 |

### 次に Claude がやるべきこと（再開時）

1. ユーザーの Google Play Developer 登録状況を確認
2. 登録完了後、Bubblewrap セットアップに進む
3. スクリーンショット撮影をサポート（DevToolsでの撮影手順案内）
4. 機能グラフィック作成（必要ならSVGテンプレ提供）
5. AAB生成 → ユーザーが Play Console にアップロード

---

## 🚨 重要な過去の経緯・方針（再認識用）

### AdSense は完全撤退済み
- 4回連続不承認のため、戦略転換完了
- `AdBanner.tsx`、`AdBannerWrapper.tsx` は削除済み
- `layout.tsx` から adsbygoogle スクリプトも撤去済み
- 二度と AdSense は提案しないこと

### アルコール関連サイトとしてのコンプライアンス
- 20歳以上向けの年齢確認ゲート維持
- 各画面で飲酒運転防止・未成年防止メッセージ
- 厚生労働省「健康日本21」、国税庁「酒のしおり」を参考に編集
- 適正飲酒ガイドページが必須（`/responsible-drinking`）

### ユーザーのビジョン（最重要）
- **スマホアプリで完結する**飲酒記録ツール
- 独自ドメイン取得は不要（Vercelサブドメインで継続）
- AdSense ではなくアフィリエイトで収益化
- Google Play 配信を目指す（App Store は後回し）

### Phase ごとの方針
- Phase A (AdSense撤去): 完了
- Phase B (年齢確認モーダル): 現状維持で完了
- Phase C (アフィリエイト導入): 5酒種128銘柄に楽天・Amazonリンク完了
- Phase D (PWA体験向上): 記録銘柄→購入リンク、オフライン対応完了
- Phase E (Google Play配信): 進行中

---

## 🛠 開発でよく使うコマンド

```bash
# 開発サーバー
npm run dev

# 本番ビルド検証
npm run build

# プレビュー（Claude Code内）
# .claude/launch.json の "dev" 設定で起動

# Git操作
git status
git add -A
git commit -m "..."
git push origin master   # ← yosuke-34 アカウントで実行

# GitHub アカウント切替（push失敗時）
gh auth switch --user yosuke-34
```

---

## 📚 参考になるドキュメント

| ファイル | 内容 |
|---|---|
| `README.md` | プロジェクトの一般的な説明 |
| `HANDOVER.md` | このファイル（引継ぎマスター） |
| `secrets/accounts.md` | アカウント情報一覧 |
| `docs/google-play-listing.md` | ストア掲載文ドラフト |
| `docs/screenshot-guide.md` | スクリーンショット撮影ガイド |

---

## 🔄 過去の会話履歴

新PC で詳細な過去のやり取りを確認したい場合：

```
.claude/conversation-archive/
```

このフォルダに jsonl 形式で全会話が保存されています（gitignore対象、ローカルのみ）。
ファイルサイズが大きい（〜数十MB）ので、Claude Code には直接読ませず、必要に応じて grep などで検索すること。

---

## ✅ 復元の動作確認

新PCでの復元動作確認は、冒頭の「🚚 新PCでの復元フロー → Step 6: 動作確認」および
「復元完了チェックリスト」を参照してください。
