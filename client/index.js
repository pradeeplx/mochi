'use strict';

import 'babel-polyfill';
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import store from './store';
import Root from './containers/Root';

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);
