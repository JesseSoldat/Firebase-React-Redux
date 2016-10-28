import React, {Component} from 'react';
import {connect} from 'react-redux';

import {like, dislike} from '../../actions/like_actions';

class LikeButton extends Component {

	render(){
		return(
		<div>
			<h3>Like: {this.props.counter.like}</h3>
			<h3>Dislike: {this.props.counter.dislike}</h3>
			<button onClick={this.props.like}>+</button>
			<button onClick={this.props.dislike}>-</button>
		</div>
		)
	}
}

function mapStateToProps(state){
	return {
		counter: state.counter
	};

}

export default connect(mapStateToProps, {like, dislike})(LikeButton);
