import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './dialog.scss';

class Dialog extends Component {
  renderCard = () => {
    const { info, open, closeCard } = this.props;
    return (
      open ?
        <Fragment>
          <div onClick={closeCard} className="dialog">
            <div className="dialog-contents">
              <h1 className="dialog-title">{info.role}</h1>
              <h2 className="dialog-subtitle">{info.company}</h2>
              <h3 className="dialog-sub-subtitle">{info.date}</h3>
              <p className="dialog-paragraph">{info.info}</p>
              <button className="dialog-close-card" onClick={closeCard}>Close</button>
            </div>
          </div>
        </Fragment> : null
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderCard()}
      </Fragment>
    )
  }
}

Dialog.propTypes = {
  info: PropTypes.object.isRequired
}

export default Dialog;