const categories = [
  { title: 'Programming', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { title: 'Frameworks', items: ['React', 'Node.js', 'Express', 'Vite'] },
  { title: 'ML / Data', items: ['Pandas', 'NumPy', 'scikit-learn', 'TensorFlow (basics)'] },
  { title: 'Tools', items: ['Git', 'Docker', 'Postman', 'VS Code'] },
  { title: 'Soft Skills', items: ['Communication', 'Teamwork', 'Problem Solving'] },
]

export default function Skills() {
  return (
    <div className="section container">
      <h2>Skills</h2>
      <div className="grid three">
        {categories.map(cat => (
          <div key={cat.title} className="card">
            <h3>{cat.title}</h3>
            <div className="tags">
              {cat.items.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


