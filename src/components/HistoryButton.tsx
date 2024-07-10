import Trash from '../assets/trash.svg'

export const HistoryButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <div className="flex rounded bg-light dark:bg-dark hover:bg-hover-light hover:dark:bg-hover-dark">
      <a href={href} className="p-3 grow text-start overflow-x-hidden">
        <p className="text-xl font-medium truncate">{text}</p>
      </a>
      <button className="p-3">
        <Trash />
      </button>
    </div>
  )
}
