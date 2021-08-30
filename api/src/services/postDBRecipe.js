const { Recipe } = require("../db");

//* Params examples
/** title = 'Pizza de ananá'
    readyInMinutes = 45
    servings = 2
    *! image = url ??
    ingredients = [{id:1,amount:500,unit:'gr'},{id:2,amount:200,unit:'gr'}]
    steps = [{number:1,content:'hacer la masa con la harina y agua'},{number:2,content:'agregar el ananá'},{number:3,content:'hornear por 20min'}]
    diets = [1,2]
*/

function postDBRecipe(title, readyInMinutes, servings, image, ingredients, steps, diets) {
  //? Create new recipe
  const newRecipe = Recipe.create({ title, readyInMinutes, servings, image });

  //? Set relationes Ingredient,Steps & Diet
  newRecipe.then(
    res => {
      ingredients.map(ingredient =>
        res.addIngredient(ingredient.id, {
          through: {
            amount: ingredient.amount,
            unit: ingredient.unit,
          },
        })
      );

      steps.map(step => {
        res.createStep({ number: step.number, content: step.content });
      });

      res.addDiets(diets);
    },
    err => {
      console.log(`${title} has not been added`);
      throw new Error(err);
    }
  );

  //? Success/Error
  newRecipe.then(() => {
    console.log(`${title} has been successfully added`);
    return newRecipe;
  });
  newRecipe.catch(error => {
    console.log(error.original.detail);
    throw new Error(error);
  });
}

module.exports = postDBRecipe;

postDBRecipe(
  "Pizza de ananá",
  45,
  2,
  "url/foto",
  [
    { id: 1, amount: 500, unit: "gr" },
    { id: 2, amount: 200, unit: "gr" },
  ],
  [
    { number: 1, content: "hacer la masa con la harina y agua" },
    { number: 2, content: "agregar el ananá" },
    { number: 3, content: "hornear por 20min" },
  ],
  [1, 2]
);
