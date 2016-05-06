import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';
import Sean1 from '../assets/sean1.jpg';
import Sean2 from '../assets/sean2.jpg';
import Sean3 from '../assets/sean3.jpg';
import Sean4 from '../assets/sean4.jpg';

// import Timeline from '../components/Timeline';

export const ComposePage = () =>
  <div>
    <NavBar brandName="Mochi" />
    <SideBar />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <div className="col-md-7 col-md-offset-1 main profile">
          <h1>Compose</h1>
          <h2>Letter here...</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, nisl ut iaculis condimentum, massa ipsum ultrices tortor, id tempor eros urna nec nisi. </p>
          <div className="media-box">
            <div className="col-md-12 media-box-container">
              <span id="scroll-left" className="glyphicon glyphicon-chevron-left"></span>
              <div className="col-md-3 media-box-item">
                <img src={`/${Sean1}`} />
              </div>
              <div className="col-md-3 media-box-item">
                <img src={`/${Sean2}`} />
              </div>
              <div className="col-md-3 media-box-item">
                <img src={`/${Sean3}`} />
              </div>
              <div className="col-md-3 media-box-item">
                <img src={`/${Sean4}`} />
              </div>
              <span id="scroll-right" className="glyphicon glyphicon-chevron-right"></span>
            </div>
          </div>
        </div>


        <div className="col-md-4 main timeline">
          <h1>Timeline</h1>
        </div>
      </div>
    </section>
  </div>;

export default ComposePage;
