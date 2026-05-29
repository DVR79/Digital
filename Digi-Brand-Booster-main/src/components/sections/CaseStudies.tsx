'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { caseStudies } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'

export default function CaseStudies() {
  const [active, setActive] = useState(caseStudies[0].id)
  const current = caseStudies.find((c) => c.id === active) || caseStudies[0]

  return (
    <section id="cases" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Proven Growth Outcomes"
          description="Explore real performance results achieved across key client accounts through targeted campaigns and web restructures."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {caseStudies.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c.id
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-blue-500/25'
                  : 'glass text-text-secondary hover:text-text-primary'
              }`}
            >
              {c.client}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard hover={false} className="overflow-hidden">
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-0">
                <div className="p-10 lg:p-14 bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-purple-500/10 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-border">
                  <span className="text-6xl lg:text-7xl xl:text-8xl font-bold font-heading gradient-text leading-none mb-3">
                    {current.heroMetric}
                  </span>
                  <span className="text-sm tracking-wider uppercase text-text-secondary">{current.heroLabel}</span>
                </div>
                <div className="p-8 lg:p-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-3">
                    {current.industry}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold font-heading mb-4">{current.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-8">{current.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {current.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-bg-card/40 border border-border">
                        <div className="text-xl lg:text-2xl font-bold font-heading gradient-text mb-1">{stat.value}</div>
                        <div className="text-xs text-text-secondary">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
