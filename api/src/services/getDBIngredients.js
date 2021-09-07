const { Ingredient } = require("../db");

async function getDBIngredients() {
  const ingredients = await Ingredient.findAll();
  return ingredients.map(ingredient => ingredient.dataValues);
}

module.exports = getDBIngredients;
