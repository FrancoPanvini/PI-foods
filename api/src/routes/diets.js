const { Router } = require("express");

//? SERVICES
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
    res.status(201).send(response);
  } catch (error) {
    res.status(409).send(error.message);
  }
});

module.exports = diets;
