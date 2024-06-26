import { product } from '../components/indexPadres';
import { Actions, AppState, productsActions } from '../types/store';
import { appState } from './index';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;

	switch (action) {
		case productsActions.GETPRODUCTS:
			return {
				...currentState,
				products: payload,
			};

		// case 'changedBackground':
		// 	currentState.background = playload;
		// 	break;
		default:
			return currentState;
	}
};

// import { Actions, AppState, AuthActions, TripsActions,  } from "../types/store";

// export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
//     const { action, payload } = currentAction;

//     switch (action) {
//         case AuthActions.LOGIN:
//             return {
//                 ...currentState,
//                 user: payload.user
//             }

//         case AuthActions.LOGOUT:
//             return {
//                 ...currentState,
//                 user: {
//                     userName: "",
//                     email: ""
//                 }
//             }

//         case TripsActions.ADD:
//             return {
//                 ...currentState,
//                 trips: [
//                     payload,
//                     ...currentState.trips,
//                 ]
//             }

//         case TripsActions.GET:
//             return {
//                 ...currentState,
//                 trips: payload
//             }

//         default:
//             return currentState;
//     }
// }
