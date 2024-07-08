import { createContext, ReactNode, useEffect, useState } from 'react'
import { useQueryParams } from '../hooks/useQueryParams'

interface QrColorsContextProps {
  bgColor: string
  qrColor: string
  setBgColor: (bgColor: string) => void
  setQrColor: (qrColor: string) => void
}

export const QrColorsContext = createContext({} as QrColorsContextProps)

export const QrColorsProvider = ({ children }: { children: ReactNode }) => {
  const { getQueryParams, setQueryParams } = useQueryParams()

  const validateParams = (paramKey: string): string | null => {
    const pattern = /^#[0-9A-F]{6}$/i
    const keyValue = '#' + getQueryParams(paramKey) ?? ''
    return pattern.test(keyValue) ? keyValue : null
  }

  const [bgColor, setBgColor] = useState<string>(validateParams('bg') ?? '#ffffff')
  const [qrColor, setQrColor] = useState<string>(validateParams('qr') ?? '#000000')

  useEffect(() => {
    setQueryParams('bg', bgColor.replace('#', ''))
    setQueryParams('qr', qrColor.replace('#', ''))
  }, [bgColor, qrColor, setQueryParams])

  return (
    <QrColorsContext.Provider value={{ bgColor, qrColor, setBgColor, setQrColor }}>
      {children}
    </QrColorsContext.Provider>
  )
}
