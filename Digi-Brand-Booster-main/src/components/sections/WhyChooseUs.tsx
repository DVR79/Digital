'use client'

import { motion } from 'framer-motion'
import { whyChooseUs } from '@/lib/data'
import GlassCard from '@/components/ui/GlassCard'

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4">
            Why Brands Pick Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-6">
            We&apos;re not the cheapest. We&apos;re the <span className="gradient-text">most accountable.</span>
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            If you&apos;re looking for &quot;set it and forget it&quot; vendor marketing, we&apos;re wrong for you. If you want a growth team that owns the number with you, keep reading.
          </p>
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl glass">
            <span className="text-4xl lg:text-5xl font-bold font-heading gradient-text">88%</span>
            <span className="text-sm text-text-secondary leading-tight">
              Of growth goals hit<br />within agreed timelines
            </span>
          </div>
        </motion.div>

        <div className="space-y-4">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 lg:p-7 flex gap-5">
                <span className="text-3xl lg:text-4xl font-bold font-heading gradient-text shrink-0">{item.num}</span>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold font-heading mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
