import { Button } from './Button'

import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'
import GitHub from '../assets/github.svg'
import History from '../assets/history.svg'
import Theme from '../assets/theme.svg'
import { useContext } from 'react'
import { MenuContext } from '../contexts/MenuContext'
import { ThemeContext } from '../contexts/ThemeContext'

export const Header = () => {
  const { setIsOpen } = useContext(MenuContext)
  const { switchTheme } = useContext(ThemeContext)

  return (
    <header className="p-4 xs:max-sm:px-1 gap-2 flex justify-between items-center">
      <Logo />
      <button
        onClick={() => setIsOpen(true)}
        className="bg-dark dark:bg-light px-2 py-3 rounded xs:hidden"
      >
        <Menu />
      </button>
      <nav className="hidden xs:flex items-start gap-2 xs:max-sm:gap-1">
        <a href="https://github.com/hiagoemanuel/gen-quick" target="_blank">
          <Button icon={<GitHub />} label="GitHub" color="dark" />
        </a>
        <Button icon={<History />} label="Histórico" color="dark" />
        <div onClick={switchTheme}>
          <Button icon={<Theme />} label="Tema" color="dark" />
        </div>
      </nav>
    </header>
  )
}
