# Quickstart: Migrant Settlement Portal (MVP)

This feature’s MVP is: **Landing → Documents/Checklist**, with **optional auth** and a **language switcher**.

## Prerequisites

- Node.js (LTS recommended)
- A Supabase project (or local Supabase) with a Postgres database

## Environment Variables

Set these in `.env.local` (names may be adjusted to match the repository’s conventions):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only; do not expose to client)
- `DATABASE_URL` (Postgres connection string for Prisma)

## Local Development

1. Install dependencies
2. Apply database migrations (Prisma)
3. Run the dev server
4. Open the app in the browser and verify:
   - Landing loads and is mobile-friendly
   - Documents checklist loads and shows loading/empty/error states
   - Language switcher changes UI language
   - Auth pages allow sign up / login / logout / password reset

## Minimal Verification Checklist

- Public documents checklist is accessible without logging in
- Invalid form input shows friendly errors without exposing sensitive details
- Responsive layout works on a narrow/mobile viewport


