import React from 'react'

type AssociationContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function AssociationContactModal({ isOpen, onClose }: AssociationContactModalProps) {
  if (!isOpen) {
    return null
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className='fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
      onClick={handleBackdropClick}
    >
      <div className='relative bg-[#E2E2E21A]/90 backdrop-blur-2xl rounded-xl border border-foreground/20 w-full max-w-lg min-w-[320px] max-h-[90vh] overflow-y-auto p-6 shadow-2xl'>
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
          <h2 className='text-xl font-semibold mb-4 pr-8'>Contacter PoC Innovation</h2>

          <div className='bg-white/5 rounded-lg p-4 border border-white/10'>
            <h3 className='text-lg font-medium mb-4 break-words'>PoC Innovation</h3>

            <div className='space-y-3'>
              {/* Email link */}
              <a
                href='mailto:contact@poc-innovation.fr'
                className='flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors group min-w-0'
              >
                <div className='flex-shrink-0 w-5 h-5 text-white/60 group-hover:text-white transition-colors mt-0.5'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    <polyline points='22,6 12,13 2,6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </div>
                <div className='min-w-0 flex-1'>
                  <div className='text-xs text-white/60 mb-1'>Email</div>
                  <div className='break-all'>contact@poc-innovation.fr</div>
                </div>
              </a>

              {/* LinkedIn link */}
              <a
                href='https://linkedin.com/company/poc-innovation'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors group min-w-0'
              >
                <div className='flex-shrink-0 w-5 h-5 text-white/60 group-hover:text-white transition-colors mt-0.5'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16 8A6 6 0 0 1 6 18V16A4 4 0 0 1 16 8Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    <rect x='2' y='9' width='4' height='12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    <circle cx='4' cy='4' r='2' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </div>
                <div className='min-w-0 flex-1'>
                  <div className='text-xs text-white/60 mb-1'>LinkedIn</div>
                  <div className='break-all'>PoC Innovation</div>
                </div>
              </a>
            </div>
          </div>

          {/* Close button at bottom */}
          <div className='mt-6 flex justify-end'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 bg-transparent border border-white/30 text-white rounded-lg hover:bg-white/10 hover:border-white/50 transition-all text-sm'
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
