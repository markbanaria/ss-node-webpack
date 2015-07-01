var React = require('react');
var Card = require('../components/common/Card.jsx');
var ProjectCard = require('../components/ProjectCard.jsx');
var QuoteCard = require('../components/QuoteCard.jsx');

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
							<a className="inline-alert">Quoting Closed</a>
						</div>
					</div>
					<div className="row break-end">
						<div className="large-3 columns">
							<Card color="gray-panel-2">
								<h5 className="titlebar">SORT</h5>
							</Card>							
							<Card color="gray-panel-1">
								<ul className="filter-list">
									<li className="head">
										<i className="fa fa-circle-o" />Best Price
									</li>
									<li className="head">
										<i className="fa fa-circle-o" />Closest
									</li>
									<li className="head">
										<i className="fa fa-circle-o" />Highest Rating
									</li>
									<li className="head">
										<i className="fa fa-circle-o" />Number of Reviews
									</li>
								</ul>	
							</Card>	
							<Card color="gray-panel-2">
								<h5 className="titlebar">FILTERS</h5>
							</Card>							
							<Card color="gray-panel-1">
								<ul className="filter-list">
									<li className="head">
										<i className="fa fa-square-o" />Recommended
									</li>
									<li className="head">
										<i className="fa fa-square-o" />Within 10 KM
									</li>
									<li className="head">
										<i className="fa fa-square-o" />Certified
									</li>
									<li className="head">
										<i className="fa fa-square-o" />100% Rating
									</li>
									<li className="head">
										<i className="fa fa-square-o" />More that 5 Reviews
									</li>
								</ul>	
							</Card>	
						</div>
						<div className="large-9 columns">
							<ul className="tabgroup break-end">
								<li className="tab active">2 Quotes</li>
								<li className="tab">3 Matches</li>
								<li className="tab">Job Details</li>
							</ul>
							<QuoteCard 
								company="Hemrock Construction Pty Ltd"
								rep="Rick Mahorn"
								contact="432-3245-2346"
								rate="$50"
								image="./assets/quotes/1.png"
							/>
							<QuoteCard 
								company="JT Construction Pty Ltd"
								rep="John Asby"
								contact="332-653-2346"
								rate="$78"
								image="./assets/quotes/2.png"
							/>
							<QuoteCard 
								company="JWA Construction Pty Ltd"
								rep="Tina Riley"
								contact="732-3245-2346"
								rate="$63"
								image="./assets/quotes/3.png"
							/>
							<Card color="gray-panel-1 break callout">
								<Card color="head">
									<h3 className="head">Have another project in mind?</h3>
								</Card>	
								<ProjectCard size="large-6" key="home" bgurl={style1}  link="homebuild"  title="Working on Your Home?" description={desc1} />
								<ProjectCard size="large-6" key="event" bgurl={style2} link="eventplan" title="Planning an Event?" description={desc2}/>
							</Card>	
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = MyJob;