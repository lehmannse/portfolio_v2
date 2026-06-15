# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **single-service Next.js portfolio website** (personal site for "Filipe Lehmann"). There is no backend, database, or other service to run.

- Stack note: the actual code uses the **Next.js Pages Router + Chakra UI** (`pages/`, `theme/`, `react-i18next`). `README.md`/`ROADMAP.md` describe an aspirational future stack (App Router + shadcn/Tailwind + next-intl) that is **not** what is currently implemented — trust `package.json` and `pages/` for the real setup.
- Package manager: **npm** (`package-lock.json`). Node 22 works fine despite the README saying Node 18+.
- Commands (already in `package.json`): `npm run dev` (dev server on http://localhost:3000), `npm run build`, `npm run lint`.
- On `next dev`/`next build` you will see a harmless warning: `Invalid next.config.js options detected: Unrecognized key(s) in object: 'pwa'`. This is expected — `next-pwa` config is ignored by Next 15 and PWA is disabled in dev. It does not affect the app.
- The dev server compiles routes on first request, so the first page load after startup is slower than subsequent loads.
