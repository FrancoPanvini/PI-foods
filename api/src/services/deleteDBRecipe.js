const { Recipe, RecipeDiet, RecipeIngredient, Step } = require("../db");

async function deleteDBRecipe(id) {
  try {
    const recipe = await Recipe.findOne({ where: { id } });
    if (recipe) {
      await Step.destroy({ where: { RecipeId: id } });
      await Recipe.destroy({ where: { id } });
      await RecipeDiet.destroy({ where: { RecipeId: id } });
      await RecipeIngredient.destroy({ where: { RecipeId: id } });
      return `Recipe was successfully deleted`;
    } else {
      throw new Error(`Recipe does not exist`);
    }
  } catch (error) {
    return new Error(error.message);
  }
}

module.exports = deleteDBRecipe;
