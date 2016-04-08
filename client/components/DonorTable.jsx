'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import DonorRow from '../components/DonorRow';

export const DonorTable = ({ users = [] }) => {
  const userElements = users.map(user =>
    <DonorRow first={user.first} last={user.last} email={user.email} city={user.city} username={user.username} />
  );
  return (
    <table className="table table-hover">
       <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>City</th>
          </tr>
       </thead>
       <tbody>
        {userElements}
       </tbody>
    </table>);
};

DonorTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default DonorTable;
