'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ScrollArrow() {
  return (
    <motion.div
      className='flex flex-col items-center justify-center mt-20 md:mt-50 cursor-pointer z-10'
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={() => {
        // Smooth scroll to the next section
        const socialProof = document.querySelector('[data-section="social-proof"]')
        if (socialProof) {
          socialProof.scrollIntoView({ behavior: 'smooth' })
        }
      }}
    >
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown
          className='w-10 h-10 text-foreground'
          strokeWidth={2}
        />
      </motion.div>
    </motion.div>
  )
}
