import { Button } from './Button'

import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'
import GitHub from '../assets/github.svg'
import History from '../assets/history.svg'
import Theme from '../assets/theme.svg'

export const Header = () => {
  return (
    <header className="p-4 xs:max-sm:px-1 gap-2 flex justify-between items-center">
      <Logo />
      <button className="bg-dark px-2 py-3 rounded xs:hidden">
        <Menu />
      </button>
      <nav className="hidden xs:flex items-start gap-2 xs:max-sm:gap-1">
        <a href="https://github.com/hiagoemanuel" target="_blank">
          <Button icon={<GitHub />} label="GitHub" color="dark" />
        </a>
        <Button icon={<History />} label="Histórico" color="dark" />
        <Button icon={<Theme />} label="Tema" color="dark" />
      </nav>
    </header>
  )
}
