import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { getALLRecipes, filterByTypeDiets, orderByName, orderByHS } from "../../redux/actions"
import Paginado from "../Paginado/Paginado"
import Card from "../RecipeCard/Card"

const Home = () => {

    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.recipes) //Esto es el equivalente a trabajar con mapStateToProps 
    //y pasarle como props el parametro recipes ----> revisar como se hace

    const [orden, setOrden] = useState("") //Creamos un estado local para el renderizado del ordenamiento

    //----------Creamos estados locales para el paginado-----------
    const [currentPage, setCurrentPage] = useState(1) //Aqui definimos la pagina de inicio
    const [recipesPerPage, setRecipesPerPage] = useState(9) //Aqui definimos los elementos que mostraremos por pagina
    const indexOfLastRecipe = currentPage * recipesPerPage //9
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage //0
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe) //divide el array de recipes(estado global) con los indices (0,9)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(() => { //esta funcion simula el ciclo de vida de los componentes 
        dispatch(getALLRecipes()) //Esto es el equivalente a trabajar con mapDispatchToProps
    }, [dispatch]) //Lleva como segundo parametro un arreglo de dependencias para que no ejecute un loop infinito
    //con el useEffect


    function handleClick(e) {
        e.preventDefault()
        dispatch(getALLRecipes())
    }

    function handleFilterDiets(e) {
        dispatch(filterByTypeDiets(e.target.value))
    }

    function handleOrderName(e) {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`) //Seteamos el estado local "Orden" para que haga el reenderizado
    }

    function handleOrderHS(e) {
        e.preventDefault();
        dispatch(orderByHS(e.target.value))
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div>
            <Link to='/post'>Creat recipe</Link>
            <h1>Pagina de recetas</h1>
            <button onClick={e => { handleClick(e) }}>Reset page</button>
            <div>
                {/* <select onChange={e => handleFilterDiets(e)}>
                    <option value="All">Todos los tipos de dietas</option>
                    {allRecipes?.map((e) => {
                        return (
                            <option value={e.name} key={e.id}>{e.diets}</option>)
                    })}
                </select> */}
                <select onChange={e => handleOrderName(e)}>
                    <option value=''>Ordenar alfabeticamente</option>
                    <option value='asc'>A - Z</option>
                    <option value='desc'>Z - A</option>
                </select>
                <select onChange={e => handleOrderHS(e)}>
                    <option value=''>Ordenar por Health Score</option>
                    <option value='hmax'>Health Score maximo</option>
                    <option value='hmin'>Health Score minimo</option>
                </select>
                <div>
                    <Paginado
                        recipesPerPage={recipesPerPage}
                        allRecipes={allRecipes.length}
                        paginado={paginado}
                    />
                </div>
                <div>
                    {currentRecipes?.map((recipe) => {
                        return (
                            <Card key={recipe.id} name={recipe.name} image={recipe.image} diets={recipe.diets} healthscore={recipe.healthscore} />
                        )
                    })}
                </div>
            </div>
        </div>
    )

}
export default Home