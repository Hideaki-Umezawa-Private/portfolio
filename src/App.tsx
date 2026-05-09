import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Works } from './components/Works'

function App() {
  return (
    <main>
      {/* 大きなセクションごとに部品化して、App.tsxを読みやすく保ちます。 */}
      <Header />
      <Hero />
      <About />
      <Works />
      <Services />
      <Contact />
    </main>
  )
}

export default App
