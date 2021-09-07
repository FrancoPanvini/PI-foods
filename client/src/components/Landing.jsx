import React from "react";
import { Link } from "react-router-dom";

import { Chef, Burbuja } from "./styles/LandingSC";
import chef from "../images/chef2.png";
import burbuja from "../images/burbuja.png";

function Landing() {
  return (
    <div>
      <Chef src={chef} alt="not available" />
      <Burbuja>
        <img src={burbuja} alt="not available" />
        <div>
          <h1>Benvenuti!!!</h1>
          <h4>questo è il PI di @FP</h4>
          <Link to="/home">
            <p>ENTRE</p>
          </Link>
        </div>
      </Burbuja>
    </div>
  );
}

export default Landing;
