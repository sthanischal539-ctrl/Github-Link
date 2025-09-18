const heroImageUrl = new URL('../image/WhatsApp Image 2025-09-18 at 20.56.15_a15ea399.jpg', import.meta.url).href
type Props = { onCta: (id: string) => void }

export default function Hero({ onCta }: Props) {
  return (
    <div className="section hero container fancyBg">
      <div className="heroContent">
        <div className="avatar" aria-hidden="true">👋</div>
        <h1>Hi, I’m Nischal — AI & Data Enthusiast</h1>
        <p>I build data-driven applications, ML prototypes, and delightful web experiences.</p>
        <div className="actions">
          <a className="btn primary" href="/resume.pdf" download>Download Resume</a>
          <button className="btn" onClick={() => onCta('projects')}>View Projects</button>
          <button className="btn" onClick={() => onCta('contact')}>Contact Me</button>
        </div>
      </div>
      <div
        className="heroImage parallax"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  )
}


