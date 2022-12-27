import axios from 'axios'

export const GET_ALL_RECIPES = "GET_ALL_RECIPES"


export function getALLRecipes() { //esta es la accion que le manda al reducer para traer toda la info de las recetas
    return async function (dispatch) {
        const json = await axios("http://localhost:3001/recipes")
        const recipes = json.data
        return dispatch({
            type: GET_ALL_RECIPES,
            payload: recipes
        })
    }
}