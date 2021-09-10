const axios = require("axios");

require("dotenv").config();
const API_KEY = process.env.API_KEY;

async function gerRecipeInfo(id) {
  let recipe = undefined;
  try {
    recipe = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
  } catch (error) {
    throw new Error("Problems fetching data from API failed");
  }
  recipe = recipe.data;
  recipe = {
    id: recipe.id,
    title: recipe.title,
    readyInMinutes: recipe.readyInMinutes,
    servings: recipe.servings,
    image: recipe.image,
    healthScore: recipe.healthScore,
    score: recipe.spoonacularScore,
    summary: recipe.summary,
    Diets: recipe.diets,
    Ingredients: recipe.extendedIngredients.map(ingredient => {
      return { name: ingredient.name, amount: ingredient.amount, unit: ingredient.unit };
    }),
    Steps: recipe.analyzedInstructions[0].steps.map(step => {
      return { number: step.number, content: step.step };
    }),
  };
  return recipe;
}

module.exports = gerRecipeInfo;
