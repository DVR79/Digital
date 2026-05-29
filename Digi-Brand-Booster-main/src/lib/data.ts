export const siteConfig = {
  name: 'Digi Brand Booster',
  tagline: 'AI-Native Performance Marketing Agency',
  description: "We help D2C, e-commerce, SaaS and B2B brands grow with AI-native performance marketing. We hit 88% of client growth goals. If we don't deliver in 90 days, you don't pay.",
  email: 'venkat.digitalseo@gmail.com',
  phone: '+917981632581',
  whatsapp: '917981632581',
  address: 'A3, 2nd Cross Rd, Muniyallapa Layout, Cashier Layout, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029',
}

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Framework', href: '#process' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Industries', href: '#industries' },
  { label: 'ROI Calculator', href: '#roi' },
  { label: 'FAQ', href: '#faq' },
]

export const heroHeadline = {
  problem: 'Most marketing budgets get wasted.',
  promise: "We make every rupee work harder.",
}

export const heroStats = [
  { value: '$12M+', desc: 'In client revenue generated through our performance campaigns' },
  { value: '88%', desc: 'Of client growth goals hit, quarter after quarter' },
  { value: '4.9★', desc: 'Average client rating across 50+ verified reviews' },
  { value: '90 Days', desc: "To measurable ROI, or we work for free until you see it" },
]

export const heroPoints = [
  'AI-Powered Meta & Google Ad Optimization',
  'Conversion-First Web Development',
  '90-Day Revenue Guarantee',
]

export const typingTexts = [
  'We Drive Revenue.',
  'We Cut CAC in Half.',
  'We Scale ROAS Past 3.5x.',
  'We Hit Growth Goals.',
]

export const trustPartners = [
  { name: 'Google Premier Partner', icon: 'google' },
  { name: 'Meta Business Partner', icon: 'meta' },
  { name: 'Shopify Plus Partner', icon: 'shopify' },
  { name: 'Amazon Ads Verified', icon: 'amazon' },
  { name: 'Microsoft Select', icon: 'microsoft' },
  { name: 'HubSpot Solutions', icon: 'hubspot' },
  { name: 'Klaviyo Master', icon: 'klaviyo' },
  { name: 'Clutch Top 100', icon: 'clutch' },
]

export const resultCounters = [
  { value: 12, suffix: 'M+', prefix: '$', label: 'Revenue Generated', icon: 'dollar' },
  { value: 500, suffix: '+', label: 'Campaigns Launched', icon: 'rocket' },
  { value: 88, suffix: '%', label: 'Client Retention Rate', icon: 'users' },
  { value: 3.5, suffix: 'x', label: 'Average Client ROAS', icon: 'trending' },
]

export const guaranteeBand = {
  title: '90-Day ROI Guarantee',
  description: "If you don't see measurable revenue lift within 90 days, we keep working for free until you do.",
  scarcity: 'Only accepting 5 new clients this quarter',
}

export type ServiceTab = {
  id: string
  label: string
  services: {
    title: string
    description: string
    features: string[]
    icon: string
  }[]
}

