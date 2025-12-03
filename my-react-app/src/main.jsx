import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Card.css'
import Card from './Card.jsx'

fetch("./api/hello");

createRoot(document.getElementById('root')).render(
  <div>
    <Card companyLogo= "sample.png" companyName="Generic" positionName="Intern" deadLine = "12-05-2026"/>
    <Card companyLogo="sample.png" companyName="GenericB" positionName="InternA" deadLine="12-05-2026" />
  </div>
)
