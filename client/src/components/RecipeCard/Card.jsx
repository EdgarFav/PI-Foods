import React from "react"
import "./Card.css"

const Card = ({ name, diets, healthscore, image }) => {
    return (
        <div className="card">
            <img src={image} alt="img not found" width="350px" height="250px" className="imagecard" />
            <div>
                <h3 className="cardtitle">{name}</h3>
                <h5 className="carddescr">Tipo de dieta: {diets.join(", ")}</h5>
                <h5 className="carddescr">Health Score: {healthscore}</h5>

            </div>
        </div>
    )
}

export default Card