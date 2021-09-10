const { Router } = require("express");

//? SERVICES
const getDBRecipes = require("../services/getDBRecipes");
const getRecipes = require("../services/getRecipes");
const getDBRecipeInfo = require("../services/getDBRecipeInfo");
const getRecipeInfo = require("../services/getRecipeInfo");
const postDBRecipe = require("../services/postDBRecipe");

const recipes = Router();
recipes.get("/", async (req, res) => {
  const { name } = req.query;

  let dbRecipes = await getDBRecipes(name);
  dbRecipes = dbRecipes.map(recipe => {
    return { ...recipe, source: "db" };
  });

  let spoonRecipes = await getRecipes(name);
  spoonRecipes = spoonRecipes.map(recipe => {
    return { ...recipe, source: "spoon" };
  });

  let recipes = [...dbRecipes, ...spoonRecipes];
  recipes.length > 0 ? res.json(recipes) : res.status(404).json("NO matches found");
});

recipes.get("/db", async (req, res) => {
  const { name } = req.query;
  let recipes = await getDBRecipes(name);
  recipes.length > 0 ? res.json(recipes) : res.status(404).json("NO matches found");
});

recipes.get("/spoon", async (req, res) => {
  const { name } = req.query;
  let recipes;
  try {
    recipes = await getRecipes(name);
  } catch (error) {
    res.status(400).json(error.message);
  }
  recipes.length > 0 ? res.json(recipes) : res.status(404).json("NO matches found");
});

recipes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { source } = req.query;
  let recipe;
  try {
    if (source === "db") {
      recipe = await getDBRecipeInfo(id);
      res.json(recipe);
    }
    if (source === "spoon") {
      let recipe = await getRecipeInfo(id);
      res.json(recipe);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
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
    res.status(201).send(response);
  } catch (error) {
    res.status(409).send(error.message);
  }
});

module.exports = recipes;
