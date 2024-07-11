import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export interface IQrCode {
  href: string
  text: string
  colors: { bg: string; qr: string }
}

interface HistoryContextProps {
  storedHistory: IQrCode[]
  storeInHistory: (storedHistory: IQrCode) => void
}

export const HistoryContext = createContext({} as HistoryContextProps)

export const HistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const { getStorage, setStorage } = useLocalStorage()
  const [storedHistory, setStoredHistory] = useState(() => {
    if (getStorage('history.gen-quick')) {
      const json = getStorage('history.gen-quick') ?? ''
      return JSON.parse(json) as IQrCode[]
    } else {
      return [] as IQrCode[]
    }
  })

  const storeInHistory = (qrcode: IQrCode) => {
    const alreadyExists = storedHistory.filter((qr) => {
      return qr.text === qrcode.text && qr.href === qrcode.href
    })[0]

    if (alreadyExists) return
    if (storedHistory.length > 19) storedHistory.pop()

    setStoredHistory([qrcode, ...storedHistory])
    setStorage('history.gen-quick', JSON.stringify([qrcode, ...storedHistory]))
  }

  return (
    <HistoryContext.Provider value={{ storedHistory, storeInHistory }}>
      {children}
    </HistoryContext.Provider>
  )
}
