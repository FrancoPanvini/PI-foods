const { Recipe } = require("../db");

/** 
    ** Params examples
    title = 'Pizza de ananá'
    readyInMinutes = 45
    servings = 2
    *! image = url ??
    ingredients = [{name:'harina',amount:500,unit:'gr'},{{name:'anana',amount:200,unit:'gr'}}]
    steps = [{number:1,content:'hacer la masa con la harina y agua'},{number:2,content:'agregar el ananá'},{number:3,content:'hornear por 20min'}]
    diets = [1,3,5,7]
*/

function postRecipe(title, readyInMinutes, servings, image, ingredients, steps, diets) {
  const newRecipe = Recipe.create({ title, readyInMinutes, servings, image });
  newRecipe.then(
    res => {
      ingredients.map(ingredient =>
        res.setIngredient({
          name: ingredient.name,
          amount: ingredient.amount,
          unit: ingredient.unit,
        })
      );
      steps.map(step => res.setStep({ number: step.number, content: step.content }));
      diets.map(dietId => res.setDiet(dietId));
    },
    err => {
      console.log(`${title} has not been added`);
      throw new Error(err);
    }
  );
  new newRecipe.then(() => {
    console.log(`${title} has been successfully added`);
    return newRecipe;
  });
  new newRecipe.catch(error => {
    throw new Error(error);
  });
}

module.exports = postRecipe;
