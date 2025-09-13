'use client'

import type { ImageProps } from 'next/image'
import Image from 'next/image'
import { useState } from 'react'

type FadeInImageProps = {
  fallbackHeight?: number
} & Omit<ImageProps, 'onLoad'>

export default function FadeInImage({
  fallbackHeight,
  ...props
}: FadeInImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className='relative overflow-hidden'
      style={{ minHeight: fallbackHeight }}
    >
      <Image
        {...props}
        className={`${props.className || ''}`}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}
