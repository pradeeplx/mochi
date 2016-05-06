'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import ModalHeader from '../components/ModalHeader';
import ModalBody from '../components/ModalBody';

export const Modal = ({
  id, title = '', show = true, backdrop = false, children,
}) => (
  <div
    id={id}
    className="modal fade"
    data-backdrop={backdrop}
    role="dialog"
    data-show={show}
  >
    <div className="modal-dialog">
      <div className="modal-content">
        {title && title.length ? <ModalHeader title={title} /> : null}
        <ModalBody>{children}</ModalBody>
      </div>
    </div>
  </div>);

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  backdrop: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Modal;
