import { useState, useEffect, createContext, useContext } from 'react'

const ThemeContext = createContext()

const STORAGE_KEY = 'broadway-theme'

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyTheme(mode) {
  const isDark = mode === 'dark' || (mode === 'system' && getSystemDark())
  document.documentElement.classList.toggle('dark', isDark)
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : 'system'
  })

  useEffect(() => {
    applyTheme(mode)
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  // Listen for system changes when in system mode
  useEffect(() => {
    if (mode !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme('system')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mode])

  const cycle = () => {
    setMode((prev) => {
      if (prev === 'light') return 'dark'
      if (prev === 'dark') return 'system'
      return 'light'
    })
  }

  return (
    <ThemeContext.Provider value={{ mode, setMode, cycle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
