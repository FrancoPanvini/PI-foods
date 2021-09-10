const axios = require("axios");

require("dotenv").config();
const API_KEY = process.env.API_KEY;

async function getRecipes(name) {
  const number = 100;
  const cuisine = "Italian";
  let recipes = undefined;
  name = name ? `&query=${name}` : "";
  try {
    recipes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=${number}&cuisine=${cuisine}${name}`
    );
    recipes = recipes.data.results;
    if (name === "") {
      const recipes2 = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=${number}&offset=${number}&cuisine=${cuisine}`
      );
      const recipes3 = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=${number}&offset=${
          2 * number
        }&cuisine=${cuisine}`
      );
      recipes = [...recipes, ...recipes2.data.results, ...recipes3.data.results];
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Problems fetching data from API failed");
  }

  recipes = recipes?.map(recipe => {
    return {
      id: recipe.id,
      title: recipe.title,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      image: recipe.image,
      healthScore: recipe.healthScore,
      score: recipe.spoonacularScore,
      diets: recipe.diets,
    };
  });
  return recipes;
}

module.exports = getRecipes;
