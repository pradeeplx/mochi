'use strict';

import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import NavItem from './NavItem';

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
  navItems: PropTypes.arrayOf(PropTypes.node),
};

SideBar.defaultProps = {
  navID: 'navbar',
  navItems: [
    <Link to="/">
      <span className="glyphicon glyphicon-home sidebar-icon"></span>
      Home
    </Link>,
    <Link to="/contacts">
      <span className="glyphicon glyphicon-user sidebar-icon"></span>
      Donors
    </Link>,
    <a>
      <span className="glyphicon glyphicon-globe sidebar-icon"></span>
      Campaigns
    </a>,
    <a>
      <span className="glyphicon glyphicon-cog sidebar-icon"></span>
      Settings
    </a>,
  ],
};

export default SideBar;
