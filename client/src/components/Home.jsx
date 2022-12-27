import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getALLRecipes } from "../redux/actions"
import Recipe from "./Recipe"

const Home = () => {

    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes) //Esto es el equivalente a trabajar con mapStateToProps 
    //y pasarle como props el parametro recipes ----> revisar como se hace
    useEffect(() => {
        dispatch(getALLRecipes()) //Esto es el equivalente a trabajar con mapDispatchToProps
    }, [dispatch]) //Lleva como segundo parametro un arreglo de dependencias para que no ejecute un loop infinito
    //con el useEffect

    if (recipes.length) {
        return (
            <div>
                {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
            </div>
        )
    } else {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    }
}
export default Home