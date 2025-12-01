import { useState } from 'react'
import logoImg from './assets/sample.png'
import viteLogo from '/vite.svg'
import './Card.css'

function Card (props)
{
    return <div class="card">
                <img id="companyLogo">{logoImg}</img>
                <h1 id = "companyName">{props.companyName}</h1>
                <h2 id="positionName">{props.positionName}</h2>
                <p id="deadLine">{props.deadLine}</p>

            </div>;
}

export default Card;
