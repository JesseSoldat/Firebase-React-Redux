import {
	LIKE_BUTTON_INCREMENT,
	LIKE_BUTTON_DECREMENT
} from '../actions/types';

const INITIALSTATE = {
	like: 0,
	dislike: 0
}
export default function(state = INITIALSTATE, action){
	switch (action.type) {
		case LIKE_BUTTON_INCREMENT:
			return {
				...state,
				like: state.like + 1
			};
		case LIKE_BUTTON_DECREMENT:
			return {
				...state,
				dislike: state.dislike -1
			};
		default: 
			return state;
			
	}
	
}