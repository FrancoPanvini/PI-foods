const { Diet } = require("../db");
//const uploadDiets = require("./help/uploadDiets");

async function postDBDiet(name) {
  const [_newDiet, created] = await Diet.findOrCreate({
    where: { name: name.toLowerCase() },
  });
  if (!created) throw new Error(`${name} allready exist`);
  return `${name} was successfully created`;
}

// uploadDiets(postDBDiet);  //? Un-comment this line for first mass upload of diets & then comment again

module.exports = postDBDiet;
