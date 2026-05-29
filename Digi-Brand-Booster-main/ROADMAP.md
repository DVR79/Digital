# ROADMAP.md

Twelve month product roadmap for the Digi Brand Booster website. Plans assume the current state (May 2026): a fully built Next.js marketing site with 16 sections, dark/light theme, search, conversion features, SSG, and Lighthouse-optimized performance.

The roadmap is sequenced by impact on the primary business goal: turning visitors into qualified audit bookings.

---

## Guiding principles

1. **Lead quality over quantity.** Every change should make the right buyer more likely to book (or the wrong one less likely to).
2. **Speed is a feature.** Lighthouse 95+ across all four scores stays the bar. Every addition gets a perf budget.
3. **Owned data, no surveillance.** Analytics live on Plausible or self-hosted, not GA4. No third-party tracking without explicit user consent.
4. **Content is the moat.** A single well-researched playbook outranks ten thin posts. Quality bar stays high.

---

## Q3 2026 (Jul to Sep) · Lead Conversion & Proof

Goal: lift audit booking rate from ~2% baseline to 4%+. Build out social proof depth.

### Must ship
- **Audit booking flow as a dedicated page** (`/audit`) with structured intake (URL, ad spend, monthly revenue, top channel). Replaces the generic contact form for high-intent visitors.
- **Calendly or Cal.com embed** on the audit confirmation page so prospects book the strategy call in one click.
- **Real case studies with images and charts.** Replace the current 3 with 6 deeply written ones at `/case-studies/[slug]` (MDX-based). Each one gets ad creatives, dashboards (anonymized), and a quoted client.
- **Video testimonials** (3 short clips, 30-60s each) for the testimonials section. Self-hosted via Mux or Cloudflare Stream to stay fast.
- **Plausible Analytics** integration. Track audit-form starts, completions, scroll depth, and section visibility.
- **Form persistence.** If a user fills step 1 of the contact form and bounces, restore on return via localStorage.

### Should ship
- **Live chat widget** (Crisp or self-hosted) gated to business hours. Optional WhatsApp fallback off-hours.
- **A/B test framework.** Lightweight cookie-based bucketing. First tests: CTA copy ("Get My Free Audit" vs "Book a Growth Call"), hero subhead variants.

### Skip
- Newsletter signup popup (low intent vs effort)
- Generic blog (waiting for Q4 content engine plan)

---

## Q4 2026 (Oct to Dec) · Content & Authority

Goal: rank for 20 commercial keywords. Establish Digi Brand Booster as a category-defining voice in AI-native marketing for Indian D2C.

### Must ship
- **Blog at `/insights/[slug]`** built on Next.js MDX with table of contents, reading progress bar, related posts.
- **20 cornerstone articles** targeting bottom-funnel intent: "best meta ads agency in india", "klaviyo expert india", "shopify plus partner surat", "ai marketing agency for d2c", etc.
- **Programmatic SEO** for industry + service combinations: `/[industry]/[service]` pages (e.g., `/d2c-fashion/meta-ads`, `/saas/seo`). Targets 30 to 50 long-tail keywords.
- **Free tools collection** at `/tools`:
  - Ad budget calculator
  - LTV/CAC ratio calculator
  - Meta vs Google spend allocator
  - Klaviyo flow ROI estimator
- **AI search optimization (AEO/GEO).** Structured data for FAQ, HowTo, Service. Llms.txt file. Direct, citation-ready answer blocks at the top of each blog post.
- **RSS feed** for `/insights`.

### Should ship
- **Author profiles** (`/team/[name]`) with credentials, certifications, articles published. Boosts E-E-A-T for AI search.
- **Industry landing pages** (`/d2c`, `/saas`, `/healthcare`, `/fintech`, `/real-estate`). Vertical-specific case studies, testimonials, services.
- **Compare pages** (`/vs/agency-name`). High-intent SEO play.

### Skip
- YouTube channel (out of scope for the site, but the founder can shoot on the side)
- Podcast (same)

---

## Q1 2027 (Jan to Mar) · Internationalization & Trust

Goal: position for international (US + UK + UAE) clients. Lift Lighthouse SEO to 100/100 across all routes.

### Must ship
- **Multi-currency support** in the ROI Calculator. Add USD, GBP, AED, SGD beyond the current INR/USD.
- **Hreflang setup** for `/in`, `/us`, `/uk`, `/ae` subpaths. Geo-aware content (regional case studies, regional pricing examples).
- **i18n with `next-intl`.** English remains default. Add Hindi for the India audience. Consider Arabic for Gulf.
- **Trust badges with real verification.** Replace static "Clutch Top 100" text with a live-pulled Clutch widget, Google Business Profile rating, and GoodFirms badge. Live data > stale copy.
- **Press mentions section.** As earned media accumulates, surface logos of publications that featured the agency.
- **GDPR & DPDP-compliant cookie banner** (only when analytics or chat scripts load).

