import {
	CHANGE_NUMBER_OF_STARS,
	SELECT_NUMBER
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
			console.log(action.payload);
			return {
				...state,
				selectedNumbers: state.selectedNumbers.concat(action.payload)
			};
		default:
			return state;
	}
}