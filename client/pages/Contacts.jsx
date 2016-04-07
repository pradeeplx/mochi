import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';
import Donors from '../components/Donors';

export const Contacts = () =>
  <div>
    <NavBar brandName="Mochi" />
    <SideBar />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <Donors />
      </div>
    </section>
  </div>;

export default Contacts;
