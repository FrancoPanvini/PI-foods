const { Recipe, Diet, Ingredient } = require("../db");

function getDBRecipes() {
  const recipes = Recipe.findAll({
    attributes: ["id", "title", "readyInMinutes", "servings", "image"],
    include: [
      { model: Diet, attributes: ["name"] },
      { model: Ingredient, attributes: ["name"] },
    ],
  });
  return recipes;
}

module.exports = getDBRecipes;
