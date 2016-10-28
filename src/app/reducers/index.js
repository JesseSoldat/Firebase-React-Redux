import {combineReducers} from 'redux';
import FireBaseUserReducer from './firebase_user_reducer';
import LikeButtonReducer from './like_button_reducer';
import PlayNineReducer from './play_nine_reducer';

const rootReducer = 
	combineReducers({
		currentUser: FireBaseUserReducer,
		counter: LikeButtonReducer,
		playnine: PlayNineReducer
	});

export default rootReducer;


