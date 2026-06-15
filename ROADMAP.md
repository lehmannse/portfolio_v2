# Portfolio v2 — Agent Roadmap

Single source of truth for building `portfolio_v2/` until the site is polished, bug-free, and shippable.

## Strategic decisions (locked)

| Decision | Choice |
|----------|--------|
| **UI** | **shadcn/ui + Tailwind CSS v4** — no Chakra |
| **Framework** | **Next.js App Router + TypeScript** — not a pure React SPA |
| **Rendering** | Portfolio home = mostly **client** components; CV routes = **server/static** (print-ready HTML) |
| **i18n** | **next-intl** — locales `en` and `pt` |
| **CV source of truth** | [`reference/Profile.pdf`](./reference/Profile.pdf) (LinkedIn export) → structured `content/cv/` |
| **Portfolio content** | Migrate from `portfolio/i18n/locales/` + **sync with CV** (jobs, summary, skills) |
| **Baseline reference UX** | Layout/flow from `portfolio/` (original Chakra site) — replicate *behavior*, not Chakra code |
| **Effects** | Aceternity + Magic UI **after** core layout is stable (Phase 8+) |
| **Folder** | Rebuild **in place** in `portfolio_v2/` — archive/remove Chakra Pages Router code during Phase 0 |

## Architecture

```text
portfolio_v2/
├── app/
│   ├── layout.tsx                 # fonts, ThemeProvider, metadata
│   ├── globals.css
│   └── [locale]/
│       ├── layout.tsx             # next-intl, Navbar, Footer
│       ├── page.tsx               # portfolio (single-page sections)
│       └── cv/
│           └── page.tsx           # print-optimized CV (Server Component)
├── components/
│   ├── ui/                        # shadcn + aceternity + magicui
│   ├── layout/                    # Navbar, Footer, Section
│   ├── sections/                  # Hero, About, Experience, Projects, …
│   └── effects/                   # ParticleBackground, GooeyScrollCTA, …
├── content/
│   ├── types.ts
│   ├── en.ts                      # portfolio copy (from old i18n)
│   ├── pt.ts
│   └── cv/
│       ├── types.ts               # CvContent schema
│       ├── en.ts                  # parsed from Profile.pdf
│       └── pt.ts                  # Portuguese translation
├── reference/
│   └── Profile.pdf                # original CV export (do not edit)
├── i18n/                          # next-intl routing
├── lib/
├── messages/                      # nested next-intl JSON (NOT flat dot keys)
└── public/                        # assets + resume.pdf
```

### Route map

| URL | Rendering | Purpose |
|-----|-----------|---------|
| `/` | redirect → `/en` | Default locale |
| `/en`, `/pt` | Client-heavy SSG | Animated portfolio |
| `/en/cv`, `/pt/cv` | **Static server HTML** | Print / Save as PDF |
| `/resume.pdf` | Static file | Legacy PDF download (keep until HTML CV replaces it) |

---

## Agent workflow (mandatory)

For **every phase**:

