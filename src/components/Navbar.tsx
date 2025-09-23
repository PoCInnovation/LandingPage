'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import AssociationContactModal from './AssociationContactModal'
import PoCButton from './PocButton'

function GlassyNavbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const { theme } = useTheme()
  const pathname = usePathname()

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
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex bg-background-secondary/80 border-border-default/10 rounded-4xl backdrop-blur-3xl shadow-lg shadow-foreground/10 px-2 sm:pl-4 sm:pr-2 md:pr-2 items-center gap-1 sm:gap-3 md:gap-4 transition-transform duration-300 h-14 sm:h-16 w-fit min-w-[260px] sm:min-w-[320px] md:min-w-[400px] ${isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+2rem)]'}`}
      >
        <Link href='/' className='cursor-pointer'>
          <Image
            src={theme === 'light' ? '/logo_black.svg' : '/logo_white.svg'}
            alt='Logo PoC'
            width={80}
            height={80}
            className='object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards] ml-1 sm:ml-2 md:ml-3 mr-2 sm:mr-3 md:mr-4 hover:opacity-80 transition-opacity duration-200'
            priority
          />
        </Link>
        <div className='flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
          <Link href='/' className='cursor-pointer group'>
            <button className='cursor-pointer' type='button'>
              <span className={`transition-colors duration-200 text-xs sm:text-sm md:text-lg font-medium ${
                pathname === '/'
                  ? 'text-foreground'
                  : 'text-muted-foreground group-hover:text-foreground group-active:text-foreground'
              }`}>
                Accueil
              </span>
            </button>
          </Link>
          <Link href='/innovation' className='cursor-pointer group'>
            <button className='cursor-pointer' type='button'>
              <span className={`transition-colors duration-200 text-xs sm:text-sm md:text-lg font-medium ${
                pathname === '/innovation'
                  ? 'text-foreground'
                  : 'text-muted-foreground group-hover:text-foreground group-active:text-foreground'
              }`}>
                Pôles
              </span>
            </button>
          </Link>
          <PoCButton
            className='cursor-pointer !px-2 sm:!px-4 md:!px-6 !py-1.5 sm:!py-3 md:!py-4'
            onClick={() => setIsContactModalOpen(true)}
          >
            Contact
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
