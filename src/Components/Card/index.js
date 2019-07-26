import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../Dialog';
import './card.scss';

const Card = ({ info, show, closeCard}) => (
  <Fragment>
    <div className="card-info">
      <Dialog show={show} closeCard={closeCard} info={info} />
      <h4 className="title">{info.role}</h4>
      <h5>{info.company}</h5>
      <h6 className="data">{info.date}</h6>
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