const { Diet } = require("../db");
const uploadDiets = require("./help/uploadDiets");

async function postDBDiet(name) {
  try {
    const exist = await Diet.findOne({ where: { name: name.toLowerCase() } });
    if (exist) {
      throw new Error(`${name} allready exist`);
    } else {
      await Diet.create({ name });
      return `${name} was successfully created`;
    }
  } catch (error) {
    return new Error(error.message);
  }
}

// uploadDiets(postDBDiet);  //? Un-comment this line for first mass upload of diets & then comment again

module.exports = postDBDiet;
