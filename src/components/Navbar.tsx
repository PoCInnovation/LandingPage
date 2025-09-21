'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import AssociationContactModal from './AssociationContactModal'
import PoCButton from './PocButton'

function GlassyNavbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex bg-[#E2E2E21A]/80 border-foreground/10 rounded-4xl backdrop-blur-3xl shadow-lg shadow-white/10 px-2 sm:pl-4 sm:pr-2 md:pr-2 items-center gap-1 sm:gap-3 md:gap-6 transition-transform duration-300 h-14 sm:h-16 w-fit min-w-[280px] sm:min-w-[355px] md:min-w-[460px] ${isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+2rem)]'}`}
      >
        <Image
          src='/logo_poc.png'
          alt='Logo PoC'
          width={80}
          height={80}
          className='object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards] ml-1 sm:ml-2 md:ml-3 mr-2 sm:mr-3 md:mr-4'
          priority
        />
        <div className='flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
          <Link href='/' className='cursor-pointer group'>
            <button className='cursor-pointer' type='button'>
              <span className='text-muted-foreground group-hover:text-white group-active:text-white transition-colors duration-200 text-xs sm:text-sm md:text-lg font-medium'>
                Accueil
              </span>
            </button>
          </Link>
          <Link href='/innovation' className='cursor-pointer group'>
            <button className='cursor-pointer' type='button'>
              <span className='text-muted-foreground group-hover:text-white group-active:text-white transition-colors duration-200 text-xs sm:text-sm md:text-lg font-medium'>
                Innovation
              </span>
            </button>
          </Link>
          <PoCButton
            className='cursor-pointer !px-2 sm:!px-4 md:!px-6 !py-1.5 sm:!py-3 md:!py-4'
            onClick={() => setIsContactModalOpen(true)}
          >
            <span className='text-black text-xs sm:text-sm md:text-base font-medium mx-1 sm:mx-0'>Contact</span>
          </PoCButton>
        </div>
      </div>

      {/* Association Contact Modal - outside navbar container */}
      <AssociationContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}

export default GlassyNavbar
