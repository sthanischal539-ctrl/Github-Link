import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Cursor glow effect
window.addEventListener('mousemove', (e) => {
  const x = e.clientX
  const y = e.clientY
  document.documentElement.style.setProperty('--cx', x + 'px')
  document.documentElement.style.setProperty('--cy', y + 'px')
})


