import { getProducts } from '../services/getProducts';

import { productsActions, GetProductsAction } from '../types/store';

export const getProductsAction = async (): Promise<GetProductsAction> => {
	const data = await getProducts();
	return {
		action: productsActions.GETPRODUCTS,
		payload: data,
	};
};

// export const getTrips = async (): Promise<GetTripsAction> => {
// 	const trips = await TripsService.get();
// 	return {
// 		action: TripsActions.GET,
// 		payload: trips,
// 	};
// };

// export const addNewTrip = ({ payload }: Pick<AddTripAction, 'payload'>): AddTripAction => {
// 	return {
// 		action: TripsActions.ADD,
// 		payload,
// 	};
// };

// import Storage, { PersistanceKeys } from '../utils/storage';
// import { productsActions, shoppingItemsActions, AppState, Observer } from '../types/store';
// import { reducer } from './reducer';

// const emptyState: AppState = {
//   products: Product[],
//   shoppingitems: shoppingItem[],
// };

// export let appState = Storage.get<AppState>({
// 	key: PersistanceKeys.STORE,
// 	defaultValue: emptyState,
// });

// let observers: Observer[] = [];

// const persistStore = (state: AppState) => Storage.set({ key: PersistanceKeys.STORE, value: state });

// const notifyObservers = () => observers.forEach((o) => o.render());

// export const dispatch = (action: productsActions) => {
// 	const clone = JSON.parse(JSON.stringify(appState));
// 	const newState = reducer(action, clone);
// 	appState = newState;

// 	persistStore(newState);
// 	notifyObservers();
// };

// export const dispatchShop = (action: shoppingItemsActions) => {
// 	const clone = JSON.parse(JSON.stringify(appState));
// 	const newState = reducer(action, clone);
// 	appState = newState;

// 	persistStore(newState);
// 	notifyObservers();
// };

// export const addObserver = (ref: Observer) => {
// 	observers = [...observers, ref];
// };
