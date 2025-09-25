'use client'
/* eslint-disable perfectionist/sort-imports */
/* eslint-disable perfectionist/sort-named-imports */
/* eslint-disable style/indent */
/* eslint-disable style/comma-dangle */

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin } from 'lucide-react'

type AssociationContactModalProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  organizationName?: string
  email?: string
  linkedinUrl?: string
  linkedinLabel?: string
}

export default function AssociationContactModal({
  isOpen,
  onClose,
  title = 'Contacter PoC Innovation',
  organizationName = 'PoC Innovation',
  email = 'contact@poc-innovation.fr',
  linkedinUrl = 'https://linkedin.com/company/poc-innovation',
  linkedinLabel = 'PoC Innovation'
}: AssociationContactModalProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            className='relative bg-[#E2E2E21A]/90 backdrop-blur-2xl rounded-xl border border-foreground/20 w-full max-w-2xl min-w-[320px] max-h-[90vh] overflow-y-auto p-6 shadow-2xl'
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
        {/* Close button */}
        <button
          type='button'
          onClick={onClose}
          className='absolute top-4 right-4 text-white/70 hover:text-white transition-colors'
          aria-label='Close modal'
        >
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M18 6L6 18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M6 6L18 18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </button>

        {/* Modal content */}
        <div className='text-white'>
          <h2 className='text-lg sm:text-xl font-semibold mb-4 pr-8'>{title}</h2>

          <div className='bg-white/5 rounded-lg p-4 border border-white/10'>
            <h3 className='text-base sm:text-lg font-medium mb-4 break-words'>{organizationName}</h3>

            <div className='space-y-3'>
              {/* Email link */}
              <a
                href={`mailto:${email}`}
                className='flex items-start gap-3 text-xs sm:text-sm text-white/80 hover:text-white transition-colors group min-w-0'
              >
                <div className='flex-shrink-0 w-5 h-5 text-white/60 group-hover:text-white transition-colors mt-0.5'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    <polyline points='22,6 12,13 2,6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </div>
                <div className='min-w-0 flex-1'>
                  <div className='text-xs text-white/60 mb-1'>Email</div>
                  <div className='break-all'>{email}</div>
                </div>
              </a>

              {/* LinkedIn link */}
              <a
                href={linkedinUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-start gap-3 text-xs sm:text-sm text-white/80 hover:text-white transition-colors group min-w-0'
              >
                <div className='flex-shrink-0 w-5 h-5 text-white/60 group-hover:text-white transition-colors mt-0.5'>
                  <Linkedin className='w-5 h-5' />
                </div>
                <div className='min-w-0 flex-1'>
                  <div className='text-xs text-white/60 mb-1'>LinkedIn</div>
                  <div className='break-all'>{linkedinLabel}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Close button at bottom */}
          <div className='mt-6 flex justify-end'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 bg-transparent border border-white/30 text-white rounded-lg hover:bg-white/10 hover:border-white/50 transition-all text-xs sm:text-sm'
            >
              Fermer
            </button>
          </div>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
