import React, { PropTypes } from 'react';
import { AppContainer } from '../containers/AppContainer';

export const AppPage = ({ children }) =>
  <AppContainer>{children}</AppContainer>;

AppPage.propTypes = { children: PropTypes.any };

export default AppPage;
