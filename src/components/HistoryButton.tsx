import Trash from '../assets/trash.svg'

export const HistoryButton = ({ label }: { label: string }) => {
  return (
    <div className="flex rounded overflow-hidden bg-light dark:bg-dark hover:bg-hover-light hover:dark:bg-hover-dark">
      <a href="/" className="p-3 grow text-start">
        <p className="text-xl font-medium">{label}</p>
      </a>
      <button className="p-3">
        <Trash />
      </button>
    </div>
  )
}
