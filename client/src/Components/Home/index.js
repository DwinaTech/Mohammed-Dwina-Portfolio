import React, { Component } from "react";
import Footer from "../Footer";
import "./home.scss";
import About from "../About";
import Education from "../Education";
import Contact from "../Contact";
import Spinner from "../Spinner";

const logo = `${process.env.PUBLIC_URL}/images/mrm.jpg`;

class Home extends Component {
  state = {
    loaded: true,
  };

  showScrollButton = () => {
    if (window.location.hash !== "" && window.location.hash !== "#home") {
      return (
        <li className="move-top">
          <a href="#home">Top</a>
        </li>
      );
    }
    return null;
  };

  onLoad = () => {
    this.setState({ loaded: false });
  };

  render() {
    const { loaded } = this.state;

    return (
      <div className="home">
        {loaded && <Spinner />}
        <div className="header container" id="home">
          <div className="content">
            <img onLoad={this.onLoad} src={logo} alt="mohammed-img" />
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
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <About />
        <Education />
        <Contact />
        <Footer />
        {this.showScrollButton()}
      </div>
    );
  }
}

export default Home;
