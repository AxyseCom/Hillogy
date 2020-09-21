import React, { Component } from 'react';
import data from '../../JSON/data.json';

class SpaceStyleMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			display: "menu-cat-ul-space"
		}
		this.showDetails = this.showDetails.bind(this);
		this.cssDisplayOn = this.cssDisplayOn.bind(this);
		this.windowLeave = this.windowLeave.bind(this);
	}


	showDetails(event){
		var clWidth = document.documentElement.clientWidth;

			if(this.state.display == "menu-cat-ul-space"){
				this.setState({
					display: "menu-cat-ul-space-on"
				});
			}else if(this.state.display == "menu-cat-ul-space-on"){
				this.setState({
					display: "menu-cat-ul-space"
				});
			}

		var name = event.target.id;
		var datar;

		switch(name) {
			case "space-sh-index":
			datar = data.shirtSpace;
			break;
			case "space-long-index":
			datar = data.longSpace;
			break;
			case "space-back-index":
			datar = data.backSpace;
			break;
		}
		var items = datar;
		console.log(items)
		return this.props.setBkgClass("space-style-box"),
			   this.props.setAddListButton(true),
			   this.props.setDataProd(items);

	}

	windowLeave() {
		this.setState({
					display: "menu-cat-ul-space"
				});
	}


	cssDisplayOn() {
		var clWidth = document.documentElement.clientWidth;

			if(this.state.display == "menu-cat-ul-space"){
				this.setState({
					display: "menu-cat-ul-space-on"
				});
			}else if(this.state.display == "menu-cat-ul-space-on"){
				this.setState({
					display: "menu-cat-ul-space"
				});
			}
	}


	render() {
		return(
			<div className="col-md-4 mn-element-space-box" onMouseLeave={this.windowLeave}  >
				<div id="mn-element-space" onMouseEnter={this.cssDisplayOn}
										   onClick={this.cssDisplayOn}>
						<h3>Space</h3>
				</div>
				<ul id={this.state.display} onMouseLeave={this.cssDisplayOnBigScreen}  >
					<li><button onClick={this.showDetails}
								id="space-sh-index">T-shirt</button>
					</li>
					<li><button onClick={this.showDetails}
								id="space-long-index">Long</button>
					</li>
					<li><button onClick={this.showDetails}
								id="space-back-index">Back</button>
					</li>
				</ul>
			</div>	
		);
	}
}
export default SpaceStyleMenu;