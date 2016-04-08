'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import ModalHeader from '../components/ModalHeader';
import ModalBody from '../components/ModalBody';

export const Modal = ({ id, title, children }) => (
  <div id={id} className="modal fade" data-backdrop="false" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <ModalHeader title={title} />
        <ModalBody>{children}</ModalBody>
      </div>
    </div>
  </div>);

Modal.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Modal;
