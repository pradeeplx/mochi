'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';
import Timeline from '../components/Timeline/Timeline';
// import Profile from '../components/Profile/Profile';
import { Profile } from '../containers';

export const ProfilePage = ({ params }) =>
  <div>
    <NavBar brandName="Mochi" />
    <SideBar />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <Profile username={params.username} />
        <Timeline />
      </div>
    </section>
  </div>;

ProfilePage.propTypes = {
  params: PropTypes.object,
};

export default ProfilePage;
