import type { FeaturedProject } from './FeaturedProjects'
import React from 'react'
import LargeEventCard from '../PoleCards/LargeEventCard'
import EventImageCard from '../PoleCards/MediumEventCard'
import ProfileCard from '../PoleCards/ProfileCard'
import StatsCard from '../PoleCards/StatsCard'
import FeaturedProjects from './FeaturedProjects'

export default function SoftwarePoleComponent() {
  const handleContactClick = () => {
    // Create and trigger mailto link with window.open for better browser compatibility
    const mailtoUrl = 'mailto:contact@poc-innovation.fr?subject=Contact%20Software%20Team'
    window.open(mailtoUrl, '_self')
  }

  const featuredProjects: FeaturedProject[] = [
    {
      id: 'sveno',
      title: 'Sveno',
      description:
        'Un outil permettant de convertir n\'importe quelle application React JS en application Svelte. Sveno vise à devenir un outil puissant capable de transpiler des projets complets et d\'aider les développeurs.',
      tools: ['Python', 'JS', 'Regex'],
      contributors: [
        'Allan Deleve',
        'Amoz Pay',
        'Baptiste Barbotin',
        'Tom Chaveau',
      ],
      heroImage: { src: '/soft/sveno.png', alt: 'Sveno hero' },
      repoUrl: 'https://github.com/PoCInnovation/Sveno',
    },
    {
      id: 'asyncFlow',
      title: 'AsyncFlow',
      description:
        'Une librairie JavaScript pour créer des tâches serverless sur le cloud à l\'intérieur de votre code qui prend en charge Node, Python, Java, Ruby et Go.',
      tools: ['Typescript', 'SWC', 'AWS Lambda'],
      contributors: ['Pierre Riss', 'Loan Riyanto', 'Laurent Gonzalez'],
      heroImage: { src: '/soft/asyncflow.png', alt: 'AsyncFlow hero' },
      repoUrl: 'https://github.com/PoCInnovation/AsyncFlow',
    },
    {
      id: 'ipc',
      title: 'InterPlanetaryCloud',
      description:
        'InterPlanetaryCloud est une plateforme web qui permet un accès simple à un système de stockage de fichiers décentralisé et chiffré ainsi qu‘à du cloud computing avec le déploiement de programmes avec les VM d‘Aleph.',
      tools: ['Typescript', 'Aleph', 'IPFS'],
      contributors: ['Lucas Louis', 'Reza Rahemtola', 'Adrien Fort', 'Et beaucoup d\'autres !'],
      heroImage: { src: '/soft/ipc.png', alt: 'InterPlanetaryCloud hero' },
      repoUrl: 'https://github.com/PoCInnovation/InterPlanetaryCloud',
    },
    {
      id: 'dagviz',
      title: 'DagViz',
      description:
        'DagViz affiche toutes les informations relatives aux définitions d\'un programme CUE et à ses dépendances via les DAG, ce qui conduit souvent à des bugs, des dépendances circulaires et des schémas non optimisés.',
      tools: ['CUE', 'Typescript', 'Go'],
      contributors: ['Ismaël Fall', 'Florian Lauch', 'Adrien Fort'],
      heroImage: { src: '/soft/dagviz.png', alt: 'DabViz hero' },
      repoUrl: 'https://github.com/PoCInnovation/DagViz',
    },
  ]

  return (
    <div className='w-full'>
      {/* Mobile: single column */}
      <div className='grid grid-cols-1 gap-4 md:hidden px-4'>
        <ProfileCard
          name='Laurent Gonzalez et Milo Kowalska'
          role='Responsables Software'
          imageSrc='/soft/soft_respo.png'
          imageAlt='Laurent Gonzalez et Milo Kowalska, Responsables Software'
          onContactClick={handleContactClick}
        />
        <StatsCard
          number='20+'
          title='Projets complétés'
          description="Du SDK serverless à la génération d'API ou la migration front, nos projets explorent les outils et frameworks les plus actuels."
        />
        <StatsCard
          number='30+'
          title='Workshops de découverte'
          description='Découverte des frameworks les plus utilisés, les différents langages, les bases de données, tests, déploiement et bien plus encore.'
        />
        <EventImageCard
          imageSrc='/soft/nasa_hackathon_3.png'
          imageAlt='Hackathon Nasa'
          title='Hackathon Nasa Space apps challenge'
          date='3 octobre 2021'
        />
        <EventImageCard
          imageSrc='/soft/vivatech.jpg'
          imageAlt='Salon Vivatech'
          title='Salon Vivatech'
          date='22 mai 2024'
        />
        <LargeEventCard
          imageSrc='/soft/hackathon_facebook.jpeg'
          imageAlt='Hackathon facebook'
          title='Hackathon facebook'
          date='novembre 2018'
        />
      </div>

      {/* Medium screens (md to xl): 2 columns layout using full width */}
      <div className='hidden md:grid md:grid-cols-2 xl:hidden gap-4 px-4 auto-rows-auto'>
        {/* Profile Card spans 2 rows */}
        <div className='row-span-2'>
          <ProfileCard
            name='Laurent Gonzalez et Milo Kowalska'
            role='Responsables Software'
            imageSrc='/soft/soft_respo.png'
            imageAlt='Laurent Gonzalez et Milo Kowalska, Responsables Software'
            onContactClick={handleContactClick}
          />
        </div>

        {/* Right column with other cards */}
        <div className='flex flex-col gap-4'>
          <StatsCard
            number='20+'
            title='Projets complétés'
            description="Du SDK serverless à la génération d'API ou la migration front, nos projets explorent les outils et frameworks les plus actuels."
          />
          <StatsCard
            number='30+'
            title='Workshops de découverte'
            description='Découverte des frameworks les plus utilisés, les différents langages, les bases de données, tests, déploiement et bien plus encore.'
          />
        </div>

        {/* Event Cards in bottom row */}
        <EventImageCard
          imageSrc='/soft/vivatech.jpg'
          imageAlt='Salon Vivatech'
          title='Salon Vivatech'
          date='22 mai 2024'
        />
        <EventImageCard
          imageSrc='/soft/nasa_hackathon_3.png'
          imageAlt='Hackathon Nasa'
          title='Hackathon Nasa Space apps challenge'
          date='3 octobre 2021'
        />

        {/* Large Event Card spans full width */}
        <div className='col-span-2'>
          <LargeEventCard
            imageSrc='/soft/hackathon_facebook.jpeg'
            imageAlt='Hackathon facebook'
            title='Hackathon facebook'
            date='novembre 2018'
          />
        </div>
      </div>

      {/* Large screens (xl and above): 4 equal columns using full viewport width */}
      <div className='hidden xl:grid xl:grid-cols-4 gap-4 2xl:gap-6 px-4 2xl:px-8'>
        {/* Profile Card - Column 1 */}
        <div className='col-span-1'>
          <ProfileCard
            name='Laurent Gonzalez et Milo Kowalska'
            role='Responsables Software'
            imageSrc='/soft/soft_respo.png'
            imageAlt='Laurent Gonzalez et Milo Kowalska, Responsables Software'
            onContactClick={handleContactClick}
          />
        </div>

        {/* Stats Cards - Column 2 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <StatsCard
            number='20+'
            title='Projets complétés'
            description="Du SDK serverless à la génération d'API ou la migration front, nos projets explorent les outils et frameworks les plus actuels."
          />
          <StatsCard
            number='30+'
            title='Workshops de découverte'
            description='Découverte des frameworks les plus utilisés, les différents langages, les bases de données, tests, déploiement et bien plus encore.'
          />
        </div>

        {/* Event Cards - Column 3 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <EventImageCard
            imageSrc='/soft/nasa_hackathon_3.png'
            imageAlt='Hackathon Nasa'
            title='Hackathon Nasa Space apps challenge'
            date='3 octobre 2021'
          />
          <EventImageCard
            imageSrc='/soft/vivatech.jpg'
            imageAlt='Salon Vivatech'
            title='Salon Vivatech'
            date='22 mai 2024'
          />
        </div>

        {/* Large Event Card - Column 4 */}
        <div className='col-span-1'>
          <LargeEventCard
            imageSrc='/soft/hackathon_facebook.jpeg'
            imageAlt='Hackathon facebook'
            title='Hackathon facebook'
            date='novembre 2018'
          />
        </div>
      </div>

      <div className='w-full px-4'>
        <FeaturedProjects projects={featuredProjects} />
      </div>
    </div>
  )
}
