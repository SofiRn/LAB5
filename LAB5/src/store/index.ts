import { reducer } from './reducer';
import Storage from '../utils/storage';
import { PersistanceKeys } from '../utils/storage';
import { Actions, AppState, Observer } from '../types/store';

export let appState: AppState = {
	products: [],
	shoppingitems: [],
};

let observers: Observer[] = [];

export const dispatch = (action: Actions) => {
	const clone = JSON.parse(JSON.stringify(appState));
	appState = reducer(action, clone);
	observers.forEach((o) => o.render());
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};
