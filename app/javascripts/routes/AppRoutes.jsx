//react
var React = require('react');

//Route dependencies
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

//views
var Index = require('../Index.jsx');
var Home = require('../views/Home.jsx');
var AdditionalProjects = require('../views/AdditionalProjects.jsx');
var Categories = require('../views/Categories.jsx');
var SubCategories = require('../views/SubCategories.jsx');
var Search = require('../views/Search.jsx');
var MyJob = require('../views/MyJob.jsx');
var HomeBuildLanding = require('../views/HomeBuildLanding.jsx');
var EventPlanLanding = require('../views/EventPlanLanding.jsx');
var QuoteMail = require = ('../views/QuoteMail.jsx');

var routes = (
	<Route path="/" handler={Index}>
		<DefaultRoute handler={HomeBuildLanding}/>
		<Route name="home" path="home" handler={Home}/>
		<Route name="addproj" path="addproj" handler={AdditionalProjects}/>
		<Route name="cats" path="cats" handler={Categories}/>
		<Route name="subcats" path="subcats" handler={SubCategories}/>
		<Route name="search" path="search" handler={Search}/>
		<Route name="myjob" path="myjob" handler={MyJob}/>
		<Route name="homebuild" path="homebuild" handler={HomeBuildLanding}/>
		<Route name="eventplan" path="eventplan" handler={EventPlanLanding}/>
		<Route name="quotemail" path="quotemail" handler={QuoteMail}/>
	</Route>
);

module.exports = routes;