'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  debug: true,
  context: path.join(__dirname, '/client'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.join(__dirname, 'public'),
    hash: true,
    filename: '[name]-[hash].js',
    sourceMapFilename: '[file].map',
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.css$/i,
        loader: 'style!css!autoprefixer',
      },
      {
        test: /\.js(x)?$/i,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        loader: 'file?name=[path][name]-[sha512:hash:hex:7].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mochi',
      favicon: './assets/favicon.ico',
      chunks: ['app'],
      inject: false,
      template: './index-template.html',
    }),
    new CleanWebpackPlugin(['public'], {
      root: __dirname,
      verbose: true,
    }),
  ],
};
