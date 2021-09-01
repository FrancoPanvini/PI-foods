import React from "react";
import { Route } from "react-router-dom";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

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
    </React.Fragment>
  );
}

export default App;
