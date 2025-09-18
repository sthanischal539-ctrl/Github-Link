import { useEffect, useRef } from 'react'

export default function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let frame = 0
    let raf = 0
    const DPR = Math.min(2, window.devicePixelRatio || 1)

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; a: number }
    let particles: Particle[] = []

    const resize = () => {
      const w = window.innerWidth
      const h = Math.max(window.innerHeight, 600)
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      // Recreate particles based on size
      const count = Math.round((w * h) / 18000)
      particles = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.4,
        a: Math.random() * Math.PI * 2
      }))
    }

    const draw = () => {
      frame++
      const w = canvas.width / DPR
      const h = canvas.height / DPR
      ctx.clearRect(0, 0, w, h)
      const theme = document.documentElement.getAttribute('data-theme') || 'dark'
      const color = theme === 'dark' ? 'rgba(110,168,255,0.7)' : 'rgba(61,139,253,0.6)'
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.a += 0.01
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r + Math.sin(p.a) * 0.2, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = 0.6
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="particlesCanvas" aria-hidden="true" />
}


