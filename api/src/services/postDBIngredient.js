const { Ingredient } = require("../db");

function postDBIngredient(name) {
  //? Create new recipe
  const newIngredient = Ingredient.create({ name });

  //? Success/Error
  newIngredient.then(() => {
    console.log(`${name} has been successfully added to Ingredients`);
    return newIngredient;
  });
  newIngredient.catch(error => {
    console.log(error.original.detail);
    throw new Error(error);
  });
}

module.exports = postDBIngredient;

postDBIngredient("Ananá");
