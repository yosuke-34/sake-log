-- ==========================================
-- 酒ログ - Supabase セットアップSQL
-- ==========================================
-- Supabase ダッシュボードの SQL Editor で実行してください

-- 1. drink_records テーブル作成
create table if not exists drink_records (
  id uuid default gen_random_uuid() primary key,
  date date not null,
  location text not null,
  drink_type text not null,
  brand text not null,
  photo_url text,
  note text,
  created_at timestamptz default now()
);

-- 2. RLS (Row Level Security) を無効化（個人利用のため）
-- ※ 複数ユーザー対応する場合は RLS を有効にして認証を追加してください
alter table drink_records enable row level security;

create policy "Allow all access" on drink_records
  for all
  using (true)
  with check (true);

-- 3. 写真用 Storage バケット作成
insert into storage.buckets (id, name, public)
values ('drink-photos', 'drink-photos', true)
on conflict (id) do nothing;

-- 4. Storage のアクセスポリシー
create policy "Allow public read" on storage.objects
  for select
  using (bucket_id = 'drink-photos');

create policy "Allow public insert" on storage.objects
  for insert
  with check (bucket_id = 'drink-photos');

create policy "Allow public delete" on storage.objects
  for delete
  using (bucket_id = 'drink-photos');

-- 5. 日本酒の特定名称酒カラム追加
-- ※ 既存テーブルに追加する場合はこのALTER TABLEのみ実行
alter table drink_records add column if not exists sake_type text;

-- 6. デバイス別データ分離用カラム追加
-- ※ 既存テーブルに追加する場合はこの2行のみ実行
alter table drink_records add column if not exists device_id text;
create index if not exists idx_drink_records_device_id on drink_records(device_id);
