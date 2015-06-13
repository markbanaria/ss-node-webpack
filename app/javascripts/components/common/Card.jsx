var React = require('react');

var Card = React.createClass({

	render: function() {
		return (
			<div className="Card">
				<div className={this.props.color + " large-12 columns card-content"}>
					{this.props.children}
				</div>	
			</div>
		);
	}

});

module.exports = Card;