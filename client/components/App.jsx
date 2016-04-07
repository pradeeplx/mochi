import React, { PropTypes } from 'react';

export const AppPage = ({ children }) =>
  <div>{children}</div>;

AppPage.propTypes = { children: PropTypes.any };

export default AppPage;
