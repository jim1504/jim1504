import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { ContentGuard } from './components/ContentGuard'
import { Credentials } from './components/Credentials'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <div id="top">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-royal-deep focus:px-3 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
      </main>
      <Contact />
      <BackToTop />
      <ContentGuard />
    </div>
  )
}
