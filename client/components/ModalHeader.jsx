'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Button from '../components/Button/Button';

export const ModalHeader = ({ title }) => (
  <div className="modal-header">
    <Button type="button" className="close" toggle="modal">&times;</Button>
    <h4 className="modal-title">{title}</h4>
  </div>);

ModalHeader.propTypes = {
  title: PropTypes.string,
};

export default ModalHeader;
