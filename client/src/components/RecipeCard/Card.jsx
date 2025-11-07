import React from "react"
import "./Card.css"

const Card = ({ name, diets, healthscore, image }) => {
    return (
        <div className="card">
            <img src={image} alt={name || "Recipe"} className="imagecard" />
            <div className="card-content">
                <h3 className="cardtitle">{name}</h3>
                <h5 className="carddescr">Tipo de dieta: {diets.join(", ")}</h5>
                <h5 className="carddescr">Health Score: {healthscore}</h5>
            </div>
        </div>
    )
}

export default Card