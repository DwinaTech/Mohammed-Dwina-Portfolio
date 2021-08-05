import React from "react";
import "./about.scss";

const About = () => (
  <section className="about-page" id="about">
    <div className="container">
      <div className="profile">
        <h1 className="title">Profile:</h1>
        <p className="paragraph">
          I am fascinated by software development. I am enthusiastic,
          responsible and keen to learn. As a junior developer, I enjoy learning
          new skills and responsibilities in both frontend and backend roles. I
          like working with design libraries for the web, such as Material-UI
          and Bootstrap, extending them to create unique, responsive layouts and
          animated UIs. I spend my free time with family and friends, playing
          football, going to the cinema, shopping and watching TV. My
          experiences in self-directed learning have made me confident when
          given tasks. And my experience in the classroom has taught me to
          listen well to instructions, pay attention to details, and work well
          in a team.
        </p>
      </div>
      <div className="skills">
        <h1 className="title">Skills:</h1>
        <div className="content">
          <div>
            <strong className="sub-subtitle">Languages:</strong>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>Node.js</li>
            <li>JavaScript (ES6)</li>
          </div>
          <div>
            <strong className="sub-subtitle">Libraries:</strong>
            <li>Knex.js</li>
            <li>Bootstrap</li>
            <li>Express.js</li>
            <li>Material-ui</li>
            <li>Objection.js</li>
            <li>React.js (Hook)</li>
          </div>
          <div>
            <strong className="sub-subtitle">Tools:</strong>
            <li>Eslint</li>
            <li>Webpack</li>
            <li>Chrome Dev</li>
            <li>Git & Github</li>
          </div>
          <div>
            <strong className="sub-subtitle">Uint Test:</strong>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>React-test</li>
            <li>SupperTest</li>
          </div>
          <div>
            <strong className="sub-subtitle">Databases:</strong>
            <li>Sqlite(V3)</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
