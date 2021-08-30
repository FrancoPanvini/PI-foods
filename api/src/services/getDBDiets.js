const { Diet } = require("../db");

async function getDBDiets() {
  const diets = await Diet.findAll({
    attributes: ["name"],
  });
  return diets.map(diet=>diet.name);
}

module.exports = getDBDiets;
