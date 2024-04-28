import './components/indexPadres';
import './screens/dashboard';
import styles from './components/product/product.css';
import { getProducts } from './services/getProducts';
import './components/product/product.css'


class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		// const dataProducts = await getProducts();
		// console.log(dataProducts);
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('app-dashboard');
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', AppContainer);
