import React from "react";
import { Link } from "react-router";
import "./style.scss";

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="brand">
        <h1>
          <Link to="/">Mohammed Dwina</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
