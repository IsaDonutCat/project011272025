import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Card.css'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <Card companyName="Generic" positionName="Intern" deadLine = "12-05-2026"/>
    <Card companyName="GenericB" positionName="InternA" deadLine="12-05-2026" />
  </div>
)
