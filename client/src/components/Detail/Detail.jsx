import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCardDetails } from "../../redux/actions";

function Detail() {
    const dispatch = useDispatch()
    const card = useSelector(state => state.cardDetails)
    const { id } = useParams()

    useEffect(() => {
        // dispatch(getCardDetails(props.match.params.id))
        dispatch(getCardDetails(id))
    }, [dispatch, id])

    // return (
    //     <div>
    //         {
    //             card.length > 0 ?
    //                 <div>
    //                     <h1>soy {card[0].name}</h1>
    //                     <p>{card[0].summary}</p>
    //                     <p>{card[0].healthscore}</p>
    //                 </div> : <p>...loading</p>
    //         }
    //     </div>
    // )
    if (card[0]) {
        return (
            <div>
                <div>
                    <Link to={"/home"}><button>Volver a Home</button></Link>
                </div>
                <h2>{card[0].name}</h2>
                <div>
                    <div>
                        <img src={card[0].image} alt="img not found" width="350px" height="250px" />
                    </div>
                    <div>
                        <h4>Resumen:</h4><p>{card[0].summary}</p>
                    </div>
                </div>

                <div>
                    <div><h4>Health Score:</h4><p>{card[0].healthscore}</p></div>
                    <div><h4>Tipo de dieta:</h4><p>{card[0].diets.join(", ")}</p></div>
                </div>

                <div>
                    <h4>Paso a paso:</h4>
                    <ol>
                        {Array.isArray(card[0].steps) ? card[0].steps.map(e => {
                            return (
                                <li>{e}</li>
                            )
                        }) : <p>No se informaron pasos a seguir para esta receta</p>}</ol>
                </div>

            </div>
        )
    } else {
        return (
            <p>Cargando...</p>
        )
    }

}

export default Detail