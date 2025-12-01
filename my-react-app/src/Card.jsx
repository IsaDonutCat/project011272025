import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Card (props)
{
    return <div class="card">
                <h1>{props.companyName}</h1>
                <h2>{props.positionName}</h2>
            </div>;
}

export default Card;
