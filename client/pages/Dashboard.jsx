import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';

export const Dashboard = () =>
  <div>
    <NavBar brandName="Mochi" />
    <SideBar />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <div className="col-md-11 col-md-offset-1">
          <img className="img-responsive" src="./images/dashboard.png" />
        </div>
      </div>
    </section>
  </div>;

export default Dashboard;
