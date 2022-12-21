const { Router } = require("express");
const { Recipe } = require('../db')
const axios = require('axios')
const router = Router()

router.get("/", async (req, res) => {
    try {
        const apiData = await axios.get("https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5") //traemos toda la data de las recetas en la API

        const apiRecipes = await apiData.data.results.map(e => {
            return {
                id: e.id,
                name: e.title,
                summary: e.summary,
                healthscore: e.healthScore,
                steps: e.analyzedInstructions[0]?.steps.map(e => {
                    return (e.step)
                })
            }
        })

        const dbRecipes = await Recipe.findAll() //traemos todas la recetas de la base de datos

        const allRecipes = [...apiRecipes, ...dbRecipes] //Concatenamos las recetas de la api con las de la base de datos
        res.status(200).send(allRecipes)                           //Lo hacemos con el spread operator ...
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.get("/:id", (req, res) => {
    try {
        res.send("Estoy en la ruta de Recetas")
    } catch (error) {

    }
})



module.exports = router;