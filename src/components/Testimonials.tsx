import { useEffect, useRef, useState } from 'react'

type Testimonial = { quote: string; author: string; role?: string; company?: string; avatar?: string; rating?: number }

const testimonials: Testimonial[] = [
  { quote: 'Nischal is proactive and quick to learn. Communicates clearly and delivers beyond expectations.', author: 'Priya S.', role: 'Mentor', company: 'AI Club', avatar: 'PS', rating: 5 },
  { quote: 'Great collaboration and ownership. Shipped our prototype under a tight deadline.', author: 'Arjun M.', role: 'Project Lead', company: 'Hackathon Team', avatar: 'AM', rating: 5 },
  { quote: 'Thoughtful about UX and data quality. Reliable and consistent contributor.', author: 'Dr. Rao', role: 'Professor', company: 'University', avatar: 'DR', rating: 4 },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  const goTo = (i: number) => {
    const next = (i + testimonials.length) % testimonials.length
    setIndex(next)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const child = el.children[index] as HTMLElement | undefined
    if (!child) return
    const left = child.offsetLeft - 10
    el.scrollTo({ left, behavior: 'smooth' })
  }, [index])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => setVisible(entries.some(e => e.isIntersecting)),
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const id = setInterval(() => goTo(index + 1), 6000)
    return () => clearInterval(id)
  }, [index, visible])

  return (
    <div className="section container">
      <div className="sectionHeader">
        <h2>Testimonials</h2>
        <div className="carouselControls">
          <button className="btn" aria-label="Previous" onClick={() => goTo(index - 1)}>←</button>
          <button className="btn" aria-label="Next" onClick={() => goTo(index + 1)}>→</button>
        </div>
      </div>
      <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Testimonials">
        <div className="carouselTrack" ref={trackRef}>
          {testimonials.map((t, i) => (
            <figure key={t.quote} className={`card testimonial ${i === index ? 'current' : ''}`} aria-roledescription="slide" aria-label={`${i + 1} of ${testimonials.length}`}>
              <div className="testimonialHeader">
                <div className="avatarCircle" aria-hidden="true">{t.avatar || t.author[0]}</div>
                <div>
                  <figcaption className="author">{t.author}</figcaption>
                  <div className="muted small">{t.role}{t.company ? ` · ${t.company}` : ''}</div>
                </div>
                <div className="stars" aria-label={`${t.rating || 5} star rating`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className={s < (t.rating || 5) ? 'star filled' : 'star'}>★</span>
                  ))}
                </div>
              </div>
              <blockquote>
                “{t.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
        <div className="dots">
          {testimonials.map((_, i) => (
            <button key={i} className={`dot ${i === index ? 'active' : ''}`} aria-label={`Go to slide ${i + 1}`} onClick={() => goTo(i)} />
          ))}
        </div>
      </div>
    </div>
  )
}


