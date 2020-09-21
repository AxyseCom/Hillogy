import React, { Component } from 'react';
import data from '../../JSON/data.json';

class HillStyleMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			display: "menu-cat-ul-hill"
		}
		this.showDetails = this.showDetails.bind(this);
		this.cssDisplayOn = this.cssDisplayOn.bind(this);
		this.windowLeave = this.windowLeave.bind(this);
	}

	showDetails(event){
		var clWidth = document.documentElement.clientWidth;

			if(this.state.display == "menu-cat-ul-hill"){
				this.setState({
					display: "menu-cat-ul-hill-on"
				});
			}else if(this.state.display == "menu-cat-ul-hill-on"){
				this.setState({
					display: "menu-cat-ul-hill"
				});
			}


		var name = event.target.id;
		var datar;

		switch(name) {
			case "hill-sh-index":
			datar = data.shirtHill;
			break;
			case "hill-hood-index":
			datar = data.hoodHill;
			break;
			case "hill-back-index":
			datar = data.backHill;
			break;
		}
		var items = datar;
		console.log(items)
		return this.props.setBkgClass("hill-style-box"),
			   this.props.setAddListButton(true),
			   this.props.setDataProd(items);

	}

	windowLeave() {
		this.setState({
					display: "menu-cat-ul-hill"
				});
	}

	cssDisplayOn() {
		var clWidth = document.documentElement.clientWidth;

			if(this.state.display == "menu-cat-ul-hill"){
				this.setState({
					display: "menu-cat-ul-hill-on"
				});
			}else if(this.state.display == "menu-cat-ul-hill-on"){
				this.setState({
					display: "menu-cat-ul-hill"
				});
			}
	}


	render() {
		return(
			<div className="col-md-4 mn-element-hill-box" onMouseLeave={this.windowLeave}>
				<div id="mn-element-hill" onMouseEnter={this.cssDisplayOn}										   
										  onClick={this.cssDisplayOn}>
						<h3>Hill</h3>
				</div>
				<ul id={this.state.display} >
					<li><button onClick={this.showDetails}
								id="hill-sh-index">t-shirt</button>
					</li>
					<li><button onClick={this.showDetails}
								id="hill-hood-index">hoodie</button>
					</li>
					<li><button onClick={this.showDetails}
								id="hill-back-index">caps</button>
					</li>
					<li><button onClick={this.showDetails}
								id="hill-shoes-index">shoes</button>
					</li>
				</ul>
			</div>	
		);
	}
}
export default HillStyleMenu;