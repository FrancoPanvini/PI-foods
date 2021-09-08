import React from "react";
import { Link, NavLink } from "react-router-dom";

import navbarImage from "../images/navbar.png";
import icon from "../images/chef2.png";

import { Nav, NavbarImage, Title, Icon, Bar } from "./styles/NavbarSC";

function Navbar() {
  return (
    <Nav>
      <NavbarImage src={navbarImage} alt="not available" />
      <Title>
        <Link to="/">
          <Icon src={icon} alt="not available" />
        </Link>
        <h1>Trattoria Italiana</h1>
      </Title>
      <Bar>
        <NavLink exact to="/home">
          <h4>Las Recetas</h4>
        </NavLink>
        <NavLink exact to="/home/add">
          <h4>Add Receta</h4>
        </NavLink>
        <NavLink exact to="/shopping">
          <h4>About me</h4>
        </NavLink>
        <NavLink exact to="/shopping">
          <h4>Help</h4>
        </NavLink>
      </Bar>
    </Nav>
  );
}

export default Navbar;
