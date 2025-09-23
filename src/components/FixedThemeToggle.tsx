'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function FixedThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-[100] w-12 h-12 rounded-2xl bg-background-secondary/50 border border-border-default/30 backdrop-blur-md" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-6 right-6 z-[100] w-12 h-12 rounded-2xl bg-background-secondary/70 border border-border-default/30 backdrop-blur-md hover:bg-background-secondary/90 transition-all duration-200 flex items-center justify-center group shadow-lg shadow-foreground/10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      )}
    </button>
  )
}