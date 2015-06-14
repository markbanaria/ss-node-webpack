var React = require('react');
var MenuButton = require('./common/MenuButton.jsx');
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({

	render: function() {
		return (
			<div className="Navbar">
				<div className="main section">
					<div className="row">
						<Link to="myjob">My Job</Link>
						<Link to="homebuild">Home Building</Link>
						<Link to="eventplan">Event Planning</Link>
					</div>
				</div>
				<div className="sub section">
					<div className="row">
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Navbar;