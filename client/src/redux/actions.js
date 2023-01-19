import axios from 'axios'

export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const GET_DIETS = "GET_DIETS"
export const FILTER_BY_DIETS = "FILTER_BY_DIETS"
export const ORDER_BY_NAME = "FILTER_BY_NAME"
export const ORDER_BY_HS = "ORDER_BY_HS"
export const GET_RECIPE_BY_QUERY = "GET_RECIPE_BY_QUERY"
export const GET_DETAILS_BY_ID = "GET_DETAILS_BY_ID"
export const LIMPIAR_ESTADO_DETAIL = "LIMPIAR_ESTADO_DETAIL"


export function getALLRecipes() { //esta es la accion que le manda al reducer para traer toda la info de las recetas
    return async function (dispatch) {
        const json = await axios("/recipes")
        const recipes = json.data
        return dispatch({
            type: GET_ALL_RECIPES,
            payload: recipes
        })
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

export function getRecipeByQuery(name) { //esta es la accion que le manda al reducer para buscar el name por query
    return async function (dispatch) {
        try {
            const json = await axios("/recipes?name=" + name)
            return dispatch({
                type: GET_RECIPE_BY_QUERY,
                payload: json.data
            })
        } catch (error) {
            alert("Receta no encontrada!")
        }
    }
}

export function getDiets() {
    return async function (dispatch) {
        var json = await axios("/diets");
        return dispatch({
            type: 'GET_DIETS',
            payload: json.data
        })
    }
}

export function filterByTypeDiets(payload) {
    console.log(payload)
    return {
        type: FILTER_BY_DIETS,
        payload
    }

}

export function postRecipe(payload) {
    return async function (dispatch) {
        const result = await axios.post("/recipes", payload)
        return result
    }
}

export function getCardDetails(id) {
    return async function (dispatch) {
        var json = await axios("/recipes/" + id)
        return dispatch({
            type: GET_DETAILS_BY_ID,
            payload: json.data
        })
    }
}

export function limpiarEstadoDetail() {
    return {
        type: LIMPIAR_ESTADO_DETAIL,
    }
}
