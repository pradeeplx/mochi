import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';

export const Dashboard = () =>
  <div>
    <NavBar brandName="Mochi" />
    <SideBar />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <div className="col-md-7 col-md-offset-1 main profile">
          <h1>Dashboard</h1>
        </div>
      </div>
    </section>
  </div>;

export default Dashboard;
