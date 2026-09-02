# diag-space

Personal portfolio site: Next.js (App Router), TypeScript, and Tailwind.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the production domain when you have one.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint

## Hosting

Connect the GitHub repo to Vercel. Preview URLs are created for each pull request; `main` deploys to production. You do not need a custom GitHub Actions pipeline for deploys.

## SEO starter

- Per-page metadata in `app/**/page.tsx` and defaults in `app/layout.tsx`
- `app/sitemap.ts` and `app/robots.ts`
- JSON-LD `WebSite` in `components/json-ld.tsx`
