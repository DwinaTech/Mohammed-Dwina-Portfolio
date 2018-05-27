import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => (
  <section className="about-page" id="about">
    <h2>Know more about me</h2>
    <div className="content">
      <div className="card-info">
        <h4 className="title">Math & Computing Science</h4>
        <h5 className="data">December 2012 Sudan</h5>
        <p className="prgrapgh">At Gezira University I have done my first yeah Math & Computing Science degree, which include different material around general Computing and Math!</p>
      </div>
      <div className="card-info">
        <h4 className="title">Code for Good Hackathon - J.P. Morgan</h4>
        <h5 className="data">November 2017, Glasgow</h5>
        <p className="prgrapgh">I was a member of 5 persons team representing CodeYourFuture. Our challenge was to create a screen reader web application for Henshaws - a charity supporting people living with sight loss and a range of other disabilities. My main role, in the team, involved working on the server-side on communicating with Microsoft Computer Vision API , sending the images and processing the response. The challenge involved reading and understanding the API documentation and building an MVP in less than 24 hours Our team won an award for the most productive team in the competition.!</p>
      </div>
      <div className="card-info">
        <h4 className="title">CodeYourFuture: Trainee Full Stack Developer</h4>
        <h5 className="data">May 2017 - December 2017, Glasgow</h5>
        <p className="prgrapgh">I followed an intensive 6 months course to become a Full Stack JavaScript Developer at CodeYourFuture which is an organisation that teaches asylum seekers and refugees web Development and helps them to build their experience and communication skills  through highly qualified volunteer software engineers.!
        My graduation project was part of a team building a Digital Welcome Pack application for refugees in Glasgow. Our clients are representatives from the local refugee charity Refuweegee. The App is built as a Progressive Web Application (PWA) using React, with a Node backend and MongoDB database. I worked on a variety of tasks in the front-end and back-end. It is available on <Link target="blanket" to="https://legodi-app.herokuapp.com/#/">http://legodi.info</Link> and the code including my contributions is on <Link target="blanket" to="https://github.com/CodeYourFuture/legodi">https://github.com/CodeYourFuture/legodi</Link>
          As part of the course I built a portfolio of projects (both individual and team-based) including a small-scale website for a fictional museum, a MongoDB driven Blog system, and a React app to explore Beyonce’s songs and albums, and more.
        You can explore my work on my Github portfolio: <Link target="blanket" to="https://github.com/DwinaTech">https://github.com/DwinaTech</Link>
        </p>
      </div>
    </div>
  </section>
)

export default About;