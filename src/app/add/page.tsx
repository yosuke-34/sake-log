import Link from 'next/link';
import AddRecordForm from '@/components/AddRecordForm';

export default function AddPage() {
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
        <h2 className="text-lg font-bold">お酒を記録する</h2>
      </div>
      <AddRecordForm />
    </div>
  );
}
