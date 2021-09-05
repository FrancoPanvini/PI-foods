import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//? ACTIONS
import { getRecipes } from "../store/actions";

//? COMPONENTS
import Card from "./Card";
import Sidebar from "./Sidebar";

//? STYLES
import { Container, CardsContainer } from "./styles/CardsSC";

function Cards() {
  const dispatch = useDispatch();

  //* Preload recipes
  // eslint-disable-next-line
  useEffect(() => dispatch(getRecipes(dispatch)), []);
  const { recipes, loading, indexFirstRecipe, indexLastRecipe } = useSelector(state => state);
  // const pageRecipes = useEffect(() => {
  //   return recipes.slice(indexFirstRecipe, indexLastRecipe);
  // }, [indexFirstRecipe, indexLastRecipe, recipes]);

  const pageRecipes = recipes.slice(indexFirstRecipe, indexLastRecipe)

  return (
    <Container>
      <CardsContainer>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          pageRecipes?.map(recipe => {
            return (
              <Card
                key={recipe.source + recipe.id}
                image={recipe.image}
                title={recipe.title}
                readyInMinutes={recipe.readyInMinutes}
                score={recipe.score}
                healthScore={recipe.healthScore}
                source={recipe.source}
              />
            );
          })
        )}
      </CardsContainer>
      <Sidebar />
    </Container>
  );
}

export default Cards;
