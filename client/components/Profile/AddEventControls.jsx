'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Dropdown from '../../components/Button/Dropdown';
import Modal from '../Modal';

const submitForm = (e, username, submitFunc) => {
  e.preventDefault();
  const title = e.target[0].value;
  const dateVal = e.target[1].value;
  const amount = e.target[2].value;
  const description = e.target[3].value;
  submitFunc(username, {
    title,
    date: new Date(dateVal),
    // TODO: get actual type
    type: 'donation',
    description,
    amount,
  });
};

export const AddEventControls = ({ username, addEvent }) =>
  <div className="event-controls">
    <Modal id="modal" title="Add Donation">
      {/* TODO: Render different form based on button clicked */}
      <form role="form" onSubmit={(e) => submitForm(e, username, addEvent)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" className="form-control" id="date" />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" min="1" step="any" className="form-control" id="amount" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textbox multiline className="form-control" id="description" />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </Modal>
    <Dropdown id="addItem" title="Add New" />
  </div>;

AddEventControls.propTypes = {
  addEvent: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default AddEventControls;
