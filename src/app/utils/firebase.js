import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();



let FireBaseTools = {

	// getProvider: (provider) => {
	// 	switch (provider){
	// 		case 'email':
	// 			return new firebase.auth.EmailAuthProvider();
	// 			default:
	// 	}
	// }



	// registerUser: (user) => {
	// 	return firebaseAuth.createUserWithEmailAndPassword(user.email, user.password).then(user => {
	// 		return user;
	// 	}).catch(error => {
	// 		return {
	// 			errorCode: error.code,
	// 			errorMessage: error.message
	// 		};
	// 	});
	// }

}

export default FireBaseTools;

