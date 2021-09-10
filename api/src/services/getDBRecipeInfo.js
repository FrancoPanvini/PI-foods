const { Recipe, Diet, Ingredient, Step } = require("../db");

async function getDBRecipeInfo(id) {
  let recipe = await Recipe.findOne({
    where: { id },
    attributes: [
      "id",
      "title",
      "readyInMinutes",
      "servings",
      "image",
      "healthScore",
      "score",
      "summary",
    ],
    include: [
      { model: Diet, attributes: ["name"], through: { attributes: [] } },
      { model: Ingredient, attributes: ["name"], through: { attributes: ["amount", "unit"] } },
      { model: Step, attributes: ["number", "content"] },
    ],
  });
  if (!recipe) throw new Error(`Recipe id:${id} doesn't exist`);
  recipe = recipe.dataValues;

  return {
    ...recipe,
    Diets: recipe.Diets.map(diet => diet.name),
    Ingredients: recipe.Ingredients.map(ingredient => {
      return {
        name: ingredient.name,
        amount: ingredient.RecipeIngredient.amount,
        unit: ingredient.RecipeIngredient.unit,
      };
    }),
  };
}

module.exports = getDBRecipeInfo;
