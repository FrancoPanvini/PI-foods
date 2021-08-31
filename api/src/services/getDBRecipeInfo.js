const { Recipe, Diet, Ingredient, Step } = require("../db");

async function getDBRecipeInfo(id) {
  let recipe = undefined;
  try {
    recipe = await Recipe.findOne({
      where: { id: id },
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
        { model: Diet, attributes: ["name"] },
        { model: Ingredient, attributes: ["name"] },
        { model: Step },
      ],
    });
  } catch (error) {
    return new Error(error.message);
  }
  recipe = recipe.dataValues;
  recipe = {
    ...recipe,
    Diets: recipe.Diets.map(diet => diet.name),
    Ingredients: recipe.Ingredients.map(ingredient => ingredient.name),
    Steps: recipe.Steps.map(step => {
      return { number: step.number, content: step.content };
    }),
  };
  return recipe;
}

module.exports = getDBRecipeInfo;
