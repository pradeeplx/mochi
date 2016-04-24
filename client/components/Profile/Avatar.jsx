'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

export const Avatar = ({ photo, children }) => {
  const avatarImageStyle = `url(${photo}) #b7b7b7 no-repeat 50% / cover`;
  return (
    <section className="avatar">
      <div
        className="profile-img"
        style={{ background: avatarImageStyle }}
      />
      <h1>{children}</h1>
    </section>);
};

Avatar.propTypes = {
  photo: PropTypes.string,
  children: PropTypes.string,
};

export default Avatar;
