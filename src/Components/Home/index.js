import React, { Component } from 'react';
import Footer from '../Footer';
import './home.css';
import About from '../About';
import Education from '../Education';
import Contact from '../Contact';

class Home extends Component {

  showScrollButton = () => {
    if (window.location.hash !== '' && window.location.hash !== '#home') {
      return <li className="move-top"><a href="#home">Top</a></li>
    }
    return null;
  }

  render() {
    return (
      <div className="home">
        <div className="header" id="home">
          <div className="content">
            <h1><strong className="main-color logo">DwincTech</strong></h1>
            <h2>It is nice to meet you</h2>
            <div className="info-list">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#education">Education</a></li>
            </div>
            <img src="images/mrm.jpg" alt="mohammed-img" />
            <div className="overlay" />
          </div>
        </div>
        <About />
        <Education />
        <Contact />
        <Footer />
        {this.showScrollButton()}
      </div>
    )
  }
}

export default Home;