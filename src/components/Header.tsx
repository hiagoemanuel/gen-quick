import { Button } from './Button'

import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'
import GitHub from '../assets/github.svg'
import History from '../assets/history.svg'
import Theme from '../assets/theme.svg'
import { useContext, useState } from 'react'
import { MenuContext } from '../contexts/MenuContext'
import { ThemeContext } from '../contexts/ThemeContext'
import { HeaderHistory } from './HeaderHIstory'

export const Header = () => {
  const [historyIsOpen, setHistoryIsOpen] = useState<boolean>(false)
  const { setIsOpen } = useContext(MenuContext)
  const { switchTheme } = useContext(ThemeContext)

  return (
    <>
      <header className="sticky xs:static bottom-0 border-t-2 xs:border-t-0 border-grey bg-light dark:bg-dark p-4 xs:max-sm:px-1 gap-2 flex justify-between items-center">
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
          <Button
            onClick={() => setHistoryIsOpen(true)}
            icon={<History />}
            label="Histórico"
            color="dark"
          />
          <Button onClick={switchTheme} icon={<Theme />} label="Tema" color="dark" />
        </nav>
      </header>
      <HeaderHistory historyIsOpen={historyIsOpen} setHistoryIsOpen={setHistoryIsOpen} />
    </>
  )
}
