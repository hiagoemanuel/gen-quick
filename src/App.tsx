import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { MenuContextProvider } from './contexts/MenuContext'

function App() {
  return (
    <section className="w-full h-svh bg-light flex flex-col xs:flex-col-reverse relative">
      <main className="grow flex justify-center items-center">Main</main>
      <MenuContextProvider>
        <Header />
        <Menu />
      </MenuContextProvider>
    </section>
  )
}

export default App
