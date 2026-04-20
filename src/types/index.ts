export const DRINK_TYPES = [
  'ウィスキー',
  'ビール',
  'ジン',
  '日本酒',
  '焼酎',
  'ワイン',
  'サワー',
] as const;

export type DrinkType = (typeof DRINK_TYPES)[number];

// 日本酒の特定名称酒
export const SAKE_TYPES = [
  '純米大吟醸',
  '大吟醸',
  '純米吟醸',
  '吟醸',
  '特別純米',
  '純米',
  '特別本醸造',
  '本醸造',
  '普通酒',
  'にごり酒',
  '生酒',
  '原酒',
  'スパークリング',
  'その他',
] as const;

export type SakeType = (typeof SAKE_TYPES)[number];

export interface DrinkRecord {
  id: string;
  date: string; // YYYY-MM-DD
  location: string;
  drink_type: DrinkType;
  brand: string;
  photo_url: string | null;
  note: string | null;
  volume_ml: number;
  sake_type?: string | null; // 日本酒の特定名称酒
  prefecture?: string | null; // 都道府県（任意）
  created_at: string;
}

// 飲み方の選択肢（種類ごとに異なる）
export interface DrinkStyle {
  label: string;       // 表示名（例: "中ジョッキ"）
  unit_ml: number;     // 1杯あたりのml
  max_count: number;   // 最大杯数
}

// お酒の種類ごとの飲み方選択肢
export const DRINK_STYLES: Record<DrinkType, DrinkStyle[]> = {
  'ビール': [
    { label: '中ジョッキ', unit_ml: 435, max_count: 5 },
    { label: '瓶ビール', unit_ml: 500, max_count: 5 },
    { label: '350ml缶', unit_ml: 350, max_count: 5 },
    { label: '500ml缶', unit_ml: 500, max_count: 5 },
  ],
  'ウィスキー': [
    { label: 'シングル', unit_ml: 30, max_count: 5 },
    { label: 'ダブル', unit_ml: 60, max_count: 5 },
    { label: 'ハイボール', unit_ml: 350, max_count: 5 },
  ],
  'ジン': [
    { label: '1杯', unit_ml: 350, max_count: 5 },
  ],
  '日本酒': [
    { label: 'おちょこ', unit_ml: 36, max_count: 5 },
    { label: '1合', unit_ml: 180, max_count: 5 },
    { label: '4合瓶', unit_ml: 720, max_count: 1 },
    { label: '一升瓶', unit_ml: 1800, max_count: 1 },
  ],
  '焼酎': [
    { label: 'ロック', unit_ml: 60, max_count: 5 },
    { label: '水割り', unit_ml: 60, max_count: 5 },
    { label: 'お湯割り', unit_ml: 60, max_count: 5 },
    { label: '炭酸割', unit_ml: 60, max_count: 5 },
  ],
  'ワイン': [
    { label: 'グラス', unit_ml: 100, max_count: 5 },
    { label: 'ボトル', unit_ml: 750, max_count: 5 },
  ],
  'サワー': [
    { label: '1杯', unit_ml: 350, max_count: 5 },
    { label: '350ml缶', unit_ml: 350, max_count: 5 },
    { label: '500ml缶', unit_ml: 500, max_count: 5 },
  ],
};
