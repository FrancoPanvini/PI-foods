const { Recipe } = require("../db");
const deleteDBRecipe = require("../services/deleteDBRecipe");

//* Params examples
/** title = 'Pizza de ananá'
    readyInMinutes = 45
    servings = 2
    *! image = url ??
    ingredients = [{id:1,amount:500,unit:'gr'},{id:2,amount:200,unit:'gr'}]
    steps = [{number:1,content:'hacer la masa con la harina y agua'},{number:2,content:'agregar el ananá'},{number:3,content:'hornear por 20min'}]
    diets = [1,2]
*/

async function postDBRecipe(title, readyInMinutes, servings, image, ingredients, steps, diets) {
  //? Create new recipe
  let newRecipe = undefined;
  try {
    newRecipe = await Recipe.create({ title, readyInMinutes, servings, image });
  } catch (error) {
    return new Error(error.message);
  }

  //? Set relations Ingredient,Steps & Diet

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
    await deleteDBRecipe(newRecipe.id);
    return new Error(error.message);
  }

  try {
    for (let step of steps) {
      await newRecipe.createStep({ number: step.number, content: step.content });
    }
  } catch (error) {
    await deleteDBRecipe(newRecipe.id);
    return new Error(error.message);
  }

  try {
    await newRecipe.addDiets(diets);
  } catch (error) {
    await deleteDBRecipe(newRecipe.id);
    return new Error(error.message);
  }

  return `${title} has been successfully added`;
}

module.exports = postDBRecipe;
