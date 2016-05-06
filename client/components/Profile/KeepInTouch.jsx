import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import Phone from '../../assets/phone.png';
import Email from '../../assets/email.png';
import SMS from '../../assets/sms.png';

export const KeepInTouch = ({ first = '', username = '' }) =>
  <section className="contact-links profile-card row">
    <h3>Keep in touch with {`${first}`}</h3>
    <Link to={`/donor/${username}/compose`}>
      <img src={`/${Phone}`} className="keep-in-touch-btn" />
    </Link>
    <Link to={`/donor/${username}/compose`}>
      <img src={`/${Email}`} className="keep-in-touch-btn" />
    </Link>
    <Link to={`/donor/${username}/compose`}>
      <img src={`/${SMS}`} className="keep-in-touch-btn" />
    </Link>
  </section>;

KeepInTouch.propTypes = {
  first: PropTypes.string,
  username: PropTypes.string,
};

export default KeepInTouch;
