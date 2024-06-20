import { useEffect, useRef } from 'react'

interface ButtonProps {
  icon: JSX.Element
  label: string
  color: 'dark' | 'light'
  wSize?: 'w-fit' | 'w-full'
}

export const Button = ({ icon, label, color, wSize = 'w-fit' }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const icon = buttonRef.current?.children[0].children
    if (!icon) return

    function switchIconColors(e: HTMLCollection) {
      for (const item of e) {
        if (item.children.length !== 0) switchIconColors(item.children)

        const fill = item.attributes.getNamedItem('fill')
        const stroke = item.attributes.getNamedItem('stroke')

        if (fill || stroke) {
          if (fill) item.setAttribute('fill', color === 'dark' ? 'var(--light)' : 'var(--dark)')
          if (stroke) item.setAttribute('stroke', color === 'dark' ? 'var(--light)' : 'var(--dark)')
        }
      }
    }
    switchIconColors(icon)
  }, [color])

  return (
    <button
      className={`p-3 flex justify-center items-center gap-3 rounded ${wSize} ${color === 'dark' ? 'bg-dark' : 'bg-light'}`}
      ref={buttonRef}
    >
      <icon.type />
      <h3 className={color === 'dark' ? 'text-light' : 'text-dark'}>{label}</h3>
    </button>
  )
}
