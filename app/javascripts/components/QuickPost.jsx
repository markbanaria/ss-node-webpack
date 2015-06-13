var React = require('react');
var Card = require('./common/Card.jsx');

var QuickPost = React.createClass({

	render: function() {
		return (
			<div className="QuickPost">
				<div className="row">
					<div className="large-12 columns">
						<Card color="gray-panel-1">
							<div className="large-4 columns">
								<input type="text" placeholder={this.props.placeholder1} />
							</div>
							<div className="large-4 columns">	
								<input type="text" placeholder={this.props.placeholder2} />
							</div>
							<div className="large-4 columns">	
								<a className="button blue hover">Post a Job</a>
							</div>
						</Card>
					</div>	
				</div>
			</div>
		);
	}

});

module.exports = QuickPost;