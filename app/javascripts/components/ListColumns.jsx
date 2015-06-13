var React = require('react');

var ListColumns = React.createClass({

	render: function() {
		var setName = this.props.name
		var anchorclass = this.props.anchorclass;
		var array = []

		this.props.data.forEach(function(item) {
			array.push(
				<a className={anchorclass} key={item + "-" + setName}>{item}</a>
			)
		});
		
		var col2 = [];
		var col3 = [];

		c = array.length/3%1;

		var col1 = array.slice(0, Math.ceil(array.length/3));


		if(0<c<0.5) {
			col2 = array.slice(Math.ceil(array.length/3), array.length - Math.ceil(array.length/3));
		} else {
			col2 = array.slice(Math.ceil(array.length/3), array.length - Math.floor(array.length/3));			
		}

		if(c>0.5) {
			col3 = array.slice(Math.ceil(array.length/3) * 2);
		}	else if(c<0.5&&c>0) {
			col3 = array.slice(Math.floor(array.length/3) + Math.ceil(array.length/3));
		} else {
			col3 = array.slice(Math.ceil(array.length/3) * 2);
		} 

		return (
			<div className="ListColumns">
				<div className="row page-panel break-end">
					<div className="large-4 columns">
						{col1}
					</div>

					<div className="large-4 columns">
						{col2}
					</div>

					<div className="large-4 columns">
						{col3}
					</div>
				</div>	
			</div>
		);
	}

});

module.exports = ListColumns;