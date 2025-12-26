import './style.css';
import renderizar from './ui/dom.js';
import medicamentos from './data/productos.json';
import * as carrito from './logic/cart.js';

renderizar(medicamentos);
var listaBotones = Array.from(document.querySelectorAll('.btn-agregar'));

carrito.addCar(listaBotones,medicamentos);

