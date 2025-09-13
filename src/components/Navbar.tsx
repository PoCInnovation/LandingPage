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
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex bg-[#E2E2E21A]/80 border-foreground/10 rounded-4xl backdrop-blur-3xl shadow-lg px-3 sm:pl-5 sm:pr-2 items-center gap-2 sm:gap-4 md:gap-8 transition-transform duration-300 h-14 sm:h-16 w-fit min-w-fit max-w-[95vw] ${isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+2rem)]'}`}
      >
        <Image
          src='/logo_poc.png'
          alt='Logo PoC'
          width={80}
          height={80}
          className='object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards] mr-2 sm:mr-0'
          priority
        />
        <div className='flex items-center gap-4 sm:gap-6 md:gap-10 lg:gap-14 justify-center'>
          <Link href='/' className='cursor-pointer group'>
            <button className='cursor-pointer'>
              <span className='text-muted-foreground group-hover:text-white transition-colors duration-200 text-sm sm:text-lg md:text-2xl font-medium'>
                Accueil
              </span>
            </button>
          </Link>
          <Link href='/innovation' className='cursor-pointer group'>
            <button className='cursor-pointer'>
              <span className='text-muted-foreground group-hover:text-white transition-colors duration-200 text-sm sm:text-lg md:text-2xl font-medium'>
                Innovation
              </span>
            </button>
          </Link>
          <PoCButton
            className='cursor-pointer !px-3 sm:!px-4 md:!px-6 !py-2 sm:!py-3 md:!py-4'
            onClick={() => setIsContactModalOpen(true)}
          >
            <span className='text-black text-sm sm:text-lg md:text-xl font-medium'>Contact</span>
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
