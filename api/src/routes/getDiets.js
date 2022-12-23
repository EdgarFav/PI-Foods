const { Router } = require("express");
const { Diet } = require('../db')

const router = Router()

router.get("/", async (req, res) => {
    const types = [
        "gluten free",
        "dairy free",
        "paleolithic",
        "lacto ovo vegetarian",
        "primal",
        "whole 30",
        "fodmap friendly",
        "ketogenic",
        "pescatarian",
        "vegan"
    ]
    types.forEach(async (e) => {
        await Diet.findOrCreate({
            where: { name: e }
        })
    });
    const result = await Diet.findAll()
    return res.send(result)

})

module.exports = router;