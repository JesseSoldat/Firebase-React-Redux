import {
	CHANGE_NUMBER_OF_STARS,
	SELECT_NUMBER,
	UNSELECT_NUMBER
} from '../actions/types';

function randomNumber(){
	return Math.floor(Math.random()*9) + 1;
}

const INITIALSTATE = {
	stars: randomNumber(),
	doneStatus: null,
	selectedNumbers: [],
	correct: null
	

}

export default function(state = INITIALSTATE, action){
	let selectedNumbers = [];
	let indexOfNumber;

	switch(action.type){
		case CHANGE_NUMBER_OF_STARS:
			return {
				...state,
				stars: randomNumber()
			};
		case SELECT_NUMBER:
			indexOfNumber = state.selectedNumbers.indexOf(action.payload);
			
			if(indexOfNumber < 0) {
				selectedNumbers.push(action.payload);
				// console.log(selectedNumbers);
			}
			
			return {
				...state,
				selectedNumbers: state.selectedNumbers.concat(selectedNumbers)
				
			};
		case UNSELECT_NUMBER:
			selectedNumbers = state.selectedNumbers;
			indexOfNumber = selectedNumbers.indexOf(action.payload);
			selectedNumbers.splice(indexOfNumber, 1);
			return {
				...state,
				selectedNumbers: selectedNumbers
			}
		default:
			return state;
	}
}