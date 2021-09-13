const { Recipe, Diet, conn } = require("../../src/db.js");
const { expect } = require("chai");

let recipe, recipe2, diet, diet2, diet3;
const milanesas = {
  title: "milanesas",
  readyInMinutes: 50,
  servings: 2,
  image: "URLImage",
  healthScore: 100,
  score: 100,
  summary: "este es el summary",
};

describe("Recipe model", () => {
  before(() =>
    conn.authenticate().catch(err => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Recipe.sync());
  describe("Create new Recipe", () => {
    it("should throw an error if title is null", done => {
      Recipe.create({ servings: 2, summary: "este es el resumen" })
        .then(() => done(new Error("nada")))
        .catch(() => done());
    });
    it("should throw an error if servings is null", done => {
      Recipe.create({ title: "milanesas", summary: "este es el resumen" })
        .then(() => done(new Error()))
        .catch(() => done());
    });
    it("should throw an error if summa is null", done => {
      Recipe.create({ title: "milanesas", servings: 2 })
        .then(() => done(new Error()))
        .catch(() => done());
    });
    it("should create a new recipe with title, servings & summary", async function () {
      recipe = await Recipe.create({ title: "Milanesa a la napolitana", servings: 2, summary: "prueba de summary" });
      expect(recipe.title).to.equal("milanesa a la napolitana");
      expect(recipe.servings).to.equal(2);
      expect(recipe.summary).to.equal("prueba de summary");
    });
    it("should create a full new recipe", async function () {
      recipe2 = await Recipe.create(milanesas);
      expect(recipe2.title).to.equal("milanesas");
      expect(recipe2.readyInMinutes).to.equal(50);
      expect(recipe2.servings).to.equal(2);
      expect(recipe2.image).to.equal("URLImage");
      expect(recipe2.summary).to.equal("este es el summary");
    });
    it("servings should be an integer", done => {
      Recipe.create({ title: "receta", servings: "casa", summary: "prueba de summary" })
        .then(() => done(new Error()))
        .catch(() => done());
    });
    it("readyInMinutes should be an integer", done => {
      Recipe.create({ title: "receta", servings: 2, summary: "prueba de summary", readyInMinutes: "casa" })
        .then(() => done(new Error()))
        .catch(() => done());
    });
    it("score should be an integer", done => {
      Recipe.create({ title: "receta", servings: 2, summary: "prueba de summary", score: "casa" })
        .then(() => done(new Error()))
        .catch(() => done());
    });
    it("healthScore should be an integer", done => {
      Recipe.create({ title: "receta", servings: 2, summary: "prueba de summary", healthScore: "casa" })
        .then(() => done(new Error()))
        .catch(() => done());
    });
  });
  after(async function () {
    await Recipe.destroy({ where: { id: recipe.id } });
    await Recipe.destroy({ where: { id: recipe2.id } });
  });
});

describe("Diet model", () => {
  before(() =>
    conn.authenticate().catch(err => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Diet.sync());
  describe("Create new Diet", function () {
    it("should throw an error if name is null", done => {
      Diet.create({})
        .then(() => done(new Error("nada")))
        .catch(() => done());
    });
    it("should create a new diet", async function () {
      diet = await Diet.create({ name: "Nueva dieta" });
      expect(diet.name).to.equal("nueva dieta");
    });
    it("should throw an error if name is not unique", done => {
      Diet.create({ name: "Nueva dieta" })
        .then(() => done(new Error("nada")))
        .catch(() => done());
    });
    after(async function () {
      await Diet.destroy({ where: { id: diet.id } });
    });
  });
  describe("Set Diets-Recipe relations", function () {
    before(async function () {
      recipe = await Recipe.create(milanesas);
      diet = await Diet.create({ name: "Nueva dieta" });
      diet2 = await Diet.create({ name: "Otra dieta" });
      diet3 = await Diet.create({ name: "Otra dieta más" });
    });
    it("should assign a Diet to a Recipe through a table", async function () {
      const rel = await recipe.addDiet(diet);
      expect(rel[0].RecipeId).to.equal(recipe.id);
      expect(rel[0].DietId).to.equal(diet.id);
    });
    it("should assign multiples Diets to a Recipe through a table", async function () {
      const rel = await recipe.addDiet([diet2.id, diet3.id]);
      expect(rel[0].RecipeId).to.equal(recipe.id);
      expect(rel[1].RecipeId).to.equal(recipe.id);
      expect(rel[0].DietId).to.equal(diet2.id);
      expect(rel[1].DietId).to.equal(diet3.id);
    });
    after(async function () {
      await Recipe.destroy({ where: { id: recipe.id } });
      await Diet.destroy({ where: { id: diet.id } });
      await Diet.destroy({ where: { id: diet2.id } });
      await Diet.destroy({ where: { id: diet3.id } });
    });
  });
});
