const { Recipe, Diet, Ingredient } = require("../db");

function getDBRecipes() {
  const recipes = Recipe.findAll({
    attributes: ["id", "title", "readyInMinutes", "servings", "image"],
    include: [
      { model: Diet, attributes: ["name"] },
      { model: Ingredient, attributes: ["name"] },
    ],
  });
  recipes.then(res => res);
  return recipes;
}

let prueba = getDBRecipes();
prueba.then((res => console.log(res)));
