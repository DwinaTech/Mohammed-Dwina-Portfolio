import React, { Fragment } from 'react';
import data from '../../educationData';
import Card from '../Card';
import './education.css';

const Education = () =>
  (
    <section className="work-page" id="education">
      <h2>Education</h2>
      <div className="content">
        {
          data.map(info => (
            <Fragment key={info.id}>
              <Card info={info} />
            </Fragment>
          ))
        }
      </div>
    </section>
  )

export default Education;