import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="container  navbar">
      <NavLink className="navbar__item" to="/">
        Посты
      </NavLink>
      <NavLink className="navbar__item" to="/about">
        About
      </NavLink>
    </div>
  );
};

export default Header;
