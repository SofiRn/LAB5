/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/product/product.css":
/*!********************************************!*\
  !*** ./src/components/product/product.css ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"section {\\r\\n\\tbackground-color: grey;\\r\\n\\twidth: 400px;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tjustify-content: space-between;\\r\\n}\\r\\nimg {\\r\\n\\twidth: 400px;\\r\\n\\theight: 400px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/product/product.css?");

/***/ }),

/***/ "./src/screens/styles.css":
/*!********************************!*\
  !*** ./src/screens/styles.css ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/styles.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/indexPadres.ts":
/*!***************************************!*\
  !*** ./src/components/indexPadres.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"product\": () => (/* reexport safe */ _product_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _product_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product/product */ \"./src/components/product/product.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/indexPadres.ts?");

/***/ }),

/***/ "./src/components/product/product.ts":
/*!*******************************************!*\
  !*** ./src/components/product/product.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribute\": () => (/* binding */ Attribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _product_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.css */ \"./src/components/product/product.css\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/styles */ \"./src/utils/styles.ts\");\n\n\n// import '../../export';\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"image\"] = \"image\";\n    Attribute[\"tittle\"] = \"tittle\";\n    Attribute[\"description\"] = \"description\";\n    Attribute[\"category\"] = \"category\";\n    Attribute[\"price\"] = \"price\";\n    Attribute[\"rating\"] = \"rating\";\n})(Attribute || (Attribute = {}));\nclass product extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            image: null,\n            tittle: null,\n            description: null,\n            category: null,\n            price: null,\n            rating: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            (0,_utils_styles__WEBPACK_IMPORTED_MODULE_1__.loadCss)(this, _product_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n            this.shadowRoot.innerHTML = `\r\n      <section>\r\n\r\n      <img src=\"${this.image}\">\r\n      <h3 class=\"text\">${this.tittle}</h3>\r\n      <p class=\"text\">${this.description}</p>\r\n      <p class=\"text\">${this.category}</p>\r\n      <p class=\"text\">${this.price}</p>\r\n      <p class=\"text\">${this.rating}</p>\r\n\t\t\t<button id=\"guardar\">añadir al carrito</button>\r\n\r\n      </section>\r\n      `;\n        }\n        const cssProduct = this.ownerDocument.createElement('style');\n        cssProduct.innerHTML = _product_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cssProduct);\n        document.addEventListener('DOMContentLoaded', () => {\n            const guardar = document.getElementById('guardar');\n            if (guardar !== null) {\n                guardar.addEventListener('click', () => {\n                    // Obtén la información del producto que deseas guardar\n                    const producto = {\n                        image: this.image,\n                        tittle: this.tittle,\n                        price: this.price,\n                    };\n                    // Obtén los productos guardados previamente del localStorage (si los hay)\n                    const productosGuardados = JSON.parse(localStorage.getItem('shoppingItems') || '[]');\n                    // Agrega el nuevo producto al array de productos guardados\n                    productosGuardados.push(producto);\n                    // Guarda el array actualizado en el localStorage\n                    localStorage.setItem('shoppingItems', JSON.stringify(productosGuardados));\n                    // Opcional: proporciona algún tipo de retroalimentación al usuario\n                    alert('Producto añadido al carrito.');\n                });\n            }\n            else {\n                console.error('El botón guardar no fue encontrado.');\n            }\n        });\n        // \tdocument.addEventListener('DOMContentLoaded', () => {\n        // \t\tconst guardar = document.getElementById('guardar');\n        // \t\tif (guardar !== null) {\n        // \t\t\t\tguardar.addEventListener('click', () => {\n        // \t\t\t\t\t\t// Tu lógica para guardar en localStorage\n        // \t\t\t\t});\n        // \t\t} else {\n        // \t\t\t\tconsole.error('El botón guardarBtn no fue encontrado.');\n        // \t\t}\n        // });\n        // // Selecciona el botón\n        // const guardar = document.getElementById('guardar');\n        // // Verifica si guardarBtn no es nulo antes de agregar el event listener\n        // if (guardar !== null) {\n        // \tguardar.addEventListener('click', () => {\n        // \t\t// Obtén la información que deseas guardar\n        // \t\tconst informacion = 'Información a guardar';\n        // \t\t// Guarda la información en el localStorage\n        // \t\tlocalStorage.setItem('informacion', informacion);\n        // \t\t// Opcional: proporciona algún tipo de retroalimentación al usuario\n        // \t\talert('Información guardada en localStorage.');\n        // \t});\n        // } else {\n        // \tconsole.error('El botón guardar no fue encontrado.');\n        // }\n        // const button = this.ownerDocument.createElement(\"button\");\n        //         button.textContent = 'Show People';\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (product);\ncustomElements.define('my-product', product);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/product/product.ts?");

