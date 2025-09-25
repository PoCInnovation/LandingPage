import React from 'react'

type StatsCardProps = {
  number: string
  title: string
  description: string
}

export default function StatsCard({ number, title, description }: StatsCardProps) {
  return (
    <div className='bg-[#1B1B24]/85 backdrop-blur-6xl rounded-xl border border-foreground/10 p-5 w-full h-full min-h-[250px] flex flex-col justify-start'>
      <div className='text-6xl lg:text-8xl xl:text-6xl font-bold bg-gradient-to-tr from-[#7989BC] to-[#C2D0FF] text-transparent bg-clip-text mb-6 lg:mb-2 xl:mb-6 text-center pt-4 lg:pt-2 xl:pt-4 flex-shrink-0'>{number}</div>
      <div className='mt-auto'>
        <h3 className='text-xl font-semibold text-foreground mb-2'>{title}</h3>
        <p className='text-foreground/90 text-base leading-relaxed'>{description}</p>
      </div>
    </div>
  )
}
