import { Fragment } from "react";
import data from "../../experienceData";
import Card from "../Card";
import "./style.scss";

const About = () => (
  <section className="experience" id="experience">
    <div className="container">
      <h1 className="title">Experience:</h1>
      <div className="content">
        {data.map((info) => (
          <Fragment key={info.id}>
            <Card info={info} />
          </Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default About;
