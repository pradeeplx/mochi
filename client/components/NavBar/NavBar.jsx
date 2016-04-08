'use strict';

import React, { PropTypes } from 'react';
import NavItem from './NavItem';
import NavToggle from './NavToggle';
import Link from 'react-router/lib/Link';

export class NavBar extends React.Component {
  getNavItems() {
    const { navItems } = this.props;
    return navItems.map((item, index) => <NavItem key={index}>{item}</NavItem>);
  }

  render() {
    const { navID, brandName } = this.props;

    return (
      <header id="react-navbar">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavToggle target={navID} />
              <Link to="/"><span className="navbar-brand">{brandName}</span></Link>
            </div>
            <div id={navID} className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                {this.getNavItems()}
              </ul>
            </div>
          </div>
        </nav>
      </header>);
  }
}

NavBar.propTypes = {
  navID: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.object),
  brandName: PropTypes.string,
};

NavBar.defaultProps = {
  brandName: 'Mochi',
  navID: 'navbar',
  navItems: [],
};

export default NavBar;
