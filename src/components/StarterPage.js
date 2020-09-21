import React, { Component } from 'react'

import EarsStyle from './simpleComponents/EarsStyle'
import Catalog from '../containers/Catalog'

class StarterPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			startCatalog: false,
		}
		this.startCatalogOn = this.startCatalogOn.bind(this);
	}

	startCatalogOn() {
		this.setState({
			startCatalog: true,
		})
	}
	
	
	render() {
		return(
			<div>
				{this.state.startCatalog ?
				 <Catalog /> :
				<div>
					<EarsStyle startCatalog={this.startCatalogOn}/>
						<div className="str-title">
							<h2>Welcome to the creative</h2>
							<hr/>
							<p>We have been making these styles almost 2 years and glad to present for you!</p>
						<div className="logo-hlg"><a href="https://vk.com/artiuga" target="_blank" title="vk Artyuga"></a></div>
				</div>
				</div>}
			</div>
		);
	}
}

export default StarterPage;