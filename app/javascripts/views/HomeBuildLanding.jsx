var React = require('react');
var Banner = require('../components/Banner.jsx');
var MenuButton = require('../components/common/MenuButton.jsx');
var ProjectSearch = require('../components/ProjectSearch.jsx');
var ButtonGroupButton = require('../components/common/ButtonGroupButton.jsx');
var ListColumns = require('../components/ListColumns.jsx');
var QuickPost = require('../components/QuickPost.jsx');
var CategoryCard = require('../components/CategoryCard.jsx');
var Data = require('../data/categories.jsx');

var HomeBuildLanding = React.createClass({
	getInitialState: function() {
		return {
			sorting: "Name" 
		};
	},

	handleClick: function(name) {
		this.setState({
			sorting: name
		})
	},

	render: function() {
		var categorySets = [];
		var setLength = 15
		var categoryNames = []
		var categoryLinks = []
		var industries = ["Construction", "Equipment", "Cleaning"];

		industries.sort()
		Data.categories.forEach(function(item) {
			if(item.industry=="Construction"||item.industry=="Equipment"||item.industry=="Cleaning") {
				categoryNames.push(item.name);
			}
		});
		categoryNames.sort();
		var setCount = Math.ceil(categoryNames.length/setLength);

		if(this.state.sorting == "Name") {
			for(i=0;i<setCount;i++) {
				if(i==setCount-1) {
					categorySets.push(categoryNames.slice(setLength*i, Data.categories.length))
				}
				else {
					categorySets.push(categoryNames.slice(setLength*i, setLength*(i+1)))					
				}
			}			
		} else {
			industries.forEach(function(item) {
				var currentObject = {
					title: item,
					content: []
				};
				Data.categories.forEach(function(object) {
					if(object.industry==item) {
						currentObject.content.push(object.name);
					}
				});
				categorySets.push(currentObject);
			})
		}

		var SortState = this.state.sorting

		if (SortState=="Name") {
			categorySets.forEach(function(item) {
				categoryLinks.push (
					<div className="row category-list page-panel" key={item[0] + " - " + item[item.length -1]}>
						<div className="large-12 columns">
							<hr className="compress" />
							<h3>{item[0] + " - " + item[item.length -1]}</h3>
							<ListColumns data={item} acnhorclass="blue" name={item[0]} />
						</div>
					</div>
				)
			}); 			
		} else {
			categorySets.forEach(function(item) {
				categoryLinks.push (
					<div className="row category-list page-panel" key={item.content[0] + " - " + item.content[item.length -1]}>
						<div className="large-12 columns">	
							<hr className="compress" />
							<h3>{item.title}</h3>
							<ListColumns data={item.content} acnhorclass="blue" name={item.content[0]} />
						</div>	
					</div>
				)
			}); 			
		}

		var suggestedCards = [];

		Data.categories.forEach(function(item) {
			var style = {
				backgroundImage: 'url("assets/categories/' + item.image + '.jpg")',
				backgroundPosition: "50% 0"
			}
			if(item.tag == "homeSuggested") {
				suggestedCards.push(
					<CategoryCard key={item.name} bgurl={style} title={item.name} />
				);
			}	
		});		

		return (
			<div className="HomeBuildLanding">
				<Banner title="Working on your home?" bgurl="assets/categories/homebuilding.jpg">
					<QuickPost placeholder1="What service do you need?" placeholder2="Where are you located?" />
				</Banner>
				<div className="section">
					<div className="row break-end">
						<div className="large-12 columns">
							<h3 className="break" >Popular Projects</h3>
						</div>
						{suggestedCards}	
					</div>
				</div>
				<div className="section gray-panel-2 break">
					<div className="row page-panel">
						<div className="large-12 columns">
							<h2 className="break-end" >Browse all categories for home design</h2>
						</div>
					</div>				
					<div className="row">
						<div className="large-5 medium-6 columns">
							<h5>Sorting:</h5>
							<ul className="button-group">
								<ButtonGroupButton name="Name" handleClick={this.handleClick} activeMember={this.state.sorting} />
								<ButtonGroupButton name="Industry" handleClick={this.handleClick} activeMember={this.state.sorting}/>
							</ul>
						</div>
						<div className="large-7  medium-6 columns">
							<div className="row">
								<div className="large-12 columns">
									<h5>Looking for something specific?</h5>
								</div>	
							</div>
							<div className="row break-end filter-group">
								<div className="large-12 columns">
									<ProjectSearch className="small" />
								</div>	
							</div>	
						</div>	
					</div>
				</div>
				<div className="section category-list">
					{categoryLinks}
				</div>
			</div>
		);
	}

});

module.exports = HomeBuildLanding;
