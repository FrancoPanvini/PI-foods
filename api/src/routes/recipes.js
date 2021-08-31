const { Router } = require("express");

//? require services
const getDBRecipes = require("../services/getDBRecipes");
const getRecipes = require("../services/getRecipes");
const postDBRecipe = require("../services/postDBRecipe");

const recipes = Router();

recipes.get("/db", async (_req, res) => {
  res.json(await getDBRecipes());
});

recipes.get("/spoon", async (_req, res) => {
  res.json(await getRecipes(true, false, 10));
});

recipes.post("/", async (req, res) => {
  const {
    title,
    readyInMinutes,
    servings,
    image,
    healthScore,
    score,
    summary,
    ingredients,
    steps,
    diets,
  } = req.body;
  try {
    let response = await postDBRecipe(
      title,
      readyInMinutes,
      servings,
      image,
      healthScore,
      score,
      summary,
      ingredients,
      steps,
      diets
    );
    response instanceof Error
      ? res.status(400).send(response.message)
      : res.status(201).send(response);
  } catch (err) {
    console.log(err);
  }
});

module.exports = recipes;
