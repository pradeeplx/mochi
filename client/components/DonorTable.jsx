'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import DonorRow from '../components/DonorRow';
import Button from '../components/Button/Button';

export const DonorTable = () =>
	<div>
	  <div className="input-group">
	    <input type="text" className="form-control" placeholder="Search for..." />
	    <span className="input-group-btn">
	      <button className="btn btn-default" type="button">Go!</button>
	    </span>
	  </div>
		<table className="table">
		    <thead>
		    	<DonorRow />
		    </thead>
		    <tbody>
		    	<DonorRow />
		    	<DonorRow />
		    	<DonorRow />
		    </tbody>
		</table>
	</div>;

export default DonorTable;
