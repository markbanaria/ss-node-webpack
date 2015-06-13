var React = require('react');
var TopProvider = require('../components/common/TopProvider.jsx');
var Card = require('../components/common/Card.jsx');
var ArticlePanel = require('../components/common/ArticlePanel.jsx');
var ListColumns = require('../components/ListColumns.jsx');
var ReviewsCard = require('../components/ReviewsCard.jsx');
var ProjectSearch = require('../components/ProjectSearch.jsx');
var Data = require('../data/topProviders.jsx');
var catData = require('../data/categories.jsx');
var LocData = require('../data/locations.jsx');
var Reviews = require('../data/reviews.jsx');
var articlesData = require('../data/articles.jsx');

var Router = require('react-router');
var Link = Router.Link;

var Search = React.createClass({

	render: function() {
		var style = {
			backgroundImage: 'url("assets/categories/cake design.jpg")'
		}

		var topcontent = [];
		Data.topProviders.forEach(function(item) {
			var style = {
				backgroundImage: 'url("assets/categories/'+ item.image + '")'
			}
			topcontent.push(
				<TopProvider key={item.name} title={item.name} details={item.details} description={item.description} bgurl={style} />	
			);
		});

		var articles = [];
		articlesData.articles.forEach(function(item) {
			var style = {
				backgroundImage: 'url("assets/articles/'+ item.image + '")'
			}
			articles.push(
				<ArticlePanel key={item.name} title={item.name} details={item.details} description={item.description} bgurl={style} />	
			);
		});

		var LocLinks = [];
		var currentArray = [];
		LocData.locations.forEach(function(item) {
			if(LocData.locations.indexOf(item)==0||(LocData.locations[LocData.locations.indexOf(item)-1].state!=item.state)) {
				LocLinks.push(currentArray);
				currentArray = [];
				currentArray.push(<h5 className="break" key={"h5" + item.state}>{item.state}</h5>)
				currentArray.push(<a  key={"a" + item.city}>{item.city}<br/></a>)
			} else {
				currentArray.push(<a key={"a" + item.city}>{item.city}<br/></a>)
			}
		});

		var reviewsSet = [];
		Reviews.forEach(function(item) {
			reviewsSet.push(
				<ReviewsCard key={item.title} name={item.name} title={item.title} content={item.content} bgurl={item.image} />
			)
		});

		relatedCategories = [];
		var relatedCategoriesSet = catData.categories.slice(0,12);
		relatedCategoriesSet.forEach(function(item) {
			relatedCategories.push(item.name);
		});

		var relatedServices = catData.categories[0].relatedServices;		
		return (
			<div className="Search">
				<div className="section">
					<div className="row page-panel">
						<div className="large-12 columns break">
							<ProjectSearch />
							<h1>Search Results for Events</h1>
						</div>
					</div>					
					<div className="row break break-end">
						<div className="large-12 columns blue break-end">
							<Card>
								<h4 className="break reverse">Services under Weddings & <b>Events</b></h4>
								<ListColumns data={relatedServices} name="relatedServices" anchorclass="reverse" />
							</Card>								
						</div>
					</div>
					<div className="row	page-panel">
						<div className="large-12 columns">
							<hr className="compress" />
							<h3 className="break-end">Top Wedding & <b>Event</b> Planners</h3>
							{topcontent}
						</div>
					</div>
					<div className="row page-panel break-end">
						<hr className="compress break" />
						<h3 className="break-end">Articles related to <b>Events</b></h3>
						{articles}						
					</div>
					<div className="row page-panel">
						<div className="large-12 columns">
							<hr className="break" />
							<h4>Categories related to <b>Events</b></h4>
							<ListColumns data={relatedCategories} name="relatedCategories" anchorclass="green" />
							<Link to="cats" className="button full cta moss hover" >View all Categories</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Search;