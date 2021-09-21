import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import { useDispatch } from "react-redux";

//? COMPONENTS
import ConfirmPopUp from "./ConfirmPopUp";

//? SERVICES
import axiosRecipeInfo from "../services/getRecipeInfo";
import axiosDeleteRecipe from "../services/deleteRecipe";

//? ACTIONS
import { deleteRecipe } from "../store/actions";

//? STYLES
import { Container, Title, Image, Time, Servings, Score } from "./styles/RecipeInfoSC";
import { HealthScore, Diets, Summary, Ingredients, Procedure } from "./styles/RecipeInfoSC";
import { BiTimeFive, BiCheck } from "react-icons/bi";
import { BsStar, BsFillPeopleFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Loader } from "./styles/RecipeInfoSC";

function RecipeInfo() {
  const { source, id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(true);
  const [popUp, setPopUp] = useState(false);

  //* Axios data on mount
  useEffect(() => {
    axiosRecipeInfo(source, id)
      .then(res => {
        setRecipe(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id, source]);

  //* Function to handle delete button click
  function handleDeleteClick() {
    setPopUp(() => true);
  }

  //* Function to delete after PopUp
  function aceptPopUp() {
    axiosDeleteRecipe(recipe.id)
      .then(() => {
        history.push(`/home`);
      })
      .catch(error => console.error(error));
    dispatch(deleteRecipe(recipe.id));
    setPopUp(false);
  }

  //* Function to cancel PopUp
  function cancelPopUp() {
    setPopUp(false);
  }

  return (
    <>
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
            <Image>
              <img src={recipe.image} alt="not available" />
              {source === "db" && (
                <div>
                  <Link to={`/home/add/${recipe.id}`}>
                    <button>
                      <FaEdit />
                    </button>
                  </Link>
                  <button onClick={handleDeleteClick}>
                    <AiFillDelete />
                  </button>
                </div>
              )}
            </Image>
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
      {popUp && <ConfirmPopUp name="recipe" aceptPopUp={aceptPopUp} cancelPopUp={cancelPopUp} />}
    </>
  );
}

export default RecipeInfo;
