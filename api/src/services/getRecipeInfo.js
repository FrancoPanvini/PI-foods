const axios = require("axios");

require("dotenv").config();
const API_KEY = process.env.API_KEY;

function gerRecipeInfo(id) {
  return axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
}

module.exports = gerRecipeInfo;
