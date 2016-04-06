'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal';

export const Avatar = ({ children }) =>
  <section className="avatar">
    <div className="profile-img"></div>
    <h1>{children}</h1>
    <div className="dropdown">
      <Button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu">
        Add New &nbsp;
        <span className="caret"></span>
      </Button>
      <ul className="dropdown-menu">
        <li>
          <a href="#" data-toggle="modal" data-target="#modal">Donation</a>
        </li>
        <li>
          <a href="#" data-toggle="modal" data-target="#modal">Event</a>
        </li>
        <li>
          <a href="#" data-toggle="modal" data-target="#modal">Note</a>
        </li>
      </ul>
    </div>
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
  children: PropTypes.string,
};

export default Avatar;
