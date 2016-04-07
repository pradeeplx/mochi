'use strict';

import React, { PropTypes } from 'react';

export const DropdownItem = ({ link = '#', toggle, target, children }) => 
  <li>
    <a href={link} data-toggle={toggle} data-target={target}>{children}</a>
  </li>;

DropdownItem.propTypes = {
  link: PropTypes.string,
  toggle: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.string,
};

export default DropdownItem;
