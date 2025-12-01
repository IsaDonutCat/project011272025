import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <Card companyName="Generic" positionName="Intern" />
    <Card companyName="GenericB" positionName="InternA" />
  </div>
)
