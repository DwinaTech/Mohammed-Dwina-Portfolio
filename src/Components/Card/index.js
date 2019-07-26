import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../Dialog';
import './card.scss';

const Card = ({ info, show, closeCard}) => (
  <Fragment>
    <div className="card-info">
      <Dialog show={show} closeCard={closeCard} info={info} />
      <h1 className="title">{info.role}</h1>
      <h2 className="subtitle">{info.company}</h2>
      <h3 className="sub-subtitle">{info.date}</h3>
      <p className="paragraph">{info.info}</p>
    </div>
  </Fragment>
)

Card.propTypes = {
  info: PropTypes.object.isRequired,
  closeCard: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default Card;