'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import ModalHeader from '../components/ModalHeader';
import ModalBody from '../components/ModalBody';

export const Modal = ({ title, children }) => (
  <div id="modal" className="modal fade" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <ModalHeader title={title} />
        <ModalBody>{children}</ModalBody>
      </div>
    </div>
  </div>);

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Modal;
