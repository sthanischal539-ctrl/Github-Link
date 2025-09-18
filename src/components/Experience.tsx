type Item = {
  role: string
  company: string
  duration: string
  details: string[]
}

const items: Item[] = [
  { role: 'Data Science Intern', company: 'Tech Co', duration: 'Jun 2024 - Aug 2024', details: [
    'Built data pipelines and dashboards for weekly reporting.',
    'Prototyped a text classification model to auto-tag support tickets.'
  ]},
]

export default function Experience() {
  return (
    <div className="section container">
      <h2>Experience</h2>
      <div className="timeline">
        {items.map(item => (
          <div key={item.role + item.company} className="timelineItem">
            <div className="timeDot" />
            <div className="timelineCard">
              <h3>{item.role} · {item.company}</h3>
              <p className="muted">{item.duration}</p>
              <ul className="list">
                {item.details.map(d => <li key={d}>{d}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


