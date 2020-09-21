import React, { Component } from 'react';
import { connect } from "react-redux"
import SpaceStyleMenu from './SpaceStyleMenu'
import WoodStyleMenu from './WoodStyleMenu'
import HillStyleMenu from './HillStyleMenu'



class CatalogMenu extends Component {
	
	constructor(props) {
		super(props);
	}


	
	render() {
		
		return(
			<div className="container">
				<div className="row">
					<SpaceStyleMenu setBkgClass={this.props.setBkgClass} 
									setAddListButton={this.props.setAddListButton} 
									setDataProd={this.props.setDataProd}/>
					<WoodStyleMenu 	setBkgClass={this.props.setBkgClass} 
							   		setAddListButton={this.props.setAddListButton}
							   		setDataProd={this.props.setDataProd}/>
					<HillStyleMenu 	setBkgClass={this.props.setBkgClass}
							   		setAddListButton={this.props.setAddListButton}
							   		setDataProd={this.props.setDataProd}/>
				</div>
			</div>
		);
	}
}



export default CatalogMenu;