const { Router } = require("express");

//? require services
const getDBRecipes = require("../services/getDBRecipes");
const getRecipes = require("../services/getRecipes");
const postDBRecipe = require("../services/postDBRecipe");

const recipes = Router();

recipes.get("/", async (req, res) => {
  const { name } = req.query;

  let dbRecipes = await getDBRecipes();
  dbRecipes = dbRecipes.map(recipe => {
    return { ...recipe, source: "db" };
  });
  let spoonRecipes = await getRecipes(true, false, 300);
  spoonRecipes = spoonRecipes.map(recipe => {
    return { ...recipe, source: "spoon" };
  });
  let recipes = [...dbRecipes, ...spoonRecipes];
  if (name) {
    recipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()));
  }
  res.json(recipes);
});

recipes.get("/db", async (req, res) => {
  const { name } = req.query;
  let recipes = await getDBRecipes();
  if (name) {
    recipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()));
  }
  res.json(recipes);
});

recipes.get("/spoon", async (req, res) => {
  const { name } = req.query;
  let recipes = await getRecipes(true, false, 300);
  if (name) {
    recipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()));
  }
  res.json(recipes);
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
