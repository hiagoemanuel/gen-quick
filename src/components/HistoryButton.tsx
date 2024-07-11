import Trash from '../assets/trash.svg'
import { IQrCode } from '../contexts/HistoryContext'

export const HistoryButton = ({ text, href, colors }: IQrCode) => {
  return (
    <div className="flex rounded bg-light dark:bg-dark hover:bg-hover-light hover:dark:bg-hover-dark">
      <a href={href} className="min-w-2 rounded-l overflow-hidden flex flex-col">
        <div className="w-full h-full" style={{ background: '#' + colors.bg }} />
        <div className="w-full h-full" style={{ background: '#' + colors.qr }} />
      </a>
      <a href={href} className="p-3 grow text-start overflow-x-hidden">
        <p className="text-xl font-medium truncate">{text}</p>
      </a>
      <button className="p-3">
        <Trash />
      </button>
    </div>
  )
}
