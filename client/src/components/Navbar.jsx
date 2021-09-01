import React from "react";
import { Link, NavLink } from "react-router-dom";

import icon from "../images/chef2.png";

import { Nav, Title, Image, Bar } from "./styles/NavbarSC";

function Navbar() {
  return (
    <Nav>
      <Title>
        <Link to="/">
          <Image src={icon} alt="not available" />
        </Link>
        <h1>Trattoria Italiana</h1>
      </Title>
      <Bar>
        <NavLink exact to="/home">
          <h4>Las Recetas</h4>
        </NavLink>
        <NavLink exact to="/shopping">
          <h4>Mis Recetas</h4>
        </NavLink>
        <NavLink exact to="/add">
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
