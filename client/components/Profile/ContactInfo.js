'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import ContactItem from './ContactItem';

export const ContactInfo = () =>
  <section className="contact-info profile-card">
    <h3>Contact Info</h3>
    <ul className="list-group">
      <ContactItem field="Email">gig6@cornell.edu</ContactItem>
      <ContactItem field="Phone">(516) 732-9916</ContactItem>
      <ContactItem field="Twitter">@gidglass</ContactItem>
      <ContactItem field="City">New York</ContactItem>
    </ul>
  </section>;

export default ContactInfo;
