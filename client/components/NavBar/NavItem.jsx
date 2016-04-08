'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

export const NavItem = ({ children }) =>
  <li>{children}</li>;

NavItem.propTypes = {
  children: PropTypes.object,
};

export default NavItem;
