# Moving Planner

A modern web application to help migrants settle in a new area by providing essential documents and guidance.

## Quick Start

For detailed setup and development instructions, see:
- [Quickstart Guide](./specs/001-migrant-settlement-portal/quickstart.md)
- [Feature Specification](./specs/001-migrant-settlement-portal/spec.md)
- [Implementation Plan](./specs/001-migrant-settlement-portal/plan.md)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```

3. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase Postgres + Prisma ORM
- **Authentication**: Supabase Auth

## Project Structure

- `/app` - Next.js App Router pages and API routes
- `/components` - Reusable React components
- `/lib` - Utility functions and shared logic
- `/prisma` - Database schema and migrations
- `/specs` - Feature specifications and planning documents

