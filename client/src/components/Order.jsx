import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

//? ACTIONS
import { orderBy } from "../store/actions";

//? STYLES
import { Container, Select } from "./styles/OrderSC";

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
    <Container>
      <h4>ORDER</h4>
      <Select defaultValue="default" onChange={e => handleOrderChange(e)}>
        <option value="default" disabled>
          by
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
        <option value="score">better Spoon Score</option>
        <option value="healthScore">better Health Score</option>
      </Select>
    </Container>
  );
}

export default Order;
