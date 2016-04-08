import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';

// <Link to={`/donor/${username}`}></Link>

export const DonorRow = ({ first, last, email, city, username }) =>
  <tr>
    <td>{first}</td>
    <td>{last}</td>
    <td>{email}</td>
    <td>{city}</td>
  </tr>;

DonorRow.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  email: PropTypes.string,
  city: PropTypes.string,
  username: PropTypes.string,
};

export default DonorRow;
