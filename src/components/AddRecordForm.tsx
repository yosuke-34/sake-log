'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, supabaseConfigured } from '@/lib/supabase';
import { getDeviceId } from '@/lib/deviceId';
import { DRINK_TYPES, DRINK_STYLES, SAKE_TYPES, DrinkType, DrinkRecord } from '@/types';
import { BRAND_SELECTABLE_TYPES, PREFECTURES, BRAND_DATA, BrandOption } from '@/data/brands';
import Tutorial, { ADD_TUTORIAL_STEPS, ADD_TUTORIAL_STORAGE_KEY } from './Tutorial';
import { getExifDate } from '@/lib/exifDate';

interface AddRecordFormProps {
  editRecord?: DrinkRecord;
  shared?: boolean;
  pastLocations?: string[];
}

// volume_ml から飲み方と杯数を逆算する
function resolveStyleAndCount(drinkType: DrinkType, volumeMl: number): { styleIndex: number; count: number } {
  const styles = DRINK_STYLES[drinkType];
  for (let i = 0; i < styles.length; i++) {
    const style = styles[i];
    if (volumeMl % style.unit_ml === 0) {
      const c = volumeMl / style.unit_ml;
      if (c >= 1 && c <= style.max_count) {
        return { styleIndex: i, count: c };
      }
    }
  }
  return { styleIndex: 0, count: 1 };
}

