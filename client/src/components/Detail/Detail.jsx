import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCardDetails, limpiarEstadoDetail } from "../../redux/actions";
import "./Detail.css"

function Detail() {
    const dispatch = useDispatch()
    const card = useSelector(state => state.cardDetails)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getCardDetails(id))
        return () => dispatch(limpiarEstadoDetail())
    }, [dispatch, id])

    if (card[0]) {
        return (
            <div className="detailscontainer">
                <div className="botondevolver">
                    <Link to={"/home"}><button>Volver a Home</button></Link>
                </div>
                <h2 className="titlerecipe">{card[0].name}</h2>
                <div className="imgyresumen">
                    <div className="imgrecipe">
                        <img src={card[0].image} alt="img not found" width="350px" height="250px" />
                    </div>
                    <div className="resumenrecipe">
                        <h4>Resumen:</h4><p>{card[0].summary}</p>
                    </div>
                </div>

                <div className="recipediet">
                    <div><h4>Health Score:</h4><p>{card[0].healthscore}</p></div>
                    <div><h4>Tipo de dieta:</h4><p>{card[0].diets.join(", ")}</p></div>
                </div>

                <div className="stepsinfo">
                    <h4 className="titlesteps">Paso a paso:</h4>
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