import { createContext, ReactNode, useState } from 'react'

interface QrColorsContextProps {
  bgColor: string
  qrColor: string
  setBgColor: (bgColor: string) => void
  setQrColor: (qrColor: string) => void
}

export const QrColorsContext = createContext({} as QrColorsContextProps)

export const QrColorsProvider = ({ children }: { children: ReactNode }) => {
  const [bgColor, setBgColor] = useState<string>('#ffffff')
  const [qrColor, setQrColor] = useState<string>('#000000')

  return (
    <QrColorsContext.Provider value={{ bgColor, qrColor, setBgColor, setQrColor }}>
      {children}
    </QrColorsContext.Provider>
  )
}
