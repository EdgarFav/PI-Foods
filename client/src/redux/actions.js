import axios from 'axios'

export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const FILTER_BY_DIETS = "FILTER_BY_DIETS"
export const ORDER_BY_NAME = "FILTER_BY_NAME"
export const ORDER_BY_HS = "ORDER_BY_HS"


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

export function filterByTypeDiets(payload) {
    return {
        type: FILTER_BY_DIETS,
        payload
    }

}

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByHS(payload) {
    return {
        type: ORDER_BY_HS,
        payload
    }
}