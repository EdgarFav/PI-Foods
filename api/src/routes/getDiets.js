const { Router } = require("express");

const router = Router()

router.get("/", (req, res) => {
    try {

    } catch (error) {
        return res.status(400).send("Algo salio mal");
    }
})



module.exports = router;