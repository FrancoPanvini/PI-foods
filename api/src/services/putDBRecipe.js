const { Recipe, RecipeIngredient } = require("../db");
const deleteDBRecipeRelations = require("./deleteDBRecipeRelations");

async function putDBRecipe(id, title, readyInMinutes, servings, image, healthScore, score, summary, ingredients, steps, diets) {
  //* Update Recipe
  await Recipe.update({ title, readyInMinutes, servings, image, healthScore, score, summary }, { where: { id: parseInt(id) } });
  const newRecipe = await Recipe.findOne({ where: { id: parseInt(id) } });

  //* Delete former realtions to re-create
  await deleteDBRecipeRelations(id);

  //* Set relations Ingredient,Steps & Diet
  try {
    for (let ingredient of ingredients) {
      await newRecipe.addIngredient(ingredient.id, {
        through: {
          amount: ingredient.amount,
          unit: ingredient.unit,
        },
      });
    }
  } catch (error) {
    throw new Error("Problems setting Ingredients relations with Recipe");
  }

  try {
    for (let step of steps) {
      await newRecipe.createStep({ number: step.number, content: step.content });
    }
  } catch (error) {
    throw new Error("Problems creating Steps of the procedure");
  }

  try {
    await newRecipe.addDiets(diets);
  } catch (error) {
    throw new Error("Problems setting Diets relations with Recipe");
  }

  return newRecipe;
}

module.exports = putDBRecipe;
