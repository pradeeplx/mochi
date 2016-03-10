'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const another = require('./another.js');
const SeanComp = require('./sean.js');

another.logstuff();

ReactDOM.render(
  <h1>
    Hello, world
    <SeanComp />
  </h1>,
  document.getElementById('root')
);
