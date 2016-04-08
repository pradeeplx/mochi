'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Dropdown from '../../components/Button/Dropdown';
import Modal from '../../components/Modal';

export const Avatar = ({ photo, children }) =>
  <section className="avatar">
    <div className="profile-img" style={{ background: 'url(' + photo + ')' + 'no-repeat 50% / cover' }}></div>
    <h1>{children}</h1>
    <Dropdown id="addItem" title="Add New" />
    <Modal title="Add Donation">
      {/* TODO: Render different form based on button clicked */}
      <form role="form">
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" min="1" step="any" className="form-control" id="amount" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" className="form-control" id="date" />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </Modal>
  </section>;

Avatar.propTypes = {
  photo: PropTypes.string,
  children: PropTypes.string,
};

export default Avatar;
