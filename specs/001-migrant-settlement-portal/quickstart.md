# Quickstart: Migrant Settlement Portal (MVP)

This feature's MVP is: **Landing → Documents/Checklist**, with **optional auth** and a **language switcher**.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn
- A Supabase project with Postgres database
- Supabase credentials (URL, anon key, service role key, and database URL)

## Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in these required variables in `.env.local`:
   - `NEXT_PUBLIC_APP_URL` - Your app URL (e.g., http://localhost:3000 for local dev)
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
   - `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (server-only)
   - `DATABASE_URL` - Your Postgres connection string (from Supabase)

## Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

3. **Apply database schema:**
   ```bash
   npx prisma db push
   ```

4. **Seed the database with sample data:**
   ```bash
   npx prisma db seed
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open http://localhost:3000** in your browser

## Verification Checklist

After starting the app, verify these features work:

### Core Features (Public)
- ✅ Landing page loads and is mobile-friendly
- ✅ "How it works" section is visible
- ✅ Documents checklist page loads (`/documents`)
- ✅ Document items show title, description, and "why needed"
- ✅ Expandable items show additional guidance when clicked
- ✅ Empty state appears if no documents exist

### Multilingual Support
- ✅ Language switcher appears in navbar
- ✅ Switching language updates all UI text
- ✅ Document checklist content changes based on selected language
- ✅ Supports: English, German, French, Italian

### Authentication (Optional)
- ✅ Sign up page creates new accounts (`/signup`)
- ✅ Login page authenticates users (`/login`)
- ✅ Logout button appears when logged in
- ✅ Password reset flow works (`/forgot-password`)
- ✅ Error messages are user-friendly (no sensitive details leaked)

### Responsive Design
- ✅ Layout works on mobile viewport (320px+)
- ✅ Navigation adapts to smaller screens
- ✅ Document cards are readable on mobile

## Common Issues

### Database Connection Errors
- Verify `DATABASE_URL` is correct in `.env.local`
- Ensure Supabase project is active
- Check that database migrations ran successfully

### Auth Not Working
- Verify Supabase URL and keys are correct
- Check that Supabase auth is enabled in your project
- Ensure redirect URLs are configured in Supabase dashboard

### Documents Not Loading
- Run `npx prisma db seed` to populate sample data
- Check browser console for API errors
- Verify API route is accessible at `/api/documents`

## Production Deployment

Before deploying:
1. Set all environment variables in your hosting platform
2. Run `npm run build` to verify production build works
3. Test with `npm start` locally before deploying
4. Configure Supabase redirect URLs for your production domain


