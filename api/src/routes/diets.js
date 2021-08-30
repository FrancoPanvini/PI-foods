const { Router } = require("express");

//? require services
const getDBDiets = require("../services/getDBDiets");
const postDBDiet = require("../services/postDBDiet");

const diets = Router();

diets.get("/", async (_req, res) => {
  res.json(await getDBDiets());
});

diets.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    let response = await postDBDiet(name);
    response instanceof Error
      ? res.status(400).send(response.message)
      : res.status(201).send(response);
  } catch (err) {
    console.log(err);
  }
});

module.exports = diets;
