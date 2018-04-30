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
          <p className="text-muted">I have great experience of creating E-commerce application with latest technolegy, which makes your application has great preformance and realy fast to access through all different search engines, beside strong securty, I will be realy hapy to receve your contact.</p>
        </div>
        <div className="col-md-4 item">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-laptop fa-stack-1x fa-inverse" />
          </span>
          <h4 className="service-heading">Responsive Design</h4>
          <p className="text-muted">I am highly experienced and qualifait at creating full responsive website, which compatible with all different type of devices such as PC, Laptop tablet and smartphone, all that with great deal, I will be realy hapy to receve your contact.</p>
        </div>
        <div className="col-md-4 item">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-lock fa-stack-1x fa-inverse" />
          </span>
          <h4 className="service-heading">Web Development</h4>
          <p className="text-muted">I have got fantastic experience of web development a cross user interface and backend, with modern web development languages beside great background of using relational and non relational database, I will be realy happy to make a great deal with you.</p>
        </div>
      </div>
    </div>
  </section>
)

export default Services;