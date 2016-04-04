'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

export const StatItem = ({ size, header, detail }) =>
  <div className={`col-md-${size}`}>
    <h4>{header}</h4>
    <span>{detail}</span>
  </div>;

StatItem.propTypes = {
  size: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default StatItem;
