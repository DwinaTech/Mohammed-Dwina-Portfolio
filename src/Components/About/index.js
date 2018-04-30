import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import './about.css';

const About = () => (
  <section className="about-page" id="about">
    <div className="container about-count">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Here you can find out more about me.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="images/dwina.png" alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 className="subheading">Math & Computing Science, Sudan</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">At Gezira University I have done my first yeah Math & Computing Science degree, which include different material around general Computing and Math!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="images/dwina.png" alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>November 2017, Glasgow</h4>
                  <h4 className="subheading">Code for Good Hackathon - J.P. Morgan/ participant</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">I was a member of 5 persons team representing CodeYourFuture. Our challenge was to create a screen reader web application for Henshaws - a charity supporting people living with sight loss and a range of other disabilities. My main role, in the team, involved working on the server-side on communicating with Microsoft Computer Vision API , sending the images and processing the response. The challenge involved reading and understanding the API documentation and building an MVP in less than 24 hours Our team won an award for the most productive team in the competition.!</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="images/dwina.png" alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>May 2017 - December 2017, Glasgow</h4>
                  <h4 className="subheading">CodeYourFuture/ Trainee Full Stack Developer</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">I followed an intensive 6 months course to become a Full Stack JavaScript Developer at CodeYourFuture which is an organisation that teaches asylum seekers and refugees web Development and helps them to build their experience and communication skills  through highly qualified volunteer software engineers.!
                  My graduation project was part of a team building a Digital Welcome Pack application for refugees in Glasgow. Our clients are representatives from the local refugee charity Refuweegee. The App is built as a Progressive Web Application (PWA) using React, with a Node backend and MongoDB database. I worked on a variety of tasks in the front-end and back-end. It is available on <Link target="blanket" to="https://legodi-app.herokuapp.com/#/">http://legodi.info</Link> and the code including my contributions is on <Link target="blanket" to="https://github.com/CodeYourFuture/legodi">https://github.com/CodeYourFuture/legodi</Link>
                    As part of the course I built a portfolio of projects (both individual and team-based) including a small-scale website for a fictional museum, a MongoDB driven Blog system, and a React app to explore Beyonce’s songs and albums, and more.
You can explore my work on my Github portfolio: <Link target="blanket" to="https://github.com/DwinaTech">https://github.com/DwinaTech</Link>
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part<br /> Of My <br />Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
     
    </div>
    <Footer />
  </section>

)

export default About;