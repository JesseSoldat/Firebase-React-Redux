import {
	CHANGE_NUMBER_OF_STARS,
	SELECT_NUMBER,
	UNSELECT_NUMBER,
	CHECK_ANSWER,
	ACCEPT_ANSWER
} from '../actions/types';

function randomNumber(){
	return Math.floor(Math.random()*9) + 1;
}

const INITIALSTATE = {
	stars: randomNumber(),
	doneStatus: null,
	selectedNumbers: [],
	correct: null,
	redraws: 5,
	usedNumbers: []
	
}

export default function(state = INITIALSTATE, action){
	let selectedNumbers = [];
	let indexOfNumber;
	let indexOfUsed; 
	let usedNumbers = [];
	let stars;

	switch(action.type){

		case CHANGE_NUMBER_OF_STARS:
			return {
				...state,
				stars: randomNumber(),
				correct: null,
				selectedNumbers: [],
				redraws: state.redraws -1

			};

		case SELECT_NUMBER:
			indexOfNumber = state.selectedNumbers.indexOf(action.payload);
			indexOfUsed = state.usedNumbers.indexOf(action.payload);
			
			
			if(indexOfNumber < 0 && indexOfUsed < 0) {
				selectedNumbers.push(action.payload);
			
			}
			
			return {
				...state,
				selectedNumbers: state.selectedNumbers.concat(selectedNumbers),
				correct: null
				
			};

		case UNSELECT_NUMBER:
			selectedNumbers = state.selectedNumbers;
			indexOfNumber = selectedNumbers.indexOf(action.payload);
			selectedNumbers.splice(indexOfNumber, 1);
			return {
				...state,
				selectedNumbers: selectedNumbers,
				correct: null
			};

		case CHECK_ANSWER:
			let sum = state.selectedNumbers.reduce( (p ,n) => p + n);
			let correct = state.stars === sum;
			return {
				...state,
				correct: correct
			};



		case ACCEPT_ANSWER:

			function possibleCombinationSum(arr, n) {
				console.log('possibleCombinationSum')
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

			function possibleSolution(){
				let possibleNumbers = [];
				let stars = state.stars;
		

				for(let i = 1; i <= 9; i++){
					if(state.usedNumbers.indexOf(i) < 0) {
						possibleNumbers.push(i);
					}
				}


				console.log('Used:',usedNumbers);

				console.log('Possible:', possibleNumbers);

				console.log('Stars', stars);

				return possibleCombinationSum(possibleNumbers, stars);

			}

			function updateDoneStatus(){
				if(state.usedNumbers.length === 9){
					return 'You Win!';
				}
				if(state.redraws === 0 && !possibleSolution()){
					return 'Game Over!';
				}
				return null;
			}
			
			usedNumbers = state.usedNumbers.concat(state.selectedNumbers);
			
			return {
				...state,
				selectedNumbers: [],
				usedNumbers: usedNumbers,
				correct: null,
				stars: randomNumber(),
				doneStatus: updateDoneStatus()
				

			};

		default:
			return state;
	}
}