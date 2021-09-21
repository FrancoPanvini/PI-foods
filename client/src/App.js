import React from "react";
import { Route } from "react-router-dom";

//? COMPONENTS
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import RecipeInfo from "./components/RecipeInfo";
import AddRecipe from "./components/AddRecipe";
import UpdateRecipe from "./components/UpdateRecipe";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Navbar />
      </Route>
      <Route exact path="/home">
        <Cards />
      </Route>
      <Route path="/home/recipe/:source/:id">
        <RecipeInfo />
      </Route>
      <Route exact path="/home/add">
        <AddRecipe />
      </Route>
      <Route path="/home/add/:id">
        <UpdateRecipe />
      </Route>
    </React.Fragment>
  );
}

export default App;
