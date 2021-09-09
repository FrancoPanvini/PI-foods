import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//? ACTIONS
import { getRecipes } from "../store/actions";

//? COMPONENTS
import Card from "./Card";
import Sidebar from "./Sidebar";

//? STYLES
import { Container, CardsContainer, Loader } from "./styles/CardsSC";

function Cards() {
  const dispatch = useDispatch();

  const { allrecipes } = useSelector(state => state);

  //* Preload recipes if allrecipes is empty
  useEffect(() => {
    if (allrecipes.length === 0) {
      dispatch(getRecipes("", dispatch));
    }
  }, [dispatch, allrecipes]);

  const { recipes, loading, indexFirstRecipe, indexLastRecipe } = useSelector(state => state);

  const pageRecipes = recipes.slice(indexFirstRecipe, indexLastRecipe);

  return (
    <Container>
      <CardsContainer>
        {loading ? (
          <Loader>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Loader>
        ) : (
          pageRecipes?.map(recipe => {
            return (
              <Card
                key={recipe.source + recipe.id}
                id={recipe.id}
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
