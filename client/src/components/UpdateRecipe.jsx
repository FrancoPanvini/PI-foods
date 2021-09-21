import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//? COMPONENTS
import ConfirmPopUp from "./ConfirmPopUp";

//? ACTIONS
import { getDiets, getRecipes } from "../store/actions";

//? SERVICES
import axiosRecipeInfo from "../services/getRecipeInfo";
import axiosIngredients from "../services/getIngredients";
import putRecipe from "../services/putRecipe";
import validateForm from "../services/validateForm";

//? STYLES
import { Container, Button, Title, Image, Time, Servings, Score } from "./styles/AddRecipeSC";
import { HealthScore, Diets, Summary, Ingredients, Procedure } from "./styles/AddRecipeSC";
import { BiTimeFive } from "react-icons/bi";
import { BsStar, BsFillPeopleFill } from "react-icons/bs";
import { GiHealthNormal, GiCheckMark } from "react-icons/gi";

function UpdateRecipe() {
  const dispatch = useDispatch();
  const diets = useSelector(state => state.diets);
  const [ingredients, setIngredients] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const [input, setInput] = useState({
    id: 0,
    title: "",
    readyInMinutes: "-",
    servings: "-",
    image: "",
    healthScore: "-",
    score: "-",
    summary: "",
    Ingredients: [{ id: "", amount: "", unit: "" }],
    Steps: [{ number: 1, content: "" }],
    Diets: [],
  });

  //* Preload diets in store if empty
  useEffect(() => {
    if (diets.length === 0) {
      dispatch(getDiets(dispatch));
    }
  }, [dispatch, diets.length]);

  //* Preload ingredients in state
  useEffect(() => {
    axiosIngredients()
      .then(res => setIngredients(res.data))
      .catch(err => console.log(err));
  }, []);

  //* Axios data on mount
  useEffect(() => {
    axiosRecipeInfo("db", id)
      .then(res => {
        res.data.Diets = res.data.Diets.map(diet => {
          for (let i = 0; i < diets.length; i++) {
            if (diets[i].name === diet) {
              return diets[i].id.toString();
            }
          }
          return 0;
        });
        res.data.Ingredients = res.data.Ingredients.map(ingredient => {
          for (let i = 0; i < ingredients.length; i++) {
            if (ingredients[i].name === ingredient.name) {
              return { id: ingredients[i].id.toString(), amount: ingredient.amount, unit: ingredient.unit };
            }
          }
          return 0;
        });
        setInput(res.data);
      })
      .catch(err => console.error(err));
  }, [id, diets, ingredients]);

  const [errors, setErrors] = useState({});
  const [updated, setUpdated] = useState(false);
  const [popUp, setPopUp] = useState(false);

  //* Function to add more steps
  function handleClickAddStep(e) {
    e.preventDefault();
    const newStep = { number: input.Steps[input.Steps.length - 1].number + 1, content: "" };
    setInput({ ...input, Steps: [...input.Steps, newStep] });
  }

  //* Function to rest last step
  function handleClickRestStep(e) {
    e.preventDefault();
    const newSteps = input.Steps;
    if (newSteps.length > 1) newSteps.pop();
    setInput({ ...input, Steps: newSteps });
  }

  //* Function to add more ingredients
  function handleClickAddIngredient(e) {
    e.preventDefault();
    setInput({ ...input, Ingredients: [...input.Ingredients, { id: "", amount: 0, unit: "" }] });
  }

  //* Function to rest last ingredient
  function handleClickRestIngredient(e) {
    e.preventDefault();
    const newIngredients = input.Ingredients;
    if (newIngredients.length > 1) newIngredients.pop();
    setInput({ ...input, Ingredients: newIngredients });
  }

  //* Function to set input on description change
  function handleOnChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  //* Function to set input on diets change
  function handleDietsOnChange(e) {
    let dietsArray = input.Diets;
    dietsArray = e.target.checked ? [...dietsArray, e.target.name] : dietsArray.filter(diet => diet !== e.target.name);
    setInput({ ...input, Diets: dietsArray });
  }

  //* Function to find ingredient name from id
  function findIngredientName(id) {
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].id === parseInt(id)) {
        return ingredients[i].name;
      }
    }
  }

  //* Function to set input on ingredients change
  function handleIngredientsOnChange(e) {
    let ingredientsArray = input.Ingredients;
    ingredientsArray[e.target.id][e.target.name] = e.target.value;
    setInput({ ...input, Ingredients: ingredientsArray });
  }

  //* Function to set input on steps change
  function handleStepsOnChange(e) {
    let stepsArray = input.Steps;
    stepsArray[e.target.id - 1].content = e.target.value;
    setInput({ ...input, Steps: stepsArray });
  }

  //* Function to submit changes
  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm(input);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setPopUp(true);
    }
  }

  //* Function to delete after PopUp
  function aceptPopUp() {
    putRecipe(input)
      .then(response => {
        setUpdated(true);
        dispatch(getRecipes("", dispatch));
        setTimeout(() => {
          history.push(`/home/recipe/db/${response.data.id}`);
        }, 2000);
      })
      .catch(error => console.error(error));
    setPopUp(false);
  }

  //* Function to cancel PopUp
  function cancelPopUp() {
    setPopUp(false);
  }

  //* Function to return to Info
  function goBack() {
    setPopUp(false);
    history.push(`/home/recipe/db/${id}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <Title>
            <label for="title">{"Title"}</label>
            {errors.title && <span className="error"> {errors.title}</span>}
            <input type="text" name="title" id="title" value={input.title} onChange={handleOnChange} autoComplete="off" autoFocus />
          </Title>
          <Image>
            <label for="image">Image URL</label>
            <textarea name="image" id="image" value={input.image} onChange={handleOnChange} autoComplete="off" />
          </Image>

          <Time>
            <BiTimeFive />
            {errors.readyInMinutes && <p className="error"> {errors.readyInMinutes}</p>}
            <input type="number" name="readyInMinutes" value={input.readyInMinutes} onChange={handleOnChange} autoComplete="off" />
          </Time>
          <Servings>
            <BsFillPeopleFill />
            {errors.servings && <p className="error"> {errors.servings}</p>}
            <input type="number" name="servings" value={input.servings} onChange={handleOnChange} autoComplete="off" />
          </Servings>
          <Score>
            <BsStar />
            {errors.score && <p className="error"> {errors.score}</p>}
            <input type="number" name="score" value={input.score} onChange={handleOnChange} autoComplete="off" />
          </Score>
          <HealthScore>
            <GiHealthNormal />
            {errors.healthScore && <p className="error"> {errors.healthScore}</p>}
            <input type="number" name="healthScore" value={input.healthScore} onChange={handleOnChange} autoComplete="off" />
          </HealthScore>

          <Diets>
            <label>{"Diets"}</label>
            <div>
              {diets.map(diet => (
                <label key={diet.id}>
                  <input
                    type="checkbox"
                    name={diet.id}
                    checked={input.Diets?.includes(diet.id.toString())}
                    onChange={handleDietsOnChange}
                  />
                  {diet.name}
                </label>
              ))}
            </div>
          </Diets>

          <Summary>
            <label for="summary">Summary</label>
            {errors.summary && <span className="error"> {errors.summary}</span>}
            <textarea name="summary" id="summary" value={input.summary} onChange={handleOnChange} autoComplete="off" />
          </Summary>

          <Ingredients>
            <div>
              <label>Ingredients</label>
              <button onClick={handleClickAddIngredient}>+</button>
              <button onClick={handleClickRestIngredient}>-</button>
            </div>
            {input.Ingredients?.map((ingredient, index) => (
              <div key={index}>
                <select id={index} defaultValue="default" name="id" onChange={handleIngredientsOnChange}>
                  <option value="default" disabled>
                    {findIngredientName(ingredient.id)}
                  </option>
                  {ingredients.map(ingredient => {
                    return (
                      <option key={ingredient.id} value={ingredient.id}>
                        {ingredient.name}
                      </option>
                    );
                  })}
                </select>
                <input
                  type="number"
                  id={index}
                  name="amount"
                  defaultValue={ingredient.amount}
                  onChange={handleIngredientsOnChange}
                  autoComplete="off"
                />
                <input
                  type="text"
                  id={index}
                  name="unit"
                  defaultValue={ingredient.unit}
                  onChange={handleIngredientsOnChange}
                  autoComplete="off"
                />
              </div>
            ))}
          </Ingredients>

          <Procedure>
            <label>Procedure</label>
            <button onClick={handleClickAddStep}>+</button>
            <button onClick={handleClickRestStep}>-</button>
            <ol>
              {input.Steps?.map(step => (
                <li key={step.number}>
                  <input
                    type="text"
                    id={step.number}
                    name="content"
                    defaultValue={step.content}
                    onChange={handleStepsOnChange}
                    autoComplete="off"
                  />
                </li>
              ))}
            </ol>
          </Procedure>

          <Button type="submit" className={updated ? "uploaded" : false} disabled={updated}>
            {updated ? <GiCheckMark /> : <span>SAVE</span>}
          </Button>
        </Container>
      </form>
      {popUp && (
        <ConfirmPopUp
          text="Are you sure you want to save changes??"
          aceptText="Save"
          cancelText="Cancel"
          aceptPopUp={aceptPopUp}
          cancelPopUp={cancelPopUp}
          thirdOptionText="Exit without saving"
          thirdOption={goBack}
        />
      )}
    </>
  );
}

export default UpdateRecipe;
