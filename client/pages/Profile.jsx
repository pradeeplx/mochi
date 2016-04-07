'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';
import Timeline from '../components/Timeline/Timeline';
// import Profile from '../components/Profile/Profile';
import { Profile } from '../containers';

export const ProfilePage = () =>
  <div>
    <NavBar brandName="Mochi" />
    <SideBar />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <Profile />
        <Timeline />
      </div>
    </section>
  </div>;

export default ProfilePage;
