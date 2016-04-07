'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import NavBar from '../components/NavBar';
import SideBar from '../components/Navbar/SideBar';
import Timeline from '../components/Timeline/Timeline';
// import Profile from '../components/Profile/Profile';
import { Profile } from '../containers';

export const UserProfile = () =>
  <div>
    <NavBar brandName="Mochi" />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <SideBar />
        <Profile name="Gideon Glass" />
        <Timeline />
      </div>
    </section>
  </div>;

export default UserProfile;
