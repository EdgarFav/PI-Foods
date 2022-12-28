const { Recipe, Diet } = require('../db')
const axios = require("axios")


const getApiRecipes = async () => {
    try {

        const apiData = await axios.get("https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5") //traemos toda la data de las recetas en la API

        const apiRecipes = await apiData.data.results.map(e => {
            return {
                id: e.id,
                name: e.title,
                summary: e.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
                healthscore: e.healthScore,
                image: e.image,
                diets: e.diets,
                steps: e.analyzedInstructions[0]?.steps.map(e => {
                    return e.step
                })
            }
        })
        return apiRecipes
    } catch (error) {
        return error
    }
}

const getDBrecipes = async () => {
    try {
        const dbRecipes = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return await dbRecipes.map(e => {
            return {
                id: e.id,
                name: e.name,
                summary: e.summary,
                image: e.image,
                healthscore: e.healthscore,
                diets: e.diets.map(e => e.name),
                steps: e.steps
            }
        })
        //const dbRecipes = await Recipe.findAll() //traemos todas la recetas de la base de datos
        //return dbRecipes
    } catch (error) {
        return error
    }
}

const getALLRecipes = async () => {
    const apiInfo = await getApiRecipes()
    const dbInfo = await getDBrecipes()
    const allRecipes = [...dbInfo, ...apiInfo]  //Concatenamos las recetas de la api con las de la base de datos
    return allRecipes
}

module.exports = {
    getApiRecipes,
    getDBrecipes,
    getALLRecipes
}