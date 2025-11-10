import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// scroll fade-in initializer (adds .appeared to .fade-in elements)
import './utils/scrollFade'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
