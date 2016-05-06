'use strict';

/* global window, $ */

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Modal from '../Modal';
import MochifyBounce from './MochifyBounce';
import LoadingAnimation from '../../assets/ajax-load.gif';

const GPASS_DELAY = 6500;

const avatarImageStyle = photo => ({
  background: `url(${photo}) #b7b7b7 no-repeat 50% / cover`,
});

const handleSubmit = (e, router) => {
  e.preventDefault();
  $('#mochify-modal').modal('hide');
  $('#mochify-bounce-modal').modal('show');
  window.setTimeout(() => {
    $('#mochify-bounce-modal').modal('hide');
    router.replace('/donor/gpass2');
  }, GPASS_DELAY);
};

const MochifyResults = ({ show, router, reMochify, handleButton }) => {
  let content;
  if (show) {
    content = (
      <div>
        <h2>Please select the correct Greg</h2>
        <div className="mochify-row">
          <div
            className="mochify-image"
            style={avatarImageStyle('http://tech.cornell.edu/uploads/bios/_landscape/Pass_Greg_2015_2.jpg')}
          />
          <p>Greg Pass, M, 40, former CTO of Twitter</p>
          <button onClick={(e) => handleSubmit(e, router)}>Select</button>
        </div>
        <div className="mochify-row">
          <div
            className="mochify-image"
            style={avatarImageStyle('http://www.opengardensblog.futuretext.com/wp-content/uploads/misc/sith.JPG')}
          />
          <p>Greg Pass, M, 93, Sith Lord</p>
        </div>
      </div>
    );
  } else {
    content = (
      <img
        className="img-responsive mochify-bounce"
        src={`/${LoadingAnimation}`}
      />);
  }

  return (<div className="event-controls">
    <Modal id="mochify-modal" title="Multiple Greg Pass candidates located">
      {content}
    </Modal>
    <button
      id="mochify"
      type="button"
      className="btn btn-default profile-btn"
      link="#"
      data-toggle="modal"
      data-target="#mochify-modal"
      onClick={handleButton}
    >{reMochify ? 'Re-Mochify' : 'Mochify'}</button>
  </div>);
};

MochifyResults.propTypes = {
  reMochify: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  handleButton: PropTypes.func.isRequired,
};

export class MochifyControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  _doMochify() {
    console.debug('Toggling show state', this.state);
    window.setTimeout(() => {
      this.setState({ show: !this.state.show });
    }, 2000);
  }

  render() {
    return (
      <div>
        <MochifyResults
          {...this.props}
          show={this.state.show}
          handleButton={(e) => this._doMochify(e)}
        />
        <MochifyBounce />
      </div>);
  }
}

MochifyControls.propTypes = {
  reMochify: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,
};

export default MochifyControls;
