/* ============================================================
   CELURES — ADMIN BACKEND DATABASE SCHEMA
   Paste this ENTIRE file into Supabase → SQL Editor → New Query
   → Run. This creates everything needed: the orders table, the
   staff/roles table, and the security rules that control who can
   see and change what.

   SETUP STEPS (do these in order):
   1. Go to supabase.com and either open your existing Celures
      project, or create a new one — either works, this is just
      more tables in the same database.
   2. Left sidebar → SQL Editor → New Query.
   3. Paste this whole file in, click "Run".
   4. Left sidebar → Project Settings → API. Copy the "Project URL"
      and the "anon public" key (NOT the service_role key).
   5. Open admin/js/supabase-config.js and paste those two values
      in (instructions are in that file too).
   6. Create your first staff login: Left sidebar → Authentication
      → Users → Add User. Enter an email + password for yourself.
   7. Go back to SQL Editor and run this (replace the email):

      insert into staff (id, email, role)
      select id, email, 'admin'
      from auth.users
      where email = 'you@example.com';

      This makes that login an admin (sees Reports). For a
      fulfillment team member instead, use role 'staff' — they'll
      see Orders and Dispatch, but not Reports.
   ============================================================ */

create extension if not exists "pgcrypto";

-- ---------- ORDERS ----------
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  order_id text unique not null,
  name text not null,
  phone text not null,
  district text not null,
  address text not null,
  items text not null,
  normal_price numeric not null default 0,
  discount numeric not null default 0,
  subtotal numeric not null default 0,
  delivery numeric not null default 0,
  total numeric not null default 0,
  is_confirmed boolean not null default false,
  confirmed_at timestamptz,
  is_dispatched boolean not null default false,
  dispatched_at timestamptz,
  dispatch_date date,
  is_cancelled boolean not null default false,
  cancelled_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists orders_created_at_idx on orders (created_at);
create index if not exists orders_dispatch_date_idx on orders (dispatch_date);

-- If you already had the orders table from before (without cancellation
-- tracking), this adds the missing columns without touching your data.
alter table orders add column if not exists is_cancelled boolean not null default false;
alter table orders add column if not exists cancelled_at timestamptz;

-- ---------- STAFF / ROLES ----------
-- One row per team member who's allowed to log in. "id" matches
-- their Supabase Auth user id. role is 'admin' or 'staff'.
create table if not exists staff (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  role text not null default 'staff' check (role in ('admin', 'staff')),
  created_at timestamptz not null default now()
);

-- ---------- SECURITY (Row Level Security) ----------
alter table orders enable row level security;
alter table staff enable row level security;

-- Anyone (including a logged-out customer on checkout.html) can
-- CREATE a new order — this is how orders get in from your website.
drop policy if exists "Anyone can place an order" on orders;
create policy "Anyone can place an order" on orders
  for insert
  with check (true);

-- Only logged-in staff/admins can VIEW orders.
drop policy if exists "Staff can view orders" on orders;
create policy "Staff can view orders" on orders
  for select
  using (exists (select 1 from staff where staff.id = auth.uid()));

-- Only logged-in staff/admins can UPDATE orders (toggles, dispatch date).
drop policy if exists "Staff can update orders" on orders;
create policy "Staff can update orders" on orders
  for update
  using (exists (select 1 from staff where staff.id = auth.uid()));

-- Only logged-in staff/admins can DELETE orders.
drop policy if exists "Staff can delete orders" on orders;
create policy "Staff can delete orders" on orders
  for delete
  using (exists (select 1 from staff where staff.id = auth.uid()));

-- A logged-in user can check their OWN staff row (to see their role).
drop policy if exists "Users can view own staff row" on staff;
create policy "Users can view own staff row" on staff
  for select
  using (auth.uid() = id);

-- ---------- ADMIN TEAM MANAGEMENT ----------
-- Helper function: is the currently logged-in user an admin? Used by
-- the policies below. SECURITY DEFINER means it checks this safely
-- without getting tangled in its own row-level security.
create or replace function is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (select 1 from staff where id = auth.uid() and role = 'admin');
$$;

-- Admins can see the full team list (needed for admin/team.html).
drop policy if exists "Admins can view all staff" on staff;
create policy "Admins can view all staff" on staff
  for select
  using (is_admin());

-- Admins can remove a team member's access (deletes their staff row,
-- which blocks them from logging into the admin panel).
drop policy if exists "Admins can delete staff" on staff;
create policy "Admins can delete staff" on staff
  for delete
  using (is_admin());
