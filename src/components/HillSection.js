import React, { Component } from 'react';

import EarsStyle from './simpleComponents/EarsStyle'



class HillSection extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      start: false
    };
    this.starter = this.starter.bind(this);
  }

  starter() {
    this.setState({
      start: true
    });
  }
	render() {
		return(
			<section id="hill-section">
            
      </section>
		);
	}
}

export default HillSection;