import React from "react"
import { Link } from "react-router-dom"


function LandingPage() {
    return (
        <div>
            <h1>Bienvenidos a PI Foods</h1>
            <Link to="/home">
                <button>Iniciar</button>
            </Link>
        </div>
    )
}

export default LandingPage