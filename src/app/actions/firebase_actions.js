import FireBaseTools from '../utils/firebase';

import {
	REGISTER_FIREBASE_USER,
	LOGIN_FIREBASE_USER,
  LOGOUT_FIREBASE_USER
} from './types';


export function registerUser(user){
	const request = FireBaseTools.registerUser(user);
	return {
		type: REGISTER_FIREBASE_USER,
		payload: request
	}
}

export function loginUser(user){
	const request = FireBaseTools.loginUser(user);
	return {
		type: LOGIN_FIREBASE_USER,
		payload: request
	}
}

export function logoutUser(user){
	const request = FireBaseTools.logoutUser(user);
	return {
		type: LOGOUT_FIREBASE_USER,
		payload: request
	}
}
