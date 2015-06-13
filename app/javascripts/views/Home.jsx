var React = require('react');

var Home = React.createClass({

	render: function() {
		return (
			<div className="Home">
				<div className="section">
					<div className="row page-panel break-end">
						<h1 className="break-end">Summary</h1>
						<hr className="compress break" />
						<h3 className="compress break-end">Key Considerations</h3>
						<p className="compress"><strong>For the User: </strong> Encourage user to visit events and building pages and find other services they need</p>
						<p className="compress"><strong>For the Website: </strong> Create landing pages with callouts to pages containing the categories and services</p>
						<p className="compress"><strong>For the Data Structure:</strong> Establish heirarchy; Categories -> Services (Subcategory) -> Service Providers</p>	
						<p className="compress"><strong>For the Design:</strong> Help the user distinguish between the different types of links (category, service type, service provider and article) and pages</p>					
					</div>
					<div className="row page-panel break-end">
						<hr className="compress break" />
						<h3 className="compress break-end">Page Mockups</h3>
						<h5>Additional Projects<br/></h5>
						<p className="compress">1. A confirmation that a project has been posted</p>
						<p className="compress">2. A search bar the returns results for categories, servies, service providers and articles (see: Search Results page)</p>
						<p className="compress">3. Callout panels that link to categories that are most appropriate for the user</p>
						<p className="compress">4. A full panel that link to other <b>services</b> in the same category of the posted job</p>
						<p className="compress break-end">5. A list of <b>categories</b> that are related to the category of the posted job</p>

						<h5>Category List<br/></h5>
						<p className="compress">1. Sort buttons that arrange the categories according to industry or name</p>						
						<p className="compress">2. A search bar the returns results for categories, servies, service providers and articles (see: Search Results page)</p>
						<p className="compress break-end">3. Categories sorted into small panels. Makes it easy for the user to index through the entire list and find what they need</p>	

						<h5>Category Page<br/></h5>
						<p className="compress">1. Title, description, Call to Acction</p>
						<p className="compress">2. Services under the category (Subcategory)</p>				
						<p className="compress">3. Top Service Providers</p>
						<p className="compress">4. Reviews</p>
						<p className="compress">5. Articles</p>
						<p className="compress break-end">6. Related Categories</p>	

						<h5>Search Results Page<br/></h5>
						<p className="compress">1. Search Parameters</p>
						<p className="compress">2. Search Bar</p>
						<p className="compress">3. Services (Subcategories)</p>
						<p className="compress">4. Providers</p>
						<p className="compress">5. Categories</p>
						<p className="compress">6. Articles</p>
					</div>
				</div>	
			</div>
		);
	}

});

module.exports = Home;