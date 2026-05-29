'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('stickyCtaDismissed')) return

    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    try {
      sessionStorage.setItem('stickyCtaDismissed', '1')
    } catch {}
  }

  if (dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:bottom-6 z-40 max-w-md"
        >
          <div className="relative gradient-border rounded-2xl">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-card/90 backdrop-blur-xl">
              <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/10 transition-colors"
              >
                <X size={14} />
              </button>
              <p className="text-sm flex-1 min-w-0">
                <span className="font-semibold">Only 5 spots this quarter.</span>{' '}
                <span className="text-text-secondary">Claim your free audit.</span>
              </p>
              <a
                href="#contact"
                className="shrink-0 inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-accent-cta to-red-500 text-white text-sm font-semibold hover:scale-105 transition-transform"
              >
                Get Audit <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
