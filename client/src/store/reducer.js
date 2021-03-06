import { LOADING, NORESULTS, GETRECIPES, PAGINATIONINDEXES, ORDER, FILTERBYDIET, GETDIETS, DELETERECIPE } from "./actions";

const initialState = {
  recipes: [],
  allrecipes: [],
  diets: [],
  loading: false,
  noresults: false,
  indexFirstRecipe: 0,
  indexLastRecipe: 9,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case NORESULTS: {
      return { ...state, noresults: true, loading: false };
    }
    case GETRECIPES: {
      return { ...state, recipes: action.payload, allrecipes: action.payload, loading: false, noresults: false };
    }
    case DELETERECIPE: {
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.payload),
        allrecipes: state.allrecipes.filter(recipe => recipe.id !== action.payload),
      };
    }
    case GETDIETS: {
      return { ...state, diets: action.payload };
    }
    case PAGINATIONINDEXES: {
      return {
        ...state,
        indexFirstRecipe: action.payload.indexFirstRecipe,
        indexLastRecipe: action.payload.indexLastRecipe,
      };
    }
    case ORDER: {
      switch (action.payload) {
        case "asc": {
          return {
            ...state,
            recipes: state.recipes.sort((a, b) => {
              if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
              if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
              return 0;
            }),
          };
        }
        case "desc": {
          return {
            ...state,
            recipes: state.recipes.sort((a, b) => {
              if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
              if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
              return 0;
            }),
          };
        }
        case "score": {
          return {
            ...state,
            recipes: state.recipes.sort((a, b) => {
              if (a.score < b.score) return 1;
              if (a.score > b.score) return -1;
              return 0;
            }),
          };
        }
        case "healthScore": {
          return {
            ...state,
            recipes: state.recipes.sort((a, b) => {
              if (a.healthScore < b.healthScore) return 1;
              if (a.healthScore > b.healthScore) return -1;
              return 0;
            }),
          };
        }
        default: {
          return { ...state };
        }
      }
    }
    case FILTERBYDIET: {
      let recipes = state.allrecipes;
      for (let diet of action.payload) {
        recipes = recipes?.filter(recipe => recipe.diets?.includes(diet));
      }
      return { ...state, recipes: recipes };
    }
    default: {
      return { ...state };
    }
  }
}

export default reducer;
