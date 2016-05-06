'use strict';

/* global window, $ */

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Modal from '../Modal';
import MochifyBounce from './MochifyBounce';

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

export const MochifyControls = ({ reMochify = false, router }) =>
  <div className="event-controls">
    <MochifyBounce />
    <Modal id="mochify-modal" title="Multiple Greg Pass candidates located">
      <h1>Please select the correct Greg</h1>
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

    </Modal>
    <button
      id="mochify"
      type="button"
      className="btn btn-default profile-btn"
      link="#"
      data-toggle="modal"
      data-target="#mochify-modal"
    >{reMochify ? 'Re-Mochify' : 'Mochify'}</button>
  </div>;

MochifyControls.propTypes = {
  reMochify: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,
};

export default MochifyControls;
