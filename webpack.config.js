'use strict';

const path = require('path');

module.exports = {
  context: path.join(__dirname, '/client'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
  },
  devtool: '#source-map',
  module: {
    loaders: [
        { test: /\.css$/,
          loader: 'style!css' },
        { test: /\.js(x)?$/,
          exclude: /node_modules/,
          loader: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
