import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { QrGenerator } from './components/QrGenerator'
import { HistoryProvider } from './contexts/HistoryContext'
import { QrColorsProvider } from './contexts/QrColorsContext'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <section className="w-full max-w-7xl min-h-svh mx-auto flex flex-col xs:flex-col-reverse">
      <HistoryProvider>
        <QrColorsProvider>
          <QrGenerator />
        </QrColorsProvider>
        <ThemeProvider>
          <Header />
          <Menu />
        </ThemeProvider>
      </HistoryProvider>
    </section>
  )
}

export default App
