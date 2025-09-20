import React from 'react'

type SelectablePoleCardProps = {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  selected?: boolean
  onClick?: () => void
  selectedGradientClass: string // e.g. "from-[#5E1265] to-[#AA222B]"
  borderColor?: string
}

export default function SelectablePoleCard({
  icon,
  title,
  subtitle,
  description,
  selected = false,
  onClick,
  selectedGradientClass,
  borderColor,
}: SelectablePoleCardProps) {
  const borderC = selected && borderColor ? { borderColor } : { borderColor: 'rgba(72, 71, 99, 0.4)' }
  return (
    <button
      type='button'
      onClick={onClick}
      className={`cursor-pointer relative w-80 h-44 text-left rounded-xl border backdrop-blur-2xl px-4 py-4 transition-all duration-300 bg-[#E2E2E21A]/40 hover:bg-[#E2E2E21A]/60 hover:scale-105 origin-center ${selected ? 'scale-105 shadow-2xl shadow-white/10 z-10' : 'scale-100'}`}
      style={borderC}
    >
      {selected && (
        <div
          className={`absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-tr ${selectedGradientClass} opacity-25 border-1`}
        />
      )}
      <div className='relative z-[1] flex items-start gap-3'>
        <div className='flex-shrink-0'>{icon}</div>
        <div className='min-w-0 pt-1'>
          <h3 className='text-base sm:text-md font-semibold text-white truncate mb-1.5'>{title}</h3>
          <p className='text-sm sm:text-xs text-foreground/80 truncate'>{subtitle}</p>
        </div>
      </div>
      <p className='relative z-[1] mt-3 text-sm text-foreground/80'>{description}</p>
    </button>
  )
}
