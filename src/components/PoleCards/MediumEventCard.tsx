import Image from 'next/image'
import React from 'react'

type EventImageCardProps = {
  imageSrc: string
  imageAlt: string
  title: string
  date: string
  priority?: boolean
}

export default function MediumEventCard({ imageSrc, imageAlt, title, date, priority = false }: EventImageCardProps) {
  return (
    <div className='relative bg-[#E2E2E21A]/70 backdrop-blur-2xl rounded-xl border border-foreground/10 overflow-hidden w-full h-full min-h-[250px]'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
          priority={priority}
          loading={priority ? undefined : 'eager'}
        />
        {/* Gradient noir de bas en haut pour plus de contraste */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent' />
      </div>

      {/* Content positioned at bottom */}
      <div className='absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end'>
        {/* Left side - Name and Role */}
        <div className='text-white'>
          <h3 className='text-lg font-semibold mb-1'>{title}</h3>
          <p className='text-sm text-white/80'>{date}</p>
        </div>
      </div>
    </div>
  )
}
