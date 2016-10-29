import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';

//Components
import Stars from './stars';
import Button from './button';
import Answers from './answers';
import Numbers from './numbers';
import Done from './done';

//Actions
import {ChangeStars} from '../../actions/play_nine_actions';

class Game extends Component {

	constructor(props) {
		super(props)
	}

	render(){
		let numberOfStars = this.props.playnine.stars;
		let doneStatus = this.props.playnine.doneStatus;
		let bottomFrame;

		if(doneStatus) {
			bottomFrame = <Done doneStatus={doneStatus}
			/>
		} else {
			bottomFrame = <Numbers />
		}
	
		return (
		<div>
			<h2>Play Nine</h2>
			<div className="clearfix">
	
				<Stars numberOfStars={numberOfStars}/>

				<Button />

				<Answers />
			</div>
			{bottomFrame}
		</div>
		)
	}
}


function mapStateToProps(state){
	return {
		playnine: state.playnine
	};
}


export default connect(mapStateToProps, {ChangeStars})(Game);