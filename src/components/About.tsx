export default function About() {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'React/TypeScript', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Data Analysis', level: 75 },
    { name: 'Cloud Computing', level: 70 }
  ]

  return (
    <div className="section container">
      <div className="aboutHeader">
        <h2>About Me</h2>
        <p className="aboutIntro">I'm Nischal, a passionate Computer Science student who loves turning complex problems into elegant solutions. I specialize in AI, data science, and modern web development.</p>
      </div>
      
      <div className="aboutContent">
        <div className="aboutMain">
          <div className="profileCard">
            <div className="profileImage">
              <div className="imagePlaceholder">👨‍💻</div>
              <div className="statusDot"></div>
            </div>
            <div className="profileInfo">
              <h3>Nischal Shrestha</h3>
              <p className="role">Computer Science Student & AI Enthusiast</p>
              <p className="location">📍 New Baneshwor, Kathmandu</p>
            </div>
          </div>

          <div className="bioSection">
            <h3>My Story</h3>
            <p>I started coding in high school and fell in love with the endless possibilities of technology. Now I'm pursuing my Bachelor's in Computer Science while building real-world projects that solve actual problems.</p>
            <p>When I'm not coding, you'll find me reading about the latest AI research, contributing to open-source projects, or exploring new technologies that push the boundaries of what's possible.</p>
          </div>
        </div>

        <div className="aboutSidebar">
          <div className="card">
            <h3>🎓 Education</h3>
            <div className="educationItem">
              <div className="eduIcon">🎓</div>
              <div>
                <h4>B.Sc. Computer Science</h4>
                <p>University of Birmingham</p>
                <span className="duration">2021 - 2025</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>⚡ Key Skills</h3>
            <div className="skillsList">
              {skills.map(skill => (
                <div key={skill.name} className="skillItem">
                  <div className="skillHeader">
                    <span>{skill.name}</span>
                    <span className="skillPercent">{skill.level}%</span>
                  </div>
                  <div className="skillBar">
                    <div className="skillProgress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


