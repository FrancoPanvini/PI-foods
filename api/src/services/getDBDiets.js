const { Diet } = require("../db");

async function getDBDiets() {
  const diets = await Diet.findAll();
  return diets.map(diet => diet.dataValues);
}

module.exports = getDBDiets;
