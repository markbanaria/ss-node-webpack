var React = require('react');
var Card = require('./common/Card.jsx');

var CategoryCard = React.createClass({

	render: function() {
		return (
			<div className="CategoryCard">
				<div className="large-3 columns">
					<div className="cat-thumb" style={this.props.bgurl} />
					<Card color="blue">
						<h4 className="reverse head">{this.props.title}</h4>
					</Card>
				</div>				
			</div>
		);
	}

});

module.exports = CategoryCard;