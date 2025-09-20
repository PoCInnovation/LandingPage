import type { ContactPerson } from '../ContactModal'
import type { FeaturedProject } from './FeaturedProjects'
import React, { useState } from 'react'
import ContactModal from '../ContactModal'
import LargeEventCard from '../PoleCards/LargeEventCard'
import EventImageCard from '../PoleCards/MediumEventCard'
import ProfileCard from '../PoleCards/ProfileCard'
import StatsCard from '../PoleCards/StatsCard'
import FeaturedProjects from './FeaturedProjects'

export default function AIPoleComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const contacts: ContactPerson[] = [
    {
      name: 'Manmohit-Singh Lal',
      email: 'manmohit.singh-lal@poc-innovation.fr',
      linkedinUrl: 'https://www.linkedin.com/in/manmohit-singh-l-300b50356/',
    },
    {
      name: 'Sacha Henneveux',
      email: 'sacha.henneveux@poc-innovation.fr',
      linkedinUrl: 'https://www.linkedin.com/in/sacha-henneveux-084052304',
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
      id: 'cyrebro',
      title: 'Cyrebro',
      description:
        'Assistant de pré-consultation médicale basé sur l\'IA, développé avec l\'Institut de l’Audition et l’Institut Pasteur. Prise d\'information conversationnelle, résumé automatisé et validation de cohérence médicale.',
      tools: ['Python', 'Transformers', 'MedGamma'],
      contributors: [
        'Léandre Ramos',
        'Sacha Henneveux',
        'Antoine Béa',
        'Manmohit-Singh Lal',
      ],
      heroImage: { src: '/ai/cyrebro.png', alt: 'Cyrebro hero' },
      repoUrl: 'https://github.com/PoCInnovation/cyrebro',
    },
    {
      id: 'open-zero',
      title: 'Open-Zero',
      description:
        'Open-Zero est un projet de recherche open source visant à reproduire les méthodes AlphaZero et MuZero de DeepMind pour l’entraînement d’une IA au jeu d’échecs, en s’appuyant sur l’apprentissage par renforcement profond (notamment l’algorithme A3C).',
      tools: ['PyTorch', 'Python', 'AC3'],
      contributors: ['Gino Ambigaipalan', 'Jean-Baptiste Debize', 'Nell Fauveau', 'Bogdan Guillemoles'],
      heroImage: { src: '/ai/open-zero.png', alt: 'Open-Zero hero' },
      repoUrl: 'https://github.com/PoCInnovation/Open-Zero',
    },
    {
      id: 'infinalys',
      title: 'Infinalys',
      description:
        'infinalys est une application web de prévision boursière qui combine visualisation des données de marché et prédictions générées par une IA en apprentissage profond. Facile à déployer grâce à Docker, elle offre une interface moderne et interactive pour explorer les tendances financières.',
      tools: ['React', 'Yahoo finance', 'TensorFlow', 'Docker'],
      contributors: ['Alexandre Chetrit', 'Coline Seguret', 'Grégoire Brasseur', 'Robin Christol', 'Paul Monnery'],
      heroImage: { src: '/ai/infinalys.png', alt: 'Infinalys hero' },
      repoUrl: 'https://github.com/PoCInnovation/Infinalys2',
    },
    {
      id: 'deep-poc',
      title: 'Deep-PoC',
      description:
        'Deep-PoC est un outil de détection de deepfakes capable d’identifier les contenus manipulés (images ou vidéos) grâce à l’intelligence artificielle. Il permet d’analyser et de signaler les falsifications visuelles afin de lutter contre la désinformation et les usages malveillants.',
      tools: ['Python', 'PyTorch', 'Django', 'Matplotlib'],
      contributors: ['Mikael Vallenet', 'Valentin De Matos', 'Victor Guyot'],
      heroImage: { src: '/ai/deep-poc.png', alt: 'Deep-PoC hero' },
      repoUrl: 'https://github.com/PoCInnovation/Deep-PoC',
    },
  ]

  return (
    <div className='w-full'>
      {/* Mobile: single column */}
      <div className='grid grid-cols-1 gap-4 md:hidden px-4'>
        <ProfileCard
          name='Manmohit-Singh Lal et Sacha Henneveux'
          role='Responsables IA'
          imageSrc='/ai/ia_respo.png'
          imageAlt='Manmohit-Singh Lal et Sacha Henneveux, Responsables IA'
          onContactClick={handleContactClick}
        />
        <StatsCard
          number='20+'
          title='Projets complétés'
          description="Des modèles d'IA multimodal à la détection de deepfakes. Ces projets mêlent recherche appliquée et innovation technique."
        />
        <StatsCard
          number='50+'
          title='Workshops de découverte animés'
          description="Des workshops couvrant toutes les notions fondamentales : IA générative, traitement d'image, NLP, apprentissage supervisé et non-supervisé..."
        />
        <EventImageCard
          imageSrc='/ai/hackathon-google.jpeg'
          imageAlt='Hackathon Google'
          title='Hackathon Google'
          date='5 Juillet 2025'
        />
        <EventImageCard
          imageSrc='/ai/siami.jpeg'
          imageAlt="Salon IA ministère de l'intérieur"
          title="Salon IA ministère de l'intérieur"
          date='8 Octobre 2024'
        />
        <LargeEventCard
          imageSrc='/ai/mistral-hackathon.jpeg'
          imageAlt='Hackathon Mistral'
          title='Hackathon Mistral'
          date='19 Avril 2025'
        />
      </div>

      {/* Medium screens (md to xl): 2 columns layout using full width */}
      <div className='hidden md:grid md:grid-cols-2 xl:hidden gap-4 px-4 grid-rows-2'>
        {/* Profile Card spans 2 rows */}
        <div className='row-span-2'>
          <ProfileCard
            name='Manmohit-Singh Lal et Sacha Henneveux'
            role='Responsables IA'
            imageSrc='/ai/ia_respo.png'
            imageAlt='Manmohit-Singh Lal et Sacha Henneveux, Responsables IA'
            onContactClick={handleContactClick}
          />
        </div>

        {/* Right column cards */}
        <StatsCard
          number='20+'
          title='Projets complétés'
          description="Des modèles d'IA multimodal à la détection de deepfakes. Ces projets mêlent recherche appliquée et innovation technique."
        />
        <StatsCard
          number='50+'
          title='Workshops de découverte animés'
          description="Des workshops couvrant toutes les notions fondamentales : IA générative, traitement d'image, NLP, apprentissage supervisé et non-supervisé..."
        />

        {/* Event Cards in bottom row */}
        <EventImageCard
          imageSrc='/ai/siami.jpeg'
          imageAlt="Salon IA ministère de l'intérieur"
          title="Salon IA ministère de l'intérieur"
          date='8 Octobre 2024'
        />
        <EventImageCard
          imageSrc='/ai/hackathon-google.jpeg'
          imageAlt='Hackathon Google'
          title='Hackathon Google'
          date='5 Juillet 2025'
        />

        {/* Large Event Card spans full width */}
        <div className='col-span-2'>
          <LargeEventCard
            imageSrc='/ai/mistral-hackathon.jpeg'
            imageAlt='Hackathon Mistral'
            title='Hackathon Mistral'
            date='19 Avril 2025'
          />
        </div>
      </div>

      {/* Large screens (xl and above): 4 equal columns using full viewport width */}
      <div className='hidden xl:grid xl:grid-cols-4 gap-4 2xl:gap-6 px-4 2xl:px-8'>
        {/* Profile Card - Column 1 */}
        <div className='col-span-1'>
          <ProfileCard
            name='Manmohit-Singh Lal et Sacha Henneveux'
            role='Responsables IA'
            imageSrc='/ai/ia_respo.png'
            imageAlt='Manmohit-Singh Lal et Sacha Henneveux, Responsables IA'
            onContactClick={handleContactClick}
          />
        </div>

        {/* Stats Cards - Column 2 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <StatsCard
            number='20+'
            title='Projets complétés'
            description="Des modèles d'IA multimodal à la détection de deepfakes. Ces projets mêlent recherche appliquée et innovation technique."
          />
          <StatsCard
            number='50+'
            title='Workshops de découverte animés'
            description="Des workshops couvrant toutes les notions fondamentales : IA générative, traitement d'image, NLP, apprentissage supervisé et non-supervisé..."
          />
        </div>

        {/* Event Cards - Column 3 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <EventImageCard
            imageSrc='/ai/hackathon-google.jpeg'
            imageAlt='Hackathon Google'
            title='Hackathon Google'
            date='5 Juillet 2025'
          />
          <EventImageCard
            imageSrc='/ai/siami.jpeg'
            imageAlt="Salon IA ministère de l'intérieur"
            title="Salon IA ministère de l'intérieur"
            date='8 Octobre 2024'
          />
        </div>

        {/* Large Event Card - Column 4 */}
        <div className='col-span-1'>
          <LargeEventCard
            imageSrc='/ai/mistral-hackathon.jpeg'
            imageAlt='Hackathon Mistral'
            title='Hackathon Mistral'
            date='19 Avril 2025'
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
        title="Contacter l'équipe IA"
        contacts={contacts}
      />
    </div>
  )
}
