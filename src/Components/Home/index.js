import React from 'react';
import { Link } from "react-router-dom";
import Services from '../Services';
import Portfolio from '../Portfolio';
import './home.css';

const greeting = "It's Nice To Meet You";

const Home = () => (
  <div className="home">
    <header className="masthead">
      <img src="images/main-wall.jpg" alt="main-wall" />
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Welcome To DwinaTech!</div>
          <div className="intro-heading text-uppercase">{greeting}</div>
          <Link className="btn main-button btn-xl text-uppercase js-scroll-trigger" to="/about">Know Me More</Link>
        </div>
      </div>
    </header>
    <Services />
    <Portfolio />
  </div>
)

export default Home;