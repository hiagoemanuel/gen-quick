import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { QrGenerator } from './components/QrGenerator'
import { MenuContextProvider } from './contexts/MenuContext'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <section className="w-full max-w-7xl min-h-svh mx-auto flex flex-col xs:flex-col-reverse relative">
      <QrGenerator />
      <MenuContextProvider>
        <ThemeProvider>
          <Header />
          <Menu />
        </ThemeProvider>
      </MenuContextProvider>
    </section>
  )
}

export default App
