'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import Avatar from './Avatar';
import SummaryStats from './SummaryStats';
import ContactInfo from './ContactInfo';

export const Profile = () =>
  <div className="col-md-7 col-md-offset-1 main profile">
    <Avatar>Gideon Glass</Avatar>
    <SummaryStats />
    <ContactInfo />
  </div>;

export default Profile;
