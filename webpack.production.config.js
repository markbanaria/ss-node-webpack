var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', './javascripts/entry.jsx');
var bourbon = require('node-bourbon').includePaths;


var config = {
  
  // We change to normal source mapping, if you need them
  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath]}, 
      {test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + bourbon },
      {test: /\.jsx$/, loader: "jsx" },
      {test: /\.otf$/, loader: "url-loader?limit=8192" },
      {test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ]
  }
};

module.exports = config;
