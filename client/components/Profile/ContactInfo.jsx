import React, { PropTypes } from 'react';
import ContactItem from './ContactItem';

export const ContactInfo = ({ profile = {} }) =>
  <section className="contact-info profile-card">
    <h3>Contact Info</h3>
    <ul className="list-group">
      <ContactItem field="Email">{profile.email}</ContactItem>
      <ContactItem field="Phone">###-####</ContactItem>
      <ContactItem field="Twitter">{profile.twitter}</ContactItem>
      <ContactItem field="City">{profile.city}</ContactItem>
    </ul>
  </section>;

ContactInfo.propTypes = {
  profile: PropTypes.object,
};

export default ContactInfo;
