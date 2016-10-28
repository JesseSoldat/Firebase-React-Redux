import {
	CHANGE_NUMBER_OF_STARS,
	SELECT_NUMBER,
	UNSELECT_NUMBER,
	CHECK_ANSWER
} from '../actions/types';

function randomNumber(){
	return Math.floor(Math.random()*9) + 1;
}

const INITIALSTATE = {
	stars: randomNumber(),
	doneStatus: null,
	selectedNumbers: [],
	correct: null,
	redraws: 5
	

}

export default function(state = INITIALSTATE, action){
	let selectedNumbers = [];
	let indexOfNumber;

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
			
			if(indexOfNumber < 0) {
				selectedNumbers.push(action.payload);
				// console.log(selectedNumbers);
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

		default:
			return state;
	}
}