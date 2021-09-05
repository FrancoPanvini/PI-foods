import React from "react";

//? COMPONENTS
import Pagination from "./Pagination";
import Order from "./Order";
import Diets from "./Diets";

//? STYLES
import { Bar } from "./styles/SideBarSC";

function Sidebar() {
  return (
    <Bar>
      <Pagination />
      <label>
        search: <input type="search" />
      </label>
      <br />
      <br />
      <Order />
      <br />
      <br />
      <Diets />
    </Bar>
  );
}

export default Sidebar;
