# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **single-service Next.js portfolio website** (personal site for "Filipe Lehmann"). There is no backend, database, or other service to run.

- Stack: **Next.js App Router + TypeScript + shadcn/ui + Tailwind CSS v4 + next-intl** (locales `en`, `pt`). Source lives in `app/`, `components/`, `content/`, `i18n/`, `lib/`. (The old Chakra Pages Router code was removed in the `ROADMAP.md` Phase 0 rebuild.)
- Package manager: **npm** (`package-lock.json`). Node 22 works fine despite the README saying Node 18+.
- Commands (in `package.json`): `npm run dev` (dev server on http://localhost:3000), `npm run build`, `npm run lint`, `npm run format`.
- Routing: `/` redirects to `/en` (next-intl middleware, `localePrefix: 'always'`). Routes: `/[locale]` (portfolio) and `/[locale]/cv` (print-ready CV). Locales: `en`, `pt`.
- Content lives in typed modules under `content/` (portfolio) and `content/cv/` (CV, sourced from `public/resume.pdf`), accessed via `lib/content.ts` (`getContent`, `getCvContent`). next-intl messages are intentionally empty (`{}`) — all copy comes from the typed content layer.
- IMPORTANT dev caveat: do **not** run `npm run build` while `npm run dev` is running. The production build overwrites `.next/`, which corrupts the running dev server (errors like `SegmentViewNode ... not found in the React Client Manifest` / `__webpack_modules__[moduleId] is not a function`, HTTP 500). Fix: stop dev, `rm -rf .next`, then `npm run dev` again. Run build in a separate window only when the dev server is stopped.
- The dev server compiles routes on first request, so the first page load after startup is slower than subsequent loads.
