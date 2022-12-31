import { FILTER_BY_DIETS, GET_ALL_RECIPES, ORDER_BY_HS, ORDER_BY_NAME } from "./actions";


const initialState = {
    recipes: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }

        case FILTER_BY_DIETS:
            const allRecipes = state.recipes
            const dietsFiltered = action.payload === 'All' ? allRecipes : allRecipes.filter(recipe => recipe.diets === action.payload)
            return {
                ...state,
                recipes: dietsFiltered
            }

        case ORDER_BY_NAME:
            let sortedElementsName = action.payload === 'asc' ?
                state.recipes.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0
                }) :
                state.recipes.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                recipes: sortedElementsName
            }

        case ORDER_BY_HS:
            let sortedElementsHS = action.payload === 'hmin' ?
                state.recipes.sort(function (a, b) {
                    if (a.healthscore > b.healthscore) {
                        return 1
                    }
                    if (b.healthscore > a.healthscore) {
                        return -1
                    }
                    return 0
                }) :
                state.recipes.sort(function (a, b) {
                    if (a.healthscore > b.healthscore) {
                        return -1
                    }
                    if (b.healthscore > a.healthscore) {
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                recipes: sortedElementsHS
            }

        default:
            return { ...state }
    }
}

export default rootReducer