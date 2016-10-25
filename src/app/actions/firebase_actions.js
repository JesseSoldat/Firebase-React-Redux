
import FireBaseTools from '../utils/firebase';


import {
	REGISTER_FIREBASE_USER
} from './types';


export function registerUser(user){
	const request = FireBaseTools.registerUser(user);
	return {
		type: REGISTER_FIREBASE_USER,
		payload: request
	}
}
