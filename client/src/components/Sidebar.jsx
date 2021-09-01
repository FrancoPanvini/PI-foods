import React from "react";

import { Bar } from "./styles/SideBarSC";

function Sidebar() {
  return (
    <Bar>
      <label for="searchBar" style={{ color: "white" }}>
        search:{" "}
      </label>
      <input type="search" id="searchBar" />
    </Bar>
  );
}

export default Sidebar;
