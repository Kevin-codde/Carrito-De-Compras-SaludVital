import './style.css';
import renderizar from './ui/dom.js';
import medicamentos from './data/productos.json';
import logic_Cart from './logic/cart.js';

renderizar(medicamentos);
var listaBotones = document.querySelectorAll('.btn-agregar');
logic_Cart(listaBotones);




