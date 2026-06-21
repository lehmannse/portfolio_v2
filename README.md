# Portfolio v2

Personal portfolio rebuilt with **Next.js App Router**, **shadcn/ui**, and **Tailwind CSS**.

Includes a **print-ready web CV** at `/en/cv` and `/pt/cv`, sourced from [`reference/Profile.pdf`](./reference/Profile.pdf).

## Start here

Read **[ROADMAP.md](./ROADMAP.md)** — the agent iteration plan. Work one phase at a time.

## Prerequisites

- Node.js 18+
- npm

## Getting started

```bash
npm install
npm run dev
```

| Route              | Description                      |
| ------------------ | -------------------------------- |
| `/en`, `/pt`       | Portfolio (animated single-page) |
| `/en/cv`, `/pt/cv` | Printable CV (Save as PDF)       |

## Stack

- Next.js (App Router) + TypeScript
- shadcn/ui + Tailwind CSS v4
- next-intl (EN / PT-BR)
- next-themes
- Aceternity UI + Magic UI (effects, Phase 9)

## Reference files

- `reference/Profile.pdf` — LinkedIn CV export (content source for CV routes)
- `../portfolio/` — original site (UX/layout reference only; do not copy Chakra code)
