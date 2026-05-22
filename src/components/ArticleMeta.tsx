import Link from 'next/link';

type Reference = {
  name: string;
  url?: string;
};

type ArticleMetaProps = {
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes?: number;
  references?: Reference[];
};

/**
 * 記事末尾に表示する著者・更新日・出典情報。
 * E-E-A-T（Experience, Expertise, Authoritativeness, Trust）シグナルとして機能。
 */
export default function ArticleMeta({
  publishedAt,
  updatedAt,
  readTimeMinutes,
  references = [],
}: ArticleMetaProps) {
  return (
    <section
      className="rounded-xl p-4 text-xs"
      style={{ background: 'rgba(60,42,30,0.04)', border: '1px solid rgba(60,42,30,0.12)' }}
      aria-label="記事情報・参考資料"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{ background: 'linear-gradient(135deg, rgba(197,61,67,0.15) 0%, rgba(139,105,20,0.15) 100%)', border: '1px solid rgba(197,61,67,0.25)' }}
        >
          <span className="text-xl">🍶</span>
        </div>
        <div className="flex-1">
          <div className="font-bold text-sm" style={{ color: '#3C2A1E' }}>酒ログ編集部</div>
          <div className="text-muted text-[11px] mt-0.5">
            お酒の楽しみ方と適正飲酒の知識を、初心者にもわかりやすく発信する編集チーム。
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-[11px] text-muted">
        <div>📅 公開: {publishedAt}</div>
        <div>🔄 最終更新: {updatedAt}</div>
        {readTimeMinutes && <div>⏱️ 読了目安: 約{readTimeMinutes}分</div>}
      </div>

      {references.length > 0 && (
        <div className="pt-3 border-t" style={{ borderColor: 'rgba(60,42,30,0.1)' }}>
          <div className="font-bold mb-1.5" style={{ color: '#3C2A1E' }}>主な参考資料・出典</div>
          <ul className="list-disc pl-4 space-y-0.5 text-muted text-[11px]">
            {references.map((ref) => (
              <li key={ref.name}>
                {ref.url ? (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="underline hover:no-underline"
                    style={{ color: '#8B6914' }}
                  >
                    {ref.name}
                  </a>
                ) : (
                  ref.name
                )}
              </li>
            ))}
          </ul>
          <p className="text-[10px] text-muted mt-2 leading-relaxed">
            ※ 本記事は一般的な情報提供を目的としています。健康上の懸念がある方は医療機関にご相談ください。
            お酒は20歳になってから、<Link href="/responsible-drinking" className="underline" style={{ color: '#C53D43' }}>適正量を守って</Link>お楽しみください。
          </p>
        </div>
      )}
    </section>
  );
}
