const { Ingredient } = require("../db");

async function postDBIngredient(name) {
  const [_newIngredient, created] = await Ingredient.findOrCreate({
    where: { name: name.toLowerCase() },
  });
  if (!created) throw new Error(`${name} allready exist`);
  return `${name} was successfully created`;
}

module.exports = postDBIngredient;