export const serviceTabs: ServiceTab[] = [
  {
    id: 'paid-media',
    label: 'Paid Media',
    services: [
      {
        title: 'Meta Ads (Facebook & Instagram)',
        description: 'AI-driven Advantage+ campaigns engineered to crush CAC and scale ROAS across every funnel stage.',
        features: ['Advantage+ smart targeting', 'Creative testing engine', 'iOS 14.5+ attribution'],
        icon: 'target',
      },
      {
        title: 'Google Ads (Search + PMax)',
        description: 'High-intent search ads and Performance Max campaigns that convert browsers into buyers at the lowest CPA.',
        features: ['Search + Shopping + PMax', 'Bid strategy automation', 'Conversion tracking audit'],
        icon: 'search',
      },
      {
        title: 'Amazon Ads & DSP',
        description: 'Sponsored Products, Brands, and Display campaigns that own the marketplace where customers are ready to buy.',
        features: ['Sponsored ads management', 'DSP retargeting', 'TACoS optimization'],
        icon: 'shopping-cart',
      },
    ],
  },
  {
    id: 'web-cro',
    label: 'Web & CRO',
    services: [
      {
        title: 'High-Converting Web Design',
        description: 'Premium UI and UX built around buyer psychology. Every pixel is optimized to move visitors toward purchase.',
        features: ['Conversion-first design', 'Mobile-first responsive', 'A/B testing built in'],
        icon: 'monitor',
      },
      {
        title: 'Performance Web Development',
        description: 'Lightning-fast sites built on modern stacks like Next.js and Webflow. Sub-second load times. 100/100 Lighthouse scores.',
        features: ['Sub-second LCP', 'SEO-ready architecture', 'Headless CMS integration'],
        icon: 'code',
      },
      {
        title: 'Shopify Plus Development',
        description: 'Custom Shopify storefronts engineered to scale, with bespoke apps, headless builds, and conversion psychology baked in.',
        features: ['Custom theme development', 'Headless storefronts', 'Checkout optimization'],
        icon: 'store',
      },
    ],
  },
  {
    id: 'organic',
    label: 'SEO & Organic',
    services: [
      {
        title: 'Intent-Driven SEO',
        description: 'Technical SEO and a content engine that targets the bottom-funnel keywords your buyers actually search.',
        features: ['Topical authority building', 'Programmatic SEO', 'AI-search (AEO/GEO) ready'],
        icon: 'trending-up',
      },
      {
        title: 'Content & Social Media',
        description: 'Story-led content for Instagram, LinkedIn, and YouTube that builds community and drives organic discovery.',
        features: ['Content calendar planning', 'Reels & Shorts production', 'Community management'],
        icon: 'users',
      },
      {
        title: 'Brand Identity & Strategy',
        description: 'Memorable brand systems (logos, typography, voice guidelines) built for digital-first scale.',
        features: ['Brand identity design', 'Visual systems', 'Brand voice playbook'],
        icon: 'palette',
      },
    ],
  },
  {
    id: 'retention',
    label: 'Retention & CRM',
    services: [
      {
        title: 'Email & SMS Marketing',
        description: 'Klaviyo-certified flows that turn one-time buyers into repeat customers. We lift LTV 40%+ on average.',
        features: ['Welcome & abandoned cart', 'Win-back automations', 'Segmentation strategy'],
        icon: 'mail',
      },
      {
        title: 'Marketplace Account Management',
        description: 'End-to-end ops for Amazon, Flipkart, and Myntra. Catalog, ads, inventory, and review management, all handled.',
        features: ['Listing SEO optimization', 'Account health monitoring', 'A+ Content design'],
        icon: 'package',
      },
      {
        title: 'Quick Commerce (Zepto/Blinkit)',
        description: 'Catalog setup, pricing strategy, and visibility ads on Zepto, Blinkit, and Instamart for D2C scale.',
        features: ['Catalog optimization', 'Visibility ad management', 'Daily ops support'],
        icon: 'zap',
      },
    ],
  },
]

export const whyChooseUs = [
  {
    num: '01',
    title: 'We Bet On Your Growth',
    description: "We tie our fee to KPIs you actually care about. If we don't hit them, we don't get paid in full. Simple as that.",
  },
  {
    num: '02',
    title: 'AI-Native, Not AI-Curious',
    description: "We don't just use ChatGPT. We run proprietary AI models for ad creative testing, audience modeling, and budget allocation.",
  },
  {
    num: '03',
    title: 'You Own Everything',
    description: 'Your ad accounts, pixel data, creative assets, and dashboards. All owned by you, fully transparent, no lock-in contracts ever.',
  },
]

export const industries = [
  { name: 'D2C & E-Commerce', icon: 'shopping-bag', desc: 'Apparel, beauty, F&B, home goods' },
  { name: 'SaaS & B2B', icon: 'code', desc: 'Lead gen, demo bookings, MQL pipelines' },
  { name: 'Healthcare & Wellness', icon: 'heart', desc: 'Clinics, supplements, fitness brands' },
  { name: 'Finance & Fintech', icon: 'banknote', desc: 'Lending, insurance, neobanks' },
  { name: 'Real Estate', icon: 'building', desc: 'Developers, brokerages, luxury' },
  { name: 'Local Services', icon: 'map-pin', desc: 'Multi-location franchises & home services' },
]

export const boosterFramework = {
  name: 'The Booster Framework™',
  description: 'Our proprietary 6-phase growth system has driven $12M+ in client revenue. Every engagement runs the same proven loop.',
  phases: [
    { phase: '01', title: 'Growth Audit', description: 'A deep-dive audit of your ad accounts, website, funnel, and CRM. We surface every leak and opportunity within 7 days.' },
    { phase: '02', title: 'ICP & Offer Sharpening', description: 'We map your ideal customer profile, refine your offer-market fit, and pinpoint the wedge that wins in your category.' },
    { phase: '03', title: 'Channel Strategy', description: 'A multi-channel media plan with budget allocation based on funnel math, not guesswork. ROI projections before launch.' },
    { phase: '04', title: 'Creative Engine', description: 'AI-assisted creative testing across hooks, formats, and offers. We ship 30+ variants per month so winners surface fast.' },
    { phase: '05', title: 'Optimize & Scale', description: 'Daily bid management, audience expansion, and budget reallocation. Winning campaigns scale aggressively. Losers get cut fast.' },
    { phase: '06', title: 'Compound Growth', description: 'Once channels hit profitability, we layer retention (email, SMS, CRM) to compound LTV. One-time wins turn into recurring revenue.' },
  ],
}

