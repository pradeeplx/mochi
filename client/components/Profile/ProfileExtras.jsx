import React, { PropTypes } from 'react';

export const ProfileExtras = ({ images }) => {
  const elems = images.map((url, i) => <img key={i} src={url} />);
  return <div className="profile-extras">{elems}</div>;
};

ProfileExtras.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProfileExtras;
