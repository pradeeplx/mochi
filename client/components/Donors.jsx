'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import DonorTable from '../components/DonorTable';
import Button from '../components/Button/Button';
import Dropdown from '../components/Button/Dropdown';

export const Donors = () =>
  <div className="col-md-7 col-md-offset-1 main donors">
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search for..." />
      <span className="input-group-btn">
        <Button className="btn btn-default" type="button">Go!</Button>
      </span>
    </div>
    <DonorTable />
  </div>;

export default Donors;
