const { Router } = require("express");
const { Recipe } = require('../db')
const router = Router()

router.post("/", async (req, res) => {
    try {
        const { name, summary, healtscore, steps } = req.body;
        await Recipe.create({ name, summary, healtscore, steps });
        res.status(201).send("receta creada con éxito")

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})



module.exports = router;