'use strict';

import 'babel-polyfill';
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import UserProfile from './pages/UserProfile';

import './css/style.css';

ReactDOM.render(<UserProfile />, document.getElementById('app'));
