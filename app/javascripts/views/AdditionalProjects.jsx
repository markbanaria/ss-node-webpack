var React = require('react');
var ProjectConfirmation = require('../components/ProjectConfirmation.jsx');
var Card = require('../components/common/Card.jsx');
var ProjectCard = require('../components/ProjectCard.jsx');
var ProjectSearch = require('../components/ProjectSearch.jsx');
var ListColumns = require('../components/ListColumns.jsx');
var Data = require('../data/categories.jsx');

var Router = require('react-router');
var Link = Router.Link;

var AdditionalProjects = React.createClass({

	render: function() {
		var style1 = {
			backgroundImage: 'url("assets/categories/homebuilding.jpg")',
			backgroundPosition: "50% 0"
		}
		var style2 = {
			backgroundImage: 'url("assets/categories/eventplanning.jpg")',
			backgroundPosition: "50% 0"
		}
		var style3 = {
			backgroundImage: 'url("assets/categories/seeall.jpg")'
		} 
		var desc1 = "Find cleaners contractors and other services to make your home better"
		var desc2 = "All the services you need in one place at an affordable price"
		var desc3 = "Browse through all categories and find what you need."

		return (
			<div className="AdditionalProjects">
				<ProjectConfirmation />
				<div className="section">
					<div className="row page-panel">
						<div className="large-12 columns">
							<h2 className="page-title">Have other projects in mind?</h2>
							<ProjectSearch />						
						</div>
					</div>
					<div className="row page-panel">
						<div className="large-12 columns">							
							<div className="row">
								<ProjectCard size="large-4" key="home" bgurl={style1}  link="homebuild"  title="Working on Your Home?" description={desc1} />
								<ProjectCard size="large-4" key="event" bgurl={style2} link="eventplan" title="Planning an Event?" description={desc2}/>
								<ProjectCard size="large-4" key="all" bgurl={style3} link="cats" title="Looking for something else?" description={desc3}/>
							</div>	
						</div>
					</div>	
				</div>
			</div>
		);
	}

});

module.exports = AdditionalProjects;