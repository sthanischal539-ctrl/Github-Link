import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'

export default function App() {
  const [showTop, setShowTop] = useState(false)
  const [activeId, setActiveId] = useState<string>('home')
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-reveal for sections
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section'))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    sections.forEach(s => {
      s.classList.add('reveal')
      observer.observe(s)
    })
    return () => observer.disconnect()
  }, [])

  // Scroll-spy to highlight active nav item
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
    const spy = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target && visible.target.id !== activeId) setActiveId(visible.target.id)
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-20% 0px -60% 0px' }
    )
    sections.forEach(s => spy.observe(s))
    return () => spy.disconnect()
  }, [activeId])

  // Parallax effect for hero image
  useEffect(() => {
    const onScroll = () => {
      const value = Math.min(30, window.scrollY * 0.05)
      document.documentElement.style.setProperty('--parallax', `${value}px`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Theme persistence
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Header onNav={scrollTo} activeId={activeId} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} theme={theme} />
      <Particles />
      <main>
        <section id="home"><Hero onCta={scrollTo} /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer onTop={() => scrollTo('home')} />
      {showTop && (
        <button aria-label="Back to top" className="backToTop" onClick={() => scrollTo('home')}>↑</button>
      )}
    </>
  )
}


