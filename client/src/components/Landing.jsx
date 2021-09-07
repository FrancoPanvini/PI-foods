import React from "react";
import { Link } from "react-router-dom";

import { Chef, Burbuja } from "./styles/LandingSC";
import chef from "../images/chef2.png";

function Landing() {
  return (
    <div>
      <Chef src={chef} alt="not available" />
      <Burbuja>
        <Link to="/home">
          <h2>ver todas las recetas</h2>
        </Link>
        <Link to="/home/add">
          <h2>agregar receta</h2>
        </Link>
      </Burbuja>
    </div>
  );
}

export default Landing;
