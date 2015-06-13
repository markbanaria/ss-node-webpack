var React = require('react');

var ProjectSearch = React.createClass({

	render: function() {
		return (
			<div className="ProjectSearch">
				<div className={"row collapse " + this.props.className} >
					<div className="large-12 small-12 columns">
						<input type="text" placeholder="Search for your project or a related service" />
						<i className="fa fa-search" />
					</div>
				</div>				
			</div>
		);
	}

});

module.exports = ProjectSearch;