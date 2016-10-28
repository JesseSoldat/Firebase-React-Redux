import {
	CHANGE_NUMBER_OF_STARS,
	SELECT_NUMBER
} from './types';

export function ChangeStars(){
	return {
		type: CHANGE_NUMBER_OF_STARS
	}
}

export function SelectNumber(number){
	return {
		type: SELECT_NUMBER,
		payload: number
	
	}
}


