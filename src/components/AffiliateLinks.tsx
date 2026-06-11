/**
 * 楽天・Amazon検索リンクを表示するコンポーネント。
 *
 * 環境変数 (NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID, NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG) が
 * 設定されていればアフィリエイトリンクとして機能し、未設定の場合は
 * 通常の検索URLにフォールバックする。これによりID取得前でも導線を提供できる。
 *
 * rel="sponsored" を付与することで、Googleにスポンサードリンクであることを明示する。
 */

const RAKUTEN_AFFILIATE_ID = process.env.NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID || '';
const AMAZON_ASSOCIATE_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || '';

type AffiliateLinksProps = {
  keyword: string;
  className?: string;
};

/**
 * 銘柄名から括弧内の補足情報（産地・蔵元等）を除去して検索キーワードに整形。
 * 例: "森伊蔵（森伊蔵酒造・芋）" → "森伊蔵"
 *     "サントリー 角瓶（ジャパニーズ）" → "サントリー 角瓶"
 */
function normalizeKeyword(raw: string): string {
  return raw.split(/[（(]/)[0].trim();
}

function buildRakutenUrl(keyword: string): string {
  const searchUrl = `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(keyword)}/`;
  if (!RAKUTEN_AFFILIATE_ID) return searchUrl;
  return `https://hb.afl.rakuten.co.jp/hgc/${RAKUTEN_AFFILIATE_ID}/?pc=${encodeURIComponent(searchUrl)}&m=${encodeURIComponent(searchUrl)}`;
}

function buildAmazonUrl(keyword: string): string {
  const base = `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}`;
  if (!AMAZON_ASSOCIATE_TAG) return base;
  return `${base}&tag=${AMAZON_ASSOCIATE_TAG}`;
}

export default function AffiliateLinks({ keyword, className = '' }: AffiliateLinksProps) {
  const normalized = normalizeKeyword(keyword);
  const rakutenUrl = buildRakutenUrl(normalized);
  const amazonUrl = buildAmazonUrl(normalized);

  return (
    <div className={`flex gap-1.5 mt-1.5 ${className}`} aria-label={`${normalized}の購入先リンク`}>
      <a
        href={rakutenUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold transition-colors no-underline"
        style={{ background: 'rgba(191,21,42,0.1)', color: '#bf152a', border: '1px solid rgba(191,21,42,0.2)' }}
      >
        🛒 楽天
      </a>
      <a
        href={amazonUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold transition-colors no-underline"
        style={{ background: 'rgba(255,153,0,0.1)', color: '#cc7700', border: '1px solid rgba(255,153,0,0.2)' }}
      >
        🛒 Amazon
      </a>
    </div>
  );
}