export default function AddRecordForm({ editRecord, shared, pastLocations = [] }: AddRecordFormProps) {
  const router = useRouter();
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const isEdit = !!editRecord;

  const initialDrinkType = (editRecord?.drink_type as DrinkType) || 'ビール';
  const initialResolved = editRecord
    ? resolveStyleAndCount(initialDrinkType, editRecord.volume_ml || 0)
    : { styleIndex: 0, count: 1 };

  const [date, setDate] = useState(editRecord?.date || todayStr);
  const [location, setLocation] = useState(editRecord?.location || '');
  const [drinkType, setDrinkType] = useState<DrinkType>(initialDrinkType);
  const [brand, setBrand] = useState(editRecord?.brand || '');
  const [note, setNote] = useState(editRecord?.note || '');
  const [sakeType, setSakeType] = useState(editRecord?.sake_type || '');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(editRecord?.photo_url || null);
  const [existingPhotoUrl, setExistingPhotoUrl] = useState<string | null>(editRecord?.photo_url || null);
  const [saving, setSaving] = useState(false);

  // 飲み方・杯数の状態
  const [styleIndex, setStyleIndex] = useState(initialResolved.styleIndex);
  const [count, setCount] = useState(initialResolved.count);

  // 銘柄選択モード
  const isBrandSelectable = (BRAND_SELECTABLE_TYPES as readonly string[]).includes(drinkType);
  const [brandMode, setBrandMode] = useState<'select' | 'search' | 'free'>(
    isEdit ? 'free' : 'select'
  );
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>('');
  const [selectedMaker, setSelectedMaker] = useState<string>('');
  const [brandSearch, setBrandSearch] = useState('');
  // 検索モード用: 全銘柄横断検索
  const [globalSearch, setGlobalSearch] = useState('');
  const [photoZoom, setPhotoZoom] = useState(false);
  // 任意入力モード時の都道府県選択
  const [freePrefecture, setFreePrefecture] = useState<string>(editRecord?.prefecture || '');
  // 続けて登録ダイアログ
  const [showContinueDialog, setShowContinueDialog] = useState(false);
  // 場所サジェスト
  const [locationFocused, setLocationFocused] = useState(false);

  // 過去の場所をSupabaseから取得
  const [fetchedLocations, setFetchedLocations] = useState<string[]>([]);
  useEffect(() => {
    if (!supabaseConfigured) return;
    (async () => {
      try {
        const deviceId = getDeviceId();
        const { data } = await supabase
          .from('drink_records')
          .select('location')
          .eq('device_id', deviceId)
          .order('date', { ascending: false });
        if (data) {
          // 重複を除去し、最新順で保持
          const unique = [...new Set(data.map(r => r.location).filter(Boolean))];
          setFetchedLocations(unique);
        }
      } catch (e) {
        console.error('場所履歴の取得エラー:', e);
      }
    })();
  }, []);

  // pastLocationsのpropsとfetchedLocationsをマージ
  const allPastLocations = useMemo(() => {
    const merged = [...new Set([...fetchedLocations, ...pastLocations])];
    return merged;
  }, [fetchedLocations, pastLocations]);

  // Share Target: 共有された写真をCache APIから読み込む
  useEffect(() => {
    if (!shared) return;
    (async () => {
      try {
        const cache = await caches.open('share-target-cache');
        const response = await cache.match('/shared-photo');
        if (response) {
          const blob = await response.blob();
          const fileName = response.headers.get('X-File-Name') || 'shared-photo.jpg';
          const file = new File([blob], fileName, { type: blob.type });
          setPhoto(file);
          const reader = new FileReader();
          reader.onload = () => setPhotoPreview(reader.result as string);
          reader.readAsDataURL(file);

          // EXIF撮影日を取得して日付を自動設定
          const exifDate = await getExifDate(file);
          if (exifDate) {
            setDate(exifDate);
          }

          // キャッシュをクリーンアップ
          await cache.delete('/shared-photo');
        }
      } catch (e) {
        console.error('共有画像の読み込みエラー:', e);
      }
    })();
  }, [shared]);

  // 場所サジェスト候補
  const locationSuggestions = useMemo(() => {
    if (!locationFocused || !allPastLocations.length) return [];
    const trimmed = location.trim().toLowerCase();
    if (!trimmed) return allPastLocations.slice(0, 8);
    return allPastLocations.filter(loc => loc.toLowerCase().includes(trimmed)).slice(0, 8);
  }, [location, locationFocused, allPastLocations]);

  // 選択中の都道府県に対応するメーカーリスト
  const availableBrands = useMemo(() => {
    if (!isBrandSelectable || !selectedPrefecture) return [];
    const typeData = BRAND_DATA[drinkType as keyof typeof BRAND_DATA];
    if (!typeData) return [];
    const list = (typeData as Record<string, BrandOption[]>)[selectedPrefecture] || [];
    return [...list].sort((a, b) => a.brand.localeCompare(b.brand, 'ja'));
  }, [drinkType, selectedPrefecture, isBrandSelectable]);

  // 検索キーワードで絞り込んだリスト
  const filteredBrands = useMemo(() => {
    if (!brandSearch.trim()) return availableBrands;
    const keyword = brandSearch.trim().toLowerCase();
    return availableBrands.filter(
      (opt) =>
        opt.brand.toLowerCase().includes(keyword) ||
        opt.maker.toLowerCase().includes(keyword)
    );
  }, [availableBrands, brandSearch]);

  // 検索モード用: 全都道府県横断で銘柄を検索（現在の種類内）
  const globalSearchResults = useMemo(() => {
    if (!globalSearch.trim() || !isBrandSelectable) return [];
    const keyword = globalSearch.trim().toLowerCase();
    const typeData = BRAND_DATA[drinkType as keyof typeof BRAND_DATA];
    if (!typeData) return [];
    const results: (BrandOption & { prefecture: string })[] = [];
    for (const [prefecture, brands] of Object.entries(typeData as Record<string, BrandOption[]>)) {
      for (const b of brands) {
        if (b.brand.toLowerCase().includes(keyword) || b.maker.toLowerCase().includes(keyword)) {
          results.push({ ...b, prefecture });
        }
      }
    }
    return results.sort((a, b) => a.brand.localeCompare(b.brand, 'ja')).slice(0, 30);
  }, [drinkType, globalSearch, isBrandSelectable]);

  // 現在の種類に対応する飲み方リスト
  const styles = useMemo(() => DRINK_STYLES[drinkType], [drinkType]);
  const currentStyle = styles[styleIndex];
  const volumeMl = currentStyle.unit_ml * count;

  // 種類が変わったらリセット（都道府県は維持）
  const handleDrinkTypeChange = (type: DrinkType) => {
    setDrinkType(type);
    setStyleIndex(0);
    setCount(1);
    // 銘柄・メーカーはリセット、都道府県は維持
    setSelectedMaker('');
    setBrand('');
    setBrandSearch('');
    setGlobalSearch('');
    setBrandMode((BRAND_SELECTABLE_TYPES as readonly string[]).includes(type) ? 'select' : 'free');
    setSakeType('');
  };

  // 飲み方が変わったら杯数リセット
  const handleStyleChange = (idx: number) => {
    setStyleIndex(idx);
    setCount(1);
  };

  // 都道府県変更
  const handlePrefectureChange = (pref: string) => {
    setSelectedPrefecture(pref);
    setSelectedMaker('');
    setBrand('');
    setBrandSearch('');
  };

  // メーカー選択
  const handleMakerSelect = (option: BrandOption) => {
    setSelectedMaker(option.maker);
    setBrand(option.brand);
  };

  // 「続けて登録する」: 日付と場所を引き継いでフォームをリセット
  const handleContinue = () => {
    setShowContinueDialog(false);
    // 日付と場所はそのまま維持
    setDrinkType('ビール');
    setBrand('');
    setNote('');
    setSakeType('');
    setPhoto(null);
    setPhotoPreview(null);
    setExistingPhotoUrl(null);
    setStyleIndex(0);
    setCount(1);
    setSelectedPrefecture('');
    setSelectedMaker('');
    setBrandSearch('');
    setGlobalSearch('');
    setFreePrefecture('');
    setBrandMode('select');
    window.scrollTo(0, 0);
  };

  // 「登録を終了する」: カレンダー画面に戻る
  const handleFinish = () => {
    setShowContinueDialog(false);
    router.push('/');
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setExistingPhotoUrl(null);
      const reader = new FileReader();
      reader.onload = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);

      // EXIF撮影日を取得して日付を自動設定（新規登録時のみ）
      if (!isEdit) {
        const exifDate = await getExifDate(file);
        if (exifDate) {
          setDate(exifDate);
        }
      }
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
    setExistingPhotoUrl(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location.trim()) return;
    if (!supabaseConfigured) {
      alert('Supabaseが設定されていません。.env.local を設定してください。');
      return;
    }

    setSaving(true);
    try {
      let photoUrl: string | null = existingPhotoUrl;

      // 新しい写真がアップロードされた場合
      if (photo) {
        // 既存の写真を削除
        if (editRecord?.photo_url) {
          const oldFileName = editRecord.photo_url.split('/').pop();
          if (oldFileName) {
            await supabase.storage.from('drink-photos').remove([oldFileName]);
          }
        }

        const ext = photo.name.split('.').pop();
        const fileName = `${Date.now()}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from('drink-photos')
          .upload(fileName, photo);

        if (!uploadError) {
          const { data: urlData } = supabase.storage
            .from('drink-photos')
            .getPublicUrl(fileName);
          photoUrl = urlData.publicUrl;
        }
      } else if (!existingPhotoUrl && editRecord?.photo_url) {
        // 写真が削除された場合
        const oldFileName = editRecord.photo_url.split('/').pop();
        if (oldFileName) {
          await supabase.storage.from('drink-photos').remove([oldFileName]);
        }
        photoUrl = null;
      }

      // 都道府県: 都道府県/検索モードはselectedPrefecture、任意入力時はfreePrefecture
      const recordPrefecture = (isBrandSelectable && (brandMode === 'select' || brandMode === 'search'))
        ? selectedPrefecture || null
        : freePrefecture || null;

      const recordData = {
        date,
        location: location.trim(),
        drink_type: drinkType,
        brand: brand.trim() || '不明',
        photo_url: photoUrl,
        note: note.trim() || null,
        volume_ml: volumeMl,
        sake_type: drinkType === '日本酒' && sakeType ? sakeType : null,
        prefecture: recordPrefecture,
        device_id: getDeviceId(),
      };

      if (isEdit) {
        const { error } = await supabase
          .from('drink_records')
          .update(recordData)
          .eq('id', editRecord.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('drink_records').insert(recordData);
        if (error) throw error;
      }

      if (isEdit) {
        router.push('/');
      } else {
        // 新規登録時は「続けて登録しますか？」ダイアログを表示
        setShowContinueDialog(true);
      }
    } catch (err: unknown) {
      console.error('保存エラー:', err);
      alert('保存に失敗しました。通信環境を確認して、もう一度お試しください。');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* 日付 */}
      <div data-tutorial="date">
        <label className="block text-sm font-medium text-muted mb-1">日付</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2.5 bg-card-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40"
          required
        />
      </div>

      {/* 場所 */}
      <div data-tutorial="location">
        <label className="block text-sm font-medium text-muted mb-1">場所</label>
        <div className="flex gap-2 mb-2">
          <button
            type="button"
            onClick={() => setLocation('自宅')}
            className="px-3 py-1.5 text-sm rounded-full border transition-all"
            style={{
              background: location === '自宅' ? '#C53D43' : 'transparent',
              color: location === '自宅' ? '#fff' : '#3C2A1E',
              borderColor: location === '自宅' ? '#C53D43' : 'rgba(60,42,30,0.2)',
            }}
          >
            🏠 自宅
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onFocus={() => setLocationFocused(true)}
            onBlur={() => setTimeout(() => setLocationFocused(false), 200)}
            placeholder="例: 居酒屋○○"
            maxLength={100}
            className="w-full px-3 py-2.5 bg-card-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40"
            required
          />
          {locationFocused && locationSuggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-card-bg border border-border rounded-lg shadow-lg z-20 max-h-40 overflow-y-auto">
              {locationSuggestions.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => { setLocation(loc); setLocationFocused(false); }}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-border/20 transition-colors border-b border-border/30 last:border-b-0"
                >
                  📍 {loc}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* お酒の種類 */}
      <div data-tutorial="type">
        <label className="block text-sm font-medium text-muted mb-1">種類</label>
        <select
          value={drinkType}
          onChange={(e) => handleDrinkTypeChange(e.target.value as DrinkType)}
          className="w-full px-3 py-2.5 bg-card-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40"
        >
          {DRINK_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* 銘柄 */}
      <div>
        <label className="block text-sm font-medium text-muted mb-1">銘柄</label>

        {/* 銘柄選択可能な種類の場合、モード切替を表示 */}
        {isBrandSelectable && (
          <div className="flex gap-1 mb-2 bg-border/20 rounded-lg p-0.5">
            <button
              type="button"
              onClick={() => { setBrandMode('select'); setBrand(''); setSelectedPrefecture(''); setSelectedMaker(''); setBrandSearch(''); setGlobalSearch(''); }}
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-colors ${
                brandMode === 'select'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-muted'
              }`}
            >
              都道府県
            </button>
            <button
              type="button"
              onClick={() => { setBrandMode('search'); setBrand(''); setSelectedPrefecture(''); setSelectedMaker(''); setBrandSearch(''); setGlobalSearch(''); }}
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-colors ${
                brandMode === 'search'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-muted'
              }`}
            >
              検索
            </button>
            <button
              type="button"
              onClick={() => { setBrandMode('free'); setBrand(''); setSelectedPrefecture(''); setSelectedMaker(''); setBrandSearch(''); setGlobalSearch(''); setFreePrefecture(''); }}
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-colors ${
                brandMode === 'free'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-muted'
              }`}
            >
              任意入力
            </button>
          </div>
        )}

        {/* 都道府県から選択モード */}
        {isBrandSelectable && brandMode === 'select' && (
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-muted mb-1">発売元の都道府県</label>
              <select
                value={selectedPrefecture}
                onChange={(e) => handlePrefectureChange(e.target.value)}
                className="w-full px-3 py-2.5 bg-card-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40 text-sm"
              >
                <option value="">都道府県を選択...</option>
                {PREFECTURES.map((pref) => (
                  <option key={pref} value={pref}>{pref}</option>
                ))}
              </select>
            </div>

            {selectedPrefecture && (
              <div>
                <label className="block text-xs text-muted mb-1">
                  銘柄一覧
                  {availableBrands.length > 0 && (
                    <span className="ml-1 text-accent">
                      （{brandSearch ? `${filteredBrands.length}/` : ''}{availableBrands.length}件）
                    </span>
                  )}
                </label>
                {availableBrands.length > 0 ? (
                  <div className="bg-card-bg border border-border rounded-lg overflow-hidden">
                    <div className="sticky top-0 bg-card-bg border-b border-border/50 p-2">
                      <div className="relative">
                        <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21l-4.35-4.35" />
                        </svg>
                        <input
                          type="text"
                          value={brandSearch}
                          onChange={(e) => setBrandSearch(e.target.value)}
                          placeholder="銘柄・メーカーで検索..."
                          className="w-full pl-8 pr-8 py-2 bg-bg border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                        />
                        {brandSearch && (
                          <button
                            type="button"
                            onClick={() => setBrandSearch('')}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-text"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="max-h-48 overflow-y-auto divide-y divide-border/50">
                      {filteredBrands.length > 0 ? (
                        filteredBrands.map((option, i) => (
                          <button
                            key={`${option.brand}-${option.maker}-${i}`}
                            type="button"
                            onClick={() => { handleMakerSelect(option); setBrandSearch(''); }}
                            className={`w-full px-3 py-2.5 text-left text-sm transition-colors flex justify-between items-center ${
                              selectedMaker === option.maker && brand === option.brand
                                ? 'bg-accent/10 text-accent'
                                : 'hover:bg-border/20'
                            }`}
                          >
                            <span className="font-medium">{option.brand}</span>
                            <span className={`text-xs ${selectedMaker === option.maker && brand === option.brand ? 'text-accent' : 'text-muted'}`}>
                              {option.maker}
                            </span>
                          </button>
                        ))
                      ) : (
                        <p className="text-xs text-muted py-4 text-center">
                          「{brandSearch}」に一致する銘柄がありません
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-muted py-2">
                    {selectedPrefecture}の{drinkType}メーカーはリストにありません。「任意入力」をお使いください。
                  </p>
                )}
              </div>
            )}

            {brand && (
              <div className="bg-accent/5 border border-accent/20 rounded-lg px-3 py-2 flex items-center justify-between">
                <div>
                  <span className="text-xs text-muted">選択した銘柄:</span>
                  <span className="ml-2 font-bold text-accent">{brand}</span>
                </div>
                <span className="text-xs text-muted">{selectedMaker}</span>
              </div>
            )}
          </div>
        )}

        {/* 検索して選択モード */}
        {isBrandSelectable && brandMode === 'search' && (
          <div className="space-y-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={globalSearch}
                onChange={(e) => { setGlobalSearch(e.target.value); setBrand(''); setSelectedMaker(''); setSelectedPrefecture(''); }}
                placeholder="銘柄名やメーカー名を入力..."
                className="w-full pl-9 pr-9 py-2.5 bg-card-bg border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                autoFocus
              />
              {globalSearch && (
                <button
                  type="button"
                  onClick={() => { setGlobalSearch(''); setBrand(''); setSelectedMaker(''); setSelectedPrefecture(''); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {globalSearch.trim() && (
              <div className="bg-card-bg border border-border rounded-lg overflow-hidden">
                <div className="max-h-56 overflow-y-auto divide-y divide-border/50">
                  {globalSearchResults.length > 0 ? (
                    globalSearchResults.map((option, i) => (
                      <button
                        key={`${option.prefecture}-${option.brand}-${option.maker}-${i}`}
                        type="button"
                        onClick={() => {
                          setBrand(option.brand);
                          setSelectedMaker(option.maker);
                          setSelectedPrefecture(option.prefecture);
                          setGlobalSearch('');
                        }}
                        className={`w-full px-3 py-2.5 text-left text-sm transition-colors ${
                          brand === option.brand && selectedMaker === option.maker
                            ? 'bg-accent/10 text-accent'
                            : 'hover:bg-border/20'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{option.brand}</span>
                          <span className="text-xs text-muted">{option.maker}</span>
                        </div>
                        <span className="text-xs text-muted">{option.prefecture}</span>
                      </button>
                    ))
                  ) : (
                    <p className="text-xs text-muted py-4 text-center">
                      「{globalSearch}」に一致する{drinkType}の銘柄がありません
                    </p>
                  )}
                </div>
              </div>
            )}

            {brand && (
              <div className="bg-accent/5 border border-accent/20 rounded-lg px-3 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted">選択した銘柄:</span>
                    <span className="ml-2 font-bold text-accent">{brand}</span>
                  </div>
                  <span className="text-xs text-muted">{selectedMaker}</span>
                </div>
                {selectedPrefecture && (
                  <span className="text-xs text-muted">{selectedPrefecture}</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* 任意入力モード */}
        {(!isBrandSelectable || brandMode === 'free') && (
          <>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="例: プレミアムモルツ、獺祭（未入力で「不明」）"
              maxLength={100}
              className="w-full px-3 py-2.5 bg-card-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            <div className="mt-3">
              <label className="block text-xs text-muted mb-1">都道府県（任意）</label>
              <select
                value={freePrefecture}
                onChange={(e) => setFreePrefecture(e.target.value)}
                className="w-full px-3 py-2.5 bg-card-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40 text-sm"
              >
                <option value="">未選択</option>
                {PREFECTURES.map((pref) => (
                  <option key={pref} value={pref}>{pref}</option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>

      {/* 日本酒の特定名称酒 */}
      {drinkType === '日本酒' && (
        <div>
          <label className="block text-sm font-medium text-muted mb-1">特定名称酒（任意）</label>
          <div className="flex flex-wrap gap-2">
            {SAKE_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSakeType(sakeType === type ? '' : type)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  sakeType === type
                    ? 'bg-accent text-white border-accent'
                    : 'bg-card-bg text-foreground border-border hover:bg-border/40'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 飲み方 */}
      <div>
        <label className="block text-sm font-medium text-muted mb-1">飲み方</label>
        <div className="flex flex-wrap gap-2">
          {styles.map((style, idx) => (
            <button
              key={style.label}
              type="button"
              onClick={() => handleStyleChange(idx)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                idx === styleIndex
                  ? 'bg-accent text-white border-accent'
                  : 'bg-card-bg text-foreground border-border hover:bg-border/40'
              }`}
            >
              {style.label}
              <span className="text-xs opacity-70 ml-1">({style.unit_ml}ml)</span>
            </button>
          ))}
        </div>
      </div>

      {/* 杯数 */}
      <div>
        <label className="block text-sm font-medium text-muted mb-1">
          {currentStyle.max_count === 1 ? '数量' : '杯数'}
        </label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCount(Math.max(1, count - 1))}
            disabled={count <= 1}
            className="w-10 h-10 rounded-full bg-card-bg border border-border flex items-center justify-center text-lg font-bold disabled:opacity-30 hover:bg-border/40 transition-colors"
          >
            −
          </button>
          <span className="text-2xl font-bold text-foreground min-w-[3rem] text-center">
            {count}
          </span>
          <button
            type="button"
            onClick={() => setCount(Math.min(currentStyle.max_count, count + 1))}
            disabled={count >= currentStyle.max_count}
            className="w-10 h-10 rounded-full bg-card-bg border border-border flex items-center justify-center text-lg font-bold disabled:opacity-30 hover:bg-border/40 transition-colors"
          >
            +
          </button>
          <span className="text-sm text-muted ml-2">
            / 最大{currentStyle.max_count}
          </span>
        </div>
        {/* 合計ml表示 */}
        <p className="mt-2 text-sm text-accent font-medium">
          合計: {volumeMl.toLocaleString()}ml
        </p>
      </div>

      {/* メモ */}
      <div>
        <label className="block text-sm font-medium text-muted mb-1">メモ（任意）</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="味の感想など..."
          maxLength={500}
          rows={2}
          className="w-full px-3 py-2.5 bg-card-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
        />
      </div>

      {/* 写真 */}
      <div>
        <label className="block text-sm font-medium text-muted mb-1">写真（任意）</label>
        {photoPreview ? (
          <div className="relative">
            <img
              src={photoPreview}
              alt="プレビュー"
              className="w-full h-48 object-cover rounded-lg cursor-pointer active:opacity-80 transition-opacity"
              onClick={() => setPhotoZoom(true)}
            />
            <button
              type="button"
              onClick={handleRemovePhoto}
              className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            {/* 拡大アイコン */}
            <div className="absolute bottom-2 right-2 bg-black/40 text-white rounded-full p-1.5 pointer-events-none">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
                <path d="M11 8v6M8 11h6" />
              </svg>
            </div>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-32 bg-card-bg border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-border/20 transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-sm text-muted mt-2">写真を選択</span>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </label>
        )}
      </div>

      {/* 保存ボタン */}
      <button
        data-tutorial="save"
        type="submit"
        disabled={saving || !location.trim()}
        className="w-full py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {saving ? '保存中...' : isEdit ? '更新する' : '記録する'}
      </button>
      {/* チュートリアル（新規記録時のみ） */}
      {!isEdit && <Tutorial steps={ADD_TUTORIAL_STEPS} storageKey={ADD_TUTORIAL_STORAGE_KEY} />}

      {/* 写真拡大オーバーレイ */}
      {photoZoom && photoPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-in fade-in duration-200"
          onClick={() => setPhotoZoom(false)}
          style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
          <img
            src={photoPreview}
            alt="拡大プレビュー"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            style={{ animation: 'zoomIn 0.2s ease-out' }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={() => setPhotoZoom(false)}
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      {/* 続けて登録しますか？ダイアログ */}
      {showContinueDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
          <div
            className="bg-card-bg rounded-2xl p-6 mx-6 max-w-sm w-full shadow-2xl"
            style={{ animation: 'zoomIn 0.2s ease-out' }}
          >
            <div className="text-center mb-2">
              <span className="text-3xl">🍻</span>
            </div>
            <h3 className="text-lg font-bold text-center mb-2" style={{ color: '#3C2A1E' }}>
              記録しました！
            </h3>
            <p className="text-sm text-center mb-5" style={{ color: '#8B7355' }}>
              続けてもう1杯記録しますか？<br />
              <span className="text-xs">（日付と場所は引き継がれます）</span>
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleFinish}
                className="flex-1 py-2.5 rounded-lg border border-border text-sm font-bold transition-colors"
                style={{ color: '#8B7355' }}
              >
                いいえ
              </button>
              <button
                type="button"
                onClick={handleContinue}
                className="flex-1 py-2.5 rounded-lg text-white text-sm font-bold transition-colors"
                style={{ background: '#C53D43' }}
              >
                はい、続ける
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </form>
  );
}
