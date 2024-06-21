import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { MenuContextProvider } from './contexts/MenuContext'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <section className="w-full h-svh bg-light dark:bg-dark flex flex-col xs:flex-col-reverse relative">
      <main className="grow flex justify-center items-center">Main</main>
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
