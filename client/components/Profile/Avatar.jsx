'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

export const Avatar = ({ children }) =>
  <section className="avatar">
    <div className="profile-img"></div>
    <h1>{children}</h1>
    <button className="btn">Add Donation</button>
  </section>;

Avatar.propTypes = {
  children: PropTypes.string,
};

export default Avatar;
