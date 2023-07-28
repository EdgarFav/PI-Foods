import React from "react"
import { Link } from "react-router-dom"
import "./LandingPage.css"


function LandingPage() {
    return (
        <div className="backgroung_landing">
            <div className="contlanding">
                <span>Bienvenido a Wiki Foods</span>
                <Link to="/home">
                    <button className="enter">Iniciar</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage