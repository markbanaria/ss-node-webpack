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
		var suggestedCards = [];
		var relatedServices = Data.categories[0].relatedServices;
		relatedCategories = [];
		var relatedCategoriesSet = Data.categories.slice(0,12);

		Data.categories.forEach(function(item) {
			var style = {
				backgroundImage: 'url("assets/categories/' + item.image + '.jpg")'
			}
			if(item.tag == "suggested") {
				suggestedCards.push(
					<ProjectCard key={item.name} style={style} title={item.name} description={item.description} />
				);
			}	
		});

		relatedCategoriesSet.forEach(function(item) {
			relatedCategories.push(item.name);
		})

		relatedServices.sort();
		relatedCategories.sort();

		var catergoryActive = {
			backgroundImage: 'url("assets/categories/wedding-full.jpg")'
		}

		return (
			<div className="AdditionalProjects">
				<ProjectConfirmation />
				<div className="section">
					<div className="row page-panel">
						<div className="large-12 columns">
							<h2 className="page-title">Have other projects in mind?</h2>
							<ProjectSearch />
							<hr className="break" />
							<h4>Suggested for you</h4>						
						</div>
						{suggestedCards}
					</div>
					<div className="row page-panel relatedServices">
						<div className="large-12 columns break">
							<div className="cat-thumb full" style={catergoryActive}>
							</div>
							<div className="large-12 columns blue">
								<Card>
									<h4 className="break reverse">Other services under Weddings</h4>
									<ListColumns data={relatedServices} name="relatedServices" anchorclass="reverse" />
								</Card>								
							</div>
							<Link to="cats" className="button full cta alt-blue hover" >Learn More</Link>
						</div>
					</div>
					<div className="row page-panel">
						<div className="large-12 columns">
							<hr className="break" />
							<h4>Other related categories</h4>
							<ListColumns data={relatedCategories} name="relatedCategories" anchorclass="green" />
							<Link to="cats" className="button full cta moss hover" >View all Categories</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = AdditionalProjects;