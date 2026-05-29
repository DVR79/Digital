'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, Star, Shield } from 'lucide-react'
import { heroPoints, heroStats, typingTexts } from '@/lib/data'
import TypingText from '@/components/ui/TypingText'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ShimmerButton from '@/components/ui/ShimmerButton'

function parseStatValue(value: string): { num: number; suffix: string; prefix: string } {
  if (value === '90 Days') return { num: 90, prefix: '', suffix: ' Days' }
  if (value === '4.9★') return { num: 4.9, prefix: '', suffix: '★' }
  const match = value.match(/^(\$?)([\d.]+)(.*)$/)
  if (!match) return { num: 0, suffix: value, prefix: '' }
  return { prefix: match[1] || '', num: parseFloat(match[2]), suffix: match[3] || '' }
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-accent-primary/20 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-accent-secondary/20 blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full bg-purple-500/15 blur-[120px]"
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--grid-overlay)_1px,transparent_0)] [background-size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-cta/10 text-accent-cta border border-accent-cta/30 mb-6"
          >
            <Shield size={12} />
            90-Day ROI Guarantee · Only 5 New Clients This Quarter
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-[1.05] mb-6">
            Most marketing budgets get wasted.
            <br />
            <TypingText texts={typingTexts} className="gradient-text" />
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
            We&apos;re the AI-native performance marketing team. We hit <strong className="text-text-primary">88% of client growth goals</strong>, quarter after quarter. If we don&apos;t deliver measurable ROI in 90 days, you don&apos;t pay.
          </p>

          <ul className="space-y-3 mb-8">
            {heroPoints.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 text-text-primary"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <ShimmerButton href="#contact" variant="cta">
              Get My Free Growth Audit
              <ArrowRight size={18} className="ml-2" />
            </ShimmerButton>
            <ShimmerButton href="#cases" variant="outline">
              See Client Results
            </ShimmerButton>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['SP', 'PM', 'AK', 'NR'].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-9 h-9 rounded-full border-2 border-bg-dark flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: `linear-gradient(135deg, hsl(${i * 60 + 200}, 70%, 55%), hsl(${i * 60 + 240}, 70%, 45%))` }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-secondary">
                <span className="text-text-primary font-semibold">50+ brands</span> growing with us
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent-cta text-accent-cta" />
                ))}
              </div>
              <span className="text-sm text-text-secondary"><strong className="text-text-primary">4.9/5</strong> · 50+ reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Stats panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative gradient-border"
        >
          <div className="relative rounded-2xl bg-bg-card/60 backdrop-blur-xl p-8 lg:p-10">
            <span className="text-xs font-semibold tracking-wider uppercase text-accent-secondary mb-2 block">
              By The Numbers
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-8">Receipts, not promises.</h2>
            <ul className="space-y-6">
              {heroStats.map((stat, i) => {
                const parsed = parseStatValue(stat.value)
                return (
                  <motion.li
                    key={stat.value}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-3xl lg:text-4xl font-bold font-heading gradient-text min-w-[110px]">
                      <AnimatedCounter value={parsed.num} prefix={parsed.prefix} suffix={parsed.suffix} />
                    </span>
                    <span className="text-sm text-text-secondary pt-2 leading-relaxed">{stat.desc}</span>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
