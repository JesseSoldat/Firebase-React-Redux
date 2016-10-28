import React, {Component} from 'react';
import {connect} from 'react-redux';

//Actions
import {ChangeStars, CheckAnswer} from '../../actions/play_nine_actions';

class Button extends Component {

	render(){
		let disabled;
		let button;
		let correct = this.props.playnine.correct;

		switch(correct){
			case true:
				button =(
				<button className="btn btn-success btn-lg">
					<span className="glyphicon glyphicon-ok">
					</span>
				</button>
				);
				break

			case false:
				button = (
				<button className="btn btn-danger btn-lg">
					<span className="glyphicon glyphicon-remove">
					</span>
				</button>
				);
				break

			default:

			disabled = (this.props.playnine.selectedNumbers.length === 0)
				
				button = (
				<button className="btn btn-primary btn-lg"
					disabled={disabled} onClick={this.props.CheckAnswer}
					> =
				</button>
				)
				
		}//switch

		return(
		<div id="button-frame">
			{button}
			<br/><br/>
			<button className="btn btn-warning btn-xs"
			onClick={this.props.ChangeStars}>
				<span className="glyphicon glyphicon-refresh">
						&nbsp; {this.props.playnine.redraws}

				</span>
			</button>
		</div>
		);
	}
}

function mapStateToProps(state){
	return {
		playnine: state.playnine
	};

}

export default connect(mapStateToProps, {ChangeStars, CheckAnswer})(Button);