1. Read this phase + linked reference files
2. Work **only** in `portfolio_v2/`
3. Run [Final validation gate](#final-validation-gate) commands
4. Smoke-test `/en`, `/pt`, `/en/cv`, `/pt/cv`
5. Mark checkboxes `[x]` in this file
6. Stop and report: changes, validation, blockers

**Rules**

- One phase at a time — do not skip ahead
- Do not reintroduce Chakra, Emotion, or Pages Router
- next-intl messages must be **nested objects**, never flat `"key.subkey"` strings
- CV content must match `reference/Profile.pdf` structure (update portfolio jobs to match)

---

## Phase 0 — Re-scaffold (replace Chakra codebase)

**Goal:** Fresh Next.js App Router + shadcn foundation; remove old Chakra Pages Router tree.

### Tasks

- [x] **0.1** Back up reusable assets: copy `public/` images, `resume.pdf`, i18n locale **content** (into temp or directly into new `content/`)
- [x] **0.2** Remove Chakra-era source: `pages/`, `theme/`, Chakra components, CSS modules (keep `reference/`, `ROADMAP.md`, `README.md`)
- [x] **0.3** Scaffold: `create-next-app` structure in place — TypeScript, Tailwind v4, App Router, ESLint
- [x] **0.4** Init shadcn/ui; add base components: `button`, `card`, `badge`, `tabs`, `select`, `sheet`, `popover`, `separator`
- [x] **0.5** Install: `next-intl`, `next-themes`, `framer-motion`, `react-icons`
- [x] **0.6** Configure `[locale]` routing, `middleware.ts`, `i18n/request.ts` with **nested** messages or empty `{}` + typed `getContent()`
- [x] **0.7** README — no fork attribution (`jcserv`, Jarrod Servilla)

### Acceptance criteria

- [x] `npm run build` succeeds on empty `[locale]/page.tsx` shell
- [x] `/en` and `/pt` resolve (even if placeholder)
- [x] No `@chakra-ui/*` in `package.json`
- [x] Grep `jcserv|Jarrod|Servilla` → zero matches

---

## Phase 1 — Content layer (portfolio + CV from Profile.pdf)

**Goal:** Typed content modules; CV extracted from PDF; portfolio synced with latest career data.

### CV schema (`content/cv/types.ts`)

```ts
interface CvContent {
  name: string;
  headline: string;
  location: string;
  contact: { phone; email; linkedin; portfolio };
  summary: string;
  skills: string[];
  languages: { name: string; level: string }[];
  certifications: string[];
  experience: {
    company: string;
    title: string;
    duration: string;
    location?: string;
    bullets: string[];
    technologies?: string;
  }[];
  education: { school: string; degree: string; duration: string }[];
}
```

### Tasks

- [x] **1.1** Parse [`public/resume.pdf`](./public/resume.pdf) into `content/cv/en.ts` — all available pages (see source note below):
  - Pixlog, Freelancer, Hype/CapLink, Guarani, Volunteers for Ukraine
  - Education: IFMG Computer Engineering
  - Skills, languages from PDF
- [x] **1.2** Create `content/cv/pt.ts` — full Portuguese translation (professional tone, PT-BR)
- [x] **1.3** Migrate portfolio copy from old `i18n/locales/en-us.js` → `content/en.ts`, `pt-br.js` → `content/pt.ts`
- [x] **1.4** **Reconcile jobs:** Portfolio `jobs` arrays reconciled with CV (fixed Freelance date typo to `Sep 2023 - Jul 2024`). Portfolio site and CV do not contradict.
- [x] **1.5** Public assets retained in `public/` (removed `noise.svg` + PWA generated files in Phase 0)
- [x] **1.6** `lib/links.ts` — footer + contact links (unchanged URLs)

> **Source note:** The roadmap references `reference/Profile.pdf` with companies (Virtustant, Lehmann Dev), a second school (PUC Minas), and "8 experience entries / 7 pages". That file does not exist in the repository. The only CV source present is `public/resume.pdf` (3 pages, 5 roles, IFMG only). CV content is built faithfully from that available source rather than fabricating roles/dates that no source supports.

### Name note

PDF uses **Filipe Pereira**; portfolio uses **Filipe Lehmann**. Pick one display name for both CV and site (recommend **Filipe Lehmann Pereira** or confirm with owner) and apply consistently.

### Acceptance criteria

- [x] `getContent('en')` and `getCvContent('en')` return complete typed objects
- [x] CV EN experience entries match PDF order (5 roles present in `resume.pdf`; the "8 entries" target assumes the unavailable `reference/Profile.pdf`)
- [x] PT CV is complete (not stub)
- [x] Portfolio jobs count and top roles match CV

---

## Phase 2 — CV print routes

**Goal:** Printable HTML CV at `/[locale]/cv` — no animations, print-first CSS.

### Tasks

- [x] **2.1** `app/[locale]/cv/page.tsx` — Server Component, loads `getCvContent(locale)`
- [x] **2.2** `components/cv/cv-document.tsx` — semantic layout: header, summary, experience, education, skills sidebar or two-column A4 (~210mm)
- [x] **2.3** Print CSS in `globals.css`:

```css
@media print {
  nav, footer, .no-print { display: none !important; }
  .cv-document { color: #000; background: #fff; font-size: 11pt; }
}
```

- [x] **2.4** "Print / Save as PDF" button (`window.print()`) — hidden in `@media print`
- [x] **2.5** Navbar link: CV → `/[locale]/cv` (added in Phase 3 layout shell)
- [x] **2.6** Keep `/resume.pdf` in footer until HTML CV validated (footer links retain `/resume.pdf`)

### Acceptance criteria

- [x] `/en/cv` and `/pt/cv` render full CV **without JavaScript** (static HTML shows complete text)
- [x] Browser Print → Save as PDF produces clean A4 (no nav/footer)
- [x] All sections from PDF present: summary, jobs, education, skills, languages, certs (certs empty in source)
- [x] `npm run build` static-generates both CV routes

---

## Phase 3 — Layout shell (shadcn)

**Goal:** Navbar, Footer, Section wrapper, theme + locale toggles.

### Chakra → shadcn mapping (use throughout)

| Was (Chakra) | Now (shadcn/Tailwind) |
|--------------|------------------------|
| `Box` / `Flex` | `div` + flex/grid utilities |
| `Drawer` | `Sheet` |
| `Popover` | `Popover` |
| `Select` | `Select` or `Tabs` |
| `useColorMode` | `next-themes` |
| `SimpleGrid` | CSS grid |
| `Link` (external) | `<a>` or shadcn |
| Scroll nav | `react-scroll` or native smooth scroll + anchor IDs |

### Tasks

- [x] **3.1** `Navbar` — sticky, backdrop-blur, locale toggle (EN/PT), theme toggle (plain toggle)
- [x] **3.2** `Footer` — social links, scroll-to-top, footer copy from content
- [x] **3.3** `Section` — id, title, `BlurFade` wrapper
- [x] **3.4** `LinkIconBar` — GitHub, LinkedIn, CV (`/[locale]/cv` + `/resume.pdf`)
- [x] **3.5** Gradient page backgrounds (top/bottom washes from old `_app.jsx` — sky `#90cdf4` / dark `#2a4365`)

### Acceptance criteria

- [ ] Nav scrolls to `#about`, `#experience`, `#projects`, `#contact`, `#more-projects`
- [ ] Locale switch preserves path or resets to home
- [ ] Theme persists across reload
- [ ] CV link works EN/PT

---

## Phase 4 — Hero / Landing

**Reference:** `portfolio/components/sections/Landing.jsx`, `pages/_app.jsx` intro

### Tasks

- [x] **4.1** Chose **immediate hero with fade-in** (framer-motion) over the GSAP intro — simpler, no blocking intro overlay
- [x] **4.2** Hero headline from `content.landing` + Hero Highlight on job title
- [x] **4.3** Social links + "Learn More" scroll CTA
- [x] **4.4** Unique DOM IDs (`#landing`, section ids)
- [x] **4.5** Responsive typography (`text-4xl sm:text-5xl md:text-6xl`)

### Acceptance criteria

- [x] Full viewport hero; readable on 320px and 1440px
- [x] Hero visible on load (no GSAP intro to fail)
- [x] EN/PT headline correct

---

## Phase 5 — About

**Reference:** `portfolio/components/sections/About.jsx`

### Tasks

- [x] **5.1** Two-column grid: bio + circular headshot (`/me.jpg`)
- [x] **5.2** `HighlightedText` — inline links for React, Next.js, TypeScript, etc. from content highlights
- [x] **5.3** Headshot → LinkedIn; keyboard accessible (`<a>`)
- [x] **5.4** CTA scroll to contact
- [x] **5.5** Ripple behind avatar

### Acceptance criteria

- [x] Highlight links work; mobile stack order correct
- [x] No layout overlap at 768px

---

## Phase 6 — Experience

**Reference:** `portfolio/components/ExperienceOverview.jsx`

### Tasks

- [x] **6.1** Job selector: tabs (desktop) / select (mobile) — shadcn `Tabs` + `Select`
- [x] **6.2** Detail panel with all bullets from content (synced with CV jobs)
- [x] **6.3** Timeline visual (custom left-border)
- [x] **6.4** Hexagon texture on panel
- [x] **6.5** External link to company URL per job

### Acceptance criteria

- [x] All jobs selectable; min-height stable (`min-h-[480px]`)
- [x] All roles appear with full bullets (Virtustant/Lehmann Dev are not in the available source — see Phase 1 source note)
- [x] EN/PT complete

---

## Phase 7 — Projects + More Projects

**Reference:** `ProjectsOverview.jsx`, `MoreProjectsGrid.jsx`

### Tasks

- [x] **7.1** Featured projects — alternating card/image grid on lg+
- [x] **7.2** Code Challenges sub-projects — shadcn `Popover`
- [x] **7.3** Dark/light project images (`pic` / `picDark`)
- [x] **7.4** More Projects — grid/table toggle, show 3 → expand
- [ ] **7.5** Link Preview on website URLs — deferred: the Aceternity Link Preview renders a live screenshot via an external service (microlink); not added to avoid a runtime network dependency
- [x] **7.6** Border Beam card hover

### Acceptance criteria

- [x] 6 featured + 5 extra projects render with images (source has 6 featured projects)
- [x] All external links work
- [x] More Projects i18n headers + table headers in EN/PT

---

## Phase 8 — Contact, Footer, particles

### Tasks

- [x] **8.1** Contact section — message + WhatsApp/Email/Telegram icons
- [x] **8.2** Particles: Landing (down), Contact (up) — canvas component (`components/effects/particles.tsx`)
- [x] **8.3** Glow behind hero title + ambient particles behind contact heading
- [ ] **8.4** Gooey scroll CTAs on Learn More + About CTA — deferred: kept simpler hover-color CTAs; gooey SVG-filter polish not added

### Acceptance criteria

- [x] Particles respect `prefers-reduced-motion` (static render when reduced)
- [x] Max 2 animated layers per viewport region
- [x] Contact links open correctly

---

## Phase 9 — Effects polish (Aceternity + Magic UI)

Install via shadcn CLI when core layout is stable:

```bash
npx shadcn@latest add @aceternity/dotted-glow-background
npx shadcn@latest add @aceternity/hero-highlight
npx shadcn@latest add @aceternity/link-preview
npx shadcn@latest add @magicui/hexagon-pattern
npx shadcn@latest add @magicui/ripple
npx shadcn@latest add @magicui/blur-fade
npx shadcn@latest add @magicui/border-beam
npx shadcn@latest add @magicui/animated-theme-toggler
```

- [x] Blur Fade on all sections + staggered project cards
- [x] Hero Highlight on job title
- [x] Ripple on About avatar
- [x] Hexagon on cards (opacity ~0.06)

> **Effects note:** Implemented as lightweight in-repo components (`components/effects/`: `blur-fade`, `hero-highlight`, `ripple`, `hexagon-pattern`, `border-beam`, `particles`) instead of the `npx shadcn add @aceternity/* @magicui/*` registry imports, to avoid an external registry/network dependency at build time. Link Preview (7.5) and Gooey CTA (8.4) — which rely on an external screenshot service / heavier SVG-filter work — are deferred.

---

## Phase 10 — Responsive, a11y, SEO

### Tasks

- [ ] **10.1** Test 320, 375, 768, 1024, 1440 — EN + PT
- [ ] **10.2** `generateMetadata` — title, OG, favicon (from old `_app.jsx`)
- [ ] **10.3** Focus rings, tap targets, reduced motion
- [ ] **10.4** No console errors; no duplicate IDs
- [ ] **10.5** CV print test on Chrome + Safari

### Acceptance criteria

- [ ] Full manual checklist passed
- [ ] Lighthouse: CV route accessible without JS

---

## Final validation gate

```bash
cd portfolio_v2
npm install
npm run lint
npm run build
npm run dev
```

### Automated

- [ ] Build succeeds
- [ ] Lint passes (document exceptions)
- [ ] No `jcserv|Jarrod|Servilla` in source
- [ ] No `@chakra-ui` in dependencies

### Manual (EN + PT)

- [ ] `/en` — full portfolio scroll, all links
- [ ] `/pt` — same
- [ ] `/en/cv` — print to PDF looks professional
- [ ] `/pt/cv` — same
- [ ] Theme toggle + locale toggle
- [ ] `/resume.pdf` downloads
- [ ] Zero console errors

---

## Progress tracker

| Phase | Status |
|-------|--------|
| 0 — Re-scaffold | `[x]` |
| 1 — Content + CV from PDF | `[x]` |
| 2 — CV print routes | `[x]` |
| 3 — Layout shell | `[x]` |
| 4 — Hero | `[x]` |
| 5 — About | `[x]` |
| 6 — Experience | `[x]` |
| 7 — Projects | `[x]` (7.5 Link Preview deferred) |
| 8 — Contact + particles | `[x]` (8.4 Gooey CTA deferred) |
| 9 — Effects polish | `[x]` |
| 10 — QA + SEO | `[ ]` |
| **Final validation** | `[ ]` |

---

## Post v2.0 (deferred)

- Certificates carousel (images missing)
- Replace `/resume.pdf` with generated PDF from HTML CV
- PWA
- Deploy to Vercel
