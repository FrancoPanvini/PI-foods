const { Recipe } = require("../db");
const deleteDBRecipe = require("../services/deleteDBRecipe");

async function postDBRecipe(
  title,
  readyInMinutes,
  servings,
  image,
  healthScore,
  score,
  summary,
  ingredients,
  steps,
  diets
) {

  //* Create new Recipe
  const [newRecipe, created] = await Recipe.findOrCreate({
    where: { title: title.toLowerCase() },
    defaults: {
      readyInMinutes,
      servings,
      image,
      healthScore,
      score,
      summary,
    },
  });
  if (!created) throw new Error(`${title} allready exist`);
  
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
    await deleteDBRecipe(newRecipe.id);
    throw new Error('Problems setting Ingredients relations with Recipe');
  }

  try {
    for (let step of steps) {
      await newRecipe.createStep({ number: step.number, content: step.content });
    }
  } catch (error) {
    await deleteDBRecipe(newRecipe.id);
    throw new Error('Problems creating Steps of the procedure');
  }

  try {
    await newRecipe.addDiets(diets);
  } catch (error) {
    await deleteDBRecipe(newRecipe.id);
    throw new Error('Problems setting Diets relations with Recipe');
  }

  return newRecipe;
}

module.exports = postDBRecipe;

//* Params examples
/** title = 'Pizza de ananá'
    readyInMinutes = 45
    servings = 2
    image = url
    healthScore = 90
    score = 75
    summary = 'es una pizza con ananá'
    ingredients = [{id:1,amount:500,unit:'gr'},{id:2,amount:200,unit:'gr'}]
    steps = [{number:1,content:'hacer la masa con la harina y agua'},{number:2,content:'agregar el ananá'},{number:3,content:'hornear por 20min'}]
    diets = [1,2]
*/
