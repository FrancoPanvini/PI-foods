//? SERVICES
import axiosRecipes from "../services/getRecipes";

//? NAME CONSTANTS
export const GETRECIPES = "GETRECIPES";
export const LOADING = "LOADING";
export const PAGINATIONINDEXES = "PAGINATIONINDEXES";
export const ORDER = "ORDER";

export const getRecipes = () => {
  return function (dispatch) {
    dispatch({ type: LOADING });
    axiosRecipes()
      .then(recipes => dispatch({ type: GETRECIPES, payload: recipes.data }))
      .catch(err => console.log(err));
  };
};

export const setPaginationIndexes = (indexLastRecipe, indexFirstRecipe) => {
  return { type: PAGINATIONINDEXES, payload: { indexLastRecipe, indexFirstRecipe } };
};

export const orderBy = order => {
  return { type: ORDER, payload: order };
};
