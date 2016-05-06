'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Dropdown from '../../components/Button/Dropdown';
import Modal from '../Modal';

export const MochifyControls = () => 
    <div className="event-controls">
      <Modal id="mochify-modal" title="Mochify">
        <p>YOLO</p>
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
