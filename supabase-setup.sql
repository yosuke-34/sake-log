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
