const { Router } = require("express");

//? SERVICES
const getDBIngredients = require("../services/getDBIngredients");
const postDBIngredient = require("../services/postDBIngredient");

const ingredients = Router();

ingredients.get("/", async (_req, res) => {
  res.json(await getDBIngredients());
});

ingredients.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    let response = await postDBIngredient(name);
    res.status(201).send(response);
  } catch (error) {
    res.status(409).send(error.message);
  }
});

module.exports = ingredients;
