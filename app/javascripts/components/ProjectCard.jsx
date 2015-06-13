var React = require('react');
var Card = require('./common/Card.jsx');

var ProjectCard = React.createClass({

	render: function() {
		return (
			<div className="ProjectCard">
				<div className="large-4 columns">
					<div className="cat-thumb" style={this.props.style} />
					<Card color="blue">
						<h5 className="reverse head">{this.props.title}</h5>
						<p className="reverse">{this.props.description}</p>
					</Card>
					<button className="full moss hover">
						Read More
					</button>
				</div>
			</div>
		);
	}

});

module.exports = ProjectCard;