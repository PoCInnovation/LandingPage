import type { ContactPerson } from '../ContactModal'
import type { FeaturedProject } from './FeaturedProjects'
import React, { useState } from 'react'
import ContactModal from '../ContactModal'
import LargeEventCard from '../PoleCards/LargeEventCard'
import EventImageCard from '../PoleCards/MediumEventCard'
import ProfileCard from '../PoleCards/ProfileCard'
import StatsCard from '../PoleCards/StatsCard'
import FeaturedProjects from './FeaturedProjects'

export default function P2PPoleComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const contacts: ContactPerson[] = [
    {
      name: 'Aurelien Demeusy',
      email: 'aurelien.demeusy@poc-innovation.fr',
      linkedinUrl: 'https://www.linkedin.com/in/aurelien-demeusy/',
    },
    {
      name: 'Jules Lordet',
      email: 'jules.lordet@poc-innovation.fr',
      linkedinUrl: 'https://www.linkedin.com/in/jules-lordet-9798a12b3/',
    },
  ]

  const handleContactClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const featuredProjects: FeaturedProject[] = [
    {
      id: 'mev-tracker',
      title: 'MEV Tracker',
      description:
        'Un programme qui analyse les transactions en attente sur la blockchain Ethereum et qui peut déterminer si elles ont été émises par un bot. Il est basé sur un modèle d’intelligence artificielle entraîné à détecter les transactions émises par des bots.',
      tools: ['PyTorch', 'NumPy', 'Python', 'Go'],
      contributors: [
        'Alexandre Grare',
        'Elyes Toumi',
        'Onsager He',
      ],
      heroImage: { src: '/p2p/mev-tracker.png', alt: 'MEV Tracker hero' },
      repoUrl: 'https://github.com/PoCInnovation/MEV-Tracker',
    },
    {
      id: 'dao',
      title: 'Superfluid-DAO',
      description:
        'Superfluid DAO permet aux utilisateurs de créer et d’interagir avec une DAO où la participation est essentielle. En utilisant le protocole Superfluid, les utilisateurs doivent s’impliquer activement, faute de quoi ils risquent de perdre des tokens. Cela encourage une implication active et une gouvernance participative au sein de la communauté.',
      tools: ['Solidity', 'Foundry'],
      contributors: ['Mehdi Djendar', 'mounia ARJDAL', 'Lyam Gomès', 'Martin Saldinger'],
      heroImage: { src: '/p2p/superfluid-dao.png', alt: 'Superfluid DAO hero' },
      repoUrl: 'https://github.com/PoCInnovation/Superfluid-DAO',
    },
    {
      id: 'price-sensor',
      title: 'Price Sensor',
      description:
        'Price sensor est une implémentation d’un capteur de prix pour le protocole Mangrove. Sa nature abstraite lui permet d’être facilement intégré dans différents types d’offres intelligentes.',
      tools: ['Solidity', 'Mangrove'],
      contributors: ['Martin Saldinger', 'Nathan Flattin', 'Ismaël Fall'],
      heroImage: { src: '/p2p/price-sensor.png', alt: 'NFT Marketplace hero' },
      repoUrl: 'https://github.com/PoCInnovation/Price-Sensor',
    },
    {
      id: 'poc-ether',
      title: 'PoCEther',
      description:
        'PoCEther est une plateforme de challenges en sécurité dédiée à la blockchain. Elle permet aux utilisateurs d’explorer et de résoudre des exercices pratiques couvrant différentes vulnérabilités et attaques possibles sur des smart contracts.',
      tools: ['Solidity', 'Truffle', 'React'],
      contributors: ['Lucas Louis', 'Matéo Viel'],
      heroImage: { src: '/p2p/pocether.png', alt: 'Bridge Protocol hero' },
      repoUrl: 'https://github.com/PoCInnovation/PoCEther',
    },
  ]

  return (
    <div className='w-full'>
      {/* Mobile: single column */}
      <div className='grid grid-cols-1 gap-4 md:hidden px-4'>
        <ProfileCard
          name='Aurelien Demeusy et Jules Lordet'
          role='Responsables Blockchain'
          imageSrc='/p2p/p2p_respo.png'
          imageAlt='Aurelien Demeusy et Jules Lordet, Responsables Blockchain'
          onContactClick={handleContactClick}
        />
        <StatsCard
          number='20+'
          title='Projets complétés'
          description='Nos membres développent des dApps open-source : protocoles DeFi, crowdfunding, outils DAO ou stockage décentralisé.'
        />
        <StatsCard
          number='10+'
          title='Workshops de découverte'
          description='Des workshops couvrant toutes les bases : Ethereum, smart contracts en Solidity, gestion de tokens, DAOs, sécurité et interactions on-chain.'
        />
        <EventImageCard
          imageSrc='/p2p/ethglobal.jpg'
          imageAlt='Hackathon ETHGlobal Cannes'
          title='Hackathon ETHGlobal Cannes'
          date='4 Juillet 2025'
        />
        <EventImageCard
          imageSrc='/p2p/haks.jpg'
          imageAlt='Hackathon Haks'
          title='Hackathon Haks'
          date='12 Mai 2023'
        />
        <LargeEventCard
          imageSrc='/p2p/krypto-tour.png'
          imageAlt='Salon Krypto Tour Lyon'
          title='Salon Krypto Tour Lyon'
          date='11 octobre 2024'
        />
      </div>

      {/* Medium screens (md to xl): 2 columns layout using full width */}
      <div className='hidden md:grid md:grid-cols-2 xl:hidden gap-4 px-4 auto-rows-auto'>
        {/* Profile Card spans 2 rows */}
        <div className='row-span-2'>
          <ProfileCard
            name='Aurelien Demeusy et Jules Lordet'
            role='Responsables Blockchain'
            imageSrc='/p2p/p2p_respo.png'
            imageAlt='Aurelien Demeusy et Jules Lordet, Responsables Blockchain'
            onContactClick={handleContactClick}
          />
        </div>

        {/* Right column with other cards */}
        <div className='flex flex-col gap-4'>
          <StatsCard
            number='20+'
            title='Projets complétés'
            description='Nos membres développent des dApps open-source : protocoles DeFi, crowdfunding, outils DAO ou stockage décentralisé.'
          />
          <StatsCard
            number='10+'
            title='Workshops de découverte'
            description='Des workshops couvrant toutes les bases : Ethereum, smart contracts en Solidity, gestion de tokens, DAOs, sécurité et interactions on-chain.'
          />
        </div>

        {/* Event Cards in bottom row */}
        <EventImageCard
          imageSrc='/p2p/ethglobal.jpg'
          imageAlt='Hackathon ETHGlobal Cannes'
          title='Hackathon ETHGlobal Cannes'
          date='4 Juillet 2025'
        />
        <EventImageCard
          imageSrc='/p2p/haks.jpg'
          imageAlt='Hackathon Haks'
          title='Hackathon Haks'
          date='12 Mai 2023'
        />

        {/* Large Event Card spans full width */}
        <div className='col-span-2'>
          <LargeEventCard
            imageSrc='/p2p/krypto-tour.png'
            imageAlt='Salon Krypto Tour Lyon'
            title='Salon Krypto Tour Lyon'
            date='11 octobre 2024'
          />
        </div>
      </div>

      {/* Large screens (xl and above): 4 equal columns using full viewport width */}
      <div className='hidden xl:grid xl:grid-cols-4 gap-4 2xl:gap-6 px-4 2xl:px-8'>
        {/* Profile Card - Column 1 */}
        <div className='col-span-1'>
          <ProfileCard
            name='Aurelien Demeusy et Jules Lordet'
            role='Responsables Blockchain'
            imageSrc='/p2p/p2p_respo.png'
            imageAlt='Aurelien Demeusy et Jules Lordet, Responsables Blockchain'
            onContactClick={handleContactClick}
          />
        </div>

        {/* Stats Cards - Column 2 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <StatsCard
            number='20+'
            title='Projets complétés'
            description='Nos membres développent des dApps open-source : protocoles DeFi, crowdfunding, outils DAO ou stockage décentralisé.'
          />
          <StatsCard
            number='10+'
            title='Workshops de découverte'
            description='Des workshops couvrant toutes les bases : Ethereum, smart contracts en Solidity, gestion de tokens, DAOs, sécurité et interactions on-chain.'
          />
        </div>

        {/* Event Cards - Column 3 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <EventImageCard
            imageSrc='/p2p/ethglobal.jpg'
            imageAlt='Hackathon ETHGlobal Cannes'
            title='Hackathon ETHGlobal Cannes'
            date='4 Juillet 2025'
          />
          <EventImageCard
            imageSrc='/p2p/haks.jpg'
            imageAlt='Hackathon Haks'
            title='Hackathon Haks'
            date='12 Mai 2023'
          />
        </div>

        {/* Large Event Card - Column 4 */}
        <div className='col-span-1'>
          <LargeEventCard
            imageSrc='/p2p/krypto-tour.png'
            imageAlt='Salon Krypto Tour Lyon'
            title='Salon Krypto Tour Lyon'
            date='11 octobre 2024'
          />
        </div>
      </div>

      <div className='w-full px-4'>
        <FeaturedProjects projects={featuredProjects} />
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Contacter l'équipe Blockchain"
        contacts={contacts}
      />
    </div>
  )
}
