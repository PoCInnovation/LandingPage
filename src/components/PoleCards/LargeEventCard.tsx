import React from 'react'

type LargeEventCardProps = {
  imageSrc: string
  imageAlt: string
  title: string
  date: string
}

export default function LargeEventCard({ imageSrc, imageAlt, title, date }: LargeEventCardProps) {
  return (
    <div className='relative bg-[#E2E2E21A]/70 backdrop-blur-2xl rounded-xl border border-foreground/10 overflow-hidden w-full h-full min-h-[250px]'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src={imageSrc}
          alt={imageAlt}
          className='w-full h-full object-cover'
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
