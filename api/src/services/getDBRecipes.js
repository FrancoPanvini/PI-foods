const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");

async function getDBRecipes(name) {
  const query = {
    where: {},
    attributes: ["id", "title", "readyInMinutes", "servings", "image", "healthScore", "score"],
    include: [{ model: Diet, attributes: ["name"], through: { attributes: [] } }],
  };
  if (name) query.where.title = { [Op.substring]: name.toLowerCase() };
  const recipes = await Recipe.findAll(query);

  return recipes
    .map(recipe => recipe.dataValues)
    .map(recipe => {
      return {
        ...recipe,
        Diets: recipe.Diets.map(diet => diet.name),
      };
    });
}

module.exports = getDBRecipes;
