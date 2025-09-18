type Project = {
  title: string
  description: string
  tech: string[]
  image?: string
  links?: { demo?: string; github?: string }
}

import thumbScreenshot from '../image/Screenshot2023-07-10at7.48.44AM.webp'
import thumbImages from '../image/images.jpg'
import thumbUnnamed from '../image/unnamed.png'

const projects: Project[] = [
  {
    title: 'AI Text Summarizer',
    description: 'Summarizes long articles into concise key points using NLP.',
    tech: ['Python', 'Transformers', 'FastAPI', 'React'],
    image: thumbUnnamed,
    links: { github: 'https://github.com/', demo: '#' }
  },
  {
    title: 'Personal Finance Dashboard',
    description: 'Visualizes spending patterns with charts and insights.',
    tech: ['TypeScript', 'React', 'Vite', 'Chart.js'],
    image: thumbScreenshot,
    links: { github: 'https://github.com/', demo: '#' }
  },
  {
    title: 'ML Model Monitor',
    description: 'Tracks model metrics and drift over time.',
    tech: ['Python', 'scikit-learn', 'Flask', 'Docker'],
    image: thumbImages,
    links: { github: 'https://github.com/', demo: '#' }
  }
]

import { useState } from 'react'
import Modal from './Modal'

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)
  return (
    <div className="section container">
      <h2>Projects</h2>
      <div className="grid three">
        {projects.map(p => (
          <article key={p.title} className="card project" onClick={() => { setSelected(p); setOpen(true) }} onMouseMove={(e) => {
            const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
            const mx = ((e.clientX - r.left) / r.width) * 100 + '%'
            const my = ((e.clientY - r.top) / r.height) * 100 + '%'
            ;(e.currentTarget as HTMLElement).style.setProperty('--mx', mx)
            ;(e.currentTarget as HTMLElement).style.setProperty('--my', my)
          }}>
            <div
              className="thumb"
              aria-hidden="true"
              style={{
                backgroundImage: p.image ? `url(${p.image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">{p.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
            <div className="links">
              {p.links?.demo && <a className="btn" href={p.links.demo} target="_blank" rel="noreferrer">Live Demo</a>}
              {p.links?.github && <a className="btn secondary" href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>}
            </div>
          </article>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title={selected?.title}>
        <p>{selected?.description}</p>
        {selected?.tech && (
          <div className="tags" style={{ marginTop: 8 }}>{selected.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
        )}
        <div className="links" style={{ marginTop: 12 }}>
          {selected?.links?.demo && <a className="btn" href={selected.links.demo} target="_blank" rel="noreferrer">Live Demo</a>}
          {selected?.links?.github && <a className="btn secondary" href={selected.links.github} target="_blank" rel="noreferrer">GitHub</a>}
        </div>
      </Modal>
    </div>
  )
}


