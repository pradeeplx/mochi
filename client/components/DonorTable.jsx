'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import DonorRow from '../components/DonorRow';

export class DonorTable extends React.Component {
  componentWillMount() {
    const { fetchAllUsers } = this.props;
    fetchAllUsers();
  }

  render() {
    const { users = [] } = this.props;

    const userElements = users.map((user, index) =>
      <DonorRow
        key={index}
        first={user.profile.first}
        last={user.profile.last}
        email={user.profile.email}
        city={user.profile.city}
        username={user.profile.username}
        photo={user.profile.photo}
      />
    );

    return (
      <table className="table table-hover donor-table">
         <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
         </thead>
         <tbody>{userElements}</tbody>
      </table>);
  }
}

DonorTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  fetchAllUsers: PropTypes.func,
};

export default DonorTable;
