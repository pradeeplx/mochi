import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';
import Button from '../components/Button/Button';
import { Donors } from '../containers';

export const Contacts = () =>
  <div>
    <NavBar brandName="Mochi" />
    <SideBar />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <Donors />
        <Button className="btn btn-default" type="button">Add New Donor</Button>
      </div>
    </section>
  </div>;

export default Contacts;
