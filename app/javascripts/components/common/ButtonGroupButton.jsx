var React = require('react');

var ButtonGroupButton = React.createClass({
	handleClick: function() {
		this.props.handleClick(this.props.name);
	},

	render: function() {
		var isActive = "";
		if(this.props.activeMember == this.props.name) {
			isActive = "active ";
		} else { isActive = "";  }

		return (
			<div className="ButtonGroupButton">
				<li><a className={isActive + "button clear-blue hover"} onClick={this.handleClick} >{this.props.name}</a></li>
			</div>
		);
	}

});

module.exports = ButtonGroupButton;