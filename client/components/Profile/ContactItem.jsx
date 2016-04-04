'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

export const ContactItem = ({ field, children }) =>
  <li className="list-group-item">
    <span>{`${field}: `}</span>
    <span>{children}</span>
  </li>;

ContactItem.propTypes = {
  field: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ContactItem;
