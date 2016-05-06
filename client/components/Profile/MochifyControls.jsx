'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Dropdown from '../../components/Button/Dropdown';
import Modal from '../Modal';
// import Link from 'react-router/lib/Link';

const avatarImageStyle = photo => ({
  'background': `url(${photo}) #b7b7b7 no-repeat 50% / cover`,
});

export const MochifyControls = () => 
  <div className="event-controls">
    <Modal id="mochify-modal" title="Mochify">
      <h1>We found more that one Greg Pass!</h1>
      <p>Please select the correct Greg</p>
      <div className="mochify-row">
        <div 
            className="mochify-image" 
            style={avatarImageStyle('http://tech.cornell.edu/uploads/bios/_landscape/Pass_Greg_2015_2.jpg')} 
        />
        <p>Greg Pass, M, 34, former CTO of Twitter</p>
      </div>
      <div className="mochify-row">
        <div 
          className="mochify-image" 
          style={avatarImageStyle('http://r3.pitch.com/files/base/scomm/kcp/image/2015/02/640w/sen_smith_greg_1.jpg')}
        />
        <p>Greg Pass, M, 27, singer</p>
        // <Link to={'/donor/gpass2'}><button>Select</button></Link>
      </div>

    </Modal>
    <button 
      id="mochify"
      type="button" 
      className="btn btn-default profile-btn"
      link="#" 
      data-toggle="modal"
      data-target="#mochify-modal"
    >Mochify</button>
  </div>;

export default MochifyControls;
