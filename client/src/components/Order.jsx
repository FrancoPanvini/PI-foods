import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

//? ACTIONS
import { orderBy } from "../store/actions";

function Order() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  //* Order store on Select change
  useEffect(() => dispatch(orderBy(order)), [order, dispatch]);

  //* function to set order by
  const handleOrderChange = e => {
    e.preventDefault();
    setOrder(e.target.value);
  };

  return (
    <label>
      order:
      <select defaultValue="default" onChange={e => handleOrderChange(e)}>
        <option value="default" disabled>
          by
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
        <option value="score">better Spoon Score</option>
        <option value="healthScore">better Health Score</option>
      </select>
    </label>
  );
}

export default Order;
