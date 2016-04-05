'use strict';

import 'babel-polyfill';
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';

import './css/style.css';

ReactDOM.render(<Dashboard />, document.getElementById('app'));
