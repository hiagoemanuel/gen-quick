import { Header } from './components/Header'

function App() {
  return (
    <section className="w-full h-svh bg-light flex flex-col xs:flex-col-reverse">
      <main className="grow flex justify-center items-center">Main</main>
      <Header />
    </section>
  )
}

export default App
