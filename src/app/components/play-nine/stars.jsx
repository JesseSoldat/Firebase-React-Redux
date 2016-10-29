import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CheckGameOver} from '../../actions/play_nine_actions';

class Stars extends Component {

	componentDidUpdate(){
	
		this.CheckGame();
		
	}

	CheckGame(){
		let stars = this.props.playnine.stars;
		let doneStatus = this.props.playnine.doneStatus;
		let usedNumbers = this.props.playnine.usedNumbers;
		let possibleNumbers = [];
		let redraws = this.props.playnine.redraws;

		function possibleCombinationSum(arr, n) {
				// console.log('possibleCombinationSum');
				;
			  if (arr.indexOf(n) >= 0) { return true; }
			  if (arr[0] > n) { return false; }
			  if (arr[arr.length - 1] > n) {
			    arr.pop();
			    return possibleCombinationSum(arr, n);
			  }
			  var listSize = arr.length, combinationsCount = (1 << listSize)
			  for (var i = 1; i < combinationsCount ; i++ ) {
			    var combinationSum = 0;
			    for (var j=0 ; j < listSize ; j++) {
			      if (i & (1 << j)) { combinationSum += arr[j]; }
			    }
			    if (n === combinationSum) { return true; }
			  }
			  return false;
			}

		for(let i = 1; i <= 9; i++){
					if(usedNumbers.indexOf(i) < 0) {
						possibleNumbers.push(i);
					}
				}

		if(usedNumbers.length === 9){
					// return 'You Win!'
					console.log('You Win!');
					this.props.CheckGameOver('You Win!');


		}
		if(redraws === 0 && !possibleCombinationSum(possibleNumbers, stars)){
					console.log('Game Over!');
					this.props.CheckGameOver({status: 'Game Over!', redraws: 5});

					
		}

		// this.props.CheckGameOver();
		// console.log(stars, usedNumbers, possibleNumbers);
	}

	render(){
		
		let stars = [];

		for(let i = 0; i < this.props.numberOfStars; i++){
			stars.push(
				<span key={i} className="glyphicon glyphicon-star"></span>
			);
		}
		return(
		<div id="stars-frame">
			<div className="well">
				{stars}
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

export default connect(mapStateToProps, {CheckGameOver})(Stars);
