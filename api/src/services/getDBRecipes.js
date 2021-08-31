const { Recipe, Diet, Ingredient } = require("../db");

async function getDBRecipes() {
  let recipes = await Recipe.findAll({
    attributes: ["id", "title", "readyInMinutes", "servings", "image"],
    include: [
      { model: Diet, attributes: ["name"] },
      { model: Ingredient, attributes: ["name"] },
    ],
  });
  recipes = recipes.map(recipe => recipe.dataValues);

  recipes = recipes.map(recipe => {
    return {
      ...recipe,
      Diets: recipe.Diets.map(diet => diet.name),
      Ingredients: recipe.Ingredients.map(ingredient => ingredient.name),
    };
  });
  return recipes;
}

module.exports = getDBRecipes;
