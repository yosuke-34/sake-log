// 日本の祝日判定ライブラリ
// 固定祝日 + 振替休日 + ハッピーマンデー + 春分・秋分の日

type HolidayDef =
  | { type: 'fixed'; month: number; day: number; name: string }
  | { type: 'happyMonday'; month: number; weekOfMonth: number; name: string }
  | { type: 'equinox'; month: number; name: string };

const HOLIDAY_DEFS: HolidayDef[] = [
  { type: 'fixed', month: 1, day: 1, name: '元日' },
  { type: 'happyMonday', month: 1, weekOfMonth: 2, name: '成人の日' },
  { type: 'fixed', month: 2, day: 11, name: '建国記念の日' },
  { type: 'fixed', month: 2, day: 23, name: '天皇誕生日' },
  { type: 'equinox', month: 3, name: '春分の日' },
  { type: 'fixed', month: 4, day: 29, name: '昭和の日' },
  { type: 'fixed', month: 5, day: 3, name: '憲法記念日' },
  { type: 'fixed', month: 5, day: 4, name: 'みどりの日' },
  { type: 'fixed', month: 5, day: 5, name: 'こどもの日' },
  { type: 'happyMonday', month: 7, weekOfMonth: 3, name: '海の日' },
  { type: 'fixed', month: 8, day: 11, name: '山の日' },
  { type: 'happyMonday', month: 9, weekOfMonth: 3, name: '敬老の日' },
  { type: 'equinox', month: 9, name: '秋分の日' },
  { type: 'happyMonday', month: 10, weekOfMonth: 2, name: 'スポーツの日' },
  { type: 'fixed', month: 11, day: 3, name: '文化の日' },
  { type: 'fixed', month: 11, day: 23, name: '勤労感謝の日' },
];

// 春分・秋分の日の近似計算
function getEquinoxDay(year: number, month: number): number {
  if (month === 3) {
    // 春分の日
    return Math.floor(20.8431 + 0.242194 * (year - 1980) - Math.floor((year - 1980) / 4));
  }
  // 秋分の日
  return Math.floor(23.2488 + 0.242194 * (year - 1980) - Math.floor((year - 1980) / 4));
}

// ハッピーマンデー: 第N月曜日
function getNthMonday(year: number, month: number, n: number): number {
  const first = new Date(year, month - 1, 1);
  const firstDow = first.getDay();
  // 最初の月曜日
  let firstMonday = firstDow <= 1 ? 1 + (1 - firstDow) : 1 + (8 - firstDow);
  return firstMonday + (n - 1) * 7;
}

/**
 * 指定した年月の祝日セットを返す (日付文字列 "YYYY-MM-DD" のSet)
 */
export function getHolidaysForMonth(year: number, month: number): Set<string> {
  const holidays = new Set<string>();
  const pad = (n: number) => String(n).padStart(2, '0');

  // 基本祝日を計算
  const baseHolidays: { month: number; day: number }[] = [];

  for (const def of HOLIDAY_DEFS) {
    let m: number, d: number;
    if (def.type === 'fixed') {
      m = def.month;
      d = def.day;
    } else if (def.type === 'happyMonday') {
      m = def.month;
      d = getNthMonday(year, def.month, def.weekOfMonth);
    } else {
      m = def.month;
      d = getEquinoxDay(year, def.month);
    }
    baseHolidays.push({ month: m, day: d });
  }

  // 振替休日: 祝日が日曜の場合、翌日（月曜）が振替休日
  const allHolidayDates = new Set(baseHolidays.map(h => `${h.month}-${h.day}`));
  const substituteHolidays: { month: number; day: number }[] = [];

  for (const h of baseHolidays) {
    const date = new Date(year, h.month - 1, h.day);
    if (date.getDay() === 0) {
      // 翌日以降で祝日でない日を探す
      let subDay = h.day + 1;
      while (allHolidayDates.has(`${h.month}-${subDay}`)) {
        subDay++;
      }
      substituteHolidays.push({ month: h.month, day: subDay });
      allHolidayDates.add(`${h.month}-${subDay}`);
    }
  }

  // 国民の休日: 祝日と祝日に挟まれた日
  // (主に9月に発生する可能性がある)

  // 指定月のみフィルタリング
  const allDays = [...baseHolidays, ...substituteHolidays];
  for (const h of allDays) {
    if (h.month === month) {
      holidays.add(`${year}-${pad(month)}-${pad(h.day)}`);
    }
  }

  return holidays;
}
