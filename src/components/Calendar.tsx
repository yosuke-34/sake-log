'use client';

import { useState, useMemo } from 'react';
import DayCell from './DayCell';
import { getHolidaysForMonth } from '@/lib/holidays';

interface CalendarProps {
  recordDates: Set<string>;
  onDateClick: (date: string) => void;
}

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];

export default function Calendar({ recordDates, onDateClick }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  // 祝日セット
  const holidays = useMemo(() => getHolidaysForMonth(year, month + 1), [year, month]);

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDayOfWeek; i++) {
    cells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(d);
  }

  return (
    <div>
      {/* Header navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-border/50 transition-colors text-foreground"
          aria-label="前月"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h2 className="text-lg font-bold tracking-wide">
          {year}年 {month + 1}月
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-border/50 transition-colors text-foreground"
          aria-label="翌月"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Weekday headers */}
      <div className="calendar-grid mb-1">
        {WEEKDAYS.map((day, i) => (
          <div
            key={day}
            className={`text-center text-xs font-medium py-1 ${
              i === 0 ? 'text-accent' : i === 6 ? 'text-blue-500' : 'text-muted'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="calendar-grid">
        {cells.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} />;
          }
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const hasRecord = recordDates.has(dateStr);
          const isToday = dateStr === todayStr;
          const dayOfWeek = (startDayOfWeek + day - 1) % 7;

          return (
            <DayCell
              key={dateStr}
              day={day}
              dateStr={dateStr}
              hasRecord={hasRecord}
              isToday={isToday}
              isSunday={dayOfWeek === 0}
              isSaturday={dayOfWeek === 6}
              isHoliday={holidays.has(dateStr)}
              onClick={() => onDateClick(dateStr)}
            />
          );
        })}
      </div>
    </div>
  );
}
