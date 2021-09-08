import React from "react";

//? COMPONENTS
import Pagination from "./Pagination";
import Searchbar from "./Searchbar";
import Order from "./Order";
import Diets from "./Diets";

//? STYLES
import { Bar } from "./styles/SideBarSC";

function Sidebar() {
  return (
    <Bar>
      <Pagination />
      <Searchbar />
      <Order />
      <Diets />
    </Bar>
  );
}

export default Sidebar;
