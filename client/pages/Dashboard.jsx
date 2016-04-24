import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';
import ImgDashboard from '../assets/dashboard.png';

export const Dashboard = () =>
  <div>
    <NavBar brandName="Mochi" />
    <SideBar />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <div className="col-md-11 col-md-offset-1">
          <img className="img-responsive dashboard-img" src={ImgDashboard} />
        </div>
      </div>
    </section>
  </div>;

export default Dashboard;
