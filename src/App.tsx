import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { QrGenerator } from './components/QrGenerator'
import { QrColorsProvider } from './contexts/QrColorsContext'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <section className="w-full max-w-7xl min-h-svh mx-auto flex flex-col xs:flex-col-reverse">
      <QrColorsProvider>
        <QrGenerator />
      </QrColorsProvider>
      <ThemeProvider>
        <Header />
        <Menu />
      </ThemeProvider>
    </section>
  )
}

export default App
