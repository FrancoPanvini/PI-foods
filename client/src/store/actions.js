//? SERVICES
import axiosRecipes from "../services/getRecipes";
import axiosDiets from "../services/getDiets";

//? NAME CONSTANTS
export const GETRECIPES = "GETRECIPES";
export const GETDIETS = "GETDIETS";
export const LOADING = "LOADING";
export const NORESULTS = "NORESULTS";
export const PAGINATIONINDEXES = "PAGINATIONINDEXES";
export const ORDER = "ORDER";
export const FILTERBYDIET = "FILTERBYDIET";

export const getRecipes = name => {
  return function (dispatch) {
    dispatch({ type: LOADING });
    axiosRecipes(name)
      .then(respond => {
        dispatch({ type: GETRECIPES, payload: respond.data });
      })
      .catch(error => {
        if (error.response.data === "NO matches found") {
          dispatch({ type: NORESULTS });
        }
        console.log(error.response.data);
      });
  };
};

export const getDiets = () => {
  return function (dispatch) {
    axiosDiets()
      .then(diets => dispatch({ type: GETDIETS, payload: diets.data }))
      .catch(err => console.log(err));
  };
};

export const setPaginationIndexes = (indexLastRecipe, indexFirstRecipe) => {
  return { type: PAGINATIONINDEXES, payload: { indexLastRecipe, indexFirstRecipe } };
};

export const orderBy = order => {
  return { type: ORDER, payload: order };
};

export const filterByDiet = diets => {
  return { type: FILTERBYDIET, payload: diets };
};
