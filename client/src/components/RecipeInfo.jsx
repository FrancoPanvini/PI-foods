import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//? SERVICES
import axiosRecipeInfo from "../services/getRecipeInfo";

//? STYLES
import { Container, Title, Image, Time, Servings, Score } from "./styles/RecipeInfoSC";
import { HealthScore, Diets, Summary, Ingredients, Procedure } from "./styles/RecipeInfoSC";
import { BiTimeFive, BiCheck } from "react-icons/bi";
import { BsStar, BsFillPeopleFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import { Loader } from "./styles/RecipeInfoSC";

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
        <Loader>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Loader>
      ) : (
        <>
          <Title>
            <h1>{recipe.title}</h1>
          </Title>
          <Image src={recipe.image} alt="not available" />
          <Time>
            <BiTimeFive />
            <p>{recipe.readyInMinutes} min</p>
          </Time>
          <Servings>
            <BsFillPeopleFill />
            <p>{recipe.servings} </p>
          </Servings>
          <Score>
            <BsStar />
            <p>{recipe.score} </p>
          </Score>
          <HealthScore>
            <GiHealthNormal />
            <p>{recipe.healthScore} </p>
          </HealthScore>
          <Diets>
            {recipe.Diets.map(diet => (
              <span key={diet}>{diet}</span>
            ))}
          </Diets>
          <Summary>
            <h3>Summary</h3>
            <p>{recipe.summary.replace(/<[^>]*>?/g, "")} </p>
          </Summary>
          <Ingredients>
            <h3>Ingredients</h3>
            <ul>
              {recipe.Ingredients.map(ingredient => (
                <li key={ingredient.name}>
                  <BiCheck />
                  {" " + ingredient.name}
                  {" " + "..".repeat(30 - ingredient.name.length) + " "}
                  {ingredient.amount} {ingredient.unit}
                </li>
              ))}
            </ul>
          </Ingredients>
          <Procedure>
            <h3>Procedure</h3>
            <ol>
              {recipe.Steps.map(step => (
                <li key={step.number}>{step.content}</li>
              ))}
            </ol>
          </Procedure>
        </>
      )}
    </Container>
  );
}

export default RecipeInfo;
