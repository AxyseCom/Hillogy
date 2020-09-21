import React, { Component } from 'react';
import '../App.css';

import CatalogMenu from '../components/catalogComponents/CatalogMenu'
import CatalogWindow from '../components/catalogComponents/CatalogWindow'

import userInfo from '../reducers/info';
import { connect } from "react-redux";
import setAddBkgAct from '../actions/AddBkgAct';
import setAddListBtnAct from '../actions/AddListBtnAct'
import setDataProdAct from '../actions/DataProdAct'
import setDataSrcAct from '../actions/DataSrcAct'
import setShowDetailAct from '../actions/DataShowDetAct'


class Catalog extends React.Component {
	
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<div id="catalog">
			<CatalogMenu setBkgClass={this.props.addBkgFunc}
						 setAddListButton={this.props.addListBtnFunc}
						 setDataProd={this.props.addDataProdFunc} />
			<CatalogWindow nameClass={this.props.nameClass}
						   toShowListBtn={this.props.toShowListBtn} 
						   dataProd={this.props.dataProd}
						   setDataSrc={this.props.addDataSrcFunc}
						   dataSrc={this.props.dataSrc}
						   setShowDetail={this.props.addShowDetailFunc}
						   dataBool={this.props.dataBool} />	
		</div>
    );
  }
}

function mapStateToProps(state) {
	return{
		nameClass: state.userInfo.nameClass,
		toShowListBtn: state.userInfo.toShowListBtn,
		dataProd: state.userInfo.dataProd,
		dataSrc: state.userInfo.dataSrc,
		dataBool: state.userInfo.dataBool
	}
}

function mapDispatchToProps(dispatch) {
	return{
		addBkgFunc: nameClass => {
			dispatch(setAddBkgAct(nameClass))
		},
		addListBtnFunc: toShowListBtn => {
			dispatch(setAddListBtnAct(toShowListBtn))
		},
		addDataProdFunc: dataProd => {
			dispatch(setDataProdAct(dataProd))
		},
		addDataSrcFunc: dataSrc => {
			dispatch(setDataSrcAct(dataSrc))
		},
		addShowDetailFunc: dataBool => {
			dispatch(setShowDetailAct(dataBool))
		},
	}
}

export default connect (mapStateToProps,mapDispatchToProps)(Catalog);