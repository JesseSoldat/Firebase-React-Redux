import {
	CHANGE_NUMBER_OF_STARS,
	SELECT_NUMBER,
	UNSELECT_NUMBER
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

export function UnSelectNumber(number){
	return {
		type: UNSELECT_NUMBER,
		payload: number
	}
}

