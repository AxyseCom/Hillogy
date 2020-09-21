import React, { Component } from 'react';


class EarsStyle extends Component {

  constructor(props) {
    super(props);
    this.startOn = this.startOn.bind(this);
  }

  startOn() {
    this.props.startCatalog();
  }

	render() {
		return(
			<div className="start-block">
          <div className="mainBox">
            <div className="planet">
              <button onClick={this.startOn}>go</button>
              <div className="shadow"></div>
              <div className="ocen1"></div>
              <div className="ocen2"></div>
              <div className="antarctida"></div>
              <div className="oblako1"></div>
              <div className="oblako2"></div>
              <div className="oblako3"></div>
              <div className="oblako4"></div>
            </div>
            <div className="sun"></div>
            <div className="star"></div>
            <div className="star2"></div>
          </div>   
      </div>
		);
	}
}

export default EarsStyle;