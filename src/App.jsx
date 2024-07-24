import './App.scss'
import { CardSkill } from './components/CardsSkills/CardsSkills'
import { Header } from './components/Header/Header'
import { AboutMe } from './pages/AboutMe/AboutMe'
import { Home } from './pages/Home/Home'
import { Projects } from './pages/Projects/Projects'
import { Skills } from './pages/Skills/Skills'

function App() {

  return (
    <>

    <Header />
    <Home />
    <AboutMe />
    <Skills />
    <Projects />
    </>
  )
}

export default App
