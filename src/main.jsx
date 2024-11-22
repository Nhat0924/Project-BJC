import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lecture1 from './Lecture1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lecture1 />
  </StrictMode>,
)
