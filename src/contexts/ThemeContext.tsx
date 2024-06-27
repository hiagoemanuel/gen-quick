import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface ThemeContextProps {
  isDark: boolean
  switchTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { getStorage, setStorage } = useLocalStorage()

  const [isDark, setIsDark] = useState<boolean>(() => {
    const localTheme = getStorage('theme.gen-quick') ?? ''

    if (
      localTheme === 'dark' ||
      (!('theme.gen-quick' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setStorage('theme.gen-quick', 'dark')
      return true
    } else {
      document.documentElement.classList.remove('dark')
      setStorage('theme.gen-quick', 'light')
      return false
    }
  })

  const switchTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
      setStorage('theme.gen-quick', 'light')
    } else {
      document.documentElement.classList.add('dark')
      setIsDark(true)
      setStorage('theme.gen-quick', 'dark')
    }
  }

  return <ThemeContext.Provider value={{ isDark, switchTheme }}>{children}</ThemeContext.Provider>
}
