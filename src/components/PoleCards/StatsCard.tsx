import React from 'react'

type StatsCardProps = {
  number: string
  title: string
  description: string
}

export default function StatsCard({ number, title, description }: StatsCardProps) {
  return (
    <div className='bg-[#E2E2E21A]/70 backdrop-blur-2xl rounded-xl border border-foreground/10 p-5 w-full h-full min-h-[250px]'>
      <div className='text-6xl font-bold bg-gradient-to-tr from-[#7989BC] to-[#C2D0FF] text-transparent bg-clip-text mb-6 text-center pt-4'>{number}</div>
      <h3 className='text-xl font-semibold text-white mb-2'>{title}</h3>
      <p className='text-foreground/80 text-base leading-relaxed'>{description}</p>
    </div>
  )
}
