import React, { PropTypes } from 'react';
import DonorTable from '../components/DonorTable';
import Button from '../components/Button/Button';
import Modal from '../components/Modal';
import Link from 'react-router/lib/Link';

export const Donors = ({ users, actions }) =>
  // TODO make these controls a component
  <div className="col-md-7 col-md-offset-1 main donors">
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search for..." />
      <span className="input-group-btn">
        <Button className="btn btn-default" type="button">Search</Button>
        <Button
          className="btn btn-primary addDonor"
          type="button"
          toggle="modal"
          target="#addDonor-modal"
        >
          Add Donor
        </Button>
      </span>
    </div>
    <DonorTable users={users} fetchAllUsers={actions.fetchAllUsers} />

    <Modal id="addDonor-modal" title="Add New Donor">
      {/* TODO: Render different form based on button clicked */}
      <form role="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <Link to="/donor/gpass1" className="btn btn-primary">Save</Link>
      </form>
    </Modal>
  </div>;

Donors.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.object,
};

export default Donors;