export const caseStudies = [
  {
    id: 'ganga',
    client: 'Ganga Fashions',
    industry: 'Apparel · D2C',
    title: '3.5x ROAS in 90 Days for Premium Apparel',
    description: 'We restructured the Meta funnel with Advantage+ shopping campaigns and rebuilt the landing experience around buyer intent. Result: revenue scaled 55% while CAC dropped 31%.',
    heroMetric: '3.5x',
    heroLabel: 'Average ROAS',
    stats: [
      { value: '3.5x', label: 'Average ROAS' },
      { value: '+55%', label: 'Revenue Growth' },
      { value: '-31%', label: 'CAC Reduction' },
    ],
  },
  {
    id: 'doeraa',
    client: 'Doeraa E-Commerce',
    industry: 'Fabric · D2C',
    title: 'Multi-Channel Scale Engine for D2C Fabric Brand',
    description: 'We audited a leaky ad account, rebuilt landing pages by buyer segment, and restructured Facebook Ads from cold to scaling. Sales tripled in 120 days at a lower CPA.',
    heroMetric: '3.0x',
    heroLabel: 'Monthly Sales',
    stats: [
      { value: '3.0x', label: 'Sales Increase' },
      { value: '-40%', label: 'CPA Reduction' },
      { value: '120 Days', label: 'Time to Scale' },
    ],
  },
  {
    id: 'arfl',
    client: 'ARFL Beauty',
    industry: 'Beauty · D2C',
    title: 'Email & SMS Engine That Lifted LTV 40%',
    description: 'We rebuilt welcome, abandoned cart, and win-back flows in Klaviyo, then A/B tested subject lines weekly. Repeat purchase rate jumped 40% in 45 days.',
    heroMetric: '+40%',
    heroLabel: 'Repeat Buyers',
    stats: [
      { value: '+40%', label: 'Repeat Purchase Rate' },
      { value: '4.2%', label: 'Email CTR' },
      { value: '45 Days', label: 'Time to Results' },
    ],
  },
]

export const testimonials = [
  {
    quote: "We'd burned through two agencies before Digi Brand Booster. Within 60 days they cut our CAC by 31% and scaled Meta from $20k to $80k a month, profitably. The 90-day guarantee is real. They over-delivered on it.",
    name: 'Bhavesh S.',
    title: 'Owner, Perfect Optics',
  },
  {
    quote: "Sales were stagnant and our Facebook Ads were bleeding. Their ad-account audit alone showed us 6 things our previous team missed. The multi-channel rebuild drove 3x growth per month. We now treat them as our growth team, not just a vendor.",
    name: 'Parth D.',
    title: 'Founder, Reroute',
  },
  {
    quote: "I've worked with three other dev agencies over four years. Digi Brand Booster is the only one I've stayed with for two years. They actually understand conversion, not just design. Our Shopify revenue is up 4.1x.",
    name: 'Simmi S.',
    title: 'Founder, 17:17 Designer Wear',
  },
  {
    quote: "The audit they ran was the most honest, no-fluff diagnosis I've ever received from an agency. They told me what was broken AND what to ignore. ROAS went from 1.2x to 3.6x in one quarter.",
    name: 'Aadesh S.',
    title: 'Owner, APNY',
  },
  {
    quote: "Their email and SMS retention engine is the secret weapon nobody talks about. Six weeks in, repeat purchases were up 40%. Every email feels like it was written specifically for the customer who opened it.",
    name: 'Surabhi J.',
    title: 'Founder, Siara Women',
  },
]

