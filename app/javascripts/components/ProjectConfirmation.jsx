var React = require('react');

var ProjectConfirmation = React.createClass({

	render: function() {
		return (
			<div className="ProjectConfirmation">
				<div className="section moss">
					<div className="row">
						<div className="large-4 columns">
							<img className="success-icon" src="assets/success-icon.png" />
						</div>
						<div className="large-7 end columns">
							<h1 className="page-title reverse">You have successfully posted a Weddings job!</h1>
							<h4 className="reverse">We will get back to you as soon a a provider quotes your project. You may browse below for other projects you might be interested in.</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = ProjectConfirmation;