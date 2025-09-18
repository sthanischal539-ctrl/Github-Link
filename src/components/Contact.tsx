export default function Contact() {
  const email = 'sthanischal539@gmail.com'
  return (
    <div className="section container">
      <h2>Contact</h2>
      <p className="muted" style={{ marginTop: -8 }}>I’d love to hear from you. Send a message or reach me directly.</p>
      <div className="grid two contact">
        <form className="card contactForm" action={`mailto:${email}`} method="post" encType="text/plain">
          <div className="formRow">
            <label>
              <span>Name</span>
              <input name="name" type="text" required placeholder="Your name" autoComplete="name" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input name="subject" type="text" placeholder="What’s this about?" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={6} required placeholder="How can I help?" />
          </label>
          <div className="formActions">
            <button className="btn primary" type="submit">Send Message</button>
            <a className="btn secondary" href={`mailto:${email}`}>Open in Email App</a>
          </div>
        </form>
        <div className="contactInfo">
          <div className="card infoItem">
            <h3>Direct</h3>
            <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
            <p>Phone: <a href="tel:+9779804234114">+977 9804234114</a></p>
          </div>
          <div className="card infoItem">
            <h3>Social</h3>
            <div className="socials">
              <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>
          <div className="card infoItem">
            <h3>Location</h3>
            <p className="muted">New Baneshwor, Kathmandu</p>
          </div>
        </div>
      </div>
    </div>
  )
}


