import { ComponentProps, useEffect, useRef } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  icon: JSX.Element
  label: string | false
  color: 'dark' | 'light'
}

export const Button = ({ icon, label, color, ...rest }: ButtonProps) => {
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
      {...rest}
      className={`${rest.className} p-3 flex justify-center items-center gap-3 rounded transition-colors duration-200 ${color === 'dark' ? 'bg-dark dark:bg-light hover:bg-hover-dark dark:hover:bg-hover-light' : 'bg-light dark:bg-dark hover:bg-hover-light dark:hover:bg-hover-dark'}`}
      ref={buttonRef}
    >
      <icon.type />
      {label ? (
        <h3
          className={`font-medium ${color === 'dark' ? 'text-light dark:text-dark' : 'text-dark dark:text-light'}`}
        >
          {label}
        </h3>
      ) : (
        <></>
      )}
    </button>
  )
}
