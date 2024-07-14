import { QRCodeRenderersOptions, toDataURL, toString as toStringQR } from 'qrcode'
import React, { createContext, useState } from 'react'

interface ShareContextProps {
  links: LinksType | undefined
  updateShareLinks: (text: string, qrConfigs: QRCodeRenderersOptions) => void
}

type LinksType = {
  dowload: string
  embed: string
  whatsapp: string
}

export const ShareContext = createContext({} as ShareContextProps)

export const ShareProvider = ({ children }: { children: React.ReactNode }) => {
  const [links, setLinks] = useState<LinksType>()

  const updateShareLinks = async (text: string, qrConfigs: QRCodeRenderersOptions) => {
    const linksUpdated = {
      dowload: await toDataURL(text, qrConfigs),
      embed: await toStringQR(text, qrConfigs),
      whatsapp: encodeURIComponent(location.href),
    }

    setLinks(linksUpdated)
  }

  return (
    <ShareContext.Provider value={{ links, updateShareLinks }}>{children}</ShareContext.Provider>
  )
}
