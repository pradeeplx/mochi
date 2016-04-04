'use strict';

import React, { PropTypes } from 'react';
import NavItem from './NavBar/NavItem';

export class SideBar extends React.Component {
  getNavItems() {
    const { navItems } = this.props;
    return navItems.map((item, index) => <NavItem key={index}>{item}</NavItem>);
  }

  render() {
    return (
      <section id="react-sidebar">
        <div className="col-md-1 sidebar">
          <ul className="nav nav-sidebar">
            {this.getNavItems()}
          </ul>
        </div>
      </section>
    );
  }
}

SideBar.propTypes = {
  navID: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.string),
};

SideBar.defaultProps = {
  navID: 'navbar',
  navItems: [
    'Dashboard',
    'Settings',
    'Profile',
    'Help',
  ],
};

export default SideBar;
