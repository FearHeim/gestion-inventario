import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="Header">
      <header className="header">
        <img src="" alt="Logo F12 Store"></img>
        <div>
          <NavLink
            exact //saber donde estas exactamente
            to="/" //aqui la ruta
            className="nav-links"
            activeClassName="NavLink-Active"
          >
            Inicio
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
