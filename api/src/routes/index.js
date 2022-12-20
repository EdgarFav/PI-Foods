const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const postRecipeRoute = require('./postRecipes');
const getDietRoute = require('./getDiets');
const getRecipeRoute = require('./getRecipes');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", getDietRoute);
router.use("/recipes", getRecipeRoute);
router.use("/diets", postRecipeRoute);


module.exports = router;
