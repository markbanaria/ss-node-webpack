//react dependencies
var React = require('react');
var Index = require('./Index.jsx');

//Route dependencies
var Router = require('react-router');

//Route map
var routes = require('./routes/AppRoutes.jsx');

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root />, document.getElementById('content'));
});

//foundation dependencies
require('jquery');
require('fastclick');

//styling
require('../stylesheets/style.scss');
