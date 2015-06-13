var React = require('react');
var TopProvider = require('../components/common/TopProvider.jsx');
var Card = require('../components/common/Card.jsx');
var ArticlePanel = require('../components/common/ArticlePanel.jsx');
var ListColumns = require('../components/ListColumns.jsx');
var ReviewsCard = require('../components/ReviewsCard.jsx');
var Data = require('../data/topProviders.jsx');
var catData = require('../data/categories.jsx');
var LocData = require('../data/locations.jsx');
var Reviews = require('../data/reviews.jsx');
var articlesData = require('../data/articles.jsx');

var Router = require('react-router');
var Link = Router.Link;

var SubCategories = React.createClass({

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
			<div className="SubCategories">			
				<div className="section">
					<div className="row page-panel title-panel">
						<div className="large-4 columns break">
							<div className="cover-img large-11 small-12" style={style} />
						</div>
						<div className="large-7 columns break break-end">
							<h1 className="compress">Wedding & Event Planners</h1>
							<h3 className="compress break-end">from 35$ per hour</h3>
							<p className="break break-end">
								From the invitations to the decorations, we have wedding & event planners who can take care of every single aspect of your wedding. Planning your perfect wedding is a stressful job, so you definitely need all the help you can get. Luckily, our experienced wedding & event planners are always ready to assist you in looking for the best wedding photographer, celebrant, hair and makeup artist, caterer, wedding dress designer, and many more. For pricing details, visit Cost of Wedding & Event Planners.
							</p>
							<a className="moss button full hover"><h4 className="reverse">Post a Job</h4></a>
						</div>
					</div>						
					<div className="row break break-end">
						<div className="large-12 columns blue break-end">
							<Card>
								<h4 className="break reverse">Services under Weddings & Events</h4>
								<ListColumns data={relatedServices} name="relatedServices" anchorclass="reverse" />
							</Card>								
						</div>
					</div>
					<div className="row	page-panel">
						<div className="large-12 columns">
							<hr className="compress" />
							<h3 className="break-end">Top Wedding & Event Planners</h3>
							{topcontent}
						</div>
					</div>
					<div className="row page-panel">
						<div className="large-12 columns break">
							<hr className="compress" />
							<h3 className="">Find Wedding & Event Planners near:</h3>
						</div>
					</div>
					<div className="row compress">
						<div className="large-3 columns">
							{LocLinks[1]}
							{LocLinks[2]}
						</div>
						<div className="large-3 columns">
							{LocLinks[3]}
							{LocLinks[4]}
						</div>
						<div className="large-3 columns">
							{LocLinks[5]}
							{LocLinks[6]}
						</div>
						<div className="large-3 columns">
							{LocLinks[7]}
						</div>
					</div>
					<div className="row page-panel break-end">
						<hr className="compress break" />
						<h3 className="break-end">Latest Reviews</h3>
						{reviewsSet}						
					</div>
					<div className="row page-panel break-end">
						<hr className="compress break" />
						<h3 className="break-end">Related Articles</h3>
						{articles}						
					</div>
					<div className="row page-panel">
						<div className="large-12 columns">
							<hr className="break" />
							<h4>Related categories</h4>
							<ListColumns data={relatedCategories} name="relatedCategories" anchorclass="green" />
							<Link to="cats" className="button full cta moss hover" >View all Categories</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = SubCategories;