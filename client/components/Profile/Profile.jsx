'use strict';

import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import SummaryStats from './SummaryStats';
import ContactInfo from './ContactInfo';

export class Profile extends React.Component {
  componentWillMount() {
    const { fetchUser } = this.props.actions;
    const { username = 'unknown' } = this.props;
    fetchUser(username);
  }

  render() {
    const { profile, events } = this.props;

    return (
      <div className="col-md-7 col-md-offset-1 main profile">
        <Avatar photo={profile.photo}>{`${profile.first} ${profile.last}`}</Avatar>
        <SummaryStats events={events} />
        <ContactInfo profile={profile} />
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
  events: PropTypes.arrayOf(PropTypes.object),
  username: PropTypes.string,
  actions: PropTypes.object,
};

export default Profile;
