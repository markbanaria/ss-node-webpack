var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Navbar = require('./components/Navbar.jsx');
var Footer = require('./components/Footer.jsx');

var Index = React.createClass({

	render: function() {
		return (
			<div className="Index">				
				<Navbar activeView={Router.RouteHandler} />
				<RouteHandler />
				<Footer />
			</div>
		);
	}

});

module.exports = Index;