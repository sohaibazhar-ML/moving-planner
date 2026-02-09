# Moving Planner Constitution

## Core Principles

### I. Full-Stack Baseline
A dynamic full stack web app must include a UI, server/API, and persistence layer; each must be runnable locally with a documented entry point.

### II. Secure by Default
All external inputs are validated; authentication/authorization required for protected actions; secrets never committed to the repo.

### III. Basic Reliability
Core user flows have automated tests and error handling; failures are logged with enough context to debug.

### IV. Performance and UX
Pages respond quickly, show loading/empty states, and handle slow or failed requests without breaking the UI.

### V. Simplicity
Prefer the simplest solution that meets requirements; avoid premature abstraction.

## Additional Constraints
Use environment-based configuration for secrets and external services; document required env vars in README.

## Development Workflow
Changes require a short description, tests updated as needed, and lint/type checks passing locally.

## Governance
This constitution is the minimum standard; amendments must be documented and dated in this file.

**Version**: 1.0.0 | **Ratified**: 2026-02-09 | **Last Amended**: 2026-02-09
