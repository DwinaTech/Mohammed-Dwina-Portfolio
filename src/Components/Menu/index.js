import React from 'react';
import { Link } from "react-router-dom";
import './menu.css'

const Menu = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">Dwina Tech</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Menu;