import {
	REGISTER_FIREBASE_USER,
  LOGIN_FIREBASE_USER,
  LOGOUT_FIREBASE_USER

} from '../actions/types';

export default function (state = null, action){
	switch (action.type) {
		case REGISTER_FIREBASE_USER:
  		console.log(action.payload);
			return action.payload;
  	case LOGIN_FIREBASE_USER:
  		console.log(action.payload);
			return action.payload;
  	case LOGOUT_FIREBASE_USER:
  		console.log(action.payload);
  		return action.payload;

	}
	return state;
}