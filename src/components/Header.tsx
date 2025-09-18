type Props = { onNav: (id: string) => void; activeId?: string; onToggleTheme?: () => void; theme?: string }

export default function Header({ onNav, activeId, onToggleTheme, theme = 'dark' }: Props) {
  return (
    <header className="header">
      <div className="container nav">
        <div className="logo" onClick={() => onNav('home')}>Nischal</div>
        <nav>
          <ul>
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <li key={item.id} className={activeId === item.id ? 'active' : ''}>
                <button onClick={() => onNav(item.id)}>{item.label}</button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="btn" onClick={onToggleTheme} aria-label="Toggle theme">{theme === 'dark' ? '🌙' : '☀️'}</button>
      </div>
    </header>
  )
}


