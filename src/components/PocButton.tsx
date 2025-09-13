'use client'

import { motion } from 'framer-motion'

export default function PoCButton({
  children,
  onClick,
  className,
  bgColor = 'bg-white',
  textColor = 'text-black',
}: {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  bgColor?: string
  textColor?: string
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-6 py-4 text-black font-medium text-md
        bg-white bg-opacity-90
        rounded-3xl 
        backdrop-blur-2xl 
        transition-all duration-300 ease-in-out 
        hover:bg-opacity-95
        hover:shadow-2xl hover:shadow-black/10
        shadow-xl shadow-black/5
        tracking-wide
        overflow-hidden
        cursor-pointer
        ${className}
      `}
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
      style={{
        boxShadow: `
          0 -1px 3px -1px rgba(29, 78, 216, 0.9),
          0 -3px 7px -2px rgba(29, 78, 216, 0.7),
          0 -6px 12px -3px rgba(29, 78, 216, 0.4),
          0 -9px 18px -4px rgba(29, 78, 216, 0.2),
          0 1px 3px -1px rgba(185, 28, 28, 0.9),
          0 3px 7px -2px rgba(185, 28, 28, 0.7),
          0 6px 12px -3px rgba(185, 28, 28, 0.4),
          0 9px 18px -4px rgba(185, 28, 28, 0.2),
          0 4px 20px rgba(0, 0, 0, 0.05)
        `,
      }}
    >
      <div className='absolute inset-0 rounded-3xl p-0.5'>
        <div className='absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500 via-purple-500 to-red-600 blur-sm opacity-60' />
        <div className='absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-400 from-10% via-purple-400 via-50% to-red-500 to-90%' />
      </div>

      <div className={`absolute inset-0.5 rounded-3xl ${bgColor}`} />

      <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-100/20 to-gray-50/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

      <span className={`relative z-10 ${textColor}`}>{children}</span>
    </motion.button>
  )
}
