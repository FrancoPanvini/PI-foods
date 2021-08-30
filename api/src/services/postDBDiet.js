const { Diet } = require("../db");

function postDBDiet(name) {
  //? Create new recipe
  const newDiet = Diet.create({ name });

  //? Success/Error
  newDiet.then(() => {
    console.log(`${name} has been successfully added to Diets`);
    return newDiet;
  });
  newDiet.catch(error => {
    console.log(error.original.detail);
    throw new Error(error);
  });
}

module.exports = postDBDiet;
