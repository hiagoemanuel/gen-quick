import { useContext } from 'react'
import Trash from '../assets/trash.svg'
import { HistoryContext, IQrCode } from '../contexts/HistoryContext'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const HistoryButton = ({ text, href, colors }: IQrCode) => {
  const { storedHistory, setStoredHistory } = useContext(HistoryContext)
  const { setStorage } = useLocalStorage()

  const deleteHistory = () => {
    const updatedHistory = storedHistory.filter((qr) => {
      return qr.text === text && qr.href === href ? false : true
    })

    setStoredHistory(updatedHistory)
    setStorage('history.gen-quick', JSON.stringify(updatedHistory))
  }

  return (
    <div className="flex rounded bg-light dark:bg-dark hover:bg-hover-light hover:dark:bg-hover-dark">
      <a href={href} className="min-w-2 rounded-l overflow-hidden flex flex-col">
        <div className="w-full h-full" style={{ background: '#' + colors.bg }} />
        <div className="w-full h-full" style={{ background: '#' + colors.qr }} />
      </a>
      <a href={href} className="p-3 grow text-start overflow-x-hidden">
        <p className="text-xl font-medium truncate">{text}</p>
      </a>
      <button className="p-3 rounded-r hover:bg-error" onClick={deleteHistory}>
        <Trash />
      </button>
    </div>
  )
}
