const { Router } = require("express");

//? require services
const getDBRecipes = require("../services/getDBRecipes");
const getRecipes = require("../services/getRecipes");
const getDBRecipeInfo = require("../services/getDBRecipeInfo");
const getRecipeInfo = require("../services/getRecipeInfo");
const postDBRecipe = require("../services/postDBRecipe");

const recipes = Router();

recipes.get("/", async (req, res) => {
  const { name } = req.query;

  let dbRecipes = await getDBRecipes();
  if (dbRecipes instanceof Error) res.status(400).send(dbRecipes.message);
  dbRecipes = dbRecipes.map(recipe => {
    return { ...recipe, source: "db" };
  });

  let spoonRecipes = await getRecipes(true, false, 300);
  if (spoonRecipes instanceof Error) res.status(400).send(spoonRecipes.message);
  spoonRecipes = spoonRecipes.map(recipe => {
    return { ...recipe, source: "spoon" };
  });

  let recipes = [...dbRecipes, ...spoonRecipes];
  if (name) {
    recipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()));
  }
  recipes.length > 0 ? res.json(recipes) : res.status(404).json('NO matches found');
});

//!OK
recipes.get("/db", async (req, res) => {
  const { name } = req.query;
  let recipes = await getDBRecipes(name);
  recipes.length > 0 ? res.json(recipes) : res.status(404).json('NO matches found');
});

recipes.get("/spoon", async (req, res) => {
  const { name } = req.query;
  let recipes = await getRecipes(true, false, 300);
  if (recipes instanceof Error) res.status(400).send(recipes.message);
  if (name) {
    recipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()));
  }
  recipes.length > 0 ? res.json(recipes) : res.status(404).json('NO matches found');
});

recipes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { source } = req.query;

  if (source === "db") {
    let recipe = await getDBRecipeInfo(id);
    if (recipe instanceof Error) res.status(404).send(recipe.message);
    res.json(recipe);
  }

  if (source === "spoon") {
    let recipe = await getRecipeInfo(id);
    if (recipe instanceof Error) res.status(404).send(recipe.message);
    res.json(recipe);
  }
});

//!OK
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
    res.status(201).send(response);
  } catch (error) {
    res.status(409).send(error.message);
  }
});

module.exports = recipes;
