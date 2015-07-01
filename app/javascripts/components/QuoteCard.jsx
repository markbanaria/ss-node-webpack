var React = require('react');
var Card = require('./common/Card.jsx');

var QuoteCard = React.createClass({

	render: function() {
		return (
			<div className="QuoteCard">
				<Card>
					<div className="row main-panel break-end">
						<div className="large-2 columns">
							<img src={this.props.image} />
						</div>
						<div className="large-7 columns">
							<h3 className="compress">{this.props.company}</h3>
							<h5 className="compress name">{this.props.rep}</h5>
							<h5 className="compress">
								<i className="fa fa-phone" />
								{this.props.contact}
							</h5>
						</div>
						<div className="large-3 columns">
							<h1 className="compress">{this.props.rate}</h1>
							<h5 className="compress cost-detail">Inc GST</h5>
						</div>
					</div>
					<div className="row gray-panel-1 control-panel">
						<div className="large-8 columns">
							<a className="controls">
								<i className="fa fa-envelope" />
								Messages
								<span className="notification">5</span>
							</a>
						</div>
						<div className="large-4 columns">
							<a className="controls right">
								<i className="fa fa-trash" />
								Discard Quote
							</a>
						</div>
					</div>
				</Card>
			</div>
		);
	}

});

module.exports = QuoteCard;