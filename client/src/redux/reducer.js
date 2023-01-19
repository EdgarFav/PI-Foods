import { FILTER_BY_DIETS, GET_ALL_RECIPES, GET_RECIPE_BY_QUERY, ORDER_BY_HS, ORDER_BY_NAME, GET_DIETS, GET_DETAILS_BY_ID, LIMPIAR_ESTADO_DETAIL, } from "./actions";


const initialState = {
    recipes: [],
    diets: [],
    cardDetails: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }

        case FILTER_BY_DIETS:
            const result = state.recipes;
            if (action.payload === "all") {
                return {
                    ...state,
                    recipes: result,
                }
            } else {
                const dietsFiltered = result.filter(recipe => recipe.diets?.some((diet) => diet === action.payload))
                return {
                    ...state,
                    recipes: dietsFiltered,
                }
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
        case GET_RECIPE_BY_QUERY:
            return {
                ...state,
                recipes: action.payload
            }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        case 'POST_RECIPE':
            return {
                ...state,
            }
        case GET_DETAILS_BY_ID:
            return {
                ...state,
                cardDetails: action.payload
            }
        case LIMPIAR_ESTADO_DETAIL:
            return {
                ...state,
                cardDetails: initialState.cardDetails
            }

        default:
            return state;
    }
}

export default rootReducer