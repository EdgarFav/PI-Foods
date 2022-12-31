import React from "react";

function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumbers = []

    for (let i = 0; i <= Math.floor(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <nav>
            <ul>
                {pageNumbers?.map(number => (
                    <li key={number}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Paginado