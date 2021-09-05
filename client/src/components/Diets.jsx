import React from "react";
import { useState, useEffect } from "react";

//? SERVICES
import axiosDiets from "../services/getDiets";

function Diets() {
  const [diets, setDiets] = useState({});

  //* Preload object diets w/falses
  useEffect(() => {
    axiosDiets()
      .then(res => {
        let objDiets = {};
        res.data.forEach(diet => (objDiets[diet] = false));
        setDiets(objDiets);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //* function to set diets to true/false
  const handleChange = e => {
    let newState = { ...diets };
    newState[e.target.id] = e.target.checked;
    setDiets(newState);
  };

  return (
    <div>
      <h2>filter by diets</h2>
      {diets &&
        Object.keys(diets)?.map(diet => {
          return (
            <React.Fragment key={diet}>
              <label>
                <input
                  type="checkbox"
                  id={diet}
                  checked={diets[diet]}
                  onChange={e => handleChange(e)}
                />
                {diet}
              </label>
              <br />
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default Diets;
