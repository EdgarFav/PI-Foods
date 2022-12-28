import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { getALLRecipes } from "../../redux/actions"
import Card from "../RecipeCard/Card"

const Home = () => {

    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.recipes) //Esto es el equivalente a trabajar con mapStateToProps 
    //y pasarle como props el parametro recipes ----> revisar como se hace
    useEffect(() => { //esta funcion simula el ciclo de vida de los componentes 
        dispatch(getALLRecipes()) //Esto es el equivalente a trabajar con mapDispatchToProps
    }, [dispatch]) //Lleva como segundo parametro un arreglo de dependencias para que no ejecute un loop infinito
    //con el useEffect


    function handleClick(e) {
        e.preventDefault()
        dispatch(getALLRecipes())
    }


    return (
        <div>
            <Link to='/post'>Creat recipe</Link>
            <h1>Pagina de recetas</h1>
            <button onClick={e => { handleClick(e) }}>Reset page</button>
            <div>
                <select>
                    <option value=''>Ordenar alfabeticamente</option>
                    <option value='asc'>A - Z</option>
                    <option value='desc'>Z - A</option>
                </select>
                <select>
                    <option value=''>Ordenar por Health Score</option>
                    <option value='hasc'>Health Score maximo</option>
                    <option value='hdesc'>Health Score minimo</option>
                </select>
                <div>
                    {allRecipes?.map((recipe) => {
                        return (
                            <Card name={recipe.name} image={recipe.image} diets={recipe.diets} healthscore={recipe.healthscore} />
                        )
                    })}
                </div>
            </div>
        </div>
    )

    // if (recipes.length) {
    //     return (
    //         <div>
    //             {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1>Loading</h1>
    //         </div>
    //     )
    // }
}
export default Home