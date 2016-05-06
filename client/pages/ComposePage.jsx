import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Timeline, Compose } from '../containers';
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';
import Button from '../components/Button/Button';
import { Timeline } from '../containers';
import Sean1 from '../assets/sean1.jpg';
import Sean2 from '../assets/sean2.jpg';
import Sean3 from '../assets/sean3.jpg';
import Sean4 from '../assets/sean4.jpg';
import Mochi from '../assets/emaillogo.png';

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
