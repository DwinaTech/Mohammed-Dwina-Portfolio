import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './portfolio.css';

class Portflio extends Component {

  state = {
    repos: [],
  }

  componentDidMount() {
    fetch('https://api.github.com/users/DwinaTech/repos')
      .then(response => response.json())
      .then(data => {
        this.setState({
          repos: data
        })
      });
  }

  render() {
    return (
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center portfolio-header">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Here are many of repository about different types of web applications.</h3>
            </div>
          </div>
          <div className="row">
            {
              this.state.repos.map((repo) => {
                if (repo.fork === false || repo.homepage != null) {
                  return (
                    <div key={repo.id} className="col-md-4 col-sm-6 portfolio-item" >
                      <Link className="portfolio-link" data-toggle="modal" to={`${repo.homepage}`} target="blanket">
                        <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                            <i className="fa fa-plus fa-3x" />
                          </div>
                        </div>
                        <img className="img-fluid" src="images/main-wall.jpg" alt="" />
                      </Link>
                      <div className="portfolio-caption">
                        <h4>{repo.name}</h4>
                        <p className="text-muted">{repo.description}</p>
                      </div>
                    </div>
                  )
                }
                return false;
              })
            }
          </div>
        </div>
      </section>
    )
  }
}

export default Portflio;