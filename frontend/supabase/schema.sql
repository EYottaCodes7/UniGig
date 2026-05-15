-- Paste ONLY the SQL below into Supabase → SQL Editor → New query (no paths, no quotes around the whole script).

create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  title text not null,
  category text not null,
  description text not null,
  price numeric not null,
  tags text,
  contact_methods text,
  image_url text,
  created_at timestamptz not null default now()
);

alter table public.listings enable row level security;

drop policy if exists "listings_select_all" on public.listings;
create policy "listings_select_all" on public.listings for select using (true);

drop policy if exists "listings_insert_own" on public.listings;
create policy "listings_insert_own" on public.listings for insert
  with check (auth.uid() = user_id);

drop policy if exists "listings_update_own" on public.listings;
create policy "listings_update_own" on public.listings for update
  using (auth.uid() = user_id);

insert into storage.buckets (id, name, public)
values ('listing-images', 'listing-images', true)
on conflict (id) do nothing;

drop policy if exists "listing_images_read" on storage.objects;
create policy "listing_images_read" on storage.objects for select
  using (bucket_id = 'listing-images');

drop policy if exists "listing_images_insert" on storage.objects;
create policy "listing_images_insert" on storage.objects for insert
  with check (
    bucket_id = 'listing-images'
    and auth.role() = 'authenticated'
  );
