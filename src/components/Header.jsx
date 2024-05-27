import React, { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import bigLogo from "../assets/img/bigLogo.svg";
import "../styles/header.css";

const Header = () => {

  return (
    <div>
      <header>
        <h1>
          <img className="logo" src={bigLogo} alt="logo" />
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" >Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
