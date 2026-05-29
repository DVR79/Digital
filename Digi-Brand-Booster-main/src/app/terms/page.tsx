import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Terms of Service | Digi Brand Booster',
  description: 'The terms that govern your use of digibrandbooster.tech and any engagement with our team.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold font-heading mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-text-secondary mb-10">Last updated: May 2026</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">1. Using this site</h2>
              <p className="text-text-secondary leading-relaxed">
                By browsing digibrandbooster.tech, you agree to these terms. The site is provided as-is, for informational purposes. Nothing on it constitutes a binding offer of services until we sign a separate engagement letter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">2. Our services</h2>
              <p className="text-text-secondary leading-relaxed">
                Performance marketing, web development, SEO, and retention engagements are governed by a written Statement of Work signed by both parties. The 90-Day ROI Guarantee applies only when the SOW explicitly references it and specific KPIs are agreed upfront.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">3. Content & IP</h2>
              <p className="text-text-secondary leading-relaxed">
                The Booster Framework™, the brand name, logos, and the original copy on this site are owned by Digi Brand Booster. Client-owned assets (your ad accounts, pixel data, creative files) remain yours at all times.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">4. No professional advice</h2>
              <p className="text-text-secondary leading-relaxed">
                Articles, calculators, and free tools on this site are educational. They&apos;re not legal, tax, financial, or guaranteed marketing advice. Decisions you make based on them are your own.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">5. Liability</h2>
              <p className="text-text-secondary leading-relaxed">
                We&apos;re not liable for indirect or consequential damages arising from your use of the site. For paid engagements, our maximum liability is capped at fees paid in the prior 3 months, as specified in your SOW.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">6. Governing law</h2>
              <p className="text-text-secondary leading-relaxed">
                These terms are governed by the laws of India. Disputes will be resolved in the courts of Surat, Gujarat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-3">7. Contact</h2>
              <p className="text-text-secondary leading-relaxed">
                Questions about these terms? Email <a href={`mailto:${siteConfig.email}`} className="text-accent-primary hover:underline">{siteConfig.email}</a>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
