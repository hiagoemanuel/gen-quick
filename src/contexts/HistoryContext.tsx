import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface qrcode {
  href: string
  text: string
}

interface HistoryContextProps {
  storedHistory: qrcode[]
  storeInHistory: (storedHistory: qrcode) => void
}

export const HistoryContext = createContext({} as HistoryContextProps)

export const HistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const { getStorage, setStorage } = useLocalStorage()
  const [storedHistory, setStoredHistory] = useState(() => {
    if (getStorage('history.gen-quick')) {
      const json = getStorage('history.gen-quick') ?? ''
      return JSON.parse(json) as qrcode[]
    } else {
      return [] as qrcode[]
    }
  })

  const storeInHistory = (qrcode: qrcode) => {
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
