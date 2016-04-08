'use strict';

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Dropdown from '../../components/Button/Dropdown';
import Modal from '../Modal';

export class AddEventControls extends React.Component {
  renderModal() {
    /* TODO: Render different form based on button clicked */
    return;
  }
  render() {
    return (
      <div className="event-controls">
        <Modal id="modal" title="Add Donation">
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
        <Dropdown id="addItem" title="Add New" />
      </div>
    );
  }
}

export default AddEventControls;
