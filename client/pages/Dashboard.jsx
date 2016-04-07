'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';
import UserProfile from '../pages/UserProfile';
import Contacts from '../pages/Contacts';

export const Dashboard = () => (
  <div>
    <NavBar brandName="Mochi" />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <SideBar />
        <section id="content-area">
          {/* TODO: Swap out main content area based on nav menu */}
          {/* <UserProfile /> */}
          <Contacts />
        </section>
      </div>
    </section>
  </div>);

export default Dashboard;
