import Link from 'next/link';
import AddRecordForm from '@/components/AddRecordForm';

export default async function AddPage({ searchParams }: { searchParams: Promise<{ shared?: string }> }) {
  const params = await searchParams;
  const isShared = params.shared === '1';

  return (
    <div>
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
        <h2 className="text-lg font-bold">{isShared ? '共有された写真で記録する' : 'お酒を記録する'}</h2>
      </div>
      <AddRecordForm shared={isShared} />
    </div>
  );
}
