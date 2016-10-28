import React, {Component} from 'react';
import {connect} from 'react-redux';
import {UnSelectNumber} from '../../actions/play_nine_actions';

class Answers extends Component {

	render(){
		let unSelectedNumber = this.props.UnSelectNumber
		let props;
		let selectedNumbers = this.props.playnine.selectedNumbers.map(function(i){
			return (
			<span key={i} 
			onClick={() => unSelectedNumber(i)}	
			>
				{i}
			</span>
			);
		})

		return(
		<div id="answer-frame">
			<div className="well">
				{selectedNumbers}
			</div>
		</div>
		)
	}
}


function mapStateToProps(state){
	return {
		playnine: state.playnine
	}
}

export default connect(mapStateToProps, {UnSelectNumber})(Answers);