### Should ship
- **Sticky industry switcher** in the hero on industry pages: visitor lands on `/d2c` and can swap to `/saas` without leaving.
- **PDF export of audit results.** When a visitor completes the ROI Calculator, let them download a branded PDF summary by email.
- **Client logos as live wall.** Filterable by industry. Hovering reveals the result they got.

### Skip
- Native mobile app (no business case)
- Voice search optimization beyond schema (low Indian search volume)

---

## Q2 2027 (Apr to Jun) · Product-led & Community

Goal: build self-serve onboarding for SMB tier. Launch a paid community for marketing operators.

### Must ship
- **Self-serve audit tool** at `/audit-tool`. Visitor pastes their site URL, the tool runs Lighthouse + GTmetrix + a custom ad-account heuristics check (read-only via OAuth). Returns a scored report in 60 seconds. Free version + paid tier.
- **SMB pricing page** at `/pricing`. Transparent monthly tiers for sub-₹50k/month clients. Premium tier still gated behind audit.
- **Paid community: "The Growth Loop"** at `/community`. Discord/Circle integration. ₹999/month. Includes monthly office hours with founders, async strategy reviews, member-only playbooks.
- **Member dashboard** at `/dashboard` for community + retainer clients. Single sign-on (Clerk or Auth.js). Shows their KPIs, audit history, current strategy doc.
- **Public roadmap page** at `/roadmap` (transparency builds trust). Vote on features.

### Should ship
- **Affiliate program** at `/partners`. 10% lifetime recurring for referrals. Tracking via Tolt or Rewardful.
- **Job board widget** at `/careers`. As the team scales, this becomes its own lead source.
- **Annual retainer auto-renewal** flow built into the dashboard.

### Skip
- White-label agency tool (off-brand, off-mission)
- Crypto/Web3 industry expansion (saturated, low-trust segment)

---

## Cross-cutting initiatives (continuous)

### Performance
- Quarterly Lighthouse audit. Hold the line at 95+ across Performance, Accessibility, Best Practices, SEO.
- Quarterly Core Web Vitals review. LCP under 1.5s on 4G. INP under 200ms. CLS under 0.05.
- Image optimization: every new image goes through Squoosh or `next/image` AVIF + WebP fallback.

### Accessibility
- WCAG 2.2 AA compliance audit each quarter (use axe DevTools).
- Keyboard navigation test every release.
- Screen reader test (NVDA + VoiceOver) for every new section.

### Analytics & experimentation
- Plausible dashboard reviewed weekly. Top 3 metrics: audit form starts, audit form completions, scroll depth past Industries.
- One A/B test running at all times. Hold each test 2 weeks min for significance.

### Security & ops
- Dependabot for npm updates. Patch within 7 days for high-sev CVEs.
- Vercel deployment + preview branches for all PRs.
- Quarterly secret rotation (analytics keys, Plausible API).

### Content cadence
- 2 new blog posts per month from Q4 onward.
- 1 case study updated or added per quarter.
- Quarterly review of all stats on the homepage (revenue generated, retention rate, etc.) so they stay current.

---

## What we're explicitly NOT building

These have been considered and ruled out for the next 12 months:

1. **A mobile app.** No business case. The site is mobile-first and that's enough.
2. **AI chatbot trained on company data.** Tempting but expensive to maintain. WhatsApp + audit form covers the demand.
3. **Course platform.** Distracts from the agency business. Maybe later.
4. **Press release distribution.** Earned media works better than pay-to-play.
5. **Generic SEO content farm.** Quality bar stays high. We'd rather publish 1 great post per month than 20 mediocre ones.
6. **NFT/crypto integrations** of any kind.

---

## Risk log

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Google algorithm shift kills SEO traffic | Med | Diversify to AI search (AEO/GEO) early. Build email list. |
| iOS privacy update breaks ad attribution | High | Already on server-side tracking via Meta CAPI. Continue pushing first-party data. |
| Key team member leaves | Med | Document Booster Framework™ phases as SOPs. Train juniors continuously. |
| Industry consolidation (big agencies buy small ones) | Low | Stay independent. Niche down further on AI-native positioning. |
| Recession hits client ad budgets | Med | Build retention/email products that lift LTV without new ad spend. Useful in downturns. |

---

## Success metrics (12 month targets)

| Metric | Today (May 2026) | Target (May 2027) |
|--------|------------------|-------------------|
| Monthly unique visitors | ~2,000 | 25,000 |
| Audit form completion rate | ~2% | 6% |
| Qualified audit bookings / month | ~10 | 75 |
| Organic search clicks / month | ~500 | 12,000 |
| Domain Rating (Ahrefs) | ~15 | 40 |
| Average client engagement value | ₹2L / month | ₹5L / month |
| Active clients | 12 | 30 (split 20 retainer, 10 community) |
| Annual recurring revenue | ₹2.5 Cr | ₹15 Cr |

These targets are aggressive but reasonable given the current foundation, the 90-day guarantee positioning, and the planned content + product expansion.

---

Last reviewed: 2026-05-21. Owner: Founder. Next review: 2026-08-21.
