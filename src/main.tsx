import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouteApp } from './service/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteApp />
  </StrictMode>,
)
