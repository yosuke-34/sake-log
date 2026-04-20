'use client';

interface DayCellProps {
  day: number;
  dateStr: string;
  hasRecord: boolean;
  isToday: boolean;
  isSunday: boolean;
  isSaturday: boolean;
  isHoliday?: boolean;
  onClick: () => void;
}

export default function DayCell({
  day,
  hasRecord,
  isToday,
  isSunday,
  isSaturday,
  isHoliday,
  onClick,
}: DayCellProps) {
  const isRed = isSunday || isHoliday;
  return (
    <button
      onClick={onClick}
      className={`
        relative flex flex-col items-center justify-center
        aspect-square rounded-lg text-sm transition-all
        ${isToday ? 'ring-2 ring-accent bg-accent/10' : 'hover:bg-border/30'}
        ${isRed ? 'text-accent' : isSaturday ? 'text-blue-500' : 'text-foreground'}
      `}
    >
      <span className={`${isToday ? 'font-bold' : ''}`}>{day}</span>
      {hasRecord && (
        <span className="text-[10px] leading-none mt-0.5" title="記録あり">
          🍶
        </span>
      )}
    </button>
  );
}
