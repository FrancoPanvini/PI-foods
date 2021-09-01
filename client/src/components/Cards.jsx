import React from "react";

import Card from "./Card";
import Sidebar from "./Sidebar";

import { Container, CardsContainer } from "./styles/CardsSC";

function Cards() {
  return (
    <Container>
      <CardsContainer>
        {recipes.map(recipe => {
          return (
            <Card
              image={recipe.image}
              title={recipe.title}
              readyInMinutes={recipe.readyInMinutes}
              score={recipe.score}
              healthScore={recipe.healthScore}
              source={recipe.source}
            />
          );
        })}
      </CardsContainer>
      <Sidebar />
    </Container>
  );
}

export default Cards;

const recipes = [
  {
    id: 715495,
    title: "Turkey Tomato Cheese Pizza",
    readyInMinutes: 15,
    servings: 6,
    image: "https://spoonacular.com/recipeImages/715495-312x231.jpg",
    healthScore: 33,
    score: 97,
    diets: [],
    source: "spoon",
  },
  {
    id: 716300,
    title: "Plantain Pizza",
    readyInMinutes: 45,
    servings: 3,
    image: "https://spoonacular.com/recipeImages/716300-312x231.jpg",
    healthScore: 28,
    score: 91,
    diets: ["dairy free"],
    source: "spoon",
  },
  {
    id: 643471,
    title: "fresh corn, roasted tomato & pickled garlic pizza with cornmeal crust",
    readyInMinutes: 45,
    servings: 4,
    image: "https://spoonacular.com/recipeImages/643471-312x231.jpg",
    healthScore: 52,
    score: 87,
    diets: [],
    source: "spoon",
  },
  {
    id: 647124,
    title: "Homemade Thin Crust Pizza + Pesto + Potato",
    readyInMinutes: 45,
    servings: 6,
    image: "https://spoonacular.com/recipeImages/647124-312x231.jpg",
    healthScore: 57,
    score: 85,
    diets: [],
    source: "spoon",
  },
  {
    id: 658615,
    title: "Roasted Peppers, Spinach & Feta Pizza",
    readyInMinutes: 45,
    servings: 1,
    image: "https://spoonacular.com/recipeImages/658615-312x231.jpg",
    healthScore: 55,
    score: 83,
    diets: ["lacto ovo vegetarian"],
    source: "spoon",
  },
  {
    id: 641893,
    title: "Easy Cheesy Pizza Casserole",
    readyInMinutes: 45,
    servings: 6,
    image: "https://spoonacular.com/recipeImages/641893-312x231.jpg",
    healthScore: 22,
    score: 82,
    diets: [],
    source: "spoon",
  },
  {
    id: 663136,
    title: "Thai Pizza",
    readyInMinutes: 45,
    servings: 3,
    image: "https://spoonacular.com/recipeImages/663136-312x231.jpg",
    healthScore: 50,
    score: 82,
    diets: [],
    source: "spoon",
  },
  {
    id: 663366,
    title: "Thin Crust Genoa Salami Pizza",
    readyInMinutes: 45,
    servings: 4,
    image: "https://spoonacular.com/recipeImages/663366-312x231.png",
    healthScore: 36,
    score: 77,
    diets: [],
    source: "spoon",
  },
  {
    id: 655847,
    title: "Pesto Veggie Pizza",
    readyInMinutes: 45,
    servings: 4,
    image: "https://spoonacular.com/recipeImages/655847-312x231.jpg",
    healthScore: 45,
    score: 76,
    diets: [],
    source: "spoon",
  },
  {
    id: 1095810,
    title: "Buffalo Mozzarella & Pepperoni Pizza with a Cauliflower Crust",
    readyInMinutes: 45,
    servings: 2,
    image: "https://spoonacular.com/recipeImages/1095810-312x231.jpg",
    healthScore: 37,
    score: 75,
    diets: ["gluten free"],
    source: "spoon",
  },
  {
    id: 662264,
    title: "summer vegetable pizza",
    readyInMinutes: 45,
    servings: 4,
    image: "https://spoonacular.com/recipeImages/662264-312x231.jpg",
    healthScore: 28,
    score: 68,
    diets: [],
    source: "spoon",
  },
  {
    id: 656329,
    title: "Pizza bites with pumpkin",
    readyInMinutes: 45,
    servings: 4,
    image: "https://spoonacular.com/recipeImages/656329-312x231.jpg",
    healthScore: 17,
    score: 66,
    diets: ["gluten free", "lacto ovo vegetarian", "primal"],
    source: "spoon",
  },
];
