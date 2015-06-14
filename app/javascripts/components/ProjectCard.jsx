var React = require('react');
var Card = require('./common/Card.jsx');
var Router = require('react-router');
var Link = Router.Link;

var ProjectCard = React.createClass({

	render: function() {
		return (
			<div className="ProjectCard">
				<div className="large-6 medium-12 small-12 columns">
					<div className="cat-thumb" style={this.props.bgurl} />
					<Card color="blue">
						<h4 className="reverse head">{this.props.title}</h4>
						<p className="reverse">{this.props.description}</p>
					</Card>
					<Link className="hover" to={this.props.link}>Read More</Link>
				</div>
			</div>
		);
	}

});

module.exports = ProjectCard;