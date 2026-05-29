'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { awards } from '@/lib/data'

export default function Awards() {
  return (
    <section className="py-14 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm tracking-wider uppercase text-text-secondary mb-8"
        >
          Recognized By
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
          {awards.map((award, i) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm font-medium"
            >
              <Award size={14} className="text-accent-cta" />
              <span>{award}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
