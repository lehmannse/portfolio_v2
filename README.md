# Portfolio v2

Personal portfolio built with **Next.js App Router**, **shadcn/ui**, and **Tailwind CSS v4**.

Includes a **print-ready web CV** at `/en/cv` and `/pt/cv`, sourced from [`public/resume.pdf`](./public/resume.pdf).

## Start here

Read **[ROADMAP.md](./ROADMAP.md)** — the build plan, organized by phase.

## Prerequisites

- Node.js 18+
- npm

## Getting started

```bash
npm install
npm run dev
```

| Route | Description |
|-------|-------------|
| `/` | Redirects to `/en` |
| `/en`, `/pt` | Portfolio (animated single-page) |
| `/en/cv`, `/pt/cv` | Printable CV (Save as PDF) |
| `/resume.pdf` | Legacy PDF download |

## Stack

- Next.js (App Router) + TypeScript
- shadcn/ui + Tailwind CSS v4
- next-intl (EN / PT-BR)
- next-themes
- framer-motion

## Content

- `content/` — typed portfolio + CV content modules (EN / PT)
- `public/resume.pdf` — CV export (content source for `/cv` routes)
