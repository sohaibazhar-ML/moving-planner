# Research: Migrant Settlement Portal (MVP)

**Date**: 2026-02-09  
**Spec**: [spec.md](./spec.md)  
**Plan**: [plan.md](./plan.md)

## Decisions

### Decision: Next.js (TypeScript) as the web framework
**Rationale**: Strong ecosystem, SSR/SSG/CSR flexibility, good support for modern responsive UIs and route-level loading/error states.
**Alternatives considered**: Other React frameworks or SPA-only approach (rejected for slower time-to-ship and weaker built-in routing/data patterns).

### Decision: Supabase for authentication and database hosting
**Rationale**: Managed auth + Postgres in one place, good local dev story, straightforward integration with Next.js.
**Alternatives considered**: Self-hosted auth + separate DB provider (rejected for extra ops and integration overhead at MVP).

### Decision: Prisma for database access
**Rationale**: Type-safe data access and migrations, improves developer velocity and reduces runtime data-shape errors.
**Alternatives considered**: Direct SQL queries (rejected to keep app code simpler and safer).

### Decision: Public checklist + optional auth
**Rationale**: Matches MVP scope (landing → documents). Auth is included as a foundation without forcing it for basic value.
**Alternatives considered**: Auth-required content (rejected to reduce onboarding friction).

### Decision: i18n scope for MVP
**Rationale**: Provide a language switcher and ship an initial set of four languages (English, German, French, Italian) as per spec.
**Alternatives considered**: English-only (rejected because multilingual support is a core requirement).

## Key Best-Practice Notes (applied)

- Keep secrets in environment variables; never commit them.
- Validate input at boundaries (auth forms, any API endpoints).
- Use loading/empty/error states for checklist page and auth flows.
- Ensure responsive layout with mobile-first navigation and accessible interactions.


