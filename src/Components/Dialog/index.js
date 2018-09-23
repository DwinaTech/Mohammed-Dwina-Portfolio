import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './dialog.css';

class Dialog extends Component {
  state = {
    open: false
  }

  openCard = () => {
    this.setState({ open: true })
  }

  closeCard = () => {
    this.setState({ open: false })
  }

  renderCard = () => {
    const { info } = this.props;
    return (
      this.state.open ?
        <Fragment>
          <div className="card-container">
            <div className="container">
              <div className="card">
                <h4 className="title">{info.role}</h4>
                <h5>{info.company}</h5>
                <h6 className="data">{info.date}</h6>
                <p className="paragraph">{info.info}</p>
                <button className="close-card" onClick={this.closeCard}>Close</button>
              </div>
            </div>
          </div>
        </Fragment> : null
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderCard()}
        <button onClick={this.openCard} className="more-info">More</button>
      </Fragment>
    )
  }
}

Dialog.propTypes = {
  info: PropTypes.object.isRequired
}

export default Dialog;