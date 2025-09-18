type Props = { onTop: () => void }

export default function Footer({ onTop }: Props) {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footerInner">
        <p>© {year} Nischal</p>
        <div className="socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#home" onClick={(e) => { e.preventDefault(); onTop(); }}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}


