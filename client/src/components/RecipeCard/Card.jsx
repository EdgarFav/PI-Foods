import React from "react"

const Card = ({ name, diets, healthscore, image }) => {
    return (
        <div>
            <img src={image} alt="img not found" width="350px" height="250px" />
            <div>
                <h3>{name}</h3>
                <h5>Tipo de dieta: {diets.join(", ")}</h5>
                <h5>Health Score: {healthscore}</h5>

            </div>
        </div>
    )
}

export default Card