const { Router } = require("express");

//? require services
const getDBRecipes = require("../services/getDBRecipes");
const postDBRecipe = require("../services/postDBRecipe");

const recipes = Router();

recipes.get("/db", async (_req, res) => {
  res.json(await getDBRecipes());
});

recipes.post("/", async (req, res) => {
  const { title, readyInMinutes, servings, image, ingredients, steps, diets } = req.body;
  try {
    let response = await postDBRecipe(
      title,
      readyInMinutes,
      servings,
      image,
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
