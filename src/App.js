import React, { Component } from 'react';

import './App.css';



import StarterPage from './components/StarterPage'
import SpaceSection from './components/SpaceSection'
import WoodSection from './components/WoodSection'
import HillSection from './components/HillSection'





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkWindow: 0,
    };
    this.sectStarterOn = this.sectStarterOn.bind(this); 
    this.sectSpaceOn = this.sectSpaceOn.bind(this);
    this.sectWoodOn = this.sectWoodOn.bind(this);
    this.sectHillOn = this.sectHillOn.bind(this);
  }

  sectStarterOn() {
    setTimeout(() => this.setState({
      checkWindow: 0,
    }), 100)
  }

  sectSpaceOn() {
    setTimeout(() => this.setState({
      checkWindow: 1,
    }), 100)
  }

  sectWoodOn() {
    setTimeout(() => this.setState({
      checkWindow: 2,
    }), 100)
  }

  sectHillOn() {
    setTimeout(() => this.setState({
      checkWindow: 3
    }), 100)
  }
  
  

  render() {
    return(
        <div className="main">         
          <header id="header">
              <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-3 name-site"><h1 onClick={this.sectStarterOn}>Hillogy<p>wear</p></h1></div>
                  </div>
              </div>
            </header>
          <div class="content-style">
            <button onClick={this.sectSpaceOn} className="box-style toNext" href="#space-section" id="space-style"></button>
            <button onClick={this.sectWoodOn} className="box-style toNext" href="#wood-section" id="wood-style"></button>
            <button onClick={this.sectHillOn} className="box-style toNext" href="#ears-section" id="ears-style"></button>
            <p>Artyuga inc.</p>
          </div>
          {this.state.checkWindow == 0 ? <StarterPage  /> :
           this.state.checkWindow == 1 ? <SpaceSection /> :
           this.state.checkWindow == 2 ? <WoodSection  /> :
           this.state.checkWindow == 3 ? <HillSection  /> : null}         
        </div>      
    );
  }
}
export default App;