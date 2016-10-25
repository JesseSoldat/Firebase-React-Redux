import {
	REGISTER_FIREBASE_USER
} from '../actions/types';

export default function (state = null, action){
	switch (action.type) {
		case REGISTER_FIREBASE_USER:
			return action.payload;
	}
	return state;
}