import React, { Component, Fragment } from 'react';
import data from '../../experienceData';
import Card from '../Card';
import './about.css';

class About extends Component {
  test = ()=>{}
  render() {
    return (
      <section className="about-page" id="about">
        <div className="profile">
          <h2>Profile:</h2>
          <p className="profile">
            I am fascinated by software development. I am enthusiastic, responsible and
            keen to learn. As a junior developer, I enjoy learning new skills and
            responsibilities in both frontend and backend roles. I like working with design
            libraries for the web, such as Material-UI and Bootstrap, extending them to
            create unique, responsive layouts and animated UIs. I spend my free time with
            family and friends, playing football, going to the cinema, shopping and watching
            TV. My experiences in self-directed learning have made me confident when
            given tasks. And my experience in the classroom has taught me to listen well to
            instructions, pay attention to details, and work well in a team.
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="content">
            <li><strong>Languages:</strong> HTML5, CSS3, JavaScript & Node.js</li>
            <li><strong>Libraries:</strong> React.js, Express.js, Objection.js, Knex.js, Material-ui & Bootstrap</li>
            <li><strong>Databases:</strong> MongoDB, Sqlite(V3) and PostgreSQL</li>
          </div>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <div className="content">
            {
              data.map(info =>
                (
                  <Fragment key={info.id}> 
                    <Card info={info}  />
                  </Fragment>
                ))
            }
          </div>
        </div>
      </section>
    )
  }
}

export default About;