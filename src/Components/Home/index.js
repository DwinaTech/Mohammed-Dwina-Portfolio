import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../Footer';
import Spinner from '../Spinner';
import './home.css';
import About from '../About';
import Work from '../Work';
import Contact from '../Contact';

class Home extends Component {

  state = {
    isLoading: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 5000)
  }

  showScrollButton = () => {
    if (window.location.hash !== '#home') {
      return <li className="move-top" onClick={this.scrolToSection}><Link to="/#home">Top</Link></li>
    }
    return null;
  }

  scrolToSection = (e) => {
    e.preventDefault()
    window.location.pathname = window.location.pathname
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Spinner /> :
      (
        <div className="home" id="home">
          <div className="header">
            <div className="content">
              <h1>You are welcome at <strong className="main-color">DwincTech</strong></h1>
              <h2>It is nice to meet you</h2>
              <div className="info-list">
                <li onClick={this.scrolToSection}><Link to="#about">About</Link></li>
                <li onClick={this.scrolToSection}><Link to="#work">Work</Link></li>
                <li onClick={this.scrolToSection}><Link to="#contact">Contact</Link></li>
              </div>
              <img src="images/mrm.jpg" alt="mohammed-img" />
              <div className="overlay" />
            </div>
          </div>
          <About />
          <Work />
          <Contact />
          <Footer />
          {this.showScrollButton()}
        </div>
      );
  }
}

export default Home;