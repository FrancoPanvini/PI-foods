const axios = require("axios");

//! Agregar q devuelva la promesa con un then(q me manda solo la data) y un catch

require("dotenv").config();
const API_KEY = process.env.API_KEY;

function gerRecipeInfo(id) {
  return axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
}

module.exports = gerRecipeInfo;
