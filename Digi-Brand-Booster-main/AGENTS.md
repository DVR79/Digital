# AGENTS.md

Project-specific guidance for AI coding agents working on Digi Brand Booster.

<!-- BEGIN:nextjs-agent-rules -->
> **Heads up on Next.js version.** This project uses Next.js 16 with the App Router and Turbopack. APIs, conventions, and file structure may differ from older training data. Check `node_modules/next/dist/docs/` before writing code that touches Next-specific APIs.
<!-- END:nextjs-agent-rules -->

## Project context

Digi Brand Booster is a marketing website for an AI-native performance marketing agency. It's a marketing site, not an app. The goal is to convert visitors into leads via the contact form, WhatsApp, or audit booking.

Tech stack:
- Next.js 16 with App Router and Turbopack
- React 19
- TypeScript (strict)
- Tailwind CSS v4 (uses `@theme` block, not config file)
- Framer Motion for animations
- Lucide React for icons

## Project structure

```
src/
  app/                Next.js App Router pages
    layout.tsx        Root layout, fonts, metadata, JSON-LD, no-flash theme script
    page.tsx          Homepage (assembles every section)
    not-found.tsx     Custom 404
    globals.css       Theme tokens (dark + light), animations, glass utilities
  components/
    layout/           Header, Footer
    sections/         Each homepage section (Hero, Services, FAQ, etc.)
    ui/               Reusable: GlassCard, ShimmerButton, SectionHeader,
                      ThemeToggle, SearchModal, AnimatedCounter, TypingText
    effects/          CursorFollower
    conversion/       StickyCTA, WhatsAppButton, ExitIntent, BackToTop
  lib/
    data.ts           ALL site content lives here. Single source of truth.
    utils.ts          Tiny helpers (cn, formatCurrency)
```

## Content rules

1. **All copy lives in `src/lib/data.ts`.** Never hardcode marketing strings into components. If you're tempted to inline a service name, testimonial, or stat, add it to `data.ts` first.

2. **No em dashes.** The user prefers humanized prose without `—`. Use periods, commas, parentheses, or restructure the sentence. Examples:
   - Bad: `We hit 88% of growth goals — quarter after quarter.`
   - Good: `We hit 88% of growth goals, quarter after quarter.`

3. **Avoid corporate clichés** in new copy: "360°", "results-driven", "data-driven", "ROI-focused", "full-funnel", "synergy". The site is positioned against these on purpose.

4. **Keep claims specific.** `3.5x ROAS in 90 days` is good. `Massive growth` is bad. Numbers and time windows beat adjectives.

## Theme & design system

### Color tokens (CSS variables in `globals.css`)

| Token | Dark | Light | Usage |
|-------|------|-------|-------|
| `--bg-dark` | `#0a0a14` | `#fafbfc` | Page background |
| `--bg-card` | `#14141f` | `#ffffff` | Card surfaces |
| `--bg-card-hover` | `#1c1c2b` | `#f1f5f9` | Hover/elevated cards |
| `--text-primary` | `#f4f4f7` | `#0f172a` | Headings, key text |
| `--text-secondary` | `#a1a1b3` | `#475569` | Body text, captions |
| `--accent-primary` | `#5b8dff` | `#3b82f6` | Brand blue |
| `--accent-secondary` | `#22d3ee` | `#06b6d4` | Cyan accent |
| `--accent-cta` | `#fbbf24` | `#f59e0b` | Amber, ONLY for primary CTAs |
| `--accent-purple` | `#a78bfa` | `#8b5cf6` | Gradient third stop |
| `--accent-success` | `#34d399` | `#10b981` | Success states |

Use Tailwind classes like `bg-bg-dark`, `text-text-primary`, `border-border`. These map to the CSS vars and adapt to theme automatically. **Don't hardcode hex values or `border-white/[0.06]`-style colors.**

### Typography
- Headings: `font-heading` (Bricolage Grotesque)
- Body: default (Inter)
- Tight letter-spacing already applied via CSS

### Component patterns
- **Glassmorphism cards**: use `<GlassCard>` from `components/ui/GlassCard.tsx`
- **CTA buttons**: use `<ShimmerButton variant="cta" />` for primary, `variant="primary"` for secondary, `variant="outline"` for ghost
- **Section headers**: use `<SectionHeader eyebrow="..." title="..." description="..." />`
- **Scroll-in animations**: use Framer Motion `whileInView` inline. Don't create wrapper components for this.

## Coding conventions

1. **Client vs server components.** Default to server. Add `'use client'` only when needed (state, effects, browser APIs, motion).
2. **Imports.** Use the `@/` alias for `src/` paths. Order: React/Next, third-party, lucide-react, `@/lib`, `@/components`.
3. **TypeScript.** Type props inline for one-off components. Export shared types from `lib/data.ts`.
4. **No new dependencies** without checking with the user first. The current set (Next, React, Tailwind, Framer Motion, Lucide) is intentionally minimal.
5. **No external icon libraries beyond Lucide.** If Lucide doesn't have an icon (e.g. social brand icons removed in newer versions), use an inline SVG. Do not pull in `react-icons` or similar.
6. **No CSS-in-JS libraries.** Tailwind only. Inline `<style jsx>` is acceptable for component-scoped tricks like custom range slider thumbs.

## Theme system specifics

- The theme is controlled by a `light` class on `<html>`. Default = no class = dark.
- `src/app/layout.tsx` injects a no-flash script in `<head>` that reads `localStorage.theme` and sets the class before paint. Don't move or remove this script.
- `<ThemeToggle>` reads/writes localStorage and toggles the class.
- All theme-aware colors must use CSS variables. Tailwind utilities like `text-text-primary` already do this.

## Adding new content

To add a new service:
1. Open `src/lib/data.ts`
2. Find `serviceTabs` array
3. Add an entry under the right tab with `title`, `description`, `features`, and an `icon` key (string)
4. If the icon doesn't exist yet, add it to the `iconMap` in `Services.tsx`

To add a new section:
1. Create `src/components/sections/NewSection.tsx`
2. Use `<SectionHeader>` for the title block
3. Put content data in `src/lib/data.ts`
4. Import and place in `src/app/page.tsx` at the right point in the flow

## SEO & performance rules

1. Page is fully SSG. Don't add `'use client'` to `page.tsx` or `layout.tsx`.
2. Update metadata in `layout.tsx` if you add a major section or change positioning.
3. JSON-LD schemas live in `layout.tsx` (Organization) and `page.tsx` (FAQPage). Update if you change company info or FAQs.
4. Images: use `next/image` and provide explicit `width`/`height`. No raw `<img>` tags.
5. No client-side data fetching on the homepage. Everything is build-time.

## Don'ts

- Don't add em dashes (`—`) to copy.
- Don't touch the original TechEasify files in the parent `Digital/` directory. They're a reference backup.
- Don't introduce a state management library (Redux, Zustand, etc.). The site doesn't need one.
- Don't add a tracking script (GA, Meta Pixel) without explicit user instruction.
- Don't change the `metadata` title/description format casually. It's tuned for search snippets.
- Don't add npm packages without user approval.

## Useful commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build (verify before deploy)
npm run lint     # ESLint
```

Dev server runs on `http://localhost:3000`.
