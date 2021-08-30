const { Diet } = require("../db");

async function postDBDiet(name) {
  //? Create new recipe
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

module.exports = postDBDiet;
