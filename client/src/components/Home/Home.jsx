import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { getALLRecipes, filterByTypeDiets, orderByName, orderByHS, getDiets, } from "../../redux/actions"
import Paginado from "../Paginado/Paginado"
import Card from "../RecipeCard/Card"
import SearchBar from "../SearchBar/SearchBar"
import Loader from "../Loader/Loader"
import Footer from "../Footer/Footer"
import "./Home.css"


function Home() {

    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.recipes) //Esto es el equivalente a trabajar con mapStateToProps 
    //y pasarle como props el parametro recipes 
    const diets = useSelector(state => state.diets)
    const [, setOrden] = useState("") //Creamos un estado local para el renderizado del ordenamiento

    //----------Creamos estados locales para el paginado-----------
    const [currentPage, setCurrentPage] = useState(1) //Aqui definimos la pagina de inicio
    const [recipesPerPage] = useState(9) //Aqui definimos los elementos que mostraremos por pagina
    const indexOfLastRecipe = currentPage * recipesPerPage //9
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage //0
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe) //divide el array de recipes(estado global) con los indices (0,9)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(() => { //esta funcion simula el ciclo de vida de los componentes 
        dispatch(getALLRecipes()) //Esto es el equivalente a trabajar con mapDispatchToProps
        dispatch(getDiets())
    }, [dispatch]) //Lleva como segundo parametro un arreglo de dependencias para que no ejecute un loop infinito
    //con el useEffect

    

    function handleClick(e) {
        e.preventDefault()
        dispatch(getALLRecipes())
        setCurrentPage(1)
    }

    function handleFilterDiets(e) {
        dispatch(filterByTypeDiets(e.target.value))
    }

    function handleOrderName(e) {
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`) //Seteamos el estado local "Orden" para que haga el reenderizado
    }

    function handleOrderHS(e) {
        dispatch(orderByHS(e.target.value))
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div className="background_home">
            <div className="navbar">

                <div className="filterselects">
                    <select className="classic" onChange={e => handleFilterDiets(e)}>
                        <option value="all">Todas las dietas</option>
                        {diets?.map(diet => {
                            return (
                                <option value={diet.name} key={diet.id}>{diet.name}</option>)
                        })}
                    </select>
                    <select className="classic" onChange={e => handleOrderName(e)}>
                        <option value=''>Nombre</option>
                        <option value='asc'>A - Z</option>
                        <option value='desc'>Z - A</option>
                    </select>
                    <select className="classic" onChange={e => handleOrderHS(e)}>
                        <option value=''>Health Score</option>
                        <option value='hmax'>Health Score maximo</option>
                        <option value='hmin'>Health Score minimo</option>
                    </select>
                    <SearchBar />
                    <div className="buttoncreate">
                        <Link to="/recipe"><button>Crear receta</button></Link>
                    </div>
                </div>
            </div>
            <div className="button-reset-inicio">
                <Link to="/"><button>Inicio</button></Link>
                <button onClick={e => { handleClick(e) }}>Restablecer pagina</button>
            </div>
            <Paginado
                recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}
                paginado={paginado}
            />
            {allRecipes.length > 0 ?
                <div className="cards">
                    {currentRecipes?.map((recipe) => {
                        return (
                            <div key={recipe.id}>
                                <Link to={"/home/" + recipe.id} style={{ textDecoration: "none" }}>
                                    <Card key={recipe.id} name={recipe.name} image={recipe.image} diets={recipe.diets} healthscore={recipe.healthscore} />
                                </Link>
                            </div>
                        )
                    })}
                </div>
                : <Loader />}
            <Footer />
        </div>
    )
}
export default Home