# Digi Brand Booster

AI-Native Performance Marketing Agency website. Built with Next.js 16, React 19, Tailwind CSS v4, Framer Motion, and TypeScript.

**Live:** https://digibrandbooster.tech (when deployed)
**Repo:** https://github.com/Layruss98266/Digi-Brand-Booster

## What's inside

- 16 homepage sections (Hero, Trust Bar, Results, Guarantee, Services, Case Studies, Why Choose Us, Industries, Booster Framework, ROI Calculator, Testimonials, Awards, Team, Insights, FAQ, Contact)
- Dark and light theme with no-flash script and localStorage persistence
- Midnight Aurora color palette tuned for premium feel
- Conversion features: sticky CTA, exit-intent popup, WhatsApp button, back-to-top, two-step contact form
- Cmd/Ctrl+K search modal indexing services, FAQs, case studies, industries
- 90-Day ROI guarantee positioning with scarcity (5 clients per quarter)
- The Booster Framework™ as a branded methodology
- Full SEO setup: dynamic OG image, sitemap, robots.txt, JSON-LD (Organization + FAQPage)
- PWA manifest with branded favicon and apple touch icon
- Static legal pages (`/privacy`, `/terms`)

## Tech stack

- **Next.js 16** with App Router and Turbopack
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** with `@theme` directive
- **Framer Motion** for animations
- **Lucide React** for icons
- **Fonts:** Bricolage Grotesque (headings) and Inter (body), loaded via `next/font`

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

All routes are statically generated (SSG) at build time.

## Lint

```bash
npm run lint
```

## Project conventions

See [`AGENTS.md`](./AGENTS.md) for the full agent guide (content rules, color tokens, component patterns).

## Roadmap

See [`ROADMAP.md`](./ROADMAP.md) for the 12-month product plan.

## Deploy

Designed for Vercel zero-config deploy: vercel.com/new and import this repo. Also runs on Netlify, Cloudflare Pages, or any Node host that supports Next.js.
