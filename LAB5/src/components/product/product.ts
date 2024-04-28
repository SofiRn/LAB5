import styles from './product.css';
import { setAttributes } from '../../utils/atributtes';
import { loadCss } from '../../utils/styles';
// import '../../export';

export enum Attribute {
	'image' = 'image',
	'tittle' = 'tittle',
	'description' = 'description',
	'category' = 'category',
	'price' = 'price',
	'rating' = 'rating',
}

class product extends HTMLElement {
	image?: string;
	tittle?: string;
	description?: string;
	category?: string;
	price?: string;
	rating?: string;
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			tittle: null,
			description: null,
			category: null,
			price: null,
			rating: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			loadCss(this, styles);
			this.shadowRoot.innerHTML = `
      <section>

      <img src="${this.image}">
      <h3 class="text">${this.tittle}</h3>
      <p class="text">${this.description}</p>
      <p class="text">${this.category}</p>
      <p class="text">${this.price}</p>
      <p class="text">${this.rating}</p>
			<button id="guardar">añadir al carrito</button>

      </section>
      `;
		}
		const cssProduct = this.ownerDocument.createElement('style');
		cssProduct.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProduct);

		document.addEventListener('DOMContentLoaded', () => {
			const guardar = document.getElementById('guardar');
			if (guardar !== null) {
				guardar.addEventListener('click', () => {
					// Obtén la información del producto que deseas guardar
					const producto = {
						image: this.image,
						tittle: this.tittle,
						price: this.price,
					};

					// Obtén los productos guardados previamente del localStorage (si los hay)
					const productosGuardados = JSON.parse(localStorage.getItem('shoppingItems') || '[]');

					// Agrega el nuevo producto al array de productos guardados
					productosGuardados.push(producto);

					// Guarda el array actualizado en el localStorage
					localStorage.setItem('shoppingItems', JSON.stringify(productosGuardados));

					// Opcional: proporciona algún tipo de retroalimentación al usuario
					alert('Producto añadido al carrito.');
				});
			} else {
				console.error('El botón guardar no fue encontrado.');
			}
		});

		// 	document.addEventListener('DOMContentLoaded', () => {
		// 		const guardar = document.getElementById('guardar');
		// 		if (guardar !== null) {
		// 				guardar.addEventListener('click', () => {
		// 						// Tu lógica para guardar en localStorage
		// 				});
		// 		} else {
		// 				console.error('El botón guardarBtn no fue encontrado.');
		// 		}
		// });

		// // Selecciona el botón
		// const guardar = document.getElementById('guardar');

		// // Verifica si guardarBtn no es nulo antes de agregar el event listener
		// if (guardar !== null) {
		// 	guardar.addEventListener('click', () => {
		// 		// Obtén la información que deseas guardar
		// 		const informacion = 'Información a guardar';

		// 		// Guarda la información en el localStorage
		// 		localStorage.setItem('informacion', informacion);

		// 		// Opcional: proporciona algún tipo de retroalimentación al usuario
		// 		alert('Información guardada en localStorage.');
		// 	});
		// } else {
		// 	console.error('El botón guardar no fue encontrado.');
		// }

		// const button = this.ownerDocument.createElement("button");
		//         button.textContent = 'Show People';
	}
}

export default product;
customElements.define('my-product', product);
