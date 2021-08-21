import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/img/logo.png";


function NavBar() {
  return (
    <div className="Header">
      <header className="header">
        <img src={logo} alt="Logo F12 Store" className='logo'></img>
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
