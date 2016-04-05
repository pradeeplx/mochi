'use strict';

import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import SummaryStats from './SummaryStats';
import ContactInfo from './ContactInfo';

export const Profile = ({ name }) => (
  <div className="col-md-7 col-md-offset-1 main profile">
    <Avatar>{name}</Avatar>
    <SummaryStats />
    <ContactInfo />
  </div>
);

Profile.propTypes = {
  name: PropTypes.string,
};

export default Profile;
