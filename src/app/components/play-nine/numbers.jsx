import React, {Component} from 'react';
import {connect} from 'react-redux';


import {SelectNumber} from '../../actions/play_nine_actions';


class Numbers extends Component {

	render(){
		let numbers = [];
		let className;
		let selectNumber;

		for(let i = 1; i <= 9; i++){
			numbers.push(
				<div key={i} className="number" 
				onClick={() => this.props.SelectNumber(i)}>
					{i}
				</div>
			);
		}

		return(
			<div id="numbers-frame">
				<div className="well">
					{this.props.playnine.selectedNumbers}
					{numbers}
					
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		playnine: state.playnine
	}
}

export default connect(mapStateToProps, {SelectNumber})(Numbers);

