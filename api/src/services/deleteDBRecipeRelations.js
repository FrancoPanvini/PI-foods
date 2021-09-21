const { Recipe, RecipeDiet, RecipeIngredient, Step } = require("../db");

async function deleteDBRecipeRelations(id) {
  const recipe = await Recipe.findOne({ where: { id } });
  if (!recipe) throw new Error(`Recipe does not exist`);
  await Step.destroy({ where: { RecipeId: id } });
  await RecipeDiet.destroy({ where: { RecipeId: id } });
  await RecipeIngredient.destroy({ where: { RecipeId: id } });
  return recipe;
}

module.exports = deleteDBRecipeRelations;
