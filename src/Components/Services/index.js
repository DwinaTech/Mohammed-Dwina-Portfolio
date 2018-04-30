import React from 'react';
import './service.css';

const Services = () => (
  <section className="services" id="services" >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">We provide different type of services.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4 item">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
          </span>
          <h4 className="service-heading">E-Commerce</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4 item">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-laptop fa-stack-1x fa-inverse" />
          </span>
          <h4 className="service-heading">Responsive Design</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4 item">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-lock fa-stack-1x fa-inverse" />
          </span>
          <h4 className="service-heading">Web Development</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section>
)

export default Services;