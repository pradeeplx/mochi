'use strict';

import React, { PropTypes } from 'react';
import Button from './Button';
import DropdownItem from './DropdownItem';

export const Dropdown = ({ id, title }) => (
  <div className="dropdown">
    <Button className="btn btn-primary dropdown-toggle" type="button" id={id}>
      {title} &nbsp;
      <span className="caret"></span>
    </Button>
    <ul className="dropdown-menu">
      <DropdownItem link="#" toggle="modal" target="#modal">Donation</DropdownItem>
      <DropdownItem link="#" toggle="modal" target="#modal">Event</DropdownItem>
      <DropdownItem link="#" toggle="modal" target="#modal">Note</DropdownItem>
    </ul>
  </div>
);

Dropdown.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Dropdown;
