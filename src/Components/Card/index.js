import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../Dialog';
import './card.scss';

class Card extends React.Component {
  state = {
    open: false
  }

  openCard = () => {
    this.setState({ open: true })
  }

  closeCard = () => {
    this.setState({ open: false })
  }

  render() {
    const { info } = this.props;
    const { open } = this.state;
    return (
      <Fragment>
        <div className="card">
          <Dialog open={open} closeCard={this.closeCard} info={info} />
          <h1 className="title">{info.role}</h1>
          <h2 className="subtitle">{info.company}</h2>
          <h3 className="sub-subtitle">{info.date}</h3>
          <p className="paragraph">{info.info}</p>
          <button onClick={this.openCard} className="more-info">More</button>
        </div>
      </Fragment>
    )
  }
}

Card.propTypes = {
  info: PropTypes.object.isRequired,
}

export default Card;