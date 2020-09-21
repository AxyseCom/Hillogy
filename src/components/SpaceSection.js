import React, { Component } from 'react';
import PlanetNewUran from './simpleComponents/PlanetNewUran'



class SpaceSection extends Component {

  constructor(props) {
    super(props);
  }
  
	render() {
		return(
			<section id="space-section">
            <PlanetNewUran />
            <div className="container space-colect-title">
              <h2>Spacer</h2>
              <p>The colection dedicated to an amazing space</p>
            </div>
            <div className="container img-space-shirt-container">
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <img src="../img/imgProd/imgSpace/shirtSpacer.png" alt=""/>
                </div>
                <div className="col-lg-9 col-md-9">
                  <p>Our t-shirts are manufactured with use of natural cotton.
                  Our t-shirts are manufactured with use of natural cotton.Our t-shirts are manufactured with use of natural cotton.
                  Our t-shirts are manufactured with use of natural cotton.Our t-shirts are manufactured with use of natural cotton.
                  </p>
                </div>
              </div>
            </div>
          </section>
		);
	}
}

export default SpaceSection;