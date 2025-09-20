import React from 'react'

function GlassyStatCard({
  className,
  statText,
  title,
  description,
}: {
  className?: string
  statText: string
  title: string
  description: string
}) {
  return (
    <div
      className={`
        p-3 sm:p-5 md:p-5 lg:p-4 
        flex flex-col 
        space-y-1 sm:space-y-2 lg:space-y-3 
        w-full 
        h-[200px] sm:h-[220px] lg:h-[250px]
        bg-[#E2E2E21A]/70 
        rounded-xl 
        border border-foreground/10 
        backdrop-blur-2xl
        transition-all duration-300
        ${className}
      `}
    >
      <div className='p-2 sm:p-3 lg:p-4 flex items-center justify-center flex-1'>
        <span className='text-5xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-tr from-[#7989BC] to-[#C2D0FF] text-transparent bg-clip-text'>
          {statText}
        </span>
      </div>

      <div className='flex flex-col items-start justify-center text-left flex-1'>
        <h3 className='text-lg sm:text-base font-semibold text-foreground mb-1 sm:mb-2'>
          {title}
        </h3>
        <p className='text-sm sm:text-xs text-foreground/70 line-clamp-3 leading-relaxed'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default GlassyStatCard
