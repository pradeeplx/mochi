'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import ModalHeader from '../components/ModalHeader';
import ModalBody from '../components/ModalBody';

export const Modal = ({ children }) => (
  <div id="modal" className="modal fade" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <ModalHeader title="Add Donation" />
        <ModalBody>{children}</ModalBody>
      </div>
    </div>
  </div>);

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
