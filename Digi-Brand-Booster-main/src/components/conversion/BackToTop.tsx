'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          transition={{ type: 'spring', damping: 22, stiffness: 220 }}
          onClick={scrollTop}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-40 group"
        >
          <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all">
            <ArrowUp size={20} strokeWidth={2.5} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
