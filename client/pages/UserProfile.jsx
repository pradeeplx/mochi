'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import Timeline from '../components/Timeline/Timeline';
import Profile from '../components/Profile/Profile';

export const UserProfile = () =>
  <div>
    <Profile name="Gideon Glass" />
    <Timeline />
  </div>;

export default UserProfile;
