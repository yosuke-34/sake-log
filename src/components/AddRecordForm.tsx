'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, supabaseConfigured } from '@/lib/supabase';
import { DRINK_TYPES, DRINK_STYLES, DrinkType, DrinkRecord } from '@/types';
import { BRAND_SELECTABLE_TYPES, PREFECTURES, BRAND_DATA, BrandOption } from '@/data/brands';

interface AddRecordFormProps {
  editRecord?: DrinkRecord;
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

export default function AddRecordForm({ editRecord }: AddRecordFormProps) {
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
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(editRecord?.photo_url || null);
  const [existingPhotoUrl, setExistingPhotoUrl] = useState<string | null>(editRecord?.photo_url || null);
  const [saving, setSaving] = useState(false);

  // 飲み方・杯数の状態
  const [styleIndex, setStyleIndex] = useState(initialResolved.styleIndex);
  const [count, setCount] = useState(initialResolved.count);

  // 銘柄選択モード
  const isBrandSelectable = (BRAND_SELECTABLE_TYPES as readonly string[]).includes(drinkType);
  const [brandMode, setBrandMode] = useState<'select' | 'free'>(
    isEdit ? 'free' : 'select'
  );
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>('');
  const [selectedMaker, setSelectedMaker] = useState<string>('');

  // 選択中の都道府県に対応するメーカーリスト
  const availableBrands = useMemo(() => {
    if (!isBrandSelectable || !selectedPrefecture) return [];
    const typeData = BRAND_DATA[drinkType as keyof typeof BRAND_DATA];
    if (!typeData) return [];
    return (typeData as Record<string, BrandOption[]>)[selectedPrefecture] || [];
  }, [drinkType, selectedPrefecture, isBrandSelectable]);

  // 現在の種類に対応する飲み方リスト
  const styles = useMemo(() => DRINK_STYLES[drinkType], [drinkType]);
  const currentStyle = styles[styleIndex];
  const volumeMl = currentStyle.unit_ml * count;

  // 種類が変わったらリセット
  const handleDrinkTypeChange = (type: DrinkType) => {
    setDrinkType(type);
    setStyleIndex(0);
    setCount(1);
    // 銘柄選択もリセット
    setSelectedPrefecture('');
    setSelectedMaker('');
    setBrand('');
    setBrandMode((BRAND_SELECTABLE_TYPES as readonly string[]).includes(type) ? 'select' : 'free');
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
  };

  // メーカー選択
  const handleMakerSelect = (option: BrandOption) => {
    setSelectedMaker(option.maker);
    setBrand(option.brand);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setExistingPhotoUrl(null);
      const reader = new FileReader();
      reader.onload = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
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

      const recordData = {
        date,
        location: location.trim(),
        drink_type: drinkType,
        brand: brand.trim() || '不明',
        photo_url: photoUrl,
        note: note.trim() || null,
        volume_ml: volumeMl,
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

      router.push('/');
    } catch (err) {
      console.error('保存エラー:', err);
      alert('保存に失敗しました。Supabaseの設定を確認してください。');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* 日付 */}
      <div>
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
      <div>
        <label className="block text-sm font-medium text-muted mb-1">場所</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="例: 居酒屋○○、自宅"
          className="w-full px-3 py-2.5 bg-card-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40"
          required
        />
      </div>

      {/* お酒の種類 */}
      <div>
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
              onClick={() => { setBrandMode('select'); setBrand(''); setSelectedPrefecture(''); setSelectedMaker(''); }}
              className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-colors ${
                brandMode === 'select'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-muted'
              }`}
            >
              リストから選択
            </button>
            <button
              type="button"
              onClick={() => { setBrandMode('free'); setBrand(''); setSelectedPrefecture(''); setSelectedMaker(''); }}
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

        {isBrandSelectable && brandMode === 'select' ? (
          <div className="space-y-3">
            {/* 都道府県選択 */}
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

            {/* メーカー・銘柄選択 */}
            {selectedPrefecture && (
              <div>
                <label className="block text-xs text-muted mb-1">
                  酒造・醸造所・メーカー
                  {availableBrands.length > 0 && (
                    <span className="ml-1 text-accent">（{availableBrands.length}件）</span>
                  )}
                </label>
                {availableBrands.length > 0 ? (
                  <div className="max-h-48 overflow-y-auto bg-card-bg border border-border rounded-lg divide-y divide-border/50">
                    {availableBrands.map((option, i) => (
                      <button
                        key={`${option.maker}-${i}`}
                        type="button"
                        onClick={() => handleMakerSelect(option)}
                        className={`w-full px-3 py-2.5 text-left text-sm transition-colors flex justify-between items-center ${
                          selectedMaker === option.maker
                            ? 'bg-accent/10 text-accent'
                            : 'hover:bg-border/20'
                        }`}
                      >
                        <div>
                          <span className="font-medium">{option.maker}</span>
                        </div>
                        <span className={`text-xs ${selectedMaker === option.maker ? 'text-accent font-bold' : 'text-muted'}`}>
                          {option.brand}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-muted py-2">
                    {selectedPrefecture}の{drinkType}メーカーはリストにありません。「任意入力」をお使いください。
                  </p>
                )}
              </div>
            )}

            {/* 選択結果表示 */}
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
        ) : (
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="例: プレミアムモルツ、獺祭（未入力で「不明」）"
            className="w-full px-3 py-2.5 bg-card-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
        )}
      </div>

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
              className="w-full h-48 object-cover rounded-lg"
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
        type="submit"
        disabled={saving || !location.trim()}
        className="w-full py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {saving ? '保存中...' : isEdit ? '更新する' : '記録する'}
      </button>
    </form>
  );
}
