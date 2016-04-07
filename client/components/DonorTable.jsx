'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import DonorRow from '../components/DonorRow';

export const DonorTable = () =>
  <table className="table table-hover">
     <thead>
      <DonorRow />
     </thead>
     <tbody>
      <DonorRow />
      <DonorRow />
      <DonorRow />
     </tbody>
  </table>;

export default DonorTable;
