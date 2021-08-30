const { Ingredient } = require("../db");

async function postDBIngredient(name) {
  //? Create new recipe
  try {
    const exist = await Ingredient.findOne({ where: { name: name.toLowerCase() } });
    if (exist) {
      throw new Error(`${name} allready exist`);
    } else {
      await Ingredient.create({ name });
      return `${name} was successfully created`;
    }
  } catch (error) {
    return new Error(error.message);
  }
}

module.exports = postDBIngredient;
