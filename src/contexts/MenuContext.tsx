import React, { createContext, useState } from 'react'

interface MenuContextProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const MenuContext = createContext({} as MenuContextProps)

export const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return <MenuContext.Provider value={{ isOpen, setIsOpen }}>{children}</MenuContext.Provider>
}
