import React, {Component} from 'react';

class ListButton extends Component {

	constructor(props) {
		super(props);
		this.toDetails = this.toDetails.bind(this);
	}

	toDetails(event) {
		var dataSrc = event.target.src;
		return this.props.setDataSrc(dataSrc),
			   this.props.setShowDetail(true);
	}

	render() {
		const menu = this.props.dataProd;
		const items = menu.map((item, index) => {
					  return <div key={index} className="col-lg-3 col-md-3">
					  			<div className="product" >
									<img onClick={this.toDetails} src={item.src} alt="hello"/>
									<h3>{item.title}</h3>
					  			</div>
					  		 </div>;
							});
		return(
			<div className="list-products">

				<div className="container">
					<div className="row">{items}</div>
				</div>

			</div>
		);
	}
}

export default ListButton;