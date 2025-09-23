'use client'

import { motion } from 'framer-motion'

export default function GlassyButton({
  children,
  onClick,
  className,
}: {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-6 py-4 font-medium text-md
        rounded-3xl
        backdrop-blur-2xl
        transition-all duration-300 ease-in-out
        hover:shadow-2xl
        shadow-xl
        tracking-wide
        cursor-pointer
        ${className}
      `}
      style={{
        backgroundColor: 'var(--color-background-secondary)',
        color: 'var(--color-foreground)',
        border: '1px solid var(--color-border-default)',
      }}
      whileHover={{
        y: -2,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        y: 0,
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
    >
      <div
        className='absolute inset-0 rounded-3xl opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none'
        style={{ backgroundColor: 'var(--color-foreground)' }}
      />

      <span className='relative z-10'>{children}</span>
    </motion.button>
  )
}
