import { Product } from './products';
import { shoppingItem } from './shopping';

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	products: Product[];
	shoppingitems: shoppingItem[];
	// something: {};
};

export enum productsActions {
	'GETPRODUCTS' = 'GETPRODUCTS',
}

export enum shoppingItemsActions {
	'GETSHOPPINGITEMS' = 'GETSHOPPINGITEMS',
	'SAVESHOPPINGITEMS' = 'SAVESHOPPINGITEMS',
}

export interface GetProductsAction {
	action: productsActions.GETPRODUCTS;
	payload: Product[];
	// Pick<AppState, 'something'>;
}

export type Actions = GetProductsAction;
