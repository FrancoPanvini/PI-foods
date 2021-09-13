/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, conn } = require("../../src/db.js");

let recipe, recipe2;
const agent = session(app);
const milanesas = {
  title: "milanesas de prueba",
  readyInMinutes: 50,
  servings: 2,
  image: "URLImage",
  healthScore: 100,
  score: 100,
  summary: "este es el summary",
};
const pizza = {
  title: "Pizza de prueba",
  readyInMinutes: 45,
  servings: 2,
  image: "URL",
  healthScore: 95,
  score: 70,
  summary: "es una pizza de prueba",
  ingredients: [{ id: 1, amount: 500, unit: "gr" }],
  steps: [{ number: 1, content: "hacer la masa con la harina y agua" }],
  diets: [2, 3],
};

describe("Recipe routes", () => {
  before(() =>
    conn.authenticate().catch(err => {
      console.error("Unable to connect to the database:", err);
    })
  );
  before(async function () {
    recipe = await Recipe.create(milanesas);
  });
  beforeEach(() => Recipe.sync());

  describe("GET /recipes/id", function () {
    it("should get 200 when Id exist in DB", async function () {
      await agent.get(`/recipes/${recipe.id}?source=db`).expect(200);
    });
    it("should get 404 when Id doesnt exist in DB", async function () {
      await agent.get(`/recipes/25976156?source=db`).expect(404);
    });
    it("should get 200 when Id exist in Spoon API", async function () {
      await agent.get(`/recipes/715495?source=spoon`).expect(200);
    });
    it("should get 404 when Id doesnt exist in DB", async function () {
      await agent.get(`/recipes/25976156?source=spoon`).expect(404);
    });
  });
  describe("POST /recipes", function () {
    it("should get 409 when title allready exist", async function () {
      await agent.post(`/recipes`).send(milanesas).expect(409);
    });
    it("should get 409 when title is missing", async function () {
      await agent
        .post(`/recipes`)
        .send({
          servings: 2,
          summary: "este es el summary de la pizza",
        })
        .expect(409);
    });
    it("should get 409 when servings is missing", async function () {
      await agent
        .post(`/recipes`)
        .send({
          title: "pizza",
          summary: "este es el summary de la pizza",
        })
        .expect(409);
    });
    it("should get 409 when summary is missing", async function () {
      await agent
        .post(`/recipes`)
        .send({
          title: "pizza",
          servings: 2,
        })
        .expect(409);
    });
    it("should get 201 when succesfully created", async function () {
      recipe2 = await agent.post(`/recipes`).send(pizza).expect(201);
    });
  });
  after(async function () {
    await Recipe.destroy({ where: { id: recipe.id } });
    await Recipe.destroy({ where: { id: recipe2.body.id } });
  });
});
