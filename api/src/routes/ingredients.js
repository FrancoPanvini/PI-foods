const { Router } = require("express");

//? require services
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
    response instanceof Error
      ? res.status(400).send(response.message)
      : res.status(201).send(response);
  } catch (err) {
    console.log(err);
  }
});

module.exports = ingredients;
