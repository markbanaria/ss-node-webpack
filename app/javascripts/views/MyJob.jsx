var React = require('react');
var Card = require('../components/common/Card.jsx');
var ProjectCard = require('../components/ProjectCard.jsx');

var MyJob = React.createClass({

	render: function() {
		var style1 = {
			backgroundImage: 'url("assets/categories/homebuilding.jpg")',
			backgroundPosition: "50% 0"
		}
		var style2 = {
			backgroundImage: 'url("assets/categories/eventplanning.jpg")',
			backgroundPosition: "50% 0"
		}
		var desc1 = "Find cleaners contractors and other services to make your home better"
		var desc2 = "All the services you need in one place at an affordable price"
		return (
			<div className="MyJob">
				<div className="section">
					<div className="row break-end">
						<div className="large-12 columns break">
							<h2 className="compress">Office Cleaning Job</h2>
							<a>View other jobs</a>
						</div>
					</div>
					<div className="row break-end">
						<div className="large-3 columns">
							<Card color="gray-panel-1">
								<h5 className="head">JOB DETAILS</h5>
								<p className="head">	
									<span className="item-label">Customer Name: </span> Dimitri<br/>
									<span className="item-label">Location: </span> Annadale, NSW, 2038<br/>
									<span className="item-label">Property Type: </span> Commercial<br/>
									<span className="item-label">Job Size: </span> Medium<br/>
								</p>
								<p className="head">	
									<span className="item-label">Additional Tasks</span><br/>
									Furniture Removal<br/>
								</p>	
							</Card>	
						</div>
						<div className="large-9 columns">
							<Card color="gray-panel-1">
								<Card>
									<h5 className="head">You have 0 quotes for this project</h5>
									<h4 className="break">While waiting for quotes, would you have another project in mind?</h4>
								</Card>	
								<ProjectCard key="home" bgurl={style1}  link="homebuild"  title="Working on Your Home?" description={desc1} />
								<ProjectCard key="event" bgurl={style2} link="eventplan" title="Planning an Event?" description={desc2}/>
							</Card>	
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = MyJob;