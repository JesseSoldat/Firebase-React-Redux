import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Restart} from '../../actions/play_nine_actions';

class Done extends Component {
	render(){
		return (
		<div className="well text-center">
			<h2>{this.props.playnine.doneStatus}</h2>
			<button className="btn btn-default"
				onClick={this.props.Restart}>
				Play Again
			</button>
		</div>
		);
	}
}

function mapStateToProps(state){
	return {
		playnine: state.playnine
	}
}

export default connect(mapStateToProps, {Restart})(Done);