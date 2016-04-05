'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Timeline from '../components/Timeline';
import Profile from '../components/Profile';

// <header id="react-navbar"></header>
// <section id="main-container" class="container-fluid">
//     <div class="row">
//         <section id="react-sidebar"></section>
//         <section id="react-profile"></section>
//         <section id="react-timeline"></section>
//     </div>
// </section>

// React.render(<Navbar brandName="Mochi"/>, document.getElementById('react-navbar'));
// React.render(<Sidebar/>, document.getElementById('react-sidebar'));
// React.render(<Timeline>Timeline</Timeline>, document.getElementById('react-timeline'));
// React.render(<Profile>Gideon Glass</Profile>, document.getElementById('react-profile'));

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
