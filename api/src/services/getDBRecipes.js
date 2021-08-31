const { Recipe, Diet, Ingredient } = require("../db");

async function getDBRecipes() {
  let recipes = undefined;
  try {
    recipes = await Recipe.findAll({
      attributes: ["id", "title", "readyInMinutes", "servings", "image", "healthScore", "score"],
      include: [{ model: Diet, attributes: ["name"] }],
    });
  } catch (error) {
    return new Error(error.message);
  }

  recipes = recipes.map(recipe => recipe.dataValues);

  recipes = recipes.map(recipe => {
    return {
      ...recipe,
      Diets: recipe.Diets.map(diet => diet.name),
    };
  });
  return recipes;
}

module.exports = getDBRecipes;
