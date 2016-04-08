'use strict';

import React, { PropTypes } from 'react';

export const Button = ({ type, className, toggle, target, children }) => (
  <button type = {type}
    className = {className}
    data-toggle = {toggle}
    data-target = {target}
    data-dismiss = {toggle}
  >{children}</button>);

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  toggle: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Button;
