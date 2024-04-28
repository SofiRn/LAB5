import { Product } from '../types/products';
import product, { Attribute } from '../components/product/product';
import { addObserver, appState, dispatch } from '../store/index';
import { getProductsAction } from '../store/actions';
import './styles.css';

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	async connectedCallback() {
		const action = await getProductsAction();
		dispatch(action);
	}

	render() {
		appState.products.forEach((stores: any) => {
			const card = this.ownerDocument.createElement('my-product') as product;
			card.setAttribute(Attribute.image, stores.image);
			card.setAttribute(Attribute.tittle, stores.title);
			card.setAttribute(Attribute.description, stores.description);
			card.setAttribute(Attribute.category, stores.category);
			card.setAttribute(Attribute.price, stores.price);
			card.setAttribute(Attribute.rating, stores.rating.rate);
			this.shadowRoot?.appendChild(card);
		});
	}
}

customElements.define('app-dashboard', Dashboard);
