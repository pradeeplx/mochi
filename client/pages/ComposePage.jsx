import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Timeline, Compose } from '../containers';
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';

export const ComposePage = (props, { router }) => (
  <div>
    <NavBar brandName="Mochi" />
    <SideBar />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <Compose router={router} />
        <Timeline />
      </div>
    </section>
  </div>);

ComposePage.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default ComposePage;
