import React, { useState } from "react";
import Footer from "../Footer";
import "./home.scss";
import About from "../About";
import Education from "../Education";
import Contact from "../Contact";
import Spinner from "../Spinner";
import Experience from "../Experience";

const logo = `${process.env.PUBLIC_URL}/images/mrm.jpg`;

const Home = () => {
  const [loaded, setLoaded] = useState(true);

  const showScrollButton = () => {
    if (window.location.hash !== "" && window.location.hash !== "#home") {
      return (
        <li className="move-top">
          <a href="#home">Top</a>
        </li>
      );
    }
    return null;
  };

  const onLoad = () => {
    setLoaded(false);
  };

  return (
    <div className="home">
      {loaded && <Spinner />}
      <div className="header container" id="home">
        <div className="content">
          <img onLoad={onLoad} src={logo} alt="mohammed-img" />
          <div className="content-text">
            <h1 className="title">
              <strong>DwincTech</strong>
            </h1>
            <h2 className="subtitle">It is nice to meet you</h2>
            <div className="info-list">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      {showScrollButton()}
    </div>
  );
};

export default Home;
