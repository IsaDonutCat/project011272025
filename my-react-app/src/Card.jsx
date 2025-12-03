import { useState } from 'react'
import logoImg from './assets/sample.png'
import viteLogo from '/vite.svg'
import './Card.css'
import {useEffect} from "react";

const App = () => {
        const [users, setUsers] = useState([]);
        useEffect(() => {
            fetch("https://supreme-happiness-x7794jpvg5qfxrv-5173.app.github.dev//api/app")
        .then(response => response.json())
        .then(data => Card(data));
   })
   .catch(error => {
     console.error("Error fetching data:", error);
   });
   }, []);}

function Card (props)
{
    
    return <div className="card">
                <img id="companyLogo" src={logoImg} />
            <div id="info">
                <h1 id = "companyName">{props.companyName}</h1>
                <h2 id="positionName">{props.positionName}</h2>
                <p id="deadLine">{props.deadLine}</p></div>
                <p>{message}</p>
            </div>;
}

export default Card;
