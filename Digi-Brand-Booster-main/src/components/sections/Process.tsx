'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { boosterFramework } from '@/lib/data'
import GlassCard from '@/components/ui/GlassCard'

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4">
            <Sparkles size={12} />
            Our Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-4">
            {boosterFramework.name.replace('™', '')}
            <sup className="text-lg lg:text-xl gradient-text">™</sup>
          </h2>
          <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
            {boosterFramework.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {boosterFramework.phases.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <GlassCard className="p-6 lg:p-7 h-full relative overflow-hidden group">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent-primary/5 group-hover:bg-accent-primary/10 transition-colors" />
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20 mb-4">
                  Phase {step.phase}
                </span>
                <h3 className="text-lg lg:text-xl font-bold font-heading mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
