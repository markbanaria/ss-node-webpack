var React = require('react');
var MenuButton = require('../components/common/MenuButton.jsx');
var ProjectSearch = require('../components/ProjectSearch.jsx');
var ButtonGroupButton = require('../components/common/ButtonGroupButton.jsx');
var ListColumns = require('../components/ListColumns.jsx');
var Data = require('../data/categories.jsx');

var Categories = React.createClass({
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
		var setCount = Math.ceil(Data.categories.length/setLength);
		var categoryNames = []
		var categoryLinks = []
		var industries = ["Events", "Travel", "Construction", "Recreation", "Business", "Security", "Equipment", "Other", "Health", "Creative"];

		industries.sort()
		Data.categories.forEach(function(item) {
			categoryNames.push(item.name);
		});
		categoryNames.sort();

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
							<h2>{item[0] + " - " + item[item.length -1]}</h2>
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
							<h2>{item.title}</h2>
							<ListColumns data={item.content} acnhorclass="blue" name={item.content[0]} />
						</div>	
					</div>
				)
			}); 			
		}


		return (
			<div className="Categories">
			<div className="section">
				<div className="row page-panel">
					<div className="large-12 columns">
						<h2>Browse Categories</h2>
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

module.exports = Categories;