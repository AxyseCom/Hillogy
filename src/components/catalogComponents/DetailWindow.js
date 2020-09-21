import React, { Component } from 'react';

class DetailWindow extends Component {
	
	constructor(props) {
		super(props);
		this.closeWindow = this.closeWindow.bind(this);
	}

	closeWindow() {
		return this.props.setShowDetail(false);
	}

	render() {
		return(
			<div className="detail-window">
			<button className="closeWindow"
					onClick={this.closeWindow}>
				<i class="fas fa-times"></i>
			</button>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-5 col-md-5 det-box">
							
							<img src={this.props.dataSrc} alt=""/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DetailWindow;