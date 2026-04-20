import { BRAND_DATA, PREFECTURES, type BrandOption } from '@/data/brands';
import type { DrinkRecord } from '@/types';

// 9地方グループ
export const REGION_GROUPS: { name: string; prefectures: string[] }[] = [
  { name: '北海道', prefectures: ['北海道'] },
  { name: '東北', prefectures: ['青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'] },
  { name: '関東', prefectures: ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県'] },
  { name: '中部', prefectures: ['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県'] },
  { name: '近畿', prefectures: ['三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県'] },
  { name: '中国', prefectures: ['鳥取県', '島根県', '岡山県', '広島県', '山口県'] },
  { name: '四国', prefectures: ['徳島県', '香川県', '愛媛県', '高知県'] },
  { name: '九州', prefectures: ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県'] },
  { name: '沖縄', prefectures: ['沖縄県'] },
];

export interface BrandLookupEntry {
  prefecture: string;
  drinkType: string;
  maker: string;
  makerUrl: string;
}

// 銘柄名→都道府県/種類/酒造の逆引きマップを構築
export function buildBrandLookupMap(): Map<string, BrandLookupEntry> {
  const map = new Map<string, BrandLookupEntry>();
  for (const [drinkType, prefectureData] of Object.entries(BRAND_DATA)) {
    for (const [prefecture, brands] of Object.entries(prefectureData)) {
      for (const brand of brands as BrandOption[]) {
        // brand名で引けるようにする（重複は最初のものを優先）
        if (!map.has(brand.brand)) {
          map.set(brand.brand, { prefecture, drinkType, maker: brand.maker, makerUrl: brand.url || '' });
        }
      }
    }
  }
  return map;
}

// 銘柄ごとに集計した情報
export interface BrandSummary {
  brandName: string;
  maker: string;
  makerUrl: string;
  prefecture: string;
  drinkType: string;
  totalVolume: number;
  recordCount: number;
  latestPhoto: string | null;
  latestNote: string | null;
  latestDate: string;
  latestLocation: string;
  firstDate: string;
  records: DrinkRecord[];
}

// レコード配列を銘柄ごとに集計
export function summarizeByBrand(
  records: DrinkRecord[],
  lookupMap: Map<string, BrandLookupEntry>
): BrandSummary[] {
  const brandMap = new Map<string, DrinkRecord[]>();
  for (const r of records) {
    const key = `${r.drink_type}::${r.brand}`;
    const arr = brandMap.get(key) || [];
    arr.push(r);
    brandMap.set(key, arr);
  }

  const summaries: BrandSummary[] = [];
  for (const [, recs] of brandMap) {
    const sorted = [...recs].sort((a, b) => b.date.localeCompare(a.date));
    const latest = sorted[0];
    const oldest = sorted[sorted.length - 1];
    const lookup = lookupMap.get(latest.brand);

    summaries.push({
      brandName: latest.brand,
      maker: lookup?.maker || '',
      makerUrl: lookup?.makerUrl || '',
      prefecture: latest.prefecture || lookup?.prefecture || 'その他',
      drinkType: latest.drink_type,
      totalVolume: recs.reduce((sum, r) => sum + r.volume_ml, 0),
      recordCount: recs.length,
      latestPhoto: sorted.find(r => r.photo_url)?.photo_url || null,
      latestNote: sorted.find(r => r.note)?.note || null,
      latestDate: latest.date,
      latestLocation: latest.location,
      firstDate: oldest.date,
      records: sorted,
    });
  }

  return summaries.sort((a, b) => b.latestDate.localeCompare(a.latestDate));
}

// 地方名→その地方に属する銘柄サマリーを取得
export function getBrandsByRegion(
  summaries: BrandSummary[],
  regionName: string
): BrandSummary[] {
  const region = REGION_GROUPS.find(r => r.name === regionName);
  if (!region) return [];
  return summaries.filter(s => region.prefectures.includes(s.prefecture));
}

// 都道府県→その都道府県の銘柄サマリーを取得
export function getBrandsByPrefecture(
  summaries: BrandSummary[],
  prefecture: string
): BrandSummary[] {
  return summaries.filter(s => s.prefecture === prefecture);
}

// 種類→その種類の銘柄サマリーを取得
export function getBrandsByDrinkType(
  summaries: BrandSummary[],
  drinkType: string
): BrandSummary[] {
  return summaries.filter(s => s.drinkType === drinkType);
}

// 地方ごとの銘柄数を集計
export function countBrandsByRegion(summaries: BrandSummary[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const region of REGION_GROUPS) {
    const count = summaries.filter(s => region.prefectures.includes(s.prefecture)).length;
    counts.set(region.name, count);
  }
  return counts;
}

// ドリンク絵文字マップ（共通化）
export const DRINK_EMOJI: Record<string, string> = {
  'ウィスキー': '🥃',
  'ビール': '🍺',
  'ジン': '🍸',
  '日本酒': '🍶',
  '焼酎': '🫗',
  'ワイン': '🍷',
  'サワー': '🍹',
};

// =====================================================
// メダルシステム
// =====================================================

// 飲酒量メダル（銘柄単位）: 1L=銅, 5L=銀, 10L=金
export type MedalType = 'gold' | 'silver' | 'bronze' | null;

export function getVolumeMedal(totalVolumeMl: number): MedalType {
  if (totalVolumeMl >= 10000) return 'gold';
  if (totalVolumeMl >= 5000) return 'silver';
  if (totalVolumeMl >= 1000) return 'bronze';
  return null;
}

export const MEDAL_INFO: Record<string, { emoji: string; label: string; color: string; bgColor: string }> = {
  gold:   { emoji: '🥇', label: '金メダル', color: '#B8860B', bgColor: 'rgba(184,134,11,0.12)' },
  silver: { emoji: '🥈', label: '銀メダル', color: '#808080', bgColor: 'rgba(128,128,128,0.12)' },
  bronze: { emoji: '🥉', label: '銅メダル', color: '#CD7F32', bgColor: 'rgba(205,127,50,0.12)' },
};

// 都道府県の銘柄コンプリート率メダル: 50%=銅, 75%=銀, 100%=金
export function getPrefectureCompletionMedal(
  recordedCount: number,
  totalAvailable: number
): MedalType {
  if (totalAvailable === 0) return null;
  const ratio = recordedCount / totalAvailable;
  if (ratio >= 1.0) return 'gold';
  if (ratio >= 0.75) return 'silver';
  if (ratio >= 0.5) return 'bronze';
  return null;
}

// BRAND_DATAから都道府県ごとの登録可能な銘柄数を取得
export function getTotalBrandsPerPrefecture(): Map<string, number> {
  const counts = new Map<string, number>();
  for (const [, prefectureData] of Object.entries(BRAND_DATA)) {
    for (const [prefecture, brands] of Object.entries(prefectureData)) {
      const current = counts.get(prefecture) || 0;
      counts.set(prefecture, current + (brands as BrandOption[]).length);
    }
  }
  return counts;
}

// BRAND_DATAから都道府県×種類ごとの登録可能な銘柄数を取得
// key: "都道府県::種類" → 銘柄数
export function getTotalBrandsPerPrefectureByType(): Map<string, number> {
  const counts = new Map<string, number>();
  for (const [drinkType, prefectureData] of Object.entries(BRAND_DATA)) {
    for (const [prefecture, brands] of Object.entries(prefectureData)) {
      const key = `${prefecture}::${drinkType}`;
      counts.set(key, (brands as BrandOption[]).length);
    }
  }
  return counts;
}

// 飲酒量メダルの次の目標までの進捗
export function getVolumeProgress(totalVolumeMl: number): { current: number; next: number; label: string } | null {
  if (totalVolumeMl >= 10000) return null; // already gold
  if (totalVolumeMl >= 5000) return { current: totalVolumeMl, next: 10000, label: '金メダルまで' };
  if (totalVolumeMl >= 1000) return { current: totalVolumeMl, next: 5000, label: '銀メダルまで' };
  return { current: totalVolumeMl, next: 1000, label: '銅メダルまで' };
}
