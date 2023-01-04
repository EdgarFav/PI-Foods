import React from "react";
import "./Paginado.css"

function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumbers = []

    for (let i = 0; i <= Math.floor(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <div className="paginado">
            {pageNumbers?.map(number => (
                <button className="numberpage" key={number} onClick={() => paginado(number)}>
                    <b>{number}</b>
                </button>
            ))}
        </div>
    )
}

export default Paginado