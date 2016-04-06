'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

export const ModalBody = ({ children }) => (
  <div className="modal-body">
    {children}
  </div>);

ModalBody.propTypes = {
  children: PropTypes.node,
};

export default ModalBody;
