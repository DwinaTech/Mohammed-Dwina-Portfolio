import React, { Component } from 'react';
import './service.css';

class Services extends Component {
  state = {
    services: []
  }
  componentDidMount() {
    const api = process.env.REACT_APP_API || process.env.REACT_APP_HOST;
    fetch(`${api}/service`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          services: data
        })
      });
  }
  render() {
    return (
      <section className="services" id="services" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">I provide different type of services.</h3>
            </div>
          </div>
          <div className="row text-center">
            {this.state.services.map(service =>
              (
                <div key={service._id} className="col-md-4 item">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary" />
                    <i className={`fa fa-${service.serviceImage} fa-stack-1x fa-inverse`} />
                  </span>
                  <h4 className="service-heading">{service.title}</h4>
                  <p className="text-muted">{service.content}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Services;