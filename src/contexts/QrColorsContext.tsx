import { createContext, ReactNode, useEffect, useState } from 'react'

interface QrColorsContextProps {
  bgColor: string
  qrColor: string
  setBgColor: (bgColor: string) => void
  setQrColor: (qrColor: string) => void
}

export const QrColorsContext = createContext({} as QrColorsContextProps)

export const QrColorsProvider = ({ children }: { children: ReactNode }) => {
  const validateParams = (paramKey: string): string | null => {
    const urlParams = new URLSearchParams(location.search)
    const pattern = /^#[0-9A-F]{6}$/i
    const keyValue = '#' + urlParams.get(paramKey) ?? ''

    return pattern.test(keyValue) ? keyValue : null
  }

  const [bgColor, setBgColor] = useState<string>(validateParams('bg') ?? '#ffffff')
  const [qrColor, setQrColor] = useState<string>(validateParams('qr') ?? '#000000')

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    urlParams.set('bg', bgColor.replace('#', ''))
    urlParams.set('qr', qrColor.replace('#', ''))

    const url = new URL(location.href)
    url.search = urlParams.toString()
    history.pushState({}, '', url)
  }, [bgColor, qrColor])

  return (
    <QrColorsContext.Provider value={{ bgColor, qrColor, setBgColor, setQrColor }}>
      {children}
    </QrColorsContext.Provider>
  )
}
