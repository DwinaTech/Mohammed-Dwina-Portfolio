import React, { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <header className="main-header">
      <div className="brand">
        <h1>
          <Link to="/">Mohammed Dwina</Link>
        </h1>
      </div>
      <div>
        <div className="toggle-button">
          {open ? (
            <FontAwesomeIcon icon={faXmark} onClick={toggle} />
          ) : (
            <FontAwesomeIcon icon={faBars} onClick={toggle} />
          )}
        </div>
        <ul className={`nav-menu ${open ? "open-menu" : ""}`}>
          <li onClick={toggle}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={toggle}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={toggle}>
            <Link to="/education">Education</Link>
          </li>
          <li onClick={toggle}>
            <Link to="/experience">Experience</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