export const faqItems = [
  {
    question: 'What makes Digi Brand Booster different from other agencies?',
    answer: "Three things. First, we offer a 90-day ROI guarantee. If you don't see measurable revenue lift, we keep working for free until you do. Second, we're AI-native: we run proprietary models for creative testing and budget allocation, not just bolted-on ChatGPT prompts. Third, you own everything (your ad accounts, pixel data, dashboards). No lock-in, no contracts, no hostage situations.",
  },
  {
    question: 'How does the 90-day ROI guarantee work?',
    answer: "During onboarding, we agree on specific KPIs (typically a ROAS target, CAC ceiling, or revenue lift). If we don't hit them within 90 days, we keep working for free until we do. We can offer this because we only take on clients where we're 95%+ confident we can deliver. That's why we limit to 5 new clients per quarter.",
  },
  {
    question: 'What industries do you work with?',
    answer: 'Our strongest verticals are D2C e-commerce (apparel, beauty, F&B, home), SaaS and B2B (lead gen, demo bookings), healthcare and wellness, finance and fintech, real estate, and local service businesses. If you fit one of these and your business does $500k+ a year, we can almost certainly move the needle.',
  },
  {
    question: 'Do you work with startups or only established brands?',
    answer: "Both, but with one filter. We need to see product-market fit (at least $50k a month in revenue or strong organic demand signals). Below that, you're still iterating on product, and paid media won't fix that. We'll tell you straight if you're not ready, and recommend what to do instead.",
  },
  {
    question: 'How fast can I expect results?',
    answer: "Quick wins land in weeks (fixing tracking, cutting wasted spend, launching winning creative variants). Real ROAS improvements compound in 30 to 60 days. Sustainable scale (3x+ ROAS at meaningful budget) typically takes 90 days. Anyone promising explosive results in 14 days is lying to you.",
  },
  {
    question: "What's your pricing model?",
    answer: "Monthly retainers, no long-term contracts. Pricing depends on scope and ad spend managed (typically ₹1L to ₹10L per month for SMBs and ₹10L+ for enterprise scale). Many engagements include a performance bonus tied to KPIs. We'll quote you on the audit call once we understand scope.",
  },
  {
    question: 'Do I keep ownership of my ad accounts and data?',
    answer: 'Yes, always. Every ad account, pixel, GA4 property, CRM, and creative asset stays in your ownership from day one. If we ever part ways, you walk away with everything intact. We earn our seat at the table each quarter, not through contractual lock-in.',
  },
]

export const teamMembers = [
  { name: 'Surya P.', role: 'Founder & Growth Lead', initials: 'SP', bio: '7+ years scaling D2C brands across Meta, Google, and Amazon. Previously ran growth for three 8-figure brands.' },
  { name: 'Priya M.', role: 'Paid Media Director', initials: 'PM', bio: 'Meta and Google certified expert. Managed $5M+ in ad spend with 3.5x+ portfolio ROAS across 100+ accounts.' },
  { name: 'Arjun K.', role: 'Head of Engineering', initials: 'AK', bio: 'Full-stack engineer building Shopify Plus and Next.js storefronts with sub-second load times and 100/100 Lighthouse scores.' },
  { name: 'Neha R.', role: 'Creative Director', initials: 'NR', bio: 'Brand strategist behind visual systems for 30+ D2C brands. Specializes in scroll-stopping ad creative and brand voice.' },
]

export const awards = [
  'Clutch Top 100 Agencies 2026',
  'Google Premier Partner',
  'Meta Business Partner',
  'Shopify Plus Partner',
  'GoodFirms Top B2B 2025',
  'Inc. India 5000 Finalist',
]

export const insights = [
  {
    category: 'AI Marketing',
    title: 'AEO vs GEO vs SEO: How to Win the AI Search Era in 2026',
    readTime: '6 min read',
    date: 'May 2026',
    featured: true,
  },
  {
    category: 'Paid Media',
    title: 'Why Your Advantage+ Campaigns Are Capping at 2x ROAS (And How to Break Through)',
    readTime: '5 min read',
    date: 'Apr 2026',
    featured: false,
  },
  {
    category: 'E-Commerce',
    title: 'The D2C Retention Playbook: 7 Klaviyo Flows That Lift LTV 40%+',
    readTime: '7 min read',
    date: 'Mar 2026',
    featured: false,
  },
]

export const serviceOptions = [
  { value: 'paid-media', label: 'Paid Media (Meta/Google/Amazon)' },
  { value: 'web-cro', label: 'Web Design & CRO' },
  { value: 'seo-organic', label: 'SEO & Organic Growth' },
  { value: 'email-retention', label: 'Email & Retention Marketing' },
  { value: 'shopify-dev', label: 'Shopify Development' },
  { value: 'amazon-market', label: 'Amazon Marketplace' },
  { value: 'quick-commerce', label: 'Quick Commerce' },
  { value: 'full-stack', label: 'Full-Stack Growth Partner' },
  { value: 'other', label: 'Not sure, need a recommendation' },
]

export const budgetOptions = [
  { value: 'startup', label: '₹50,000 - ₹1,00,000 / month' },
  { value: 'growth', label: '₹1,00,000 - ₹5,00,000 / month' },
  { value: 'scale', label: '₹5,00,000 - ₹10,00,000 / month' },
  { value: 'enterprise', label: '₹10,00,000+ / month' },
  { value: 'unsure', label: 'Need help sizing it' },
]

export const marqueeText = 'AI-Native Growth Marketing · 90-Day ROI Guarantee · Performance-Based Pricing · You Own Everything · Sub-Second Sites · 88% Goal Hit Rate'
