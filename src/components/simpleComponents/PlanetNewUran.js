import React, { Component } from 'react';


class PlanetNewUran extends Component {
	render() {
		return(
			
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg col-md"><div className="sputnik" id="left-one"></div></div>
                <div className="col-lg col-md"><div className="sputnik" id="left-two"></div></div>
                <div className="col-lg col-md"><div className="sputnik" id="left-three"></div></div>
                <div >
					<div className="planetBox">
              			<div className="ring-one-front"></div>
              			<div className="ring-one-back"></div>
              			<div className="ring-two-front"></div>
              			<div className="ring-two-back"></div>
              			<div className="ring-three-front"></div>
              			<div className="ring-three-back"></div>
              			<div className="planetUr" id="ur"></div>
            		</div>
                </div>
                <div className="col-lg col-md"><div className="sputnik" id="right-one"></div></div>
                <div className="col-lg col-md"><div className="sputnik" id="right-two"></div></div>
                <div className="col-lg col-md"><div className="sputnik" id="right-three"></div></div>
              </div>
            </div>
		);
	}
}

export default PlanetNewUran;