import React, { Component, Fragment } from 'react';
import data from '../../experienceData';
import Card from '../Card';
import './about.scss';

class About extends Component {
  test = () => { }
  render() {
    return (
      <section className="about-page" id="about">
        <div className="container">
          <div className="profile">
            <h1 className="title">Profile:</h1>
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
            <h1 className="title">Skills:</h1>
            <div className="content">
              <div>
                <strong className="sub-subtitle">Languages:</strong>
                <li>HTML5</li> 
                <li>CSS3</li> 
                <li>JavaScript</li>
                <li>Node.js</li> 
              </div>
              <div>
                <strong className="sub-subtitle">Libraries:</strong>
                <li>React.js</li> 
                <li>Express.js</li> 
                <li>Objection.js</li>
                <li>Knex.js</li> 
                <li>Material-ui</li> 
                <li>Bootstrap</li>
              </div>
              <div>
                <strong className="sub-subtitle">Databases:</strong>
                <li>MongoDB</li> 
                <li>Sqlite(V3)</li> 
                <li>PostgreSQL</li>
              </div>
            </div>
          </div>
          <div className="experience">
            <h1 className="title">Experience:</h1>
            <div className="content">
              {
                data.map(info =>
                  (
                    <Fragment key={info.id}>
                      <Card info={info} />
                    </Fragment>
                  ))
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;