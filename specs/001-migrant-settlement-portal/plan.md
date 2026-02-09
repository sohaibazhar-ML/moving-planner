# Implementation Plan: Migrant Settlement Portal (MVP)

**Branch**: `001-migrant-settlement-portal` | **Date**: 2026-02-09 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/001-migrant-settlement-portal/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a responsive, mobile-ready web app that lets users view a generalized settlement documents checklist from a landing page, with optional authentication (sign up / login / logout / password reset) and a language switcher.

Technical approach: Next.js (TypeScript) app with Supabase for authentication and Postgres, Prisma ORM for persistence, and a simple content model for documents/checklist items.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript (Next.js)  
**Primary Dependencies**: Next.js, React, Supabase, Prisma  
**Storage**: Supabase Postgres  
**Testing**: Unit + integration tests for core flows (auth + checklist retrieval)  
**Target Platform**: Web (modern evergreen browsers), responsive/mobile-first
**Project Type**: Web application  
**Performance Goals**: Checklist page usable on mobile; perceived load under ~2s on typical connections  
**Constraints**: Validate all inputs; secrets in env vars; avoid leaking auth errors; keep MVP minimal  
**Scale/Scope**: MVP (Landing + Checklist + Auth + i18n), small user base initially

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Full-Stack Baseline**: PASS — UI + server/API routes + Postgres persistence (Supabase) with local run instructions.
- **Secure by Default**: PASS — validate inputs, use Supabase auth, do not commit secrets, protect any authenticated endpoints.
- **Basic Reliability**: PASS — tests for core flows, error handling + logging.
- **Performance and UX**: PASS — responsive UI, loading/empty/error states.
- **Simplicity**: PASS — keep scope minimal; avoid premature abstraction.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
```text
# Next.js app (App Router)
app/
├── layout.tsx
├── page.tsx                 # Landing
├── documents/page.tsx        # Checklist view
├── (auth)/
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   └── forgot-password/page.tsx
└── api/
    ├── documents/route.ts    # Read checklist items (public)
    └── auth/                 # Auth callbacks if needed

components/
├── Navbar.tsx
├── LanguageSwitcher.tsx
└── DocumentList.tsx

lib/
├── supabase/
├── prisma.ts
└── i18n.ts

prisma/
└── schema.prisma

tests/
├── integration/
└── unit/
```

**Structure Decision**: Single Next.js app using App Router with route handlers for API endpoints; Prisma schema for DB; shared UI components for responsive layout and language switching.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
