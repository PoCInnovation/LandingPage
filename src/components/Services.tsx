'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import AssociationContactModal from './AssociationContactModal'
import PoCButton from './PocButton'

function Services() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className='container-custom relative z-10 mt-20 md:mt-30 flex justify-center'>
      <motion.div
        className='max-w-7xl relative mb-4 rounded-xl w-full text-center px-7 py-24 space-y-5 overflow-hidden justify-center items-center'
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-150px' }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className='absolute inset-0 rounded-xl p-0.5'>
          <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 to-blue-500' />
        </div>
        <div className='absolute inset-0.5 rounded-xl bg-background-main' />
        <div className='absolute inset-0.5 rounded-xl bg-gradient-to-r from-red-500/10 via-background-main to-blue-500/10' />
        <motion.h2
          className='relative z-10 text-xl md:text-4xl font-bold text-foreground'
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          PoC, c'est plus qu'une association.
          {' '}
          <br />
          C'est votre allié pour tous vos projets.
        </motion.h2>
        <motion.p
          className='relative z-10 text-md md:text-lg text-muted-foreground mt-8'
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          PoC évolue et franchit une nouvelle étape ! En plus d'être une
          association, PoC lance sa branche services pour réaliser vos projets
          informatiques. Du logiciel à l'application web, notre équipe
          transforme vos idées en solutions sur mesure avec expertise et
          créativité.
        </motion.p>
        <motion.div
          className='relative z-10 flex justify-center mt-8'
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <PoCButton
            bgColor='bg-black'
            onClick={() => setIsContactModalOpen(true)}
          >
            <p className='text-foreground'>En savoir plus</p>
          </PoCButton>
        </motion.div>
      </motion.div>

      <AssociationContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Contacter PoC Services"
        organizationName="PoC Services"
        email="pierre.lissope@poc-services.fr"
        linkedinUrl="https://www.linkedin.com/company/poc-services"
        linkedinLabel="PoC Services"
      />
    </div>
  )
}

export default Services
