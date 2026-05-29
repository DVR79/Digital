'use client'

import { motion } from 'framer-motion'

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
    >
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
