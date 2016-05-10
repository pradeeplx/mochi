/* global $ */

import React, { PropTypes } from 'react';
import Modal from '../Modal';
import Button from '../Button/Button';
import gid1 from '../../assets/gid1.jpg';
import gid2 from '../../assets/gid2.jpg';
import gid3 from '../../assets/gid3.jpg';
import gid4 from '../../assets/gid4.jpg';
import joined from '../../assets/joined.png';
import LoadingAnimation from '../../assets/ajax-load.gif';
import Logo from '../../assets/emaillogo.png';

const handleClick = (e, addEventFunc, username, event, router) => {
  e.preventDefault();
  console.debug(`Handling SEND click for username=${username}`, event);
  addEventFunc(username, event);
  $('#sending-modal').modal('show');
  window.setTimeout(() => {
    $('#sending-modal').modal('hide');
    router.push(`/donor/${username}`);
  }, 2000);
};

const FAKE_EVENT = {
  title: 'May 2016 Fundraising Appeal Sent',
  category: 'correspondence',
  date: new Date(),
  description: 'May 2016 summer appeal for donations from repeat donors and past members',
  amount: null,
};

const SendingLoad = () => (
  <Modal id="sending-modal" title="Sending message">
    <img
      className="img-responsive mochify-bounce"
      src={`/${LoadingAnimation}`}
    />
  </Modal>);

export const Compose = ({ profile, actions, router }) => (
  <div>
    <SendingLoad />
    <div className="col-md-7 col-md-offset-1 main compose-box">
      <div className="compose-box-wrapper">
        <div className="letter-box">
          <img className="email-logo" src={`/${Logo}`} />
          <p>Hi {profile.first}!</p>
          <p>It’s been <span className="mochi-pink">over a year since you last donated</span> to Mochi! So much has
             gone on since then. New programs, new projects, and new staff! Just
             last week, Taylor Swift visited our offices to let us know that
             she loves what Mochi is doing.</p>
          <p>We thought you might enjoy these photos from <span className="mochi-blue">your visit to Mochi
            HQ</span> , and from Queen Tay’s visit!</p>
          <p>As always, our organization depends on long term members like you!
            We are seeking donors for our 2016 annual membership drive, and we
            need your help!</p>
          <div className="center">
            <img id="joined" className="img-responsive" src={`/${joined}`} />
          </div>
          <p>Click the donate button at the bottom of this email to instantly send at tax-deductible donation to Mochi!</p>
          <div className="center">
            <button className="btn btn-donate">Donate</button>
          </div>
        </div>
        <div
          className="center"
          onClick={(e) =>
              handleClick(e, actions.submitUserEvent, profile.username, FAKE_EVENT, router)}
        >
          <Button
            type="button"
            className="btn btn-send"
            toggle=""
            target=""
          >Send</Button>
        </div>
      </div>
    </div>
    <div className="col-md-7 col-md-offset-1 media-box-float">
      <div className="media-box">
        <div className="media-box-container">
          <span id="scroll-left" className="glyphicon glyphicon-chevron-left"></span>
          <img id="first-img" src={`/${gid1}`} />
          <img src={`/${gid2}`} />
          <img src={`/${gid3}`} />
          <img src={`/${gid4}`} />
          <span id="scroll-right" className="glyphicon glyphicon-chevron-right"></span>
        </div>
      </div>
    </div>
  </div>);

Compose.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    fetchUser: PropTypes.func,
    submitUserEvent: PropTypes.func,
  }).isRequired,
  router: PropTypes.object.isRequired,
};

export default Compose;
