/**
 * Se orquesta todo
 */
import './style.css';
import {renderizar} from './ui/dom.js';
import medicamentos from './data/productos.json';
import {logic_Cart,delete_Products} from './logic/cart.js';

renderizar();

var listaBotones = Array.from(document.querySelectorAll('.btn-agregar'));
var listaCajas = Array.from(document.querySelectorAll('.del-product'));

logic_Cart(listaBotones,medicamentos);

delete_Products(document.querySelector('.boton-Quitar'),listaCajas)