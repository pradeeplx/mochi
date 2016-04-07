'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

export const NavItem = ({ children }) =>
  <li><a href="#">{children}</a></li>;

NavItem.propTypes = {
  children: PropTypes.element,
};

export default NavItem;
