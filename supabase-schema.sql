-- Smart Study: schema inicial para Supabase/Postgres
-- Cole este SQL no Supabase SQL Editor antes de preencher SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY.

create extension if not exists pgcrypto;

create table if not exists public.journeys (
  id uuid primary key,
  created_at timestamptz not null default now(),
  pdf_file text,
  metadata jsonb not null default '{}'::jsonb,
  provider text not null default 'unknown',
  answer_review_status text,
  pdf_text_extracted boolean not null default false,
  journey jsonb not null default '{}'::jsonb,
  student_name text not null default '',
  student_classroom text not null default '',
  student_shift text not null default '',
  student_name_norm text not null default '',
  student_classroom_norm text not null default '',
  student_shift_norm text not null default '',
  subject text not null default ''
);

create table if not exists public.student_progress (
  id bigint generated always as identity primary key,
  student_name text not null default '',
  student_classroom text not null default '',
  student_shift text not null default '',
  student_name_norm text not null default '',
  student_classroom_norm text not null default '',
  student_shift_norm text not null default '',
  journey_id uuid not null references public.journeys(id) on delete cascade,
  answers jsonb not null default '{}'::jsonb,
  total_questions integer not null default 0 check (total_questions >= 0),
  completed_questions integer not null default 0 check (completed_questions >= 0),
  correct_questions integer not null default 0 check (correct_questions >= 0),
  xp integer not null default 0 check (xp >= 0),
  status text not null default 'not_started' check (status in ('not_started', 'in_progress', 'completed')),
  updated_at timestamptz not null default now(),
  unique (student_name_norm, student_classroom_norm, student_shift_norm, journey_id)
);

-- Migração segura para projetos que já criaram as tabelas antes do campo turno.
alter table public.journeys add column if not exists student_shift text not null default '';
alter table public.journeys add column if not exists student_shift_norm text not null default '';
alter table public.student_progress add column if not exists student_shift text not null default '';
alter table public.student_progress add column if not exists student_shift_norm text not null default '';
alter table public.student_progress drop constraint if exists student_progress_student_name_norm_student_classroom_norm_journey_id_key;
create unique index if not exists student_progress_identity_shift_key
  on public.student_progress (student_name_norm, student_classroom_norm, student_shift_norm, journey_id);

-- Consultas da área do aluno filtram por nome normalizado + turma e ordenam por data.
drop index if exists public.journeys_student_lookup_idx;
create index if not exists journeys_student_lookup_idx
  on public.journeys (student_name_norm, student_classroom_norm, student_shift_norm, created_at desc);

-- Upsert/leitura de progresso usa nome + turma + jornada.
drop index if exists public.student_progress_lookup_idx;
create index if not exists student_progress_lookup_idx
  on public.student_progress (student_name_norm, student_classroom_norm, student_shift_norm, journey_id);

-- Opcional para filtros futuros do dashboard do professor.
create index if not exists journeys_subject_created_idx
  on public.journeys (subject, created_at desc);

alter table public.journeys enable row level security;
alter table public.student_progress enable row level security;

-- Este protótipo usa SUPABASE_SERVICE_ROLE_KEY no servidor Node.
-- A service role ignora RLS, então não crie políticas públicas enquanto não houver login real.
