const axios = require("axios");

//! Agregar q devuelva la promesa con un then(q me manda solo la data) y un catch

require("dotenv").config();
const API_KEY = process.env.API_KEY;

function getRecipes(info = false, ingredients = false, number = 100, cuisine = "Italian") {
  return axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=${info}&fillIngredients=${ingredients}&number=${number}&cuisine=${cuisine}`
  );
}

module.exports = getRecipes;
