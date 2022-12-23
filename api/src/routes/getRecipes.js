const { Router } = require("express");
const { getALLRecipes } = require("../controllers/recipes");
const router = Router()



router.get("/", async (req, res) => {
    const { name } = req.query
    let recipesTotal = await getALLRecipes()

    if (name) {
        try {
            let recipeName = recipesTotal.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));

            recipeName.length ?
                res.status(200).send(recipeName) :
                res.status(404).send("No existe una receta con ese nombre")

        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    } else {
        res.status(200).send(recipesTotal)
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params
    const recipesTotal = await getALLRecipes()
    if (id) {
        try {
            let recipeId = recipesTotal.filter(e => e.id == id)

            recipeId.length ?
                res.status(200).send(recipeId) :
                res.status(404).send("No existe una receta con ese ID")

        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    } else {
        res.status(200).send(recipesTotal)
    }
})



module.exports = router;