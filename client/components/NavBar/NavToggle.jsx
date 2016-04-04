'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

export const NavToggle = ({ target }) =>
  <button type="button"
    className="navbar-toggle collapsed"
    data-toggle="collapse"
    data-target={`${target}`}
    aria-expanded="false"
    aria-controls={target}
  >
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
  </button>;

NavToggle.propTypes = {
  target: PropTypes.string,
};

export default NavToggle;
