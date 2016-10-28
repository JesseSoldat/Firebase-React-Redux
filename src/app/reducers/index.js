import {combineReducers} from 'redux';
import FireBaseUserReducer from './firebase_user_reducer';
import LikeButtonReducer from './like_button_reducer';

const rootReducer = 
	combineReducers({
		currentUser: FireBaseUserReducer,
		counter: LikeButtonReducer
	});

export default rootReducer;


