import React, { PropTypes } from 'react';
import ContactItem from './ContactItem';

export const ContactInfo = ({ email = '', phone = '', twitter = '', city = '' }) =>
  <section className="contact-info profile-card">
    <h3>Contact Info</h3>
    <ul className="list-group">
      <ContactItem field="Email">{email}</ContactItem>
      <ContactItem field="Phone">{phone}</ContactItem>
      <ContactItem field="Twitter">{twitter}</ContactItem>
      <ContactItem field="City">{city}</ContactItem>
    </ul>
  </section>;

ContactInfo.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  twitter: PropTypes.string,
  city: PropTypes.string,
};

export default ContactInfo;
