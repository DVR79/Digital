'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CursorFollower() {
  const [visible, setVisible] = useState(false)
  const cursorX = useSpring(0, { stiffness: 500, damping: 30 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 30 })
  const ringX = useSpring(0, { stiffness: 200, damping: 25 })
  const ringY = useSpring(0, { stiffness: 200, damping: 25 })

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
    }
  }, [cursorX, cursorY, ringX, ringY, visible])

  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-primary z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%', opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-accent-primary/40 z-[9999] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%', opacity: visible ? 1 : 0 }}
      />
    </>
  )
}
