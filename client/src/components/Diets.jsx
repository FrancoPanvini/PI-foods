import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

//? SERVICES
import axiosDiets from "../services/getDiets";

//? ACTIONS
import { filterByDiet } from "../store/actions";

function Diets() {
  const dispatch = useDispatch();

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

  //* Filter when updaditing state diets
  useEffect(() => {
    let dietsArray = [];
    for (let diet in diets) {
      if (diets[diet]) dietsArray.push(diet);
    }
    dispatch(filterByDiet(dietsArray));
  }, [diets, dispatch]);

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
