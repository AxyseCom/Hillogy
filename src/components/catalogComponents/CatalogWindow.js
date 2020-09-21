import React, { Component } from 'react';
import ListButton from './ListButton';
import DetailWindow from './DetailWindow';

class CatalogWindow extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		var data = this.props.dataBool;
		console.log(data);
		return(
			<div className="container ">
				<div className="row">
					<div className="col-lg-12 col-md view-column">
						<div className={this.props.nameClass}>
						{	
							this.props.toShowListBtn == true ? 
							<ListButton dataProd={this.props.dataProd} 
										setDataSrc={this.props.setDataSrc}
										setShowDetail={this.props.setShowDetail} /> : 
							null
						}
						{
							data == true?
							<DetailWindow dataSrc={this.props.dataSrc}
										  setShowDetail={this.props.setShowDetail} />:
							null
						}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CatalogWindow;