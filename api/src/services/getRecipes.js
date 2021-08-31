const axios = require("axios");

require("dotenv").config();
const API_KEY = process.env.API_KEY;

async function getRecipes(info = false, ingredients = false, number = 100, cuisine = "Italian") {
  let recipes = undefined;
  try {
    recipes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=${info}&fillIngredients=${ingredients}&number=${number}&cuisine=${cuisine}`
    );
  } catch (error) {
    return new Error(error.message);
  }

  recipes = recipes.data.results.map(recipe => {
    return {
      id: recipe.id,
      title: recipe.title,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      image: recipe.image,
      healthScore: recipe.healthScore,
      score: recipe.spoonacularScore,
      diets: recipe.diets,
    };
  });
  return recipes;
}

module.exports = getRecipes;
