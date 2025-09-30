'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import GlassyStatCard from './GlassyStatCard'

function Association() {
  return (
    <div className='container-custom relative z-10 mt-10 md:mt-30 flex flex-col items-center justify-center text-center px-4'>
      <motion.h2
        className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4'
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Au cœur de l&apos;association
      </motion.h2>

      <div className='mt-6 w-full max-w-7xl'>
        <div className='flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0 items-center lg:items-start'>
          <motion.div
            className='w-full lg:w-2/5 xl:w-[45%]'
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Image
              src='/poc_home_2.jpg'
              alt='Conference'
              width={583}
              height={400}
              className='
                w-full
                h-[300px] sm:h-[400px] md:h-[456px] lg:h-[516px]
                rounded-lg shadow-md border border-foreground/10
                object-cover
              '
            />
          </motion.div>

          <motion.div
            className='w-full lg:w-3/5 xl:w-[55%]'
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-4 xl:gap-5'>
              {[
                {
                  statText: '25+',
                  title: 'Membres actifs',
                  description:
                    'Présent dans plusieurs campus dans toute la France dont en majorité Paris et Lyon.',
                  delay: 0.8,
                },
                {
                  statText: '125+',
                  title: 'Projets complétés',
                  description:
                    'PoC entreprend de nombreux projets indépendant ou en collaboration avec une entreprise.',
                  delay: 1.0,
                },
                {
                  statText: '300+',
                  title: 'Évenements',
                  description:
                    'A destination d’étudiants et de professionnels dans toute la France.',
                  delay: 0.8,
                },
                {
                  statText: '200+',
                  title: 'Alumni dans le monde',
                  description:
                    'De start-ups aux géants de la tech comme Google ou Microsoft, nos anciens propagent l’ADN PoC aux quatre coins du globe.',
                  delay: 0.9,
                },
              ].map(card => (
                <motion.div
                  key={`${card.title}-${card.statText}`}
                  initial={{ y: 15 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: card.delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <GlassyStatCard
                    statText={card.statText}
                    title={card.title}
                    description={card.description}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Association
