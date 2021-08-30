const { Ingredient } = require("../db");

async function getDBIngredients() {
  const ingredients = await Ingredient.findAll({
    attributes: ["name"],
  });
  return ingredients.map(ingredient=>ingredient.name);
}

module.exports = getDBIngredients;
