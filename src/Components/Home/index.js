import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Services from '../Services';
import Portfolio from '../Portfolio';
import Footer from '../Footer';
import Spinner from '../Spinner';
import './home.css';

const greeting = "It's Nice To Meet You";

class Home extends Component {

  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 5000)
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Spinner /> :
      (
        <div className="home">
          <header className="masthead">
            <img src="images/main-wall.jpg" alt="main-wall" />
            <div className="container home-container">
              <div className="intro-text">
                <div className="intro-lead-in">Welcome To DwinaTech!</div>
                <div className="intro-heading text-uppercase">{greeting}</div>
                <Link className="btn main-button btn-xl text-uppercase js-scroll-trigger" to="/about">Know Me More</Link>
              </div>
            </div>
          </header>
          <Services />
          <Portfolio />
          <Footer />
        </div>
      );
  }
}

export default Home;