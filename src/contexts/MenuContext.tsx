import React, { createContext, useEffect, useState } from 'react'

interface MenuContextProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  historyOpen: boolean
  setHistoryOpen: (historyOpen: boolean) => void
}

export const MenuContext = createContext({} as MenuContextProps)

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [historyOpen, setHistoryOpen] = useState(false)

  useEffect(() => {
    const pageScroll = (v: 'hidden' | 'auto') => (document.documentElement.style.overflowY = v)
    isOpen ? pageScroll('hidden') : pageScroll('auto')
  }, [isOpen])

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen, historyOpen, setHistoryOpen }}>
      {children}
    </MenuContext.Provider>
  )
}
