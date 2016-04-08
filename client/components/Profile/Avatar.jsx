'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Dropdown from '../../components/Button/Dropdown';
import Modal from '../../components/Modal';

export const Avatar = ({ photo, children }) =>
  <section className="avatar">
    <div className="profile-img" style={{ background: 'url(' + photo + ')' + 'no-repeat 50% / cover' }}></div>
    <h1>{children}</h1>
  </section>;

Avatar.propTypes = {
  photo: PropTypes.string,
  children: PropTypes.string,
};

export default Avatar;
