import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';

// <Link to={`/donor/${username}`}></Link>

export const DonorRow = ({ first, last, email, city, username, photo }) => {
  const avatarImageStyle = `url(${photo}) #b7b7b7 no-repeat 50% / cover`;
  return (
  <tr>
    <td>
      <div
        className="donor-profile-img"
        style={{ background: avatarImageStyle }}
      />
    </td>
    <td className="donor-list-name"><Link to={`/donor/${username}`}>{first}</Link></td>
    <td className="donor-list-name"><Link to={`/donor/${username}`}>{last}</Link></td>
    <td className="donor-list-detail"><Link to={`/donor/${username}`}>{email}</Link></td>
    <td className="donor-list-detail"><Link to={`/donor/${username}`}>{city}</Link></td>
  </tr>);
  };

DonorRow.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  email: PropTypes.string,
  city: PropTypes.string,
  username: PropTypes.string,
  photo: PropTypes.string,
};

export default DonorRow;
