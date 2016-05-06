import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import NavBar from '../components/NavBar';
import SideBar from '../components/NavBar/SideBar';
import Button from '../components/Button/Button';
import { Timeline } from '../containers';
import Sean1 from '../assets/sean1.jpg';
import Sean2 from '../assets/sean2.jpg';
import Sean3 from '../assets/sean3.jpg';
import Sean4 from '../assets/sean4.jpg';
import Mochi from '../assets/emaillogo.png';

// import Timeline from '../components/Timeline';

export const ComposePage = () =>
  <div>
    <NavBar brandName="Mochi" />
    <SideBar />
    <section id="main-container" className="container-fluid">
      <div className="row">
        <div className="col-md-7 col-md-offset-1 main compose-box">
          <div className="compose-box-wrapper">
            <div className="letter-box">
              <img className="email-logo" src={`/${Mochi}`} />
              <p>Hi Sean!</p>
              <p>It’s been <span className="mochi-pink">over a year since you last donated</span> to Mochi! So much has gone on since then. New programs, new projects, and new staff! Just last week, Taylor Swift visited our offices to let us know that she loves what Mochi is doing.</p>
              <p>We thought you might enjoy these photos from <span className="mochi-blue">your visit to Mochi HQ</span> , and from Queen Tay’s visit!</p>
              <p>As always, our organization depends on long term members like you! We are seeking donors for our 2016 annual membership drive, and we need your help!</p>
              <img className="" src={`/${Sean1}`} />
              <img className="" src={`/${Sean4}`} />
              <p>Click the donate button at the bottom of this email to instantly send at tax-deductible donation to Mochi!</p>
              <div className="center">
                <button className="btn btn-donate">Donate</button>
              </div>
            </div>
            <div className="center">
              <Button type="button" className="btn btn-send" toggle="" target="">Send</Button>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-md-offset-1 media-box-float">
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
        <Timeline />
      </div>
    </section>
  </div>;

export default ComposePage;
