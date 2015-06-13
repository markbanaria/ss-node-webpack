var React = require('react');

var ReviewsCard = React.createClass({

	render: function() {
		var bgurl = {
			backgroundImage: "url('assets/users/" + this.props.bgurl  + ".jpg')"
		}
		return (
			<div className="ReviewsCard">
				<div className="large-6 small-12 columns content-box">
					<div className="row">
						<div className="large-3 medium-2 small-4 columns">
							<div className="review-pic" style={bgurl} />
						</div>
						<div className="large-9 small-8 columns">
							<h4>{this.props.title}</h4>
							<h5 className="light break-end" ><i className="fa fa-user" />{" " + this.props.name}</h5>
						</div>
						<div className="large-9 small-12 columns">						
							<p className="break-end">{this.props.content}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = ReviewsCard;