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
	selectedNumbers: []
	

}

export default function(state = INITIALSTATE, action){
	switch(action.type){
		case CHANGE_NUMBER_OF_STARS:
			return {
				...state,
				stars: randomNumber()
			};
		case SELECT_NUMBER:
			return {
				...state,
				selectedNumbers: state.selectedNumbers.concat(action.payload)
			};
		case UNSELECT_NUMBER:
			let selectedNumbers = state.selectedNumbers;
			let indexOfNumber = selectedNumbers.indexOf(action.payload);
			selectedNumbers.splice(indexOfNumber, 1);
			return {
				...state,
				selectedNumbers: selectedNumbers
			}
		default:
			return state;
	}
}