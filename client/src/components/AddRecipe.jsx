import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//? ACTIONS
import { getDiets } from "../store/actions";

//? SERVICES
import axiosIngredients from "../services/getIngredients";
import postRecipe from "../services/postRecipe";

//? STYLES
import { Container } from "./styles/AddRecipeSC";

function AddRecipe() {
  const dispatch = useDispatch();
  const diets = useSelector(state => state.diets);
  const [ingredients, setIngredients] = useState([]);

  const [input, setInput] = useState({
    title: "",
    readyInMinutes: "-",
    servings: "-",
    image: "",
    healthScore: "-",
    score: "-",
    summary: "",
    ingredients: [{ id: "", amount: 0, unit: "" }],
    steps: [{ number: 1, content: "" }],
    diets: [],
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
      .catch(err => console.error(err));
  }, []);

  //* Function to add more steps
  function handleClickAddStep(e) {
    e.preventDefault();
    const newStep = { number: input.steps[input.steps.length - 1].number + 1, content: "" };
    setInput({ ...input, steps: [...input.steps, newStep] });
  }

  //* Function to rest last step
  function handleClickRestStep(e) {
    e.preventDefault();
    const newSteps = input.steps;
    if (newSteps.length > 1) newSteps.pop();
    setInput({ ...input, steps: newSteps });
  }

  //* Function to add more ingredients
  function handleClickAddIngredient(e) {
    e.preventDefault();
    setInput({ ...input, ingredients: [...input.ingredients, { id: "", amount: 0, unit: "" }] });
  }

  //* Function to rest last step
  function handleClickRestIngredient(e) {
    e.preventDefault();
    const newIngredients = input.ingredients;
    if (newIngredients.length > 1) newIngredients.pop();
    setInput({ ...input, ingredients: newIngredients });
  }

  //* Function to set input on description change
  function handleOnChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  //* Function to set input on diets change
  function handleDietsOnChange(e) {
    let dietsArray = input.diets;
    dietsArray = e.target.checked
      ? [...dietsArray, e.target.name]
      : dietsArray.filter(diet => diet !== e.target.name);
    setInput({ ...input, diets: dietsArray });
  }

  //* Function to set input on ingredients change
  function handleIngredientsOnChange(e) {
    let ingredientsArray = input.ingredients;
    ingredientsArray[e.target.id][e.target.name] = e.target.value;
    setInput({ ...input, ingredients: ingredientsArray });
  }

  //* Function to set input on steps change
  function handleStepsOnChange(e) {
    let stepsArray = input.steps;
    stepsArray[e.target.id - 1].content = e.target.value;
    setInput({ ...input, steps: stepsArray });
  }

  //* Function to submit
  function handleSubmit(e) {
    e.preventDefault();
    postRecipe(input)
      .then(() => console.log("succesfully added"))
      .catch(error => console.error(error));
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Guarda tu receta!!!</h1>
          <button type="submit">Cargar</button>
        </div>
        <br />
        <br />
        <div>
          <label>
            Titulo:
            <input type="text" name="title" onChange={handleOnChange} />
          </label>
          <label>
            Image url:
            <input type="text" name="image" onChange={handleOnChange} />
          </label>
        </div>
        <div>
          <label>
            Ready in:
            <input type="number" name="readyInMinutes" onChange={handleOnChange} />
          </label>
          <label>
            Servings:
            <input type="number" name="servings" onChange={handleOnChange} />
          </label>
          <label>
            Score:
            <input type="number" name="score" onChange={handleOnChange} />
          </label>
          <label>
            Health score:
            <input type="number" name="healthScore" onChange={handleOnChange} />
          </label>
        </div>
        <div>
          <label>
            Summary:
            <textarea name="summary" onChange={handleOnChange} />
          </label>
        </div>
        <br />
        <br />
        <div>
          <label>Diets:</label>
          {diets.map(diet => (
            <label key={diet.id}>
              {diet.name}
              <input type="checkbox" name={diet.id} onChange={handleDietsOnChange} />
            </label>
          ))}
        </div>
        <br />
        <br />
        <div>
          <label>Ingredients:</label>
          <button onClick={handleClickAddIngredient}>+</button>
          <button onClick={handleClickRestIngredient}>-</button>
          {input.ingredients.map((_ingredient, index) => (
            <div key={index}>
              <select id={index} name="id" onChange={handleIngredientsOnChange}>
                {ingredients.map(ingredient => {
                  return (
                    <option key={ingredient.id} value={ingredient.id}>
                      {ingredient.name}
                    </option>
                  );
                })}
              </select>
              <input type="number" id={index} name="amount" onChange={handleIngredientsOnChange} />
              <input type="text" id={index} name="unit" onChange={handleIngredientsOnChange} />
            </div>
          ))}
        </div>
        <br />
        <br />
        <div>
          <label>Procedure:</label>
          <button onClick={handleClickAddStep}>+</button>
          <button onClick={handleClickRestStep}>-</button>
          <ol>
            {input.steps.map(step => (
              <li key={step.number}>
                <input type="text" id={step.number} name="content" onChange={handleStepsOnChange} />
              </li>
            ))}
          </ol>
        </div>
      </form>
    </Container>
  );
}

export default AddRecipe;

/*
{   
  "title":"Pizza de ananá",
  "readyInMinutes":45,
  "servings":2,
  "image":"url/foto",
  "healthScore":95,
  "score":70,
  "summary":"es una pizza con ananá",
  "ingredients":
      [
          { "id": 1, "amount": 500, "unit": "gr"},
          { "id": 2, "amount": 200, "unit": "gr" }
      ],
  "steps":
      [
          { "number": 1, "content": "hacer la masa con la harina y agua" },
          { "number": 2, "content": "agregar el ananá" },
          { "number": 3, "content": "hornear por 20min" }
      ],
  "diets": [2,3]
}*/
