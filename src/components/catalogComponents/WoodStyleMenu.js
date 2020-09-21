import React, { Component } from 'react';
import data from '../../JSON/data.json';

class WoodStyleMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			display: "menu-cat-ul-wood"
		}
		this.showDetails = this.showDetails.bind(this);
		this.cssDisplayOn = this.cssDisplayOn.bind(this);
		this.windowLeave = this.windowLeave.bind(this);
	}

	showDetails(event){
		var clWidth = document.documentElement.clientWidth;

			if(this.state.display == "menu-cat-ul-wood"){
				this.setState({
					display: "menu-cat-ul-wood-on"
				});
			}else if(this.state.display == "menu-cat-ul-wood-on"){
				this.setState({
					display: "menu-cat-ul-wood"
				});
			}


		var name = event.target.id;
		var datar;

		switch(name) {
			case "wood-sh-index":
			datar = data.shirtWood;
			break;
			case "wood-hood-index":
			datar = data.hoodWood;
			break;
			case "wood-back-index":
			datar = data.backWood;
			break;
		}
		var items = datar;
		return this.props.setBkgClass("wood-style-box"),
			   this.props.setAddListButton(true),
			   this.props.setDataProd(items);

	}

	windowLeave() {
		this.setState({
					display: "menu-cat-ul-wood"
				});
	}

	cssDisplayOn() {
		var clWidth = document.documentElement.clientWidth;

			if(this.state.display == "menu-cat-ul-wood"){
				this.setState({
					display: "menu-cat-ul-wood-on"
				});
			}else if(this.state.display == "menu-cat-ul-wood-on"){
				this.setState({
					display: "menu-cat-ul-wood"
				});
			}
	}


	render() {
		return(
			<div className="col-md-4 mn-element-wood-box" onMouseLeave={this.windowLeave}>
				<div id="mn-element-wood" onMouseEnter={this.cssDisplayOn}									   
										  onClick={this.cssDisplayOn}>
					<h3>Wood</h3>
				</div>
				<ul id={this.state.display}  >
					<li><button onClick={this.showDetails}
								id="wood-sh-index">T-shirt</button>
					</li>
					<li><button onClick={this.showDetails}
								id="wood-hood-index">Hoodie</button>
					</li>
					<li><button onClick={this.showDetails}
								id="wood-back-index">Backs</button>
					</li>
				</ul>
			</div>	
		);
	}
}
export default WoodStyleMenu;