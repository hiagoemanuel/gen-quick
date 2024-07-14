import React, { createContext, useState } from 'react'

interface ShareContextProps {
  links: LinksType
  setLinks: (links: LinksType) => void
}

type LinksType = {
  dowload: string
  embed: string
  whatsapp: string
}

export const ShareContext = createContext({} as ShareContextProps)

export const ShareProvider = ({ children }: { children: React.ReactNode }) => {
  const [links, setLinks] = useState({} as LinksType)

  return <ShareContext.Provider value={{ links, setLinks }}>{children}</ShareContext.Provider>
}