/***/ }),

/***/ "./src/indexAbuelo.ts":
/*!****************************!*\
  !*** ./src/indexAbuelo.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_indexPadres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/indexPadres */ \"./src/components/indexPadres.ts\");\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n/* harmony import */ var _components_product_product_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product/product.css */ \"./src/components/product/product.css\");\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        // const dataProducts = await getProducts();\n        // console.log(dataProducts);\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/indexAbuelo.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_product_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product/product */ \"./src/components/product/product.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/screens/styles.css\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.addObserver)(this);\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const action = yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_2__.getProductsAction)();\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)(action);\n        });\n    }\n    render() {\n        _store_index__WEBPACK_IMPORTED_MODULE_1__.appState.products.forEach((stores) => {\n            var _a;\n            const card = this.ownerDocument.createElement('my-product');\n            card.setAttribute(_components_product_product__WEBPACK_IMPORTED_MODULE_0__.Attribute.image, stores.image);\n            card.setAttribute(_components_product_product__WEBPACK_IMPORTED_MODULE_0__.Attribute.tittle, stores.title);\n            card.setAttribute(_components_product_product__WEBPACK_IMPORTED_MODULE_0__.Attribute.description, stores.description);\n            card.setAttribute(_components_product_product__WEBPACK_IMPORTED_MODULE_0__.Attribute.category, stores.category);\n            card.setAttribute(_components_product_product__WEBPACK_IMPORTED_MODULE_0__.Attribute.price, stores.price);\n            card.setAttribute(_components_product_product__WEBPACK_IMPORTED_MODULE_0__.Attribute.rating, stores.rating.rate);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);\n        });\n    }\n}\ncustomElements.define('app-dashboard', Dashboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/getProducts.ts":
