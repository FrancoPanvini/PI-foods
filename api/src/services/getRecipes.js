const axios = require("axios");

require("dotenv").config();
const API_KEY = process.env.API_KEY;

function getRecipes(info = false, ingredients = false, number = 100, cuisine = "Italian") {
  return axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=${info}&fillIngredients=${ingredients}&number=${number}&cuisine=${cuisine}`
  );
}

module.exports = getRecipes;
