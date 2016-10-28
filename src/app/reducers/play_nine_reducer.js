import {
	CHANGE_NUMBER_OF_STARS,
} from '../actions/types';

function randomNumber(){
	return Math.floor(Math.random()*9) + 1;
}

const INITIALSTATE = {
	stars: randomNumber()
}

export default function(state = INITIALSTATE, action){
	switch(action.type){
		case CHANGE_NUMBER_OF_STARS:
			return {
				...state,
				stars: randomNumber()
			};
		default:
			return state;
	}
}