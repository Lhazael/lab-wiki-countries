import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
      <Link to="/">
        WikiCountries
      </Link>
      </div>
    </nav>
  );
};

export default NavBar;

