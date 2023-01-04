import React from "react"
import { Link } from "react-router-dom"
import "./LandingPage.css"


function LandingPage() {
    return (
        <div className="contlanding">
            <span>Bienvenido a Wiki Foods</span>
            <Link to="/home">
                <button className="enterbutton">Iniciar</button>
            </Link>
        </div>
    )
}

export default LandingPage