import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Privacy Policy | Digi Brand Booster',
  description: 'How Digi Brand Booster collects, uses, and protects your information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold font-heading mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-text-secondary mb-10">Last updated: May 2026</p>

          <div className="prose-policy space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">1. What we collect</h2>
              <p className="text-text-secondary leading-relaxed">
                When you fill out our contact or audit form, we collect the information you provide: name, email, phone, company name, website, service interest, budget range, and your message. When you browse the site, we collect anonymized analytics (page views, scroll depth, button clicks) via a privacy-respecting analytics tool. We do not use third-party tracking pixels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">2. How we use it</h2>
              <p className="text-text-secondary leading-relaxed">
                We use form submissions only to respond to your inquiry, deliver the requested audit, and follow up about a potential engagement. We use anonymized analytics to improve the site. We never sell or rent your information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">3. Where it lives</h2>
              <p className="text-text-secondary leading-relaxed">
                Form submissions are stored in our CRM (currently HubSpot). Analytics live in our self-managed dashboard. Both are protected by industry-standard encryption.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">4. Your rights</h2>
              <p className="text-text-secondary leading-relaxed">
                You can ask us to access, correct, or delete your data at any time. Email <a href={`mailto:${siteConfig.email}`} className="text-accent-primary hover:underline">{siteConfig.email}</a> and we&apos;ll handle it within 7 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">5. Cookies</h2>
              <p className="text-text-secondary leading-relaxed">
                We use a single first-party cookie for theme preference. Our analytics tool uses a privacy-first cookieless tracker. We don&apos;t use Google Analytics, Meta Pixel, or any cross-site tracker without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">6. Contact</h2>
              <p className="text-text-secondary leading-relaxed">
                Questions about this policy? Reach us at <a href={`mailto:${siteConfig.email}`} className="text-accent-primary hover:underline">{siteConfig.email}</a> or call <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-accent-primary hover:underline">{siteConfig.phone}</a>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
