import {
	LIKE_BUTTON_INCREMENT,
	LIKE_BUTTON_DECREMENT
} from './types';

export function like(){
	return {
		type: LIKE_BUTTON_INCREMENT
	
	}
}

export function dislike(){
	return {
		type: LIKE_BUTTON_DECREMENT
	}
}

