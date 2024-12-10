import React, { useState } from "react";
import logo from "../../assets/images/mrm.jpg";
import "./home.scss";
import { Link } from "react-router";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

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
    <div className="container">
      <div className="home">
        <div className="bio-logo">
          <img
            onLoad={onLoad}
            src="https://avatars.githubusercontent.com/u/26422326?v=4"
            alt="mohammed-img"
          />
        </div>
        <div className="content">
          <h2>Hello</h2>
          <div className="about">
            <h3>A Bit About Me</h3>
            <p>
              I enjoy coding, problems solving and interested in new
              technologies. Experienced Web Developer with a demonstrated
              history of working in the professional training & coaching
              industry.{" "}
              <span className="sub-bio">
                Skilled in Cascading Style Sheets (CSS3), HTML5, Node.js,
                JavaScript ES6, Express.js, Objection.js, Material-ui,
                Bootstrap, React.js Native, React.js, Redux, MongoDB and
                PostgreSQL...
              </span>
            </p>
          </div>
          <div className="links">
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
