import React, { Component } from 'react';
import Footer from '../Footer';
import './home.scss';
import About from '../About';
import Education from '../Education';
import Contact from '../Contact';
import logo from '../../../public/images/mrm.jpg'

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
      <div className="header container" id="home">
      <div className="overlay" />
            <div className="content">
              <h1 className="title"><strong>DwincTech</strong></h1>
              <h2 className="subtitle">It is nice to meet you</h2>
              <div className="info-list">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#education">Education</a></li>
              </div>
            </div>
            <img src={logo} alt="mohammed-img" />
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