'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/data'
import ThemeToggle from '@/components/ui/ThemeToggle'
import SearchButton from '@/components/ui/SearchButton'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-dark/80 backdrop-blur-xl border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="Digi Brand Booster home">
          <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="20" stroke="url(#logoGrad)" strokeWidth="2.5" fill="none" />
            <path d="M24 12L30 22H18L24 12Z" fill="url(#logoGrad)" />
            <path d="M18 26H30L24 36L18 26Z" fill="url(#logoGrad)" opacity="0.6" />
          </svg>
          <span className="text-lg font-bold font-heading tracking-tight text-text-primary group-hover:text-accent-primary transition-colors">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <div className="ml-3 flex items-center gap-2">
            <SearchButton />
            <ThemeToggle />
          </div>
          <a
            href="#contact"
            className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-accent-cta to-red-500 text-white hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105"
          >
            Get Free Audit
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <SearchButton />
          <ThemeToggle />
          <button
          className="p-2 text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 bg-bg-dark/95 backdrop-blur-xl z-40 border-t border-border"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xl font-medium text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4 px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-accent-cta to-red-500 text-white"
                onClick={() => setIsOpen(false)}
              >
                Get Free Audit
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
