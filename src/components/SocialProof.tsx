'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function SocialProof() {
  const logos = [
    '/partner/aleph_full.png',
    '/partner/gnoland_crop.png',
    '/partner/ledger.png',
    '/partner/kiln.png',
    '/partner/ramify.png',
    '/partner/scaleway.png',
    '/partner/cryptio.svg',
  ]

  return (
    <div data-section='social-proof' className='container-custom relative z-10 mt-20 md:mt-35 lg:mt-50 flex flex-col items-center justify-center text-center px-4'>
      <p className='text-md md:text-xl text-foreground max-w-4xl mb-7'>
        <b>Ils nous accompagnent dans nos projets les plus ambitieux</b>
      </p>

      <div className='w-full max-w-7xl mx-auto'>
        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12 lg:gap-16'>
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className='w-24 h-12 sm:w-28 sm:h-16 md:w-32 md:h-18 lg:w-36 lg:h-24 flex items-center justify-center'
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={logo as string}
                alt={`Logo ${index + 1}`}
                width={144}
                height={100}
                className='object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 w-full h-full'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialProof
