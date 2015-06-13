var React = require('react');

var Banner = React.createClass({

	render: function() {
		var bgurl = {
			backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.6)), url('"+ this.props.bgurl + "')",
			backgroundSize: "cover" 
		}	

		return (
			<div className="Banner">
				<div className="section navy" style={bgurl} >
					<div className="row break-end">
						<div className="large-12 break columns">
							<h1 className="reverse">{this.props.title}</h1>
							<p className="banner-description reverse">{this.props.description}</p>
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Banner;