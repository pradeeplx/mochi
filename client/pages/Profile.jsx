'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';
import { Profile, Timeline } from '../containers';

export const ProfilePage = ({ params }, { router }) =>
  <div>
    <NavBar brandName="Mochi" />
    <SideBar />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <Profile
          username={params.username}
          router={router}
        />
        <Timeline />
      </div>
    </section>
  </div>;

ProfilePage.propTypes = {
  params: PropTypes.object,
};

ProfilePage.contextTypes = {
  router: React.PropTypes.object.isRequired,
};


export default ProfilePage;
