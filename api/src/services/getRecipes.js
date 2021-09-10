const axios = require("axios");

require("dotenv").config();
const API_KEY = process.env.API_KEY;

async function getRecipes(name) {
  const number = 100;
  const cuisine = "Italian";
  let recipes = undefined;
  name = name ? `&query=${name}` : "";
  try {
    recipes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=${number}&cuisine=${cuisine}${name}`
    );
  } catch (error) {
    throw new Error("Problems fetching data from API failed");
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
