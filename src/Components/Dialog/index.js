import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './dialog.scss';

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
          <div className="dialog">
            <div className="container">
              <div className="card">
                <h1 className="title">{info.role}</h1>
                <h2 className="subtitle">{info.company}</h2>
                <h3 className="sub-subtitle">{info.date}</h3>
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