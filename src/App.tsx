import Logo from './assets/logo.svg'

import Github from './assets/github.svg'
import Close from './assets/close.svg'
import Download from './assets/download.svg'
import ReturnArrow from './assets/returnArrow.svg'
import History from './assets/history.svg'
import Theme from './assets/theme.svg'
import Trash from './assets/trash.svg'
import Embed from './assets/embed.svg'

import Menu from './assets/menu.svg'
import QrCode from './assets/qrCode.svg'
import Edit from './assets/edit.svg'
import Share from './assets/share.svg'

function App() {
  return (
    <>
      <Logo />
      <Github />
      <Close />
      <Download />
      <ReturnArrow />
      <History />
      <Theme />
      <Trash />
      <Embed />
      <div className="bg-dark inline-block p-4">
        <Menu />
        <QrCode />
        <Edit />
        <Share />
      </div>
      <h1>font</h1>
    </>
  )
}

export default App
