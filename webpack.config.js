var Webpack = require('webpack');
var path = require('path');
var appPath = path.resolve(__dirname, 'app');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var bourbon = require('node-bourbon').includePaths;

var config = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000', 
    'webpack/hot/dev-server', 
    path.resolve(appPath, './javascripts/entry.jsx')],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath]}, 
      {test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + bourbon },
      {test: /\.jsx$/, loader: "jsx-loader" },
      {test: /\.otf$/, loader: "url-loader?limit=8192" },
      {test: /\.png$/, loader: "url-loader?mimetype=image/png" }]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
