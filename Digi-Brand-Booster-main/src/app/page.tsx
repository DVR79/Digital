import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import ResultsCounter from '@/components/sections/ResultsCounter'
import GuaranteeBand from '@/components/sections/GuaranteeBand'
import Services from '@/components/sections/Services'
import CaseStudies from '@/components/sections/CaseStudies'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Industries from '@/components/sections/Industries'
import Process from '@/components/sections/Process'
import ROICalculator from '@/components/sections/ROICalculator'
import Testimonials from '@/components/sections/Testimonials'
import Awards from '@/components/sections/Awards'
import Team from '@/components/sections/Team'
import Insights from '@/components/sections/Insights'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import StickyCTA from '@/components/conversion/StickyCTA'
import WhatsAppButton from '@/components/conversion/WhatsAppButton'
import ExitIntent from '@/components/conversion/ExitIntent'
import BackToTop from '@/components/conversion/BackToTop'
import CursorFollower from '@/components/effects/CursorFollower'
import { faqItems } from '@/lib/data'

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ResultsCounter />
        <GuaranteeBand />
        <Services />
        <CaseStudies />
        <WhyChooseUs />
        <Industries />
        <Process />
        <ROICalculator />
        <Testimonials />
        <Awards />
        <Team />
        <Insights />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <WhatsAppButton />
      <BackToTop />
      <ExitIntent />
      <CursorFollower />
    </>
  )
}
