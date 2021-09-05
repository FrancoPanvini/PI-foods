import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//? SERVICES
import axiosRecipeInfo from "../services/getRecipeInfo";

//? STYLES
import { Container } from "./styles/RecipeInfoSC";

function RecipeInfo() {
  const { source, id } = useParams();

  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(true);

  //* Axios data on mount
  useEffect(() => {
    axiosRecipeInfo(source, id)
      .then(res => {
        setRecipe(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id, source]);

  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt="not available" />
          <p>ready in: {recipe.readyInMinutes} min</p>
          <p>for: {recipe.servings} </p>
          <p>score: {recipe.score} </p>
          <p>healthScore: {recipe.healthScore} </p>
          <p>sumarry: {recipe.summary} </p>
          <p>diets:</p>
          <ul>
            {recipe.Diets.map(diet => (
              <li key={diet}>{diet}</li>
            ))}
          </ul>
          <p>ingredients:</p>
          <ul>
            {recipe.Ingredients.map(ingredient => (
              <li key={ingredient.name}>
                {ingredient.name}.............. {ingredient.amount} {ingredient.unit}
              </li>
            ))}
          </ul>
          <p>procedure:</p>
          <ol>
            {recipe.Steps.map(step => (
              <li key={step.number}>{step.content}</li>
            ))}
          </ol>
        </div>
      )}
    </Container>
  );
}

export default RecipeInfo;
