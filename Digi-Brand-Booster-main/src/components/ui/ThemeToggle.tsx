'use client'

import { useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

type Theme = 'dark' | 'light'

function getSnapshot(): Theme {
  return document.documentElement.classList.contains('light') ? 'light' : 'dark'
}

function getServerSnapshot(): Theme {
  return 'dark'
}

function subscribe(callback: () => void) {
  window.addEventListener('themechange', callback)
  return () => window.removeEventListener('themechange', callback)
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(subscribe, getSnapshot, getServerSnapshot)

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('light', next === 'light')
    try {
      localStorage.setItem('theme', next)
    } catch {}
    window.dispatchEvent(new Event('themechange'))
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative w-10 h-10 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary glass hover:border-accent-primary/30 transition-colors overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <Moon size={16} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <Sun size={16} className="text-accent-cta" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
