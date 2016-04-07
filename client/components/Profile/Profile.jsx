'use strict';

import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import SummaryStats from './SummaryStats';
import ContactInfo from './ContactInfo';

export class Profile extends React.Component {
  componentWillMount() {
    const { fetchUser } = this.props.actions;
    fetchUser();
  }

  render() {
    const { profile, events } = this.props;

    return (
      <div className="col-md-7 col-md-offset-1 main profile">
        <Avatar>{`${profile.first} ${profile.last}`}</Avatar>
        <SummaryStats events={events} />
        <ContactInfo />
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
  events: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.object,
};

export default Profile;