/*!*************************************!*\
  !*** ./src/services/getProducts.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProducts\": () => (/* binding */ getProducts)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst getProducts = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const dataProducts = yield fetch('https://fakestoreapi.com/products').then((res) => res.json());\n        console.log(dataProducts);\n        return dataProducts;\n    }\n    catch (error) {\n        console.log('error', error);\n        return error;\n    }\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/getProducts.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductsAction\": () => (/* binding */ getProductsAction)\n/* harmony export */ });\n/* harmony import */ var _services_getProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getProducts */ \"./src/services/getProducts.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst getProductsAction = () => __awaiter(void 0, void 0, void 0, function* () {\n    const data = yield (0,_services_getProducts__WEBPACK_IMPORTED_MODULE_0__.getProducts)();\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.productsActions.GETPRODUCTS,\n        payload: data,\n    };\n});\n// export const getTrips = async (): Promise<GetTripsAction> => {\n// \tconst trips = await TripsService.get();\n// \treturn {\n// \t\taction: TripsActions.GET,\n// \t\tpayload: trips,\n// \t};\n// };\n// export const addNewTrip = ({ payload }: Pick<AddTripAction, 'payload'>): AddTripAction => {\n// \treturn {\n// \t\taction: TripsActions.ADD,\n// \t\tpayload,\n// \t};\n// };\n// import Storage, { PersistanceKeys } from '../utils/storage';\n// import { productsActions, shoppingItemsActions, AppState, Observer } from '../types/store';\n// import { reducer } from './reducer';\n// const emptyState: AppState = {\n//   products: Product[],\n//   shoppingitems: shoppingItem[],\n// };\n// export let appState = Storage.get<AppState>({\n// \tkey: PersistanceKeys.STORE,\n// \tdefaultValue: emptyState,\n// });\n// let observers: Observer[] = [];\n// const persistStore = (state: AppState) => Storage.set({ key: PersistanceKeys.STORE, value: state });\n// const notifyObservers = () => observers.forEach((o) => o.render());\n// export const dispatch = (action: productsActions) => {\n// \tconst clone = JSON.parse(JSON.stringify(appState));\n// \tconst newState = reducer(action, clone);\n// \tappState = newState;\n// \tpersistStore(newState);\n// \tnotifyObservers();\n// };\n// export const dispatchShop = (action: shoppingItemsActions) => {\n// \tconst clone = JSON.parse(JSON.stringify(appState));\n// \tconst newState = reducer(action, clone);\n// \tappState = newState;\n// \tpersistStore(newState);\n// \tnotifyObservers();\n// };\n// export const addObserver = (ref: Observer) => {\n// \tobservers = [...observers, ref];\n// };\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\nlet appState = {\n    products: [],\n    shoppingitems: [],\n};\nlet observers = [];\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    appState = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer)(action, clone);\n    observers.forEach((o) => o.render());\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.productsActions.GETPRODUCTS:\n            return Object.assign(Object.assign({}, currentState), { products: payload });\n        // case 'changedBackground':\n        // \tcurrentState.background = playload;\n        // \tbreak;\n        default:\n            return currentState;\n    }\n};\n// import { Actions, AppState, AuthActions, TripsActions,  } from \"../types/store\";\n// export const reducer = (currentAction: Actions, currentState: AppState): AppState => {\n//     const { action, payload } = currentAction;\n//     switch (action) {\n//         case AuthActions.LOGIN:\n//             return {\n//                 ...currentState,\n//                 user: payload.user\n//             }\n//         case AuthActions.LOGOUT:\n//             return {\n//                 ...currentState,\n//                 user: {\n//                     userName: \"\",\n//                     email: \"\"\n//                 }\n//             }\n//         case TripsActions.ADD:\n//             return {\n//                 ...currentState,\n//                 trips: [\n//                     payload,\n//                     ...currentState.trips,\n//                 ]\n//             }\n//         case TripsActions.GET:\n//             return {\n//                 ...currentState,\n//                 trips: payload\n//             }\n//         default:\n//             return currentState;\n//     }\n// }\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productsActions\": () => (/* binding */ productsActions),\n/* harmony export */   \"shoppingItemsActions\": () => (/* binding */ shoppingItemsActions)\n/* harmony export */ });\nvar productsActions;\n(function (productsActions) {\n    productsActions[\"GETPRODUCTS\"] = \"GETPRODUCTS\";\n})(productsActions || (productsActions = {}));\nvar shoppingItemsActions;\n(function (shoppingItemsActions) {\n    shoppingItemsActions[\"GETSHOPPINGITEMS\"] = \"GETSHOPPINGITEMS\";\n    shoppingItemsActions[\"SAVESHOPPINGITEMS\"] = \"SAVESHOPPINGITEMS\";\n})(shoppingItemsActions || (shoppingItemsActions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/styles.ts":
/*!*****************************!*\
  !*** ./src/utils/styles.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadCss\": () => (/* binding */ loadCss)\n/* harmony export */ });\nconst loadCss = (elRef, styles) => {\n    var _a;\n    const css = elRef.ownerDocument.createElement(\"style\");\n    css.innerHTML = styles;\n    (_a = elRef.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/styles.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/indexAbuelo.ts");
/******/ 	
/******/ })()
;