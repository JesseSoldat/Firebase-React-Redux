import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  FETCH_FIREBASE_USER,
  UPDATE_FIREBASE_USER,
  CHANGE_FIREBASE_USER_PASSWORD,
	REGISTER_FIREBASE_USER,
  LOGIN_FIREBASE_USER,
  LOGOUT_FIREBASE_USER,

} from '../actions/types';

export default function (state = {
  currentUser: {
    email: '',
    displayName: ''
  }
}, action){
	switch (action.type) {
    case LOGIN_WITH_PROVIDER_FIREBASE:
      console.log(action.payload, state);
      return action.payload;

		case FETCH_FIREBASE_USER:
      state = {
        ...state,
        email: action.payload.email,
        displayName: action.payload.displayName
      
      }
			console.log(action.payload, state);
      return action.payload;

    case UPDATE_FIREBASE_USER:
      state = {
        ...state,
        email: action.payload.email,
        displayName: action.payload.displayName
      
      }
      console.log(action.payload, state);
      return action.payload;

    case CHANGE_FIREBASE_USER_PASSWORD:
      state = {
        ...state
      }
      console.log(action.payload, state);
      return action.payload;


		case REGISTER_FIREBASE_USER:
      state = {
        ...state,
        email: action.payload.email,
        displayName: action.payload.displayName
      
      }
  		console.log(action.payload, state);
			return action.payload;

  	case LOGIN_FIREBASE_USER:
      state = {
        ...state,
        email: action.payload.email,
        displayName: action.payload.displayName
        
      }
      console.log(action.payload, state);
			return action.payload;

  	case LOGOUT_FIREBASE_USER:
      state = {
        ...state,
        email: '',
        displayName: ''
        
      }
  		console.log(action.payload, state);
  		return action.payload;

	}
	return state;
}