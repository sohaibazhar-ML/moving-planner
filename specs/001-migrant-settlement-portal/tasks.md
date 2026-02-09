# Tasks: Migrant Settlement Portal (MVP)

**Input**: Design documents in `specs/001-migrant-settlement-portal/` (`spec.md`, `plan.md`, `data-model.md`, `contracts/`, `quickstart.md`)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Next.js + TypeScript project and baseline tooling.

- [ ] T001 Initialize Next.js + TypeScript app at repo root (creates `package.json`, `app/`, `next.config.*`)
- [ ] T002 [P] Add UI styling setup for responsive design (e.g., Tailwind) in `tailwind.config.*`, `postcss.config.*`, `app/globals.css`
- [ ] T003 [P] Add `.env.example` with required keys in `.env.example`
- [ ] T004 [P] Add basic README quickstart pointing to `specs/001-migrant-settlement-portal/quickstart.md` in `README.md`
- [ ] T005 [P] Add code quality scripts (lint/typecheck) in `package.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before user stories.

- [ ] T006 Create Prisma setup and client helper in `prisma/schema.prisma` and `lib/prisma.ts`
- [ ] T007 [P] Create Supabase client helpers (browser + server) in `lib/supabase/client.ts` and `lib/supabase/server.ts`
- [ ] T008 Create data tables for documents and translations per `data-model.md` in `prisma/schema.prisma`
- [ ] T009 Create initial migration and seed scaffolding in `prisma/migrations/*` and `prisma/seed.ts`
- [ ] T010 [P] Add minimal i18n scaffolding (supported languages + UI dictionary loader) in `lib/i18n.ts`
- [ ] T011 [P] Create shared layout + responsive navbar shell in `app/layout.tsx` and `components/Navbar.tsx`
- [ ] T012 [P] Implement language switcher UI + persistence (query param or cookie) in `components/LanguageSwitcher.tsx` and `lib/i18n.ts`
- [ ] T013 Add global loading/empty/error UI primitives in `components/LoadingState.tsx` and `components/EmptyState.tsx`

**Checkpoint**: Foundation ready — app boots locally, environment variables documented, DB schema defined, and shared UI shell exists.

---

## Phase 3: User Story 1 — Landing → Documents Checklist (Priority: P1) 🎯 MVP

**Goal**: A visitor can open a sleek landing page, switch language, and view a generalized documents checklist with details.

**Independent Test**: With no account, open `/`, switch language, navigate to `/documents`, see list populated; open an item to see description/why-needed/guidance; observe loading/error/empty states.

### Implementation

- [ ] T014 [US1] Build landing page sections (hero, “How it works”, CTA) in `app/page.tsx`
- [ ] T015 [US1] Create documents checklist page route in `app/documents/page.tsx`
- [ ] T016 [P] [US1] Create documents list + item details components in `components/DocumentList.tsx` and `components/DocumentItemCard.tsx`
- [ ] T017 [US1] Implement public documents API handler per contract in `app/api/documents/route.ts`
- [ ] T018 [US1] Wire documents page to fetch `/api/documents?lang=...` and render loading/empty/error states in `app/documents/page.tsx`
- [ ] T019 [US1] Implement “unsupported language” handling (defaults to English) in `lib/i18n.ts` and `app/api/documents/route.ts`
- [ ] T020 [US1] Add seed data for at least 4 languages (en/de/fr/it) in `prisma/seed.ts`
- [ ] T021 [US1] Ensure mobile-first layout and accessible interactions (keyboard focus, headings, contrast) in `app/page.tsx`, `app/documents/page.tsx`, `components/*`

**Checkpoint**: US1 complete — landing + documents checklist works for anonymous users, is responsive, and supports language switching.

---

## Phase 4: User Story 2 — Authentication (Optional) (Priority: P2)

**Goal**: Users can sign up, log in, log out, and request password reset; documents remain accessible without auth.

**Independent Test**: Visit auth pages, complete signup/login/logout/reset flows, then confirm `/documents` still works while signed out.

### Implementation

- [ ] T022 [US2] Create auth route group and pages in `app/(auth)/login/page.tsx`, `app/(auth)/signup/page.tsx`, `app/(auth)/forgot-password/page.tsx`
- [ ] T023 [US2] Implement signup flow using Supabase in `app/(auth)/signup/page.tsx` and `lib/supabase/client.ts`
- [ ] T024 [US2] Implement login flow using Supabase in `app/(auth)/login/page.tsx` and `lib/supabase/client.ts`
- [ ] T025 [US2] Implement password reset request flow in `app/(auth)/forgot-password/page.tsx`
- [ ] T026 [US2] Add logout action and navbar state (show login/logout) in `components/Navbar.tsx` and `lib/supabase/*`
- [ ] T027 [US2] Ensure auth errors are user-friendly and do not leak sensitive details in `app/(auth)/*`

**Checkpoint**: US2 complete — auth flows work; documents remain public; UI stays responsive on mobile.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Hardening, UX refinement, and documentation completeness.

- [ ] T028 [P] Add input validation and rate-limit friendly UX for auth forms in `app/(auth)/*`
- [ ] T029 [P] Add better empty state messaging when documents are missing in `app/documents/page.tsx` and `components/EmptyState.tsx`
- [ ] T030 Improve performance (avoid layout shift, optimize images/fonts) in `app/layout.tsx` and `app/page.tsx`
- [ ] T031 Security pass: confirm env vars usage and no secrets in repo in `.env.example` and `README.md`
- [ ] T032 Update `specs/001-migrant-settlement-portal/quickstart.md` with exact commands used in this repo (install, migrate, seed, dev) in `specs/001-migrant-settlement-portal/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)** → blocks everything else
- **Phase 2 (Foundational)** → blocks all user stories
- **Phase 3 (US1)** → MVP; can ship after completion
- **Phase 4 (US2)** → optional; can be done after US1
- **Phase 5 (Polish)** → after desired user stories

### User Story Dependencies

- **US1** depends on Phase 1–2 only
- **US2** depends on Phase 1–2 only (and should not block US1)

### Parallel Opportunities

- Tasks marked **[P]** can be done in parallel (different files, minimal dependencies)
- Within Phase 2, i18n + UI shell + supabase helpers can proceed in parallel once Prisma scaffolding exists

---

## Parallel Example: US1

```bash
# Can be worked in parallel after Phase 2:
T014 app/page.tsx
T016 components/DocumentList.tsx + components/DocumentItemCard.tsx
T017 app/api/documents/route.ts
T020 prisma/seed.ts
```


